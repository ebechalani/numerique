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
        "En groupes de 3 à 4, par discipline ou par niveau : choisir un cas d’usage, produire une ressource, la vérifier, puis déposer la trame de restitution sur le site. L’outil se choisit selon la tâche — mes sources vont à NotebookLM, créer de zéro passe par Copilot.",
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
            "Relire la production point par point, corriger, puis remplir la trame de restitution sur la page de dépôt du site.",
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
    { type: "titre", texte: "À vous : votre atelier, pas à pas" },
    {
      type: "exercice",
      id: "atelier-discipline",
      titre: "Votre atelier, pas à pas",
      consigne:
        "Remplissez au fil de l’atelier : choisir, produire, vérifier. À la validation, vos réponses sont reprises dans la trame de restitution — il ne restera qu’à les relire, ajouter les membres du groupe et déposer.",
      duree: "30 min",
      alimenteRestitution: true,
      suite: {
        href: "/formations/ia-usages-numeriques/participer/restitution",
        libelle: "Déposer la trame de restitution",
      },
      champs: [
        {
          id: "cas",
          type: "choix",
          libelle: "Le cas d’usage choisi",
          options: [
            "Guide de révision d’un chapitre (NotebookLM)",
            "Résumé audio ou vidéo pour la classe (NotebookLM)",
            "Carte mentale de synthèse (NotebookLM)",
            "Différenciation (NotebookLM ou Copilot)",
            "Banque d’exercices ou grille d’évaluation (Copilot)",
            "Consigne « IA-robuste » (Copilot)",
          ],
        },
        { id: "discipline", type: "texte", libelle: "Discipline" },
        { id: "niveau", type: "texte", libelle: "Niveau ou classe" },
        {
          id: "outil",
          type: "choix",
          libelle: "L’outil utilisé",
          options: ["NotebookLM", "Copilot", "Les deux"],
        },
        {
          id: "requete",
          type: "texte-long",
          libelle: "La requête utilisée",
          aide: "Cinq briques : rôle, contexte, tâche, format, contraintes. Sans aucune donnée personnelle.",
          lignes: 4,
        },
        {
          id: "ressource",
          type: "texte-long",
          libelle: "La ressource produite",
          aide: "Deux ou trois phrases, ou le lien de partage du carnet.",
          lignes: 3,
        },
        {
          id: "corrections",
          type: "texte-long",
          libelle: "Ce qu’il a fallu corriger ou compléter",
          aide: "Erreurs de contenu, niveau inadapté, formulation, ce qui manquait.",
          lignes: 3,
        },
        {
          id: "vigilance",
          type: "texte-long",
          libelle: "Une vigilance à partager avec les collègues",
          aide: "Une seule, la plus utile — elle rejoint la check-list collective de la restitution.",
          lignes: 2,
        },
      ],
      retour: {
        titre: "Avant de déposer",
        texte:
          "Une ressource réellement utilisable en classe à la rentrée — pas une démonstration. Relisez la production point par point, et vérifiez que rien de personnel ne figure dans ce que vous déposez : ni nom, ni note, ni copie d’élève.",
      },
    },

    { type: "titre", texte: "La trame de restitution" },
    {
      type: "paragraphe",
      texte:
        "Un dépôt par groupe, sur le site : /formations/ia-usages-numeriques/participer/restitution. Cinq lignes à renseigner avant la restitution — déjà pré-remplies si vous avez validé l’exercice ci-dessus dans ce navigateur.",
    },
    {
      type: "liste",
      ordonnee: true,
      items: [
        "Discipline / niveau — membres du groupe — outil utilisé.",
        "Ressource produite (décrire en deux ou trois phrases, ou coller le lien de partage du carnet).",
        "Requête(s) utilisée(s).",
        "Ce qu’il a fallu corriger ou compléter.",
        "Une vigilance à partager avec les collègues.",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Rien de personnel dans ce qui est déposé",
      texte:
        "Les prénoms des membres du groupe suffisent, et la ressource déposée ne doit contenir aucune donnée d’élève : ni nom, ni note, ni copie. C’est la règle que nous appliquons aussi dans les outils.",
    },
    {
      type: "paragraphe",
      texte:
        "Les dépôts des autres groupes se consultent sur le mur des contributions : /formations/ia-usages-numeriques/participer/restitution/contributions. Il s’alimente au fil de l’atelier — requêtes, corrections et vigilances des collègues y sont lisibles immédiatement, et il reste consultable après la session.",
    },
    {
      type: "notesAnimateur",
      texte:
        "1:15 — 30 minutes. Constituer les groupes de 3-4 par discipline ou niveau. Vérifier avant de lancer l’atelier que la session est bien ouverte dans le tableau de bord animateur : sans session ouverte, la page de restitution n’accepte pas de dépôt. Rappeler le minutage : 5 min pour choisir, 15 min pour produire, 10 min pour vérifier et déposer la trame sur la page de restitution du site. Projeter le mur des contributions pendant les dernières minutes : voir les dépôts arriver relance les retardataires. Circuler en continu : aider à préciser les requêtes (rôle, contexte, tâche, format, contraintes), rappeler que rien ne sort de l’atelier sans avoir été relu. Renvoyer aux requêtes types de la fiche outils. En cas de retard sur l’horaire, réduire l’atelier à 20 minutes plutôt que de supprimer la restitution.",
    },
  ],
};
