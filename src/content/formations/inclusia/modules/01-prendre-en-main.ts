import type { Module } from "@/content/types";

/**
 * Module 1 — Prendre en main l’outil (15 minutes).
 *
 * Les quatre étapes du mode d’emploi, les vingt modules en quatre familles,
 * la tuile Planification M2PA, la lecture des instructions générées, l’IA qui
 * répond et la marche à suivre quand l’IA intégrée ne répond pas.
 * Tiré des pages « Guide d’utilisation », « Démarche », « Cas d’usage » et
 * « Bibliothèque d’instructions » d’Inclus’IA, telles qu’en ligne le
 * 24 septembre 2026. La protection des données (module 2) et la relecture
 * (module 7) ne sont qu’annoncées ici.
 */
export const prendreEnMain: Module = {
  slug: "prendre-en-main",
  numero: 1,
  titre: "Prendre en main l’outil",
  sousTitre:
    "Les quatre étapes du guide, les vingt modules, lire les instructions générées, choisir l’IA qui répond",
  duree: 15,
  objectif:
    "Ouvrir un module d’Inclus’IA, le remplir avec l’exemple, repérer les cinq blocs des instructions générées et obtenir une réponse — de l’IA intégrée ou, à défaut, de Copilot Chat avec le compte du lycée.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "Ce module s’adresse à tout le monde : professeurs comme personnels de l’équipe inclusive. Vous y faites le tour de l’outil, puis un premier essai complet — sans rien écrire de personnel, puisque l’exemple pré-rempli suffit. Tout ce qui est dit ici de l’outil vient de ses propres pages : le guide d’utilisation, la démarche, les cas d’usage et la bibliothèque d’instructions.",
    },

    { type: "titre", texte: "Le mode d’emploi en quatre étapes" },
    {
      type: "paragraphe",
      texte:
        "Le guide d’utilisation résume l’usage de l’outil en quatre étapes. La page Démarche donne l’ordre de grandeur : cinq minutes pour le formulaire, puis quelques minutes pour relire la proposition de l’IA et l’adapter.",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Choisir un module",
          texte:
            "Sur la page d’accueil, choisissez la tuile qui correspond à votre besoin : adapter un texte, différencier une consigne, concevoir une séance CUA… Si vous hésitez, la page Cas d’usage montre un exemple concret pour chacun des vingt modules.",
        },
        {
          titre: "Remplir le formulaire",
          texte:
            "Décrivez votre situation : la discipline, le niveau, l’objectif et, selon le module, le support, le profil de la classe ou ce que vous observez. Plus vous êtes précis, meilleur sera le résultat. Puis générez les instructions — raccourci Ctrl+Entrée.",
        },
        {
          titre: "Vérifier les instructions",
          texte:
            "Les instructions assemblées à partir de vos réponses s’affichent en clair. Vous pouvez les copier en un clic pour l’IA de votre choix, ou les envoyer directement à l’IA souveraine intégrée : ILaaS, avec Albert en secours.",
        },
        {
          titre: "Lire et adapter le résultat",
          texte:
            "L’IA propose un point de départ : relisez, ajustez, personnalisez pour votre classe. Le résultat est accompagné de points de vigilance qui disent où regarder en premier.",
        },
      ],
    },

    { type: "titre", texte: "Vingt modules en quatre familles" },
    {
      type: "paragraphe",
      texte:
        "La page d’accueil propose vingt modules. La page Cas d’usage les range en quatre familles, selon ce que vous avez sous la main. C’est la première question à vous poser : de quoi partez-vous ?",
    },
    {
      type: "tableau",
      entetes: ["Famille", "Modules", "Vous partez…", "Dans ce tutoriel"],
      lignes: [
        [
          "Concevoir, différencier, évaluer une séance",
          "Conception CUA · Différenciation · Analyse CUA · Expliciter une tâche · Concevoir un QCM",
          "d’une séance, d’une consigne ou d’une évaluation.",
          "Module 3",
        ],
        [
          "Rendre un texte ou une activité lisible",
          "FALC · Aide à la lecture · Allophone",
          "d’un support existant qu’il faut rendre accessible.",
          "Module 4",
        ],
        [
          "Répondre à un besoin particulier",
          "Adaptations TSA · Surdité · Déficience visuelle · Handicap moteur · Maths & dyscalculie · Dyslexie · Haut potentiel · Accompagnement",
          "de ce que vous observez chez un élève, jamais d’un diagnostic.",
          "Module 5",
        ],
        [
          "Communiquer autrement",
          "CAA · Tableau de communication · Séquentiel illustré · Scénario social",
          "d’un élève qui n’a pas la parole, ou pour qui l’imprévu est un obstacle.",
          "Module 6",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Les noms du tableau sont ceux de la liste des modules du guide. Dans la bibliothèque d’instructions, certains portent un nom plus long : « Adaptations pour un élève autiste » pour Adaptations TSA, « Support multi-modal pour élève allophone » pour Allophone, « Fiche d’accompagnement comportemental » pour Accompagnement.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Quatre modules rendent une planche, pas un texte",
      texte:
        "CAA, Tableau de communication, Séquentiel illustré et Scénario social rendent une planche d’images à imprimer. L’IA découpe et classe, elle ne dessine rien : les images viennent de la banque ARASAAC. Le module 6 leur est consacré.",
    },

    { type: "titre", texte: "La tuile Planification M2PA" },
    {
      type: "paragraphe",
      texte:
        "Le guide cite une tuile de plus, Planification M2PA — « Accessibilité d’une séquence ». Ce n’est pas l’un des vingt modules. La M2PA (Méthode de Planification Pédagogique de l’Accessibilité) propose une démarche structurée en trois niveaux pour anticiper les huit besoins partagés des élèves, différencier et adapter une séance complète — « au-delà de l’adaptation ponctuelle », dit la page Démarche. Elle est mise en œuvre sur un outil complémentaire dédié, vers lequel Inclus’IA redirige.",
    },
    {
      type: "liens",
      liens: [
        {
          libelle: "Planification M2PA",
          href: "https://m2pa.forge.apps.education.fr/",
          description:
            "L’outil complémentaire vers lequel renvoie la tuile : une démarche en trois niveaux pour une séance complète.",
        },
      ],
    },

    { type: "titre", texte: "Remplir le formulaire : ce qui vous aide" },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Un exemple pour chaque module",
          texte:
            "Le lien « Remplir avec un exemple », sous le formulaire, montre le fonctionnement sans rien avoir à écrire. C’est la meilleure façon de découvrir un module — et de voir le niveau de précision attendu.",
        },
        {
          titre: "Sauvegarde et raccourci",
          texte:
            "Le formulaire est sauvegardé automatiquement. Une fois qu’il est rempli, Ctrl+Entrée génère les instructions (« Générer les instructions »).",
        },
        {
          titre: "L’import de documents",
          texte:
            "Vous pouvez importer un document — PDF, Word, image… — plutôt que de tout recopier. Uniquement des supports de cours : jamais une copie, un bilan ou un plan d’accompagnement d’élève (module 2).",
        },
        {
          titre: "La dictée au micro",
          texte:
            "Vous pouvez dicter au lieu de taper. Le guide précise que la dictée est transcrite sans service tiers.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le guide ajoute trois conseils. Soyez précis : décrivez le contexte réel de votre classe, pas une formule vague comme « classe ordinaire ». Donnez du contexte : la matière, le niveau et l’objectif pédagogique — l’IA calibre sa réponse en fonction. Précisez vos contraintes : pas de tablettes ? salle fixe ? temps limité ? Ces informations aident l’IA à proposer des solutions réalistes.",
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Précis sur la situation, muet sur l’identité",
      texte:
        "La règle d’or du guide : « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant. » Décrire un besoin sans exposer un élève s’apprend : c’est l’objet du module 2, obligatoire pour tous.",
    },

    { type: "titre", texte: "Lire les instructions générées" },
    {
      type: "paragraphe",
      texte:
        "Les instructions sont le texte que vous allez envoyer à l’IA. Elles s’affichent en clair avant tout envoi : prenez l’habitude de les lire. Toutes suivent le même plan en cinq blocs — ici avec l’exemple de l’instruction Différenciation de consignes (v1.5.0).",
    },
    {
      type: "tableau",
      entetes: ["Bloc", "Ce qu’il contient", "Dans l’instruction Différenciation"],
      lignes: [
        [
          "RÔLE",
          "L’expert que l’IA doit incarner, et les travaux sur lesquels il s’appuie.",
          "« Enseignant expert en pédagogie différenciée, s’appuyant sur les recommandations du Cnesco/Ifé […] et les travaux de Tomlinson […] »",
        ],
        [
          "CONTEXTE",
          "Votre situation : les emplacements entre accolades reçoivent ce que vous écrivez dans le formulaire.",
          "« Consigne de {discipline}, niveau {niveau}. Objectif d’apprentissage : {objectif} »",
        ],
        [
          "TÂCHE",
          "Ce que l’IA doit produire, en quelques lignes.",
          "« Génère 3 versions de cette consigne (soutien / standard / expert) qui visent le même objectif d’apprentissage… »",
        ],
        [
          "CONTRAINTES",
          "Les règles expertes, énoncées en toutes lettres — souvent le bloc le plus long.",
          "« Les 3 versions doivent viser le MÊME objectif d’apprentissage — la différenciation porte sur le chemin, pas sur la destination »",
        ],
        [
          "FORMAT DE SORTIE",
          "La forme de la réponse : parties, tableaux et, pour la plupart des modules, une synthèse de trois gestes prioritaires.",
          "« 3 versions clairement séparées (Soutien / Standard / Expert) », puis la synthèse « 3 gestes prioritaires à mettre en place dès demain »",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Les instructions publiées sont des modèles : les mots entre accolades sont des emplacements, qui reçoivent ce que vous décrivez dans le formulaire. D’où l’importance de la précision — « une question vague produit une réponse vague », rappelle la page Démarche.",
    },
    {
      type: "paragraphe",
      texte:
        "Les instructions sont aussi écrites pour être auto-portantes : elles nomment leurs cadres de référence en toutes lettres, pour ne rien supposer connu de l’IA qui les reçoit. Vous y croiserez donc le cadre français de l’école inclusive — PAP, PPS, MDPH… Au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Une charte de rédaction commune",
      texte:
        "À chaque instruction s’ajoute la charte de rédaction accessible, commune à tous les modules : pas d’italique ni d’emoji, gras parcimonieux, titres hiérarchisés, aucune URL inventée. Dans la bibliothèque d’instructions, elle est visible dans l’onglet « Texte brut ».",
    },

    { type: "titre", texte: "La bibliothèque d’instructions" },
    {
      type: "paragraphe",
      texte:
        "Toutes les instructions sont consultables sans rien remplir, sur la page Bibliothèque d’instructions : vingt modèles, un par module, rangés par famille. La page le dit : « Rien n’est caché : chaque prompt est transparent, versionné et consultable ». Chaque carte se déplie et propose :",
    },
    {
      type: "liste",
      items: [
        "« Vue par blocs » ou « Texte brut » : la même instruction, lue bloc par bloc ou d’un seul tenant ;",
        "« Copier tout le prompt » : pour l’utiliser dans l’IA de votre choix ;",
        "« Ouvrir le module → » : pour passer au module correspondant ;",
        "un numéro de version — v1.6.0 pour Conception de séance CUA, v1.0.0 pour Concevoir un QCM, au 24 septembre 2026 : les instructions évoluent, et chacune affiche la sienne.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Pour qui développe un outil, les vingt prompts sont aussi publiés en JSON ouvert, sous licence CC BY-SA (lien « Réutiliser les prompts → »), et réutilisables par machine via l’API publique.",
    },

    { type: "titre", texte: "Un air de famille avec la méthode ACTIF" },
    {
      type: "paragraphe",
      texte:
        "Si vous avez utilisé le rédacteur de prompt du site, la structure vous est familière : la méthode ACTIF demande un Acteur, un Contexte, une Tâche, une Intention et un Format. Les instructions d’Inclus’IA suivent la même logique, avec en plus un bloc CONTRAINTES très fourni. La différence est de taille : ici, vous ne rédigez pas le prompt, vous décrivez votre situation. « Inclus’IA fait ce travail de cadrage à votre place », résume la page Démarche. Le rédacteur ACTIF reste utile pour toutes vos autres demandes à l’IA.",
    },
    {
      type: "liens",
      liens: [
        {
          libelle: "Bibliothèque d’instructions",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les vingt instructions complètes, bloc par bloc, avec leur numéro de version.",
        },
        {
          libelle: "Rédacteur de prompt — méthode ACTIF",
          href: "/outils/redacteur-de-prompt",
          description:
            "L’outil du site pour écrire vous-même une demande structurée à l’IA.",
        },
      ],
    },

    { type: "titre", texte: "Quelle IA vous répond" },
    {
      type: "paragraphe",
      texte:
        "Par défaut, les instructions partent vers ILaaS, une plateforme souveraine qui exécute des modèles ouverts dans les datacenters de l’enseignement supérieur. Albert, l’IA générative de l’État français, est en secours : la demande traverse une cascade de quatre modèles alternant les deux opérateurs, pour qu’une panne de l’un n’arrête pas le site. La page Démarche parle d’« un choix pensé pour les données scolaires » et indique, pour les traceurs tiers : « Aucun — tout est auto-hébergé ».",
    },
    {
      type: "paragraphe",
      texte:
        "C’est le choix par défaut, pas une obligation : « Vous choisissez votre IA » est l’un des quatre principes du site. Les instructions sont toujours copiables en un clic ; le guide cite ChatGPT, Mistral, Claude, Gemini « ou une autre ».",
    },

    { type: "titre", texte: "Si l’IA intégrée ne répond pas" },
    {
      type: "paragraphe",
      texte:
        "Au lycée, l’IA à utiliser est Copilot Chat, avec votre compte Microsoft 365 de l’établissement : c’est l’outil couvert par le lycée, cohérent avec la charte. Passez par elle chaque fois que vous sortez d’Inclus’IA — parce que l’IA intégrée ne répond pas, ou parce que vous préférez travailler ailleurs.",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Copier les instructions",
          texte:
            "Une fois générées, les instructions se copient en un clic. Elles sont rédigées pour rester compréhensibles par n’importe quelle IA.",
        },
        {
          titre: "Les coller dans Copilot Chat",
          texte:
            "Connectez-vous avec le compte Microsoft 365 du lycée, collez les instructions, envoyez.",
        },
        {
          titre: "Recoller la réponse dans Inclus’IA",
          texte:
            "Sous le panneau de résultat, « J’ai utilisé une autre IA — coller le résultat » : vous profitez de la mise en forme, de la lecture audio et des téléchargements. Le site ne s’attribue jamais ce travail : un résultat collé est identifié comme tel.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Hors du site, la même règle",
      texte:
        "Le guide le rappelle : avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie. La charte du lycée dit la même chose de tous les outils : aucune donnée personnelle dans un outil d’IA, quel que soit le compte. Relisez ce que vous collez.",
    },

    { type: "titre", texte: "Après la réponse : lire, écouter, télécharger" },
    {
      type: "liste",
      items: [
        "Lisez d’abord les points de vigilance : ils disent où regarder en premier.",
        "Écoutez le résultat, grâce à la lecture audio.",
        "Agrandissez le texte ou passez en mode lecture confortable.",
        "Téléchargez le résultat en .doc, .odt ou .pdf pour le retravailler.",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Un brouillon expert, jamais un document prêt",
      texte:
        "« À aucun moment le site ne produit un document prêt à donner à l’élève : ce qui sort de l’IA est un brouillon expert, à relire avant utilisation avec l’élève. » (guide). Comment relire, ajuster et exporter : c’est le module 7.",
    },

    { type: "titre", texte: "À vous : un premier essai" },
    {
      type: "liens",
      liens: [
        {
          libelle: "Ouvrir Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/",
          description: "La page d’accueil et ses tuiles.",
        },
        {
          libelle: "Cas d’usage",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description:
            "Un exemple avant / après pour chacun des vingt modules, si vous hésitez sur la tuile.",
        },
      ],
    },
    {
      type: "exercice",
      id: "inclusia-m1-premier-essai",
      titre: "Premier essai sans rien écrire",
      consigne:
        "Faites un tour complet d’un module avec son exemple pré-rempli, de la tuile jusqu’au résultat, puis notez ce que vous avez repéré.",
      duree: "8 min",
      etapes: [
        "Ouvrez Inclus’IA et, sur la page d’accueil, choisissez une tuile. Si vous hésitez : Différenciation pour un professeur, Accompagnement pour un membre de l’équipe inclusive.",
        "Sous le formulaire, cliquez sur « Remplir avec un exemple ». Lisez ce que l’exemple a mis dans les champs : c’est le niveau de précision attendu.",
        "Générez les instructions (Ctrl+Entrée).",
        "Lisez les instructions affichées et repérez les cinq blocs : RÔLE, CONTEXTE, TÂCHE, CONTRAINTES, FORMAT DE SORTIE. Choisissez une contrainte qui vous frappe.",
        "Envoyez les instructions à l’IA intégrée. Si elle ne répond pas : copiez-les, collez-les dans Copilot Chat avec le compte du lycée, puis recollez la réponse avec « J’ai utilisé une autre IA — coller le résultat ».",
        "Parcourez le résultat et ses points de vigilance, sans chercher encore à le corriger : la relecture viendra au module 7.",
      ],
      champs: [
        {
          id: "module",
          type: "texte",
          libelle: "Le module essayé",
          aide: "Le nom de la tuile, par exemple Différenciation.",
        },
        {
          id: "contrainte",
          type: "texte-long",
          lignes: 3,
          libelle: "Une contrainte repérée dans le bloc CONTRAINTES",
          aide: "Recopiez-la ou résumez-la en une phrase. Vos réponses restent dans votre navigateur : n’y écrivez jamais de nom d’élève.",
        },
        {
          id: "ia",
          type: "choix",
          libelle: "L’IA qui a répondu",
          options: [
            "L’IA intégrée à Inclus’IA",
            "Copilot Chat avec le compte du lycée, réponse recollée dans Inclus’IA",
            "Pas encore de réponse",
          ],
        },
        {
          id: "vigilance",
          type: "texte",
          libelle: "Un point de vigilance signalé avec le résultat",
          aide: "Facultatif : où le résultat vous dit-il de regarder en premier ?",
          facultatif: true,
        },
      ],
      retour: {
        titre: "Ce que vous devez avoir vu",
        texte:
          "Les instructions suivent toujours le même plan : RÔLE, CONTEXTE, TÂCHE, CONTRAINTES, FORMAT DE SORTIE. Le CONTEXTE reprend l’exemple pré-rempli ; les CONTRAINTES, souvent le bloc le plus long, portent les règles expertes que vous n’avez pas eu à écrire.",
        points: [
          "Des contraintes typiques : « Les 3 versions doivent viser le MÊME objectif d’apprentissage » (Différenciation) ; « Ne JAMAIS poser de diagnostic médical ni suggérer un trouble » (Accompagnement).",
          "Le FORMAT DE SORTIE annonce la forme du résultat et, pour la plupart des modules, une synthèse « 3 gestes prioritaires à mettre en place dès demain ».",
          "Le résultat arrive avec des points de vigilance qui disent où regarder en premier : c’est un brouillon expert, pas un document à distribuer.",
        ],
      },
      suite: {
        href: "/formations/inclusia/decrire-sans-exposer",
        libelle: "Module 2 — Décrire un besoin sans exposer un élève",
      },
    },

    { type: "titre", texte: "Vérifiez vos repères" },
    {
      type: "qcm",
      id: "inclusia-m1-qcm-reperes",
      consigne:
        "Six questions pour vérifier que vous savez vous servir de l’outil. Une seule bonne réponse par question.",
      questions: [
        {
          question:
            "Vous voulez voir comment fonctionne un module sans rien écrire. Que faites-vous ?",
          options: [
            "Vous cliquez sur « Remplir avec un exemple », sous le formulaire.",
            "Vous décrivez un élève réel pour voir ce que l’outil en fait.",
            "Vous copiez d’abord une instruction de la bibliothèque dans Copilot.",
          ],
          bonne: 0,
          explication:
            "Le guide : le lien « Remplir avec un exemple », sous le formulaire, montre le fonctionnement sans rien avoir à écrire. Chaque module a son exemple pré-rempli.",
        },
        {
          question:
            "Dans les instructions générées, quel bloc reprend la situation que vous avez décrite ?",
          options: ["RÔLE", "CONTEXTE", "CONTRAINTES", "FORMAT DE SORTIE"],
          bonne: 1,
          explication:
            "Le CONTEXTE contient les emplacements qui reçoivent vos réponses — pour Différenciation : « Consigne de {discipline}, niveau {niveau}. Objectif d’apprentissage : {objectif} ». Le RÔLE et les CONTRAINTES sont, pour l’essentiel, le cadrage expert rédigé par l’outil ; le FORMAT DE SORTIE décrit la forme de la réponse.",
        },
        {
          question:
            "L’IA intégrée ne répond pas. Quelle est la bonne démarche au lycée ?",
          options: [
            "Attendre : Inclus’IA ne fonctionne qu’avec son IA intégrée.",
            "Copier les instructions dans Copilot Chat (compte du lycée), puis recoller la réponse dans Inclus’IA.",
            "Réécrire la demande dans une IA grand public, avec le prénom de l’élève pour être précis.",
          ],
          bonne: 1,
          explication:
            "Les instructions sont copiables en un clic et utilisables dans l’IA de votre choix ; au lycée, c’est Copilot Chat avec le compte de l’établissement. La réponse se recolle avec « J’ai utilisé une autre IA — coller le résultat ». Et le guide le rappelle : avec une IA externe, aucune donnée personnelle identifiant un élève.",
        },
        {
          question:
            "Quand vous envoyez les instructions depuis le site, qui répond par défaut ?",
          options: [
            "ILaaS, avec Albert en secours.",
            "Copilot Chat, avec votre compte du lycée.",
            "Un seul modèle, sans relais en cas de panne.",
          ],
          bonne: 0,
          explication:
            "Page Démarche : ILaaS, qui exécute des modèles ouverts dans les datacenters de l’enseignement supérieur, répond par défaut ; Albert, l’IA générative de l’État français, est en secours. La demande traverse une cascade de quatre modèles alternant les deux opérateurs, pour qu’une panne de l’un n’arrête pas le site.",
        },
        {
          question:
            "Vous recollez dans Inclus’IA une réponse obtenue avec Copilot Chat. Comment le site la présente-t-il ?",
          options: [
            "Comme sa propre production.",
            "Comme un résultat collé, identifié comme tel.",
            "Il la refuse : seule l’IA intégrée est acceptée.",
          ],
          bonne: 1,
          explication:
            "Le guide : « Le site ne s’attribue jamais ce travail : un résultat collé est identifié comme tel. » Vous profitez quand même de la mise en forme, de la lecture audio et des téléchargements.",
        },
        {
          question: "À quoi sert la tuile Planification M2PA ?",
          options: [
            "C’est un vingt-et-unième module, qui génère des instructions comme les autres.",
            "Elle renvoie vers un outil complémentaire, pour planifier l’accessibilité d’une séance.",
            "C’est un raccourci vers la bibliothèque d’instructions du site.",
          ],
          bonne: 1,
          explication:
            "Page Démarche : la M2PA propose une démarche en trois niveaux pour anticiper les huit besoins partagés des élèves ; elle est mise en œuvre sur un outil complémentaire dédié, vers lequel Inclus’IA redirige.",
        },
      ],
    },

    { type: "titre", texte: "Pour continuer" },
    {
      type: "liens",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "La règle d’or, le garde-fou RGPD, passer de l’étiquette à ce qu’on observe. Obligatoire pour tous.",
        },
        {
          libelle: "Module 7 — Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description:
            "Ce qu’il faut vérifier avant de donner un document à un élève.",
        },
        {
          libelle: "Les vingt modules",
          href: "/formations/inclusia/ressources/carte-des-modules",
          description:
            "Chaque module en une ligne : pour quelle situation, ce que vous décrivez, ce que vous obtenez.",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Données personnelles, relecture, transparence : les règles qui valent pour tous les outils.",
        },
      ],
    },
  ],
};
