import type { Module } from "@/content/types";

/**
 * Module 0 — Accueil et sondage flash (5 min, avant le repère 0:05).
 * Sources : diaporama diapositives 1 et 2 (avec leurs notes),
 * déroulé animateur 1. Fiche synthétique, 4.1, annexes A et C.
 */
export const avantDeCommencer: Module = {
  slug: "avant-de-commencer",
  numero: 0,
  titre: "Avant de commencer",
  sousTitre: "Accueil et sondage flash",
  duree: 5,
  objectif:
    "Vous saurez dans quel cadre se déroule la session, ce que vous devez avoir sous la main, et vous aurez situé votre pratique et celle de vos élèves par le sondage d’entrée.",
  blocs: [
    { type: "titre", texte: "Le cadre de la session" },
    {
      type: "paragraphe",
      texte:
        "Cette session de deux heures s’adresse aux enseignants du collège et du lycée, toutes disciplines — la vie scolaire y est bienvenue. Elle alterne apports courts, cas pratiques, atelier guidé puis atelier de production par discipline : tout le monde manipule.",
    },
    {
      type: "paragraphe",
      texte:
        "Elle est très pratique : chacun repart avec un carnet NotebookLM sur un de ses chapitres et une ressource prête pour sa classe. Aucun prérequis — la session s’adresse aussi bien à ceux qui n’ont jamais utilisé d’IA qu’à ceux qui en utilisent déjà.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Le ton",
      texte:
        "Ni technophile ni catastrophiste. On parle d’outils, de règles et de pratiques de classe.",
    },

    { type: "titre", texte: "Le sondage d’entrée : trois questions" },
    {
      type: "paragraphe",
      texte:
        "Le sondage se remplit dans Microsoft Forms pendant l’installation, en scannant le QR code projeté (un lien court est également prévu). Les résultats sont affichés et commentés juste après, au début de la séquence suivante.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Utilisez-vous des outils d’IA générative ?",
          texte: "Jamais · Rarement · Souvent · Tous les jours.",
        },
        {
          numero: "2",
          titre: "Pour quoi faire ?",
          texte:
            "Plusieurs réponses possibles : préparer des cours · corriger ou évaluer · tâches administratives · usage personnel · je n’en utilise pas.",
        },
        {
          numero: "3",
          titre: "Vos élèves l’utilisent-ils pour leurs travaux ?",
          texte: "Non · Je ne sais pas · Oui, parfois · Oui, souvent.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Et une question ouverte",
      texte:
        "« Quelle est votre principale question sur l’IA aujourd’hui ? » — réponse libre. C’est elle qui oriente les temps d’échange de la session.",
    },

    { type: "titre", texte: "Ce qu’il faut avoir sous la main" },
    {
      type: "checklist",
      id: "checklist-avant-de-commencer",
      consigne:
        "Les quatre points du message d’invitation envoyé avant la session. Cochez au fur et à mesure : tout doit être prêt avant l’atelier guidé, à 0:50.",
      items: [
        {
          titre: "Votre ordinateur portable, chargé",
          texte:
            "Un ordinateur par participant, ou un pour deux. Des multiprises sont prévues dans la salle.",
        },
        {
          titre: "Un compte Google actif",
          texte:
            "Testez l’accès à notebooklm.google.com avant la session. Si vous n’avez pas de compte, la création est gratuite et prend cinq minutes ; sinon, mettez-vous en binôme avec un collègue pendant l’atelier.",
        },
        {
          titre: "Un chapitre de votre cours au format PDF",
          texte:
            "Exporté depuis Word, sans aucune donnée d’élève. Des chapitres de démonstration non personnels sont fournis à ceux qui n’ont rien apporté.",
        },
        {
          titre: "Vos identifiants Microsoft 365 de l’établissement",
          texte:
            "Ils servent à Copilot Chat, aux formulaires et à l’espace partagé Teams / OneNote de la restitution.",
        },
      ],
    },

    {
      type: "notesAnimateur",
      texte:
        "0:00 — 5 min. Accueil. Pendant l’installation, projeter directement la diapositive du sondage et laisser les participants répondre. Prévoir un lien court en plus du QR code, pour ceux qui n’ont pas de téléphone à portée. Les résultats seront affichés à la diapositive suivante : ouvrir l’onglet « Réponses » de Forms. Intention de la séquence : installer la session sur les usages réels des participants plutôt que sur des généralités, et obtenir des données à afficher immédiatement. Annoncer : 2 heures, très pratique, chacun repart avec un carnet NotebookLM sur un de ses chapitres et une ressource prête pour sa classe. Ton : ni technophile ni catastrophiste — des outils, des règles, des pratiques de classe.",
    },
  ],
};
