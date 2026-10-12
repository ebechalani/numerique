import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Créer un mémo pour la vie scolaire ».
 * D’après le document « Cahier de correspondance » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const memoVieScolaire: TutorielPronote = {
  slug: "memo-vie-scolaire",
  titre: "Créer un mémo pour la vie scolaire",
  resume: "Rédigez un mémo sur un élève depuis la salle de classe et partagez-le avec le personnel de vie scolaire.",
  public: [
    "professeurs",
  ],
  theme: "appel",
  application: "client",
  duree: "2 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      intro: "Pour communiquer rapidement au sujet d’un élève depuis la salle de classe, vous pouvez rédiger un mémo dans l’onglet « Vie scolaire » de sa fiche.",
      etapes: [
        {
          texte: "Survolez l’onglet « Ressources », puis choisissez l’icône en forme de dossier, à droite de « Élèves ».",
          capture: {
            src: "/pronote/memo-vie-scolaire/c-01-05.webp",
            largeur: 1354,
            hauteur: 442,
            alt: "Client Pronote : une flèche rouge désigne l’onglet « Ressources », une autre l’icône en forme de dossier, à droite de « Élèves ». En dessous, l’en-tête de la liste des élèves (« Nom », « Prénom », « Né(e) le »…).",
          },
          icone: {
            src: "/pronote/memo-vie-scolaire/c-01-04.webp",
            largeur: 33,
            hauteur: 36,
            alt: "Icône blanche en forme de dossier sur fond bleu-vert, dans la barre d’icônes de l’onglet « Ressources ».",
          },
        },
        {
          texte: "Sélectionnez l’élève dans la liste.",
        },
        {
          texte: "Dans le volet de droite, cliquez sur l’onglet « Vie scolaire ».",
          capture: {
            src: "/pronote/memo-vie-scolaire/c-01-06.webp",
            largeur: 1354,
            hauteur: 469,
            alt: "Liste des élèves dans l’onglet « Ressources » : une flèche rouge désigne la ligne de l’élève sélectionné, surlignée en bleu. À droite, une autre flèche rouge désigne l’onglet « Vie scolaire » de la fiche de l’élève ; en bas du volet, le cadre des mémos et le bouton « Créer un mémo ».",
          },
        },
        {
          texte: "Dans le cadre des mémos de la vie scolaire, cliquez sur « Créer un mémo », puis saisissez votre commentaire.",
          detail: "La date de saisie et le nom de l’auteur s’affichent automatiquement.",
          capture: {
            src: "/pronote/memo-vie-scolaire/c-01-07.webp",
            largeur: 492,
            hauteur: 219,
            alt: "Volet « Vie scolaire » de la fiche élève : une flèche rouge désigne « Créer un mémo ». En dessous, le mémo créé apparaît avec sa date et le nom de son auteur.",
          },
        },
        {
          texte: "Pour partager ce mémo avec le personnel de vie scolaire, vérifiez que la case de la colonne « Partagé » est cochée.",
          capture: {
            src: "/pronote/memo-vie-scolaire/c-01-08.webp",
            largeur: 1224,
            hauteur: 248,
            alt: "Cadre des mémos de la vie scolaire : une flèche rouge désigne la coche verte dans la colonne « Partagé », sur la ligne du mémo.",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Cahier de correspondance",
    date: "juin 2025",
  },
};
