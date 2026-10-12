import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Envoyer une information aux élèves absents ».
 * D’après le document « Communication avec les élèves absents » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const elevesAbsents: TutorielPronote = {
  slug: "eleves-absents",
  titre: "Envoyer une information aux élèves absents",
  resume: "Depuis le planning des cahiers de textes, envoyer directement une information aux élèves absents à l’un de vos cours.",
  public: [
    "professeurs",
  ],
  theme: "communication",
  application: "client",
  duree: "1 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Rendez-vous dans l’onglet « Cahier de textes » > « Planification » > « Planning des cahiers de textes ».",
          detail: "Le planning des cahiers de textes s’ouvre avec l’icône placée juste à droite de « Planification ».",
          capture: {
            src: "/pronote/eleves-absents/c-01-02.webp",
            largeur: 1400,
            hauteur: 684,
            alt: "Client Pronote, onglet « Cahier de textes », sous-onglet « Planification » : des flèches rouges montrent l’onglet « Cahier de textes » et l’icône « Planning des cahiers de textes » à droite de « Planification ». Dans le planning, un clic droit sur le nombre d’absents de la colonne « Abs » ouvre un menu « Cahier de textes » ; une flèche montre la dernière option, « Diffuser une information aux absents ».",
          },
        },
        {
          texte: "Faites un clic droit sur le nombre d’absents, dans la colonne « Abs », sur la ligne du cours concerné.",
        },
        {
          texte: "Choisissez « Diffuser une information aux absents ».",
          detail: "Vous envoyez ainsi directement une information aux élèves absents à ce cours.",
        },
      ],
    },
  ],
  source: {
    fichier: "Communication avec les élèves absents",
    date: "juin 2025",
  },
};
