import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Activer les alertes de messagerie ».
 * D’après le document « Notifications Pronote » d’Eddy Bachaalany (septembre 2022).
 * Captures : données personnelles masquées avant publication.
 */
export const notifications: TutorielPronote = {
  slug: "notifications",
  titre: "Activer les alertes de messagerie",
  resume: "Être prévenu par une fenêtre d’alerte et un signal sonore à la réception d’un message, d’un document, d’une information ou d’un sondage dans le Client Pronote.",
  public: [
    "professeurs",
  ],
  theme: "communication",
  application: "client",
  duree: "1 min",
  prerequis: [
    "Être connecté au Client Pronote.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Dans le menu « Mes préférences », cliquez sur « Communication ».",
          detail: "La fenêtre « Préférences de l’utilisateur » s’ouvre sur l’onglet « Communication ».",
          capture: {
            src: "/pronote/notifications/c-01-02.webp",
            largeur: 1354,
            hauteur: 620,
            alt: "Client Pronote : le menu « Mes préférences » est déroulé ; une flèche rouge désigne la rubrique « Communication », au-dessus de « Messagerie ».",
          },
        },
        {
          texte: "Dans la rubrique « Notification de réception », cochez les deux cases « Afficher une fenêtre d’alerte » et « Émettre un signal sonore ».",
          capture: {
            src: "/pronote/notifications/c-01-03.webp",
            largeur: 1190,
            hauteur: 1137,
            alt: "Fenêtre « Préférences de l’utilisateur », onglet « Communication » : dans la rubrique « Notification de réception », les cases « Afficher une fenêtre d’alerte » et « Émettre un signal sonore » sont cochées.",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "Notifications Pronote",
    date: "septembre 2022",
  },
};
