import type { Module } from "@/content/types";

/**
 * Module 5 — Répondre à un besoin particulier (25 minutes).
 *
 * Les huit modules d’Inclus’IA centrés sur un élève — Adaptations TSA, Surdité,
 * Déficience visuelle, Handicap moteur, Maths & dyscalculie, Dyslexie, Haut
 * potentiel, Accompagnement : ce qu’on y décrit, ce qu’on obtient, la règle
 * forte de chaque instruction. Tiré des pages Guide (liste des modules,
 * analyse d’image, garde-fou), Démarche (familles, « pas un outil de
 * diagnostic »), Cas d’usage (cas 9 à 16) et Bibliothèque d’instructions
 * (Adaptations TSA v1.4.0, Surdité v1.4.0, Déficience visuelle v1.3.0,
 * Handicap moteur v1.3.0, Maths & dyscalculie v1.3.0, Dyslexie v1.0.0, Haut
 * potentiel v1.4.0, Accompagnement v1.5.0), en ligne le 24 septembre 2026.
 */
export const repondreAUnBesoin: Module = {
  slug: "repondre-a-un-besoin",
  numero: 5,
  titre: "Répondre à un besoin particulier",
  sousTitre:
    "Huit modules centrés sur un élève ; de l’observable aux adaptations ; ce que chaque instruction s’interdit",
  duree: 25,
  objectif:
    "Choisir, parmi les huit modules centrés sur un élève, celui qui répond à l’obstacle observé, le remplir avec des observables plutôt qu’un diagnostic et vérifier que la fiche obtenue respecte la règle de son instruction.",
  blocs: [
    { type: "titre", texte: "Partir de ce que vous observez" },
    {
      type: "paragraphe",
      texte:
        "Huit modules d’Inclus’IA forment la famille « Répondre à un besoin particulier » : Adaptations TSA, Surdité, Déficience visuelle, Handicap moteur, Maths & dyscalculie, Dyslexie, Haut potentiel et Accompagnement. Ils servent quand vous avez un élève précis en tête : un élève qui perd le fil d’un cours dialogué, qui ne vient pas à bout d’un texte, qui ne démarre pas un problème, qui finit toujours en avance, ou dont le comportement bloque la classe.",
    },
    {
      type: "citation",
      texte:
        "Vous partez de ce que vous observez chez un élève, jamais d’un diagnostic.",
      source: "Page Cas d’usage d’Inclus’IA — famille « Répondre à un besoin particulier »",
    },
    {
      type: "paragraphe",
      texte:
        "La page Démarche le dit autrement : le site « aide à adapter à des besoins observés, pas à des troubles déclarés ». Les instructions suivent la même logique ; l’exemple Adaptations TSA de la page Cas d’usage la rend visible :",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "L’observable",
          texte:
            "Ce qui se voit et s’entend, dans quelle situation, à quelle fréquence. Dans l’exemple : reste assis quand la classe change d’activité.",
        },
        {
          titre: "Le besoin",
          texte: "Ce dont l’élève a besoin pour lever l’obstacle. Ici : anticiper.",
        },
        {
          titre: "Les adaptations",
          texte:
            "Deux ou trois adaptations concrètes, testables en classe. Ici : emploi du temps visuel affiché, minuteur visible, annonce « dans 5 minutes, on passe à… ».",
        },
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Choisir un module n’est pas écrire un diagnostic",
      texte:
        "Le nom d’un module désigne un type d’obstacle, pas une étiquette à poser sur l’élève. Même quand un trouble est connu, vous ne l’écrivez pas dans le formulaire : vous décrivez ce que vous observez — situation, fréquence, durée. Si vous tapez un diagnostic (autisme, dyslexie, TDAH…), le garde-fou affiche un avertissement orange ; il ne bloque pas l’envoi : c’est à vous de reformuler. Les instructions Adaptations TSA, Dyslexie et Accompagnement interdisent d’ailleurs à l’IA de poser ou de confirmer un diagnostic.",
    },
    {
      type: "liens",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "Étiquette, interprétation, observable : la règle d’or et le garde-fou RGPD en détail.",
        },
        {
          libelle: "Décrire sans étiqueter",
          href: "/formations/inclusia/ressources/observables",
          description:
            "Des formulations prêtes à l’emploi, domaine par domaine, avec le module utile.",
        },
      ],
    },

    { type: "titre", texte: "Ce que vous apportez" },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Des observables seulement",
          texte:
            "Adaptations TSA et Accompagnement partent de ce que vous avez relevé — observables rangés par domaine, ou comportements observés — et du contexte. Vous obtenez une fiche d’adaptations ou de stratégies.",
        },
        {
          titre: "Un support et l’obstacle visé",
          texte:
            "Surdité, Déficience visuelle, Handicap moteur, Maths & dyscalculie, Dyslexie et Haut potentiel partent de l’activité, du support ou de l’exercice que vous fournissez. Vous obtenez ce support rendu accessible — ou enrichi, pour Haut potentiel — et des notes pour vous.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Plus vous êtes précis, meilleur sera le résultat, rappelle le guide. Les instructions de cette famille demandent des propositions réalistes au regard des ressources de la classe : dites ce dont vous disposez vraiment — ordinateur, logiciel, présence d’une AESH, temps. Une observation faite à plusieurs, avec l’AESH ou la coordination, aide à décrire juste.",
    },

    { type: "titre", texte: "Les huit modules en un tableau" },
    {
      type: "paragraphe",
      texte:
        "« Vous décrivez » reprend le rôle des champs cités dans le CONTEXTE de chaque instruction ; « Vous obtenez » résume son FORMAT DE SORTIE ; la dernière colonne donne la règle que l’instruction impose à l’IA.",
    },
    {
      type: "tableau",
      entetes: ["Module", "Vous décrivez", "Vous obtenez", "La règle de l’instruction"],
      lignes: [
        [
          "Adaptations TSA",
          "Le niveau ; les observables relevés en classe, rangés par domaine de fonctionnement ; le contexte de mise en œuvre.",
          "Une fiche par domaine : observables, besoins, adaptations en puces ; un rappel des partenaires à mobiliser.",
          "Ne jamais poser ni confirmer de diagnostic. Pour chaque observable, un besoin et 2 à 3 adaptations testables en classe.",
        ],
        [
          "Surdité",
          "La discipline, le niveau, le mode de communication de l’élève (bilingue LSF, oraliste avec LPC, appui écrit + visuel), les difficultés visées, les supports souhaités.",
          "Des consignes écrites ou visuelles, un lexique-clé illustré en tableau, la liste des supports à préparer à l’avance, l’aménagement des échanges collectifs.",
          "Jamais de double tâche sensorielle simultanée ; les supports écrits sont fournis à l’avance.",
        ],
        [
          "Déficience visuelle",
          "La discipline, le niveau, le type de déficience, la nature du support, les adaptations souhaitées — et, si besoin, l’image déposée.",
          "Le support linéarisé, tableaux mis à plat ; une description pédagogique numérotée de chaque élément visuel ; la mise en forme conseillée ; ce qui passe en braille ou en relief.",
          "Rendre accessible sans appauvrir le contenu ; aucune information portée par la seule couleur ; ne jamais décrire une image non reçue.",
        ],
        [
          "Handicap moteur",
          "La discipline, le niveau, les entraves motrices visées, les alternatives disponibles, les adaptations souhaitées.",
          "L’activité ré-outillée, à faible charge motrice ; des supports pré-formatés à imprimer ; des alternatives à l’écrit manuscrit et aux tracés ; des préconisations d’aménagement.",
          "Ne jamais évaluer le geste quand on veut évaluer le savoir.",
        ],
        [
          "Maths & dyscalculie",
          "Le niveau, l’obstacle principal, les leviers d’adaptation souhaités, le profil de l’élève — et la notion ou l’exercice.",
          "L’exercice en étapes numérotées, un énoncé à charge de lecture réduite, du matériel de manipulation, des aides-mémoire à imprimer, des amorces de verbalisation.",
          "Ne jamais abaisser l’exigence mathématique ; distinguer la charge de lecture de l’énoncé de la difficulté mathématique.",
        ],
        [
          "Dyslexie",
          "La discipline, le niveau, les obstacles visés, les leviers retenus, le profil de l’élève — et le support.",
          "Le support adapté, prêt à remettre, sans méta-commentaire ; la mise en forme à appliquer à l’impression ; ce qui passe par un autre canal ; les outils de compensation ; les aménagements d’évaluation.",
          "Retirer le coût du déchiffrage et de l’orthographe sans toucher au contenu ni à l’exigence.",
        ],
        [
          "Haut potentiel",
          "La discipline, le niveau, l’objectif de la classe, le profil observé, le type d’enrichissement (approfondissement, complexification, ouverture), les modalités retenues.",
          "Deux à trois tâches graduées rattachées à l’objectif de la classe, des questions ouvertes, une modalité de valorisation, ce que l’on a volontairement évité.",
          "Interdiction absolue de la « double ration » : on enrichit la profondeur, jamais le volume.",
        ],
        [
          "Accompagnement",
          "Le niveau, les comportements observés, le contexte (classe entière, petit groupe, individuel), les ressources disponibles.",
          "Une fiche de stratégies en trois paliers, des conseils de communication avec la famille et l’équipe, des indicateurs de suivi.",
          "Aucun diagnostic, aucun trouble suggéré ; on ne change de palier que sur des indicateurs observables.",
        ],
      ],
    },

    { type: "titre", texte: "Adapter selon un handicap ou un trouble" },
    {
      type: "paragraphe",
      texte:
        "La page Démarche regroupe cinq modules sous ce titre : partir des besoins observés chez un élève avec un trouble du spectre de l’autisme, une surdité, une déficience visuelle, une dyslexie ou un handicap moteur, et proposer consignes visuelles, lexique illustré, linéarisation braille, allègement du déchiffrage, alternatives à l’écrit. Les exemples ci-dessous résument ceux de la page Cas d’usage ; le site le précise, ils sont illustratifs : « ce ne sont pas des captures de génération ».",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Adaptations TSA",
          texte:
            "En 6e, un élève reste assis quand la classe change d’activité, ne commence pas seul et sort quand le bruit monte. La fiche traite chaque domaine — transitions, entrée dans la tâche, sensorialité. Par exemple : une consigne par ligne avec la première étape amorcée, un modèle de la production finie sous les yeux, un casque disponible sans avoir à le demander, un coin de repli identifié. L’enseignant ne cherche pas à « traiter l’autisme » : il cherche quoi faire lundi matin.",
        },
        {
          titre: "Surdité",
          texte:
            "En 5e, en SVT, un élève sourd, accompagné en LSF, reçoit l’information avec un décalage : les consignes sont lancées à la volée, parfois de dos, pendant une vidéo. Après : consignes écrites au tableau avant d’être dites, une par ligne ; lexique-clé illustré donné avant la séance ; transcription ou sous-titres vérifiés, prévus à l’avance ; un seul locuteur à la fois. L’obstacle est la double tâche : regarder l’interprète et lire le tableau en même temps est impossible.",
        },
        {
          titre: "Déficience visuelle",
          texte:
            "Au lycée, en SES, un graphique sur le taux de chômage de 2000 à 2020, indispensable à la leçon, reste illisible au lecteur d’écran. Après : une description pédagogique linéarisée — ce qu’il faut lire, puis ce qu’il faut retenir —, les valeurs clés en toutes lettres, prêtes pour le braille ou l’agrandissement, et aucune information laissée à la seule couleur.",
        },
        {
          titre: "Handicap moteur",
          texte:
            "En CE2, l’élève comprend les propriétés géométriques mais échoue aux évaluations : le tracé tremble, la règle glisse. Après : figure déjà amorcée à compléter, bonne figure à entourer parmi trois ou procédure dictée à l’adulte, logiciel de géométrie quand l’objectif est la propriété, temps majoré, aucune copie depuis le tableau. « L’exigence mathématique reste exactement la même — seule la voie d’accès change. »",
        },
        {
          titre: "Dyslexie",
          texte:
            "En 4e, l’élève comprend parfaitement le texte quand on le lui lit ; seul, le décodage lui prend tout son temps. Après : texte aligné à gauche, interligne 1,5, corps 14 minimum, lignes de 60 à 70 signes ; trois questions au lieu de cinq, de même exigence ; énoncé lu à voix haute ou fourni en audio ; orthographe non corrigée quand elle n’est pas l’objectif — et c’est dit à l’élève.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Déficience visuelle : l’image déposée",
      texte:
        "Ce module accepte le dépôt d’une image, que l’IA peut décrire (page Démarche ; le guide cite l’analyse d’image par l’IA parmi les fonctionnalités). L’instruction, elle, pose une limite : l’IA travaille à partir du texte et des descriptions de figures que vous fournissez et, si une figure n’est pas décrite, elle doit vous demander sa description plutôt que d’en inventer le contenu. Dans tous les cas, comparez la description à l’original : c’est elle que l’élève lira à la place de l’image. Déposez un support de cours, jamais une photo d’élève.",
    },
    {
      type: "citation",
      texte: "Ne jamais évaluer le geste quand on veut évaluer le savoir.",
      source: "Instruction du module Handicap moteur, v1.3.0 — bloc TÂCHE",
    },
    {
      type: "paragraphe",
      texte:
        "La page Cas d’usage le dit à sa façon : « On ne demande jamais à l’élève de payer deux fois ». Pour la fatigabilité, la même instruction demande de réduire la quantité d’écrit sans réduire l’exigence intellectuelle, et de ne pas faire copier depuis le tableau en même temps qu’on écoute ou qu’on réfléchit.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Dyslexie : pas de police miracle",
      texte:
        "L’instruction interdit de présenter une « police pour dys » comme un remède : les études contrôlées ne montrent pas d’avantage propre de ces polices sur une police sans empattement bien espacée. Ce qui aide le plus, c’est l’espacement et l’aération. Et quand le déchiffrage est l’obstacle, on le contourne — lecture à voix haute, audio, lecture par un pair — au lieu de simplifier le texte. Ce module ne réécrit pas le texte (c’est FALC) et ne produit ni lexique ni résumé (c’est Aide à la lecture) : voir le module 4.",
    },

    { type: "titre", texte: "Les maths, le haut potentiel, le comportement" },
    {
      type: "paragraphe",
      texte:
        "Trois modules complètent la famille : adapter une notion ou un exercice de mathématiques, enrichir la profondeur d’une activité pour un élève à haut potentiel — sans « double ration » —, ou générer une fiche de stratégies comportementales (page Démarche).",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Maths & dyscalculie",
          texte:
            "En 6e, l’élève sait ce qu’est une fraction, mais ne démarre pas devant un énoncé long où les nombres sont noyés dans le texte. Après : une information par ligne, des questions en étapes numérotées, des bandes fractionnées puis un schéma en barres avant tout calcul écrit, un aide-mémoire et des amorces « Je cherche… Je sais que… Donc je… ». Sans cette distinction, « on remédie au nombre alors que l’élève butait sur le texte ».",
        },
        {
          titre: "Haut potentiel",
          texte:
            "En 4e, l’élève a fini les dix exercices de calcul littéral ; on lui en donnait dix de plus. Après : une tâche ouverte — « Trouve deux expressions littérales différentes qui donnent toujours le même résultat, et prouve pourquoi. » —, un niveau cognitif relevé vers analyser et créer, une présentation de sa démonstration à la classe, valorisée à part de la note.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Haut potentiel : jamais de « double ration »",
      texte:
        "C’est une « interdiction absolue », dit l’instruction : ni davantage d’exercices du même type, ni simple accélération. On enrichit la profondeur, la complexité et l’ouverture, sur le même objectif que le reste de la classe : l’élève reste inclus, sans programme parallèle. Le résultat rappelle même ce que l’on a volontairement évité de faire.",
    },
    {
      type: "paragraphe",
      texte:
        "Accompagnement, dans l’exemple de la page Cas d’usage (CE1) : l’élève se lève, interrompt, refuse d’entrer dans le travail écrit ; l’équipe tourne entre sanction et négociation. Ce qui manque, « c’est une description assez précise pour pouvoir agir ». La fiche reformule en observable — « se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée » — puis organise les stratégies en trois paliers, selon le modèle de la réponse à l’intervention (RAI).",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Palier 1 — toute la classe",
          texte:
            "Prévention universelle : cadre clair, routines, étayage, renforcement des comportements attendus. Dans l’exemple : routine d’entrée en tâche affichée, première étape amorcée, comportement attendu renforcé dès qu’il apparaît.",
        },
        {
          titre: "Palier 2 — ciblé",
          texte:
            "Des interventions supplémentaires pour l’élève, en petit groupe ou en individuel, sans le sortir du palier 1. Dans l’exemple : temps de travail découpé avec un repère visuel, responsabilité confiée en fin de matinée, point individuel de deux minutes.",
        },
        {
          titre: "Palier 3 — intensif",
          texte:
            "Des interventions individualisées, plus fréquentes et plus longues, avec l’appui de partenaires spécialisés. Dans l’exemple, si les indicateurs ne bougent pas : RASED, psychologue de l’Éducation nationale, orientation vers le médecin scolaire.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "On ne change de palier que sur des indicateurs",
      texte:
        "On ne passe à un palier supérieur qu’après avoir constaté, sur des indicateurs observables, que le précédent ne suffit pas : la fiche propose ces indicateurs de suivi. Elle enseigne les comportements attendus — formulés positivement, montrés, pratiqués, renforcés — au lieu de punir les écarts, et ne suggère aucun trouble : le diagnostic relève des professionnels de santé.",
    },

    { type: "titre", texte: "Ce que ces huit résultats ont en commun" },
    {
      type: "liste",
      items: [
        "Aucun diagnostic : tout part de ce que vous décrivez.",
        "Le même objectif : les instructions Déficience visuelle, Handicap moteur, Maths & dyscalculie, Dyslexie et Haut potentiel le posent chacune à sa façon — on adapte le chemin d’accès, pas l’objectif d’apprentissage ni l’exigence.",
        "Pour six des huit modules, une séparation nette entre ce qui est à remettre à l’élève et les notes pour l’enseignant ; Adaptations TSA et Accompagnement rendent, eux, une fiche structurée d’adaptations ou de stratégies.",
        "Une synthèse « 3 gestes prioritaires à mettre en place dès demain » : pour chacun, le geste en une phrase, puis le signe observable qui indiquera qu’on peut commencer à l’alléger.",
        "Un rappel des partenaires avec qui se coordonner : famille, enseignant spécialisé, AESH, orthophoniste, ergothérapeute, psychologue de l’Éducation nationale…",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le module 7 montre comment lire ces trois gestes et relire le reste avant de donner quoi que ce soit à un élève ; le module 8, comment les partager en équipe.",
    },

    { type: "titre", texte: "Le cadre que citent les instructions" },
    {
      type: "paragraphe",
      texte:
        "Les instructions nomment leurs cadres en toutes lettres. Plusieurs citent la loi n° 2005-102 du 11 février 2005, qui garantit à tout élève en situation de handicap une scolarisation en milieu ordinaire avec les aménagements nécessaires, et la circulaire n° 2019-088 du 5 juin 2019 « Pour une école inclusive », qui organise une réponse graduée : aménagements ordinaires en classe, PPRE et PAP décidés par l’établissement, PPS notifié par la MDPH et ajusté chaque année par l’équipe de suivi de la scolarisation (ESS). Pour un trouble des apprentissages, elles évoquent le PAP, sans passage par la MDPH.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Et au lycée ?",
      texte:
        "Les instructions citent le cadre français — PAP, PPS, ESS, MDPH, enseignant référent. Au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente. Quand un résultat renvoie à l’ESS, à la MDPH ou au RASED — un dispositif du premier degré, précisent les instructions —, lisez-le comme un rappel : la question se traite avec l’équipe, pas dans l’outil.",
    },

    { type: "titre", texte: "Quel module pour quelle situation ?" },
    {
      type: "qcm",
      id: "inclusia-m5-qcm-orientation",
      consigne:
        "Pour chaque situation, choisissez le module le plus adapté. Toutes sont décrites comme il faut les saisir : par ce qu’on observe.",
      questions: [
        {
          question:
            "En 3e, en SVT, un élève a de bonnes idées à l’oral, mais ses copies sont très courtes et chargées d’erreurs d’orthographe ; le contrôle est noté aussi sur l’orthographe.",
          options: ["FALC", "Aide à la lecture", "Dyslexie", "Concevoir un QCM"],
          bonne: 2,
          explication:
            "Le module Dyslexie couvre la lecture et l’écriture. Son instruction dissocie l’orthographe de ce qui est évalué — quand elle n’est pas l’objectif, on ne la corrige ni ne la pénalise, et on le dit à l’élève — et propose des outils de compensation comme la dictée vocale. FALC et Aide à la lecture travaillent sur un texte à lire, pas sur ce que l’élève écrit.",
        },
        {
          question:
            "En seconde, en SES, la leçon repose sur un graphique. Un élève de la classe travaille avec un lecteur d’écran.",
          options: ["Surdité", "Déficience visuelle", "Expliciter une tâche", "Handicap moteur"],
          bonne: 1,
          explication:
            "C’est l’exemple de la page Cas d’usage : une description pédagogique linéarisée — ce qu’il faut comprendre, pas « image de… » —, sans information portée par la seule couleur. Le module accepte le dépôt de l’image.",
        },
        {
          question:
            "En 5e, en SVT, un élève suit le cours avec un interprète en LSF ; la séance prévue repose sur une vidéo commentée à l’oral.",
          options: ["Allophone", "FALC", "Surdité", "Séquentiel illustré"],
          bonne: 2,
          explication:
            "Surdité adapte selon le mode de communication — ici bilingue LSF — et interdit la double tâche : regarder l’interprète et lire en même temps est impossible. Sous-titres ou transcription sont listés à préparer à l’avance. Allophone vise un élève qui comprend très peu le français : ce n’est pas l’obstacle décrit.",
        },
        {
          question:
            "En 6e, en mathématiques, un élève connaît les propriétés du cercle, mais ses constructions au compas sont illisibles et il ne finit jamais à temps.",
          options: ["Maths & dyscalculie", "Handicap moteur", "Dyslexie", "Différenciation"],
          bonne: 1,
          explication:
            "L’élève maîtrise la notion : l’obstacle est le geste. « Ne jamais évaluer le geste quand on veut évaluer le savoir » : figures pré-tracées à compléter, réponses à faible charge motrice, logiciel de géométrie, temps majoré — l’exigence mathématique ne change pas.",
        },
        {
          question:
            "En 5e, un élève réussit les calculs de pourcentage posés seuls, mais devant un problème de quatre lignes il ne démarre pas : les nombres sont noyés dans le texte.",
          options: ["Aide à la lecture", "Maths & dyscalculie", "Haut potentiel", "Accompagnement"],
          bonne: 1,
          explication:
            "C’est la distinction centrale de l’instruction Maths & dyscalculie : séparer la charge de lecture de l’énoncé de la difficulté mathématique. Elle propose un énoncé redécoupé — une information par ligne, données mises en évidence — sans modifier les nombres ni l’objectif.",
        },
        {
          question:
            "En seconde, en histoire, un élève termine toujours l’étude de document bien avant les autres et décroche ; lui donner un second document du même type ne change rien.",
          options: ["Accompagnement", "Haut potentiel", "Aide à la lecture", "Adaptations TSA"],
          bonne: 1,
          explication:
            "Un second document du même type, c’est la « double ration » que l’instruction Haut potentiel interdit. Elle demande d’enrichir la profondeur — analyser, évaluer, créer — sur le même objectif que la classe, avec une valorisation distincte de la note.",
        },
        {
          question:
            "En 4e, un élève se lève et interrompt ses camarades pendant les travaux de groupe, environ cinq fois par heure, surtout après la récréation. L’équipe hésite entre sanction et négociation.",
          options: ["Accompagnement", "Adaptations TSA", "Scénario social", "Expliciter une tâche"],
          bonne: 0,
          explication:
            "Des comportements décrits en observables, une équipe qui hésite : c’est la situation type du module Accompagnement, qui organise des stratégies en trois paliers. Choisir Adaptations TSA reviendrait à supposer un trouble que rien ici ne décrit — l’instruction Accompagnement interdit d’ailleurs d’en suggérer un.",
        },
      ],
    },

    { type: "titre", texte: "Ce que les instructions s’interdisent" },
    {
      type: "quiz",
      id: "inclusia-m5-quiz-regles",
      consigne: "Vrai ou faux ? Chaque affirmation porte sur une règle écrite dans les instructions.",
      items: [
        {
          affirmation:
            "Choisir le module Dyslexie, c’est écrire dans l’outil que l’élève est dyslexique.",
          reponse: false,
          explication:
            "Le module désigne un type d’obstacle ; dans les champs, vous décrivez ce que vous observez. L’instruction part « uniquement des observables décrits par l’enseignant », et le site aide « à adapter à des besoins observés, pas à des troubles déclarés ».",
        },
        {
          affirmation:
            "Avec le module Haut potentiel, l’IA peut proposer une seconde série d’exercices du même type pour occuper l’élève.",
          reponse: false,
          explication:
            "C’est la « double ration », qui fait l’objet d’une interdiction absolue : on enrichit la profondeur, la complexité et l’ouverture, jamais le volume.",
        },
        {
          affirmation:
            "Si une figure du support n’est ni déposée ni décrite, l’instruction Déficience visuelle demande à l’IA de vous en réclamer la description plutôt que de l’inventer.",
          reponse: true,
          explication:
            "L’instruction le dit : demander explicitement la description plutôt que d’en inventer le contenu — « ne jamais décrire une image que tu n’as pas reçue ».",
        },
        {
          affirmation:
            "Dans la fiche Accompagnement, on applique d’emblée les stratégies du palier 3 quand la situation est tendue.",
          reponse: false,
          explication:
            "On ne passe à un palier supérieur qu’après avoir constaté, sur des indicateurs observables, que le palier précédent ne suffit pas.",
        },
        {
          affirmation:
            "Les résultats des huit modules comportent une synthèse de trois gestes prioritaires, chacun avec le signe observable qui dira qu’on peut commencer à l’alléger.",
          reponse: true,
          explication:
            "Les huit instructions demandent cette synthèse « 3 gestes prioritaires à mettre en place dès demain », placée dans les notes destinées à l’enseignant.",
        },
      ],
    },

    { type: "titre", texte: "Exercice : une fiche à partir de ce que vous observez" },
    {
      type: "exercice",
      id: "inclusia-m5-fiche-observable",
      titre: "Une fiche à partir de ce que vous observez",
      consigne:
        "Partez d’un élève réel que vous accompagnez — ou de l’exemple pré-rempli si vous découvrez l’outil. Décrivez ce que vous observez, générez la fiche, puis notez ce que vous en retenez.",
      duree: "10 min",
      etapes: [
        "Notez pour vous deux ou trois observables : ce que fait l’élève, dans quelle situation, à quelle fréquence. Retirez tout ce qui permettrait de le reconnaître.",
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile du module qui répond à l’obstacle observé. Pour voir d’abord un formulaire complet, cliquez sur le lien « Remplir avec un exemple », sous le formulaire.",
        "Remplissez le formulaire : vos observables, le niveau, la discipline, ce dont vous disposez vraiment. Si l’avertissement orange apparaît, reformulez.",
        "Générez les instructions (Ctrl+Entrée) et repérez, dans les CONTRAINTES, la règle forte du module.",
        "Envoyez-les à l’IA intégrée — ou copiez-les dans Copilot Chat avec votre compte du lycée, puis recollez la réponse avec « J’ai utilisé une autre IA — coller le résultat ».",
        "Dans le résultat, retrouvez la synthèse « 3 gestes prioritaires à mettre en place dès demain ».",
      ],
      champs: [
        {
          id: "module",
          type: "choix",
          libelle: "Le module choisi",
          options: [
            "Adaptations TSA",
            "Surdité",
            "Déficience visuelle",
            "Handicap moteur",
            "Maths & dyscalculie",
            "Dyslexie",
            "Haut potentiel",
            "Accompagnement",
          ],
        },
        {
          id: "observables",
          type: "texte-long",
          lignes: 4,
          libelle: "Les observables que vous avez saisis",
          aide: "Situation, fréquence, durée, ce qui suit. Jamais de nom, de prénom ni de diagnostic : vos réponses restent dans votre navigateur, mais la règle est la même partout.",
        },
        {
          id: "geste",
          type: "texte-long",
          lignes: 3,
          libelle: "Le geste que vous essaierez d’abord, et son signe d’allègement",
          aide: "Recopiez-le ou reformulez-le avec vos mots.",
        },
        {
          id: "ecart",
          type: "texte",
          libelle: "Une proposition que vous écartez ou modifiez, et pourquoi",
          aide: "Irréaliste dans votre classe, trop vague, hors objectif…",
          facultatif: true,
        },
      ],
      retour: {
        titre: "Ce que vous devez retrouver",
        texte:
          "Une fiche utile reprend vos observables sans les interpréter et propose des adaptations que vous pouvez essayer dès demain. Si elle pose une étiquette sur l’élève ou abaisse l’exigence, c’est à corriger avant tout usage.",
        points: [
          "Vos observables sont repris tels quels : aucun diagnostic, aucune intention prêtée à l’élève.",
          "Chaque adaptation est concrète, testable et réaliste avec les ressources que vous avez indiquées.",
          "L’objectif et l’exigence restent ceux de la classe : seule la voie d’accès change.",
          "Chacun des trois gestes prioritaires a son signe observable : c’est lui qui dira quand alléger.",
          "Les partenaires cités (ESS, MDPH, RASED…) se lisent comme un rappel : j’en parle à l’équipe.",
        ],
      },
      suite: {
        href: "/formations/inclusia/communiquer-autrement",
        libelle: "Module 6 — Communiquer autrement",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Module 4 — Rendre un texte ou une activité lisible",
          href: "/formations/inclusia/rendre-un-texte-lisible",
          description: "FALC, Aide à la lecture, Allophone : la frontière avec Dyslexie.",
        },
        {
          libelle: "Module 6 — Communiquer autrement",
          href: "/formations/inclusia/communiquer-autrement",
          description:
            "La CAA et les scénarios sociaux, que l’instruction Adaptations TSA invite à envisager.",
        },
        {
          libelle: "Module 7 — Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description: "Lire les trois gestes prioritaires et relire avant de donner.",
        },
        {
          libelle: "Module 8 — Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description: "Qui observe, qui relit, qui valide, avec quels partenaires.",
        },
        {
          libelle: "Les vingt modules",
          href: "/formations/inclusia/ressources/carte-des-modules",
          description: "Chaque module en une ligne, avec la version de son instruction.",
        },
        {
          libelle: "Cas d’usage — Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description: "Les exemples 9 à 16, avant et après.",
        },
        {
          libelle: "Bibliothèque d’instructions — Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description: "Les huit instructions complètes, lisibles sans rien remplir.",
        },
      ],
    },
  ],
};
