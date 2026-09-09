"use client";

/**
 * Créateur de QCM sur le règlement intérieur.
 *
 * L'enseignant choisit ses questions dans la banque — filtrée par thème, par
 * public et par difficulté — en ajoute des siennes s'il le souhaite, règle le
 * moment du corrigé, et repart avec un lien.
 *
 * Ce lien contient le questionnaire entier : rien n'est enregistré côté
 * serveur, il n'y a donc rien à administrer, rien à supprimer ensuite, et le
 * questionnaire fonctionne même si le professeur n'a pas de compte. En
 * contrepartie, l'adresse est longue : le bouton de copie est là pour ça.
 *
 * Le brouillon reste dans le navigateur : on retrouve sa sélection en revenant.
 */

import Link from "next/link";
import { useCallback, useId, useMemo, useState } from "react";

import BoutonCopier from "@/components/ui/BoutonCopier";
import type {
  Difficulte,
  MomentCorrection,
  PublicQuestion,
  QuestionPersonnelle,
  QuestionReglement,
} from "@/content/reglement/types";
import { encoderQuiz, lienArticle } from "@/lib/reglement";
import { useEtatLocal } from "@/lib/progression";

const SYMBOLES = ["▲", "◆", "●", "■"];

const CLE_BROUILLON = "createur-qcm-ri";

const LIBELLE_PUBLIC: Record<PublicQuestion, string> = {
  eleves: "Élèves",
  parents: "Parents",
  "les-deux": "Les deux",
};

const LIBELLE_DIFFICULTE: Record<Difficulte, string> = {
  facile: "Facile",
  moyenne: "Moyenne",
  difficile: "Difficile",
};

interface Brouillon {
  titre: string;
  correction: MomentCorrection;
  /** Identifiants choisis, dans l'ordre de passage. */
  choisies: string[];
  perso: QuestionPersonnelle[];
}

const BROUILLON_INITIAL: Brouillon = {
  titre: "",
  correction: "fin",
  choisies: [],
  perso: [],
};

/** Le stockage peut contenir n'importe quoi : on reconstruit un état sûr. */
function brouillonSur(brut: unknown, idsConnus: Set<string>): Brouillon {
  const objet = (brut ?? {}) as Partial<Brouillon>;
  return {
    titre: typeof objet.titre === "string" ? objet.titre.slice(0, 120) : "",
    correction: objet.correction === "immediat" ? "immediat" : "fin",
    choisies: Array.isArray(objet.choisies)
      ? objet.choisies
          .filter((id): id is string => typeof id === "string")
          .filter((id) => idsConnus.has(id))
      : [],
    perso: Array.isArray(objet.perso)
      ? objet.perso.filter(
          (item): item is QuestionPersonnelle =>
            typeof item === "object" &&
            item !== null &&
            typeof (item as QuestionPersonnelle).question === "string" &&
            Array.isArray((item as QuestionPersonnelle).options),
        )
      : [],
  };
}

/** Sans accent ni ponctuation : la recherche ne doit pas punir la frappe. */
function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

/* ------------------------------------------------------------------ */
/* Icônes                                                              */
/* ------------------------------------------------------------------ */

function IconeCoche() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

function IconeFleche({ sens }: { sens: "haut" | "bas" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      {sens === "haut" ? <path d="M6 14l6-6 6 6" /> : <path d="M6 10l6 6 6-6" />}
    </svg>
  );
}

function IconeCroix() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Formulaire d'ajout d'une question                                   */
/* ------------------------------------------------------------------ */

const CHAMPS_VIDES = {
  question: "",
  options: ["", "", "", ""],
  bonne: 0,
  explication: "",
  articles: "",
};

function FormulaireQuestion({
  onAjouter,
  onFermer,
}: {
  onAjouter: (question: QuestionPersonnelle) => void;
  onFermer: () => void;
}) {
  const base = useId();
  const [champs, setChamps] = useState(CHAMPS_VIDES);
  const [erreur, setErreur] = useState<string | null>(null);
  const [vraiFaux, setVraiFaux] = useState(false);

  const options = vraiFaux ? ["Vrai", "Faux"] : champs.options;

  function basculerVraiFaux(actif: boolean) {
    setVraiFaux(actif);
    setChamps((precedents) => ({ ...precedents, bonne: 0 }));
    setErreur(null);
  }

  function valider() {
    const question = champs.question.trim();
    if (!question) {
      setErreur("Écrivez l’énoncé de la question.");
      return;
    }
    const propres = options.map((option) => option.trim());
    const remplies = propres.filter((option) => option.length > 0);
    if (remplies.length < 2) {
      setErreur("Il faut au moins deux propositions.");
      return;
    }
    if (!propres[champs.bonne]?.trim()) {
      setErreur("La proposition cochée comme juste est vide.");
      return;
    }
    // Les propositions laissées vides sont retirées, l'index de la bonne suit.
    const gardees: string[] = [];
    let bonne = 0;
    propres.forEach((option, rang) => {
      if (!option) return;
      if (rang === champs.bonne) bonne = gardees.length;
      gardees.push(option);
    });

    onAjouter({
      question,
      options: gardees,
      bonne,
      explication: champs.explication.trim() || undefined,
      articles: champs.articles
        .split(/[,;]/)
        .map((article) => article.trim())
        .filter((article) => article.length > 0),
    });
    setChamps(CHAMPS_VIDES);
    setVraiFaux(false);
    setErreur(null);
    onFermer();
  }

  const classeChamp =
    "mt-1.5 block w-full rounded-md border border-trait bg-papier px-3 py-2 text-sm leading-relaxed text-encre placeholder:text-estompe focus:border-accent focus:outline-none";

  return (
    <div className="mt-4 rounded-lg border border-accent bg-accent-voile p-4 sm:p-5">
      <h4 className="font-serif text-lg text-encre">Votre question</h4>
      <p className="mt-1 text-sm text-graphite">
        Elle s’ajoute à la fin du questionnaire. N’y mettez aucune donnée
        d’élève : le questionnaire voyage dans un lien.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <label
            htmlFor={`${base}-q`}
            className="block text-sm font-medium text-encre"
          >
            Énoncé
          </label>
          <textarea
            id={`${base}-q`}
            rows={2}
            value={champs.question}
            maxLength={400}
            onChange={(evenement) => {
              setChamps((p) => ({ ...p, question: evenement.target.value }));
              setErreur(null);
            }}
            placeholder="Un élève oublie sa blouse le jour du TP. Que se passe-t-il ?"
            className={`${classeChamp} resize-y`}
          />
        </div>

        <label className="flex items-center gap-2.5 text-sm text-encre">
          <input
            type="checkbox"
            checked={vraiFaux}
            onChange={(evenement) => basculerVraiFaux(evenement.target.checked)}
            className="h-4 w-4 accent-[#0e7490]"
          />
          Question vrai ou faux
        </label>

        <fieldset>
          <legend className="text-sm font-medium text-encre">
            Propositions
            <span className="ml-2 font-normal text-graphite">
              cochez la bonne réponse
            </span>
          </legend>
          <div className="mt-2 space-y-2">
            {options.map((option, rang) => (
              <div key={rang} className="flex items-center gap-2.5">
                <input
                  type="radio"
                  name={`${base}-bonne`}
                  checked={champs.bonne === rang}
                  onChange={() => setChamps((p) => ({ ...p, bonne: rang }))}
                  aria-label={`Proposition ${SYMBOLES[rang]} : bonne réponse`}
                  className="h-4 w-4 shrink-0 accent-[#0e7490]"
                />
                <span
                  aria-hidden="true"
                  className="w-4 shrink-0 text-center font-mono text-graphite"
                >
                  {SYMBOLES[rang]}
                </span>
                <input
                  type="text"
                  value={option}
                  disabled={vraiFaux}
                  maxLength={200}
                  onChange={(evenement) => {
                    const valeur = evenement.target.value;
                    setChamps((p) => ({
                      ...p,
                      options: p.options.map((ancienne, index) =>
                        index === rang ? valeur : ancienne,
                      ),
                    }));
                    setErreur(null);
                  }}
                  placeholder={
                    vraiFaux ? "" : `Proposition ${rang + 1}${rang > 1 ? " (facultative)" : ""}`
                  }
                  className="block w-full rounded-md border border-trait bg-papier px-3 py-1.5 text-sm text-encre placeholder:text-estompe focus:border-accent focus:outline-none disabled:bg-voile disabled:text-graphite"
                />
              </div>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${base}-exp`}
              className="block text-sm font-medium text-encre"
            >
              Explication{" "}
              <span className="font-normal text-estompe">facultative</span>
            </label>
            <input
              id={`${base}-exp`}
              type="text"
              value={champs.explication}
              maxLength={400}
              onChange={(evenement) =>
                setChamps((p) => ({ ...p, explication: evenement.target.value }))
              }
              className={classeChamp}
            />
          </div>
          <div>
            <label
              htmlFor={`${base}-art`}
              className="block text-sm font-medium text-encre"
            >
              Article(s) du règlement{" "}
              <span className="font-normal text-estompe">facultatif</span>
            </label>
            <input
              id={`${base}-art`}
              type="text"
              value={champs.articles}
              maxLength={60}
              onChange={(evenement) =>
                setChamps((p) => ({ ...p, articles: evenement.target.value }))
              }
              placeholder="4.4"
              className={classeChamp}
            />
          </div>
        </div>

        {erreur ? (
          <p role="alert" className="text-sm font-medium text-rouge">
            {erreur}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={valider}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
          >
            Ajouter au questionnaire
          </button>
          <button
            type="button"
            onClick={onFermer}
            className="rounded-md px-2 py-1 text-sm text-graphite underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Le créateur                                                         */
/* ------------------------------------------------------------------ */

export interface ProprietesCreateur {
  banque: QuestionReglement[];
  themes: { cle: string; titre: string }[];
  /** Requête ACTIF proposée pour produire d'autres questions avec une IA. */
  requeteIa: string;
}

export default function CreateurQcm({
  banque,
  themes,
  requeteIa,
}: ProprietesCreateur) {
  const base = useId();

  const idsConnus = useMemo(
    () => new Set(banque.map((question) => question.id)),
    [banque],
  );
  const parId = useMemo(
    () => new Map(banque.map((question) => [question.id, question])),
    [banque],
  );

  const [brut, setBrut] = useEtatLocal<Brouillon>(
    CLE_BROUILLON,
    BROUILLON_INITIAL,
  );
  const brouillon = useMemo(() => brouillonSur(brut, idsConnus), [brut, idsConnus]);

  const [theme, setTheme] = useState("tous");
  const [publicVise, setPublicVise] = useState("tous");
  const [difficulte, setDifficulte] = useState("toutes");
  const [recherche, setRecherche] = useState("");
  const [formulaireOuvert, setFormulaireOuvert] = useState(false);

  const modifier = useCallback(
    (transformer: (precedent: Brouillon) => Brouillon) => {
      setBrut((precedent) => transformer(brouillonSur(precedent, idsConnus)));
    },
    [setBrut, idsConnus],
  );

  const basculer = useCallback(
    (id: string) => {
      modifier((precedent) => ({
        ...precedent,
        choisies: precedent.choisies.includes(id)
          ? precedent.choisies.filter((autre) => autre !== id)
          : [...precedent.choisies, id],
      }));
    },
    [modifier],
  );

  const deplacer = useCallback(
    (rang: number, pas: number) => {
      modifier((precedent) => {
        const suivantes = [...precedent.choisies];
        const cible = rang + pas;
        if (cible < 0 || cible >= suivantes.length) return precedent;
        [suivantes[rang], suivantes[cible]] = [suivantes[cible], suivantes[rang]];
        return { ...precedent, choisies: suivantes };
      });
    },
    [modifier],
  );

  const filtrees = useMemo(() => {
    const terme = normaliser(recherche.trim());
    return banque.filter((question) => {
      if (theme !== "tous" && question.theme !== theme) return false;
      if (publicVise !== "tous") {
        if (publicVise === "eleves" && question.public === "parents") return false;
        if (publicVise === "parents" && question.public === "eleves") return false;
      }
      if (difficulte !== "toutes" && question.difficulte !== difficulte) {
        return false;
      }
      if (terme) {
        const foin = normaliser(
          `${question.question} ${question.options.join(" ")} ${question.articles.join(" ")}`,
        );
        if (!foin.includes(terme)) return false;
      }
      return true;
    });
  }, [banque, difficulte, publicVise, recherche, theme]);

  const total = brouillon.choisies.length + brouillon.perso.length;

  const lien = useMemo(() => {
    if (total === 0) return null;
    const charge = encoderQuiz({
      t: brouillon.titre.trim() || undefined,
      m: brouillon.correction,
      q: brouillon.choisies.length > 0 ? brouillon.choisies : undefined,
      p: brouillon.perso.length > 0 ? brouillon.perso : undefined,
    });
    return `/reglement-interieur/quiz?c=${charge}`;
  }, [brouillon, total]);

  const lienComplet = useMemo(() => {
    if (!lien) return null;
    if (typeof window === "undefined") return lien;
    return `${window.location.origin}${lien}`;
  }, [lien]);

  const classeSelect =
    "mt-1.5 block w-full rounded-md border border-trait bg-craie px-3 py-2 text-sm text-encre focus:border-accent focus:outline-none";

  return (
    <div className="space-y-8">
      {/* ---------------------------------------------------------- */}
      {/* 1. Le questionnaire                                         */}
      {/* ---------------------------------------------------------- */}
      <section
        aria-labelledby={`${base}-reglages`}
        className="rounded-lg border border-trait bg-craie p-5 sm:p-6"
      >
        <h2
          id={`${base}-reglages`}
          className="font-serif text-xl text-encre"
        >
          1. Votre questionnaire
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${base}-titre`}
              className="block text-sm font-medium text-encre"
            >
              Titre
            </label>
            <input
              id={`${base}-titre`}
              type="text"
              value={brouillon.titre}
              maxLength={120}
              onChange={(evenement) =>
                modifier((p) => ({ ...p, titre: evenement.target.value }))
              }
              placeholder="Le règlement, en 10 questions — 5e B"
              className="mt-1.5 block w-full rounded-md border border-trait bg-papier px-3 py-2 text-sm text-encre placeholder:text-estompe focus:border-accent focus:outline-none"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-encre">
              Quand afficher le corrigé
            </legend>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {(
                [
                  ["fin", "À la fin", "comme en réunion"],
                  ["immediat", "À chaque réponse", "travail individuel"],
                ] as const
              ).map(([valeur, libelle, precision]) => (
                <label
                  key={valeur}
                  className={[
                    "cursor-pointer rounded-md border px-3 py-2 text-sm transition-colors",
                    brouillon.correction === valeur
                      ? "border-accent bg-accent-voile text-accent-fort"
                      : "border-trait bg-papier text-encre hover:border-trait-fort",
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    name={`${base}-correction`}
                    checked={brouillon.correction === valeur}
                    onChange={() =>
                      modifier((p) => ({ ...p, correction: valeur }))
                    }
                    className="sr-only"
                  />
                  <span className="block font-medium">{libelle}</span>
                  <span className="block text-xs text-graphite">{precision}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Sélection ordonnée */}
        <div className="mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg text-encre">
              Questions retenues
            </h3>
            <p className="font-mono text-sm tabular-nums text-graphite">
              {total}
            </p>
          </div>

          {total === 0 ? (
            <p className="mt-3 rounded-md border border-dashed border-trait-fort bg-voile px-4 py-6 text-center text-sm text-graphite">
              Aucune question pour l’instant. Cochez-en dans la banque ci-dessous.
            </p>
          ) : (
            <ol className="mt-3 space-y-2">
              {brouillon.choisies.map((id, rang) => {
                const question = parId.get(id);
                if (!question) return null;
                return (
                  <li
                    key={id}
                    className="flex items-start gap-3 rounded-md border border-trait bg-papier px-3 py-2.5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 w-5 shrink-0 text-right font-mono text-xs tabular-nums text-estompe"
                    >
                      {rang + 1}
                    </span>
                    <span className="min-w-0 flex-1 text-sm leading-snug text-encre">
                      {question.question}
                    </span>
                    <span className="flex shrink-0 items-center gap-1">
                      <button
                        type="button"
                        onClick={() => deplacer(rang, -1)}
                        disabled={rang === 0}
                        aria-label={`Monter : ${question.question}`}
                        className="rounded p-1 text-graphite transition-colors hover:bg-voile hover:text-encre disabled:opacity-30"
                      >
                        <IconeFleche sens="haut" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deplacer(rang, 1)}
                        disabled={rang === brouillon.choisies.length - 1}
                        aria-label={`Descendre : ${question.question}`}
                        className="rounded p-1 text-graphite transition-colors hover:bg-voile hover:text-encre disabled:opacity-30"
                      >
                        <IconeFleche sens="bas" />
                      </button>
                      <button
                        type="button"
                        onClick={() => basculer(id)}
                        aria-label={`Retirer : ${question.question}`}
                        className="rounded p-1 text-graphite transition-colors hover:bg-rouge-voile hover:text-rouge"
                      >
                        <IconeCroix />
                      </button>
                    </span>
                  </li>
                );
              })}

              {brouillon.perso.map((question, rang) => (
                <li
                  key={`perso-${rang}`}
                  className="flex items-start gap-3 rounded-md border border-accent-voile bg-accent-voile px-3 py-2.5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 w-5 shrink-0 text-right font-mono text-xs tabular-nums text-accent"
                  >
                    {brouillon.choisies.length + rang + 1}
                  </span>
                  <span className="min-w-0 flex-1 text-sm leading-snug text-encre">
                    {question.question}
                    <span className="ml-2 rounded border border-accent px-1.5 py-0.5 text-[0.65rem] tracking-wide text-accent-fort uppercase">
                      la vôtre
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      modifier((p) => ({
                        ...p,
                        perso: p.perso.filter((_, index) => index !== rang),
                      }))
                    }
                    aria-label={`Retirer : ${question.question}`}
                    className="shrink-0 rounded p-1 text-graphite transition-colors hover:bg-rouge-voile hover:text-rouge"
                  >
                    <IconeCroix />
                  </button>
                </li>
              ))}
            </ol>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {formulaireOuvert ? null : (
              <button
                type="button"
                onClick={() => setFormulaireOuvert(true)}
                className="rounded-lg border border-trait bg-craie px-3 py-2 text-sm font-medium text-encre transition-colors hover:border-accent hover:text-accent"
              >
                Écrire ma propre question
              </button>
            )}
            {total > 0 ? (
              <button
                type="button"
                onClick={() => modifier(() => BROUILLON_INITIAL)}
                className="rounded-md px-2 py-1 text-sm text-graphite underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Tout effacer
              </button>
            ) : null}
          </div>

          {formulaireOuvert ? (
            <FormulaireQuestion
              onAjouter={(question) =>
                modifier((p) => ({ ...p, perso: [...p.perso, question] }))
              }
              onFermer={() => setFormulaireOuvert(false)}
            />
          ) : null}
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 2. Le lien                                                  */}
      {/* ---------------------------------------------------------- */}
      <section
        aria-labelledby={`${base}-lien`}
        className={[
          "rounded-lg border p-5 sm:p-6",
          total > 0 ? "border-accent bg-accent-voile" : "border-trait bg-voile",
        ].join(" ")}
      >
        <h2 id={`${base}-lien`} className="font-serif text-xl text-encre">
          2. Le lien de votre QCM
        </h2>

        {total === 0 || !lien ? (
          <p className="mt-2 text-sm text-graphite">
            Le lien apparaîtra ici dès que vous aurez retenu au moins une
            question.
          </p>
        ) : (
          <>
            <p className="mt-2 text-sm leading-relaxed text-encre-clair">
              {total} question{total > 1 ? "s" : ""}, corrigé{" "}
              {brouillon.correction === "fin" ? "à la fin" : "à chaque réponse"}.
              Le questionnaire tient entier dans cette adresse : rien n’est
              enregistré sur le site, il n’y a donc rien à supprimer après la
              séance.
            </p>

            <p className="mt-4 max-h-24 overflow-y-auto rounded-md border border-trait bg-craie px-3 py-2 font-mono text-xs leading-relaxed break-all text-graphite">
              {lienComplet ?? lien}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={lien}
                className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
              >
                Ouvrir le questionnaire
              </Link>
              {lienComplet ? (
                <BoutonCopier texte={lienComplet} libelle="Copier le lien" />
              ) : null}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-graphite">
              À projeter en classe, ou à envoyer aux élèves. N’ajoutez aucune
              donnée personnelle dans vos questions : le lien peut être
              transmis.
            </p>
          </>
        )}
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 3. La banque                                                */}
      {/* ---------------------------------------------------------- */}
      <section aria-labelledby={`${base}-banque`}>
        <h2 id={`${base}-banque`} className="font-serif text-xl text-encre">
          3. La banque de questions
        </h2>
        <p className="mt-1 text-sm text-graphite">
          Chaque question est rattachée à un article du règlement, et
          accompagnée de la phrase qui la prouve : relisez avant de projeter.
        </p>

        <div className="mt-4 grid gap-3 rounded-lg border border-trait bg-craie p-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor={`${base}-theme`}
              className="block text-sm font-medium text-encre"
            >
              Thème
            </label>
            <select
              id={`${base}-theme`}
              value={theme}
              onChange={(evenement) => setTheme(evenement.target.value)}
              className={classeSelect}
            >
              <option value="tous">Tous les thèmes</option>
              {themes.map((item) => (
                <option key={item.cle} value={item.cle}>
                  {item.titre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor={`${base}-public`}
              className="block text-sm font-medium text-encre"
            >
              Public
            </label>
            <select
              id={`${base}-public`}
              value={publicVise}
              onChange={(evenement) => setPublicVise(evenement.target.value)}
              className={classeSelect}
            >
              <option value="tous">Tous</option>
              <option value="eleves">Pour des élèves</option>
              <option value="parents">Pour des parents</option>
            </select>
          </div>
          <div>
            <label
              htmlFor={`${base}-difficulte`}
              className="block text-sm font-medium text-encre"
            >
              Difficulté
            </label>
            <select
              id={`${base}-difficulte`}
              value={difficulte}
              onChange={(evenement) => setDifficulte(evenement.target.value)}
              className={classeSelect}
            >
              <option value="toutes">Toutes</option>
              <option value="facile">Facile</option>
              <option value="moyenne">Moyenne</option>
              <option value="difficile">Difficile</option>
            </select>
          </div>
          <div>
            <label
              htmlFor={`${base}-recherche`}
              className="block text-sm font-medium text-encre"
            >
              Rechercher
            </label>
            <input
              id={`${base}-recherche`}
              type="search"
              value={recherche}
              onChange={(evenement) => setRecherche(evenement.target.value)}
              placeholder="téléphone, retard, 4.4…"
              className="mt-1.5 block w-full rounded-md border border-trait bg-papier px-3 py-2 text-sm text-encre placeholder:text-estompe focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <p className="mt-3 text-sm text-graphite" role="status">
          {filtrees.length} question{filtrees.length > 1 ? "s" : ""} sur{" "}
          {banque.length}
        </p>

        {banque.length === 0 ? (
          <p className="mt-3 rounded-md border border-dashed border-trait-fort bg-voile px-4 py-6 text-center text-sm text-graphite">
            La banque est vide pour l’instant. Vous pouvez tout de même écrire
            vos propres questions ci-dessus.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {filtrees.map((question) => {
              const retenue = brouillon.choisies.includes(question.id);
              return (
                <li key={question.id}>
                  <div
                    className={[
                      "rounded-lg border transition-colors",
                      retenue
                        ? "border-accent bg-accent-voile"
                        : "border-trait bg-craie hover:border-trait-fort",
                    ].join(" ")}
                  >
                    <label className="flex cursor-pointer items-start gap-3 p-4">
                      <input
                        type="checkbox"
                        checked={retenue}
                        onChange={() => basculer(question.id)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={[
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                          retenue
                            ? "border-accent bg-accent text-craie"
                            : "border-trait-fort bg-craie text-craie",
                          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent",
                        ].join(" ")}
                      >
                        {retenue ? <IconeCoche /> : null}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm leading-snug font-medium text-encre">
                          {question.question}
                        </span>
                        <span className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-graphite">
                          <span className="font-mono text-vert">
                            {SYMBOLES[question.bonne]}
                          </span>
                          <span>{question.options[question.bonne]}</span>
                        </span>
                        <span className="mt-2 flex flex-wrap items-center gap-1.5 text-[0.7rem]">
                          {question.articles.map((numero) => (
                            <Link
                              key={numero}
                              href={lienArticle(numero)}
                              onClick={(evenement) => evenement.stopPropagation()}
                              className="rounded border border-trait bg-craie px-1.5 py-0.5 font-mono text-accent transition-colors hover:border-accent"
                            >
                              RI {numero}
                            </Link>
                          ))}
                          <span className="rounded-full border border-trait px-2 py-0.5 text-estompe">
                            {LIBELLE_PUBLIC[question.public]}
                          </span>
                          <span className="rounded-full border border-trait px-2 py-0.5 text-estompe">
                            {LIBELLE_DIFFICULTE[question.difficulte]}
                          </span>
                          {question.type === "vrai-faux" ? (
                            <span className="rounded-full border border-trait px-2 py-0.5 text-estompe">
                              Vrai ou faux
                            </span>
                          ) : null}
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* ---------------------------------------------------------- */}
      {/* 4. En produire d'autres avec une IA                         */}
      {/* ---------------------------------------------------------- */}
      <section
        aria-labelledby={`${base}-ia`}
        className="rounded-lg border border-trait bg-craie p-5 sm:p-6"
      >
        <h2 id={`${base}-ia`} className="font-serif text-xl text-encre">
          4. En produire d’autres, sur votre chapitre
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-graphite">
          Déposez le règlement intérieur dans un carnet NotebookLM, puis collez
          cette requête. L’outil ne travaillera que sur ce document, et citera
          ses passages — vous n’aurez qu’à vérifier avant d’ajouter les
          questions ci-dessus.
        </p>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
          <p className="min-w-0 flex-1 rounded-r-lg border-l-[3px] border-accent bg-voile px-4 py-3 font-mono text-sm leading-relaxed break-words whitespace-pre-wrap text-encre">
            {requeteIa}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          <BoutonCopier texte={requeteIa} libelle="Copier la requête" />
          <Link
            href="/outils/redacteur-de-prompt"
            className="text-sm text-accent underline underline-offset-4 transition-colors hover:text-accent-fort"
          >
            L’adapter avec le rédacteur de prompt
          </Link>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-estompe">
          Relisez chaque question produite : une IA se trompe, et le règlement
          fait foi.
        </p>
      </section>
    </div>
  );
}
