import type { Module } from "@/content/types";

/**
 * Module 4 — Atelier guidé : NotebookLM (0:50, 25 minutes).
 *
 * Contenu repris des diapositives 17 à 21 (et de leurs notes), de la
 * partie 4.5 du déroulé de l’animateur et des parties 2 à 4 de la fiche outils.
 * Écrit pour être suivi pas à pas, chacun devant son ordinateur.
 */
export const atelierNotebookLM: Module = {
  slug: "atelier-notebooklm",
  numero: 4,
  titre: "Atelier guidé : NotebookLM",
  sousTitre:
    "Deux outils, deux logiques ; créer son carnet ; trois exercices sur vos propres supports",
  duree: 25,
  horaire: "0:50",
  objectif:
    "Créer un carnet NotebookLM sur un de vos chapitres, y poser une requête structurée et en tirer une première ressource — guide d’étude, quiz ou résumé audio — que vous avez relue.",
  blocs: [
    { type: "titre", texte: "Deux outils, deux logiques" },
    {
      type: "tableau",
      entetes: ["", "NotebookLM (Gemini Notebook)", "Microsoft Copilot Chat"],
      lignes: [
        [
          "Logique",
          "Travailler sur MES documents : je dépose mon cours, mon manuel, un article ; il résume, répond, transforme.",
          "Générer librement : exercices, reformulations, grilles, consignes, courriers.",
        ],
        [
          "Cite ses sources ?",
          "Oui — chaque réponse renvoie aux passages utilisés (numéros cliquables). Hors sources, il le dit.",
          "Pas toujours — il peut inventer une référence : je vérifie tout.",
        ],
        [
          "Compte",
          "Compte Google personnel (dès 13 ans). Google indique ne pas entraîner ses modèles sur nos sources et requêtes.",
          "Compte établissement Microsoft 365 : les requêtes ne servent pas à entraîner les modèles ; couvert par le lycée.",
        ],
        [
          "Je l’utilise pour",
          "Guide d’étude, quiz, flashcards, carte mentale, résumé audio ou vidéo, questions sur un chapitre, glossaire.",
          "Banque d’exercices, grille d’évaluation, situation-problème, consigne reformulée, appréciations anonymisées.",
        ],
        [
          "Vigilance",
          "Supports de cours uniquement, jamais de document nominatif. Relire quand même.",
          "Jamais de données personnelles d’élèves. Relire tout.",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Règle simple",
      texte:
        "Mes sources → NotebookLM ; créer de zéro → Copilot. Et dans les deux cas : jamais de données personnelles d’élèves — ni ici ni ailleurs.",
    },
    {
      type: "qcm",
      id: "qcm-quel-outil",
      consigne:
        "Quel outil ? Pour chaque besoin, choisissez l’outil adapté — ou aucun des deux.",
      questions: [
        {
          question:
            "Générer un quiz et des flashcards à partir du chapitre que j’ai déposé.",
          options: ["NotebookLM", "Copilot", "Aucun des deux"],
          bonne: 0,
          explication:
            "Mes sources → NotebookLM : il travaille sur mes documents et cite les passages utilisés.",
        },
        {
          question:
            "Rédiger de zéro une banque de dix exercices progressifs sur une notion, avec corrigé.",
          options: ["NotebookLM", "Copilot", "Aucun des deux"],
          bonne: 1,
          explication:
            "Créer de zéro → Copilot. Et je vérifie l’exactitude des corrigés : il peut inventer.",
        },
        {
          question:
            "Obtenir un résumé audio d’un chapitre pour la pré-lecture ou la révision.",
          options: ["NotebookLM", "Copilot", "Aucun des deux"],
          bonne: 0,
          explication:
            "C’est une fonction de NotebookLM, à partir de la source déposée. À écouter intégralement avant toute diffusion.",
        },
        {
          question:
            "Construire une grille d’évaluation critériée : quatre critères, trois niveaux.",
          options: ["NotebookLM", "Copilot", "Aucun des deux"],
          bonne: 1,
          explication:
            "Créer de zéro → Copilot, avec le compte établissement Microsoft 365.",
        },
        {
          question:
            "Rédiger des appréciations à partir de la liste des noms et des notes de la classe.",
          options: ["NotebookLM", "Copilot", "Aucun des deux"],
          bonne: 2,
          explication:
            "Jamais de données personnelles d’élèves, ni ici ni ailleurs. Avec des données anonymisées — « élève A », « élève B » — Copilot peut aider à formuler.",
        },
      ],
    },

    { type: "titre", texte: "Étape 0 — Créer son premier carnet" },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Ouvrir notebooklm.google.com",
          texte:
            "Se connecter avec votre compte Google — vérifier le nom ou l’avatar en haut à droite.",
        },
        {
          titre: "Créer un carnet, ajouter une source",
          texte:
            "Un carnet par chapitre ou par séquence. La source : le PDF de votre chapitre (exporté depuis Word), ou un chapitre de démonstration. Texte collé, site web, vidéo YouTube possibles.",
        },
        {
          titre: "Poser une première question",
          texte:
            "« Résume ce chapitre en 5 points pour des élèves de [niveau]. » Puis cliquer sur un numéro de citation : le passage source se surligne. C’est le geste à retenir.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Ce qu’il faut savoir",
      texte:
        "Google indique que sources, requêtes et réponses ne servent pas à entraîner ses modèles. Mais ce compte est personnel, donc hors contrat de l’établissement : supports de cours uniquement, jamais de document nominatif. Aucune donnée d’élève, même ici.",
    },
    {
      type: "exercice",
      id: "premier-carnet",
      titre: "Votre premier carnet",
      consigne:
        "Faites les trois étapes ci-dessus dans NotebookLM, puis notez ce que vous obtenez.",
      duree: "6 min",
      champs: [
        {
          id: "source",
          type: "texte",
          libelle: "Le chapitre déposé en source",
          aide: "Titre ou thème — un PDF de cours, sans aucune donnée d’élève.",
        },
        {
          id: "resume",
          type: "texte-long",
          libelle: "Le résumé en cinq points obtenu — ou ce qui a coincé",
          lignes: 4,
        },
        {
          id: "citation",
          type: "choix",
          libelle: "Avez-vous cliqué sur un numéro de citation ?",
          options: ["Oui, le passage source s’est surligné", "Pas encore"],
        },
      ],
      retour: {
        titre: "Le repère de l’atelier",
        texte:
          "À 1:15, tout le monde doit avoir un carnet avec une source et une première réponse citée. Le clic sur un numéro de citation, qui surligne le passage source, est le geste à retenir : c’est lui qui permet de vérifier.",
      },
    },

    { type: "titre", texte: "Étape 1 — Une bonne requête = cinq briques" },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        { numero: "1", titre: "Rôle", texte: "Qui doit « être » l’IA ?" },
        {
          numero: "2",
          titre: "Contexte",
          texte: "Pour qui, dans quelle situation ?",
        },
        { numero: "3", titre: "Tâche", texte: "Que produire, précisément ?" },
        { numero: "4", titre: "Format", texte: "Sous quelle forme ?" },
        { numero: "5", titre: "Contraintes", texte: "Quelles limites ?" },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La structure vaut pour les deux outils. Ensuite : itérer (« plus court », « plus simple », « ajoute un exemple »), demander plusieurs propositions, et garder ses meilleures requêtes dans un fichier personnel.",
    },
    {
      type: "requete",
      titre: "Exemple — à taper dans votre carnet",
      texte:
        "Tu es professeur d’histoire en classe de 4e (Rôle). Mes élèves lisent difficilement le français (Contexte). À partir du chapitre en source, rédige 5 questions de compréhension (Tâche), en liste, de la plus simple à la plus complexe, avec la réponse et le passage du cours qui la justifie (Format). Vocabulaire simple, 20 mots maximum par question (Contraintes).",
      commentaire:
        "La réponse cite les passages du chapitre. Comparez avec une requête vague — « fais-moi des questions » — pour sentir la différence.",
    },
    {
      type: "paragraphe",
      texte:
        "À votre tour : composez brique par brique la requête dont vous avez besoin pour votre chapitre.",
    },
    { type: "constructeurRequete" },

    { type: "titre", texte: "À vous : trois exercices dans votre carnet" },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Lancez l’audio tout de suite",
      texte:
        "La génération du résumé audio (exercice 3) prend plusieurs minutes : lancez-la dès maintenant, vous l’écouterez à la fin de l’atelier.",
    },
    {
      type: "exercice",
      id: "exercice-guide-etude",
      titre: "Exercice 1 — Guide d’étude",
      consigne:
        "Dans le Studio, générez un guide d’étude (ou un rapport) sur votre chapitre. Lisez-le de façon critique : niveau, exactitude, ce qui manque.",
      champs: [
        {
          id: "niveau",
          type: "choix",
          libelle: "Le niveau",
          options: ["Adapté à ma classe", "Trop haut", "Trop bas"],
        },
        {
          id: "erreur",
          type: "texte-long",
          libelle: "Une erreur ou une approximation repérée — ou « aucune »",
          lignes: 2,
        },
        {
          id: "manque",
          type: "texte-long",
          libelle: "Ce qui manque par rapport à votre cours",
          lignes: 2,
        },
      ],
      retour: {
        titre: "Ce qu’on observe",
        texte:
          "Fidèle à la source, mais parfois trop long ou trop scolaire — on coupe, on adapte.",
      },
    },
    {
      type: "exercice",
      id: "exercice-quiz-flashcards",
      titre: "Exercice 2 — Quiz et flashcards",
      consigne:
        "Générez un quiz sur le chapitre ; vérifiez chaque item : une seule bonne réponse, formulation, niveau. Puis générez des flashcards.",
      champs: [
        {
          id: "items",
          type: "texte",
          libelle: "Nombre d’items vérifiés",
        },
        {
          id: "probleme",
          type: "texte-long",
          libelle: "Un item ambigu ou hors niveau, et comment vous le corrigez",
          lignes: 3,
        },
      ],
      retour: {
        titre: "Ce qu’on observe",
        texte:
          "Des items parfois ambigus ou hors niveau — la relecture est indispensable, même avec des sources.",
      },
    },
    {
      type: "exercice",
      id: "exercice-resume-audio",
      titre: "Exercice 3 — Résumé audio",
      consigne:
        "Lancez un résumé audio en français. La génération prend plusieurs minutes : lancez-le maintenant, écoutez-le à la fin de l’atelier.",
      champs: [
        {
          id: "lance",
          type: "choix",
          libelle: "Où en êtes-vous ?",
          options: ["Lancé, génération en cours", "Écouté", "Pas encore lancé"],
        },
        {
          id: "usage",
          type: "choix",
          libelle: "Pour qui, dans votre classe ?",
          options: [
            "Élèves à besoins particuliers",
            "Révision",
            "Pré-lecture d’un chapitre",
            "Je ne l’utiliserais pas",
          ],
        },
        {
          id: "vigilance",
          type: "texte",
          libelle: "Un point à vérifier avant toute diffusion",
          facultatif: true,
        },
      ],
      retour: {
        titre: "Ce qu’on observe",
        texte:
          "Pour qui, en classe ? Élèves à besoins particuliers, révision, pré-lecture d’un chapitre. À écouter intégralement avant toute diffusion.",
      },
    },

    {
      type: "checklist",
      id: "conseils-notebooklm",
      consigne: "Quatre réflexes à garder pour tous vos prochains carnets.",
      items: [
        {
          titre: "Partir d’une source propre",
          texte: "Une source propre donne de meilleurs résultats.",
        },
        {
          titre: "Ajouter plusieurs sources",
          texte:
            "Un même carnet accepte plusieurs sources : cours, manuel, article.",
        },
        {
          titre: "Tout relire",
          texte:
            "Toujours relire ce qui est produit, même quand l’outil cite ses sources.",
        },
        {
          titre: "Garder ses bonnes requêtes",
          texte:
            "Conserver ses meilleures requêtes dans un fichier personnel pour les réutiliser.",
        },
      ],
    },

    {
      type: "notesAnimateur",
      texte:
        "0:50 — 25 minutes. Chacun sur son ordinateur ; l’animateur projette et avance au rythme du groupe. Minutage : deux outils, deux logiques 2 min · étape 0 (connexion, carnet, source) 6 min · les cinq briques 4 min · exercices 13 min. Prévoir des chapitres de démonstration (PDF non personnels) pour ceux qui n’ont rien apporté. Étape 0 : vérifier que tout le monde voit son carnet avec une source, et faire cliquer sur un numéro de citation — le passage source se surligne, c’est le geste à retenir. Étape 1 : comparer l’exemple structuré avec une requête vague. Exercice 3 : pendant l’attente de la génération audio, faire écouter 1 minute de l’audio de démonstration, puis discuter des usages (élèves à besoins particuliers, révision, pré-lecture). Partage : un carnet peut être partagé en lecture avec des collègues, et avec des élèves de 13 ans et plus qui ont leur propre compte, sans jamais l’imposer (charte) — prévoir l’export PDF du quiz ou du résumé pour les autres. Repère de temps : à 1:15, tout le monde doit avoir un carnet avec une source et une première réponse citée.",
    },
  ],
};
