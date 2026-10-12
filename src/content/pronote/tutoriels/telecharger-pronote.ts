import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Installer le Client Pronote et ajouter le Lycée Montaigne ».
 * D’après le document « Télécharger Pronote » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const telechargerPronote: TutorielPronote = {
  slug: "telecharger-pronote",
  titre: "Installer le Client Pronote et ajouter le Lycée Montaigne",
  resume: "Téléchargez et installez le Client Pronote sur votre ordinateur, puis ajoutez la base du Lycée Montaigne pour vous y connecter.",
  public: [
    "professeurs",
    "vie-scolaire",
  ],
  theme: "demarrer",
  application: "client",
  duree: "10 min",
  prerequis: [
    "Disposer d’un ordinateur sous Windows ou macOS.",
    "Connaître vos identifiants Pronote.",
  ],
  sections: [
    {
      titre: "Télécharger et installer le Client Pronote",
      etapes: [
        {
          texte: "Ouvrez la page de téléchargement de Pronote sur le site d’Index Éducation.",
          detail: "Adresse : https://www.index-education.com/fr/telecharger-pronote.php",
        },
        {
          texte: "Sous Windows, cliquez directement sur « Télécharger 64 bits », à côté du Client Pronote de l’année en cours.",
          detail: "Sur Mac, cliquez sur « Vous possédez un système MAC ? ».",
          capture: {
            src: "/pronote/telecharger-pronote/c-01-02.webp",
            largeur: 1400,
            hauteur: 628,
            alt: "Page de téléchargement de Pronote sur le site d’Index Éducation : dans la rubrique « Le client PRONOTE », une flèche désigne le bouton « Télécharger 64 bits » ; une autre désigne, en bas, le bouton « Vous possédez un système MAC ? ».",
          },
        },
        {
          texte: "Une fois le fichier téléchargé, terminez l’installation.",
          capture: {
            src: "/pronote/telecharger-pronote/c-01-03.webp",
            largeur: 1400,
            hauteur: 637,
            alt: "Écran d’installation du Client Pronote : une petite fenêtre « Installation » affiche une barre de progression verte et un bouton « Annuler ».",
          },
        },
      ],
    },
    {
      titre: "Ajouter la base du Lycée Montaigne",
      etapes: [
        {
          texte: "Une fois le Client Pronote installé, ouvrez-le et cliquez sur « Chercher mon établissement » pour ajouter la base du Lycée Montaigne.",
          capture: {
            src: "/pronote/telecharger-pronote/c-01-04.webp",
            largeur: 1355,
            hauteur: 228,
            alt: "Haut de la fenêtre d’accueil du Client Pronote, avec les menus « Configuration » et « Assistance » et le titre « Connectez-vous au serveur de votre choix : ».",
          },
        },
        {
          texte: "Dans la fenêtre « Je cherche mon établissement », recherchez le lycée :",
          liste: [
            "dans le champ « Nom de l’établissement », saisissez « Montaigne » ;",
            "cliquez sur « Chercher » ;",
            "dans la liste, sélectionnez « LYCEE MONTAIGNE » dont la ville est « METN » ;",
            "cliquez sur « Créer un raccourci vers cet établissement ».",
          ],
          capture: {
            src: "/pronote/telecharger-pronote/c-02-01.webp",
            largeur: 1355,
            hauteur: 807,
            alt: "Fenêtre « Je cherche mon établissement » : « montaigne » est saisi dans le champ « Nom de l’établissement », une flèche désigne le bouton « Chercher ». Dans la liste des résultats, la ligne « LYCEE MONTAIGNE », ville « METN », est sélectionnée en bleu ; une flèche désigne le bouton « Créer un raccourci vers cet établissement ».",
          },
        },
        {
          texte: "Saisissez vos identifiants Pronote, puis cliquez sur « Se connecter ».",
          detail: "À gauche, vérifiez que le bon mode est sélectionné (« Mode enseignant », « Mode vie scolaire » ou « Mode administratif »). Vous accédez ensuite normalement à la base.",
          capture: {
            src: "/pronote/telecharger-pronote/c-02-02.webp",
            largeur: 735,
            hauteur: 521,
            alt: "Fenêtre de connexion du Client Pronote : à gauche, « Mode enseignant » est sélectionné ; à droite, l’année scolaire, les champs de l’identifiant et du mot de passe, et le bouton « Se connecter ».",
          },
        },
      ],
    },
  ],
  liens: [
    {
      libelle: "Télécharger Pronote (Index Éducation)",
      href: "https://www.index-education.com/fr/telecharger-pronote.php",
    },
  ],
  source: {
    fichier: "Télécharger Pronote",
    date: "juin 2025",
  },
};
