import type { Module } from "@/content/types";

/**
 * Module 3 — Le cadre : la charte IA de l’établissement (0:30, 15 minutes).
 *
 * Contenu repris des diapositives 11 à 15 (et de leurs notes) et de la
 * partie 4.4 du déroulé de l’animateur. Les formulations de la charte,
 * les verdicts et les justifications des cas pratiques sont cités tels quels :
 * ce module fait référence, la fidélité prime sur le style.
 */
export const charte: Module = {
  slug: "la-charte-ia",
  numero: 3,
  titre: "Le cadre : la charte IA de l’établissement",
  sousTitre:
    "Cinq principes, le feu tricolore des élèves, nos obligations, six cas pratiques",
  duree: 15,
  horaire: "0:30",
  objectif:
    "Situer un usage de l’IA — celui d’un élève comme le vôtre — dans le feu tricolore de la charte, et annoncer à vos classes le régime applicable à chaque travail.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "La charte de l’établissement tient en trois temps : les cinq principes, le feu tricolore pour les élèves, les obligations des enseignants. Deux points priment sur tous les autres : la règle d’or — un usage non autorisé dans un travail évalué est une fraude — et les données personnelles, qui n’entrent jamais dans un outil d’IA, quel que soit le compte.",
    },

    { type: "titre", texte: "Cinq principes pour tous" },
    {
      type: "paragraphe",
      texte:
        "Ces cinq principes sont issus du cadre national et repris dans la charte de l’établissement.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Plus-value pédagogique",
          texte:
            "Utile aux apprentissages — jamais à la place de la réflexion de l’élève ni de l’expertise de l’enseignant.",
        },
        {
          titre: "Transparence",
          texte:
            "Tout usage significatif est déclaré, par les élèves comme par les adultes.",
        },
        {
          titre: "Esprit critique",
          texte:
            "Une IA peut se tromper ou refléter des biais : on vérifie, on croise.",
        },
        {
          titre: "Protection des données",
          texte:
            "Aucune donnée personnelle dans un outil d’IA, quel que soit le compte.",
        },
        {
          titre: "Sobriété",
          texte: "Un coût énergétique réel : un usage mesuré, quand c’est utile.",
        },
      ],
    },

    { type: "titre", texte: "Pour les élèves : autorisé, encadré, interdit" },
    {
      type: "feu",
      colonnes: [
        {
          verdict: "autorise",
          titre: "AUTORISÉ",
          precision: "sans demande préalable",
          items: [
            "Se faire réexpliquer une notion vue en classe",
            "S’entraîner, se faire poser des questions",
            "Demander des exemples, une reformulation",
            "Explorer un sujet — en croisant les sources",
          ],
        },
        {
          verdict: "encadre",
          titre: "ENCADRÉ",
          precision: "avec l’accord explicite de l’enseignant",
          items: [
            "Aide au plan, remue-méninges",
            "Relecture d’un devoir à la maison",
            "Traduction, aide en langues",
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
            "IA pendant un devoir surveillé ou un examen",
            "Saisir des données personnelles",
            "Contenus trompeurs ou blessants (deepfakes…)",
          ],
        },
      ],
      regleOr:
        "IA non autorisée dans un travail évalué = fraude, comme un plagiat. Pas d’usage autonome avant la 4e.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "La colonne du milieu n’existe pas par défaut",
      texte:
        "Un usage n’est « encadré » que si l’enseignant l’a explicitement autorisé, et l’usage est alors mentionné dans le travail rendu. Sans autorisation annoncée, on retombe dans la colonne rouge.",
    },

    { type: "titre", texte: "Pour nous, enseignants" },
    {
      type: "liste",
      items: [
        "Relecture humaine systématique de tout ce que l’IA produit — même avec des sources",
        "Transparence envers les élèves quand un support vient d’une IA",
        "Jamais de données personnelles d’élèves (noms, notes, copies, santé, photos)",
        "Aucun compte sur un service d’IA imposé à un élève",
        "La note reste une décision humaine — pas d’évaluation automatisée",
        "Pour chaque travail, je précise aux élèves : IA interdite, autorisée avec déclaration, ou libre",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Pour chaque travail, je précise le régime",
      texte:
        "IA interdite · IA autorisée avec déclaration · IA libre. Une consigne claire évite la plupart des situations de fraude.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Le manquement le plus fréquent",
      texte:
        "Coller des noms ou des notes d’élèves dans un outil : jamais, quel que soit l’outil ou le compte. On anonymise — « élève A », « élève B ».",
    },

    { type: "titre", texte: "Cas pratiques : autorisé, encadré ou interdit ?" },
    {
      type: "casPratiques",
      id: "cas-charte",
      consigne: "En binôme : 1 minute par cas, puis le corrigé.",
      cas: [
        {
          situation:
            "Un élève de 3e utilise une IA à la maison pour se faire réexpliquer le théorème de Thalès.",
          verdict: "autorise",
          pourquoi:
            "Usage de compréhension ; l’élève est en 3e (usage autonome possible à partir de la 4e).",
        },
        {
          situation:
            "Une élève de 1re rend une dissertation rédigée par une IA sans le mentionner.",
          verdict: "interdit",
          pourquoi: "Fraude : travail évalué, sans autorisation, non déclaré.",
        },
        {
          situation:
            "Un élève de 2nde demande un plan d’exposé à une IA ; l’enseignant avait autorisé « une aide encadrée ».",
          verdict: "encadre",
          pourquoi:
            "Autorisé si l’usage est mentionné dans le travail (outil, usage).",
        },
        {
          situation:
            "Un enseignant colle la liste des notes avec les noms des élèves dans un outil d’IA pour rédiger des appréciations.",
          verdict: "interdit",
          pourquoi:
            "Données personnelles — quel que soit l’outil ou le compte. Alternative : anonymiser (« élève A »).",
        },
        {
          situation: "Un élève de 6e fait ses devoirs seul avec une IA.",
          verdict: "interdit",
          verdictLibelle: "Non autorisé",
          pourquoi:
            "Pas d’usage autonome avant la 4e ; en parler avec la famille.",
        },
        {
          situation:
            "Un enseignant génère un quiz avec une IA et le distribue sans le relire.",
          verdict: "interdit",
          verdictLibelle: "Manquement",
          pourquoi:
            "La relecture humaine est obligatoire : erreurs et biais possibles — même avec des sources.",
        },
      ],
    },

    {
      type: "notesAnimateur",
      texte:
        "0:30 — 15 minutes. La charte est résumée dans la fiche outils : ne pas la lire, en donner les clés et faire travailler les cas pratiques. Les cinq principes : une phrase chacun ; le plus important pour nous, transparence et protection des données. Feu tricolore : insister sur le fait que la colonne orange n’existe que si l’enseignant l’a explicitement autorisée, avec usage mentionné dans le travail rendu ; règle d’or, usage non autorisé dans un travail évalué = fraude, traitée comme un plagiat ; pas d’usage autonome avant la 4e. Obligations enseignants : le point le plus fréquent en pratique est de coller des noms ou des notes dans un outil — jamais, quel que soit l’outil ou le compte ; on anonymise (« élève A »). Cas pratiques : binômes, 1 minute par cas, vote à main levée, puis corrigé ensemble. Repère de temps : à 0:45 la partie « cadre » doit être terminée.",
    },
  ],
};
