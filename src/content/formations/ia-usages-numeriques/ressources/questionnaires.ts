import type { Questionnaire, ChampRestitution } from "@/content/types";

/**
 * Les deux questionnaires de la session et la trame de restitution.
 *
 * Le déroulé prévoyait Microsoft Forms pour le sondage d’entrée (annexe A) et
 * l’enquête de satisfaction (annexe B), et une page Teams ou OneNote par
 * discipline pour la restitution (partie 4.6). Les trois sont repris ici : les
 * enseignants répondent sur le site, sans aucune application externe, et les
 * résultats s’agrègent au même endroit que le reste du contenu.
 *
 * Les intitulés sont ceux des annexes, au mot près — la diapositive 2 reformule
 * le sondage en le raccourcissant, c’est la version longue de l’annexe A qui
 * fait foi.
 *
 * Aucun champ nominatif : les formulaires d’origine n’en comportaient pas, on
 * n’en ajoute pas. Seule la restitution par groupe demande les membres, saisis
 * volontairement, et sa notice rappelle qu’aucune donnée d’élève ne doit
 * figurer dans la ressource déposée.
 */

/* ------------------------------------------------------------------ */
/* Annexe A — sondage d’entrée (0:00, pendant l’installation)          */
/* ------------------------------------------------------------------ */

export const sondageEntree: Questionnaire = {
  slug: "sondage",
  titre: "Sondage d’entrée",
  intro:
    "Trois questions et une question ouverte, avant de commencer. Les réponses sont anonymes : ni nom, ni adresse, ni identifiant — rien ne permet de savoir qui a répondu quoi. Elles servent à ajuster la séance à vos usages réels plutôt qu’à des généralités, et les résultats seront affichés en direct dans la salle dès la première partie.",
  remerciement:
    "Merci — votre réponse est enregistrée. Rejoignez la formation : les résultats s’affichent dans quelques minutes.",
  moment: "À l’arrivée, pendant l’installation — 5 minutes",
  questions: [
    {
      id: "usage",
      type: "choix-unique",
      libelle: "Utilisez-vous des outils d’IA générative ?",
      options: ["Jamais", "Rarement", "Souvent", "Tous les jours"],
      ordonnee: true,
      obligatoire: true,
    },
    {
      id: "pourquoi",
      type: "choix-multiple",
      libelle: "Pour quoi faire ?",
      options: [
        "Préparer des cours",
        "Corriger ou évaluer",
        "Tâches administratives",
        "Usage personnel",
        "Je n’en utilise pas",
      ],
    },
    {
      id: "eleves",
      type: "choix-unique",
      libelle: "Vos élèves l’utilisent-ils pour leurs travaux ?",
      options: ["Non", "Je ne sais pas", "Oui, parfois", "Oui, souvent"],
      ordonnee: true,
      obligatoire: true,
    },
    {
      id: "question",
      type: "texte-libre",
      libelle: "Quelle est votre principale question sur l’IA aujourd’hui ?",
      aide: "Une phrase suffit. Les questions posées ici sont projetées telles quelles et orientent la séance.",
      lignes: 3,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Annexe B — enquête de satisfaction (1:55, à la clôture)             */
/* ------------------------------------------------------------------ */

export const enqueteSatisfaction: Questionnaire = {
  slug: "satisfaction",
  titre: "Enquête de satisfaction",
  intro:
    "Quatre questions, deux minutes, avant de quitter la salle. Les réponses sont anonymes : ni nom, ni adresse, ni identifiant. Elles servent à améliorer la session et à choisir les ateliers de l’année.",
  remerciement:
    "Merci pour votre retour. La fiche outils vous est envoyée en version numérique le jour même ; le référent numérique reste disponible sur rendez-vous.",
  moment: "À la fin de la séance, avant de quitter la salle — 2 minutes",
  questions: [
    {
      id: "comprehension",
      type: "echelle",
      libelle:
        "La session m’a permis de mieux comprendre ce qu’est une IA générative.",
      min: 1,
      max: 5,
      libelleMin: "Pas du tout",
      libelleMax: "Tout à fait",
      obligatoire: true,
    },
    {
      id: "charte",
      type: "echelle",
      libelle:
        "Je connais maintenant les règles de la charte IA de l’établissement.",
      min: 1,
      max: 5,
      libelleMin: "Pas du tout",
      libelleMax: "Tout à fait",
      obligatoire: true,
    },
    {
      id: "notebooklm",
      type: "echelle",
      libelle:
        "Je me sens capable d’utiliser NotebookLM pour préparer une ressource à partir de mon cours.",
      min: 1,
      max: 5,
      libelleMin: "Pas du tout",
      libelleMax: "Tout à fait",
      obligatoire: true,
    },
    {
      id: "suite",
      type: "texte-libre",
      libelle: "De quel atelier auriez-vous besoin ensuite ?",
      aide: "Sont déjà prévus : « RGPD au quotidien » avant les vacances d’automne, « Préparer ses cours avec l’IA » en novembre, et un café numérique mensuel.",
      lignes: 3,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Partie 4.6 — trame de restitution par discipline                    */
/* ------------------------------------------------------------------ */

/**
 * Remplace la page Teams ou OneNote par discipline. Un groupe de 3 à 4
 * personnes la remplit à la fin de l’atelier disciplinaire, après avoir vérifié
 * sa ressource ; les dépôts alimentent la restitution éclair et la check-list
 * collective des vigilances.
 */
export const champsRestitution: ChampRestitution[] = [
  {
    id: "discipline",
    libelle: "Discipline",
    type: "texte",
    obligatoire: true,
  },
  {
    id: "niveau",
    libelle: "Niveau ou classe",
    type: "texte",
  },
  {
    id: "membres",
    libelle: "Membres du groupe",
    aide: "Les prénoms suffisent. Et aucune donnée d’élève ne doit figurer dans la ressource déposée : ni nom, ni note, ni copie.",
    type: "texte",
  },
  {
    id: "outil",
    libelle: "Outil utilisé",
    type: "choix",
    options: ["NotebookLM", "Copilot", "Les deux"],
    obligatoire: true,
  },
  {
    id: "ressource",
    libelle: "Ressource produite",
    aide: "Décrivez la ressource en deux ou trois phrases, ou collez le lien de partage du carnet.",
    type: "texte-long",
    obligatoire: true,
  },
  {
    id: "requete",
    libelle: "Requête(s) utilisée(s)",
    aide: "Collez-les telles quelles : ce sont elles qui servent aux collègues.",
    type: "texte-long",
  },
  {
    id: "corrections",
    libelle: "Ce qu’il a fallu corriger ou compléter",
    aide: "Erreurs de contenu, niveau inadapté, formulation, ce qui manquait.",
    type: "texte-long",
  },
  {
    id: "vigilance",
    libelle: "Une vigilance à partager avec les collègues",
    aide: "Une seule, la plus utile — elle rejoint la check-list collective de la restitution.",
    type: "texte-long",
  },
];
