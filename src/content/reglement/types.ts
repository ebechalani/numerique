/**
 * Contrat de contenu de la section « Règlement intérieur ».
 *
 * Deux jeux de données, tenus séparés :
 *  - le règlement lui-même, transcrit article par article — la source ;
 *  - une banque de questions, chacune rattachée à un ou plusieurs articles et
 *    accompagnée de la phrase du règlement qui la prouve.
 *
 * Une question sans citation n'a pas sa place ici : c'est la citation qui
 * permet à l'enseignant de vérifier avant de projeter, et à l'élève de
 * remonter au texte après avoir répondu.
 */

/* ------------------------------------------------------------------ */
/* Le règlement                                                        */
/* ------------------------------------------------------------------ */

export type BlocReglement =
  | { type: "paragraphe"; texte: string }
  | { type: "liste"; texte?: string; items: string[] }
  | { type: "tableau"; entetes: string[]; lignes: string[][] };

export interface ArticleReglement {
  /** Numéro tel qu'imprimé dans le document : « 2.4 », « 4.7.1 ». */
  numero: string;
  /** Intitulé sans son numéro : « Retards ». */
  titre: string;
  blocs: BlocReglement[];
}

export interface ChapitreReglement {
  /** « 1 », « 2 »… ou « 0 » pour le préambule. */
  numero: string;
  titre: string;
  articles: ArticleReglement[];
}

/* ------------------------------------------------------------------ */
/* Les questions                                                       */
/* ------------------------------------------------------------------ */

export type TypeQuestion = "qcm" | "vrai-faux";

/** À qui la question s'adresse — le créateur de QCM filtre là-dessus. */
export type PublicQuestion = "eleves" | "parents" | "les-deux";

export type Difficulte = "facile" | "moyenne" | "difficile";

export interface QuestionReglement {
  /** Identifiant stable : il voyage dans le lien d'un QCM composé. */
  id: string;
  /** Clé de thème, voir THEMES. */
  theme: string;
  question: string;
  type: TypeQuestion;
  /** Quatre propositions pour un QCM, [« Vrai », « Faux »] sinon. */
  options: string[];
  /** Rang de la bonne option. */
  bonne: number;
  /** La règle expliquée à un élève, sans jargon ni numéro d'article. */
  explication: string;
  /** Numéros d'article, tels qu'imprimés. */
  articles: string[];
  /** La phrase du règlement qui prouve la bonne réponse, mot pour mot. */
  citation: string;
  public: PublicQuestion;
  difficulte: Difficulte;
}

/** Un thème de la banque : sert de filtre et d'étiquette. */
export interface ThemeReglement {
  cle: string;
  titre: string;
  /** Articles couverts, pour l'affichage. */
  articles: string[];
}

/* ------------------------------------------------------------------ */
/* Les questionnaires prêts                                            */
/* ------------------------------------------------------------------ */

/** Quand le corrigé apparaît : au clic, ou à la fin comme dans un diaporama. */
export type MomentCorrection = "immediat" | "fin";

export interface ModeleQuiz {
  slug: string;
  titre: string;
  sousTitre: string;
  intro: string;
  /** Public visé, affiché sur la carte du questionnaire. */
  public: PublicQuestion;
  correction: MomentCorrection;
  /** Identifiants de questions, dans l'ordre de passage. */
  questions: string[];
}

/* ------------------------------------------------------------------ */
/* Un questionnaire composé par un enseignant                          */
/* ------------------------------------------------------------------ */

/**
 * Charge transportée dans le lien d'un QCM composé. Les clés sont courtes :
 * elles sont encodées dans l'adresse, qu'un enseignant recopie ou projette.
 */
export interface QuizCompose {
  /** Titre. */
  t?: string;
  /** Moment du corrigé. */
  m?: MomentCorrection;
  /** Identifiants de questions de la banque. */
  q?: string[];
  /** Questions écrites par l'enseignant lui-même. */
  p?: QuestionPersonnelle[];
}

export interface QuestionPersonnelle {
  question: string;
  options: string[];
  bonne: number;
  explication?: string;
  articles?: string[];
}
