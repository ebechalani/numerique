import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Récupérer son identifiant et son mot de passe ».
 * D’après le document « Récupérer le mot de passe » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const parentsMotDePasse: TutorielPronote = {
  slug: "parents-mot-de-passe",
  titre: "Récupérer son identifiant et son mot de passe",
  resume: "Retrouver l’accès à l’Espace Parents de Pronote en recevant une clé de sécurité par e-mail et en définissant un nouveau mot de passe.",
  public: [
    "parents",
  ],
  theme: "espace-parents",
  application: "espace",
  duree: "5 min",
  prerequis: [
    "Avoir accès à la messagerie dont vous avez donné l’adresse à l’établissement.",
  ],
  sections: [
    {
      titre: "Demander une clé de sécurité",
      etapes: [
        {
          texte: "Sur la page de connexion de l’Espace Parents, cliquez sur « Récupérer son identifiant et son mot de passe ».",
          capture: {
            src: "/pronote/parents-mot-de-passe/c-01-02.webp",
            largeur: 1400,
            hauteur: 637,
            alt: "Page de connexion de l’Espace Parents de Pronote : une flèche rouge désigne le lien « Récupérer son identifiant et son mot de passe », sous le bouton « Se connecter ».",
          },
        },
        {
          texte: "Saisissez votre adresse e-mail (celle que vous avez donnée à l’établissement), puis validez en cliquant sur le bouton d’envoi.",
          capture: {
            src: "/pronote/parents-mot-de-passe/c-01-04.webp",
            largeur: 1355,
            hauteur: 532,
            alt: "Fenêtre « Récupérer votre identifiant / mot de passe » : des flèches rouges désignent la consigne de ne pas fermer la fenêtre avant d’avoir rempli les 3 étapes ; sous « Etape 1 : Saisissez votre adresse e-mail », le champ de l’adresse et, à sa droite, le bouton d’envoi en forme d’avion en papier ; en dessous, les étapes 2 et 3.",
          },
          icone: {
            src: "/pronote/parents-mot-de-passe/c-01-03.webp",
            largeur: 88,
            hauteur: 84,
            alt: "Icône du bouton d’envoi : un avion en papier vert dans un cercle vert clair.",
          },
        },
      ],
    },
    {
      titre: "Utiliser la clé reçue par e-mail",
      etapes: [
        {
          texte: "Ouvrez l’e-mail envoyé à l’adresse saisie : il contient votre clé de sécurité.",
        },
        {
          texte: "Sélectionnez la clé de sécurité, puis copiez-la.",
          detail: "La clé expire quinze minutes après son envoi.",
          capture: {
            src: "/pronote/parents-mot-de-passe/c-02-01.webp",
            largeur: 1355,
            hauteur: 718,
            alt: "E-mail envoyé par le Lycée Montaigne pour réinitialiser le mot de passe : une flèche rouge désigne la clé de sécurité, en bas du message, à sélectionner et copier.",
          },
        },
        {
          texte: "Revenez à la fenêtre de récupération, collez la clé dans le champ de l’« Etape 2 », puis validez en cliquant sur le bouton d’envoi.",
          capture: {
            src: "/pronote/parents-mot-de-passe/c-02-02.webp",
            largeur: 1355,
            hauteur: 692,
            alt: "Fenêtre « Récupérer votre identifiant / mot de passe » : des flèches rouges désignent le champ de l’« Etape 2 », où coller la clé de sécurité, le bouton d’envoi à sa droite, puis les champs « Mot de passe » et « Confirmation » de l’« Etape 3 ».",
          },
          icone: {
            src: "/pronote/parents-mot-de-passe/c-02-03.webp",
            largeur: 89,
            hauteur: 84,
            alt: "Icône du bouton d’envoi : un avion en papier vert dans un cercle vert clair.",
          },
        },
        {
          texte: "Définissez votre nouveau mot de passe : saisissez-le dans « Mot de passe », puis une seconde fois dans « Confirmation ».",
          detail: "Règle de composition des mots de passe : au moins 8 caractères et 3 critères de complexité.",
          liste: [
            "Au moins un chiffre.",
            "Au moins une lettre.",
            "Un mélange de minuscules et de majuscules.",
          ],
        },
      ],
    },
  ],
  astuces: [
    {
      ton: "attention",
      titre: "Gardez la fenêtre ouverte",
      texte: "La récupération se fait en 3 étapes : ne fermez pas la fenêtre « Récupérer votre identifiant / mot de passe » tant que vous ne les avez pas toutes remplies.",
    },
  ],
  source: {
    fichier: "Récupérer le mot de passe",
    date: "juin 2025",
  },
};
