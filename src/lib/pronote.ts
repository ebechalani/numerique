/**
 * Accès aux tutoriels Pronote : liste, rubriques, libellés.
 *
 * Point d’entrée unique des pages de la section : elles ne touchent jamais aux
 * fichiers de contenu directement.
 */

import { TUTORIELS } from "@/content/pronote/tutoriels";
import type {
  ApplicationPronote,
  PublicPronote,
  ThemePronote,
  TutorielPronote,
} from "@/content/pronote/types";
import { typographier } from "./typographie";

export type { TutorielPronote };

/** Les tutoriels, avec les espaces insécables de la typographie française. */
export const tutoriels: TutorielPronote[] = typographier(TUTORIELS);

export function getTutoriel(slug: string): TutorielPronote | undefined {
  return tutoriels.find((tutoriel) => tutoriel.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Rubriques et libellés                                               */
/* ------------------------------------------------------------------ */

export const THEMES: Array<{ cle: ThemePronote; titre: string; texte: string }> = [
  {
    cle: "demarrer",
    titre: "Bien démarrer",
    texte: "Installer Pronote, recevoir les notifications, retrouver son emploi du temps sur son téléphone.",
  },
  {
    cle: "appel",
    titre: "L’appel et la vie scolaire",
    texte: "Faire l’appel, signaler, suivre les absences des élèves et des professeurs.",
  },
  {
    cle: "cahier-de-textes",
    titre: "Le cahier de textes",
    texte: "Saisir le contenu des séances et le travail à faire, le réutiliser d’une classe à l’autre.",
  },
  {
    cle: "evaluation",
    titre: "Notes et compétences",
    texte: "Créer un devoir, évaluer par compétences, comprendre le calcul des moyennes.",
  },
  {
    cle: "communication",
    titre: "Communiquer",
    texte: "Informer les familles, ouvrir une discussion, joindre les élèves absents.",
  },
  {
    cle: "organisation",
    titre: "S’organiser",
    texte: "Réserver du matériel pour un cours et voir ce qui est déjà réservé.",
  },
  {
    cle: "espace-parents",
    titre: "Pour les parents",
    texte: "Se connecter à l’Espace Parents, installer l’application, retrouver son mot de passe. À transmettre aux familles.",
  },
];

export const LIBELLES_PUBLIC: Record<PublicPronote, string> = {
  professeurs: "Professeurs",
  "vie-scolaire": "Vie scolaire",
  parents: "Parents",
};

export const LIBELLES_APPLICATION: Record<ApplicationPronote, string> = {
  client: "Client Pronote (ordinateur)",
  espace: "Pronote dans le navigateur",
  mobile: "Application mobile",
  edt: "Logiciel EDT",
};

export function titreTheme(cle: ThemePronote): string {
  return THEMES.find((theme) => theme.cle === cle)?.titre ?? cle;
}

/** Nombre d’étapes, toutes sections confondues. */
export function nombreEtapes(tutoriel: TutorielPronote): number {
  return tutoriel.sections.reduce((total, section) => total + section.etapes.length, 0);
}

/** Tutoriels de la même rubrique, pour la fin de page. */
export function voisins(tutoriel: TutorielPronote): TutorielPronote[] {
  return tutoriels.filter(
    (autre) => autre.theme === tutoriel.theme && autre.slug !== tutoriel.slug,
  );
}

/** Le tutoriel suivant dans l’ordre de la section, ou null. */
export function suivant(tutoriel: TutorielPronote): TutorielPronote | null {
  const ordre = THEMES.flatMap((theme) =>
    tutoriels.filter((t) => t.theme === theme.cle),
  );
  const rang = ordre.findIndex((t) => t.slug === tutoriel.slug);
  return rang >= 0 && rang < ordre.length - 1 ? ordre[rang + 1] : null;
}
