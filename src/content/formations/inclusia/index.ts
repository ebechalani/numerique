import type { Formation } from "@/content/types";

import { parOuCommencer } from "./modules/00-par-ou-commencer";
import { prendreEnMain } from "./modules/01-prendre-en-main";
import { decrireSansExposer } from "./modules/02-decrire-sans-exposer";
import { concevoirUneSeance } from "./modules/03-concevoir-une-seance";
import { rendreUnTexteLisible } from "./modules/04-rendre-un-texte-lisible";
import { repondreAUnBesoin } from "./modules/05-repondre-a-un-besoin";
import { communiquerAutrement } from "./modules/06-communiquer-autrement";
import { relireEtAdapter } from "./modules/07-relire-et-adapter";
import { travaillerEnEquipe } from "./modules/08-travailler-en-equipe";

/**
 * Tutoriel « Inclus’IA » — suivi en autonomie, pour les professeurs et les
 * personnels des projets inclusifs.
 *
 * Sources : les pages « Guide d’utilisation », « Démarche », « Cas d’usage »
 * et « Bibliothèque d’instructions » d’Inclus’IA
 * (https://inclusia.forge.apps.education.fr/), telles qu’en ligne le
 * 24 septembre 2026. Tout ce que le tutoriel dit de l’outil en vient ; ce qui
 * n’y figure pas n’est pas affirmé.
 */
export const inclusia: Formation = {
  slug: "inclusia",
  titre: "Inclus’IA : adapter ses supports avec l’IA",
  sousTitre: "Décrire ce qu’on observe · Obtenir un brouillon expert · Relire et adapter",
  accroche:
    "Un tutoriel pas à pas pour adapter un texte, une consigne, une séance ou une planche de pictogrammes aux besoins de vos élèves avec Inclus’IA, l’outil conçu par Emmanuel Gaunard et publié sur la Forge des communs numériques éducatifs — en décrivant ce que vous observez, jamais qui est l’élève.",
  etablissement: "Lycée Montaigne — Beit Chabab · Liban",
  public:
    "Professeurs de toutes disciplines et personnels des projets inclusifs : coordination, AESH, vie scolaire, santé, direction.",
  duree: "2 h 30 en tout, module par module",
  session: "En autonomie · 2026-2027",
  modalite: "autonomie",

  formateur: {
    nom: "Eddy Bachaalany",
    role: "Référent numérique",
    email: "eddy.bachaalany@lycee-montaigne.edu.lb",
  },

  objectifs: [
    {
      numero: "1",
      titre: "Choisir le bon module",
      texte:
        "parmi les vingt que propose Inclus’IA, selon ce que vous avez sous la main : une séance, un texte, un besoin observé, un élève qui n’a pas la parole.",
    },
    {
      numero: "2",
      titre: "Décrire un besoin sans exposer un élève",
      texte:
        "ce que vous observez, sans nom, sans diagnostic, sans détail qui permettrait de le reconnaître.",
    },
    {
      numero: "3",
      titre: "Relire et adapter le brouillon",
      texte:
        "ce qui sort de l’IA est un point de départ : vous vérifiez, vous coupez, vous ajustez avant de le donner à un élève.",
    },
    {
      numero: "4",
      titre: "Travailler en équipe autour d’un élève",
      texte:
        "professeur, coordination, AESH, vie scolaire : chacun son rôle, et le professeur garde la main sur sa séance.",
    },
  ],

  emporte: [
    "Une première adaptation réelle, relue, pour votre classe ou pour un élève",
    "La carte des vingt modules : ce que vous décrivez, ce que vous obtenez",
    "Une banque de formulations pour décrire un besoin sans étiqueter l’élève",
    "La fiche mémo à imprimer et le glossaire de l’école inclusive",
  ],

  prerequis: [
    {
      titre: "Un ordinateur et un navigateur à jour",
      texte:
        "Inclus’IA s’ouvre à l’adresse inclusia.forge.apps.education.fr. Le formulaire est sauvegardé automatiquement : vous pouvez faire une pause.",
    },
    {
      titre: "Un support réel à adapter",
      texte:
        "Un texte, une consigne, une séance ou une évaluation de votre discipline — sans aucun nom d’élève, ni copie, ni document de suivi.",
    },
    {
      titre: "Ce que vous avez observé",
      texte:
        "Pour les modules centrés sur un élève : ce qu’il fait, dans quelle situation, à quelle fréquence. Des faits, pas un diagnostic.",
    },
    {
      titre: "Vos identifiants Microsoft 365 du lycée",
      texte:
        "Facultatif : pour coller les instructions dans Copilot Chat avec le compte de l’établissement, si l’IA intégrée à Inclus’IA ne répond pas.",
    },
  ],

  programme: [
    { horaire: "1", titre: "Par où commencer", duree: "10 min", moduleSlug: "par-ou-commencer" },
    { horaire: "2", titre: "Prendre en main l’outil", duree: "15 min", moduleSlug: "prendre-en-main" },
    {
      horaire: "3",
      titre: "Décrire un besoin sans exposer un élève",
      duree: "15 min",
      moduleSlug: "decrire-sans-exposer",
    },
    {
      horaire: "4",
      titre: "Concevoir, différencier, évaluer une séance",
      duree: "20 min",
      moduleSlug: "concevoir-une-seance",
    },
    {
      horaire: "5",
      titre: "Rendre un texte ou une activité lisible",
      duree: "20 min",
      moduleSlug: "rendre-un-texte-lisible",
    },
    {
      horaire: "6",
      titre: "Répondre à un besoin particulier",
      duree: "25 min",
      moduleSlug: "repondre-a-un-besoin",
    },
    {
      horaire: "7",
      titre: "Communiquer autrement : les planches de pictogrammes",
      duree: "15 min",
      moduleSlug: "communiquer-autrement",
    },
    { horaire: "8", titre: "Relire, ajuster, exporter", duree: "15 min", moduleSlug: "relire-et-adapter" },
    {
      horaire: "9",
      titre: "Travailler en équipe autour d’un élève",
      duree: "15 min",
      moduleSlug: "travailler-en-equipe",
    },
  ],

  modules: [
    parOuCommencer,
    prendreEnMain,
    decrireSansExposer,
    concevoirUneSeance,
    rendreUnTexteLisible,
    repondreAUnBesoin,
    communiquerAutrement,
    relireEtAdapter,
    travaillerEnEquipe,
  ],

  ressources: [
    {
      slug: "fiche-memo",
      titre: "Fiche mémo",
      description:
        "L’essentiel sur une page à imprimer : les cinq étapes, la règle d’or, quel module pour quelle situation, la relecture avant de donner un document à un élève.",
      icone: "memo",
    },
    {
      slug: "carte-des-modules",
      titre: "Les vingt modules",
      description:
        "Chaque module d’Inclus’IA en une ligne : pour quelle situation, ce que vous décrivez dans le formulaire, ce que vous obtenez.",
      icone: "outils",
    },
    {
      slug: "observables",
      titre: "Décrire sans étiqueter",
      description:
        "Une banque de formulations pour passer de l’étiquette ou du jugement à ce qu’on observe, domaine par domaine, et ce qui ne se saisit jamais.",
      icone: "bouclier",
    },
    {
      slug: "questions",
      titre: "Questions fréquentes",
      description:
        "L’IA intégrée ne répond pas, Copilot, données, FALC officiel, plans d’accompagnement : les réponses courtes aux questions qui reviennent.",
      icone: "question",
    },
    {
      slug: "glossaire",
      titre: "Glossaire",
      description:
        "Les sigles de l’école inclusive et de l’outil — AESH, CAA, CUA, EANA, FALC, PAP, PPS… — expliqués simplement.",
      icone: "livre",
    },
  ],
};
