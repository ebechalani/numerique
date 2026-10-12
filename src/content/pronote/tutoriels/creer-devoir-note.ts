import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Créer un devoir noté ».
 * D’après le document « Créer un devoir noté » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const creerDevoirNote: TutorielPronote = {
  slug: "creer-devoir-note",
  titre: "Créer un devoir noté",
  resume: "Créer un devoir noté pour une classe et le paramétrer : date, nom, publication des notes, corrigé, barème, coefficient et options.",
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
      titre: "Ouvrir la saisie des notes",
      etapes: [
        {
          texte: "Dans votre emploi du temps, cliquez avec le bouton droit de la souris sur un cours de la classe désirée.",
        },
        {
          texte: "Choisissez l’option « Saisir des notes ».",
          capture: {
            src: "/pronote/creer-devoir-note/c-01-02.webp",
            largeur: 878,
            hauteur: 625,
            alt: "Emploi du temps dans le Client Pronote, avec le menu contextuel ouvert par un clic droit sur un cours : l’option « Saisir des notes » est encadrée en rouge.",
          },
        },
        {
          texte: "Cliquez sur « Créer un devoir ».",
          capture: {
            src: "/pronote/creer-devoir-note/c-01-03.webp",
            largeur: 1195,
            hauteur: 597,
            alt: "Onglet « Saisie des notes » : à gauche, la liste des services (matière et classe), celui de la 6e B sélectionné ; à droite, au-dessus de la liste des élèves (masquée), le bouton « Créer un devoir » encadré en rouge.",
          },
        },
      ],
    },
    {
      titre: "Paramétrer le devoir",
      intro: "La fenêtre « Créer un devoir » s’ouvre.",
      etapes: [
        {
          texte: "Précisez la date du devoir dans « Date ».",
          capture: {
            src: "/pronote/creer-devoir-note/c-02-02.webp",
            largeur: 720,
            hauteur: 669,
            alt: "Fenêtre « Créer un devoir » : champs « Date », « Catégorie » et « Commentaire », période, « Publier la note à partir du » avec les cases « avec le sujet » et « avec le corrigé », « Notation sur » et « Coefficient », cases « Ramener sur 20 les notes du devoir lors du calcul de la moyenne », « Devoir facultatif » (avec la liste « Comme un bonus ») et « Créer une évaluation », puis les boutons « Annuler » et « Créer ». Des flèches désignent les champs à renseigner.",
          },
        },
        {
          texte: "Saisissez le nom du devoir dans le champ « Commentaire ».",
        },
        {
          texte: "Dans « Publier la note à partir du », indiquez la date à laquelle les notes seront publiées sur les Espaces.",
        },
        {
          texte: "Si vous le souhaitez, joignez un corrigé avec le trombone situé à droite de « avec le corrigé ».",
          detail: "Le corrigé sera publié sur les Espaces en même temps que les notes.",
        },
        {
          texte: "Indiquez le barème du devoir dans « Notation sur ».",
        },
        {
          texte: "Indiquez le coefficient dans « Coefficient ».",
        },
        {
          texte: "Cochez de préférence « Ramener sur 20 les notes du devoir lors du calcul de la moyenne ».",
        },
        {
          texte: "Si besoin, cochez « Devoir facultatif ».",
          detail: "Un devoir facultatif n’est pris en compte que s’il améliore la moyenne de l’élève. Vous avez également la possibilité d’attribuer un bonus à certains élèves (liste « Comme un bonus », à côté de la case).",
        },
        {
          texte: "Pour créer en même temps une évaluation de compétences, cochez « Créer une évaluation ».",
          detail: "Vous pourrez ainsi sélectionner les compétences sur lesquelles les élèves sont évalués.",
        },
        {
          texte: "Dans la fenêtre qui s’affiche, cochez les éléments évalués parmi ceux des référentiels par domaine et/ou par matière.",
        },
        {
          texte: "Cliquez sur « Créer ».",
        },
      ],
    },
  ],
  source: {
    fichier: "Créer un devoir noté",
    date: "juin 2025",
  },
};
