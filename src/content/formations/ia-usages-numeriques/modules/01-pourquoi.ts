import type { Module } from "@/content/types";

/**
 * Module 1 — Pourquoi on en parle (0:05, 10 min).
 * Sources : diaporama diapositives 3 à 5 (avec leurs notes),
 * déroulé animateur 4.2 et 1. Fiche synthétique.
 */
export const pourquoi: Module = {
  slug: "pourquoi-on-en-parle",
  numero: 1,
  titre: "Pourquoi on en parle aujourd’hui",
  sousTitre: "Trois constats, quatre objectifs, le programme",
  duree: 10,
  horaire: "0:05",
  objectif:
    "Vous saurez expliquer en trois constats pourquoi l’établissement traite le sujet maintenant, et ce que la session va vous faire produire.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "La séquence s’ouvre sur les résultats du sondage, commentés en direct : ils disent où en est la salle. Viennent ensuite les trois constats qui justifient la session.",
    },

    { type: "titre", texte: "Trois constats" },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Vos élèves l’utilisent déjà",
          texte:
            "Souvent seuls, sans méthode ni repères. Ne pas en parler, c’est laisser le sujet aux réseaux sociaux.",
        },
        {
          numero: "2",
          titre: "Un cadre national existe",
          texte:
            "Le cadre d’usage de l’IA en éducation, publié par le ministère le 14 juin 2025 : plus-value pédagogique, protection des données, transparence, esprit critique, sobriété. Usage autonome des élèves uniquement à partir de la 4e ; parcours Pix IA obligatoires en 4e et en 2nde dès cette rentrée.",
        },
        {
          numero: "3",
          titre: "L’établissement a une charte",
          texte:
            "Elle sera présentée aux élèves la première semaine. Chacun doit pouvoir l’expliquer et l’appliquer dans ses consignes.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Le ton",
      texte:
        "Ni technophile ni catastrophiste. On parle d’outils, de règles et de pratiques de classe.",
    },

    { type: "titre", texte: "À la fin de la session, vous saurez…" },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          numero: "1",
          titre: "Expliquer ce qu’est une IA générative",
          texte: "Et ce qu’elle ne sait pas faire.",
        },
        {
          numero: "2",
          titre: "Appliquer la charte IA de l’établissement",
          texte:
            "Règles élèves, obligations enseignants, données personnelles.",
        },
        {
          numero: "3",
          titre: "Ancrer une IA sur vos propres supports",
          texte:
            "Avec NotebookLM : guide d’étude, quiz, flashcards, résumé audio — et Copilot pour créer de zéro.",
        },
        {
          numero: "4",
          titre: "Produire une ressource vérifiée",
          texte: "Pour votre classe, dès la rentrée.",
        },
      ],
    },

    { type: "titre", texte: "Ce que vous emportez" },
    {
      type: "liste",
      items: [
        "Un carnet NotebookLM sur un de vos chapitres, avec une ressource vérifiée",
        "La fiche outils (règles, requêtes, outils)",
        "Trois phrases à dire aux élèves la première semaine",
        "Vos accès vérifiés : Google et Microsoft 365",
      ],
    },

    { type: "titre", texte: "Le programme des deux heures" },
    {
      type: "tableau",
      entetes: ["Horaire", "Séquence", "Durée"],
      lignes: [
        ["0:00", "Sondage flash", "5 min"],
        ["0:05", "Pourquoi on en parle", "10 min"],
        ["0:15", "Comprendre l’IA générative", "15 min"],
        ["0:30", "Le cadre : la charte IA", "15 min"],
        ["0:45", "Pause", "5 min"],
        ["0:50", "Atelier guidé NotebookLM", "25 min"],
        ["1:15", "Atelier par discipline", "30 min"],
        ["1:45", "Restitution et clôture", "15 min"],
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Deux repères de temps",
      texte:
        "À 0:45, la partie « cadre » doit être terminée. À 1:15, tout le monde doit avoir un carnet NotebookLM avec une source et une première réponse citée.",
    },

    {
      type: "notesAnimateur",
      texte:
        "0:05 — 10 min. Commencer par afficher les résultats du sondage (bascule vers l’onglet du tableau de bord animateur, /formations/ia-usages-numeriques/animateur) : commenter en 1 minute. Puis les trois constats. Message : ne pas en parler, c’est laisser le sujet aux réseaux sociaux. Rappeler le cadre national du 14 juin 2025 : usage autonome des élèves uniquement à partir de la 4e, parcours Pix IA obligatoires en 4e et 2nde dès cette rentrée. Présenter les quatre objectifs en 1 minute, en insistant sur le concret : tout le monde manipule, tout le monde repart avec un carnet sur un de ses chapitres. Programme en 30 secondes. En cas de retard dans la suite de la session, réduire l’atelier disciplinaire à 20 minutes plutôt que de supprimer la restitution.",
    },
  ],
};
