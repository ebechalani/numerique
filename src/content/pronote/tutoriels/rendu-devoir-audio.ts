import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Demander un rendu de devoir par fichier audio ».
 * D’après le document « Rendu de devoirs par fichier audio » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const renduDevoirAudio: TutorielPronote = {
  slug: "rendu-devoir-audio",
  titre: "Demander un rendu de devoir par fichier audio",
  resume: "Dans le cahier de textes, demander que le travail à faire soit rendu sous forme d’enregistrement audio par les élèves.",
  public: [
    "professeurs",
  ],
  theme: "cahier-de-textes",
  application: "client",
  duree: "2 min",
  prerequis: [
    "Être en train de saisir le cahier de textes d’un cours, rubrique « Travail à effectuer ».",
  ],
  sections: [
    {
      intro: "Lors de la saisie d’un travail dans le cahier de textes, vous pouvez choisir un « Mode de rendu » audio : l’élève s’enregistre directement depuis son Espace Élèves, ou y dépose un fichier déjà enregistré.",
      etapes: [
        {
          texte: "Ajoutez la description du travail demandé, dans la colonne « Description ».",
          capture: {
            src: "/pronote/rendu-devoir-audio/c-01-02.webp",
            largeur: 1400,
            hauteur: 402,
            alt: "Rubrique « Travail à effectuer » du cahier de textes : une flèche rouge montre la description du travail dans la colonne « Description », une flèche orange la date d’échéance dans la colonne « Pour le ». Une flèche verte part de la colonne « Mode de rendu » vers la fenêtre « Mode de rendu » ouverte, et montre l’option « Audio - A enregistrer sur l’Espace Elèves (3 min. max) », sous « Aucun rendu prévu », « À remettre au professeur » et « À déposer dans l’Espace Élèves (4 Mo max) » ; en bas, les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Précisez la date d’échéance, dans la colonne « Pour le ».",
        },
        {
          texte: "Dans la colonne « Mode de rendu », choisissez « Audio - A enregistrer sur l’Espace Elèves ».",
          detail: "La durée maximale de l’enregistrement est indiquée entre parenthèses à côté de l’option, par exemple « 3 min. max ».",
        },
        {
          texte: "Cliquez sur « Valider ».",
        },
      ],
    },
  ],
  source: {
    fichier: "Rendu de devoirs par fichier audio",
    date: "juin 2025",
  },
};
