import type { Module } from "@/content/types";

/**
 * Module 0 — Par où commencer (10 minutes).
 *
 * Ce qu’est Inclus’IA et ce qu’il n’est pas, la chaîne en cinq étapes dont
 * trois appartiennent à l’enseignant, le principe « l’enseignant garde la
 * main », puis les deux parcours du tutoriel (professeur, équipe inclusive).
 * Tiré des pages « Démarche », « Guide d’utilisation » et « Cas d’usage »
 * d’Inclus’IA (https://inclusia.forge.apps.education.fr/), telles qu’en ligne
 * le 24 septembre 2026.
 */
export const parOuCommencer: Module = {
  slug: "par-ou-commencer",
  numero: 0,
  titre: "Par où commencer",
  sousTitre:
    "Ce qu’est Inclus’IA, ce qu’il n’est pas, vos trois étapes sur cinq et le parcours qui vous correspond",
  duree: 10,
  objectif:
    "Dire en trois phrases ce que fait Inclus’IA et ce qu’il ne fait pas, situer vos trois étapes dans la chaîne, et choisir votre parcours dans ce tutoriel à partir d’une situation réelle décrite sans nom.",
  blocs: [
    { type: "titre", texte: "Inclus’IA en trois phrases" },
    {
      type: "paragraphe",
      texte:
        "Adapter une consigne, simplifier un texte, concevoir une séance qui fonctionne pour tous les élèves : ces gestes prennent du temps. Une IA générative peut aider, à condition de lui donner un cadrage solide — « une question vague produit une réponse vague », rappelle la page Démarche. Inclus’IA fait ce cadrage pour vous. Le site s’adresse à toute personne qui prépare des séances, du premier degré au lycée.",
    },
    {
      type: "citation",
      texte:
        "Inclus’IA n’est pas un générateur de contenu pédagogique clé en main. C’est un assistant qui transforme votre description d’une situation de classe en instructions expertes, que vous pouvez utiliser avec l’IA générative de votre choix — la plateforme souveraine ILaaS est proposée par défaut. Vous obtenez un point de départ, à relire, ajuster, et faire vôtre.",
      source: "Inclus’IA, page Démarche",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Vous décrivez, il cadre",
          texte:
            "Vous remplissez un formulaire avec votre situation : la discipline, le niveau, l’objectif, ce que vous observez. Inclus’IA en tire des instructions structurées, ancrées dans la recherche, que l’IA recevra.",
        },
        {
          numero: "2",
          titre: "L’IA intégrée ou la vôtre",
          texte:
            "Vous pouvez envoyer les instructions à l’IA souveraine intégrée au site — la plateforme ILaaS, proposée par défaut, avec Albert, l’IA générative de l’État français, en secours — ou les copier en un clic pour l’IA de votre choix.",
        },
        {
          numero: "3",
          titre: "Un point de départ",
          texte:
            "Ce qui revient est un brouillon, jamais un document fini. Vous le relisez, vous l’ajustez, vous en faites votre support.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le site propose vingt modules, « regroupés par ce que vous avez sous la main : une séance à écrire, un texte à rendre lisible, un besoin particulier à couvrir, un élève qui n’a pas la parole ». Le module 1 vous les présente famille par famille.",
    },

    { type: "titre", texte: "Ce que le site n’est pas" },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Pas un outil de diagnostic",
          texte:
            "« Le site ne pose pas d’étiquette sur un élève/étudiant. Il aide à adapter à des besoins observés, pas à des troubles déclarés. » Vous partez de ce que vous voyez en classe, jamais d’un trouble supposé.",
        },
        {
          titre: "Pas un générateur de séquences clé en main",
          texte:
            "« La sortie est un brouillon dense ; la mise en page, la progression, la contextualisation locale restent à votre charge. » Le module 7 est consacré à ce travail.",
        },
        {
          titre: "Pas un substitut à la formation",
          texte:
            "« Il complète les démarches FALC et CUA, il ne les remplace pas. » L’outil applique des cadres que vous gagnez à connaître : le tutoriel vous les présente au fil des modules.",
        },
      ],
    },

    { type: "titre", texte: "La chaîne en cinq étapes" },
    {
      type: "paragraphe",
      texte:
        "Vous restez l’auteur de votre séance. L’IA n’intervient qu’au milieu, encadrée par des instructions expertes — et, dit la page Démarche, « sur les cinq étapes, trois vous appartiennent ».",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Vous décrivez",
          texte:
            "Votre situation de classe, dans vos mots : ce que vous voulez faire, avec qui, dans quelles conditions. Ce qui concerne un élève se décrit par ce que vous observez, sans nom ni diagnostic.",
        },
        {
          titre: "Inclus’IA assemble",
          texte:
            "Le site transforme votre description en instructions expertes, ancrées dans la recherche. Vous pouvez les lire en clair avant tout envoi.",
        },
        {
          titre: "L’IA répond",
          texte:
            "ILaaS par défaut, ou l’IA de votre choix. Elle propose un brouillon.",
        },
        {
          titre: "Vous relisez",
          texte:
            "Vigilance, ajustements, contextualisation : vous vérifiez ce qui est juste, ce qui manque, ce qui ne convient pas à votre classe.",
        },
        {
          titre: "Vous adaptez",
          texte:
            "La séance finale est la vôtre : vous coupez, vous complétez, vous mettez en page avant de donner quoi que ce soit à un élève.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Combien de temps ?",
      texte:
        "La page Démarche conseille de choisir un module qui correspond à une situation réelle de votre classe, et de compter « cinq minutes pour le formulaire, puis quelques minutes pour relire la proposition de l’IA et l’adapter ». Le module 2 vous entraîne à l’étape 1, le module 7 aux étapes 4 et 5.",
    },

    { type: "titre", texte: "Le professeur garde la main" },
    {
      type: "paragraphe",
      texte:
        "C’est le premier des quatre principes qui guident le site, tels que les énonce la page Démarche.",
    },
    {
      type: "citation",
      texte:
        "La sortie de l’IA est un brouillon expert, jamais une production prête à l’emploi. Vous lisez, vous coupez, vous ajustez, vous contextualisez. L’auteur ou l’autrice de la séance, c’est vous.",
      source: "Inclus’IA, page Démarche — principe 1",
    },
    {
      type: "paragraphe",
      texte:
        "Le guide d’utilisation va dans le même sens : « À aucun moment le site ne produit un document prêt à donner à l’élève ». C’est aussi la règle de la charte IA du lycée : relecture humaine systématique de tout ce que l’IA produit, et transparence envers les élèves quand un support vient d’une IA. Si vous n’êtes pas professeur — AESH, coordination, vie scolaire —, le principe vaut pour vous aussi : ce qui est remis à l’élève en classe se décide avec le professeur de la classe.",
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Avant votre premier essai : la règle d’or",
      texte:
        "Inclus’IA demande de « décrire les difficultés observées sans nommer ni catégoriser » et rappelle : « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant. » Un garde-fou vous alerte sur certaines saisies, mais il ne bloque pas l’envoi : c’est à vous de ne rien écrire d’identifiant. Le module 2 vous apprend à le faire. Il est obligatoire pour tout le monde.",
    },
    {
      type: "liens",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "La règle d’or, le garde-fou et ses limites, passer de l’étiquette à l’observable.",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Aucune donnée personnelle d’élève dans un outil d’IA, relecture humaine systématique, transparence envers les élèves.",
        },
      ],
    },

    { type: "titre", texte: "Vérifiez vos repères" },
    {
      type: "quiz",
      id: "inclusia-m0-quiz-ce-que-fait-l-outil",
      consigne:
        "Ce qu’Inclus’IA est, ce qu’il n’est pas. Vrai ou faux ?",
      items: [
        {
          affirmation:
            "Inclus’IA produit un document prêt à distribuer à l’élève.",
          reponse: false,
          explication:
            "Faux. Le guide est net : « À aucun moment le site ne produit un document prêt à donner à l’élève ». La page Démarche parle d’un brouillon expert, jamais d’une production prête à l’emploi.",
        },
        {
          affirmation:
            "Inclus’IA peut vous aider à savoir si un élève présente un trouble, par exemple une dyslexie.",
          reponse: false,
          explication:
            "Faux. « Ce n’est pas un outil de diagnostic » : le site aide à adapter à des besoins observés, pas à des troubles déclarés. Vous décrivez ce que vous voyez ; le diagnostic relève des professionnels de santé.",
        },
        {
          affirmation:
            "Sur les cinq étapes de la chaîne, l’IA en assure trois.",
          reponse: false,
          explication:
            "Faux. C’est l’inverse : trois étapes vous appartiennent — décrire (1), relire (4), adapter (5). Inclus’IA assemble les instructions (2) ; l’IA ne fait que la 3 : proposer un brouillon.",
        },
        {
          affirmation:
            "Les instructions assemblées par Inclus’IA peuvent être utilisées avec une autre IA que celle intégrée au site.",
          reponse: true,
          explication:
            "Vrai. ILaaS est proposée par défaut, mais les instructions sont affichées en clair et copiables en un clic. Au lycée, l’IA de l’établissement est Copilot Chat avec le compte Microsoft 365 du lycée : le module 1 montre comment faire.",
        },
        {
          affirmation:
            "Plus votre description est précise, meilleur sera le résultat.",
          reponse: true,
          explication:
            "Vrai. Le guide le dit presque mot pour mot — « Plus vous êtes précis, meilleur sera le résultat » — et donne l’exemple : « CM1, 25 élèves/étudiants dont 3 avec PAP » est plus utile que « classe ordinaire ». Précis ne veut pas dire identifiant : on décrit la situation, pas la personne.",
        },
        {
          affirmation:
            "Le site remplace une formation aux démarches FALC ou CUA.",
          reponse: false,
          explication:
            "Faux. « Ce n’est pas un substitut à la formation. Il complète les démarches FALC et CUA, il ne les remplace pas. »",
        },
        {
          affirmation:
            "La mise en page, la progression et l’adaptation au contexte de votre classe restent à votre charge.",
          reponse: true,
          explication:
            "Vrai. La page Démarche le dit ainsi : « La sortie est un brouillon dense ; la mise en page, la progression, la contextualisation locale restent à votre charge. »",
        },
      ],
    },

    { type: "titre", texte: "Choisissez votre parcours" },
    {
      type: "paragraphe",
      texte:
        "Le tutoriel compte huit modules après celui-ci. Inutile de tout suivre d’un bloc : choisissez le parcours qui correspond à votre fonction. Les modules 1, 2 et 7 sont communs aux deux.",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          numero: "A",
          titre: "Vous êtes professeur",
          texte:
            "Modules 1 et 2, puis, selon votre besoin, le module 3 (une séance, une consigne ou une évaluation à concevoir) ou le module 4 (un texte ou une activité à rendre lisible), et enfin le module 7 pour relire et exporter. Comptez environ 1 h 05, ou 1 h 25 avec les modules 3 et 4.",
        },
        {
          numero: "B",
          titre: "Vous faites partie de l’équipe inclusive",
          texte:
            "Coordination et suivi des élèves à besoins particuliers, AESH, vie scolaire, santé, direction : modules 1 et 2, puis 5 (répondre à un besoin particulier), 6 (les planches de pictogrammes), 8 (travailler en équipe autour d’un élève), et enfin 7. Comptez environ 1 h 40.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Les parcours se croisent. Un professeur qui accueille un élève à besoins particuliers gagnera à suivre aussi les modules 5 et 8 ; une AESH qui prépare un texte avec le professeur, le module 4. Pour vous repérer, partez de ce que vous avez sous la main — ce sont les quatre familles de la page Cas d’usage.",
    },
    {
      type: "tableau",
      entetes: ["Vous partez…", "Le module du tutoriel"],
      lignes: [
        [
          "d’une séance, d’une consigne ou d’une évaluation",
          "3 — Concevoir, différencier, évaluer une séance",
        ],
        [
          "d’un support existant qu’il faut rendre accessible",
          "4 — Rendre un texte ou une activité lisible",
        ],
        [
          "de ce que vous observez chez un élève, jamais d’un diagnostic",
          "5 — Répondre à un besoin particulier",
        ],
        [
          "d’un élève qui n’a pas la parole, ou pour qui l’imprévu est un obstacle",
          "6 — Communiquer autrement : les planches de pictogrammes",
        ],
      ],
    },
    {
      type: "liens",
      titre: "Pour tout le monde",
      liens: [
        {
          libelle: "Module 1 — Prendre en main l’outil",
          href: "/formations/inclusia/prendre-en-main",
          description:
            "Les quatre étapes du guide, les vingt modules, lire les instructions, choisir son IA.",
        },
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description: "Obligatoire avant tout essai sur un vrai élève.",
        },
        {
          libelle: "Module 7 — Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description:
            "Lire le brouillon, le vérifier point par point, le télécharger.",
        },
      ],
    },
    {
      type: "liens",
      titre: "Parcours professeur",
      liens: [
        {
          libelle: "Module 3 — Concevoir, différencier, évaluer une séance",
          href: "/formations/inclusia/concevoir-une-seance",
          description:
            "Conception CUA, Analyse CUA, Différenciation, Expliciter une tâche, Concevoir un QCM.",
        },
        {
          libelle: "Module 4 — Rendre un texte ou une activité lisible",
          href: "/formations/inclusia/rendre-un-texte-lisible",
          description: "FALC, Aide à la lecture, Allophone.",
        },
      ],
    },
    {
      type: "liens",
      titre: "Parcours équipe inclusive",
      liens: [
        {
          libelle: "Module 5 — Répondre à un besoin particulier",
          href: "/formations/inclusia/repondre-a-un-besoin",
          description:
            "Les huit modules qui partent de ce que vous observez chez un élève.",
        },
        {
          libelle: "Module 6 — Communiquer autrement",
          href: "/formations/inclusia/communiquer-autrement",
          description:
            "CAA, Tableau de communication, Séquentiel illustré, Scénario social.",
        },
        {
          libelle: "Module 8 — Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description:
            "Qui observe, qui relit, qui valide : la démarche d’équipe pas à pas.",
        },
      ],
    },

    { type: "titre", texte: "Les pages d’Inclus’IA à garder sous la main" },
    {
      type: "liens",
      liens: [
        {
          libelle: "Inclus’IA — page d’accueil",
          href: "https://inclusia.forge.apps.education.fr/",
          description:
            "C’est là que vous choisissez un module, selon votre besoin.",
        },
        {
          libelle: "Démarche",
          href: "https://inclusia.forge.apps.education.fr/demarche/",
          description:
            "Pourquoi le site existe, la chaîne en cinq étapes, les quatre principes, ce que le site n’est pas.",
        },
        {
          libelle: "Guide d’utilisation",
          href: "https://inclusia.forge.apps.education.fr/guide/",
          description:
            "Le mode d’emploi en quatre étapes, les conseils, la protection des données, la liste des modules.",
        },
        {
          libelle: "Cas d’usage",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description:
            "Un exemple avant/après pour chacun des vingt modules — rédigé pour montrer la démarche, pas une capture de génération.",
        },
      ],
    },

    { type: "titre", texte: "À vous : votre point de départ" },
    {
      type: "exercice",
      id: "inclusia-m0-point-de-depart",
      titre: "Votre point de départ",
      consigne:
        "Avant d’ouvrir un formulaire, posez votre situation. Parcourez d’abord la page Cas d’usage, puis notez votre rôle, une situation réelle décrite sans nom et le support que vous aimeriez adapter. Vous vous en servirez au module 1.",
      duree: "4 min",
      etapes: [
        "Ouvrez la page Cas d’usage d’Inclus’IA.",
        "Parcourez les quatre familles et leurs vingt exemples, chacun avec un avant et un après.",
        "Repérez l’exemple le plus proche d’une situation que vous vivez en ce moment.",
        "Revenez ici et décrivez votre propre situation — sans nom, sans diagnostic.",
      ],
      champs: [
        {
          id: "role",
          type: "choix",
          libelle: "Votre rôle",
          options: [
            "Professeur — maternelle ou élémentaire",
            "Professeur — collège",
            "Professeur — lycée",
            "Coordination, suivi des élèves à besoins particuliers",
            "AESH",
            "Vie scolaire",
            "Santé — infirmerie, psychologue",
            "Direction",
          ],
        },
        {
          id: "situation",
          type: "texte-long",
          libelle: "Une situation réelle, décrite sans nom",
          aide:
            "Le niveau, la discipline, ce qui bloque, ce que vous observez — « un élève qui… », jamais un nom ni un diagnostic. Vos réponses restent dans votre navigateur, mais prenez dès maintenant le réflexe : aucun nom d’élève, ici non plus.",
          lignes: 4,
        },
        {
          id: "support",
          type: "texte",
          libelle: "Le support que vous voudriez adapter",
          aide:
            "Une consigne, un texte, une séance, une évaluation, une routine… Un support de cours, jamais une copie ou un document de suivi d’élève.",
        },
        {
          id: "exemple",
          type: "texte",
          libelle: "L’exemple de la page Cas d’usage le plus proche",
          aide: "Son numéro ou son titre.",
          facultatif: true,
        },
      ],
      retour: {
        titre: "Relisez votre situation",
        texte:
          "Vous venez de faire l’étape 1 de la chaîne : décrire. Avant de la saisir dans Inclus’IA, relisez-la avec ces trois questions, puis retenez votre parcours.",
        points: [
          "Un nom, un prénom, un détail qui permettrait de reconnaître l’élève ? Retirez-le : la règle d’or est de décrire les difficultés observées sans nommer ni catégoriser.",
          "Une étiquette ou un diagnostic ? Remplacez-le par ce que vous voyez. Le guide donne l’exemple : « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ».",
          "Assez de contexte ? Le guide conseille d’indiquer la matière, le niveau et l’objectif, puis vos contraintes réelles : pas de tablettes, salle fixe, temps limité.",
          "Votre parcours : professeur, modules 1 et 2, puis 3 ou 4 selon votre support, puis 7 ; équipe inclusive, modules 1, 2, 5, 6 et 8, puis 7.",
        ],
      },
      suite: {
        href: "/formations/inclusia/prendre-en-main",
        libelle: "Module 1 — Prendre en main l’outil",
      },
    },
  ],
};
