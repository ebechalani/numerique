import type { Module } from "@/content/types";

/**
 * Atelier de production par discipline — partie 4.6 du déroulé animateur,
 * diapositive 22 du diaporama.
 */
export const atelierDiscipline: Module = {
  slug: "atelier-par-discipline",
  numero: 5,
  titre: "Atelier par discipline",
  sousTitre: "Produire une ressource, la vérifier, la partager",
  duree: 30,
  horaire: "1:15",
  objectif:
    "Produire en groupe, à partir de ses propres supports, une ressource réellement utilisable en classe à la rentrée, la vérifier et la partager avec ses collègues.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "En groupes de 3 à 4, par discipline ou par niveau : choisir un cas d’usage, produire une ressource, la vérifier, puis renseigner la trame de restitution dans l’espace partagé. L’outil se choisit selon la tâche — mes sources vont à NotebookLM, créer de zéro passe par Copilot.",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "5 min — choisir",
          texte:
            "Se mettre d’accord sur un cas d’usage dans la liste ci-dessous, et sur le chapitre ou la notion qui servira de support.",
        },
        {
          titre: "15 min — produire",
          texte:
            "Rédiger la requête, la lancer dans l’outil adapté, ajuster. Les requêtes types sont dans la fiche outils.",
        },
        {
          titre: "10 min — vérifier",
          texte:
            "Relire la production point par point, corriger, puis remplir la trame de restitution dans Teams ou OneNote.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "L’objectif de l’atelier",
      texte:
        "Une ressource réellement utilisable en classe à la rentrée — pas une démonstration. Ce que vous produisez ici, vous devez pouvoir l’utiliser dès la première semaine.",
    },
    { type: "titre", texte: "Six cas d’usage au choix" },
    {
      type: "tableau",
      entetes: ["Cas d’usage", "Comment faire (à adapter)", "Vérifier avant d’utiliser"],
      lignes: [
        [
          "Guide de révision d’un chapitre (NotebookLM)",
          "Déposer le chapitre ; générer guide d’étude, quiz et flashcards ; demander « un glossaire des notions clés avec la définition du cours ».",
          "Exactitude de chaque item ; une seule bonne réponse ; niveau adapté.",
        ],
        [
          "Résumé audio ou vidéo pour la classe (NotebookLM)",
          "Générer un résumé audio en français (ou une vidéo explicative) à partir du chapitre ; prévoir son usage : pré-lecture, révision, élèves à besoins particuliers.",
          "Écouter ou regarder intégralement : aucune erreur, ton adapté, durée raisonnable.",
        ],
        [
          "Carte mentale de synthèse (NotebookLM)",
          "Générer la carte mentale du chapitre ; l’utiliser comme support de bilan, ou la faire compléter par les élèves.",
          "Hiérarchie des notions conforme au cours ; rien d’essentiel oublié.",
        ],
        [
          "Différenciation (NotebookLM ou Copilot)",
          "« À partir de la source, réécris la partie [X] en deux versions : simplifiée (phrases courtes, vocabulaire courant) et approfondie (vocabulaire précis, une question d’analyse). »",
          "Le sens et le vocabulaire disciplinaire sont conservés.",
        ],
        [
          "Banque d’exercices ou grille d’évaluation (Copilot)",
          "« Propose 10 exercices progressifs sur [notion], niveau [classe], avec corrigé détaillé. » / « Construis une grille critériée pour [production] : 4 critères, 3 niveaux, descripteurs observables. »",
          "Exactitude des corrigés ; cohérence avec le programme et vos attendus.",
        ],
        [
          "Consigne « IA-robuste » (Copilot)",
          "« Voici une consigne de devoir maison. Propose 3 reformulations qui rendent l’usage d’une IA peu utile ou visible (ancrage dans le vécu de classe, étapes intermédiaires, justification orale). »",
          "Faisabilité pour vos élèves ; charge de travail.",
        ],
      ],
    },
    { type: "titre", texte: "La trame de restitution" },
    {
      type: "paragraphe",
      texte:
        "Une page par discipline dans l’espace partagé (Teams ou OneNote). Cinq lignes à renseigner avant la restitution.",
    },
    {
      type: "liste",
      ordonnee: true,
      items: [
        "Discipline / niveau — membres du groupe — outil utilisé.",
        "Ressource produite (coller, joindre ou lien de partage du carnet).",
        "Requête(s) utilisée(s).",
        "Ce qu’il a fallu corriger ou compléter.",
        "Une vigilance à partager avec les collègues.",
      ],
    },
    {
      type: "notesAnimateur",
      texte:
        "1:15 — 30 minutes. Constituer les groupes de 3-4 par discipline ou niveau. Rappeler le minutage : 5 min pour choisir, 15 min pour produire, 10 min pour vérifier et remplir la trame dans Teams/OneNote. Circuler en continu : aider à préciser les requêtes (rôle, contexte, tâche, format, contraintes), rappeler que rien ne sort de l’atelier sans avoir été relu. Renvoyer aux requêtes types de la fiche outils. En cas de retard sur l’horaire, réduire l’atelier à 20 minutes plutôt que de supprimer la restitution.",
    },
  ],
};
