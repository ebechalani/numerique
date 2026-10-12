import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Synchroniser votre emploi du temps avec le calendrier du téléphone ».
 * D’après le document « Synchronisation du calendrier » d’Eddy Bachaalany (septembre 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const synchroniserCalendrier: TutorielPronote = {
  slug: "synchroniser-calendrier",
  titre: "Synchroniser votre emploi du temps avec le calendrier du téléphone",
  resume: "Exportez votre emploi du temps Pronote au format iCal pour le retrouver dans le calendrier de votre téléphone portable.",
  public: [
    "professeurs",
  ],
  theme: "organisation",
  application: "espace",
  duree: "3 min",
  prerequis: [
    "Connaître vos identifiants Pronote.",
    "Avoir un téléphone portable capable de scanner un QR code et équipé d’une application de calendrier.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Depuis le site du Lycée Montaigne, accédez à Pronote.",
          detail: "Adresse directe : https://2050048n.index-education.net/pronote/",
        },
        {
          texte: "Dans l’onglet « Mes données », cliquez sur « Compte ».",
          capture: {
            src: "/pronote/synchroniser-calendrier/c-01-02.webp",
            largeur: 521,
            hauteur: 900,
            alt: "Menu de l’onglet « Mes données » de Pronote (« Emploi du temps », « Classes/Élèves », « Enseignants », « Personnels »…) : une flèche part de l’onglet « Mes données », une autre désigne « Compte », tout en bas du menu.",
          },
        },
        {
          texte: "Dans la rubrique « Préférences », cliquez sur « Export au format ICal ».",
          capture: {
            src: "/pronote/synchroniser-calendrier/c-01-03.webp",
            largeur: 520,
            hauteur: 845,
            alt: "Menu « Compte » de Pronote, avec les rubriques « Compte », « Communication » et « Préférences » : dans la rubrique « Préférences », une flèche désigne « Export au format ICal », surligné en vert.",
          },
        },
        {
          texte: "Un QR code s’affiche : scannez-le avec votre téléphone portable pour récupérer les données.",
          detail: "Vous pouvez aussi cliquer sur « Copier l’adresse » et coller cette adresse dans votre gestionnaire d’agenda. L’emploi du temps sera alors mis à jour en temps réel.",
          capture: {
            src: "/pronote/synchroniser-calendrier/c-02-02.webp",
            largeur: 523,
            hauteur: 625,
            alt: "Fenêtre « Export au format iCal » : en haut, le lien « Exporter l’emploi du temps au format iCal » ; en dessous, la rubrique « Synchroniser l’emploi du temps avec le gestionnaire d’agenda », le champ d’adresse et le bouton « Copier l’adresse ». Une flèche désigne le QR code à scanner (masqué ici).",
          },
        },
        {
          texte: "Vérifiez le résultat dans le calendrier de votre téléphone portable.",
          capture: {
            src: "/pronote/synchroniser-calendrier/c-02-03.webp",
            largeur: 453,
            hauteur: 582,
            alt: "Application de calendrier d’un téléphone : la semaine de septembre et, en dessous, les cours de la journée (« Technologie - 5e C », « Technologie - 4e B »…) avec leurs horaires et la salle « Laboratoire Techno ».",
          },
        },
      ],
    },
  ],
  astuces: [
    {
      ton: "astuce",
      titre: "Export ponctuel",
      texte: "Le lien « Exporter l’emploi du temps au format iCal » récupère l’emploi du temps tel qu’il est, sans mise à jour automatique. Pour rester synchronisé, préférez le QR code ou « Copier l’adresse ».",
    },
    {
      ton: "attention",
      titre: "Ce QR code est personnel",
      texte: "Le QR code et l’adresse de synchronisation donnent accès à votre emploi du temps sans mot de passe. Ne les partagez pas et ne les affichez pas : scannez-les vous-même, sur votre téléphone.",
    },
  ],
  liens: [
    {
      libelle: "Pronote du Lycée Montaigne",
      href: "https://2050048n.index-education.net/pronote/",
    },
  ],
  source: {
    fichier: "Synchronisation du calendrier",
    date: "septembre 2025",
  },
};
