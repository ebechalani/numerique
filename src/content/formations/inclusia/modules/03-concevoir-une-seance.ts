import type { Module } from "@/content/types";

/**
 * Module 3 — Concevoir, différencier, évaluer une séance (20 minutes).
 *
 * Les cinq modules d’Inclus’IA qui partent d’une séance, d’une consigne ou
 * d’une évaluation : Conception CUA, Analyse CUA, Différenciation, Expliciter
 * une tâche, Concevoir un QCM. Tiré des pages Démarche (la famille), Cas
 * d’usage (exemples 1 à 5), Bibliothèque d’instructions (CONTEXTE, CONTRAINTES
 * et FORMAT DE SORTIE des cinq instructions) et Guide (liste des modules,
 * export du QCM, notice), telles qu’en ligne le 24 septembre 2026.
 */

/** Les cinq modules de la famille, dans l’ordre des options du QCM. */
const CINQ_MODULES = [
  "Conception CUA",
  "Analyse CUA",
  "Différenciation",
  "Expliciter une tâche",
  "Concevoir un QCM",
];

export const concevoirUneSeance: Module = {
  slug: "concevoir-une-seance",
  numero: 3,
  titre: "Concevoir, différencier, évaluer une séance",
  sousTitre:
    "Conception CUA, Analyse CUA, Différenciation, Expliciter une tâche, Concevoir un QCM : quand s’en servir, quoi décrire, quoi vérifier",
  duree: 20,
  objectif:
    "Choisir, parmi les cinq modules qui partent d’une séance, d’une consigne ou d’une évaluation, celui qui répond à votre besoin, et vérifier dans le résultat la règle que son instruction impose.",
  blocs: [
    { type: "titre", texte: "Ce que vous avez sous la main" },
    {
      type: "paragraphe",
      texte:
        "Inclus’IA range ses vingt modules « par ce que vous avez sous la main ». Ici, vous partez d’une séance, d’une consigne ou d’une évaluation. Les exemples cités plus bas viennent de la page Cas d’usage : ils sont illustratifs — « ce ne sont pas des captures de génération ».",
    },
    {
      type: "tableau",
      entetes: ["Votre point de départ", "Le module", "Ce que vous obtenez"],
      lignes: [
        [
          "Une séance à écrire",
          "Conception CUA",
          "Une fiche de séance accessible dès le départ",
        ],
        [
          "Une séance rodée qui ne fonctionne plus",
          "Analyse CUA",
          "Un diagnostic et des améliorations classées par effort et par impact",
        ],
        [
          "Une consigne, une classe hétérogène",
          "Différenciation",
          "Trois versions de la même consigne : soutien, standard, expert",
        ],
        [
          "Une tâche que les élèves font sans voir ce qu’ils apprennent",
          "Expliciter une tâche",
          "Ce qu’il faut FAIRE, ce qu’il faut APPRENDRE, les implicites levés",
        ],
        [
          "Une notion à vérifier",
          "Concevoir un QCM",
          "Des questions équitables, une rétroaction pour chaque proposition",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Avant de choisir",
      texte:
        "Ces modules travaillent pour toute la classe : vous n’y décrivez pas un élève en particulier. Pour les profils de la classe, donnez des nombres et des besoins observés, jamais un nom (module 2). Quatre d’entre eux se terminent par une synthèse « 3 gestes prioritaires à mettre en place dès demain », dans les notes pour l’enseignant ; Concevoir un QCM, par une courte note sur les règles de Leclercq appliquées. Relire ces résultats est l’objet du module 7.",
    },

    { type: "titre", texte: "La grille CUA : trois principes, neuf directives" },
    {
      type: "paragraphe",
      texte:
        "Conception CUA et Analyse CUA partagent la même grille : la Conception Universelle de l’Apprentissage, selon les UDL Guidelines 2.2 du CAST (2018). Chaque principe se décline en trois directives, que les instructions énoncent en toutes lettres.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Représentation — le quoi",
          texte:
            "La même information sous plusieurs formats ; le vocabulaire et les symboles explicités ; les connaissances préalables activées, l’essentiel mis en évidence.",
        },
        {
          numero: "2",
          titre: "Action et expression — le comment",
          texte:
            "Plusieurs façons de répondre, pas seulement écrire à la main ; plusieurs formats de production ; l’objectif explicité, la tâche décomposée, la planification soutenue.",
        },
        {
          numero: "3",
          titre: "Engagement — le pourquoi",
          texte:
            "Des choix, un lien avec le vécu ; l’objectif rappelé, le défi ajusté, la coopération organisée ; des critères de réussite et l’auto-évaluation.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "S’y ajoutent les étapes de l’enseignement explicite (Rosenshine) : objectivation de l’apprentissage visé, modelage, pratique guidée, pratique autonome. Conception CUA structure la séance ainsi ; Analyse CUA vérifie qu’elles y sont et, sinon, en fait l’amélioration prioritaire.",
    },

    { type: "titre", texte: "Conception CUA — une séance accessible dès le départ" },
    {
      type: "paragraphe",
      texte:
        "Quand : vous écrivez une séance et voulez qu’elle fonctionne pour tous d’emblée, plutôt que d’adapter après coup pour quelques élèves.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous décrivez",
          texte:
            "La discipline, le niveau, la durée, le sujet, l’objectif, les profils de la classe ; si besoin, des contraintes, et vos documents ou idées de départ.",
        },
        {
          titre: "Vous obtenez",
          texte:
            "Une fiche : l’objectif rattaché au référentiel, le déroulement par phases avec les principes CUA mobilisés, le matériel, l’évaluation, les points de vigilance, les 3 gestes.",
        },
        {
          titre: "La règle de l’instruction",
          texte:
            "Une séance accessible « PAR CONCEPTION (a priori), pas par adaptation a posteriori », une évaluation qui ne passe pas que par l’écrit, la durée respectée.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage (6e, français), « lecture d’un extrait, puis les élèves rédigent le portrait d’un personnage » devient : l’extrait en texte, en audio et en version aérée ; le portrait rendu à l’écrit, à l’oral ou en carte mentale ; le personnage choisi par l’élève, des critères de réussite explicites.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Au lycée : le bon référentiel",
      texte:
        "L’instruction réserve le socle commun à la scolarité obligatoire, du CP à la 3e, et interdit de le citer en 2de, 1re et Terminale, même partiellement : au lycée, l’objectif se rattache aux compétences travaillées et aux capacités du programme de la discipline. Indiquez le niveau exact, puis vérifiez. Une mention « (intitulé à vérifier dans le programme officiel) » vous renvoie au programme.",
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Si vous fournissez vos documents",
      texte:
        "L’IA doit en faire la matière première de la séance, ne rien leur attribuer qui ne s’y trouve pas et dire ce qui manque au lieu de le combler en silence. Le résultat le montre en deux lignes : « Repris de vos documents : … » et « Ajouté par l’IA : … ». Des supports de cours seulement, jamais un document d’élève.",
    },

    { type: "titre", texte: "Analyse CUA — diagnostiquer une séance existante" },
    {
      type: "paragraphe",
      texte:
        "Quand : une séance rodée ne fonctionne plus pour tout le monde, et vous voulez savoir où ça coince sans tout refaire.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous décrivez",
          texte:
            "La discipline, le niveau, les problèmes observés, les contraintes matérielles — et, comme dans l’exemple de la page Cas d’usage, le déroulement de la séance.",
        },
        {
          titre: "Vous obtenez",
          texte:
            "Les forces et les faiblesses par principe CUA, des améliorations classées par effort et par impact, la séance révisée, les 3 gestes.",
        },
        {
          titre: "La règle de l’instruction",
          texte:
            "Les forces d’abord. Puis les améliorations, impact fort et effort faible en tête — aucune qui demande du matériel non disponible.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple (3e, physique-chimie) : cours au vidéoprojecteur, fiche d’exercices, correction collective ; un tiers de la classe décroche pendant les exercices. Après les forces vient, par exemple, une amélioration à effort faible et impact fort : distribuer la trace écrite avant le cours dialogué.",
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Dites ce que vous n’avez pas",
      texte:
        "« Pas de tablettes ? Salle fixe ? Temps limité ? » : le guide conseille de préciser vos contraintes. L’instruction écarte le matériel non disponible — encore faut-il le dire. Et n’appliquez pas tout : le tri par effort et par impact permet de n’en retenir qu’une amélioration dès la semaine suivante.",
    },

    { type: "titre", texte: "Différenciation — trois versions d’une même consigne" },
    {
      type: "paragraphe",
      texte:
        "Quand : une même consigne, une classe hétérogène. Vous voulez trois versions de cette consigne, plutôt que trois exercices sans lien.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous décrivez",
          texte:
            "La consigne telle que vous la donnez, la discipline, le niveau et l’objectif d’apprentissage ; si besoin, des options de différenciation.",
        },
        {
          titre: "Vous obtenez",
          texte:
            "Soutien, standard, expert : pour chacune, la consigne, ses aménagements, ses critères de réussite. La partie élève s’imprime sans rien en retirer ; les notes et les 3 gestes sont à part.",
        },
        {
          titre: "La règle de l’instruction",
          texte:
            "Le même objectif pour les trois : « la différenciation porte sur le chemin, pas sur la destination ». Pas de groupes de niveau figés : n’importe quel élève peut passer d’une version à l’autre.",
        },
      ],
    },
    {
      type: "tableau",
      entetes: ["", "Dans l’exemple de la page Cas d’usage (CM2)"],
      lignes: [
        [
          "Départ",
          "« Une recette pour 4 personnes utilise 200 g de farine. Calcule la quantité de farine nécessaire pour 6 personnes. »",
        ],
        [
          "Soutien",
          "« Pour 1 personne : 200 ÷ 4 = … g. Pour 6 personnes : … × 6 = … g. »",
        ],
        ["Standard", "La consigne d’origine, sans étayage supplémentaire."],
        [
          "Expert",
          "« Donne la quantité pour 10 personnes, puis explique la méthode qui marcherait pour n’importe quel nombre de convives. »",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Chaque version nomme les leviers de Tomlinson qu’elle actionne : les contenus, les processus, les productions, l’environnement de travail. L’objectif se rattache au socle commun jusqu’à la fin du collège, au programme de la discipline au lycée.",
    },

    { type: "titre", texte: "Expliciter une tâche — lever les implicites" },
    {
      type: "paragraphe",
      texte:
        "Quand : les élèves ont « fait le travail », et pourtant l’évaluation suivante est ratée. La page Démarche nomme cet obstacle : « la confusion entre la tâche à faire et le savoir visé ».",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous décrivez",
          texte:
            "La tâche, la discipline, le niveau, ce qu’elle vise à faire apprendre, vos constats, les leviers retenus. Sans objectif précisé, l’IA en formule un, signalé comme hypothèse.",
        },
        {
          titre: "Vous obtenez",
          texte:
            "Un tableau FAIRE / APPRENDRE, les implicites classés, la consigne réécrite, trois à cinq critères de réussite en mots d’élève, un exemple traité, une modalité de coopération, les 3 gestes.",
        },
        {
          titre: "La règle de l’instruction",
          texte:
            "« Expliciter n’est pas simplifier » : ni la difficulté, ni le vocabulaire disciplinaire, ni l’exigence ne baissent. Et cela vaut pour toute la classe, sans désigner aucun élève.",
        },
      ],
    },
    {
      type: "tableau",
      entetes: ["", "Dans l’exemple de la page Cas d’usage (4e, histoire)"],
      lignes: [
        [
          "Consigne",
          "« À l’aide des documents 1 à 3, rédigez un paragraphe argumenté sur les conditions de travail des ouvriers au XIXe siècle. »",
        ],
        ["FAIRE", "Rédiger un paragraphe à partir de trois documents."],
        [
          "APPRENDRE",
          "Croiser des documents de nature différente pour établir un fait historique.",
        ],
        [
          "Implicites",
          "« Argumenté » n’est jamais défini ; rien ne dit qu’il faut citer les documents.",
        ],
        [
          "Critères",
          "« j’ai utilisé les trois documents » · « pour chaque idée, j’ai dit d’où elle vient »",
        ],
      ],
    },

    { type: "titre", texte: "Concevoir un QCM — évaluer la notion, pas la lecture" },
    {
      type: "paragraphe",
      texte:
        "Quand : vous voulez vérifier vite qu’une notion est acquise, sans que la note mesure surtout « la capacité à décoder l’énoncé » (page Cas d’usage).",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous décrivez",
          texte:
            "La discipline, le niveau, l’objectif évalué, la notion, le nombre de propositions. Selon la page Cas d’usage, une checklist vérifie les 20 règles de Leclercq au fil de la saisie.",
        },
        {
          titre: "Vous obtenez",
          texte:
            "Pour chaque question : l’amorce, les propositions, la bonne réponse et une rétroaction pour chaque proposition ; puis une note sur les règles appliquées.",
        },
        {
          titre: "La règle de l’instruction",
          texte:
            "Des distracteurs tirés d’erreurs fréquentes et plausibles ; une rétroaction qui nomme l’erreur, jamais « Faux », « Non » ni « À revoir » ; aucune référence précise que vous n’avez pas fournie.",
        },
      ],
    },
    {
      type: "tableau",
      entetes: ["Le piège", "Ce que l’instruction exige"],
      lignes: [
        [
          "« Qu’est-ce qui n’est pas faux… »",
          "Éviter les négations ; une négation indispensable est soulignée, jamais accumulée.",
        ],
        [
          "« Toutes les réponses ci-dessus »",
          "Proscrit : la bonne réponse ne se construit pas en cumulant les autres.",
        ],
        [
          "Un distracteur absurde",
          "Des distracteurs également plausibles, chacun tiré d’une erreur fréquente.",
        ],
        [
          "Une bonne réponse plus longue",
          "Des longueurs harmonisées : la bonne réponse n’est pas plus longue que les distracteurs.",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple (2de), « Qu’est-ce qui n’est pas faux à propos de la photosynthèse ? » devient « Pendant la photosynthèse, la plante rejette… », avec des distracteurs tirés d’une erreur réellement observée : la confusion avec la respiration.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Bon à savoir",
      texte:
        "La question vise le niveau de la taxonomie de Bloom imposé : mémoriser, comprendre, appliquer ou analyser. Si la notion se prête mal au QCM, l’IA doit le signaler et proposer un autre format. Le guide annonce un export .json du QCM vers Caramel (H5P), et une notice à imprimer, « Concevoir un QCM inclusif ».",
    },

    { type: "titre", texte: "Quel module pour quelle situation ?" },
    {
      type: "qcm",
      id: "inclusia-m3-qcm-orientation",
      consigne: "Pour chaque situation, choisissez le module par lequel commencer.",
      questions: [
        {
          question:
            "1re, histoire-géographie : vous préparez un chapitre neuf et voulez que la séance fonctionne d’emblée pour toute la classe, plutôt que d’adapter ensuite.",
          options: CINQ_MODULES,
          bonne: 0,
          explication:
            "Conception CUA bâtit une séance accessible « PAR CONCEPTION (a priori) ». Au lycée, vérifiez ensuite que l’objectif est rattaché au programme de la discipline, pas au socle commun.",
        },
        {
          question:
            "2de, SVT : votre séance tourne depuis des années ; cette année, une bonne partie du groupe décroche pendant les exercices. Vous ne voulez pas tout refaire.",
          options: CINQ_MODULES,
          bonne: 1,
          explication:
            "Analyse CUA part de la séance existante : les forces d’abord, puis des améliorations classées par effort et par impact.",
        },
        {
          question:
            "5e, mathématiques : sur le même exercice d’aire, certains bloquent dès la première ligne, d’autres ont fini en cinq minutes.",
          options: CINQ_MODULES,
          bonne: 2,
          explication:
            "Différenciation produit trois versions de la même consigne, qui visent le même objectif : seul l’étayage change.",
        },
        {
          question:
            "3e, français : tous ont rendu leur paragraphe d’analyse, mais la plupart ont résumé le texte. Ils ont fait ce qui était demandé sans voir ce qu’il fallait apprendre.",
          options: CINQ_MODULES,
          bonne: 3,
          explication:
            "C’est la confusion entre FAIRE et APPRENDRE que traite Expliciter une tâche. Parmi les implicites qu’elle cherche : ce qu’on attend derrière « analyse ».",
        },
        {
          question:
            "Terminale, physique-chimie : vous voulez vérifier en dix minutes qu’une notion est acquise, avec un retour pour chaque réponse possible.",
          options: CINQ_MODULES,
          bonne: 4,
          explication:
            "Concevoir un QCM suit les 20 règles de Leclercq et rédige une rétroaction sans jugement pour chaque proposition, distracteurs compris.",
        },
        {
          question:
            "4e : un élève arrivé en cours d’année comprend encore très peu le français. Vous voulez adapter pour lui le texte de l’activité d’histoire.",
          options: ["Différenciation", "Expliciter une tâche", "Conception CUA", "Allophone"],
          bonne: 3,
          explication:
            "Le point de départ est un texte, le besoin porte sur la langue : c’est le module Allophone, qui préserve l’objectif disciplinaire. Le module 4 du tutoriel le présente.",
        },
        {
          question:
            "Le résultat de Conception CUA pour votre classe de 1re rattache l’objectif au socle commun. Que faites-vous ?",
          options: [
            "Vous le gardez : le socle vaut à tous les niveaux",
            "Vous le remplacez par le programme de la discipline",
            "Vous y ajoutez le numéro de cycle du niveau",
            "Vous retirez tout rattachement à un référentiel",
          ],
          bonne: 1,
          explication:
            "L’instruction réserve le socle commun à la scolarité obligatoire, du CP à la 3e, et interdit de le citer au lycée : l’objectif se rattache aux compétences et capacités du programme de la discipline. C’est le genre d’écart que la relecture doit attraper.",
        },
      ],
    },

    { type: "titre", texte: "À vous : trois versions d’une de vos consignes" },
    {
      type: "exercice",
      id: "inclusia-m3-exercice-differenciation",
      titre: "Différencier une consigne réelle",
      consigne:
        "Prenez une consigne que vous donnerez cette semaine et faites-en trois versions avec le module Différenciation. Comptez cinq minutes pour le formulaire, puis quelques minutes pour relire.",
      duree: "10 min",
      etapes: [
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile Différenciation.",
        "Premier essai ? « Remplir avec un exemple », sous le formulaire, montre ce qu’il attend ; remplacez ensuite l’exemple par votre situation.",
        "Décrivez la discipline, le niveau, l’objectif d’apprentissage, et donnez la consigne telle que vous la distribuez. Aucun nom d’élève.",
        "Générez les instructions (Ctrl+Entrée) ; retrouvez-y la contrainte du même objectif et celle qui écarte les groupes de niveau figés.",
        "Envoyez-les à l’IA intégrée — ou copiez-les dans Copilot Chat avec votre compte du lycée, puis recollez le résultat avec « J’ai utilisé une autre IA — coller le résultat ».",
      ],
      champs: [
        {
          id: "consigne",
          type: "texte-long",
          lignes: 3,
          libelle: "Votre consigne de départ",
          aide: "Telle que vous la donnez. Aucun nom d’élève, ici non plus.",
        },
        {
          id: "objectif",
          type: "texte",
          libelle: "L’objectif d’apprentissage indiqué",
        },
        {
          id: "meme-objectif",
          type: "choix",
          libelle: "Les trois versions visent-elles le même objectif ?",
          options: [
            "Oui, seul le chemin change",
            "Non, la version soutien vise moins haut",
            "Je ne sais pas encore le dire",
          ],
        },
        {
          id: "retouche",
          type: "texte-long",
          lignes: 3,
          libelle: "Ce que vous changez avant de distribuer",
          aide: "Une version à raccourcir, une amorce à corriger, un référentiel erroné… Sans nom d’élève.",
        },
      ],
      retour: {
        titre: "Ce qu’on vérifie",
        texte:
          "Le résultat est un brouillon : il ne va à la classe qu’après votre relecture. Quatre points propres à ce module :",
        points: [
          "Même destination : si la version soutien vise plus bas, l’instruction n’a pas été suivie — précisez l’objectif et recommencez.",
          "Chaque version nomme ses leviers : contenus, processus, productions, environnement.",
          "La partie à remettre à l’élève s’imprime telle quelle, sans note pour l’enseignant.",
          "Les versions ne sont pas des groupes : n’importe quel élève peut prendre l’une ou l’autre.",
        ],
      },
      suite: {
        href: "/formations/inclusia/rendre-un-texte-lisible",
        libelle: "Module 4 — Rendre un texte ou une activité lisible",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description: "Décrire la classe par des besoins observés, jamais par des noms.",
        },
        {
          libelle: "Module 5 — Répondre à un besoin particulier",
          href: "/formations/inclusia/repondre-a-un-besoin",
          description: "Quand vous partez de ce que vous observez chez un élève.",
        },
        {
          libelle: "Module 7 — Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description: "La relecture complète, les 3 gestes prioritaires, les téléchargements.",
        },
        {
          libelle: "Bibliothèque d’instructions",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les cinq instructions en entier. Au 24 septembre 2026 : Conception CUA v1.6.0, Différenciation v1.5.0, Analyse CUA v1.4.0, Expliciter une tâche v1.0.0, Concevoir un QCM v1.0.0.",
        },
        {
          libelle: "Cas d’usage",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description: "Les exemples 1 à 5, avant et après.",
        },
        {
          libelle: "M2PA",
          href: "https://m2pa.forge.apps.education.fr/",
          description:
            "L’outil complémentaire de la tuile Planification M2PA, pour planifier l’accessibilité d’une séance entière.",
        },
      ],
    },
  ],
};
