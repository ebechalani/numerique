import type { Module } from "@/content/types";

/**
 * Module 8 — Travailler en équipe autour d’un élève (15 minutes).
 *
 * Qui fait quoi quand plusieurs adultes se servent d’Inclus’IA pour un même
 * élève : les partenaires que rappellent les instructions, les rôles de
 * chacun, la démarche d’équipe de l’observation au point d’étape.
 * Tiré des pages « Bibliothèque d’instructions » (partenaires, diagnostic,
 * observables, trois gestes, paliers), « Démarche » (le professeur garde la
 * main), « Guide d’utilisation » (règle d’or, points de vigilance,
 * téléchargement) et « Cas d’usage » (cas 9, 16, 18 et 19) d’Inclus’IA, telles
 * qu’en ligne le 24 septembre 2026.
 */
export const travaillerEnEquipe: Module = {
  slug: "travailler-en-equipe",
  numero: 8,
  titre: "Travailler en équipe autour d’un élève",
  sousTitre:
    "Observer ensemble, décrire sans nommer, relire à deux, décider de trois gestes et faire le point — chacun dans son rôle",
  duree: 15,
  objectif:
    "Conduire avec les adultes qui suivent un élève un cycle complet — observation partagée, choix du module, relecture à deux, trois gestes prioritaires, point d’étape — en sachant qui fait quoi et sans que le nom de l’élève entre jamais dans l’outil.",
  blocs: [
    { type: "titre", texte: "Un élève, plusieurs adultes" },
    {
      type: "paragraphe",
      texte:
        "Autour d’un élève à besoins particuliers, plusieurs adultes interviennent : les professeurs de ses disciplines, l’AESH, la vie scolaire, les personnels de santé, la coordination, la direction. Chacun voit une partie de la situation — en classe, en accompagnement, à la cantine, pendant une sortie. Quand ces regards restent séparés, chacun improvise de son côté. Dans un exemple de la page Cas d’usage, le point de départ tient en une ligne du cahier de textes : « Élève TSA — voir avec l’AESH. » Aucune adaptation écrite.",
    },
    {
      type: "citation",
      texte:
        "L’équipe tourne entre sanction et négociation. Ce qui manque n’est pas la volonté : c’est une description assez précise pour pouvoir agir.",
      source:
        "Inclus’IA, page Cas d’usage — cas 16, Fiche d’accompagnement comportemental (exemple illustratif)",
    },
    {
      type: "paragraphe",
      texte:
        "C’est là qu’Inclus’IA peut servir une équipe. Il demande une description faite de faits observés : l’équipe doit donc se mettre d’accord sur ce qu’elle a vu. Il produit un brouillon que plusieurs personnes peuvent relire. Et pour les modules centrés sur un élève, le résultat comprend une synthèse de trois gestes prioritaires, chacun accompagné du signe observable qui dira qu’on peut l’alléger. L’outil ne coordonne pas à votre place : il donne à l’équipe un support commun.",
    },
    {
      type: "paragraphe",
      texte:
        "La page Démarche le rappelle : sur les cinq étapes de la chaîne, trois vous appartiennent — décrire, relire, adapter. En équipe, ces trois étapes se partagent : on décrit à plusieurs, on relit à deux, mais la séance finale reste celle du professeur de la classe.",
    },

    { type: "titre", texte: "Les partenaires que rappellent les instructions" },
    {
      type: "paragraphe",
      texte:
        "Les huit instructions de la famille « Répondre à un besoin particulier » — celles des modules centrés sur un élève — demandent toutes à l’IA de nommer les partenaires avec qui se coordonner. Celle du module Adaptations TSA termine même la fiche par un rappel des partenaires à mobiliser. Ne vous étonnez donc pas de les voir apparaître dans le résultat.",
    },
    {
      type: "tableau",
      entetes: ["Module", "Partenaires cités par l’instruction"],
      lignes: [
        [
          "Adaptations TSA",
          "La famille, l’enseignant référent (chargé du suivi des élèves handicapés d’un secteur), l’AESH et, le cas échéant, le professeur ressource TSA ou l’équipe de suivi de la scolarisation (ESS)",
        ],
        [
          "Surdité",
          "L’enseignant spécialisé, l’interprète en LSF ou le codeur LPC, l’ESS",
        ],
        [
          "Déficience visuelle",
          "L’enseignant spécialisé, le service de transcription, l’ESS",
        ],
        [
          "Handicap moteur",
          "L’ergothérapeute, l’enseignant spécialisé, le cadre de scolarisation en vigueur (PAP ou PPS)",
        ],
        [
          "Maths & dyscalculie",
          "L’enseignant spécialisé, le RASED (dispositif du premier degré), le cas échéant l’ergothérapeute, le cadre de scolarisation (PAP ou PPS)",
        ],
        [
          "Dyslexie",
          "La famille, l’orthophoniste, l’enseignant spécialisé, dans le cadre du PAP (décidé par l’établissement sur avis du médecin scolaire)",
        ],
        [
          "Haut potentiel",
          "La famille et, le cas échéant, le psychologue de l’Éducation nationale",
        ],
        [
          "Accompagnement",
          "Les ressources disponibles (AESH, RASED, psychologue de l’Éducation nationale, enseignant spécialisé), la famille, l’équipe éducative ; en cas de persistance, une orientation vers le médecin scolaire ou le psychologue scolaire",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces instructions partagent une autre règle, qui dit bien qui fait quoi : l’IA ne pose jamais de diagnostic. Les instructions Dyslexie et Accompagnement s’appuient pour cela sur les recommandations de la Haute Autorité de Santé, qui…",
    },
    {
      type: "citation",
      texte:
        "… réservent le repérage et le diagnostic aux professionnels de santé et confient à l’école la description des observables et l’aménagement pédagogique.",
      source:
        "Instructions Dyslexie et Accompagnement — bibliothèque d’instructions d’Inclus’IA",
    },
    {
      type: "paragraphe",
      texte:
        "C’est la répartition à garder en tête. À l’équipe éducative, les faits observés et les adaptations. Aux professionnels de santé, le diagnostic. À l’IA, un brouillon d’adaptations construit à partir de vos faits — rien de plus.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Et au lycée ?",
      texte:
        "Les instructions citent le cadre français : MDPH, PPS, PAP, ESS, enseignant référent, RASED… Au lycée, établissement français à l’étranger, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente. Lisez donc ces rappels comme une liste de métiers auxquels penser, pas comme un annuaire : qui tient chaque rôle dépend de l’organisation du lycée.",
    },

    { type: "titre", texte: "Les rôles de chacun" },
    {
      type: "paragraphe",
      texte:
        "Voici une répartition des rôles autour d’Inclus’IA. Elle décrit des fonctions, pas des personnes : selon l’organisation du lycée, une même personne peut en tenir plusieurs, et l’équipe de direction précise qui fait quoi.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "Le professeur de la classe",
          texte:
            "Auteur de sa séance — « L’auteur ou l’autrice de la séance, c’est vous », dit la page Démarche. Il choisit le support à adapter, vérifie l’exactitude et l’exigence disciplinaires, et valide tout ce qui sera remis à l’élève.",
        },
        {
          titre: "Coordination et suivi des élèves à besoins particuliers",
          texte:
            "Rassemble les observations, aide à choisir le module, veille à ce qu’une seule description circule. Garde la trace des gestes décidés et de la date du point dans les documents de l’établissement — jamais dans l’outil.",
        },
        {
          titre: "L’AESH",
          texte:
            "Au plus près de l’élève, observe finement : dans quelle situation, combien de fois, combien de temps, ce qui suit. Ces observations nourrissent la description commune. Contribue, avec le professeur, à la mise en œuvre des adaptations.",
        },
        {
          titre: "La vie scolaire",
          texte:
            "Voit l’élève hors de la classe : cantine, transitions, sorties. C’est souvent là que servent les planches de pictogrammes — tableau de communication pour la cantine, séquentiel pour une routine, scénario social pour préparer une sortie.",
        },
        {
          titre: "La santé",
          texte:
            "Infirmerie, psychologue. Les instructions le rappellent : le diagnostic relève des professionnels de santé — ni de l’équipe pédagogique, ni de l’IA. Aucune information de santé n’entre dans l’outil. Ces personnels aident l’équipe à décrire des besoins plutôt que des troubles.",
        },
        {
          titre: "La direction",
          texte:
            "Garantit le cadre : la charte IA du lycée, les plans d’accompagnement selon les procédures de l’établissement, le lien avec la famille — que plusieurs instructions citent parmi les premiers partenaires.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La cohérence entre adultes compte autant que le support. Dans l’exemple du séquentiel illustré de la page Cas d’usage, un passage aux toilettes demande « quatre relances, tous les jours, par un adulte différent ». Le séquentiel transfère ce rappel de l’adulte vers l’environnement — à condition que tous les adultes renvoient au même support, de la même façon.",
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "La règle de toute l’équipe",
      texte:
        "Le nom de l’élève n’apparaît que dans les documents de l’établissement, jamais dans l’outil — ni dans Inclus’IA, ni dans l’IA où vous collez les instructions. Dans le formulaire, on écrit « un élève de 2de » ; entre vous, « élève A » ; le lien entre les deux reste dans les dossiers de l’établissement. Tout ce que le module 2 a posé vaut pour chacun : la règle d’or, le garde-fou qui avertit sans bloquer l’envoi, les documents qu’on n’importe jamais.",
    },
    {
      type: "casPratiques",
      id: "inclusia-m8-cas-qui-fait-quoi",
      consigne:
        "Qui peut faire quoi ? Pour chaque situation, choisissez : « Oui », cette personne peut le faire ; « Avec le professeur », oui, mais avec le professeur de la classe ; « Non », personne ne devrait le faire.",
      libelles: {
        autorise: "Oui",
        encadre: "Avec le professeur",
        interdit: "Non",
      },
      cas: [
        {
          situation:
            "L’AESH note, pendant trois séances, dans quelles situations l’élève décroche, combien de fois, et ce qui se passe ensuite, pour préparer la description commune.",
          verdict: "autorise",
          verdictLibelle: "Oui",
          pourquoi:
            "C’est le cœur de son rôle : observer finement. Situation, fréquence, durée, ce qui suit : c’est exactement le registre que demandent les instructions, qui écartent toute interprétation de l’intention ou de l’état intérieur de l’élève. Ces notes restent sans nom.",
        },
        {
          situation:
            "L’AESH génère avec le module Dyslexie une version aérée du contrôle de SVT et la distribue à l’élève le jour même, sans que le professeur l’ait vue.",
          verdict: "encadre",
          verdictLibelle: "Avec le professeur",
          pourquoi:
            "Préparer un brouillon, oui ; le remettre à l’élève sans le professeur, non. Le guide est net : « À aucun moment le site ne produit un document prêt à donner à l’élève ». Seul le professeur peut vérifier que la version garde le même contenu et la même exigence — ce que l’instruction Dyslexie impose — et c’est lui qui valide ce que reçoit l’élève.",
        },
        {
          situation:
            "La coordination passe la consigne de la prochaine évaluation de physique-chimie dans le module Différenciation et prépare les trois versions pour la classe, sans en parler au professeur.",
          verdict: "encadre",
          verdictLibelle: "Avec le professeur",
          pourquoi:
            "Les trois versions doivent viser le même objectif d’apprentissage, rattaché au référentiel du niveau : c’est le professeur de la discipline qui peut le vérifier. La page Démarche le rappelle : l’enseignant reste l’auteur de sa séance. Proposer l’outil, oui ; décider à sa place, non.",
        },
        {
          situation:
            "La vie scolaire prépare avec le module Tableau de communication une grille de mots pour le repas à la cantine, pour un élève qui ne s’exprime pas oralement, et la relit avant de l’imprimer.",
          verdict: "autorise",
          verdictLibelle: "Oui",
          pourquoi:
            "La cantine est une situation hors classe, que la vie scolaire connaît le mieux — c’est d’ailleurs l’exemple de la page Cas d’usage pour ce module. Chaque case reste modifiable avant l’impression. Montrez ensuite la grille aux autres adultes, pour que tous l’utilisent de la même façon.",
        },
        {
          situation:
            "À l’infirmerie, on conseille au professeur d’écrire dans le formulaire « trouble dys diagnostiqué, suivi en orthophonie », pour que les adaptations soient plus justes.",
          verdict: "interdit",
          verdictLibelle: "Non",
          pourquoi:
            "C’est une information de santé : elle ne se saisit pas. Le guide demande de décrire les difficultés observées sans terme médical, et l’avertissement du garde-fou, s’il s’affiche, ne bloque pas l’envoi : c’est à vous de ne pas l’écrire. Les adaptations n’en seraient pas plus justes : les instructions partent des observables, jamais d’un diagnostic.",
        },
        {
          situation:
            "La psychologue aide l’équipe à remplacer « il est anxieux » par ce qu’on voit : « pose trois fois la même question avant de commencer un travail écrit ».",
          verdict: "autorise",
          verdictLibelle: "Oui",
          pourquoi:
            "Aider à passer de l’interprétation à l’observable est un vrai rôle d’appui. Les instructions demandent de décrire ce qui se voit et s’entend, sans interpréter l’état intérieur de l’élève : « il est anxieux » est une interprétation, la question répétée est un fait.",
        },
        {
          situation:
            "Un professeur décrit un élève dans le module Accompagnement et ajoute à la fin : « Est-ce que cela ressemble à un TDAH ? »",
          verdict: "interdit",
          verdictLibelle: "Non",
          pourquoi:
            "Ce n’est le rôle ni du professeur ni de l’IA. La page Démarche le dit : le site n’est pas un outil de diagnostic. L’instruction Accompagnement interdit à l’IA de suggérer un trouble, car le diagnostic relève exclusivement des professionnels de santé ; elle lui demande plutôt de rappeler qu’en cas de persistance des comportements, une orientation vers le médecin scolaire ou le psychologue scolaire est recommandée.",
        },
        {
          situation:
            "Pour gagner du temps, la coordination importe dans le formulaire le plan d’accompagnement de l’élève, en PDF.",
          verdict: "interdit",
          verdictLibelle: "Non",
          pourquoi:
            "On importe des supports de cours, jamais un document de suivi. Un plan d’accompagnement contient des informations qui identifient l’élève et touchent à sa santé : il reste dans les documents de l’établissement. On en tire à la main les besoins observés, sans nom, et on les décrit dans le formulaire.",
        },
        {
          situation:
            "Le professeur et l’AESH relisent ensemble la fiche d’accompagnement obtenue ; le professeur retire une stratégie impossible à tenir dans sa classe et en reformule une autre.",
          verdict: "autorise",
          verdictLibelle: "Oui",
          pourquoi:
            "C’est exactement la relecture à deux. La page Démarche décrit la sortie de l’IA comme un brouillon expert : « Vous lisez, vous coupez, vous ajustez, vous contextualisez. » L’AESH apporte ce qu’il ou elle observe ; le professeur décide de ce qui entre dans sa classe.",
        },
      ],
    },

    { type: "titre", texte: "La démarche d’équipe en six étapes" },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Observer ensemble",
          texte:
            "Chacun note ce qu’il voit là où il voit l’élève : en classe, en accompagnement, à la cantine. La situation, le comportement, sa fréquence, sa durée, ce qui suit. Puis l’équipe se met d’accord sur une seule description, sans nom ni détail rare.",
        },
        {
          titre: "Choisir le module",
          texte:
            "Partez de ce que vous avez sous la main : une séance, un texte, un besoin observé, un élève qui n’a pas la parole. Choisir la tuile Adaptations TSA ou Dyslexie n’est pas écrire un diagnostic : dans les champs, on décrit des observables.",
        },
        {
          titre: "Générer",
          texte:
            "Une seule personne remplit le formulaire avec la description commune. Les instructions générées s’affichent en clair avant l’envoi : relisez-les ensemble, c’est ce qui partira vers l’IA.",
        },
        {
          titre: "Relire à deux",
          texte:
            "Le professeur de la classe et la personne qui connaît le mieux la situation lisent le résultat, en commençant par les points de vigilance, qui disent où regarder en premier. Le professeur valide la partie destinée à l’élève. La relecture détaillée est au module 7.",
        },
        {
          titre: "Décider des trois gestes",
          texte:
            "Pour les modules centrés sur un élève, le résultat comprend la synthèse « 3 gestes prioritaires à mettre en place dès demain », chacun suivi du signe observable qui dira qu’on peut l’alléger. L’équipe les garde, les remplace ou les reformule, et décide qui les porte : les mêmes pour tous les adultes.",
        },
        {
          titre: "Faire le point à date fixe",
          texte:
            "À la date prévue, on regarde les signes observables : s’ils sont là, on allège ; sinon, on ajuste la description et on recommence. Pour une fiche d’accompagnement, on ne passe à un palier supérieur qu’après avoir constaté, sur des indicateurs observables, que le précédent ne suffit pas.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Lire l’instruction ensemble",
      texte:
        "Avant une réunion, ouvrez la bibliothèque d’instructions d’Inclus’IA (lien en bas de page) : chaque instruction s’y lit sans rien remplir, par blocs ou en texte brut. Lire ensemble ce qu’elle demande à l’IA — observables, paliers, partenaires — met l’équipe d’accord sur ce qu’on attend du résultat. La page Démarche présente d’ailleurs le site comme un support de formation pour qui accompagne des équipes.",
    },
    {
      type: "paragraphe",
      texte:
        "Pour partager le résultat, téléchargez-le en .doc, .odt ou .pdf et transmettez ce fichier par les outils de l’établissement. Il contient la réponse de l’IA, pas l’identité de l’élève — à condition que personne ne l’ait saisie. Relisez-le quand même avant de l’envoyer. Le guide mentionne aussi une sauvegarde automatique du formulaire, sans préciser où elle est conservée : sur un ordinateur partagé, restez prudent — une raison de plus pour n’y écrire que des observables.",
    },

    { type: "titre", texte: "À vous : votre plan d’équipe" },
    {
      type: "exercice",
      id: "inclusia-m8-plan-equipe",
      titre: "Votre plan d’équipe",
      consigne:
        "Avec un ou deux collègues qui suivent le même élève, faites un cycle complet dans Inclus’IA, puis notez votre plan. Dans ce plan, l’élève s’appelle « élève A » : son nom reste dans les documents de l’établissement.",
      duree: "10 min",
      etapes: [
        "Mettez en commun ce que chacun a observé et accordez-vous sur une seule description : situation, fréquence, durée, ce qui suit — sans nom, sans diagnostic, sans détail rare.",
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile du module qui correspond à ce que vous avez sous la main.",
        "Remplissez le formulaire avec la description commune, générez les instructions (Ctrl+Entrée) et relisez-les ensemble avant l’envoi.",
        "Envoyez-les à l’IA intégrée — ou, si elle ne répond pas, copiez-les dans Copilot Chat avec votre compte Microsoft 365 du lycée, puis recollez la réponse avec « J’ai utilisé une autre IA — coller le résultat ».",
        "Lisez le résultat à deux, en commençant par les points de vigilance, puis repérez la synthèse « 3 gestes prioritaires à mettre en place dès demain ».",
      ],
      champs: [
        {
          id: "observables",
          type: "texte-long",
          lignes: 4,
          libelle: "Élève A — les observables partagés",
          aide: "Qui a observé quoi, par rôle (en classe, AESH, à la cantine) : situation, fréquence, durée, ce qui suit. Jamais de nom d’élève : ces réponses restent dans votre navigateur, mais la règle ne change pas.",
        },
        {
          id: "module",
          type: "texte",
          libelle: "Le module choisi, et pourquoi",
          aide: "Le nom de la tuile — par exemple Accompagnement ou Séquentiel illustré — et ce que vous aviez sous la main.",
        },
        {
          id: "relecture",
          type: "texte",
          libelle: "Qui relit, qui valide la partie élève",
          aide: "Des rôles, pas des noms : « professeur de SVT et AESH ; le professeur valide ».",
        },
        {
          id: "gestes",
          type: "texte-long",
          lignes: 5,
          libelle:
            "Les trois gestes, leur signe d’allègement et la date du point",
          aide: "Pour chaque geste : qui le porte, dans quelle situation, et le signe observable qui dira qu’on peut l’alléger. Puis la date à laquelle vous ferez le point.",
        },
      ],
      retour: {
        titre: "Ce que votre plan doit contenir",
        texte:
          "Un bon plan d’équipe tient en quelques lignes, et chaque adulte sait ce qu’il fait lundi matin.",
        points: [
          "Une seule description, faite de faits observés par plusieurs adultes — sans nom, sans diagnostic, sans combinaison de détails qui permettrait de reconnaître l’élève.",
          "Un module choisi à partir de ce que vous aviez sous la main, pas d’une étiquette.",
          "Un professeur qui a relu et validé la partie destinée à l’élève : l’équipe relit, lui décide.",
          "Trois gestes seulement, chacun avec son signe observable, portés de la même façon par tous les adultes.",
          "Une date de point, où vous comparerez les mêmes observables qu’au départ.",
          "Le lien entre « élève A » et l’élève réel : seulement dans les documents de l’établissement.",
        ],
      },
      suite: {
        href: "/formations/inclusia/ressources/fiche-memo",
        libelle: "Imprimer la fiche mémo",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "La règle d’or, le garde-fou, ce qui ne se saisit jamais — pour chaque membre de l’équipe.",
        },
        {
          libelle: "Répondre à un besoin particulier",
          href: "/formations/inclusia/repondre-a-un-besoin",
          description:
            "Les huit modules centrés sur un élève, leurs règles et leurs exemples.",
        },
        {
          libelle: "Communiquer autrement",
          href: "/formations/inclusia/communiquer-autrement",
          description:
            "Les planches de pictogrammes, souvent utiles hors de la classe.",
        },
        {
          libelle: "Relire, ajuster, exporter",
          href: "/formations/inclusia/relire-et-adapter",
          description:
            "La relecture pas à pas, les trois gestes prioritaires et l’export du résultat.",
        },
        {
          libelle: "Décrire sans étiqueter",
          href: "/formations/inclusia/ressources/observables",
          description:
            "Des formulations à reprendre pour votre description commune.",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Aucune donnée personnelle d’élève dans un outil d’IA, quel que soit le compte.",
        },
        {
          libelle: "Bibliothèque d’instructions d’Inclus’IA",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les vingt instructions, à lire ensemble avant une réunion d’équipe.",
        },
      ],
    },
  ],
};
