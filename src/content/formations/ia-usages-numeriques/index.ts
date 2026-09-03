import type { Formation } from "@/content/types";

import { avantDeCommencer } from "./modules/00-avant";
import { pourquoi } from "./modules/01-pourquoi";
import { comprendre } from "./modules/02-comprendre";
import { charte } from "./modules/03-charte";
import { atelierNotebookLM } from "./modules/04-notebooklm";
import { atelierDiscipline } from "./modules/05-atelier-discipline";
import { restitutionCloture } from "./modules/06-cloture";

/**
 * Formation de pré-rentrée « IA et usages numériques » — Lycée Montaigne.
 * Source : diaporama (25 diapositives), fiche outils et déroulé animateur, version 3.
 */
export const iaUsagesNumeriques: Formation = {
  slug: "ia-usages-numeriques",
  titre: "IA et usages numériques",
  sousTitre: "Comprendre · Encadrer · Utiliser",
  accroche:
    "Deux heures très pratiques : vous repartez avec un carnet NotebookLM sur un de vos chapitres, une ressource vérifiée prête pour votre classe, et un message clair pour vos élèves.",
  etablissement: "Lycée Montaigne — Beit Chabab · Liban",
  public:
    "Enseignants du collège et du lycée, toutes disciplines. Vie scolaire bienvenue.",
  duree: "2 heures",
  session: "Pré-rentrée 2026",

  formateur: {
    nom: "Eddy Bachaalany",
    role: "Référent numérique",
    email: "eddy.bachaalany@lycee-montaigne.edu.lb",
  },

  objectifs: [
    {
      numero: "1",
      titre: "Expliquer ce qu’est une IA générative",
      texte: "et ce qu’elle ne sait pas faire.",
    },
    {
      numero: "2",
      titre: "Appliquer la charte IA de l’établissement",
      texte: "règles élèves, obligations enseignants, données personnelles.",
    },
    {
      numero: "3",
      titre: "Ancrer une IA sur vos propres supports",
      texte:
        "avec NotebookLM : guide d’étude, quiz, flashcards, résumé audio — et Copilot pour créer de zéro.",
    },
    {
      numero: "4",
      titre: "Produire une ressource vérifiée",
      texte: "pour votre classe, dès la rentrée.",
    },
  ],

  emporte: [
    "Un carnet NotebookLM sur un de vos chapitres, avec une ressource vérifiée",
    "La fiche outils (règles, requêtes, outils)",
    "Trois phrases à dire aux élèves la première semaine",
    "Vos accès vérifiés : Google et Microsoft 365",
  ],

  prerequis: [
    {
      titre: "Votre ordinateur portable",
      texte: "Chargé — un par participant, ou un pour deux en binôme.",
    },
    {
      titre: "Un compte Google actif",
      texte:
        "Si vous n’en avez pas, créez-le gratuitement avant la session (cinq minutes) et testez l’accès à notebooklm.google.com.",
    },
    {
      titre: "Un chapitre de votre cours en PDF",
      texte: "Exporté depuis Word, sans aucune donnée d’élève.",
    },
    {
      titre: "Vos identifiants Microsoft 365",
      texte: "Ceux de l’établissement, pour accéder à Copilot Chat.",
    },
  ],

  programme: [
    {
      horaire: "0:00",
      titre: "Sondage flash",
      duree: "5 min",
      moduleSlug: "avant-de-commencer",
    },
    {
      horaire: "0:05",
      titre: "Pourquoi on en parle",
      duree: "10 min",
      moduleSlug: "pourquoi-on-en-parle",
    },
    {
      horaire: "0:15",
      titre: "Comprendre l’IA générative",
      duree: "15 min",
      moduleSlug: "comprendre-ia-generative",
    },
    {
      horaire: "0:30",
      titre: "Le cadre : la charte IA",
      duree: "15 min",
      moduleSlug: "la-charte-ia",
    },
    { horaire: "0:45", titre: "Pause", duree: "5 min" },
    {
      horaire: "0:50",
      titre: "Atelier guidé NotebookLM",
      duree: "25 min",
      moduleSlug: "atelier-notebooklm",
    },
    {
      horaire: "1:15",
      titre: "Atelier par discipline",
      duree: "30 min",
      moduleSlug: "atelier-par-discipline",
    },
    {
      horaire: "1:45",
      titre: "Restitution et clôture",
      duree: "15 min",
      moduleSlug: "restitution-et-cloture",
    },
  ],

  modules: [
    avantDeCommencer,
    pourquoi,
    comprendre,
    charte,
    atelierNotebookLM,
    atelierDiscipline,
    restitutionCloture,
  ],

  ressources: [
    {
      slug: "fiche-outils",
      titre: "Fiche outils",
      description:
        "La fiche remise en séance, en neuf sections : règles, gestes NotebookLM et Copilot, requêtes types, points de contrôle.",
      icone: "fiche",
    },
    {
      slug: "requetes",
      titre: "Bibliothèque de requêtes",
      description:
        "Les requêtes de la session, classées par usage, avec l’outil conseillé — à copier et à adapter à votre discipline.",
      icone: "requete",
    },
    {
      slug: "questions",
      titre: "Questions fréquentes",
      description:
        "Les questions posées en formation — comptes, données, partage aux élèves, détection — et les réponses de l’animateur.",
      icone: "question",
    },
    {
      slug: "animateur",
      titre: "Déroulé animateur",
      description:
        "Le déroulé minute par minute, la préparation logistique, les variantes et les annexes, pour animer la session à son tour.",
      icone: "animateur",
    },
  ],
};
