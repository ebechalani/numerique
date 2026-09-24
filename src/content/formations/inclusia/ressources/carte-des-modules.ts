import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Les vingt modules » — la carte des modules d’Inclus’IA, famille
 * par famille : pour quelle situation, ce que vous décrivez, ce que vous
 * obtenez, version de l’instruction ; puis ce que les instructions ont en
 * commun et la tuile Planification M2PA.
 *
 * Tirée de la Bibliothèque d’instructions (/prompts/ : parties CONTEXTE et
 * FORMAT DE SORTIE, numéros de version au 24 septembre 2026), du Guide
 * d’utilisation (/guide/ : noms des tuiles), de la page Cas d’usage
 * (/cas-usage/ : familles, situations) et de la page Démarche (/demarche/).
 */
export const carteDesModules: SectionDeroule[] = [
  {
    slug: "lire-la-carte",
    titre: "Lire cette carte",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Inclus’IA propose vingt modules, regroupés en quatre familles selon ce que vous avez sous la main : une séance à écrire, un texte à rendre lisible, un besoin particulier à couvrir, un élève qui n’a pas la parole. Chaque module a sa tuile sur la page d’accueil et son instruction, publiée dans la bibliothèque d’instructions.",
      },
      {
        type: "liste",
        items: [
          "Module : le nom de la tuile, tel que le donne le guide d’utilisation.",
          "Pour quelle situation : le cas typique, d’après les pages Cas d’usage et Démarche.",
          "Ce que vous décrivez : ce que le formulaire vous demande, d’après la partie CONTEXTE de l’instruction. Les libellés exacts des champs peuvent différer : on vous en donne le rôle.",
          "Ce que vous obtenez : ce que l’instruction demande à l’IA de rendre, d’après sa partie FORMAT DE SORTIE. Pour les quatre modules à pictogrammes, l’IA rend une liste structurée dont le site fait la planche (voir plus bas).",
          "Version : le numéro de version de l’instruction dans la bibliothèque au 24 septembre 2026. Les instructions évoluent : en cas d’écart, la bibliothèque fait foi.",
        ],
      },
      {
        type: "encadre",
        ton: "attention",
        titre: "Dans tous les formulaires",
        texte:
          "Décrivez ce que vous observez, jamais qui est l’élève : ni nom, ni prénom, ni information permettant de l’identifier. C’est la règle d’or du guide d’utilisation, et c’est aussi la charte du lycée.",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
            description: "Le module à suivre avant de remplir un premier formulaire.",
          },
          {
            libelle: "La charte IA du lycée",
            href: "/formations/ia-usages-numeriques/la-charte-ia",
            description: "Jamais de données personnelles d’élèves dans un outil d’IA, quel que soit le compte.",
          },
          {
            libelle: "Cas d’usage",
            href: "https://inclusia.forge.apps.education.fr/cas-usage/",
            description: "Un exemple avant / après pour chacun des vingt modules.",
          },
          {
            libelle: "Bibliothèque d’instructions",
            href: "https://inclusia.forge.apps.education.fr/prompts/",
            description: "Les vingt instructions en entier, avec leur numéro de version.",
          },
        ],
      },
    ],
  },

  {
    slug: "concevoir-une-seance",
    titre: "Concevoir, différencier, évaluer une séance",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Vous partez d’une séance, d’une consigne ou d’une évaluation. Aucun de ces cinq modules ne part du profil d’un élève en particulier : ils travaillent pour la classe entière.",
      },
      {
        type: "tableau",
        entetes: ["Module", "Pour quelle situation", "Ce que vous décrivez", "Ce que vous obtenez", "Version"],
        lignes: [
          [
            "Conception CUA — Séance inclusive",
            "Bâtir une nouvelle séance, accessible à tous dès le départ plutôt qu’adaptée après coup pour quelques élèves.",
            "La discipline, le niveau, la durée, le sujet, l’objectif et les profils de la classe. Si vous joignez des documents ou des idées de départ, l’IA doit en faire la matière première de la séance.",
            "Une fiche de séance : objectif rattaché au seul référentiel du niveau, déroulé par phases (durées, activités, modalités, principes CUA mobilisés), matériel, évaluation, points de vigilance. Avec des documents joints : deux lignes « Repris de vos documents : … » et « Ajouté par l’IA : … ».",
            "v1.6.0",
          ],
          [
            "Différenciation — 3 niveaux de consigne",
            "Proposer une même consigne à des élèves aux besoins différents, plutôt que trois exercices sans lien.",
            "La consigne, la discipline, le niveau et l’objectif d’apprentissage, avec les éventuelles options de différenciation.",
            "Trois versions séparées — soutien, standard, expert — qui visent le même objectif, chacune avec sa consigne, ses aménagements, ses critères de réussite et les leviers actionnés. La partie élève doit pouvoir s’imprimer sans rien retirer.",
            "v1.5.0",
          ],
          [
            "Analyse CUA — Diagnostic d’une séance",
            "Comprendre pourquoi une séance déjà écrite ne fonctionne pas, sans tout refaire.",
            "La séance telle qu’elle est, la discipline, le niveau, les problèmes observés et vos contraintes matérielles.",
            "Un tableau des forces et des faiblesses par principe CUA, des améliorations classées par effort et par impact, puis la séance révisée.",
            "v1.4.0",
          ],
          [
            "Expliciter une tâche — Lever les implicites",
            "Des élèves font le travail sans voir ce qu’il devait leur faire apprendre : la consigne suppose ce qu’elle ne dit pas.",
            "La tâche, la discipline, le niveau, ce qu’elle vise à faire apprendre, vos constats et les leviers retenus.",
            "Un tableau à deux colonnes — ce que l’élève doit faire, ce qu’il doit apprendre en le faisant —, les implicites repérés, la consigne réécrite, trois à cinq critères de réussite en mots d’élève, un exemple traité ou deux productions contrastées, une modalité de coopération et une question de retour réflexif.",
            "v1.0.0",
          ],
          [
            "Concevoir un QCM — Évaluation équitable",
            "Vérifier qu’une notion est acquise avec un QCM qui mesure la connaissance, et non l’aisance de lecture ou l’habileté à déjouer le test.",
            "La notion, la discipline, le niveau, l’objectif évalué et le nombre de propositions.",
            "Pour chaque question : l’amorce, les propositions a, b, c…, la bonne réponse et une rétroaction sans jugement pour chaque proposition ; une note sur les règles de Leclercq appliquées. Le QCM s’exporte en .json vers Caramel (H5P).",
            "v1.0.0",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Dans la bibliothèque, cette famille s’appelle « Concevoir & évaluer une séance » et les instructions y portent un autre titre : « Conception de séance CUA », « Différenciation de consignes », « Analyse CUA d’une séance existante », « Expliciter une tâche — lever les implicites », « Concevoir un QCM ».",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Concevoir, différencier, évaluer une séance",
            href: "/formations/inclusia/concevoir-une-seance",
            description: "Le module du tutoriel consacré à cette famille.",
          },
        ],
      },
    ],
  },

  {
    slug: "rendre-un-texte-lisible",
    titre: "Rendre un texte ou une activité lisible",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Vous partez d’un support existant qu’il faut rendre accessible. Les trois instructions se partagent le travail : FALC réécrit la forme, Aide à la lecture laisse le texte intact et l’accompagne, Allophone calibre la langue sur le niveau de français de l’élève.",
      },
      {
        type: "tableau",
        entetes: ["Module", "Pour quelle situation", "Ce que vous décrivez", "Ce que vous obtenez", "Version"],
        lignes: [
          [
            "FALC — Texte facile à lire et à comprendre",
            "Une consigne ou un texte trop dense pour être lu en autonomie, à réécrire en langage simple.",
            "Le texte, la discipline, le niveau et le profil de l’élève.",
            "Deux parties. Le document à remettre à l’élève : le texte FALC et un court glossaire, rien d’autre. Les notes pour l’enseignant : tableau des simplifications, illustrations à placer, informations supprimées, mise en forme recommandée, rappel de la validation par des personnes concernées.",
            "v1.4.0",
          ],
          [
            "Aide à la lecture — Lexique & résumé",
            "Un texte au bon niveau, que vous ne voulez pas réécrire, mais sur lequel des élèves perdent le fil.",
            "Le texte, la discipline, le niveau, l’objectif de lecture, les profils des élèves et, si besoin, la langue maternelle à utiliser pour le lexique.",
            "Un lexique dans l’ordre du texte (nature, niveau de vocabulaire, définition, exemple ; une colonne de traduction seulement si une langue maternelle est indiquée) et un résumé d’une à deux phrases par paragraphe. Le texte source n’est pas modifié.",
            "v1.5.0",
          ],
          [
            "Allophone — Supports multilingues",
            "Un élève nouvellement arrivé, qui comprend très peu le français, doit suivre une activité de la classe.",
            "L’activité, la discipline, le niveau, le niveau de français de l’élève (de « Ne parle pas français » à « Conversations basiques »), sa langue maternelle et les supports souhaités.",
            "L’activité adaptée au niveau du CECRL, un lexique disciplinaire en tableau (mot, traduction si la langue est indiquée, exemple), des phrases modèles à trous, des supports visuels à créer et des modalités de travail. L’objectif disciplinaire est maintenu.",
            "v1.7.0",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Dans la bibliothèque, cette famille s’appelle « Adapter un texte ou une activité » : « FALC — Facile à Lire et à Comprendre », « Aide à la lecture — Lexique & Résumé », « Support multi-modal pour élève allophone ». Le module Dyslexie, rangé dans la famille suivante, est leur voisin : son instruction précise qu’il ne réécrit pas le texte et ne produit ni lexique ni résumé — il agit sur l’accès à l’écrit.",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Rendre un texte ou une activité lisible",
            href: "/formations/inclusia/rendre-un-texte-lisible",
            description: "Le module du tutoriel consacré à cette famille, et la frontière avec Dyslexie.",
          },
        ],
      },
    ],
  },

  {
    slug: "repondre-a-un-besoin",
    titre: "Répondre à un besoin particulier",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "« Vous partez de ce que vous observez chez un élève, jamais d’un diagnostic. » Choisir une tuile n’est pas poser une étiquette : dans les champs, vous décrivez ce que fait l’élève, dans quelle situation, à quelle fréquence.",
      },
      {
        type: "tableau",
        entetes: ["Module", "Pour quelle situation", "Ce que vous décrivez", "Ce que vous obtenez", "Version"],
        lignes: [
          [
            "Adaptations TSA — Trouble du spectre de l’autisme",
            "Des fonctionnements observés — transitions, entrée dans la tâche, bruit… — qui gênent un élève en classe ordinaire.",
            "Le niveau, les observables relevés en classe, rangés par domaine de fonctionnement, et le contexte de mise en œuvre.",
            "Une fiche par domaine : observables, besoins, adaptations concrètes en puces ; en fin de fiche, le rappel des partenaires à mobiliser.",
            "v1.4.0",
          ],
          [
            "Surdité — Élève sourd ou malentendant",
            "Un élève sourd ou malentendant perd le fil quand l’essentiel passe par l’oral.",
            "L’activité, la discipline, le niveau, le mode de communication de l’élève (bilingue LSF, oraliste avec LPC, appui écrit + visuel), les difficultés visées et les supports souhaités.",
            "Des consignes écrites ou visuelles, un lexique-clé illustré, la liste des supports à préparer à l’avance (dont sous-titrage ou transcription) et des recommandations pour les échanges collectifs.",
            "v1.4.0",
          ],
          [
            "Déficience visuelle — Aveugle ou malvoyant (dépôt d’image)",
            "Un support — texte, tableau, graphique, figure — inaccessible à un élève aveugle ou malvoyant.",
            "Le support, la discipline, le niveau, le type de déficience, la nature du support et les adaptations souhaitées. Vous pouvez déposer une image : le module peut l’analyser pour aider à la décrire.",
            "Une version accessible (texte linéarisé, tableaux mis à plat), une description pédagogique de chaque élément visuel, des recommandations de mise en forme pour la version agrandie, la liste de ce qui est à transcrire en braille ou à produire en relief.",
            "v1.3.0",
          ],
          [
            "Handicap moteur — Motricité & dyspraxie",
            "Un élève pour qui le geste — tracer, copier, manipuler — fait écran au savoir que vous voulez évaluer.",
            "L’activité ou l’évaluation, la discipline, le niveau, les entraves motrices visées, les alternatives disponibles et les adaptations souhaitées.",
            "L’activité ré-outillée (réponses à faible charge motrice), des supports pré-formatés à imprimer, des alternatives à l’écrit manuscrit et aux tracés, des préconisations d’aménagement (secrétaire, numérique, temps majoré).",
            "v1.3.0",
          ],
          [
            "Maths & dyscalculie — Mathématiques accessibles",
            "Un élève bloqué en mathématiques — par le nombre, ou par la lecture d’un énoncé qu’il saurait résoudre.",
            "La notion ou l’exercice, le niveau, les obstacles visés, les leviers d’adaptation souhaités et le profil de l’élève.",
            "Une version en étapes numérotées, un énoncé à charge de lecture réduite si besoin, du matériel de manipulation et des représentations imagées, des aides mémoire à imprimer, des amorces de verbalisation du raisonnement.",
            "v1.3.0",
          ],
          [
            "Dyslexie — Lecture et écriture",
            "Un élève qui comprend le texte quand on le lui lit, mais que le déchiffrage arrête sur la feuille.",
            "Le support, la discipline, le niveau, les obstacles visés, les leviers retenus et le profil de l’élève.",
            "Le support adapté, à remettre à l’élève, sans méta-commentaire ; la mise en forme à appliquer à l’impression ; ce qui doit passer par un autre canal ; les outils de compensation ; les aménagements d’évaluation.",
            "v1.0.0",
          ],
          [
            "Haut potentiel — Approfondissement (EHP)",
            "Un élève qui finit toujours en avance et s’ennuie, à enrichir sans lui donner « plus du même ».",
            "L’activité, la discipline, le niveau, l’objectif de la classe, le profil observé de l’élève, le type d’enrichissement (approfondissement, complexification, ouverture) et les modalités retenues.",
            "Une proposition d’enrichissement rattachée à l’objectif de la classe, deux à trois tâches graduées, des questions ouvertes, une modalité de valorisation et le rappel de ce qu’on n’a volontairement pas fait : pas de « double ration ».",
            "v1.4.0",
          ],
          [
            "Accompagnement — Fiche comportementale",
            "Des comportements qui bloquent la classe, face auxquels l’équipe hésite entre sanction et négociation.",
            "Le niveau, les comportements observés, le contexte (classe entière, petit groupe, individuel) et les ressources disponibles.",
            "Une fiche : comportements reformulés en observables, stratégies en trois paliers (prévention pour toute la classe, intervention ciblée, intervention intensive si nécessaire), conseils de communication avec la famille et l’équipe, indicateurs de suivi.",
            "v1.5.0",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Dans la bibliothèque, cette famille s’appelle « Répondre à un besoin spécifique » et les instructions y portent leur titre complet, de « Adaptations pour un élève autiste » à « Fiche d’accompagnement comportemental ».",
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Le cadre cité par les instructions",
        texte:
          "Les instructions de cette famille citent le cadre français de l’école inclusive (PAP, PPS, ESS, MDPH, enseignant référent, RASED…). Au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Répondre à un besoin particulier",
            href: "/formations/inclusia/repondre-a-un-besoin",
            description: "Le module du tutoriel consacré à ces huit modules.",
          },
          {
            libelle: "Décrire sans étiqueter",
            href: "/formations/inclusia/ressources/observables",
            description: "Des formulations pour passer de l’étiquette à ce qu’on observe.",
          },
        ],
      },
    ],
  },

  {
    slug: "communiquer-autrement",
    titre: "Communiquer autrement",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Vous partez d’un élève qui n’a pas la parole, ou pour qui l’imprévu est un obstacle. Ces quatre modules ne rendent pas un texte mais une planche d’images à imprimer : l’IA découpe et classe, elle ne dessine rien ; les pictogrammes viennent de la banque ARASAAC et chaque case reste modifiable avant impression.",
      },
      {
        type: "tableau",
        entetes: ["Module", "Pour quelle situation", "Ce que vous décrivez", "Ce que vous obtenez", "Version"],
        lignes: [
          [
            "CAA — Phrase en pictogrammes ARASAAC",
            "Un élève qui ne s’exprime pas oralement a besoin d’une phrase précise à désigner — « Je n’ai pas compris la consigne », par exemple.",
            "La phrase à mettre en pictogrammes, le niveau de l’élève et son profil de communication.",
            "Une bande en style télégraphique : l’IA garde les mots porteurs de sens, les ramène à leur forme de base et les range selon la clé de Fitzgerald. La négation, qu’ARASAAC ne sait pas dessiner, est signalée par le site.",
            "v1.0.0",
          ],
          [
            "Tableau de communication — Vocabulaire d’une situation",
            "Une situation précise — le repas à la cantine, par exemple — où l’élève doit pouvoir dire lui-même ce qu’il veut ou ce qui ne va pas.",
            "La situation, le niveau de l’élève et son profil de communication.",
            "Une grille de 12 à 20 mots : le vocabulaire noyau d’abord (je, veux, encore, fini, aider, oui, non…), puis celui de la situation, y compris les mots pour dire que quelque chose ne va pas.",
            "v1.0.0",
          ],
          [
            "Séquentiel illustré — Une routine, étape par étape",
            "Une routine que l’élève connaît mais dont il perd l’ordre, et qu’un adulte doit lui rappeler sans cesse.",
            "La routine ou l’activité, le niveau de l’élève et son profil.",
            "De 4 à 8 étapes à l’infinitif, une action observable par étape, dans l’ordre réel, la dernière signant la fin ; un pictogramme par étape, à afficher près du lieu de l’activité.",
            "v1.1.0",
          ],
          [
            "Scénario social — Préparer une situation",
            "Une situation qui inquiète un élève — une sortie au musée, le repas à la cantine — à lui raconter à l’avance.",
            "La situation, le niveau de l’élève et son profil.",
            "Un récit de 5 à 8 phrases courtes, à la première personne, plus descriptif que directif, sans promesse, qui se termine par une phrase rassurante ou une solution de repli ; une vignette illustrée par phrase.",
            "v1.0.0",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Dans la bibliothèque, cette famille garde son nom, « Communiquer autrement » : « CAA — Communication par pictogrammes », « Tableau de communication — vocabulaire d’une situation », « Séquentiel de routine illustré », « Scénario social illustré ».",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Communiquer autrement : les planches de pictogrammes",
            href: "/formations/inclusia/communiquer-autrement",
            description: "Le module du tutoriel consacré à ces quatre modules et à l’impression des planches.",
          },
        ],
      },
    ],
  },

  {
    slug: "modules-voisins",
    titre: "Deux modules voisins : lequel choisir ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Certains modules se ressemblent d’une famille à l’autre. Pour chaque situation, choisissez celui dont l’instruction répond le mieux — la différence est écrite dans l’instruction elle-même.",
      },
      {
        type: "qcm",
        id: "inclusia-r-carte-voisins",
        consigne: "Six situations, trois modules proposés à chaque fois : un seul est le plus indiqué.",
        questions: [
          {
            question:
              "Vous voulez donner à toute la classe la même consigne de mathématiques, en trois versions plus ou moins guidées, pour le même objectif.",
            options: ["Haut potentiel", "Différenciation", "Expliciter une tâche"],
            bonne: 1,
            explication:
              "Différenciation produit trois versions d’une même consigne — soutien, standard, expert — qui visent le même objectif : la différenciation « porte sur le chemin, pas sur la destination ». Son instruction en fait des étayages temporaires, mobilisables par n’importe quel élève. Haut potentiel, lui, conçoit un enrichissement pour un élève dont vous décrivez le profil.",
          },
          {
            question:
              "Un élève termine toujours les exercices en avance et décroche ; vous voulez lui proposer autre chose que dix exercices de plus.",
            options: ["Différenciation", "Analyse CUA", "Haut potentiel"],
            bonne: 2,
            explication:
              "L’instruction Haut potentiel interdit la « double ration » : elle enrichit la profondeur, la complexité ou l’ouverture, jamais le volume, et garde l’élève sur le même objectif que la classe. Vous y décrivez son profil observé et le type d’enrichissement voulu.",
          },
          {
            question:
              "Tous les élèves ont rendu le paragraphe d’histoire demandé, et pourtant l’évaluation suivante est ratée. Vous voulez garder la consigne exigeante.",
            options: ["Expliciter une tâche", "FALC", "Aide à la lecture"],
            bonne: 0,
            explication:
              "Expliciter une tâche sépare ce que l’élève doit faire de ce qu’il doit apprendre en le faisant, et repère les implicites de la consigne. Son instruction le dit : « Expliciter n’est pas simplifier » — le vocabulaire disciplinaire et l’exigence restent intacts. FALC, à l’inverse, réécrit le texte en langage simple.",
          },
          {
            question:
              "Devant un problème de fractions, un élève ne démarre pas : l’énoncé est long, les nombres sont noyés dans le texte, il ne sait plus quelle opération choisir.",
            options: ["FALC", "Maths & dyscalculie", "Dyslexie"],
            bonne: 1,
            explication:
              "L’instruction Maths & dyscalculie distingue toujours la charge de lecture de l’énoncé de la difficulté mathématique : elle propose un énoncé à charge de lecture réduite, sans modifier les nombres ni l’objectif, puis de la manipulation, des aides mémoire et des amorces comme « je cherche… », « je sais que… ». Dyslexie agit sur l’accès à l’écrit ; ici, le blocage porte aussi sur le choix de l’opération.",
          },
          {
            question:
              "Une sortie scolaire approche. Pour un élève, l’inconnu est l’obstacle : le car, la foule, le bruit, des adultes qu’il ne connaît pas.",
            options: ["Séquentiel illustré", "Adaptations TSA", "Scénario social"],
            bonne: 2,
            explication:
              "Le scénario social raconte à l’avance ce qui va se passer, à la première personne, en 5 à 8 phrases illustrées, et se termine par une phrase rassurante ou une solution de repli ; il ne promet pas que tout ira bien. Le séquentiel illustré décompose une routine en étapes ; Adaptations TSA propose des adaptations pour la classe à partir d’observables.",
          },
          {
            question:
              "Un élève se lève, interrompt et n’entre pas dans le travail écrit ; l’équipe hésite entre sanction et négociation et veut une réponse graduée.",
            options: ["Accompagnement", "Scénario social", "Adaptations TSA"],
            bonne: 0,
            explication:
              "Accompagnement produit une fiche de stratégies en trois paliers — toute la classe, ciblé, intensif — et ne passe d’un palier au suivant que si des indicateurs observables montrent que le précédent ne suffit pas. Son instruction reformule d’abord les comportements en observables et interdit tout diagnostic.",
          },
        ],
      },
    ],
  },

  {
    slug: "en-commun",
    titre: "Ce que les instructions ont en commun",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Les vingt instructions suivent le même plan — RÔLE, CONTEXTE, TÂCHE, CONTRAINTES, FORMAT DE SORTIE — et sont écrites pour être auto-portantes : elles nomment leurs cadres de référence en toutes lettres, pour ne rien supposer connu de l’IA qui les reçoit. Au-delà de ce plan, voici ce qui revient d’un module à l’autre.",
      },
      {
        type: "tableau",
        entetes: ["Ce qui revient", "Où", "Pour vous"],
        lignes: [
          [
            "La charte de rédaction accessible : pas d’italique ni d’emoji, gras parcimonieux, titres hiérarchisés, aucune URL inventée",
            "Les vingt instructions ; elle est visible dans l’onglet « Texte brut » de la bibliothèque.",
            "Un résultat sobre et structuré, plus facile à relire et à mettre en forme.",
          ],
          [
            "Une partie à remettre à l’élève, nettement séparée des notes pour l’enseignant",
            "Onze modules : Différenciation, Expliciter une tâche, FALC, Aide à la lecture, Allophone, Surdité, Déficience visuelle, Handicap moteur, Maths & dyscalculie, Dyslexie, Haut potentiel.",
            "Plusieurs instructions précisent que la partie élève doit pouvoir s’imprimer sans rien en retirer. Vérifiez-le quand même avant de la distribuer.",
          ],
          [
            "La synthèse « 3 gestes prioritaires à mettre en place dès demain », chacun suivi du signe observable qui indiquera qu’on peut commencer à l’alléger, placée dans les notes pour l’enseignant",
            "Quinze modules : tous sauf Concevoir un QCM, qui se termine par une note sur les règles de Leclercq appliquées, et les quatre modules à pictogrammes.",
            "Un point d’entrée réaliste : trois gestes à tenir dès demain, et un repère pour savoir quand les alléger.",
          ],
          [
            "Le refus de poser ou de confirmer un diagnostic",
            "Écrit en toutes lettres dans Adaptations TSA, Dyslexie et Accompagnement ; la page Démarche le dit pour tout le site : « Ce n’est pas un outil de diagnostic. »",
            "Décrivez des observables : ce qui se voit et s’entend, dans quelle situation, à quelle fréquence.",
          ],
          [
            "Le rappel des partenaires à mobiliser (famille, enseignant spécialisé, AESH, ESS, orthophoniste, ergothérapeute, psychologue de l’Éducation nationale…)",
            "Les huit modules de la famille « Répondre à un besoin particulier ».",
            "Le résultat se discute en équipe, selon l’organisation du lycée.",
          ],
          [
            "Des interdictions d’inventer",
            "Aucune URL (charte commune), aucune référence ni document (Concevoir un QCM), aucune image non reçue (Déficience visuelle), aucune langue non indiquée (Aide à la lecture), aucun mot ajouté (CAA), aucun détail non décrit (Scénario social).",
            "Ces règles s’imposent à l’IA dans l’instruction ; elles ne garantissent pas sa réponse. Vérifiez chaque référence, page ou image citée.",
          ],
        ],
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Les quatre modules à pictogrammes font exception",
        texte:
          "CAA, Tableau de communication, Séquentiel illustré et Scénario social demandent à l’IA uniquement une liste structurée — des mots, des étapes ou des phrases, dans un tableau JSON, sans texte avant ni après. Le site en fait ensuite une planche : pictogrammes ARASAAC, code couleur de la clé de Fitzgerald avec la famille toujours écrite à côté, impression en bande, en séquentiel ou en cartes. Ni partie élève séparée, ni synthèse de trois gestes : ce qui sort, c’est la planche.",
      },
      {
        type: "citation",
        texte:
          "À aucun moment le site ne produit un document prêt à donner à l’élève : ce qui sort de l’IA est un brouillon expert, à relire avant utilisation avec l’élève.",
        source: "Guide d’utilisation d’Inclus’IA",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Prendre en main l’outil",
            href: "/formations/inclusia/prendre-en-main",
            description: "Lire une instruction bloc par bloc, et choisir l’IA qui y répond.",
          },
          {
            libelle: "Relire, ajuster, exporter",
            href: "/formations/inclusia/relire-et-adapter",
            description: "Relire la partie élève, les trois gestes et tout ce que l’IA a pu ajouter.",
          },
          {
            libelle: "Travailler en équipe autour d’un élève",
            href: "/formations/inclusia/travailler-en-equipe",
            description: "Qui relit, qui décide des trois gestes, quand faire le point.",
          },
        ],
      },
    ],
  },

  {
    slug: "m2pa",
    titre: "La tuile Planification M2PA",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "La liste des modules du guide d’utilisation se termine par une tuile à part : « Planification M2PA — Accessibilité d’une séquence ». Ce n’est pas l’un des vingt modules, et elle n’a pas d’instruction dans la bibliothèque.",
      },
      {
        type: "paragraphe",
        texte:
          "La M2PA (Méthode de Planification Pédagogique de l’Accessibilité) va au-delà de l’adaptation ponctuelle : c’est une démarche structurée en trois niveaux pour anticiper les huit besoins partagés des élèves, différencier et adapter une séance complète. Elle est mise en œuvre sur un outil complémentaire dédié, vers lequel Inclus’IA redirige.",
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Hors du champ de ce tutoriel",
        texte:
          "Ce tutoriel s’en tient à Inclus’IA. Les pages Guide et Démarche ne disent de la M2PA que ce qui précède : pour savoir comment l’utiliser, reportez-vous à l’outil lui-même.",
      },
      {
        type: "liens",
        liens: [
          {
            libelle: "Outil M2PA",
            href: "https://m2pa.forge.apps.education.fr/",
            description: "L’outil complémentaire vers lequel renvoie la tuile Planification M2PA.",
          },
          {
            libelle: "La démarche d’Inclus’IA",
            href: "https://inclusia.forge.apps.education.fr/demarche/",
            description: "Les familles de modules, les quatre principes du site et la présentation de la M2PA.",
          },
        ],
      },
    ],
  },
];
