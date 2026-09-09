/**
 * Accès au contenu de la section « Règlement intérieur ».
 *
 * Point d'entrée unique des pages : elles ne touchent jamais aux fichiers de
 * contenu directement. On y trouve la banque de questions, les questionnaires
 * prêts, le texte du règlement, et l'encodage des questionnaires composés par
 * les enseignants — celui qui voyage dans le lien partagé.
 *
 * Module isomorphe : aucune API de navigateur, aucune API Node. L'encodage
 * n'utilise que TextEncoder/TextDecoder, présents des deux côtés.
 */

import { CHAPITRES, REMARQUES_NUMEROTATION } from "@/content/reglement/reglement";
import { MODELES } from "@/content/reglement/modeles";
import { QUESTIONS_BANQUE } from "@/content/reglement/questions-banque";
import { QUESTIONS_PARENTS } from "@/content/reglement/questions-parents";
import { THEMES, TITRE_THEME } from "@/content/reglement/themes";
import type {
  ArticleReglement,
  ModeleQuiz,
  QuestionReglement,
  QuizCompose,
} from "@/content/reglement/types";

export { CHAPITRES, MODELES, REMARQUES_NUMEROTATION, THEMES, TITRE_THEME };

/* ------------------------------------------------------------------ */
/* Banque                                                              */
/* ------------------------------------------------------------------ */

/** Toutes les questions disponibles, questionnaire parents compris. */
export const BANQUE: QuestionReglement[] = [
  ...QUESTIONS_PARENTS,
  ...QUESTIONS_BANQUE,
];

const PAR_ID = new Map(BANQUE.map((question) => [question.id, question]));

export function getQuestion(id: string): QuestionReglement | undefined {
  return PAR_ID.get(id);
}

/** Les questions correspondant à une liste d'identifiants, dans l'ordre. */
export function questionsDe(ids: string[]): QuestionReglement[] {
  return ids
    .map((id) => PAR_ID.get(id))
    .filter((question): question is QuestionReglement => question !== undefined);
}

/** Nombre de questions par thème — affiché dans le créateur. */
export function effectifsParTheme(): Record<string, number> {
  const comptes: Record<string, number> = {};
  for (const theme of THEMES) comptes[theme.cle] = 0;
  for (const question of BANQUE) {
    comptes[question.theme] = (comptes[question.theme] ?? 0) + 1;
  }
  return comptes;
}

/* ------------------------------------------------------------------ */
/* Questionnaires prêts                                                */
/* ------------------------------------------------------------------ */

export function getModele(slug: string): ModeleQuiz | undefined {
  return MODELES.find((modele) => modele.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Le texte du règlement                                               */
/* ------------------------------------------------------------------ */

/** Ancre d'un article dans la page du règlement : « 4.7.1 » → « art-4-7-1 ». */
export function ancreArticle(numero: string): string {
  return `art-${numero.replace(/\./g, "-")}`;
}

/** Lien profond vers un article, utilisé par les corrigés. */
export function lienArticle(numero: string): string {
  return `/reglement-interieur/reglement#${ancreArticle(numero)}`;
}

/**
 * Le premier article portant ce numéro. Le document en réutilise certains :
 * on renvoie le premier, et la page du règlement les affiche tous.
 */
export function articleParNumero(
  numero: string,
): ArticleReglement | undefined {
  for (const chapitre of CHAPITRES) {
    for (const article of chapitre.articles) {
      if (article.numero === numero) return article;
    }
  }
  return undefined;
}

/** Le règlement est-il transcrit ? Les pages s'adaptent sinon. */
export function reglementDisponible(): boolean {
  return CHAPITRES.some((chapitre) => chapitre.articles.length > 0);
}

/* ------------------------------------------------------------------ */
/* Questionnaires composés : encodage du lien                          */
/* ------------------------------------------------------------------ */

/*
  Un questionnaire composé n'est pas enregistré côté serveur : il tient
  entier dans son adresse. L'enseignant garde donc la main sur ce qu'il
  partage, et le site n'a aucune donnée à conserver.
*/

function versBase64Url(octets: Uint8Array): string {
  let binaire = "";
  for (const octet of octets) binaire += String.fromCharCode(octet);
  const base64 =
    typeof btoa === "function"
      ? btoa(binaire)
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis as any).Buffer.from(binaire, "binary").toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function depuisBase64Url(texte: string): Uint8Array {
  const base64 = texte.replace(/-/g, "+").replace(/_/g, "/");
  const complet = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binaire =
    typeof atob === "function"
      ? atob(complet)
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (globalThis as any).Buffer.from(complet, "base64").toString("binary");
  const octets = new Uint8Array(binaire.length);
  for (let index = 0; index < binaire.length; index += 1) {
    octets[index] = binaire.charCodeAt(index);
  }
  return octets;
}

export function encoderQuiz(quiz: QuizCompose): string {
  const octets = new TextEncoder().encode(JSON.stringify(quiz));
  return versBase64Url(octets);
}

/**
 * Clé de stockage local d'un questionnaire composé.
 *
 * Elle dérive du contenu du lien : deux personnes qui ouvrent le même lien
 * retrouvent chacune ses propres réponses, et un lien modifié repart d'un
 * questionnaire vierge plutôt que de reprendre des réponses qui ne
 * correspondent plus aux questions.
 */
export function cleQuiz(parametre: string): string {
  let empreinte = 5381;
  for (let index = 0; index < parametre.length; index += 1) {
    empreinte = ((empreinte << 5) + empreinte + parametre.charCodeAt(index)) | 0;
  }
  return `compose-${(empreinte >>> 0).toString(36)}`;
}

/** Longueurs plafonnées : l'adresse est recopiée à la main en salle. */
const MAX_TITRE = 120;
const MAX_QUESTIONS = 60;
const MAX_TEXTE = 400;

function texteSur(valeur: unknown, limite: number): string {
  return typeof valeur === "string" ? valeur.trim().slice(0, limite) : "";
}

/**
 * Relit la charge d'un lien. Tolérante par construction : un lien tronqué par
 * un client de messagerie ne doit pas casser la page, seulement donner moins
 * de questions. Renvoie null si rien d'exploitable n'en sort.
 */
export function decoderQuiz(parametre: string): QuizCompose | null {
  let brut: unknown;
  try {
    const texte = new TextDecoder().decode(depuisBase64Url(parametre));
    brut = JSON.parse(texte);
  } catch {
    return null;
  }

  if (typeof brut !== "object" || brut === null) return null;
  const objet = brut as Record<string, unknown>;

  const quiz: QuizCompose = {};

  const titre = texteSur(objet.t, MAX_TITRE);
  if (titre) quiz.t = titre;

  if (objet.m === "immediat" || objet.m === "fin") quiz.m = objet.m;

  if (Array.isArray(objet.q)) {
    const ids = objet.q
      .filter((id): id is string => typeof id === "string")
      .filter((id) => PAR_ID.has(id))
      .slice(0, MAX_QUESTIONS);
    if (ids.length > 0) quiz.q = ids;
  }

  if (Array.isArray(objet.p)) {
    const perso = objet.p
      .map((item) => {
        if (typeof item !== "object" || item === null) return null;
        const champ = item as Record<string, unknown>;
        const question = texteSur(champ.question, MAX_TEXTE);
        const options = Array.isArray(champ.options)
          ? champ.options
              .map((option) => texteSur(option, MAX_TEXTE))
              .filter((option) => option.length > 0)
              .slice(0, 6)
          : [];
        const bonne =
          typeof champ.bonne === "number" && Number.isInteger(champ.bonne)
            ? champ.bonne
            : -1;
        if (!question || options.length < 2) return null;
        if (bonne < 0 || bonne >= options.length) return null;
        return {
          question,
          options,
          bonne,
          explication: texteSur(champ.explication, MAX_TEXTE) || undefined,
          articles: Array.isArray(champ.articles)
            ? champ.articles
                .map((article) => texteSur(article, 20))
                .filter((article) => article.length > 0)
                .slice(0, 5)
            : undefined,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .slice(0, MAX_QUESTIONS);
    if (perso.length > 0) quiz.p = perso;
  }

  if (!quiz.q && !quiz.p) return null;
  return quiz;
}

/* ------------------------------------------------------------------ */
/* Mise à plat pour le lecteur                                         */
/* ------------------------------------------------------------------ */

/** Une question telle que le lecteur la reçoit, d'où qu'elle vienne. */
export interface QuestionJouable {
  question: string;
  options: string[];
  bonne: number;
  explication?: string;
  articles: string[];
  citation?: string;
  /** Ce que le texte ne tranche pas tout à fait, dit dans le corrigé. */
  reserve?: string;
  /** Étiquette de thème, absente pour une question écrite par l'enseignant. */
  theme?: string;
}

export function versJouable(question: QuestionReglement): QuestionJouable {
  return {
    question: question.question,
    options: question.options,
    bonne: question.bonne,
    explication: question.explication,
    articles: question.articles,
    citation: question.citation,
    reserve: question.reserve,
    theme: question.theme,
  };
}

/** Les questions d'un questionnaire composé, banque puis questions ajoutées. */
export function questionsDuQuiz(quiz: QuizCompose): QuestionJouable[] {
  return [
    ...questionsDe(quiz.q ?? []).map(versJouable),
    ...(quiz.p ?? []).map((perso) => ({
      question: perso.question,
      options: perso.options,
      bonne: perso.bonne,
      explication: perso.explication,
      articles: perso.articles ?? [],
    })),
  ];
}
