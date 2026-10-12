import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Indiquer les compétences travaillées dans le cahier de textes ».
 * D’après le document « Acquisition des compétences des élèves sur Pronote » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const competencesTravaillees: TutorielPronote = {
  slug: "competences-travaillees",
  titre: "Indiquer les compétences travaillées dans le cahier de textes",
  resume: "Associer à une séance du cahier de textes les éléments du programme et les compétences travaillés avec la classe.",
  public: [
    "professeurs",
  ],
  theme: "cahier-de-textes",
  application: "client",
  duree: "2 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Dans votre emploi du temps, cliquez sur le cours de la classe concernée.",
        },
        {
          texte: "Cliquez sur l’icône du cahier de textes, la première de la barre d’icônes à droite de l’emploi du temps.",
          capture: {
            src: "/pronote/competences-travaillees/c-01-02.webp",
            largeur: 1130,
            hauteur: 620,
            alt: "Emploi du temps de la semaine dans le Client Pronote. Une flèche rouge désigne un cours de technologie en 4e, le jeudi ; une autre désigne la première icône (cahier de textes) de la barre d’icônes verticale, à droite de la grille.",
          },
        },
        {
          texte: "Dans la fiche du cours qui s’ouvre, cliquez sur « Éléments du programme travaillés ».",
          capture: {
            src: "/pronote/competences-travaillees/c-01-04.webp",
            largeur: 1184,
            hauteur: 832,
            alt: "Fiche du cahier de textes d’un cours de technologie en 4e : champ « Titre », zone de contenu avec sa barre d’outils, et en bas le bouton « Éléments du programme travaillés » précédé d’une icône de crayon.",
          },
          icone: {
            src: "/pronote/competences-travaillees/c-01-03.webp",
            largeur: 331,
            hauteur: 46,
            alt: "Bouton « Éléments du programme travaillés », avec une icône de crayon.",
          },
        },
        {
          texte: "Dans la fenêtre « Saisie des principaux éléments travaillés du programme », cochez la ou les compétences travaillées pendant la séance.",
          detail: "En haut de la fenêtre, vous pouvez choisir le cycle et la matière, et indiquer quels éléments afficher : ceux que vous avez créés, ceux du programme proposés par le LSU, ceux partagés par les professeurs et les compétences des référentiels par matière.",
          capture: {
            src: "/pronote/competences-travaillees/c-02-02.webp",
            largeur: 1400,
            hauteur: 1480,
            alt: "Fenêtre « Saisie des principaux éléments travaillés du programme » : choix du cycle (Cycle 4) et de la matière (Technologie), cases d’affichage des éléments, puis la liste des compétences regroupées par domaine, chacune précédée d’une case à cocher. Une flèche rouge désigne la case de la première compétence.",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Acquisition des compétences des élèves sur Pronote",
    date: "juin 2025",
  },
};
