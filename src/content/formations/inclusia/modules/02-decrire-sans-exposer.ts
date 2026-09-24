import type { Module } from "@/content/types";

/**
 * Module 2 — Décrire un besoin sans exposer un élève (15 minutes).
 *
 * Obligatoire pour tous : la règle d’or d’Inclus’IA et la charte IA du lycée,
 * le garde-fou RGPD et ses limites, les trois registres de description
 * (étiquette, interprétation, observable), la description de la classe, la
 * réidentification par recoupement et les documents importés.
 *
 * Tiré des pages « Guide d’utilisation » (Comment ça marche, Conseils,
 * Protection des données, Fonctionnalités) et « Démarche » (principe 2, Ce que
 * le site n’est pas) d’Inclus’IA, des exemples 9, 14 et 16 de la page « Cas
 * d’usage » et des contraintes des instructions Adaptations TSA, Dyslexie,
 * Accompagnement, Expliciter une tâche, Conception CUA et CAA de la
 * bibliothèque, telles qu’en ligne le 24 septembre 2026.
 */
export const decrireSansExposer: Module = {
  slug: "decrire-sans-exposer",
  numero: 2,
  titre: "Décrire un besoin sans exposer un élève",
  sousTitre:
    "La règle d’or, le garde-fou et ses limites, l’observable plutôt que l’étiquette, ce qu’on n’importe jamais",
  duree: 15,
  objectif:
    "Décrire dans Inclus’IA le besoin d’un élève ou d’une classe par ce que vous observez — sans nom, sans diagnostic, sans détail qui permettrait de reconnaître l’élève — en sachant ce que le garde-fou de l’outil fait et ne fait pas.",
  blocs: [
    {
      type: "paragraphe",
      texte:
        "Ce module vaut pour tout le monde : professeurs, coordination, AESH, vie scolaire, santé, direction. Avant de choisir un module d’Inclus’IA, une question compte plus que les autres : qu’allez-vous écrire sur l’élève ? Ce que vous saisissez dans le formulaire est repris dans les instructions envoyées à l’IA. La bonne description est à la fois la plus prudente et la plus utile : ce que vous observez, jamais qui est l’élève.",
    },

    { type: "titre", texte: "La règle d’or" },
    {
      type: "citation",
      texte:
        "La règle d’or : décrire les difficultés observées sans nommer ni catégoriser.",
      source: "Inclus’IA, page Démarche — deuxième principe",
    },
    {
      type: "paragraphe",
      texte:
        "Le guide d’utilisation la précise : « décrivez les difficultés observées sans utiliser de terme médical » et « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant ». Trois choses à ne pas écrire, une seule à écrire : ce que vous observez.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Sans nommer",
          texte:
            "Ni nom, ni prénom, ni initiales, ni surnom — ceux de l’élève comme ceux de ses camarades. Les instructions parlent de « l’élève » : aucune de leurs variables ne demande un nom.",
        },
        {
          numero: "2",
          titre: "Sans catégoriser",
          texte:
            "Ni diagnostic, ni nom de trouble, ni étiquette : pas d’« élève TDAH », pas de « dys », pas de « HP ». Aucun terme médical.",
        },
        {
          numero: "3",
          titre: "Sans permettre de reconnaître",
          texte:
            "Aucun détail qui, ajouté aux autres, désignerait un élève précis : date d’arrivée, pays de provenance, histoire familiale, activité hors du lycée.",
        },
      ],
    },

    { type: "titre", texte: "La même règle que la charte du lycée" },
    {
      type: "paragraphe",
      texte:
        "La charte IA du lycée dit la même chose, pour tous les outils : « Aucune donnée personnelle dans un outil d’IA, quel que soit le compte » ; « Jamais de données personnelles d’élèves (noms, notes, copies, santé, photos) ». Quand il faut distinguer plusieurs élèves, on anonymise : « élève A », « élève B ». Inclus’IA est un outil d’IA : la charte s’y applique, comme elle s’applique à Copilot Chat quand vous y collez les instructions.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Santé et handicap : les informations les plus sensibles",
      texte:
        "Un diagnostic, un traitement, un suivi de soin, un bilan : une information de santé ou de handicap est une donnée particulièrement sensible. Le règlement européen sur la protection des données (RGPD) la protège plus strictement que les autres, et la charte du lycée la cite en toutes lettres. Si vous la connaissez — infirmerie, psychologue, coordination, direction —, elle reste dans les documents de l’établissement. Dans Inclus’IA, vous décrivez ce qui se voit en classe.",
    },

    { type: "titre", texte: "Le garde-fou : un rappel, pas un filet" },
    {
      type: "paragraphe",
      texte:
        "Inclus’IA intègre un garde-fou RGPD. D’après le guide et la page Démarche, il repère les noms propres, les diagnostics médicaux (le guide cite autisme, dyslexie, TDAH…), les adresses postales et électroniques et les numéros de téléphone. Quand il en trouve, un avertissement orange s’affiche pour vous inviter à la vigilance.",
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "L’envoi n’est pas bloqué",
      texte:
        "Le guide est explicite : « L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. » La page Démarche en fait un principe : « Aucune donnée d’élève/étudiant ne quitte votre navigateur sans votre validation. » La validation, c’est vous. Si l’avertissement orange s’affiche, ne passez pas outre : reformulez.",
    },
    {
      type: "paragraphe",
      texte: "Ce que le garde-fou ne fait pas :",
    },
    {
      type: "liste",
      items: [
        "Une combinaison de détails qui désigne un élève — une classe, une date d’arrivée, une activité — ne fait pas partie de ce que le guide et la page Démarche disent qu’il détecte : ne comptez pas sur lui pour la signaler.",
        "Il appartient au formulaire d’Inclus’IA. Quand vous copiez les instructions pour les coller dans une autre IA, il ne vous suit pas, et ce que vous avez laissé passer part avec elles. D’où le rappel du guide : avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie.",
        "Ni le guide ni la page Démarche ne disent qu’il examine le contenu d’un document importé : ce que contient un PDF ou une image, c’est à vous de le vérifier.",
      ],
    },
    {
      type: "quiz",
      id: "inclusia-m2-quiz-garde-fou",
      consigne:
        "Vrai ou faux ? Vérifiez ce que vous savez du garde-fou avant d’aller plus loin.",
      items: [
        {
          affirmation:
            "Si vous écrivez un diagnostic médical dans le formulaire, Inclus’IA refuse d’envoyer les instructions.",
          reponse: false,
          explication:
            "Un avertissement orange s’affiche, mais le guide le dit en toutes lettres : « L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. » C’est à vous de reformuler.",
        },
        {
          affirmation:
            "Une fois les instructions collées dans Copilot Chat, le garde-fou d’Inclus’IA continue de surveiller ce que vous envoyez.",
          reponse: false,
          explication:
            "Le garde-fou fait partie du formulaire d’Inclus’IA : c’est là qu’il vous alerte, avant l’envoi. Dans une autre IA, la vérification vous revient entièrement — le guide rappelle qu’avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie.",
        },
        {
          affirmation:
            "Une description sans nom ni diagnostic peut quand même permettre de reconnaître un élève.",
          reponse: true,
          explication:
            "La règle du guide ne vise pas que le nom : elle vise toute « information permettant d’identifier » un élève. Une classe, une date d’arrivée et une activité, ensemble, suffisent souvent.",
        },
      ],
    },

    { type: "titre", texte: "Trois registres pour décrire un élève" },
    {
      type: "paragraphe",
      texte:
        "Le même élève peut être décrit de trois façons. Une seule donne à l’IA de quoi travailler sans rien dire de lui. Le guide le résume : « Plus vous êtes précis, meilleur sera le résultat » — précis sur la situation, pas sur la personne.",
    },
    {
      type: "tableau",
      entetes: ["Registre", "Ce que c’est", "Exemple", "Dans Inclus’IA"],
      lignes: [
        [
          "Étiquette ou diagnostic",
          "Un nom de trouble ou une catégorie",
          "« un élève TDAH » ; « Élève TSA — voir avec l’AESH »",
          "À ne pas saisir. Le garde-fou signale les diagnostics médicaux, et plusieurs instructions interdisent à l’IA d’en poser ou d’en confirmer un. L’étiquette ne dit rien de ce qui se passe en classe.",
        ],
        [
          "Interprétation",
          "Une intention ou un état intérieur prêté à l’élève",
          "« est agité » ; « provoque » ; « ne veut pas travailler »",
          "À reformuler. L’instruction Accompagnement demande à l’IA de reformuler en observable « tout comportement décrit par l’enseignant en termes interprétatifs » : faites-le vous-même, vous savez ce que vous avez vu.",
        ],
        [
          "Observable",
          "Ce qui se voit et s’entend",
          "« se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée »",
          "Ce qu’il faut écrire. L’instruction Adaptations TSA part de là : observable → besoin → adaptations.",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "L’exemple 16 de la page Cas d’usage part d’une ligne que beaucoup d’équipes ont déjà écrite : « Élève très agité, provoque, ne veut rien faire. Sanctions sans effet. » La page présente ainsi la situation : « Ce qui manque n’est pas la volonté : c’est une description assez précise pour pouvoir agir. » L’instruction Accompagnement dit ce qu’une telle description contient : « la situation déclenchante, le comportement lui-même, sa fréquence, sa durée, ce qui suit ». Par exemple :",
    },
    {
      type: "liste",
      items: [
        "La situation — quand, pendant quelle activité : pendant le travail écrit, au changement d’activité.",
        "Le comportement — ce qui se voit et s’entend, sans intention prêtée : se lève et circule, ne commence pas seul.",
        "La fréquence — combien de fois : environ quatre fois par séance, à chaque évaluation écrite.",
        "La durée — combien de temps : une dizaine de minutes, jusqu’à la fin de l’exercice.",
        "Ce qui suit — ce qui se passe ensuite : reprend le travail quand la première étape est amorcée.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Pour une difficulté d’attention, le guide donne le premier pas : « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ». Ajoutez ensuite la situation, la fréquence et, si vous le savez, ce qui aide déjà, par exemple : « décroche au bout d’une dizaine de minutes de cours dialogué ; se remet au travail quand la consigne est écrite au tableau ».",
    },
    {
      type: "paragraphe",
      texte:
        "Inclus’IA ne pose pas d’étiquette : la page Démarche le dit — « Ce n’est pas un outil de diagnostic » — et les instructions le rappellent à l’IA :",
    },
    {
      type: "liste",
      items: [
        "Adaptations TSA : « Ne JAMAIS poser ni confirmer de diagnostic — partir uniquement des comportements et fonctionnements observés décrits par l’enseignant ».",
        "Dyslexie : le diagnostic d’un trouble spécifique des apprentissages « relève des professionnels de santé (médecin, orthophoniste, neuropsychologue) ».",
        "Accompagnement : ne jamais « suggérer un trouble (TDAH, troubles du comportement…) ».",
        "Expliciter une tâche : « Ne jamais désigner ni catégoriser les élèves supposés concernés ».",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Le partage des rôles",
      texte:
        "Les instructions Dyslexie et Accompagnement s’appuient sur les recommandations de la Haute Autorité de Santé, qui « réservent le repérage et le diagnostic aux professionnels de santé et confient à l’école la description des observables et l’aménagement pédagogique ». À l’école, donc, l’observable. Choisir la tuile Adaptations TSA ou Dyslexie n’est pas écrire un diagnostic : dans les champs, vous décrivez ce que vous observez (module 5).",
    },

    { type: "titre", texte: "Décrire la classe" },
    {
      type: "paragraphe",
      texte:
        "Pour les modules qui portent sur une séance ou une consigne, c’est surtout la classe que vous décrivez. Le guide donne l’exemple : « CM1, 25 élèves/étudiants dont 3 avec PAP » est plus utile que « classe ordinaire ». Il demande aussi la matière, le niveau et l’objectif pédagogique — « L’IA calibre sa réponse en fonction » — et vos contraintes : pas de tablettes, salle fixe, temps limité.",
    },
    {
      type: "tableau",
      entetes: ["Trop vague", "Plus utile — et toujours anonyme"],
      lignes: [
        [
          "« classe ordinaire »",
          "« 4e, 28 élèves dont 3 avec PAP ; 5 lisent encore lentement à voix haute »",
        ],
        [
          "« classe difficile »",
          "« 1re, 30 élèves ; pendant l’exercice écrit de fin de séance, environ un tiers de la classe s’arrête avant la deuxième question »",
        ],
        [
          "« élèves faibles en rédaction »",
          "« 2nde : la moitié de la classe ne démarre pas seule le paragraphe argumenté ; tous démarrent quand un exemple est au tableau »",
        ],
        [
          "« peu de moyens »",
          "« salle sans ordinateurs, pas de tablettes, séance de 55 minutes »",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Des nombres, pas des portraits",
      texte:
        "Compter les élèves concernés (« dont 3 avec PAP ») aide l’IA et ne désigne personne. Les décrire un par un, avec leurs particularités, finit par les désigner. Si un besoin concerne un seul élève, passez par un module centré sur un élève et décrivez des observables.",
    },

    { type: "titre", texte: "Sans nom ne veut pas dire anonyme" },
    {
      type: "paragraphe",
      texte:
        "Le guide n’interdit pas seulement le nom : il interdit toute « information permettant d’identifier » un élève. Dans un établissement, une combinaison de détails suffit. « Élève de Terminale arrivé du Canada en janvier, qui vit chez ses grands-parents » : aucun nom, et pourtant toute la salle des professeurs sait de qui il s’agit. La règle tient en une ligne : ne garder que ce qui sert l’adaptation.",
    },
    {
      type: "tableau",
      entetes: [
        "Gardez : cela change l’adaptation",
        "Retirez : cela ne change rien à l’adaptation",
      ],
      lignes: [
        [
          "Le niveau, la discipline, l’objectif",
          "Nom, prénom, initiales, surnom — de l’élève comme de ses camarades",
        ],
        [
          "La situation où la difficulté apparaît",
          "Date de naissance, date d’arrivée, pays de provenance",
        ],
        [
          "Ce que vous observez : comportement, fréquence, durée, ce qui suit",
          "Histoire familiale, événement de vie, situation des parents",
        ],
        [
          "Ce qui aide déjà en classe",
          "Diagnostic, traitement, suivi de soin, bilan",
        ],
        [
          "Ce que le module demande : le niveau de français et la langue maternelle (Allophone), le mode de communication (Surdité)",
          "Activités hors du lycée, signes physiques, tout détail qui fait dire « c’est lui »",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Le test du collègue",
      texte:
        "Avant de générer, relisez votre description comme si un collègue du lycée la lisait par-dessus votre épaule. Peut-il dire de qui il s’agit ? Alors retirez un détail — celui qui ne change rien à l’adaptation — et relisez encore.",
    },

    { type: "titre", texte: "Les documents que vous importez" },
    {
      type: "paragraphe",
      texte:
        "Inclus’IA accepte l’import de documents (PDF, Word, image…) et la dictée au micro, transcrite sans service tiers. Un document importé ne reste pas à côté : l’instruction Conception CUA, par exemple, prévoit des documents « fournis en fin de message » et demande à l’IA de les traiter comme « la matière première de la séance ». Ce qu’ils contiennent part donc vers l’IA avec vos mots. Et ce que vous dictez est transcrit en texte : même règle qu’au clavier.",
    },
    {
      type: "tableau",
      entetes: [
        "Importez : un support de cours",
        "N’importez jamais : un document sur un élève",
      ],
      lignes: [
        [
          "Le texte, la consigne ou l’exercice à adapter",
          "Une copie d’élève, même sans le nom",
        ],
        [
          "Votre fiche de séance, votre évaluation vierge",
          "Un plan d’accompagnement (PAP, PPS, PPRE…) ou le compte rendu d’une réunion d’équipe",
        ],
        [
          "Un graphique, un schéma, une carte tirés de vos supports",
          "Un bilan orthophonique, psychologique ou médical",
        ],
        [
          "La page du manuel que vous projetez",
          "Une photo où l’on voit un élève, son visage ou son écriture",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "Relisez avant d’importer",
      texte:
        "Une image montre plus qu’on ne croit : un nom en haut d’une feuille, une liste de classe au mur, un visage au fond de la salle. Recadrez, ou importez le fichier d’origine plutôt qu’une photo. Pour un document comme pour un texte saisi, la vérification est la vôtre.",
    },

    { type: "titre", texte: "Cas pratiques : se saisit, à reformuler ou jamais ?" },
    {
      type: "casPratiques",
      id: "inclusia-m2-cas-saisie",
      consigne:
        "Pour chaque situation, choisissez. « Je peux le saisir » : tel quel. « À reformuler » : le besoin est légitime, mais la formulation doit changer avant de générer. « Jamais » : cela n’entre pas dans l’outil, quelle que soit la formulation.",
      libelles: {
        autorise: "Je peux le saisir",
        encadre: "À reformuler",
        interdit: "Jamais",
      },
      cas: [
        {
          situation:
            "Dans le module Conception CUA, vous décrivez les profils de la classe : « 27 élèves dont 2 avec PAP et 4 qui lisent encore lentement ; séance de 55 minutes, salle sans ordinateurs. »",
          verdict: "autorise",
          pourquoi:
            "C’est la description de classe que recommande le guide : un effectif, des besoins comptés, des contraintes réelles. Compter les élèves concernés ne désigne personne.",
        },
        {
          situation:
            "Dans le module Accompagnement, vous écrivez : « Rami, 5e B, est très agité et provoque ses camarades. »",
          verdict: "interdit",
          pourquoi:
            "Un prénom et une classe : l’élève est identifié, et un prénom n’entre jamais dans l’outil. « Agité » et « provoque » sont en plus des interprétations : décrivez la situation, le comportement, sa fréquence — « se lève et circule pendant le travail écrit, environ quatre fois par séance ».",
        },
        {
          situation:
            "Dans le module Dyslexie, vous décrivez l’élève ainsi : « Élève dyslexique, très lent. »",
          verdict: "encadre",
          verdictLibelle: "À reformuler",
          pourquoi:
            "C’est un terme médical — le guide cite la dyslexie parmi ceux que le garde-fou signale — et il n’apprend rien à l’IA sur ce qui se passe en classe. Décrivez plutôt : « lit lentement à voix haute, s’arrête sur les mots longs ; comprend le texte quand on le lui lit ; ne finit pas les évaluations écrites ».",
        },
        {
          situation:
            "Pour que l’IA « tienne compte de tout », vous importez le plan d’accompagnement d’un élève.",
          verdict: "interdit",
          pourquoi:
            "Un plan d’accompagnement est un document sur un élève, avec des informations de santé : il n’entre jamais dans l’outil. Relisez-le, puis décrivez avec vos mots les besoins observés en classe.",
        },
        {
          situation:
            "Pour le module Adaptations TSA, vous retenez ces observables : « reste assis quand la classe change d’activité ; ne commence pas seul ; sort de la salle quand le bruit monte. »",
          verdict: "autorise",
          pourquoi:
            "Trois observables, aucun nom, aucune interprétation : c’est la description dont part l’exemple 9 de la page Cas d’usage. Une fréquence ou une durée la rendraient plus précise encore.",
        },
        {
          situation:
            "Dans le formulaire, vous écrivez : « Élève de 1re arrivé du Canada en janvier, qui vit chez ses grands-parents et nage en équipe nationale ; décroche pendant le cours dialogué. »",
          verdict: "encadre",
          verdictLibelle: "À reformuler",
          pourquoi:
            "Aucun nom, et pourtant tout le lycée le reconnaîtrait. L’arrivée, la famille et le sport ne changent rien à l’adaptation : gardez « 1re » et « décroche pendant le cours dialogué », puis précisez au bout de combien de temps et ce qui suit.",
        },
        {
          situation:
            "Pour adapter le prochain devoir, vous photographiez la copie d’un élève et vous l’importez.",
          verdict: "interdit",
          pourquoi:
            "La charte du lycée l’exclut en toutes lettres : « Jamais de données personnelles d’élèves (noms, notes, copies, santé, photos) ». Importez le sujet vierge et décrivez les difficultés observées.",
        },
        {
          situation:
            "Pour une bande CAA, vous tapez la phrase : « Je veux jouer avec Maya. »",
          verdict: "encadre",
          verdictLibelle: "À reformuler",
          pourquoi:
            "Le prénom d’un camarade est une donnée personnelle, comme celui de l’élève. Écrivez « mon camarade ». L’instruction CAA le dit d’ailleurs : aucun pictogramme ne correspond à un prénom, et l’enseignant le remplace par une photo — ajoutez-la sur la planche imprimée, hors de l’outil.",
        },
      ],
    },

    { type: "titre", texte: "À vous : de l’étiquette à l’observable" },
    {
      type: "exercice",
      id: "inclusia-m2-etiquette-observable",
      titre: "De l’étiquette à l’observable",
      consigne:
        "Réécrivez trois descriptions dans le registre de l’observable : la situation, le comportement, sa fréquence ou sa durée, ce qui suit. Pour les deux premières, imaginez des faits plausibles : c’est la forme qui compte. Puis faites l’essai dans Inclus’IA.",
      duree: "6 min",
      etapes: [
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile Accompagnement.",
        "Si le formulaire demande d’autres informations, « Remplir avec un exemple » les complète ; remplacez ensuite la description des comportements observés par votre première réécriture — sans nom, sans diagnostic.",
        "Générez les instructions (Ctrl+Entrée) et retrouvez votre phrase dans les instructions affichées : c’est ce que l’IA recevra.",
        "Facultatif : ajoutez le mot « TDAH » et repérez à quel moment l’avertissement orange apparaît. Retirez-le ensuite. Inutile d’envoyer quoi que ce soit à l’IA.",
      ],
      champs: [
        {
          id: "agite",
          type: "texte-long",
          libelle:
            "« Élève très agité, provoque, ne veut rien faire. » — votre réécriture",
          aide: "Vos réponses restent dans ce navigateur : n’y écrivez jamais le nom d’un élève, ni un détail qui le ferait reconnaître.",
          lignes: 3,
        },
        {
          id: "tsa",
          type: "texte-long",
          libelle: "« Élève TSA — voir avec l’AESH. » — votre réécriture",
          aide: "Pensez aux moments de la journée : changements d’activité, entrée dans la tâche, bruit. Jamais de nom d’élève.",
          lignes: 3,
        },
        {
          id: "vous",
          type: "texte-long",
          libelle:
            "Une description que vous avez déjà écrite ou entendue — puis sa réécriture",
          aide: "Par exemple « élève dys », « élève HP qui s’ennuie », « classe faible ». Jamais de nom d’élève, ni dans l’étiquette ni dans la réécriture.",
          lignes: 4,
        },
        {
          id: "test",
          type: "choix",
          libelle:
            "Le test du collègue : dans vos réécritures, un collègue du lycée pourrait-il reconnaître l’élève ?",
          options: [
            "Non, rien ne permet de le reconnaître",
            "Peut-être : je retire un détail",
            "Oui : je reprends la description",
          ],
        },
      ],
      retour: {
        titre: "Les reformulations des sources",
        texte:
          "Comparez avec les réécritures que proposent les pages d’Inclus’IA. Celles de la page Cas d’usage sont illustratives — « ce ne sont pas des captures de génération » — et les vôtres seront différentes : c’est normal. Ce qui compte, c’est le registre.",
        points: [
          "« Élève très agité, provoque, ne veut rien faire » devient, dans l’exemple 16 de la page Cas d’usage : « se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée » — aucune intention prêtée, aucune interprétation.",
          "« Élève TSA — voir avec l’AESH » devient, dans l’exemple 9 : un élève qui reste bloqué au moment des changements d’activité, ne commence pas sans qu’on le sollicite et quitte la salle quand le niveau sonore monte. Trois observables, rangés ensuite par domaine : transitions, entrée dans la tâche, sensorialité.",
          "Pour « un élève/étudiant TDAH », le guide propose « un élève/étudiant qui a du mal à se concentrer » ; précisez ensuite dans quelle situation, à quelle fréquence, pendant combien de temps.",
          "Votre phrase se retrouve dans les instructions générées : si elle contient une étiquette, une interprétation ou un détail reconnaissable, l’IA les reçoit aussi.",
        ],
      },
      suite: {
        href: "/formations/inclusia/ressources/observables",
        libelle: "Décrire sans étiqueter : la banque de formulations",
      },
    },

    { type: "titre", texte: "Pour aller plus loin" },
    {
      type: "liens",
      liens: [
        {
          libelle: "Décrire sans étiqueter",
          href: "/formations/inclusia/ressources/observables",
          description:
            "La banque de formulations, domaine par domaine : au lieu d’écrire…, écrivez plutôt…",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Nos obligations, dont la protection des données et l’anonymisation « élève A », « élève B ».",
        },
        {
          libelle: "Module 5 — Répondre à un besoin particulier",
          href: "/formations/inclusia/repondre-a-un-besoin",
          description:
            "Les huit modules centrés sur un élève : de l’observable aux adaptations.",
        },
        {
          libelle: "Module 8 — Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description:
            "Partager des observables en équipe : le nom de l’élève reste dans les documents de l’établissement.",
        },
        {
          libelle: "Guide d’utilisation d’Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/guide/",
          description:
            "La rubrique Protection des données et les conseils pour de meilleurs résultats.",
        },
      ],
    },
  ],
};
