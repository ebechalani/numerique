import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Se connecter à l’application mobile Pronote ».
 * D’après le document « Pronote Parents — application » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const parentsApplication: TutorielPronote = {
  slug: "parents-application",
  titre: "Se connecter à l’application mobile Pronote",
  resume: "Configurer l’application Pronote sur votre téléphone ou votre tablette grâce au QR code généré depuis votre espace Pronote.",
  public: [
    "parents",
  ],
  theme: "espace-parents",
  application: "mobile",
  duree: "5 min",
  prerequis: [
    "Être déjà connecté au moins une fois à Pronote depuis le navigateur (voir le tutoriel « Se connecter à Pronote depuis le navigateur »).",
    "Disposer d’un second appareil pour afficher votre espace Pronote pendant que vous configurez l’application.",
  ],
  sections: [
    {
      titre: "Installer l’application",
      etapes: [
        {
          texte: "Téléchargez l’application Pronote sur votre téléphone ou votre tablette.",
          liste: [
            "Android : sur le Google Play Store.",
            "Apple : sur l’App Store.",
          ],
        },
      ],
    },
    {
      titre: "Générer le QR code depuis votre espace Pronote",
      etapes: [
        {
          texte: "Sur un autre appareil, ouvrez le site du Lycée Montaigne et accédez à Pronote.",
          detail: "Vous pouvez aussi ouvrir directement l’adresse https://2050048n.index-education.net/pronote/ dans votre navigateur.",
        },
        {
          texte: "Saisissez vos identifiants : la page d’accueil de votre espace s’affiche.",
        },
        {
          texte: "Cliquez sur l’icône QR code, en haut de la page, à côté de votre nom.",
          capture: {
            src: "/pronote/parents-application/c-01-02.webp",
            largeur: 1354,
            hauteur: 180,
            alt: "En-tête de l’espace Pronote dans le navigateur : une flèche rouge désigne l’icône QR code, à droite du nom de l’utilisateur, juste avant le bouton de déconnexion.",
          },
        },
        {
          texte: "Définissez un code de vérification à 4 chiffres (par exemple 1234), puis cliquez sur « Valider ».",
          detail: "Ce code vous sera demandé lors de la configuration de l’application mobile. Le QR code est valable 10 minutes.",
          capture: {
            src: "/pronote/parents-application/c-01-03.webp",
            largeur: 1354,
            hauteur: 446,
            alt: "Fenêtre « QR Code de configuration de l’application mobile » : une flèche rouge désigne le champ du code de vérification, rempli avec un code d’exemple ; en dessous, le bouton « Valider ».",
          },
        },
      ],
    },
    {
      titre: "Configurer l’application",
      etapes: [
        {
          texte: "Lancez l’application Pronote sur votre téléphone ou votre tablette, puis appuyez sur le bouton « + » situé en bas de l’écran.",
          icone: {
            src: "/pronote/parents-application/c-02-01.webp",
            largeur: 81,
            hauteur: 84,
            alt: "Bouton rond vert marqué d’un « + », en bas de l’écran de l’application Pronote.",
          },
        },
        {
          texte: "Appuyez sur « Flash the QR Code ».",
          capture: {
            src: "/pronote/parents-application/c-02-03.webp",
            largeur: 576,
            hauteur: 563,
            alt: "Écran « Setup an account » de l’application Pronote : l’option « Flash the QR Code », avec son icône de QR code, est celle sur laquelle appuyer.",
          },
        },
        {
          texte: "Scannez le QR code affiché sur votre autre appareil.",
        },
        {
          texte: "Saisissez le code de vérification à 4 chiffres que vous avez défini, puis appuyez sur « VALIDATE ».",
          detail: "Une fois le code validé, l’application est prête à être utilisée.",
          capture: {
            src: "/pronote/parents-application/c-02-05.webp",
            largeur: 501,
            hauteur: 359,
            alt: "Écran « Setup an account » de l’application : sous « Please enter your code », le champ rempli avec un code d’exemple et, en dessous, le bouton « VALIDATE ».",
          },
        },
      ],
    },
  ],
  liens: [
    {
      libelle: "Pronote sur Google Play (Android)",
      href: "https://play.google.com/store/apps/details?id=com.IndexEducation.Pronote&hl=fr&gl=US",
    },
    {
      libelle: "Pronote sur l’App Store (Apple)",
      href: "https://apps.apple.com/fr/app/pronote/id1138223804",
    },
    {
      libelle: "Pronote du Lycée Montaigne",
      href: "https://2050048n.index-education.net/pronote/",
    },
  ],
  source: {
    fichier: "Pronote Parents — application",
    date: "juin 2025",
  },
};
