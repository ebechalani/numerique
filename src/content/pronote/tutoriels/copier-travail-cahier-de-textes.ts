import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Copier un travail déjà saisi dans le cahier de textes ».
 * D’après le document « Pronote — cahier de textes » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const copierTravailCahierDeTextes: TutorielPronote = {
  slug: "copier-travail-cahier-de-textes",
  titre: "Copier un travail déjà saisi dans le cahier de textes",
  resume: "Retrouver le contenu d’un travail déjà saisi dans le cahier de textes, puis le copier dans la classe désirée pour le publier.",
  public: [
    "professeurs",
  ],
  theme: "cahier-de-textes",
  application: "client",
  duree: "3 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Sur la page d’accueil, choisissez dans la liste déroulante de l’emploi du temps la semaine où vous avez saisi le travail.",
        },
        {
          texte: "Cliquez sur l’onglet du cahier de textes, « Cah. », en haut à droite.",
          capture: {
            src: "/pronote/copier-travail-cahier-de-textes/c-01-02.webp",
            largeur: 1400,
            hauteur: 672,
            alt: "Page d’accueil du Client Pronote : à gauche, l’emploi du temps avec la liste déroulante « Semaine précédente », désignée par une flèche rouge ; en haut à droite, la rangée d’onglets « Rsc. », « Cah. », « QCM », « Not. », « Cpt. », « Bul. », où une seconde flèche désigne « Cah. ». Le contenu des rubriques de droite est masqué.",
          },
        },
        {
          texte: "Dans l’emploi du temps, cliquez sur le cours de la classe concernée.",
        },
        {
          texte: "Cliquez sur l’icône du cahier de textes, la seconde des deux icônes situées à droite du titre « Saisie du cahier de textes ».",
          capture: {
            src: "/pronote/copier-travail-cahier-de-textes/c-01-03.webp",
            largeur: 1102,
            hauteur: 761,
            alt: "Onglet « Saisie » du cahier de textes : dans l’emploi du temps de la semaine, une flèche rouge désigne un cours de 4e B ; une autre flèche désigne l’icône du cahier de textes, la seconde des deux icônes à droite du titre « Saisie du cahier de textes ». À droite, la fiche du cours avec ses contenus.",
          },
        },
        {
          texte: "Les travaux déjà donnés apparaissent. Survolez un travail et cliquez dessus avec le bouton droit de la souris.",
          detail: "La fenêtre précise qu’à la suite de modifications d’emplois du temps, ces cahiers de textes ne sont plus consultables par les élèves et qu’il faut les réaffecter en les faisant glisser sur vos cours.",
          capture: {
            src: "/pronote/copier-travail-cahier-de-textes/c-02-02.webp",
            largeur: 1400,
            hauteur: 449,
            alt: "Fenêtre listant les cahiers de textes déjà saisis qui ne sont plus rattachés à un cours, avec les colonnes « Classe/Groupe », « Titre », « Catégorie », « Travail » et « Ancien cours ». Une flèche rouge désigne la première ligne.",
          },
        },
        {
          texte: "Choisissez « Visualiser le cahier de textes » : le contenu du travail s’affiche.",
          capture: {
            src: "/pronote/copier-travail-cahier-de-textes/c-02-03.webp",
            largeur: 1004,
            hauteur: 309,
            alt: "Menu contextuel ouvert par un clic droit sur une ligne de la liste, avec les choix « Visualiser le cahier de textes » et « Supprimer le cahier de textes ».",
          },
        },
        {
          texte: "Copiez le contenu, puis collez-le dans le cahier de textes de la classe désirée pour le publier.",
        },
      ],
    },
  ],
  source: {
    fichier: "Pronote — cahier de textes",
    date: "juin 2025",
  },
};
