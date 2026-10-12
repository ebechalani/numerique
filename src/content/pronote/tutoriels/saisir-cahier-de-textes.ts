import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Saisir le cahier de textes ».
 * D’après le document « Saisir le cahier de textes » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const saisirCahierDeTextes: TutorielPronote = {
  slug: "saisir-cahier-de-textes",
  titre: "Saisir le cahier de textes",
  resume: "Remplissez le cahier de textes d’une séance dans le Client Pronote, puis vérifiez la charge de travail d’une classe.",
  public: [
    "professeurs",
  ],
  theme: "cahier-de-textes",
  application: "client",
  duree: "5 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      titre: "Remplir le cahier de textes d’une séance",
      intro: "Les numéros de la capture correspondent aux étapes.",
      etapes: [
        {
          texte: "Cliquez sur l’onglet « Cahier de textes ».",
          capture: {
            src: "/pronote/saisir-cahier-de-textes/c-01-02.webp",
            largeur: 1400,
            hauteur: 927,
            alt: "Capture annotée du Client Pronote, onglet « Cahier de textes ». Des encadrés numérotés de 1 à 6 désignent : 1) l’onglet « Cahier de textes » ; 2) un cours de la classe dans la grille de gauche ; 3) les champs « Titre » et contenu de la séance ; 4) les icônes d’ajout de fichier, de lien ou de QCM ; 5) le bouton « Éléments du programme travaillés », qui ouvre la liste des éléments du programme à cocher ; 6) la case « Publié », en haut à droite.",
          },
        },
        {
          texte: "Dans la grille de gauche, sélectionnez le cours de la classe.",
        },
        {
          texte: "Complétez les champs de la séance : le « Titre », le contenu et la « Catégorie ».",
        },
        {
          texte: "Au besoin, ajoutez un fichier, un lien ou un QCM de révision avec les icônes situées à gauche du contenu.",
        },
        {
          texte: "Cliquez sur « Éléments du programme travaillés » pour indiquer ce qui a été travaillé pendant la séance.",
          detail: "Dans la fenêtre qui s’ouvre, cochez les éléments concernés.",
        },
        {
          texte: "Si vous voulez forcer la publication avant la date du cours, cochez « Publié », en haut à droite.",
        },
      ],
    },
    {
      titre: "Vérifier la charge de travail d’une classe",
      intro: "Les numéros de la capture correspondent aux étapes.",
      etapes: [
        {
          texte: "Cliquez sur l’onglet « Cahier de textes ».",
          capture: {
            src: "/pronote/saisir-cahier-de-textes/c-01-03.webp",
            largeur: 1400,
            hauteur: 1063,
            alt: "Capture annotée du Client Pronote, écran « Charge de travail des classes ». Des encadrés numérotés de 1 à 4 désignent : 1) l’onglet « Cahier de textes » ; 2) l’onglet « Charge de travail » et l’icône « Planning de la charge de travail » ; 3) la classe 4A sélectionnée dans la liste « Classes » ; 4) la semaine 22 dans la barre des semaines. En dessous, les devoirs donnés à la classe s’affichent par jour.",
          },
        },
        {
          texte: "Cliquez sur « Charge de travail », puis sur l’icône « Planning de la charge de travail ».",
        },
        {
          texte: "Sélectionnez la classe dans la liste « Classes ».",
        },
        {
          texte: "Sélectionnez la semaine dans la barre des semaines.",
          detail: "Les devoirs, les évaluations et les travaux à faire donnés à la classe s’affichent jour par jour.",
        },
      ],
    },
  ],
  source: {
    fichier: "Saisir le cahier de textes",
    date: "juin 2025",
  },
};
