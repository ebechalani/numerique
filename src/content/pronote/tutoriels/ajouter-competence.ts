import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Ajouter une compétence ».
 * D’après le document « Ajouter une compétence » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const ajouterCompetence: TutorielPronote = {
  slug: "ajouter-competence",
  titre: "Ajouter une compétence",
  resume: "Ajouter un référentiel de compétences pour votre matière, y saisir des compétences et l’associer à une classe.",
  public: [
    "professeurs",
  ],
  theme: "evaluation",
  application: "client",
  duree: "3 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Dans l’onglet « Compétences » (« Cpt. »), choisissez l’option « Référentiels par matière ».",
          capture: {
            src: "/pronote/ajouter-competence/c-01-02.webp",
            largeur: 1400,
            hauteur: 373,
            alt: "Client Pronote, onglet « Cpt. » (Compétences) sélectionné en haut à droite, rubrique « Référentiels » : une flèche rouge désigne l’icône « Référentiels par matière », juste à droite de « Référentiels ». À gauche, la liste des référentiels du niveau « Lycée » (colonnes « Libellé », « Elt », « Item », « Classes évaluées ») avec, en tête, « Ajouter un référentiel » ; à droite, les compétences travaillées du référentiel sélectionné et « Saisir un élément ».",
          },
        },
        {
          texte: "Si votre référentiel n’existe pas, cliquez sur « Ajouter un référentiel ».",
          capture: {
            src: "/pronote/ajouter-competence/c-01-04.webp",
            largeur: 480,
            hauteur: 55,
            alt: "Le bouton « Ajouter un référentiel », précédé d’un signe plus.",
          },
        },
        {
          texte: "Choisissez votre référentiel dans la liste qui apparaît, puis cliquez sur « Valider ».",
          capture: {
            src: "/pronote/ajouter-competence/c-01-03.webp",
            largeur: 613,
            hauteur: 1003,
            alt: "Fenêtre « Lycée - Ajouter un référentiel » : case « Afficher uniquement les matières affectées à des services » cochée, liste des matières (Anglais, Arabe, Éducation civique, EPS, Espagnol, Histoire et Géographie, Informatique, Philosophie, Physique-Chimie…), puis les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Cliquez sur le référentiel dans la liste.",
        },
        {
          texte: "Cliquez sur « Saisir un élément » pour ajouter les compétences de ce référentiel.",
          capture: {
            src: "/pronote/ajouter-competence/c-02-01.webp",
            largeur: 1400,
            hauteur: 298,
            alt: "Référentiels par matière : le référentiel « Sciences et technologie » est sélectionné à gauche ; à droite, une flèche rouge désigne « Saisir un élément », au-dessus des compétences déjà saisies.",
          },
        },
        {
          texte: "Ajoutez la classe en double-cliquant dans la colonne « Classes évaluées », sur la ligne du référentiel.",
          detail: "Une fois ajoutée, la compétence peut être utilisée dans un devoir que vous créez.",
          capture: {
            src: "/pronote/ajouter-competence/c-02-02.webp",
            largeur: 1400,
            hauteur: 298,
            alt: "Référentiels par matière : une flèche rouge désigne la cellule « Classes évaluées » du référentiel « Sciences et technologie », où figure la classe « 2NDE(2/2) ».",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Ajouter une compétence",
    date: "juin 2025",
  },
};
