import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Saisir l’absence d’un professeur ».
 * D’après le document « Absences des professeurs » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const absenceProfesseur: TutorielPronote = {
  slug: "absence-professeur",
  titre: "Saisir l’absence d’un professeur",
  resume: "Saisissez l’absence d’un professeur dans EDT et affichez ou masquez les cours annulés dans les emplois du temps du Client Pronote.",
  public: [
    "vie-scolaire",
  ],
  theme: "organisation",
  application: "edt",
  duree: "5 min",
  prerequis: [
    "Connaître vos identifiants Pronote.",
  ],
  sections: [
    {
      titre: "Saisir l’absence dans EDT",
      intro: "Les absences des professeurs se saisissent depuis le logiciel EDT.",
      etapes: [
        {
          texte: "Installez le Client EDT, dans la version utilisée par l’établissement.",
          detail: "Le document d’origine renvoyait au Client EDT 2023 : demandez au référent numérique le lien de la version en cours, la même que celle de la base de l’établissement.",
        },
        {
          texte: "Connectez-vous avec vos identifiants Pronote.",
        },
        {
          texte: "Dans l’onglet « Gestion par semaine et absences », catégorie « Professeurs », choisissez l’option de saisie des absences.",
          detail: "L’écran « Saisie des absences et des remplacements » s’affiche.",
          icone: {
            src: "/pronote/absence-professeur/c-01-02.webp",
            largeur: 76,
            hauteur: 71,
            alt: "Icône violette en forme de crayon avec la lettre « a », dans la barre d’icônes de la catégorie « Professeurs ».",
          },
        },
        {
          texte: "Sélectionnez le professeur souhaité dans la liste.",
        },
        {
          texte: "Cliquez une fois sur le cours pour saisir l’absence.",
          detail: "L’absence s’ajoute à la liste en bas de l’écran, avec le motif « En attente de motif d’absence ».",
          capture: {
            src: "/pronote/absence-professeur/c-01-03.webp",
            largeur: 1400,
            hauteur: 617,
            alt: "Client EDT, onglet « Gestion par semaine et absences » : des flèches désignent l’onglet et l’icône de saisie des absences dans la catégorie « Professeurs ». À gauche, la ligne du professeur est sélectionnée dans la liste ; une flèche va de cette ligne vers un cours « Technologie » de l’emploi du temps, à droite. En bas, l’absence saisie apparaît avec le motif « En attente de motif d’absence ».",
          },
        },
      ],
    },
    {
      titre: "Les cours annulés dans les emplois du temps (Client Pronote)",
      intro: "Une fois le professeur saisi comme absent, ses cours apparaissent directement dans le Client Pronote avec la mention « Prof. absent ». Vous pouvez masquer ces cours annulés.",
      etapes: [
        {
          texte: "Ouvrez un affichage « Emploi du temps ».",
          icone: {
            src: "/pronote/absence-professeur/c-02-01.webp",
            largeur: 48,
            hauteur: 49,
            alt: "Icône grise de l’affichage « Emploi du temps », formée de trois T (deux en haut, un en dessous).",
          },
        },
        {
          texte: "Cliquez sur le bouton situé en haut à droite de la grille pour afficher ou masquer les cours annulés en raison d’une absence du professeur.",
          capture: {
            src: "/pronote/absence-professeur/c-02-03.webp",
            largeur: 1353,
            hauteur: 536,
            alt: "Deux vues du même emploi du temps, avec le bouton entouré en rouge en haut à droite de la grille. À gauche, les cours annulés du vendredi sont affichés avec la mention « Prof. absent » ; à droite, ils sont masqués et remplacés par des cases grises vides.",
          },
          icone: {
            src: "/pronote/absence-professeur/c-02-02.webp",
            largeur: 46,
            hauteur: 46,
            alt: "Bouton gris en forme de T avec une coche verte, qui affiche ou masque les cours annulés.",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Absences des professeurs",
    date: "juin 2025",
  },
};
