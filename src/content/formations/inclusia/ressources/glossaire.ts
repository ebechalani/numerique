import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Glossaire » du tutoriel Inclus’IA : les sigles et les mots de
 * l’école inclusive et de l’outil, par ordre alphabétique, avec pour chacun
 * l’endroit où on le croise dans Inclus’IA.
 *
 * Les définitions viennent d’abord des instructions de la page Bibliothèque
 * d’instructions, qui nomment leurs cadres en toutes lettres, puis des pages
 * Guide, Démarche et Cas d’usage (en ligne le 24 septembre 2026). Quand les
 * sources ne définissent pas un terme (AESH, PAI, PPRE, FLE, FLS, LPC, RGPD,
 * WCAG…), la définition est générale, sans rien prêter à l’outil.
 */
export const glossaire: SectionDeroule[] = [
  {
    slug: "mode-d-emploi",
    titre: "Comment lire ce glossaire",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Ce glossaire explique les sigles et les mots que vous croiserez dans Inclus’IA et dans les résultats qu’il produit. Les instructions de l’outil sont écrites pour être auto-portantes : elles nomment leurs cadres de référence en toutes lettres, pour ne rien supposer connu de l’IA qui les reçoit. Quand elles définissent un terme, c’est leur définition qui est reprise ici ; sinon, la définition est générale. La troisième colonne dit où vous rencontrez le terme.",
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Un cadre français, un lycée à l’étranger",
        texte:
          "PAP, PPS, PPRE, ESS, MDPH, RASED… : les instructions citent le cadre français de l’école inclusive. Au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
      },
      {
        type: "encadre",
        ton: "regle",
        titre: "Un mot de diagnostic se comprend, il ne se saisit pas",
        texte:
          "TSA, TDAH, dyslexie : ces mots désignent des diagnostics, qui relèvent des professionnels de santé. Dans les formulaires d’Inclus’IA, décrivez les difficultés observées sans nommer ni catégoriser l’élève — et jamais de nom, de prénom ni d’information qui permettrait de l’identifier.",
      },
    ],
  },

  {
    slug: "a-c",
    titre: "De A à C",
    blocs: [
      {
        type: "tableau",
        entetes: ["Terme", "Ce que c’est", "Où vous le croisez dans Inclus’IA"],
        lignes: [
          [
            "AESH",
            "Accompagnant d’élèves en situation de handicap : l’adulte qui aide un ou plusieurs élèves à suivre la vie de la classe et à accéder aux apprentissages, en lien avec le professeur.",
            "Parmi les partenaires du module Adaptations TSA et les ressources disponibles du module Accompagnement. Dans la page Cas d’usage, la note « Élève TSA — voir avec l’AESH » montre ce qui ne suffit pas.",
          ],
          [
            "Albert",
            "L’IA générative de l’État français.",
            "En secours d’ILaaS quand vous envoyez les instructions à l’IA intégrée : la demande traverse une cascade de quatre modèles qui alterne les deux opérateurs, pour qu’une panne de l’un n’arrête pas le site.",
          ],
          [
            "ARASAAC",
            "Banque de pictogrammes du Centre aragonais de la communication augmentative et alternative (Gouvernement d’Aragon, en Espagne), dessinés par Sergio Palao, sous licence CC BY-NC-SA : réutilisation permise en citant la source, sans usage commercial et dans les mêmes conditions.",
            "Les quatre modules à pictogrammes : l’IA découpe et classe les mots, les images viennent d’ARASAAC. Ce que la banque ne sait pas dessiner est signalé, la négation surtout.",
          ],
          [
            "Bloom (taxonomie de)",
            "Classement des opérations intellectuelles, du plus simple au plus exigeant. Version révisée (Anderson et Krathwohl) : mémoriser, comprendre, appliquer, analyser, évaluer, créer.",
            "Concevoir un QCM produit une question au niveau demandé, de mémoriser à analyser (pas de création, inadaptée au QCM). Haut potentiel vise les trois derniers niveaux plutôt que la restitution.",
          ],
          [
            "CAA",
            "Communication alternative et augmentative : l’ensemble des moyens qui remplacent ou complètent la parole pour une personne qui ne peut pas s’exprimer oralement.",
            "Le module CAA traduit une phrase en bande de pictogrammes, en style télégraphique ; le module Tableau de communication en relève aussi. Adaptations TSA l’envisage si c’est pertinent.",
          ],
          [
            "Caramel (H5P)",
            "H5P : un format libre d’activités interactives — quiz, textes à trous, glisser-déposer… — que l’on intègre à une plateforme en ligne. Caramel : un outil qui produit de telles activités.",
            "Le guide d’Inclus’IA annonce un export .json du QCM vers Caramel (H5P), pour mettre en ligne le QCM conçu avec le module Concevoir un QCM.",
          ],
          [
            "CASNAV",
            "Centres académiques pour la scolarisation des élèves allophones nouvellement arrivés et des enfants issus de familles itinérantes.",
            "Le module Allophone s’appuie sur leurs ressources, avec celles d’Éduscol, pour l’accueil des EANA.",
          ],
          [
            "CECRL",
            "Cadre européen commun de référence pour les langues (Conseil de l’Europe, 2001) : il décrit par niveaux, de A1 à C2, ce qu’on sait faire dans une langue.",
            "Le module Allophone calibre la langue sur le niveau de l’élève : « Ne parle pas français » = A1.1, « Quelques mots » = A1, « Phrases simples » = A2, « Conversations basiques » = B1.",
          ],
          [
            "Clé de Fitzgerald",
            "Code couleur employé en CAA depuis les travaux d’Edith Fitzgerald. Il range chaque mot selon sa fonction : personnes et pronoms, actions, choses, descriptions, formules sociales, mots de liaison.",
            "Chaque case des planches de pictogrammes est colorée selon cette clé, et la famille est toujours écrite à côté de la couleur : la couleur ne porte jamais seule l’information.",
          ],
          [
            "CUA",
            "Conception universelle de l’apprentissage (en anglais Universal Design for Learning) : une séance accessible à tous dès sa conception, pas adaptée après coup. Cadre du CAST (2018) : trois principes — Représentation, Action et expression, Engagement — en neuf directives.",
            "Les modules Conception CUA et Analyse CUA ; Aide à la lecture et Maths & dyscalculie en appliquent aussi les principes.",
          ],
        ],
      },
    ],
  },

  {
    slug: "d-i",
    titre: "De D à I",
    blocs: [
      {
        type: "tableau",
        entetes: ["Terme", "Ce que c’est", "Où vous le croisez dans Inclus’IA"],
        lignes: [
          [
            "Dys (troubles « dys »)",
            "Nom courant des troubles spécifiques des apprentissages : dyslexie et dysorthographie (langage écrit), dyscalculie (nombre), dyspraxie ou trouble développemental de la coordination (geste)… Leur diagnostic relève des professionnels de santé : médecin, orthophoniste, neuropsychologue.",
            "Les modules Dyslexie, Maths & dyscalculie et Handicap moteur. Dans les champs, on décrit ce qu’on observe : un nom de trouble comme « dyslexie » fait apparaître l’avertissement orange du garde-fou.",
          ],
          [
            "EANA",
            "Élève allophone nouvellement arrivé : il vient d’arriver et le français n’est pas sa langue première.",
            "Le module Allophone. Dans l’exemple de la page Cas d’usage : un élève de 5e, niveau A2 en français, langue maternelle arabe.",
          ],
          [
            "EHP",
            "Élève à haut potentiel — on dit aussi EIP, élève intellectuellement précoce.",
            "Le module Haut potentiel : enrichir la profondeur et la complexité, jamais la quantité — pas de « double ration ».",
          ],
          [
            "Enseignant référent",
            "Enseignant chargé du suivi des élèves handicapés d’un secteur ; il réunit l’équipe de suivi de la scolarisation.",
            "Parmi les partenaires à mobiliser que rappelle le module Adaptations TSA.",
          ],
          [
            "Enseignement explicite",
            "Démarche en étapes (Rosenshine) : annoncer ce qu’on va apprendre (objectivation), montrer (modelage), faire pratiquer avec rétroaction (pratique guidée), puis laisser pratiquer seul (pratique autonome).",
            "Conception CUA structure la séance selon ces étapes, Analyse CUA vérifie qu’elles y sont, Accompagnement enseigne de la même façon les comportements attendus.",
          ],
          [
            "ESS",
            "Équipe de suivi de la scolarisation : elle réunit chaque année la famille et les professionnels pour ajuster le PPS d’un élève.",
            "Parmi les partenaires rappelés par les modules Adaptations TSA, Surdité, Déficience visuelle et Handicap moteur.",
          ],
          [
            "FALC",
            "Facile à lire et à comprendre : une manière d’écrire définie par des règles européennes (Inclusion Europe, 2009) — une idée par phrase, 15 mots au maximum, mots courants, voix active. Il s’adresse d’abord aux personnes en situation de handicap intellectuel ou de trouble cognitif, et sert plus largement tout élève en difficulté de lecture.",
            "Le module FALC simplifie la forme, jamais le contenu. Un document n’est officiellement FALC qu’après relecture par des personnes concernées : sans elle, pas de logo européen.",
          ],
          [
            "FLE, FLS",
            "Français langue étrangère : le français appris comme une langue nouvelle. Français langue de scolarisation : le français dont l’élève a besoin pour apprendre les autres disciplines — comprendre une consigne, suivre un cours.",
            "Le rôle confié à l’IA par le module Allophone : un enseignant spécialisé en FLE et en FLS.",
          ],
          [
            "Gestes prioritaires",
            "La synthèse « 3 gestes prioritaires à mettre en place dès demain » : chaque geste en une phrase, puis le signe observable qui indiquera qu’on peut commencer à l’alléger.",
            "À la fin des résultats, dans les notes pour l’enseignant — sauf pour Concevoir un QCM, qui se termine par les règles de Leclercq suivies, et pour les quatre modules à pictogrammes, qui rendent une liste de mots.",
          ],
          [
            "ILaaS",
            "La plateforme d’IA souveraine proposée par défaut : elle exécute des modèles ouverts dans les datacenters de l’enseignement supérieur.",
            "Quand vous envoyez les instructions à l’IA intégrée, avec Albert en secours. Vous pouvez aussi les copier dans une autre IA — au lycée, Copilot Chat avec votre compte Microsoft 365 de l’établissement.",
          ],
          [
            "Implicite",
            "Ce qu’une tâche suppose acquis sans le dire : connaissances antérieures, vocabulaire de la consigne, codes scolaires (ce qu’on attend derrière « justifie » ou « analyse »), procédure, format de la réponse, critères de jugement.",
            "Le module Expliciter une tâche les repère et les lève pour toute la classe : expliciter n’est pas simplifier. La page Démarche compte « la part considérable des implicites et des allant-de-soi » parmi les obstacles ordinaires.",
          ],
          [
            "INSEI",
            "Institut national supérieur de formation et de recherche pour l’éducation inclusive.",
            "Ses ressources sont citées par les modules Surdité et Déficience visuelle.",
          ],
          [
            "Instructions (ou prompt)",
            "Le texte qu’Inclus’IA assemble à partir de votre formulaire, en cinq blocs : RÔLE, CONTEXTE, TÂCHE, CONTRAINTES, FORMAT DE SORTIE. S’y ajoute une charte de rédaction accessible commune à tous les modules : pas d’italique ni d’emoji, gras parcimonieux, titres hiérarchisés, aucune URL inventée.",
            "Affichées en clair à l’étape 2, copiables en un clic. Les vingt instructions, avec leur numéro de version, se lisent sans rien remplir dans la bibliothèque d’instructions.",
          ],
        ],
      },
    ],
  },

  {
    slug: "l-p",
    titre: "De L à P",
    blocs: [
      {
        type: "tableau",
        entetes: ["Terme", "Ce que c’est", "Où vous le croisez dans Inclus’IA"],
        lignes: [
          [
            "Leclercq (règles de)",
            "Vingt règles de rédaction des questions à choix multiple (D. Leclercq, 1986). Elles portent sur l’amorce (la question), les distracteurs (les mauvaises réponses), leur ordre et la mise en page.",
            "Le module Concevoir un QCM les vérifie au fil de la saisie, avant même d’appeler l’IA. Chaque distracteur doit correspondre à une erreur fréquente et plausible.",
          ],
          [
            "Lemme",
            "La forme du dictionnaire d’un mot : l’infinitif pour un verbe (« mange » → « manger »), le singulier pour un nom (« bonbons » → « bonbon »).",
            "Dans les modules à pictogrammes, l’IA ramène chaque mot à sa forme de base : ARASAAC n’indexe que les lemmes. Dans le module CAA, le mot écrit sous l’image reste celui de la phrase.",
          ],
          [
            "LPC",
            "Langue française parlée complétée : des gestes de la main, placés près du visage pendant qu’on parle, qui complètent la lecture sur les lèvres.",
            "Le module Surdité, pour un élève oraliste avec LPC : soigner les conditions de lecture labiale et de codage. Le codeur LPC fait partie des partenaires rappelés.",
          ],
          [
            "LSF",
            "Langue des signes française : une langue à part entière, reconnue par la loi de 2005.",
            "Le module Surdité, pour un élève bilingue (LSF, langue première) : accès visuel et écrit, interprète ou enseignant de LSF, lexique préparé à l’avance.",
          ],
          [
            "M2PA",
            "Méthode de planification pédagogique de l’accessibilité : une démarche en trois niveaux pour anticiper les huit besoins partagés des élèves, différencier et adapter une séance complète.",
            "La tuile Planification M2PA renvoie vers un outil complémentaire, m2pa.forge.apps.education.fr. Ce n’est pas l’un des vingt modules.",
          ],
          [
            "MDPH",
            "Maison départementale des personnes handicapées : en France, c’est elle qui notifie le PPS d’un élève.",
            "Dans le cadre que rappellent les modules centrés sur un élève : PPS notifié par la MDPH, PAP décidé sans passage par elle.",
          ],
          [
            "Observable",
            "Ce qui se voit et s’entend, décrit sans interpréter : la situation, le comportement, sa fréquence, sa durée, ce qui suit. « se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée » plutôt que « est agité ».",
            "Au cœur de la règle d’or et des modules centrés sur un élève (observable → besoin → adaptations). Chaque geste prioritaire est suivi du signe observable qui dira qu’on peut l’alléger.",
          ],
          [
            "PAI",
            "Projet d’accueil individualisé : il organise l’accueil d’un élève qui a un problème de santé durable (maladie chronique, allergie, intolérance alimentaire…) — traitement, régime, conduite à tenir en cas d’urgence. Il est établi à la demande de la famille, avec le médecin scolaire.",
            "Nulle part : les instructions ne le citent pas. À ne pas confondre avec le PAP. Son contenu relève de la santé et ne se saisit jamais dans l’outil.",
          ],
          [
            "PAP",
            "Plan d’accompagnement personnalisé : décidé par l’établissement pour un élève qui présente un trouble des apprentissages (dyslexie, dyspraxie…), sur avis du médecin scolaire, sans passage par la MDPH.",
            "Rappelé par les modules Dyslexie, Handicap moteur et Maths & dyscalculie. Le guide donne l’exemple d’une classe de CM1 de 25 élèves dont 3 avec PAP : une description plus utile que « classe ordinaire ».",
          ],
          [
            "PPRE",
            "Programme personnalisé de réussite éducative : un plan d’actions ciblées et limitées dans le temps, décidé par l’établissement pour un élève qui risque de ne pas atteindre les attendus, et présenté à la famille.",
            "Dans la réponse graduée aux besoins que rappellent les modules Analyse CUA, Adaptations TSA et Accompagnement.",
          ],
          [
            "PPS",
            "Projet personnalisé de scolarisation : il organise la scolarité d’un élève en situation de handicap. Notifié par la MDPH, il est ajusté chaque année par l’ESS.",
            "Rappelé notamment par les modules Adaptations TSA, Surdité, Déficience visuelle, Handicap moteur et Maths & dyscalculie, et dans la réponse graduée que citent Analyse CUA et Accompagnement.",
          ],
        ],
      },
    ],
  },

  {
    slug: "r-w",
    titre: "De R à W",
    blocs: [
      {
        type: "tableau",
        entetes: ["Terme", "Ce que c’est", "Où vous le croisez dans Inclus’IA"],
        lignes: [
          [
            "RAI",
            "Réponse à l’intervention : l’aide s’organise en trois paliers d’intensité croissante — palier 1 pour toute la classe, palier 2 ciblé (petit groupe ou individuel), palier 3 intensif avec des partenaires spécialisés. On ne monte d’un palier que si des indicateurs observables montrent que le précédent ne suffit pas.",
            "Le module Accompagnement construit sa fiche de stratégies selon ces trois paliers.",
          ],
          [
            "RASED",
            "Réseau d’aides spécialisées aux élèves en difficulté : dispositif du premier degré, donc de l’école, qui associe enseignants spécialisés et psychologue.",
            "Cité par les modules Maths & dyscalculie et Accompagnement, et au palier 3 de l’exemple Accompagnement de la page Cas d’usage.",
          ],
          [
            "RGAA",
            "Référentiel général d’amélioration de l’accessibilité : la déclinaison française des règles internationales WCAG 2.1 — contraste suffisant, texte de remplacement pour toute image porteuse d’information, rien porté par la seule couleur, contenu lisible dans l’ordre.",
            "Le module Déficience visuelle s’appuie sur ses critères.",
          ],
          [
            "RGPD",
            "Règlement général sur la protection des données : le règlement européen qui encadre la collecte et l’usage des données personnelles.",
            "Le garde-fou RGPD repère les noms propres, diagnostics médicaux, adresses, téléphones et e-mails, et affiche un avertissement orange. L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction.",
          ],
          [
            "Scénario social",
            "Un court récit à la première personne qui prépare un élève à une situation : ce qui va se passer, ce que les autres ressentent, ce qu’il pourra faire. Méthode de Carol Gray (Social Stories, 1991) : au moins deux phrases descriptives, de perspective ou d’affirmation pour une phrase directive.",
            "Le module Scénario social : 5 à 8 phrases illustrées, des formulations souples (« je peux essayer de… »), aucune promesse que tout ira bien.",
          ],
          [
            "Séquentiel",
            "Support visuel qui décompose une routine en étapes successives, une image par étape, dans l’ordre exact où elles se font.",
            "Le module Séquentiel illustré : 4 à 8 étapes à l’infinitif, affichées là où l’activité a lieu. C’est aussi l’une des trois mises en page à l’impression.",
          ],
          [
            "Socle commun",
            "Socle commun de connaissances, de compétences et de culture : le référentiel français des apprentissages de la scolarité obligatoire, du CP à la 3e. Il ne vaut ni en maternelle ni au lycée.",
            "Conception CUA et Différenciation rattachent l’objectif au référentiel du niveau indiqué. Au lycée, ce sont les compétences et capacités du programme : si un résultat cite le socle pour une classe de lycée, corrigez-le.",
          ],
          [
            "TDAH",
            "Trouble du déficit de l’attention avec ou sans hyperactivité : un diagnostic, qui relève des professionnels de santé.",
            "Le guide le donne en contre-exemple : « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ». Le module Accompagnement interdit à l’IA de suggérer un tel trouble.",
          ],
          [
            "TEACCH",
            "Approche de l’enseignement structuré, développée par Eric Schopler en Caroline du Nord : rendre visible ce qui est attendu, découper une tâche en étapes courtes et prévisibles, rendre l’élève peu à peu autonome.",
            "Le module Séquentiel illustré s’en inspire.",
          ],
          [
            "TSA",
            "Trouble du spectre de l’autisme : un diagnostic, qui relève des professionnels de santé.",
            "Il donne son nom au module Adaptations TSA, qui part pourtant des observables, jamais du diagnostic. Écrivez « un élève qui… » ; le mot « autisme » fait apparaître l’avertissement orange du garde-fou.",
          ],
          [
            "ULIS",
            "Unité localisée pour l’inclusion scolaire : dispositif d’un établissement ordinaire qui scolarise en petit groupe des élèves en situation de handicap.",
            "Le rôle confié à l’IA par le module Séquentiel illustré ; trois exemples de la page Cas d’usage (FALC, CAA, Séquentiel illustré).",
          ],
          [
            "UPE2A",
            "Unité pédagogique pour élèves allophones arrivants : un accompagnement linguistique, pendant que l’élève est inscrit dans une classe ordinaire correspondant à son âge.",
            "Le module Allophone, qui s’appuie sur la circulaire du 2 octobre 2012 sur la scolarisation des élèves allophones.",
          ],
          [
            "Vocabulaire noyau",
            "Une petite centaine de mots très fréquents — je, tu, veux, encore, fini, aller, aider, oui, non — qui couvrent l’essentiel des échanges quotidiens.",
            "Le module Tableau de communication commence toujours par eux, y compris « ça ne va pas », puis ajoute les mots de la situation : 12 à 20 mots en tout.",
          ],
          [
            "WCAG",
            "Règles internationales d’accessibilité des contenus web (Web Content Accessibility Guidelines), publiées par le W3C.",
            "Déficience visuelle en reprend les repères (contraste d’au moins 4,5:1) ; Dyslexie cite la règle 1.4.1 : ne jamais faire porter une information par la seule couleur.",
          ],
        ],
      },
    ],
  },

  {
    slug: "verifier",
    titre: "Vérifiez : les sigles qu’on confond",
    blocs: [
      {
        type: "qcm",
        id: "inclusia-r-glossaire-qcm-sigles",
        consigne:
          "Cinq descriptions tirées des sources d’Inclus’IA. Pour chacune, choisissez le terme qui correspond.",
        questions: [
          {
            question:
              "Un plan décidé par l’établissement pour un élève qui présente un trouble des apprentissages, sur avis du médecin scolaire, sans passage par la MDPH.",
            options: ["PPS", "PAP", "PAI", "PPRE"],
            bonne: 1,
            explication:
              "C’est le PAP, plan d’accompagnement personnalisé : c’est ainsi que le décrivent les instructions des modules Dyslexie, Handicap moteur et Maths & dyscalculie. Le PPS est notifié par la MDPH ; le PAI, lui, concerne la santé.",
          },
          {
            question:
              "L’équipe qui réunit chaque année la famille et les professionnels pour ajuster le projet personnalisé de scolarisation.",
            options: ["La MDPH", "Le RASED", "L’ESS", "Le CASNAV"],
            bonne: 2,
            explication:
              "L’ESS, équipe de suivi de la scolarisation : c’est la définition que donne l’instruction du module Surdité. La MDPH notifie le PPS, l’ESS en assure le suivi chaque année.",
          },
          {
            question:
              "Le cadre qui organise l’aide en trois paliers d’intensité croissante, dans le module Accompagnement.",
            options: ["CUA", "RAI", "M2PA", "TEACCH"],
            bonne: 1,
            explication:
              "RAI, réponse à l’intervention : palier 1 pour toute la classe, palier 2 ciblé, palier 3 intensif. L’instruction précise qu’on ne passe au palier supérieur que sur des indicateurs observables.",
          },
          {
            question:
              "L’IA générative de l’État français, en secours de la plateforme ILaaS.",
            options: ["Albert", "ARASAAC", "Copilot Chat", "INSEI"],
            bonne: 0,
            explication:
              "Albert, d’après la page Démarche : la demande traverse une cascade de quatre modèles alternant les deux opérateurs. Copilot Chat, avec le compte Microsoft 365 du lycée, est une autre IA, où vous collez vous-même les instructions copiées.",
          },
          {
            question:
              "Le référentiel qu’un résultat ne doit jamais citer pour une classe de lycée.",
            options: [
              "Le CECRL",
              "Le socle commun",
              "Le RGAA",
              "Les règles de Leclercq",
            ],
            bonne: 1,
            explication:
              "Le socle commun ne couvre que la scolarité obligatoire, du CP à la 3e : l’instruction de Conception CUA interdit de le citer à tout autre niveau. Au lycée, l’objectif se rattache aux compétences et capacités du programme de la discipline.",
          },
        ],
      },
      {
        type: "liens",
        titre: "Pour aller plus loin",
        liens: [
          {
            libelle: "Décrire sans étiqueter",
            href: "/formations/inclusia/ressources/observables",
            description:
              "Des formulations pour passer de l’étiquette à l’observable, domaine par domaine.",
          },
          {
            libelle: "Les vingt modules",
            href: "/formations/inclusia/ressources/carte-des-modules",
            description:
              "Chaque module en une ligne : pour quelle situation, ce que vous décrivez, ce que vous obtenez.",
          },
          {
            libelle: "Répondre à un besoin particulier",
            href: "/formations/inclusia/repondre-a-un-besoin",
            description:
              "Les huit modules centrés sur un élève, et le cadre que leurs instructions citent.",
          },
          {
            libelle: "Travailler en équipe autour d’un élève",
            href: "/formations/inclusia/travailler-en-equipe",
            description:
              "Qui fait quoi : professeur, coordination, AESH, vie scolaire, santé, direction.",
          },
          {
            libelle: "Bibliothèque d’instructions",
            href: "https://inclusia.forge.apps.education.fr/prompts/",
            description:
              "Les vingt instructions complètes, où chaque cadre de référence est nommé en toutes lettres.",
          },
        ],
      },
    ],
  },
];
