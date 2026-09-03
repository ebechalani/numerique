import type { QuestionFrequente } from "@/content/types";

/**
 * Questions fréquentes (déroulé animateur, partie 5).
 *
 * Les « éléments de réponse » du déroulé sont ici rédigés en réponse directe
 * au lecteur : mêmes faits, mêmes règles, mêmes chiffres — aucune addition.
 */
export const questionsFrequentes: QuestionFrequente[] = [
  {
    question: "« Je n’ai pas de compte Google, je ne veux pas en créer. »",
    reponse:
      "Rien ne vous y oblige : pendant la session, vous travaillez en binôme avec un collègue. Si vous changez d’avis, la création est gratuite et prend cinq minutes — elle peut très bien se faire après la formation. Et pour la génération libre, Copilot avec le compte établissement reste disponible sans compte Google.",
  },
  {
    question: "« NotebookLM est-il sûr pour les données ? »",
    reponse:
      "Google indique que les sources, les requêtes et les réponses ne servent pas à entraîner ses modèles. Mais un compte personnel reste hors contrat de l’établissement : vous n’y déposez que des supports de cours, jamais un document nominatif — copies, listes, bulletins.",
  },
  {
    question: "« Puis-je partager un carnet avec mes élèves ? »",
    reponse:
      "Oui, en lecture, avec des élèves de 13 ans et plus qui ont leur propre compte — donc jamais avant la 4e en autonomie, et jamais en l’imposant, puisque la charte interdit d’exiger un compte. Prévoyez l’export PDF du quiz ou du résumé pour ceux qui n’y accèdent pas.",
  },
  {
    question: "« Comment savoir si un élève a utilisé l’IA ? »",
    reponse:
      "Les détecteurs automatiques ne sont pas fiables : ils produisent des faux positifs, y compris pour des élèves honnêtes. Mieux vaut agir en amont — consignes explicites, étapes intermédiaires, travaux en classe, justification orale, ancrage dans le vécu de la classe.",
  },
  {
    question: "« Je ne veux pas utiliser l’IA. »",
    reponse:
      "Personne n’y est obligé. En revanche, la charte s’applique à tous les élèves : vous précisez donc dans vos consignes ce qui est autorisé pour chaque travail, même si vous n’utilisez pas l’IA vous-même.",
  },
  {
    question: "« Quel outil est vraiment sûr ? »",
    reponse:
      "Copilot avec le compte établissement offre les garanties contractuelles de l’établissement ; NotebookLM offre celles de Google sur un compte personnel. Mais aucun outil n’autorise à y saisir des données personnelles d’élèves : la règle vaut partout.",
  },
  {
    question:
      "« Puis-je demander aux élèves d’utiliser une IA à la maison ? »",
    reponse:
      "Pas avant la 4e, jamais en imposant la création d’un compte, et toujours avec une alternative pour ceux qui n’y ont pas accès. Préférez des usages en classe, encadrés.",
  },
  {
    question: "« L’IA va-t-elle faire les devoirs à la place des élèves ? »",
    reponse:
      "C’est le sens du chantier « évaluer à l’ère de l’IA » lancé cette année : faire évoluer les formats pour que la note reflète les acquis réels. L’atelier A8 y sera consacré.",
  },
  {
    question: "« Et pour les langues, la traduction automatique ? »",
    reponse:
      "Même logique : c’est l’enseignant qui précise le cadre pour chaque travail. La traduction peut être un outil d’apprentissage — comparer, corriger — ou une fraude, lorsqu’un texte traduit est rendu sans autorisation.",
  },
  {
    question: "« Que fait le ministère ? »",
    reponse:
      "Un cadre d’usage a été publié le 14 juin 2025, et les parcours Pix IA deviennent obligatoires en 4e et en 2nde à la rentrée 2026. Un assistant IA souverain existe par ailleurs pour les agents de l’État, réservé aux comptes académiques via ProConnect ; sa version enseignants est déployée progressivement en 2026-2027.",
  },
];
