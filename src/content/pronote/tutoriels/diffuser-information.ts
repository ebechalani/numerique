import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Diffuser une information et démarrer une discussion ».
 * D’après le document « Diffusion d’information et discussion » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const diffuserInformation: TutorielPronote = {
  slug: "diffuser-information",
  titre: "Diffuser une information et démarrer une discussion",
  resume: "Depuis la messagerie du Client Pronote, envoyer une information aux parents d’une ou plusieurs classes ou à des parents précis, et démarrer une discussion avec des parents.",
  public: [
    "professeurs",
    "vie-scolaire",
  ],
  theme: "communication",
  application: "client",
  duree: "5 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants.",
  ],
  sections: [
    {
      titre: "Diffuser une information aux parents",
      etapes: [
        {
          texte: "Rendez-vous dans l’onglet « Com. » (Communication), puis dans « Messagerie » > « Informations et sondages ».",
          capture: {
            src: "/pronote/diffuser-information/c-01-02.webp",
            largeur: 1400,
            hauteur: 291,
            alt: "Fenêtre du Client Pronote, rubrique « Messagerie » ouverte à gauche : une flèche rouge montre l’onglet « Com. » en haut à droite, une autre l’option « Diffusion », au-dessus de la liste des informations (objets masqués).",
          },
        },
        {
          texte: "Placez-vous du côté « Diffusion ».",
        },
        {
          texte: "Cliquez sur « Créer une information ou un sondage ».",
          capture: {
            src: "/pronote/diffuser-information/c-01-04.webp",
            largeur: 1400,
            hauteur: 207,
            alt: "Liste des informations côté « Diffusion » : la pointe d’une flèche rouge, sur le bord gauche, montre la ligne « Créer une information ou un sondage », en haut de la liste.",
          },
          icone: {
            src: "/pronote/diffuser-information/c-01-03.webp",
            largeur: 541,
            hauteur: 44,
            alt: "Bouton « Créer une information ou un sondage », précédé d’un signe plus dans un cercle.",
          },
        },
        {
          texte: "Choisissez « Diffuser une information » : la fenêtre de création s’ouvre.",
          capture: {
            src: "/pronote/diffuser-information/c-01-05.webp",
            largeur: 642,
            hauteur: 157,
            alt: "Menu qui s’ouvre avec trois choix : « Diffuser une information » (en surbrillance), « Effectuer un sondage » et « Utiliser un sondage de la bibliothèque ».",
          },
        },
        {
          texte: "Choisissez à qui diffuser l’information.",
          liste: [
            "À une classe entière ou à plusieurs classes : onglet « Destinataires liés aux classes / groupes » (1er cas ci-dessous).",
            "À des parents spécifiques, à titre individuel : onglet « Destinataires à titre individuel » (2e cas ci-dessous).",
          ],
        },
      ],
    },
    {
      titre: "1er cas : diffuser l’information à une ou plusieurs classes entières",
      etapes: [
        {
          texte: "Dans l’onglet « Destinataires liés aux classes / groupes », cliquez sur « … » à côté de « Classes/Groupes » et sélectionnez les classes.",
          capture: {
            src: "/pronote/diffuser-information/c-02-02.webp",
            largeur: 1097,
            hauteur: 526,
            alt: "Fenêtre « Diffuser une information », onglet « Destinataires liés aux classes (0) / groupes (0) » signalé par une flèche rouge ; le bouton « … » à côté de « Classes/Groupes » a ouvert la fenêtre « Sélection des classes et des groupes », où deux classes sont cochées.",
          },
        },
        {
          texte: "Pour envoyer l’information aux parents des élèves des classes sélectionnées, cochez la case « Responsables ».",
          capture: {
            src: "/pronote/diffuser-information/c-02-04.webp",
            largeur: 1097,
            hauteur: 527,
            alt: "Onglet « Destinataires liés aux classes / groupes » : deux flèches rouges montrent les cases « Responsables » et « Professeurs », sous le bouton « … » de « Classes/Groupes ».",
          },
        },
        {
          texte: "Pour l’envoyer aussi aux professeurs de ces classes, cochez la case « Professeurs ».",
        },
      ],
    },
    {
      titre: "2e cas : diffuser l’information à des parents spécifiques",
      etapes: [
        {
          texte: "Ouvrez l’onglet « Destinataires à titre individuel ».",
          capture: {
            src: "/pronote/diffuser-information/c-02-03.webp",
            largeur: 856,
            hauteur: 488,
            alt: "Fenêtre « Diffuser une information », onglet « Destinataires à titre individuel (0) » signalé par une flèche jaune, avec les boutons « … » à côté de « Élèves », « Responsables », « Maîtres de stage », « Professeurs », « Personnels » et « Inspecteurs ».",
          },
        },
        {
          texte: "Cliquez sur « … » à côté de « Responsables » : la fenêtre « Sélection des destinataires » s’affiche.",
          capture: {
            src: "/pronote/diffuser-information/c-03-02.webp",
            largeur: 1367,
            hauteur: 698,
            alt: "Onglet « Destinataires à titre individuel » : une flèche rouge montre le bouton « … » à côté de « Responsables » ; à droite, la fenêtre « Sélection des destinataires » est ouverte, et une seconde flèche montre la liste « Regrouper par : Classe des élèves », au-dessus de la liste des classes.",
          },
        },
        {
          texte: "Dans « Regrouper par », choisissez « Classe des élèves ».",
        },
        {
          texte: "Cliquez sur la flèche à côté de la classe pour afficher ses élèves et choisir l’élève voulu.",
        },
        {
          texte: "Cochez la case à côté du nom de l’élève.",
          detail: "Pronote ajoute automatiquement les parents de cet élève comme destinataires, à titre individuel.",
          capture: {
            src: "/pronote/diffuser-information/c-03-03.webp",
            largeur: 586,
            hauteur: 637,
            alt: "Fenêtre « Sélection des destinataires » : une classe est dépliée et affiche la liste de ses élèves, avec une case à cocher devant chaque nom ; deux cases sont cochées (noms masqués).",
          },
        },
      ],
    },
    {
      titre: "Rédiger et publier l’information",
      etapes: [
        {
          texte: "Rédigez votre message.",
          capture: {
            src: "/pronote/diffuser-information/c-04-02.webp",
            largeur: 1164,
            hauteur: 872,
            alt: "Zone de rédaction de l’information : champ « Titre », barre de mise en forme et zone de texte ; en bas, la case « avec accusé de réception », le choix « Brouillon / Publier », les dates « à partir du … jusqu’au … » et les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Vérifiez les dates de publication (« Publier à partir du … jusqu’au … »).",
        },
        {
          texte: "Cliquez sur « Valider ».",
        },
      ],
    },
    {
      titre: "Démarrer une discussion",
      etapes: [
        {
          texte: "Rendez-vous dans l’onglet « Com. » (Communication), puis dans « Messagerie » > « Discussions ».",
          capture: {
            src: "/pronote/diffuser-information/c-05-02.webp",
            largeur: 1400,
            hauteur: 245,
            alt: "Fenêtre du Client Pronote : flèches rouges sur l’onglet « Com. » en haut à droite et sur l’icône des discussions à côté de « Messagerie » ; la rubrique « Discussions » affiche le bouton « Nouvelle discussion ».",
          },
        },
        {
          texte: "Cliquez sur « Nouvelle discussion ».",
          icone: {
            src: "/pronote/diffuser-information/c-05-03.webp",
            largeur: 143,
            hauteur: 127,
            alt: "Bouton « Nouvelle discussion » : une bulle de discussion surmontée d’un signe plus.",
          },
        },
        {
          texte: "Cliquez sur « … » à côté de « Responsables » : la fenêtre « Sélection des destinataires » s’affiche.",
          capture: {
            src: "/pronote/diffuser-information/c-05-04.webp",
            largeur: 994,
            hauteur: 638,
            alt: "Fenêtre « Nouvelle discussion » : dans « Destinataires », le bouton « … » à côté de « Responsables » est activé ; la fenêtre « Sélection des destinataires » est ouverte, regroupée par « Classe des élèves », avec la liste des classes.",
          },
        },
        {
          texte: "Dans « Regrouper par », choisissez « Classe des élèves ».",
        },
        {
          texte: "Cliquez sur la flèche à côté de la classe pour afficher ses élèves et choisir l’élève voulu.",
        },
        {
          texte: "Cochez la case à côté du nom de l’élève.",
          detail: "Pronote ajoute automatiquement les parents de cet élève comme destinataires, à titre individuel.",
        },
      ],
    },
  ],
  source: {
    fichier: "Diffusion d’information et discussion",
    date: "juin 2025",
  },
};
