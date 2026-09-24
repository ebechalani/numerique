import type { Module } from "@/content/types";

/**
 * Module 7 — Relire, ajuster, exporter (15 minutes).
 *
 * Ce que contient un résultat (points de vigilance, partie élève et notes pour
 * l’enseignant, « 3 gestes prioritaires », lignes « Repris de vos documents » /
 * « Ajouté par l’IA »), la grille de relecture en huit points, le tri
 * garder / corriger / retirer, l’itération, l’export et la transparence
 * envers les élèves.
 *
 * Tiré des pages « Guide d’utilisation », « Démarche », « Cas d’usage » et
 * « Bibliothèque d’instructions » d’Inclus’IA (https://inclusia.forge.apps.education.fr/),
 * telles qu’en ligne le 24 septembre 2026, et de la charte IA du lycée.
 */
export const relireEtAdapter: Module = {
  slug: "relire-et-adapter",
  numero: 7,
  titre: "Relire, ajuster, exporter",
  sousTitre:
    "Lire le brouillon expert, le vérifier en huit points, le corriger ou le régénérer, puis le télécharger pour votre classe",
  duree: 15,
  objectif:
    "Relire un résultat d’Inclus’IA avec une grille en huit points, décider de ce que vous gardez, corrigez ou régénérez, puis l’exporter et le remettre — ou le transmettre au professeur de la classe, qui le valide — en disant aux élèves qu’il a été préparé avec une IA.",
  blocs: [
    {
      type: "citation",
      texte:
        "À aucun moment le site ne produit un document prêt à donner à l’élève : ce qui sort de l’IA est un brouillon expert, à relire avant utilisation avec l’élève.",
      source: "Inclus’IA — Guide d’utilisation",
    },
    {
      type: "paragraphe",
      texte:
        "Sur les cinq étapes de la démarche, trois vous appartiennent, dont les deux dernières : vous relisez, puis vous adaptez. La page Démarche le dit ainsi : « Vous lisez, vous coupez, vous ajustez, vous contextualisez. L’auteur ou l’autrice de la séance, c’est vous. » La mise en page, la progression et la contextualisation locale restent à votre charge. La charte IA du lycée pose la même règle : relecture humaine systématique de tout ce que l’IA produit.",
    },
    {
      type: "paragraphe",
      texte:
        "La page Démarche compte « quelques minutes pour relire la proposition de l’IA et l’adapter ». Ces minutes-là ne se sautent pas : ce module vous donne une méthode pour les employer.",
    },

    { type: "titre", texte: "Ce que contient un résultat" },
    {
      type: "paragraphe",
      texte:
        "Chaque instruction fixe la forme de la réponse dans son bloc FORMAT DE SORTIE. Hormis les quatre modules à pictogrammes, qui rendent une planche d’images, les résultats partagent donc des repères, sans que chaque module les ait tous. Apprenez à les reconnaître : ils guident votre lecture.",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          numero: "1",
          titre: "Les points de vigilance",
          texte:
            "Selon le guide, le résultat est accompagné de points de vigilance « qui disent où regarder en premier ». Commencez toujours par eux.",
        },
        {
          numero: "2",
          titre: "La partie élève, les notes pour l’enseignant",
          texte:
            "Onze instructions sur vingt demandent à l’IA de séparer nettement ce qui est à remettre à l’élève des notes pour l’enseignant ; Différenciation, Aide à la lecture, Allophone et Haut potentiel en précisent le but : que vous puissiez « imprimer la première partie sans avoir à en retirer quoi que ce soit ». Dans FALC, les deux parties s’intitulent « Document à remettre à l’élève » et « Notes pour l’enseignant ». Conception CUA, Analyse CUA, Adaptations TSA, Accompagnement et Concevoir un QCM ne prévoient pas de partie élève : c’est vous qui tirez du résultat ce que l’élève recevra.",
        },
        {
          numero: "3",
          titre: "Les 3 gestes prioritaires",
          texte:
            "Dans les notes pour l’enseignant, une synthèse « 3 gestes prioritaires à mettre en place dès demain » : pour chacun, le geste en une phrase, puis le signe observable qui indiquera qu’on peut commencer à l’alléger.",
        },
        {
          numero: "4",
          titre: "Ce qui vient de vous, ce qui vient de l’IA",
          texte:
            "Dans Conception CUA, si vous avez fourni des documents ou des idées de départ, deux lignes précèdent cette synthèse : « Repris de vos documents : … » et « Ajouté par l’IA : … ». Elles montrent d’un coup d’œil ce qui vient de vous et ce qui vient du modèle : relisez la seconde de près.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Deux exceptions",
      texte:
        "Concevoir un QCM ne se termine pas par trois gestes : son instruction demande une courte note sur les règles de Leclercq qui ont guidé la rédaction. CAA, Tableau de communication, Séquentiel illustré et Scénario social rendent une planche d’images à imprimer : chaque case reste modifiable avant l’impression, et ce qu’ARASAAC ne sait pas dessiner est signalé, la négation en particulier (voir le module 6).",
    },

    { type: "titre", texte: "Les trois gestes : un point de départ, pas une liste de plus" },
    {
      type: "paragraphe",
      texte:
        "Beaucoup d’adaptations sont des étayages, faits pour s’alléger : l’instruction Différenciation parle d’« étayages temporaires », et la page Cas d’usage le dit du séquentiel illustré : « L’étayage est fait pour être estompé ». Le signe observable qui accompagne chaque geste vous dit quand commencer à l’alléger : un fait que vous pouvez constater, pas une impression.",
    },
    {
      type: "paragraphe",
      texte:
        "D’autres adaptations sont des compensations durables — transcription braille, sous-titrage, ordinateur, temps majoré, outils de réduction des stimulations. On ne les retire pas parce que l’élève réussit : c’est grâce à elles qu’il réussit. Ce qui s’allège alors, c’est l’aide de l’adulte, pas l’outil. Et ce que prévoit un plan d’accompagnement ne se modifie pas de votre seule initiative : au lycée, ces plans suivent les procédures de l’établissement (module 8).",
    },
    {
      type: "paragraphe",
      texte:
        "Voici à quoi cela peut ressembler — un exemple construit pour ce tutoriel à partir du cas d’usage 9 (un élève qui reste bloqué aux changements d’activité), et non une sortie de l’outil.",
    },
    {
      type: "tableau",
      entetes: ["Geste prioritaire", "Signe observable pour commencer à l’alléger"],
      lignes: [
        [
          "Annoncer chaque changement d’activité (« dans 5 minutes, on passe à… ») avec l’emploi du temps visuel affiché.",
          "L’élève change d’activité en même temps que la classe, sans relance individuelle, plusieurs séances de suite.",
        ],
        [
          "Donner une consigne par ligne, avec la première étape déjà amorcée.",
          "L’élève se met au travail seul dès la consigne donnée, sans sollicitation, plusieurs séances de suite.",
        ],
        [
          "Laisser un casque disponible sans que l’élève ait à le demander, et un coin de repli identifié.",
          "L’élève prend le casque ou rejoint le coin de repli de lui-même, sans intervention de l’adulte, plusieurs séances de suite : c’est l’intervention de l’adulte qui s’allège, le casque reste disponible.",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Pour relire vos propres gestes, posez trois questions : puis-je le faire dès demain, dans ma salle, avec mon matériel ? Le signe est-il vraiment observable — une situation, une fréquence — et non une impression ? Qui l’observe, et quand fait-on le point ? Cette dernière question se règle en équipe : c’est l’objet du module 8.",
    },

    { type: "titre", texte: "La relecture en huit points" },
    {
      type: "paragraphe",
      texte:
        "Chaque point s’appuie sur une règle que les instructions imposent à l’IA. Ces règles disent ce que l’IA doit faire ; elles ne garantissent pas qu’elle l’a fait. Votre relecture le vérifie.",
    },
    {
      type: "checklist",
      id: "inclusia-m7-relecture",
      consigne:
        "Avant d’imprimer ou de distribuer, vérifiez sur votre résultat, point par point :",
      items: [
        {
          titre: "L’exactitude disciplinaire",
          texte:
            "Chaque fait, date, chiffre, définition et corrigé est juste. L’instruction FALC interdit de modifier « un fait, un chiffre, une consigne ou une conclusion » ; celle de Maths & dyscalculie, de toucher aux nombres de l’énoncé. Vérifiez qu’il en est bien ainsi.",
        },
        {
          titre: "Le même objectif",
          texte:
            "L’adaptation change le chemin, pas la destination : les trois versions de Différenciation visent le même objectif, Haut potentiel et Allophone gardent celui de la classe, Dyslexie et Maths & dyscalculie n’abaissent jamais l’exigence. Une version qui demande moins que l’objectif se corrige.",
        },
        {
          titre: "Le bon référentiel, le bon niveau",
          texte:
            "Le socle commun ne vaut que du CP à la 3e : au lycée, les instructions demandent les compétences travaillées et les capacités du programme de la discipline. Un intitulé suivi de « (intitulé à vérifier dans le programme officiel) » se vérifie dans le programme. Du CP à la 3e, l’instruction Conception CUA interdit de citer un numéro de cycle — « le niveau indiqué suffit, et le cycle annoncé est régulièrement faux » : s’il en apparaît un, retirez-le. Le vocabulaire et la longueur conviennent à vos élèves.",
        },
        {
          titre: "Rien d’inventé",
          texte:
            "Aucune référence, page, document, image ou adresse web que vous n’avez pas fournis. Les instructions l’interdisent — le QCM ne cite une page ou un « document 2 » que s’il figure dans votre contenu, Déficience visuelle ne décrit jamais une image non reçue, Scénario social n’invente ni nom, ni horaire, ni lieu — mais c’est à vous de le constater.",
        },
        {
          titre: "Les traductions relues",
          texte:
            "Aide à la lecture n’ajoute une colonne de traduction que si vous avez indiqué une langue maternelle : sinon, elle n’a rien à faire là. Toute traduction (Aide à la lecture, Allophone) est relue par un collègue qui maîtrise la langue avant d’être distribuée, et son écriture s’affiche correctement.",
        },
        {
          titre: "Une partie élève propre et mise en forme",
          texte:
            "Aucun méta-commentaire ni tableau d’analyse dans ce que l’élève reçoit. L’IA recommande une mise en forme sans pouvoir l’appliquer elle-même (instruction FALC) : police, corps, alignement à gauche, interligne — c’est vous qui l’appliquez dans le document téléchargé.",
        },
        {
          titre: "Aucune désignation d’élève",
          texte:
            "Aucun diagnostic ni mention qui signale un élève sur ce qui sera distribué. Si le prénom d’un de vos élèves figure dans le résultat, c’est qu’il a été saisi, contrairement à la règle d’or (module 2) : retirez-le. Pour personnaliser la copie d’un élève, faites-le dans le document téléchargé, jamais dans Inclus’IA ni dans Copilot Chat — et ne recollez pas ce document dans une IA. L’instruction Expliciter une tâche le dit : lever un implicite profite à toute la classe, « et cela s’adresse au groupe entier ».",
        },
        {
          titre: "Faisable dans votre classe",
          texte:
            "Les durées tiennent dans votre séance, le matériel existe, l’organisation est possible dans votre salle. Si l’IA propose ce que vous n’avez pas, précisez vos contraintes dans le formulaire. Le guide le conseille : « Pas de tablettes ? Salle fixe ? Temps limité ? Ces informations aident l’IA à proposer des solutions réalistes. »",
        },
      ],
    },
    {
      type: "tableau",
      entetes: ["Famille de modules", "À vérifier en plus"],
      lignes: [
        [
          "Concevoir, différencier, évaluer une séance",
          "Le référentiel cité correspond au niveau ; les durées des phases tiennent dans votre séance ; dans un QCM, une seule bonne réponse et des rétroactions sans « Faux » ni « Non », comme l’exige l’instruction.",
        ],
        [
          "Rendre un texte ou une activité lisible",
          "Aucun fait ni chiffre modifié (FALC) ; le texte source intact (Aide à la lecture) ; l’objectif disciplinaire maintenu et les traductions relues (Allophone).",
        ],
        [
          "Répondre à un besoin particulier",
          "Aucun diagnostic posé ni confirmé : les adaptations partent de ce que vous avez décrit ; aucune description d’une image que vous n’avez pas fournie (Déficience visuelle) ; le geste n’est pas évalué quand on évalue le savoir (Handicap moteur) ; aucune « police pour dys » présentée comme un remède (Dyslexie) ; pas de « double ration » (Haut potentiel) ; pas de passage à un palier supérieur sans indicateur observable (Accompagnement).",
        ],
        [
          "Communiquer autrement",
          "Chaque pictogramme dit bien le mot écrit dessous ; la négation signalée est traitée, avec une case « non » ajoutée si besoin — sans elle, une bande peut dire le contraire de ce qu’on voulait.",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Le cadre cité dans les notes",
      texte:
        "Dans les modules centrés sur un élève, l’instruction demande à l’IA de rappeler les partenaires à mobiliser et, souvent, le cadre de scolarisation : PAP, PPS, ESS, MDPH, enseignant référent, orthophoniste… C’est le cadre français ; au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Vous faites partie de l’équipe inclusive ?",
      texte:
        "AESH, coordination, vie scolaire, santé : votre relecture porte d’abord sur les gestes et leurs signes — qui peut les mettre en œuvre, qui observera, dans quelle situation — et, pour les planches de pictogrammes, sur chaque case avant l’impression. Un support destiné à l’élève est validé par le professeur de la classe avant d’être remis : relisez-le avec lui (module 8).",
    },

    { type: "titre", texte: "Je garde, je corrige ou je retire ?" },
    {
      type: "casPratiques",
      id: "inclusia-m7-cas-tri",
      consigne:
        "Voici des passages trouvés dans des résultats. Pour chacun, que faites-vous avant de distribuer le document ?",
      libelles: {
        autorise: "Je garde",
        encadre: "Je corrige",
        interdit: "Je retire",
      },
      cas: [
        {
          situation:
            "Dans le document à remettre à l’élève d’une version FALC, une ligne entre parenthèses : « J’ai remplacé les mots difficiles pour faciliter la lecture. »",
          verdict: "interdit",
          pourquoi:
            "C’est un méta-commentaire. L’instruction FALC est nette : la partie élève ne contient que le texte FALC, sans tableau d’analyse ni méta-commentaire. Les simplifications ont leur place dans les notes pour l’enseignant.",
        },
        {
          situation:
            "Une fiche de séance de SVT pour une classe de 1re rattache l’objectif au « socle commun, domaine 4 ».",
          verdict: "encadre",
          pourquoi:
            "Le socle commun ne couvre que la scolarité obligatoire, du CP à la 3e. Au lycée, l’instruction demande les compétences travaillées et les capacités du programme de la discipline pour ce niveau : remplacez par l’intitulé du programme, vérifié.",
        },
        {
          situation:
            "Le lexique produit par Aide à la lecture comporte une colonne de traduction en anglais, alors que vous n’avez indiqué aucune langue maternelle.",
          verdict: "interdit",
          pourquoi:
            "Sans langue maternelle indiquée, l’instruction interdit toute colonne de traduction : « N’invente jamais une langue qui n’a pas été indiquée. » Supprimez la colonne ; le lexique reste en français.",
        },
        {
          situation:
            "La version soutien de Différenciation remplace le calcul de proportionnalité demandé par une simple lecture de tableau.",
          verdict: "encadre",
          pourquoi:
            "Les trois versions doivent viser le même objectif : « la différenciation porte sur le chemin, pas sur la destination ». Rétablissez le calcul, avec davantage d’étayage — étapes guidées, amorces.",
        },
        {
          situation:
            "Un support pour un élève aveugle contient la description détaillée d’un schéma que vous n’avez ni déposé ni décrit.",
          verdict: "interdit",
          pourquoi:
            "Retirez-la : une description inventée ne se corrige pas, elle se remplace par la vôtre. L’instruction Déficience visuelle demande à l’IA de réclamer la description d’une figure plutôt que d’en inventer le contenu. Décrivez vous-même le schéma ou déposez l’image — le module permet de la faire décrire par l’IA, description que vous relirez aussi.",
        },
        {
          situation:
            "Sous le titre de la notion, une ligne ajoutée en tête du document à distribuer : « Fiche adaptée pour un élève TSA ».",
          verdict: "interdit",
          pourquoi:
            "Retirez cette ligne. Dans l’esprit de la règle d’or d’Inclus’IA — décrire sans nommer ni catégoriser —, rien de ce que l’élève et ses camarades verront ne doit le désigner. Le titre de la notion suffit.",
        },
        {
          situation:
            "La partie élève d’une version Dyslexie propose trois questions au lieu de cinq, de même exigence, une consigne par ligne.",
          verdict: "autorise",
          pourquoi:
            "C’est exactement ce que demande l’instruction : réduire la quantité d’écrit sans réduire l’exigence — moins d’items, mais de même niveau. La page Cas d’usage montre le même choix (cas 14).",
        },
        {
          situation:
            "Dans les notes pour l’enseignant, trois gestes prioritaires, chacun suivi d’un signe observable du type « l’élève se met au travail seul, sans sollicitation, plusieurs séances de suite ».",
          verdict: "autorise",
          pourquoi:
            "C’est la synthèse que demandent les instructions, à sa place, dans les notes pour l’enseignant. Vérifiez seulement que chaque geste est faisable dès demain dans votre classe.",
        },
      ],
    },

    { type: "titre", texte: "Corriger soi-même ou régénérer ?" },
    {
      type: "paragraphe",
      texte:
        "Le guide le conseille : « Si le résultat ne convient pas, recommencez en ajustant vos réponses. Chaque essai affine les instructions. » Le formulaire est sauvegardé automatiquement : vous reprenez votre description, vous la précisez, vous générez de nouveau les instructions (Ctrl+Entrée) et vous les renvoyez à l’IA.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Vous corrigez vous-même",
          texte:
            "Une erreur ponctuelle, une référence à retirer, un mot à changer, un méta-commentaire, la mise en forme : c’est plus rapide dans le document téléchargé.",
        },
        {
          titre: "Vous régénérez",
          texte:
            "Mauvais niveau, objectif déplacé, matériel que vous n’avez pas, contrainte oubliée : ajoutez l’information manquante dans le formulaire — niveau, objectif, contraintes, des observables, jamais un nom ni un diagnostic —, puis régénérez. Le nouveau résultat est un nouveau brouillon : repassez la grille en entier.",
        },
        {
          titre: "Vous gardez votre support",
          texte:
            "Si le résultat ne vous aide pas, prenez-y une idée ou deux, ou rien. « La séance finale est la vôtre » : c’est l’étape 5 de la démarche.",
        },
      ],
    },

    { type: "titre", texte: "Exporter et remettre" },
    {
      type: "liste",
      items: [
        "Téléchargement du résultat en .doc, .odt ou .pdf : les deux premiers pour appliquer la mise en forme et finir vos retouches dans Word ou LibreOffice, le PDF pour imprimer ou diffuser une version arrêtée.",
        "Lecture audio du résultat : une autre façon de le relire — une phrase trop longue ou une consigne ambiguë s’entendent.",
        "Agrandissement du texte et mode lecture confortable : pour relire à l’écran un résultat dense sans vous fatiguer.",
        "Planches de pictogrammes : trois mises en page à l’impression — bande, séquentiel ou cartes — en PDF, Word ou LibreOffice (module 6).",
        "Concevoir un QCM : export .json vers Caramel (H5P) — voir le module 3.",
        "Résultat obtenu dans Copilot Chat ? Recollez-le avec « J’ai utilisé une autre IA — coller le résultat » pour profiter de la mise en forme, de la lecture audio et des téléchargements (module 1).",
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "FALC : un projet à faire valider",
      texte:
        "L’instruction FALC le rappelle elle-même : un document n’est officiellement FALC, au sens des règles européennes, que s’il a été relu et validé par des personnes concernées. La version produite est un projet à faire valider ; elle ne peut pas porter le logo européen FALC sans cette relecture.",
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Dites aux élèves d’où vient le support",
      texte:
        "La charte IA du lycée demande la transparence envers les élèves quand un support vient d’une IA. Vous pouvez le dire d’un mot en classe ou par une courte mention sur le document, par exemple : « Support préparé avec l’aide d’une IA, relu et adapté par votre professeur. » Inclus’IA applique la même logique à lui-même : il ne s’attribue jamais un résultat obtenu ailleurs.",
    },

    { type: "titre", texte: "À vous : relisez votre premier résultat" },
    {
      type: "exercice",
      id: "inclusia-m7-exercice-relecture",
      titre: "Relire votre premier résultat",
      consigne:
        "Reprenez un résultat obtenu dans un module précédent, ou générez-en un. Relisez-le avec la grille en huit points, puis notez ce que vous en faites.",
      duree: "8 min",
      etapes: [
        "Ouvrez Inclus’IA (lien en bas de page). Si vous n’avez pas de résultat sous la main, choisissez une tuile sur la page d’accueil, cliquez sur « Remplir avec un exemple », générez les instructions (Ctrl+Entrée) et envoyez-les à l’IA intégrée.",
        "Lisez d’abord les points de vigilance : où vous disent-ils de regarder ?",
        "Repérez, s’il y en a, la partie à remettre à l’élève, les notes pour l’enseignant et la synthèse des 3 gestes prioritaires — un QCM et une planche de pictogrammes n’en ont pas.",
        "Passez la grille en huit points ci-dessus et notez le premier problème trouvé.",
        "Téléchargez le résultat en .doc ou .odt et appliquez la mise en forme recommandée, s’il y en a une ; écoutez un passage avec la lecture audio.",
      ],
      champs: [
        {
          id: "module",
          type: "texte",
          libelle: "Le module utilisé",
          aide: "Ex. : Différenciation, FALC, Dyslexie… Vos réponses restent dans votre navigateur ; n’y écrivez jamais le nom d’un élève.",
        },
        {
          id: "probleme",
          type: "texte-long",
          libelle: "Ce que votre relecture a trouvé",
          aide: "Le point de la grille concerné et le passage : une erreur, une référence inventée, un méta-commentaire, un objectif déplacé… ou « rien ». Sans nom d’élève ni détail qui permettrait de le reconnaître.",
          lignes: 3,
        },
        {
          id: "decision",
          type: "choix",
          libelle: "Ce que vous en faites",
          options: [
            "Je le distribue après corrections",
            "Je le relis avec le professeur de la classe avant qu’il soit remis",
            "Je régénère en précisant le formulaire",
            "Je n’en garde que quelques idées",
            "Je ne l’utilise pas",
          ],
        },
        {
          id: "geste",
          type: "texte-long",
          libelle: "Un geste prioritaire retenu, et son signe d’allègement",
          aide: "Sans nom d’élève : écrivez « élève A » si besoin. Facultatif pour un QCM ou une planche de pictogrammes.",
          lignes: 2,
          facultatif: true,
        },
      ],
      retour: {
        titre: "Ce qu’on observe",
        texte:
          "Si votre relecture a trouvé quelque chose, elle a fait son travail : ce n’est pas un échec de l’outil. Le guide présente la sortie comme un brouillon expert, à relire avant utilisation avec l’élève.",
        points: [
          "Une erreur ponctuelle se corrige dans le document ; un problème de niveau, d’objectif ou de matériel se règle en précisant le formulaire, puis en régénérant.",
          "Quand une partie élève est prévue, elle devrait s’imprimer sans rien retirer : si vous avez dû y enlever un méta-commentaire ou une note pour l’enseignant, un point de la grille n’était pas tenu. Couper pour ajuster à votre classe reste votre travail d’auteur.",
          "Un geste se note avec son signe d’allègement : c’est lui qui dira quand l’adaptation peut commencer à s’estomper.",
          "Avant de distribuer : mise en forme appliquée, traductions relues, et un mot aux élèves sur l’origine du support.",
        ],
      },
      suite: {
        href: "/formations/inclusia/travailler-en-equipe",
        libelle: "Module 8 — Travailler en équipe autour d’un élève",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Fiche mémo",
          href: "/formations/inclusia/ressources/fiche-memo",
          description:
            "La relecture avant de donner un document à un élève, sur une page à imprimer.",
        },
        {
          libelle: "Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "Ce qui se saisit, ce qui ne se saisit jamais — y compris quand vous régénérez.",
        },
        {
          libelle: "Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description:
            "Relire à deux, décider des trois gestes et de leurs signes d’allègement, faire le point à date fixe.",
        },
        {
          libelle: "Rendre un texte ou une activité lisible",
          href: "/formations/inclusia/rendre-un-texte-lisible",
          description:
            "FALC, Aide à la lecture, Allophone : ce que chaque module réécrit, et ce qu’il ne touche pas.",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Relecture humaine systématique, transparence envers les élèves, aucune donnée personnelle.",
        },
        {
          libelle: "Inclus’IA — page d’accueil",
          href: "https://inclusia.forge.apps.education.fr/",
          description: "Les tuiles des vingt modules.",
        },
        {
          libelle: "Guide d’utilisation d’Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/guide/",
          description:
            "Les quatre étapes, les conseils pour de meilleurs résultats et la liste des fonctionnalités.",
        },
        {
          libelle: "Bibliothèque d’instructions",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les vingt instructions complètes : le bloc FORMAT DE SORTIE dit ce que votre résultat doit contenir.",
        },
      ],
    },
  ],
};
