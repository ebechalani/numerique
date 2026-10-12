import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Envoyer un rappel aux professeurs qui n’ont pas fait l’appel ».
 * D’après le document « Envoyer un rappel aux professeurs qui n’ont pas fait l’appel » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const rappelAppelProfesseurs: TutorielPronote = {
  slug: "rappel-appel-professeurs",
  titre: "Envoyer un rappel aux professeurs qui n’ont pas fait l’appel",
  resume: "Depuis le tableau de bord de la journée, repérer les appels non faits d’un créneau et demander aux professeurs concernés de faire l’appel.",
  public: [
    "vie-scolaire",
  ],
  theme: "appel",
  application: "client",
  duree: "1 min",
  prerequis: [
    "Être connecté au Client Pronote avec un compte de la vie scolaire.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Rendez-vous dans l’onglet « Absences » > « Tableaux de bord » > « Tableau de bord de la journée ».",
        },
        {
          texte: "Sélectionnez un créneau d’appel non fait.",
          detail: "Le nombre d’appels non faits de chaque créneau apparaît dans la colonne « Appels non faits ».",
        },
        {
          texte: "Dans la liste qui s’affiche en dessous (« Appels non faits entre … et … »), sélectionnez les appels non faits.",
        },
        {
          texte: "Faites un clic droit et choisissez « Demander aux professeurs sélectionnés de faire l’appel ».",
          capture: {
            src: "/pronote/rappel-appel-professeurs/c-01-02.webp",
            largeur: 1400,
            hauteur: 669,
            alt: "Onglet « Absences », sous-onglet « Tableaux de bord » : le tableau de bord de la journée affiche, créneau par créneau, les effectifs et la colonne « Appels non faits », dont la case du créneau 08h40 - 09h35 est sélectionnée. En dessous, la liste « Appels non faits entre 08h40 et 09h35 » (enseignant, heures de cours, classe, salle, matière) est entièrement sélectionnée ; un clic droit ouvre un menu avec « Tout sélectionner » et « Demander aux professeurs sélectionnés de faire l’appel » (noms des enseignants masqués).",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Envoyer un rappel aux professeurs qui n’ont pas fait l’appel",
    date: "juin 2025",
  },
};
