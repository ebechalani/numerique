import type { Module } from "@/content/types";

/**
 * Module 4 — Rendre un texte ou une activité lisible (20 minutes).
 *
 * Les trois modules de la famille « Rendre un texte ou une activité lisible »
 * d’Inclus’IA — FALC, Aide à la lecture, Allophone — et leur frontière avec le
 * module Dyslexie (traité au module 5 du tutoriel), telle que les instructions
 * la tracent elles-mêmes. Tiré des pages Guide, Démarche, Cas d’usage (cas 6,
 * 7, 8 et 14) et Bibliothèque d’instructions (FALC v1.4.0, Aide à la lecture
 * v1.5.0, Allophone v1.7.0, Dyslexie v1.0.0), en ligne le 24 septembre 2026.
 */
export const rendreUnTexteLisible: Module = {
  slug: "rendre-un-texte-lisible",
  numero: 4,
  titre: "Rendre un texte ou une activité lisible",
  sousTitre:
    "FALC, Aide à la lecture, Allophone : trois façons de rendre un support accessible — et où s’arrête chacune",
  duree: 20,
  objectif:
    "Choisir entre FALC, Aide à la lecture, Allophone et Dyslexie d’après l’obstacle que vous observez, adapter un de vos textes avec le module retenu et vérifier que le résultat respecte les règles de son instruction.",
  blocs: [
    { type: "titre", texte: "Partir d’un support existant" },
    {
      type: "paragraphe",
      texte:
        "Pour la famille « Rendre un texte ou une activité lisible », la page Cas d’usage le résume en une phrase : « Vous partez d’un support existant qu’il faut rendre accessible. » Un texte, une consigne, une activité que vous avez déjà. La page Démarche décrit trois gestes : reformuler un document au format FALC (Facile À Lire et à Comprendre), générer un lexique et un résumé paragraphe par paragraphe pour soutenir la lecture autonome, ou produire des supports multilingues pour un élève qui comprend très peu le français.",
    },

    { type: "titre", texte: "Quatre modules, quatre gestes différents" },
    {
      type: "paragraphe",
      texte:
        "Un quatrième module touche au texte : Dyslexie, présenté au module 5 de ce tutoriel. Les instructions tracent elles-mêmes la frontière entre eux. Celle du module Dyslexie le dit en toutes lettres :",
    },
    {
      type: "citation",
      texte:
        "Ce module n’est PAS un module de simplification : il ne réécrit pas le texte en langage simple (c’est le rôle du module FALC) et ne produit ni lexique ni résumé (c’est le rôle du module Aide à la lecture). Il agit sur l’ACCÈS à l’écrit — lisibilité, quantité, canal, outils, évaluation.",
      source:
        "Instruction « Lecture et écriture — élève dyslexique ou dysorthographique » (module Dyslexie), v1.0.0 — bloc TÂCHE",
    },
    {
      type: "tableau",
      entetes: ["Module", "Ce qu’il fait", "Quel obstacle", "Ce que vous obtenez"],
      lignes: [
        [
          "FALC",
          "Réécrit la forme du texte. Le contenu ne change pas.",
          "Le texte est trop complexe à lire et à comprendre. Selon l’instruction, le FALC s’adresse d’abord aux personnes en situation de handicap intellectuel ou de trouble cognitif, et sert plus largement tout élève en difficulté de lecture.",
          "Le document à remettre à l’élève, suivi d’un court glossaire ; des notes pour l’enseignant.",
        ],
        [
          "Aide à la lecture",
          "Ne touche pas au texte : ajoute des aides à côté.",
          "Le texte est au bon niveau, mais des élèves déchiffrent et perdent le fil, bloqués par des mots qu’on croyait connus.",
          "Un lexique dans l’ordre du texte et un résumé de 1 à 2 phrases par paragraphe.",
        ],
        [
          "Allophone",
          "Adapte l’activité et calibre la langue sur le niveau CECRL de l’élève.",
          "La langue française elle-même : un élève allophone nouvellement arrivé.",
          "L’activité adaptée, un lexique en tableau (bilingue si la langue maternelle est indiquée), des phrases modèles à trous — avec le même objectif disciplinaire.",
        ],
        [
          "Dyslexie (module 5)",
          "Ne réécrit pas, ne résume pas : agit sur l’accès — mise en forme, quantité, canal.",
          "Le coût de l’écrit — déchiffrage, orthographe : l’élève comprendrait le même texte lu à voix haute.",
          "Le support adapté prêt à imprimer, la mise en forme à appliquer, ce qui passe par un autre canal, les outils de compensation.",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Deux questions pour trancher",
      texte:
        "Où l’élève décroche-t-il ? S’il comprend le texte quand on le lui lit à voix haute, c’est l’accès à l’écrit qui lui coûte : le module Dyslexie agit sur cet accès. S’il déchiffre mais bute sur des mots, gardez le texte et ajoutez des aides : Aide à la lecture. Si les phrases elles-mêmes sont trop complexes pour lui, réécrivez la forme : FALC. Si c’est le français qui manque, calibrez la langue : Allophone. Que doit-il apprendre avec ce texte ? Si c’est la lecture de ce texte lui-même — analyse d’un extrait, étude de document —, le réécrire change ce qui est travaillé : gardez-le et ajoutez des aides. S’il n’est qu’un moyen d’accéder à la tâche — une consigne, une note d’information —, la réécriture en FALC peut convenir, à condition que la tâche demandée reste la même.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Un module n’est pas un diagnostic",
      texte:
        "Choisir Dyslexie ne dit rien de plus que ce que vous avez observé : l’instruction interdit elle-même de poser ou de confirmer un diagnostic et part uniquement des observables. Dans le formulaire, décrivez ce que vous voyez, jamais un mot comme « dyslexie » : le guide le range parmi les diagnostics médicaux qui font apparaître l’avertissement orange. Et si c’est voir le support lui-même qui coûte à l’élève, le module 5 présente aussi Déficience visuelle.",
    },
    {
      type: "liens",
      titre: "Si l’obstacle n’est pas le texte",
      liens: [
        {
          libelle: "Module 5 — Répondre à un besoin particulier",
          href: "/formations/inclusia/repondre-a-un-besoin",
          description:
            "Le module Dyslexie en détail : mise en forme, canal, quantité, outils de compensation, évaluation. Et Déficience visuelle.",
        },
        {
          libelle: "Module 3 — Concevoir, différencier, évaluer une séance",
          href: "/formations/inclusia/concevoir-une-seance",
          description:
            "La consigne est lisible mais les élèves ne voient pas ce qu’elle fait apprendre : Expliciter une tâche, ou trois niveaux avec Différenciation.",
        },
      ],
    },

    { type: "titre", texte: "FALC : simplifier la forme, jamais le contenu" },
    {
      type: "paragraphe",
      texte:
        "Vous fournissez le texte à adapter et vous décrivez la discipline, le niveau et le profil de l’élève. L’instruction s’appuie sur les règles européennes du FALC publiées par Inclusion Europe en 2009, et précise qu’elle ne les suppose pas connues de l’IA : elle les écrit une à une. Les principales :",
    },
    {
      type: "liste",
      items: [
        "Une seule idée par phrase, 15 mots au maximum (un repère) ; une phrase par ligne, sans la couper entre deux lignes ou deux pages — et, si c’est inévitable, à un endroit logique.",
        "La voix active et des tournures affirmatives, sans double négation ; on s’adresse directement au lecteur et on dit ce qu’il faut faire.",
        "Des mots simples, courants et concrets — et toujours le même mot pour la même chose, sans synonymes.",
        "Un mot difficile indispensable est expliqué dès sa première apparition, puis repris dans un petit glossaire à la fin du document élève.",
        "Ni métaphore, ni ironie, ni expression au sens figuré ; pas de sigle : s’il est indispensable, l’expression complète vient d’abord.",
        "Les nombres en chiffres (1, 2, 3), jamais en chiffres romains ; « beaucoup de personnes » plutôt qu’un pourcentage ; les dates écrites en entier.",
        "Des titres explicites, des listes à puces, l’information la plus importante d’abord.",
        "Aucune note de bas de page, aucun astérisque, aucun renvoi du type « voir page 12 ».",
        "Un exemple concret tiré du quotidien pour chaque idée difficile ; pour chaque idée importante, une illustration, une photo ou un pictogramme suggéré dans les notes, à placer à côté du texte qu’il illustre — à vous de le trouver.",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "La règle qui passe avant les autres",
      texte:
        "L’instruction interdit d’ajouter une information absente du texte source et de modifier un fait, un chiffre, une consigne ou une conclusion : « on simplifie la forme, jamais le contenu ». Elle demande aussi de lister les informations supprimées ou simplifiées, en justifiant ces choix.",
    },
    {
      type: "paragraphe",
      texte:
        "Le résultat arrive en deux parties nettement séparées. Partie 1, « Document à remettre à l’élève » : uniquement le texte en FALC, suivi d’un court glossaire — rien d’autre. Partie 2, « Notes pour l’enseignant » : le tableau des simplifications (original, version simplifiée, justification), les illustrations suggérées et leur place, les informations supprimées, la mise en forme recommandée, le rappel de la validation.",
    },
    {
      type: "paragraphe",
      texte:
        "La mise en forme, l’IA la recommande « sans pouvoir l’appliquer » elle-même, précise l’instruction : c’est à vous de l’appliquer au document téléchargé (.doc ou .odt), puis de la vérifier avant impression. Police sans empattement (Arial, Verdana ou Luciole), corps 14 au minimum et 16 conseillé, texte aligné à gauche et jamais justifié, interligne aéré, jamais de texte entièrement en majuscules, ni italique ni souligné, fond uni bien contrasté, aucune image derrière le texte.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Un projet de FALC, pas un FALC officiel",
      texte:
        "L’instruction demande de vous le rappeler : un document n’est officiellement FALC, au sens des règles européennes, que s’il a été relu et validé par des personnes concernées (personnes en situation de handicap intellectuel). La version produite est un projet à faire valider ; sans cette relecture, elle ne peut pas porter le logo européen FALC.",
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "L’exemple de la page Cas d’usage, relu",
      texte:
        "En dispositif ULIS (unité localisée pour l’inclusion scolaire) au collège, une consigne de SVT demande « un paragraphe argumenté expliquant les causes et les conséquences de la déforestation en zone tropicale ». La version FALC devient : « Lis le document. 1. Trouve 3 raisons pour lesquelles on coupe les arbres. 2. Trouve ce que la déforestation change pour la nature et les animaux. 3. Écris tes réponses. Tu peux faire des phrases courtes. » Est-ce encore le même travail ? Posez-vous cette question à chaque fois : l’instruction interdit de modifier une consigne, et vous seul savez ce que l’exercice évalue. Notez aussi que l’exemple tutoie l’élève, alors que l’instruction demande de le vouvoyer : choisissez un registre et harmonisez.",
    },

    { type: "titre", texte: "Aide à la lecture : le texte ne bouge pas" },
    {
      type: "paragraphe",
      texte:
        "Le bon choix quand le texte est au bon niveau et que vous ne voulez pas le réécrire. L’instruction interdit de modifier le texte source : lexique et résumés sont des aides complémentaires. Comme le souligne la page Cas d’usage, l’élève travaille ainsi sur le même document que le reste de la classe. Vous décrivez la discipline, le niveau, l’objectif de lecture, les profils des élèves et, si vous le souhaitez, une langue maternelle de référence pour le lexique. L’instruction parle d’aides « accessibles à tous les élèves » : elles peuvent servir à toute une classe.",
    },
    {
      type: "tableau",
      entetes: ["Niveau", "Quels mots", "Exemples de l’instruction", "Traité ?"],
      lignes: [
        ["1", "Mots du quotidien, déjà connus", "« chien », « manger »", "Non"],
        [
          "2",
          "Mots fréquents de la langue écrite, communs à toutes les disciplines et rarement enseignés",
          "« néanmoins », « établir », « en revanche », « répartir »",
          "Oui, en priorité : ce sont eux qui pénalisent le plus la compréhension",
        ],
        ["3", "Mots techniques de la discipline", "« photosynthèse », « hypoténuse »", "Oui : ils portent la notion"],
      ],
    },
    {
      type: "liste",
      items: [
        "Le lexique suit l’ordre d’apparition dans le texte. Pour chaque mot : sa nature, son niveau (2 ou 3), une définition accessible au niveau indiqué, un exemple dans une autre phrase que celle du texte.",
        "Une colonne de traduction seulement si une langue maternelle est indiquée, dans son système d’écriture. Sinon, aucune traduction : l’instruction interdit d’inventer une langue qui n’a pas été indiquée.",
        "Un résumé de 1 à 2 phrases par paragraphe, fidèle au texte, qui garde sa logique au lieu de l’aplatir — la stratégie du « résumé par parties » recommandée par le Cnesco (2016).",
        "En option, des questions de vérification de la compréhension, si vous les demandez.",
        "L’instruction demande que la partie à remettre aux élèves s’imprime sans rien avoir à en retirer ; vos notes sont à part.",
      ],
    },

    { type: "titre", texte: "Allophone : calibrer la langue, garder la discipline" },
    {
      type: "paragraphe",
      texte:
        "Pour un élève allophone nouvellement arrivé (EANA). Vous décrivez la discipline, le niveau de classe, le niveau de français de l’élève, sa langue maternelle et les types de supports souhaités. L’instruction s’appuie sur le CECRL (Cadre européen commun de référence pour les langues) et traduit le niveau de français choisi en consignes précises pour l’IA :",
    },
    {
      type: "tableau",
      entetes: ["Niveau indiqué", "CECRL", "Ce que l’instruction demande"],
      lignes: [
        [
          "« Ne parle pas français »",
          "A1.1",
          "Débutant complet : mots isolés, consignes de 3 à 5 mots, appui massif sur l’image, le geste et la langue maternelle.",
        ],
        [
          "« Quelques mots »",
          "A1",
          "Phrases très simples au présent, vocabulaire concret du quotidien et de la classe.",
        ],
        [
          "« Phrases simples »",
          "A2",
          "Phrases courtes reliées entre elles, situations familières, passé et futur simples.",
        ],
        [
          "« Conversations basiques »",
          "B1",
          "Textes simples et cohérents, explication d’un raisonnement, connecteurs logiques.",
        ],
      ],
    },
    {
      type: "liste",
      items: [
        "Le même objectif d’apprentissage que la classe : « l’élève apprend la discipline, pas seulement le français ».",
        "Des consignes courtes et explicites, avec des exemples concrets, et des étapes intermédiaires pour vérifier la compréhension.",
        "Un lexique disciplinaire en tableau : le mot en français, sa traduction si une langue maternelle est indiquée, un exemple en français.",
        "Des phrases modèles à trous, des suggestions de supports visuels à créer, un travail avec les pairs (tutorat, binôme, groupe).",
        "Les compétences de l’élève dans sa langue d’origine valorisées quand c’est pertinent.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage, un élève de 5e, niveau A2, langue maternelle arabe, rejoint une activité d’histoire sur l’expansion de l’Islam du VIIe au Xe siècle. La consigne devient : « Place 4 dates sur la frise. Puis écris 2 phrases : pourquoi l’Islam s’est étendu ? », avec une phrase modèle à trous (« L’Islam s’est étendu grâce à ……… et à ……… . ») et un lexique français-arabe — expansion, siècle, commerce — une ligne par mot-clé, avec un exemple en français.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Langue première arabe : le bon module, puis une relecture",
      texte:
        "Dans l’établissement, l’arabe est souvent la langue première des élèves. Le module Allophone est pensé pour un élève nouvellement arrivé qui comprend très peu le français : il calibre toute la langue de l’activité sur le niveau de français indiqué. Pour un élève scolarisé en français depuis longtemps qui bute sur le vocabulaire, gardez le texte de la classe : Aide à la lecture, avec si besoin la colonne de traduction en arabe. Dans les deux cas, faites relire toute traduction par un collègue qui maîtrise la langue avant de la donner. Et pour décrire l’élève, la langue et le niveau de français suffisent : rien sur son histoire, son pays ou sa date d’arrivée.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Le cadre cité par l’instruction",
      texte:
        "L’instruction Allophone cite le cadre français : la circulaire n° 2012-141 (scolarisation en classe ordinaire, accompagnement linguistique en UPE2A, unité pédagogique pour élèves allophones arrivants) et les ressources des CASNAV, centres académiques pour la scolarisation des élèves allophones nouvellement arrivés et des enfants issus de familles itinérantes. Au lycée, l’accueil et l’accompagnement d’un élève suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
    },

    { type: "titre", texte: "Ce que les trois modules ont en commun" },
    {
      type: "liste",
      items: [
        "Une partie à remettre à l’élève, nettement séparée des notes pour l’enseignant.",
        "Une synthèse « 3 gestes prioritaires à mettre en place dès demain », chacun avec le signe observable qui dira qu’on peut l’alléger — détaillée au module 7.",
        "Une description de l’élève ou de la classe faite de ce que vous observez, sans nom ni diagnostic : c’est la règle d’or du guide (voir le module 2).",
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Pour l’équipe inclusive",
      texte:
        "Selon l’organisation du lycée, un AESH ou la coordination peut préparer une Aide à la lecture ou un projet de FALC à partir du support du professeur. C’est le professeur de la classe qui valide ce qui est remis à l’élève : la page Démarche le rappelle, l’enseignant garde la main. Le module 8 détaille ce travail à plusieurs.",
    },

    { type: "titre", texte: "Quel module pour quelle situation ?" },
    {
      type: "qcm",
      id: "inclusia-m4-qcm-quel-module",
      consigne:
        "Pour chaque situation, choisissez le module qui correspond à l’obstacle décrit.",
      questions: [
        {
          question:
            "Un élève arrivé depuis peu, qui ne dit que quelques mots de français, rejoint votre cours d’histoire-géographie de 2de. L’activité demande une synthèse rédigée.",
          options: ["FALC", "Aide à la lecture", "Allophone", "Dyslexie (module 5)"],
          bonne: 2,
          explication:
            "Le module Allophone calibre la langue sur le niveau CECRL — « Quelques mots » correspond à A1 dans l’instruction — tout en conservant l’objectif disciplinaire : l’élève apprend la discipline, pas seulement le français.",
        },
        {
          question:
            "Un élève ne parvient pas à traiter seul une consigne de trois lignes qui enchaîne plusieurs tâches et des mots abstraits. Vous voulez une version réécrite, une idée par phrase.",
          options: ["FALC", "Aide à la lecture", "Allophone", "Dyslexie (module 5)"],
          bonne: 0,
          explication:
            "Réécrire la forme, c’est le rôle du FALC : une seule idée par phrase, 15 mots au maximum, un vocabulaire simple et concret. Même démarche que dans le cas 6 de la page Cas d’usage : une consigne de SVT en dispositif ULIS (unité localisée pour l’inclusion scolaire), réécrite en phrases courtes avec une liste numérotée. Vérifiez ensuite que la tâche demandée n’a pas changé.",
        },
        {
          question:
            "Un élève de 3e comprend parfaitement le texte quand on le lui lit. Seul devant la feuille, il passe son temps à décoder et n’atteint jamais les questions.",
          options: ["FALC", "Aide à la lecture", "Allophone", "Dyslexie (module 5)"],
          bonne: 3,
          explication:
            "L’obstacle est le déchiffrage. L’instruction Dyslexie le dit : dans ce cas, la bonne réponse n’est pas de simplifier le texte mais de contourner le déchiffrage — lecture à voix haute, version audio, lecture par un pair. Choisir ce module ne pose aucun diagnostic : l’instruction interdit elle-même d’en poser ou d’en confirmer, et part uniquement des observables. Ce module est présenté au module 5.",
        },
        {
          question:
            "En 1re, plusieurs élèves dont l’arabe est la langue première suivent bien le cours, mais butent dans un texte de SES sur des mots comme « établir » ou « répartir ». Vous gardez le texte tel quel pour toute la classe.",
          options: ["FALC", "Aide à la lecture", "Allophone", "Dyslexie (module 5)"],
          bonne: 1,
          explication:
            "Le texte reste intact, et le lexique d’Aide à la lecture traite en priorité ces mots de niveau 2, ceux qui pénalisent le plus la compréhension selon l’instruction ; un résumé par paragraphe s’y ajoute. Si vous indiquez l’arabe comme langue maternelle, le lexique reçoit une colonne de traduction, à faire relire. Allophone, lui, vise un élève nouvellement arrivé.",
        },
        {
          question:
            "La vie scolaire veut rendre lisible, pour un élève qui peine à lire, la note d’information d’une sortie : phrases courtes, aucun sigle, dates écrites en entier.",
          options: ["FALC", "Aide à la lecture", "Allophone", "Dyslexie (module 5)"],
          bonne: 0,
          explication:
            "Ce sont des règles du FALC écrites dans l’instruction : éviter les sigles ou écrire d’abord l’expression complète, écrire les dates en entier, une idée par phrase. Le FALC sert aussi, selon l’instruction, tout élève en difficulté de lecture. Avant de fournir la note, retirez-en les noms des accompagnateurs et les numéros de téléphone : aucune donnée personnelle dans un outil d’IA.",
        },
      ],
    },
    {
      type: "quiz",
      id: "inclusia-m4-quiz-regles",
      consigne: "Vrai ou faux ? Ce que les instructions imposent.",
      items: [
        {
          affirmation:
            "Pour rendre un texte plus clair, le module FALC peut ajouter une information utile qui ne figure pas dans le texte source.",
          reponse: false,
          explication:
            "L’instruction l’interdit : ne jamais ajouter une information absente du texte source, ni modifier un fait, un chiffre, une consigne ou une conclusion. On simplifie la forme, jamais le contenu.",
        },
        {
          affirmation:
            "Une fois que vous l’avez relu, le document produit par le module FALC peut porter le logo européen FALC.",
          reponse: false,
          explication:
            "Il faut une relecture et une validation par des personnes concernées (personnes en situation de handicap intellectuel). Sans elle, c’est un projet de FALC, qui ne peut pas porter le logo.",
        },
        {
          affirmation:
            "Si vous n’indiquez aucune langue maternelle, l’instruction Aide à la lecture interdit toute traduction.",
          reponse: true,
          explication:
            "Le lexique doit alors rester uniquement en français. L’instruction précise : « N’invente jamais une langue qui n’a pas été indiquée ». Si le résultat en contient une quand même, supprimez-la : c’est un point de la relecture (module 7).",
        },
        {
          affirmation:
            "Pour un élève qui ne parle pas encore français, le module Allophone peut laisser de côté l’objectif disciplinaire.",
          reponse: false,
          explication:
            "L’instruction demande de conserver l’objectif d’apprentissage disciplinaire de l’activité originale. Au niveau « Ne parle pas français », c’est la langue qui est calibrée — mots isolés, appui sur l’image, le geste et la langue maternelle —, pas l’objectif.",
        },
        {
          affirmation:
            "La police, le corps et l’interligne recommandés pour le FALC sont appliqués par l’IA elle-même.",
          reponse: false,
          explication:
            "L’instruction demande à l’IA de recommander une mise en forme accessible « sans pouvoir l’appliquer » elle-même : appliquez-la au document téléchargé, puis vérifiez-la avant de le donner.",
        },
      ],
    },

    { type: "titre", texte: "À vous : un vrai texte, le bon module" },
    {
      type: "exercice",
      id: "inclusia-m4-exercice-vrai-texte",
      titre: "Un vrai texte, le bon module",
      consigne:
        "Prenez un texte ou une activité que vous donnerez bientôt. Choisissez le module d’après l’obstacle observé, générez le résultat, puis vérifiez qu’il respecte les règles de son instruction. Pas de texte sous la main ? Faites d’abord un essai avec « Remplir avec un exemple », sous le formulaire, puis revenez-y avec un vrai support.",
      duree: "10 min",
      etapes: [
        "Choisissez un support de cours : un texte, une consigne, une activité. Jamais une copie d’élève, un bilan ou un plan d’accompagnement. Avant de le fournir, retirez-en tout nom d’élève, de famille ou de collègue, tout numéro de téléphone et toute adresse.",
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile FALC, Aide à la lecture ou Allophone. Si l’obstacle est l’accès à l’écrit lui-même, gardez ce support pour le module 5 et prenez-en un autre ici.",
        "Décrivez la discipline, le niveau et, selon le module, le profil de l’élève, l’objectif de lecture ou le niveau de français et la langue maternelle : des observables, sans nom ni diagnostic. Donnez le texte à adapter, par exemple en important le document (PDF, Word, image…).",
        "Le garde-fou détecte les noms propres. Si l’avertissement orange s’affiche à cause des personnages ou des lieux du texte, il ne bloque pas l’envoi : vérifiez seulement qu’aucun élève, parent ou collègue n’y figure.",
        "Générez les instructions (Ctrl+Entrée) et lisez-les : la partie CONTRAINTES liste les règles que le résultat devra respecter.",
        "Envoyez-les à l’IA intégrée. Si elle ne répond pas, copiez-les dans Copilot Chat avec le compte Microsoft 365 du lycée, puis recollez la réponse avec « J’ai utilisé une autre IA — coller le résultat ».",
      ],
      champs: [
        {
          id: "support",
          type: "texte",
          libelle: "Le support choisi",
          aide: "Discipline, niveau, type de texte — ex. « 2de, SES, extrait de manuel ». Vos réponses restent dans votre navigateur : n’y écrivez jamais le nom d’un élève.",
        },
        {
          id: "module",
          type: "choix",
          libelle: "Le module retenu",
          options: ["FALC", "Aide à la lecture", "Allophone"],
        },
        {
          id: "obstacle",
          type: "texte-long",
          libelle: "L’obstacle observé qui justifie ce choix",
          aide: "Ce que fait l’élève ou le groupe devant le texte, pas une étiquette. Aucun nom.",
          lignes: 3,
        },
        {
          id: "verification",
          type: "texte-long",
          libelle: "Deux règles de l’instruction vérifiées dans le résultat — respectées ou non",
          aide: "Ex. FALC : rien d’ajouté au texte source. Aide à la lecture : aucune réécriture du texte, lexique dans l’ordre du texte.",
          lignes: 4,
        },
      ],
      retour: {
        titre: "Ce que vous devez retrouver dans le résultat",
        texte:
          "Chaque module a ses règles, écrites dans son instruction. Si le résultat ne les respecte pas, ajustez votre description et recommencez : le guide invite à itérer.",
        points: [
          "FALC : le document à remettre à l’élève et son glossaire, puis les notes pour l’enseignant ; aucun fait, chiffre ou consigne modifié ; la liste des informations supprimées ; le rappel de la validation par des personnes concernées.",
          "Aide à la lecture : aucune réécriture du texte, seulement des aides à côté ; un lexique dans l’ordre du texte, avec le niveau 2 ou 3 de chaque mot ; une colonne de traduction seulement si vous avez indiqué une langue ; un résumé de 1 à 2 phrases par paragraphe.",
          "Allophone : des consignes calibrées sur le niveau de français indiqué ; le lexique en tableau avec un exemple en français ; des phrases modèles à trous ; le même objectif disciplinaire que la classe.",
          "Pour les trois : une partie élève imprimable sans rien retirer et les « 3 gestes prioritaires » dans les notes pour l’enseignant. S’il y a une traduction (Aide à la lecture, Allophone), prévoyez sa relecture par un collègue qui maîtrise la langue.",
          "Quel que soit le module : définitions, résumés et faits sont justes, et l’activité vise toujours le même objectif — c’est un brouillon à relire (module 7).",
        ],
      },
      suite: {
        href: "/formations/inclusia/repondre-a-un-besoin",
        libelle: "Module 5 — Répondre à un besoin particulier",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description: "Écrire le profil d’un élève en observables, sans nom ni diagnostic.",
        },
        {
          libelle: "Module 7 — Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description:
            "La relecture avant de donner un document, les trois gestes prioritaires, les exports.",
        },
        {
          libelle: "Module 8 — Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description: "Qui prépare, qui relit, qui valide ce qui est remis à l’élève.",
        },
        {
          libelle: "Décrire sans étiqueter",
          href: "/formations/inclusia/ressources/observables",
          description:
            "Les sections Lecture et Langue française : quoi écrire dans le profil au lieu d’une étiquette.",
        },
        {
          libelle: "Glossaire",
          href: "/formations/inclusia/ressources/glossaire",
          description: "FALC, CECRL, EANA, UPE2A, CASNAV, ULIS…",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description: "Aucune donnée personnelle dans un outil d’IA, quel que soit le compte.",
        },
        {
          libelle: "Bibliothèque d’instructions d’Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les instructions en entier. Au 24 septembre 2026 : FALC v1.4.0, Aide à la lecture v1.5.0, Allophone v1.7.0.",
        },
        {
          libelle: "Cas d’usage d’Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description: "Les exemples avant / après des cas 6 à 8, illustratifs.",
        },
      ],
    },
  ],
};
