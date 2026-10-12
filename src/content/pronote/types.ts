/**
 * Contrat de contenu des tutoriels Pronote.
 *
 * Chaque tutoriel reprend un document d’Eddy Bachaalany (Word ou PDF) : ses
 * étapes, réécrites au propre, et ses captures d’écran, dont toute donnée
 * personnelle a été masquée avant publication — le site est public.
 */

/** À qui s’adresse le tutoriel. */
export type PublicPronote = "professeurs" | "vie-scolaire" | "parents";

/** Rubrique de la section, dans l’ordre d’affichage. */
export type ThemePronote =
  | "demarrer"
  | "appel"
  | "cahier-de-textes"
  | "evaluation"
  | "communication"
  | "organisation"
  | "espace-parents";

/** Où se fait la manipulation. */
export type ApplicationPronote = "client" | "espace" | "mobile" | "edt";

export interface CapturePronote {
  /** Chemin public, ex. « /pronote/feuille-appel/c-01-05.webp ». */
  src: string;
  largeur: number;
  hauteur: number;
  /** Ce que montre la capture, pour qui ne la voit pas. */
  alt: string;
}

export interface EtapePronote {
  /** L’action, à l’impératif. */
  texte: string;
  detail?: string;
  /** Options ou sous-cas de l’étape. */
  liste?: string[];
  capture?: CapturePronote;
  /** Petite icône à repérer à l’écran, affichée à côté du texte. */
  icone?: CapturePronote;
}

export interface SectionPronote {
  titre?: string;
  intro?: string;
  etapes: EtapePronote[];
}

export interface AstucePronote {
  ton: "info" | "attention" | "astuce";
  titre?: string;
  texte: string;
}

export interface TutorielPronote {
  slug: string;
  titre: string;
  /** Une phrase : ce que le tutoriel permet de faire. */
  resume: string;
  public: PublicPronote[];
  theme: ThemePronote;
  application: ApplicationPronote;
  /** Ex. « 3 min ». */
  duree?: string;
  prerequis?: string[];
  sections: SectionPronote[];
  astuces?: AstucePronote[];
  liens?: Array<{ libelle: string; href: string }>;
  /** Le document d’origine. */
  source: { fichier: string; date: string };
}
