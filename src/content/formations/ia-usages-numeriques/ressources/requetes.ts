import type { LigneRequete } from "@/content/types";

/**
 * Les cinq briques d’une bonne requête (fiche outils, partie 4).
 *
 * Ce tableau alimente le constructeur de requêtes interactif : une brique par
 * champ de saisie, dans l’ordre Rôle · Contexte · Tâche · Format · Contraintes.
 * La structure vaut pour les deux outils (NotebookLM et Copilot).
 */
export interface BriqueRequete {
  cle: "role" | "contexte" | "tache" | "format" | "contraintes";
  titre: string;
  /** La question à se poser pour remplir la brique. */
  question: string;
  /** L’exemple de la fiche outils. */
  exemple: string;
  /** Aide à la saisie affichée dans le champ vide. */
  exemplePlaceholder: string;
}

export const briquesRequete: BriqueRequete[] = [
  {
    cle: "role",
    titre: "Rôle",
    question: "Qui doit « être » l’IA ?",
    exemple: "« Tu es professeur de SVT en classe de 2nde. »",
    exemplePlaceholder: "Tu es professeur de… en classe de…",
  },
  {
    cle: "contexte",
    titre: "Contexte",
    question: "Pour qui, dans quelle situation ?",
    exemple:
      "« Mes élèves ont vu la photosynthèse ; plusieurs lisent difficilement le français. »",
    exemplePlaceholder: "Mes élèves ont vu… ; plusieurs d’entre eux…",
  },
  {
    cle: "tache",
    titre: "Tâche",
    question: "Que produire, précisément ?",
    exemple:
      "« À partir du chapitre en source, rédige 5 questions de compréhension. »",
    exemplePlaceholder: "À partir du chapitre en source, rédige…",
  },
  {
    cle: "format",
    titre: "Format",
    question: "Sous quelle forme ?",
    exemple:
      "« Liste numérotée, de la plus simple à la plus complexe, avec la réponse et le passage qui la justifie. »",
    exemplePlaceholder: "Liste numérotée, tableau, paragraphe court…",
  },
  {
    cle: "contraintes",
    titre: "Contraintes",
    question: "Quelles limites ?",
    exemple: "« Vocabulaire simple, 20 mots maximum par question, en français. »",
    exemplePlaceholder: "Vocabulaire simple, 20 mots maximum, en français…",
  },
];

/**
 * Requêtes prêtes à l’emploi (fiche outils, partie 5).
 *
 * Texte exact du support, crochets compris : les crochets sont à remplacer par
 * l’enseignant. Ne jamais y coller de données personnelles — utiliser
 * « élève A », « élève B ».
 */
export const bibliothequeRequetes: LigneRequete[] = [
  {
    usage: "Résumé par niveau",
    requete:
      "« Résume ce chapitre en 5 points pour des élèves de [niveau], avec pour chaque point le passage du cours correspondant. »",
    outil: "notebooklm",
  },
  {
    usage: "Questions de compréhension",
    requete:
      "« Rédige 8 questions de compréhension sur le chapitre, de la plus simple à la plus complexe, avec la réponse et le passage qui la justifie. »",
    outil: "notebooklm",
  },
  {
    usage: "Glossaire",
    requete:
      "« Établis le glossaire des notions clés du chapitre : définition telle que formulée dans le cours, puis reformulation simple. »",
    outil: "notebooklm",
  },
  {
    usage: "Différenciation",
    requete:
      "« À partir de la source, réécris la partie [X] en deux versions : simplifiée (phrases courtes, vocabulaire courant) et approfondie (vocabulaire précis, une question d’analyse). »",
    outil: "notebooklm",
  },
  {
    usage: "Prérequis",
    requete:
      "« Quelles notions le chapitre suppose connues sans les expliquer ? Liste-les avec le passage où elles apparaissent. »",
    outil: "notebooklm",
  },
  {
    usage: "Quiz, flashcards, audio",
    requete:
      "Utiliser directement les boutons du Studio, puis demander dans le chat : « Rends le quiz plus difficile » ou « Ajoute une explication à chaque réponse ».",
    outil: "notebooklm",
  },
  {
    usage: "Banque d’exercices",
    requete:
      "« Propose 10 exercices progressifs sur [notion] pour une classe de [niveau], avec un corrigé détaillé et un indice par exercice. »",
    outil: "copilot",
  },
  {
    usage: "Grille d’évaluation",
    requete:
      "« Construis une grille critériée pour [production] en [classe] : 4 critères, 3 niveaux de maîtrise, descripteurs observables. »",
    outil: "copilot",
  },
  {
    usage: "Situation-problème",
    requete:
      "« Imagine une situation-problème ancrée au Liban pour introduire [notion] en [classe], avec 3 questions guidant les élèves. »",
    outil: "copilot",
  },
  {
    usage: "Reformuler une consigne",
    requete:
      "« Reformule cette consigne pour des élèves de [niveau] : plus claire, plus courte, avec un exemple de ce qui est attendu. »",
    outil: "copilot",
  },
  {
    usage: "Appréciations (anonymisées)",
    requete:
      "« Élève A : points forts [..], difficultés [..], attitude [..]. Rédige une appréciation de bulletin bienveillante et précise, 40 mots maximum. »",
    outil: "copilot",
  },
  {
    usage: "Consigne « IA-robuste »",
    requete:
      "« Voici une consigne de devoir maison. Propose 3 reformulations rendant l’usage d’une IA peu utile ou visible : ancrage dans le vécu de la classe, étapes intermédiaires, justification orale. »",
    outil: "copilot",
  },
];
