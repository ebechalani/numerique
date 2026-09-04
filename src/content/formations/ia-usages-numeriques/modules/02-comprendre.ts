import type { Module } from "@/content/types";

/**
 * Module 2 — Comprendre l’IA générative (0:15, 15 min).
 * Sources : diaporama diapositives 6 à 10 (avec leurs notes),
 * déroulé animateur 4.3.
 */
export const comprendre: Module = {
  slug: "comprendre-ia-generative",
  numero: 2,
  titre: "Comprendre l’IA générative",
  sousTitre: "Comment ça marche, et ce qu’elle ne sait pas faire",
  duree: 15,
  horaire: "0:15",
  objectif:
    "Vous saurez expliquer en trois idées simples comment fonctionne une IA générative, nommer ses quatre limites et montrer, requête à l’appui, pourquoi une réponse plausible n’est pas une réponse vraie.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "L’objectif de cette séquence est de donner des repères simples et honnêtes, sans jargon : trois idées, quatre limites, une démonstration — et une contre-démonstration avec NotebookLM — puis un quiz.",
    },

    { type: "titre", texte: "Comment ça marche, en trois idées" },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Elle prédit le mot suivant",
          texte:
            "Le texte est produit mot après mot, selon la suite la plus probable. Il n’y a pas de base de faits vérifiés derrière.",
        },
        {
          numero: "2",
          titre: "Elle a appris sur des masses de textes",
          texte:
            "Avec leurs qualités, leurs erreurs et leurs biais. Ce qui est rare ou récent est mal couvert.",
        },
        {
          numero: "3",
          titre: "Elle ne sait pas ce qu’elle ne sait pas",
          texte:
            "Elle produit du plausible, avec la même assurance quand c’est faux. À nous de vérifier.",
        },
      ],
    },

    { type: "titre", texte: "Quatre limites à garder en tête" },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Hallucinations",
          texte:
            "Faits, dates, citations ou références inventés — présentés avec assurance.",
        },
        {
          titre: "Biais",
          texte:
            "Stéréotypes reproduits : genre, cultures, représentations, prénoms, contextes.",
        },
        {
          titre: "Données",
          texte:
            "Ce que l’on saisit peut être conservé ou réutilisé, selon l’outil et le compte utilisé. D’où la règle : aucune donnée personnelle d’élève, quel que soit l’outil.",
        },
        {
          titre: "Environnement",
          texte:
            "Un coût énergétique réel : un usage mesuré, quand c’est utile — pas de requêtes inutiles.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "La formule à retenir",
      texte:
        "Du plausible, pas du vrai. Une IA générative produit la suite de mots la plus probable, avec la même assurance qu’elle ait raison ou tort.",
    },

    { type: "titre", texte: "Démonstration : l’IA se trompe…" },
    {
      type: "paragraphe",
      texte:
        "Trois requêtes suffisent à le montrer. En séance, l’animateur en choisit une ou deux, posées en direct dans Copilot et projetées ; vous pouvez les rejouer vous-même à l’identique.",
    },
    {
      type: "requete",
      titre: "La citation",
      texte:
        "Donne-moi une citation exacte de Montaigne sur l’éducation, avec le chapitre des Essais.",
      commentaire:
        "Vérifions le chapitre et la formulation : ils sont souvent approximatifs ou inventés.",
    },
    {
      type: "requete",
      titre: "Le local",
      texte: "Raconte l’histoire du Lycée Montaigne de Beit Chabab.",
      commentaire:
        "Vous connaissez la vérité — pas l’outil. Il brode des détails plausibles mais faux, et la salle s’en aperçoit immédiatement.",
    },
    {
      type: "requete",
      titre: "Le comptage",
      texte: "Combien de e dans cette phrase ?",
      commentaire:
        "À faire suivre d’une phrase longue, puis comptons ensemble : l’erreur est fréquente.",
    },
    {
      type: "exercice",
      id: "demo-copilot",
      titre: "Rejouez une démonstration",
      consigne:
        "Copiez l’une des trois requêtes ci-dessus dans Copilot Chat, avec votre compte établissement. Lisez la réponse, puis vérifiez-la vous-même.",
      duree: "5 min",
      champs: [
        {
          id: "requete",
          type: "choix",
          libelle: "La requête rejouée",
          options: ["La citation", "Le local", "Le comptage"],
        },
        {
          id: "reponse",
          type: "texte-long",
          libelle: "Ce que l’outil a répondu, en deux lignes",
          aide: "Le point précis que vous avez vérifié : le chapitre cité, un détail de l’histoire du lycée, le nombre trouvé.",
          lignes: 3,
        },
        {
          id: "verdict",
          type: "choix",
          libelle: "Après vérification, la réponse était…",
          options: ["Exacte", "Partiellement exacte", "Fausse"],
        },
      ],
      retour: {
        titre: "Ce qu’on observe en séance",
        texte:
          "Du plausible, pas du vrai : l’outil produit la suite de mots la plus probable, avec la même assurance qu’il ait raison ou tort.",
        points: [
          "La citation : chapitre ou formulation souvent approximatifs ou inventés.",
          "Le local : des détails plausibles mais faux — et la salle connaît la vérité.",
          "Le comptage : l’erreur est fréquente, surtout sur une phrase longue.",
        ],
      },
    },

    { type: "titre", texte: "… sauf si on l’ancre : la contre-démonstration" },
    {
      type: "paragraphe",
      texte:
        "La même logique, dans un carnet NotebookLM qui contient un chapitre de cours en source. Deux questions suffisent à faire la différence.",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Une question précise sur le chapitre",
          texte:
            "La réponse cite ses passages : les numéros de citation sont cliquables et surlignent la source. C’est le geste à retenir.",
        },
        {
          titre: "Une question hors du chapitre",
          texte:
            "L’outil indique que les sources ne contiennent pas cette information — il ne comble pas le vide.",
        },
      ],
    },
    {
      type: "exercice",
      id: "contre-demo-notebooklm",
      titre: "Ancrée sur vos sources, la même IA change de comportement",
      consigne:
        "À faire dans un carnet NotebookLM qui contient un chapitre en source. Si vous n’avez pas encore de carnet, revenez-y après le module 4.",
      duree: "3 min",
      champs: [
        {
          id: "question-chapitre",
          type: "texte",
          libelle: "Votre question précise sur le chapitre",
        },
        {
          id: "citations",
          type: "choix",
          libelle: "La réponse renvoyait-elle à des passages du chapitre ?",
          options: [
            "Oui — les numéros de citation surlignent le passage",
            "Non",
            "Pas encore testé",
          ],
        },
        {
          id: "question-hors",
          type: "texte",
          libelle: "Votre question hors du chapitre",
        },
        {
          id: "refus",
          type: "choix",
          libelle: "Qu’a fait l’outil ?",
          options: [
            "Il a indiqué que les sources ne contiennent pas l’information",
            "Il a répondu quand même",
            "Pas encore testé",
          ],
        },
      ],
      retour: {
        titre: "Ce qu’il faut en retenir",
        texte:
          "Plausible n’est pas vrai. Sans source, on vérifie tout ; avec ses sources, l’IA montre d’où elle parle — on vérifie quand même, mais on sait où regarder.",
        points: [
          "Cliquer sur un numéro de citation surligne le passage source : c’est le geste à retenir.",
          "Hors de ses sources, NotebookLM le dit — il ne comble pas le vide.",
        ],
      },
    },

    { type: "titre", texte: "Vrai ou faux ?" },
    {
      type: "quiz",
      id: "quiz-comprendre",
      consigne:
        "Cinq affirmations. En séance, le vote se fait à main levée, en trois minutes ; ici, répondez avant d’afficher le corrigé.",
      items: [
        {
          affirmation:
            "Une IA générative cherche la réponse dans une base de faits vérifiés.",
          reponse: false,
          explication:
            "Elle ne consulte aucune base de faits : elle prédit une suite probable, mot après mot.",
        },
        {
          affirmation:
            "Deux personnes qui posent la même question obtiennent toujours la même réponse.",
          reponse: false,
          explication:
            "Les réponses varient — d’une personne à l’autre, et d’une fois à l’autre pour la même question.",
        },
        {
          affirmation:
            "Une IA peut inventer une référence bibliographique qui n’existe pas.",
          reponse: true,
          explication:
            "C’est une hallucination typique : il faut toujours vérifier les références.",
        },
        {
          affirmation:
            "NotebookLM répond à partir des documents que je lui donne et cite les passages utilisés.",
          reponse: true,
          explication:
            "C’est l’ancrage sur les sources, avec des citations cliquables — on relit quand même.",
        },
        {
          affirmation:
            "Un logiciel détecte de façon fiable si un texte a été écrit par une IA.",
          reponse: false,
          explication:
            "Les détecteurs sont peu fiables : ils produisent des faux positifs, y compris pour des élèves honnêtes.",
        },
      ],
    },

    {
      type: "notesAnimateur",
      texte:
        "0:15 — 15 min. Objectif : donner des repères simples et honnêtes, sans jargon. Trois idées, une minute chacune ; analogie possible : le clavier prédictif du téléphone, en beaucoup plus puissant. Sur « Données » : ce que l’on saisit peut être conservé et réutilisé selon l’outil et le compte — d’où la règle « aucune donnée personnelle d’élève », quel que soit l’outil. Sur « Environnement » : usage mesuré, pas de requêtes inutiles. Démonstration : choisir une ou deux requêtes, en direct dans Copilot (projeté). La citation : chapitre ou formulation souvent approximatifs ou inventés — vérifier ensemble. Le local : l’outil brode des détails plausibles mais faux, et la salle connaît la vérité. Le comptage : donner une phrase longue et compter ensemble. PUIS la contre-démonstration (2 min) : ouvrir le carnet NotebookLM de démonstration, poser une question précise sur le chapitre → réponse avec citations cliquables, faire cliquer sur un numéro pour surligner le passage ; poser une question hors du chapitre → l’outil dit que les sources ne contiennent pas l’information. Conclusion : sans source on vérifie tout ; avec ses sources, l’IA montre d’où elle parle — on vérifie quand même, mais on sait où regarder. Quiz : vote à main levée, 3 minutes.",
    },
  ],
};
