import type { SectionFiche } from "@/content/types";
import { bibliothequeRequetes } from "./requetes";

/**
 * Fiche outils remise aux participants — Lycée Montaigne, Beit Chabab.
 * « IA et usages numériques », formation de pré-rentrée 2026.
 *
 * Neuf sections, fidèles au document imprimé distribué en séance.
 * Les requêtes de la partie 5 proviennent de ./requetes.ts : une seule source
 * pour la fiche, la bibliothèque de requêtes et le constructeur interactif.
 */
export const ficheOutils: SectionFiche[] = [
  {
    slug: "regles-en-bref",
    numero: 1,
    titre: "Les règles en bref",
    blocs: [
      {
        type: "paragraphe",
        texte: "Pour moi, enseignant :",
      },
      {
        type: "liste",
        items: [
          "Je relis et je valide tout ce qu’une IA produit avant de l’utiliser avec mes élèves — même quand elle cite ses sources.",
          "Je ne saisis jamais de données personnelles d’élèves (noms, notes, appréciations, santé, photos, copies nominatives) dans un outil d’IA, quel que soit le compte.",
          "Compte personnel (NotebookLM, Mistral…) = hors contrat de l’établissement : j’y dépose des supports de cours, jamais un document nominatif.",
          "Je dis à mes élèves quand un support a été produit avec une IA.",
          "Je n’impose jamais à un élève de créer un compte sur un service d’IA.",
          "La note reste ma décision : pas d’évaluation automatisée sans contrôle humain.",
          "Pour chaque travail, je précise aux élèves : IA interdite, autorisée avec déclaration, ou libre.",
        ],
      },
      {
        type: "paragraphe",
        texte: "Pour mes élèves (charte de l’établissement) :",
      },
      {
        type: "feu",
        colonnes: [
          {
            verdict: "autorise",
            titre: "AUTORISÉ",
            precision: "sans demande préalable",
            items: [
              "Se faire réexpliquer une notion",
              "S’entraîner",
              "Demander des exemples",
            ],
            note: "→ en croisant avec d’autres sources",
          },
          {
            verdict: "encadre",
            titre: "ENCADRÉ",
            precision: "avec l’accord explicite de l’enseignant",
            items: [
              "Aide au plan",
              "Relecture",
              "Traduction",
              "Images pour un exposé",
            ],
            note: "→ usage mentionné dans le travail rendu",
          },
          {
            verdict: "interdit",
            titre: "INTERDIT",
            precision: "toujours",
            items: [
              "Rendre comme sien un travail produit par IA",
              "IA pendant un devoir surveillé",
              "Données personnelles",
              "Contenus trompeurs ou blessants",
            ],
            note: "→ pas d’usage autonome avant la 4e",
          },
        ],
      },
      {
        type: "encadre",
        ton: "regle",
        titre: "Règle d’or",
        texte:
          "Utiliser une IA pour un travail évalué sans autorisation explicite = fraude, comme un plagiat.",
      },
    ],
  },

  {
    slug: "deux-outils-deux-logiques",
    numero: 2,
    titre: "Deux outils, deux logiques",
    blocs: [
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
        ton: "astuce",
        titre: "Règle simple",
        texte: "Mes sources → NotebookLM ; créer de zéro → Copilot.",
      },
    ],
  },

  {
    slug: "prise-en-main-notebooklm",
    numero: 3,
    titre: "Prise en main de NotebookLM en six étapes",
    blocs: [
      {
        type: "etapes",
        etapes: [
          {
            titre: "Ouvrir et se connecter",
            texte:
              "Ouvrir notebooklm.google.com et se connecter avec son compte Google (vérifier le nom en haut à droite).",
          },
          {
            titre: "Créer un carnet",
            texte:
              "Créer un carnet (« Nouveau carnet ») — un carnet par chapitre ou par séquence.",
          },
          {
            titre: "Ajouter des sources",
            texte:
              "Ajouter des sources : PDF (exporter depuis Word), texte collé, Google Docs, page web, vidéo YouTube, fichier audio. Plusieurs sources par carnet : cours + manuel + article.",
          },
          {
            titre: "Poser des questions",
            texte:
              "Poser des questions dans le chat ; cliquer sur les numéros de citation pour voir le passage source surligné.",
          },
          {
            titre: "Produire dans le Studio",
            texte:
              "Dans le Studio : guide d’étude ou rapport, quiz, flashcards, carte mentale, résumé audio (choisir le français) ou vidéo explicative. La génération audio prend plusieurs minutes.",
          },
          {
            titre: "Relire, exporter, partager",
            texte:
              "Relire, corriger, exporter (copier dans Word, PDF). Partager le carnet en lecture avec des collègues ; avec des élèves de 13 ans et plus seulement, sans jamais l’imposer — prévoir un export pour les autres.",
          },
        ],
      },
    ],
  },

  {
    slug: "cinq-briques",
    numero: 4,
    titre: "Une bonne requête = 5 briques",
    blocs: [
      {
        type: "tableau",
        entetes: ["Brique", "Question à se poser", "Exemple"],
        lignes: [
          [
            "Rôle",
            "Qui doit « être » l’IA ?",
            "« Tu es professeur de SVT en classe de 2nde. »",
          ],
          [
            "Contexte",
            "Pour qui, dans quelle situation ?",
            "« Mes élèves ont vu la photosynthèse ; plusieurs lisent difficilement le français. »",
          ],
          [
            "Tâche",
            "Que produire, précisément ?",
            "« À partir du chapitre en source, rédige 5 questions de compréhension. »",
          ],
          [
            "Format",
            "Sous quelle forme ?",
            "« Liste numérotée, de la plus simple à la plus complexe, avec la réponse et le passage qui la justifie. »",
          ],
          [
            "Contraintes",
            "Quelles limites ?",
            "« Vocabulaire simple, 20 mots maximum par question, en français. »",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Ensuite : itérer (« plus court », « plus simple », « ajoute un exemple »), demander plusieurs propositions, et garder ses meilleures requêtes dans un fichier personnel. La structure vaut pour les deux outils.",
      },
    ],
  },

  {
    slug: "requetes-pretes-a-l-emploi",
    numero: 5,
    titre: "Requêtes prêtes à l’emploi",
    blocs: [
      {
        type: "encadre",
        ton: "attention",
        titre: "Avant de copier une requête",
        texte:
          "Remplacer les crochets. Ne jamais coller de données personnelles : utiliser « élève A », « élève B ».",
      },
      {
        type: "bibliothequeRequetes",
        consigne:
          "Dans NotebookLM, à partir de vos sources ; dans Copilot, en génération libre.",
        lignes: bibliothequeRequetes,
      },
    ],
  },

  {
    slug: "les-outils",
    numero: 6,
    titre: "Les outils",
    blocs: [
      {
        type: "tableau",
        entetes: ["Outil", "Pour quoi faire", "Accès", "Vigilance"],
        lignes: [
          [
            "NotebookLM (Gemini Notebook)",
            "Outil principal des ateliers : travailler sur ses propres supports — résumés, questions citées, guide d’étude, quiz, flashcards, carte mentale, résumé audio ou vidéo.",
            "Gratuit avec un compte Google personnel (dès 13 ans) : notebooklm.google.com.",
            "Compte personnel, hors contrat de l’établissement : supports de cours uniquement, jamais de document nominatif. Relire quand même.",
          ],
          [
            "Microsoft Copilot Chat",
            "Outil d’appoint : génération libre — exercices, grilles, reformulations, courriers.",
            "Inclus avec le compte établissement (Microsoft 365). Vérifier que votre nom et l’établissement apparaissent en haut de la fenêtre — pas un compte personnel.",
            "Les requêtes ne servent pas à entraîner les modèles. Aucune donnée personnelle d’élève pour autant. Vérifier toute référence.",
          ],
          [
            "Microsoft Forms",
            "Sondages, quiz auto-corrigés, enquêtes.",
            "Compte établissement.",
            "Relire chaque item généré par IA avant publication.",
          ],
          [
            "Teams / OneNote",
            "Espace partagé : ressources, requêtes, retours d’expérience.",
            "Compte établissement.",
            "Ne pas y déposer de copies nominatives.",
          ],
          [
            "Mistral Le Chat",
            "Assistant généraliste européen ; utile pour comparer deux réponses et exercer l’esprit critique.",
            "Gratuit, compte personnel.",
            "Outil grand public : aucune donnée personnelle ni document sensible.",
          ],
          [
            "MagicSchool AI",
            "Suite d’outils pour enseignants (quiz, grilles, différenciation, idées de séances).",
            "Gratuit pour les enseignants (compte personnel) ; interface en partie en anglais, productions possibles en français.",
            "Calibré sur les programmes américains : adapter ; aucune donnée personnelle.",
          ],
          [
            "Canva Éducation",
            "Visuels, affiches, supports de cours avec aide à la création.",
            "Gratuit pour les enseignants (vérification du statut).",
            "Vérifier les droits d’usage des images générées.",
          ],
          [
            "Pix / Pix+Édu IA",
            "Élèves : parcours Pix IA (obligatoires en 4e et 2nde à la rentrée 2026, 30 min à 1 h 30). Enseignants : parcours Pix+Édu IA en autoformation.",
            "Via Pix Orga de l’établissement (référent numérique).",
            "Planifier les campagnes avec les professeurs principaux.",
          ],
          [
            "Assistant IA de l’État (pour information)",
            "Assistant souverain de LaSuite numérique ; version enseignants déployée progressivement en 2026-2027.",
            "Réservé aux agents de l’État avec compte académique (ProConnect) — à vérifier pour les personnels détachés.",
            "—",
          ],
        ],
      },
    ],
  },

  {
    slug: "avant-d-utiliser",
    numero: 7,
    titre: "Avant d’utiliser ce que l’IA a produit",
    blocs: [
      {
        type: "checklist",
        id: "fiche-verification",
        consigne:
          "Six points à cocher avant de mettre une production entre les mains des élèves.",
        items: [
          {
            titre: "Exactitude",
            texte:
              "Faits, dates, calculs, références vérifiés (sans source, les références peuvent être inventées ; avec source, on clique sur les citations).",
          },
          {
            titre: "Niveau",
            texte: "Vocabulaire et difficulté adaptés à la classe visée.",
          },
          {
            titre: "Programme",
            texte:
              "Conformité avec les attendus de la discipline et du niveau.",
          },
          {
            titre: "Biais et stéréotypes",
            texte: "Représentations, exemples, prénoms, contextes culturels.",
          },
          {
            titre: "Droits",
            texte:
              "Images et textes réutilisables ; mention de l’usage de l’IA si nécessaire.",
          },
          {
            titre: "Données",
            texte:
              "Aucune information personnelle n’a été saisie ni déposée.",
          },
        ],
      },
    ],
  },

  {
    slug: "phrases-pour-mes-eleves",
    numero: 8,
    titre: "Ce que je dis à mes élèves la première semaine",
    blocs: [
      {
        type: "cartes",
        colonnes: 3,
        cartes: [
          {
            numero: "1",
            titre: "Le régime, travail par travail",
            texte:
              "« Dans ma matière, pour chaque travail, je vous dirai si l’IA est interdite, autorisée avec déclaration, ou libre. »",
          },
          {
            numero: "2",
            titre: "La règle d’or",
            texte:
              "« Utiliser une IA sans autorisation dans un travail noté, c’est une fraude — comme un plagiat. »",
          },
          {
            numero: "3",
            titre: "Vous restez responsables",
            texte:
              "« Une IA peut se tromper et vous ne devez jamais lui donner d’informations personnelles : vous restez responsables de ce que vous rendez. »",
          },
        ],
      },
    ],
  },

  {
    slug: "pour-aller-plus-loin",
    numero: 9,
    titre: "Pour aller plus loin",
    blocs: [
      {
        type: "liste",
        items: [
          "Charte d’usage de l’IA du Lycée Montaigne — le texte de référence, à présenter en classe.",
          "Plan de formation interne 2026-2027 — prochains ateliers : RGPD au quotidien (A3), Préparer ses cours avec l’IA (A5), café numérique mensuel.",
          "Cadre d’usage de l’IA en éducation (ministère, 14 juin 2025) : education.gouv.fr → « cadre d’usage de l’IA en éducation ».",
          "Pix+Édu IA : parcours d’autoformation pour les enseignants, via Pix Orga.",
          "Référent numérique : Eddy Bachaalany — eddy.bachaalany@lycee-montaigne.edu.lb — accompagnement individuel sur rendez-vous.",
        ],
      },
    ],
  },
];
