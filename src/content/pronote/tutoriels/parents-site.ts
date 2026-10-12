import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Se connecter à Pronote depuis le navigateur ».
 * D’après le document « Pronote Parents — site » d’Eddy Bachaalany (septembre 2022).
 * Captures : données personnelles masquées avant publication.
 */
export const parentsSite: TutorielPronote = {
  slug: "parents-site",
  titre: "Se connecter à Pronote depuis le navigateur",
  resume: "Accéder à l’Espace Parents de Pronote depuis le site du Lycée Montaigne et personnaliser votre mot de passe lors de la première connexion.",
  public: [
    "parents",
  ],
  theme: "espace-parents",
  application: "espace",
  duree: "3 min",
  prerequis: [
    "Avoir reçu par e-mail vos identifiants Pronote (identifiant et mot de passe).",
  ],
  sections: [
    {
      titre: "Accéder à Pronote depuis le site du lycée",
      etapes: [
        {
          texte: "Dans votre navigateur (Google Chrome, Microsoft Edge, Firefox, Safari…), recherchez « Lycée Montaigne ».",
          capture: {
            src: "/pronote/parents-site/c-01-02.webp",
            largeur: 1354,
            hauteur: 46,
            alt: "Barre d’adresse d’un navigateur dans laquelle est tapée la recherche « lycee montaigne ».",
          },
        },
        {
          texte: "Cliquez sur le premier lien proposé, celui du site du Lycée Montaigne.",
          capture: {
            src: "/pronote/parents-site/c-01-03.webp",
            largeur: 1355,
            hauteur: 489,
            alt: "Page de résultats Google pour « lycee montaigne » : une flèche rouge désigne le premier lien, « Lycee Montaigne | College Lycee Francais de Beit Chabab ».",
          },
        },
        {
          texte: "Dans les « Liens utiles », à droite de la page, cliquez sur « Pronote ».",
          capture: {
            src: "/pronote/parents-site/c-01-04.webp",
            largeur: 285,
            hauteur: 520,
            alt: "Colonne de droite du site du Lycée Montaigne : sous le titre « Liens utiles », une flèche rouge désigne le lien « Pronote », entre « Trait d’union » et « Web radio ».",
          },
        },
        {
          texte: "Vous êtes redirigé vers l’espace Pronote du Lycée Montaigne : choisissez l’espace « Parents ».",
          capture: {
            src: "/pronote/parents-site/c-01-05.webp",
            largeur: 1355,
            hauteur: 561,
            alt: "Page d’accueil Pronote de l’établissement proposant les espaces Direction, Professeurs, Vie scolaire, Parents, Accompagnants et Élèves ; l’espace à choisir est « Parents ».",
          },
        },
      ],
    },
    {
      titre: "Se connecter et personnaliser son mot de passe",
      etapes: [
        {
          texte: "Saisissez l’identifiant et le mot de passe qui vous ont été envoyés par e-mail, puis cliquez sur « Se connecter ».",
          capture: {
            src: "/pronote/parents-site/c-02-02.webp",
            largeur: 468,
            hauteur: 496,
            alt: "Fenêtre de connexion Pronote (ici celle de l’« Espace Élèves ») avec un champ pour l’identifiant, un champ pour le mot de passe, le lien « Récupérer son identifiant et son mot de passe » et le bouton « Se connecter ».",
          },
        },
        {
          texte: "Lors de votre première connexion, Pronote vous demande de personnaliser votre mot de passe : saisissez-le dans « Nouveau mot de passe ».",
          detail: "Le mot de passe doit contenir entre 8 et 32 caractères, dont au moins un chiffre et une lettre, et être différent de votre nom, de votre identifiant et du mot de passe actuel.",
          capture: {
            src: "/pronote/parents-site/c-02-03.webp",
            largeur: 1354,
            hauteur: 654,
            alt: "Fenêtre « Personnalisation du mot de passe » : deux flèches rouges désignent les champs « Nouveau mot de passe » et « Confirmation du nouveau » ; à droite, les règles du mot de passe ; en bas, les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Saisissez-le une seconde fois dans « Confirmation du nouveau », puis cliquez sur « Valider ».",
        },
      ],
    },
  ],
  astuces: [
    {
      ton: "astuce",
      titre: "Identifiant ou mot de passe oublié",
      texte: "Si vous avez oublié votre identifiant ou votre mot de passe, cliquez sur le lien « Récupérer son identifiant et son mot de passe », sur la page de connexion.",
    },
  ],
  source: {
    fichier: "Pronote Parents — site",
    date: "septembre 2022",
  },
};
