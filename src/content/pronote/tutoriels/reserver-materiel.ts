import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Réserver du matériel pour un cours ».
 * D’après le document « Réserver du matériel pour son cours avec Pronote » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const reserverMateriel: TutorielPronote = {
  slug: "reserver-materiel",
  titre: "Réserver du matériel pour un cours",
  resume: "Réserver des tablettes ou des ordinateurs pour un cours depuis votre emploi du temps, puis consulter l’emploi du temps du matériel réservé.",
  public: [
    "professeurs",
  ],
  theme: "organisation",
  application: "client",
  duree: "2 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      titre: "I. Réserver le matériel",
      etapes: [
        {
          texte: "À partir de votre emploi du temps dans Pronote, faites un clic droit sur le cours de la classe concernée.",
        },
        {
          texte: "Choisissez « Réservation de matériels », puis « Réserver un matériel supplémentaire ».",
          capture: {
            src: "/pronote/reserver-materiel/c-01-02.webp",
            largeur: 1355,
            hauteur: 950,
            alt: "Emploi du temps dans le Client Pronote, avec le menu contextuel ouvert par un clic droit sur un cours : « Réservation de matériels » est survolé et son sous-menu affiche « Remplacer le matériel », « Réserver un matériel supplémentaire » (en surbrillance) et « Supprimer le matériel ».",
          },
        },
        {
          texte: "Dans la fenêtre « Matériels disponibles », cochez le matériel souhaité : tablettes Android, tablettes iOS (iPad) ou ordinateurs.",
          detail: "La liste des matériels proposés dépend du paramétrage de l’établissement.",
          capture: {
            src: "/pronote/reserver-materiel/c-01-03.webp",
            largeur: 1184,
            hauteur: 431,
            alt: "Fenêtre « Matériels disponibles » : liste des matériels (tablettes Android, iPad, ordinateurs) avec les colonnes « Nb. à rés. », « Nb. dispo » et « Informations ». Une flèche rouge désigne la case cochée de la ligne « Classe mobile Ipads 1 », une autre le nombre à réserver ; en bas, les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Saisissez le nombre d’appareils à réserver dans la colonne « Nb. à rés. ».",
        },
        {
          texte: "Cliquez sur « Valider ».",
        },
        {
          texte: "Retrouvez la réservation dans votre emploi du temps : une fois validée, elle s’y affiche automatiquement.",
          capture: {
            src: "/pronote/reserver-materiel/c-01-04.webp",
            largeur: 856,
            hauteur: 348,
            alt: "Emploi du temps après validation : une flèche rouge désigne la case « Rés. de. » ajoutée sur le cours du jeudi, qui signale la réservation de matériel.",
          },
        },
      ],
    },
    {
      titre: "II. Voir le matériel réservé",
      intro: "Pour consulter l’emploi du temps du matériel réservé :",
      etapes: [
        {
          texte: "Cliquez sur l’onglet « Ressources ».",
        },
        {
          texte: "Cliquez sur le sous-onglet « Matériels ».",
        },
        {
          texte: "Sélectionnez le nom du matériel demandé : son emploi du temps s’affiche à droite.",
          capture: {
            src: "/pronote/reserver-materiel/c-02-01.webp",
            largeur: 1400,
            hauteur: 423,
            alt: "Onglet « Ressources », sous-onglet « Matériels » : à gauche, la liste des matériels avec leur nombre et leurs informations, « Classe mobile Ipads 1 » sélectionné ; à droite, l’emploi du temps de ce matériel, où apparaît la réservation du jeudi en technologie. La colonne « Gestionnaires » est masquée.",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Réserver du matériel pour son cours avec Pronote",
    date: "juin 2025",
  },
};
