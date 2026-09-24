import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Questions fréquentes » du tutoriel Inclus’IA : quatorze questions,
 * une section par question, puis un vrai/faux de vérification.
 *
 * Réponses tirées des pages « Guide d’utilisation », « Démarche », « Cas
 * d’usage » et « Bibliothèque d’instructions » d’Inclus’IA, telles qu’en ligne
 * le 24 septembre 2026, et de la charte IA du lycée (formation « IA et usages
 * numériques »). Ce que les sources ne disent pas n’est pas affirmé.
 */
export const questionsInclusia: SectionDeroule[] = [
  {
    slug: "compte",
    titre: "Faut-il créer un compte pour utiliser Inclus’IA ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le guide d’utilisation ne décrit aucune étape de connexion ni de création de compte. Il présente quatre étapes : choisir un module sur la page d’accueil, remplir le formulaire, vérifier les instructions générées, lire et adapter le résultat. La page Démarche prévoit « cinq minutes pour le formulaire, puis quelques minutes pour relire la proposition de l’IA et l’adapter ».",
      },
      {
        type: "paragraphe",
        texte:
          "Les sources ne parlent ni de compte, ni d’abonnement, ni de coût : ce tutoriel n’affirme donc rien de plus. La bibliothèque d’instructions, elle, se consulte « sans rien remplir ». Si vous passez par une autre IA, au lycée, ce sera Copilot Chat avec votre compte Microsoft 365 de l’établissement.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Prendre en main l’outil",
            href: "/formations/inclusia/prendre-en-main",
            description: "Les quatre étapes du guide, pas à pas.",
          },
          {
            libelle: "Guide d’utilisation d’Inclus’IA",
            href: "https://inclusia.forge.apps.education.fr/guide/",
          },
        ],
      },
    ],
  },

  {
    slug: "ia-ne-repond-pas",
    titre: "L’IA intégrée ne répond pas : que faire ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "L’IA intégrée à Inclus’IA, c’est ILaaS, avec Albert en secours ; selon la page Démarche, la demande traverse une cascade de quatre modèles alternant les deux opérateurs, « pour qu’une panne de l’un n’arrête pas le site ». Si aucun résultat n’arrive malgré tout, le guide prévoit une solution de repli : les instructions de l’étape 2 sont affichées en clair et copiables en un clic. Elles sont « auto-portantes » : elles nomment leurs cadres de référence en toutes lettres, pour ne rien supposer connu de l’IA qui les reçoit.",
      },
      {
        type: "etapes",
        etapes: [
          {
            titre: "Copier les instructions de l’étape 2",
            texte:
              "Relisez-les avant de les copier : rien ne doit permettre de reconnaître un élève.",
          },
          {
            titre: "Les coller dans Copilot Chat",
            texte:
              "Avec votre compte Microsoft 365 du lycée : c’est l’IA de l’établissement.",
          },
          {
            titre: "Recoller la réponse dans Inclus’IA",
            texte:
              "Sous le panneau de résultat, « J’ai utilisé une autre IA — coller le résultat » : vous retrouvez la mise en forme, la lecture audio et les téléchargements. Le résultat collé est identifié comme tel.",
          },
        ],
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Prendre en main l’outil",
            href: "/formations/inclusia/prendre-en-main",
            description: "Quelle IA répond, et comment passer par une autre.",
          },
        ],
      },
    ],
  },

  {
    slug: "copilot-ou-autre-ia",
    titre: "Puis-je utiliser Copilot, ChatGPT ou une autre IA ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Oui, l’outil le prévoit : le guide cite « ChatGPT, Mistral, Claude, Gemini ou une autre », et la page Démarche résume : « L’outil sert le geste pédagogique, pas un fournisseur. » Au lycée, choisissez Copilot Chat avec votre compte Microsoft 365 de l’établissement : c’est l’outil couvert par le lycée, celui que la formation « IA et usages numériques » retient pour créer de zéro.",
      },
      {
        type: "paragraphe",
        texte:
          "La règle, elle, ne change pas d’un outil à l’autre. Le guide rappelle qu’« avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie », et la charte du lycée le dit pour tous les outils : aucune donnée personnelle dans un outil d’IA, quel que soit le compte. Le garde-fou d’Inclus’IA réagit à ce que vous tapez dans son formulaire : une fois les instructions collées ailleurs, c’est votre relecture qui fait le tri.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "La charte IA du lycée",
            href: "/formations/ia-usages-numeriques/la-charte-ia",
            description: "Données personnelles, relecture, transparence.",
          },
        ],
      },
    ],
  },

  {
    slug: "voir-ce-qui-est-envoye",
    titre: "Puis-je voir exactement ce qui est envoyé à l’IA ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Pour l’essentiel, oui. À l’étape 2, avant tout envoi, les instructions assemblées à partir de votre formulaire s’affichent en clair : ce sont elles que vous envoyez à l’IA intégrée ou que vous copiez pour une autre IA. Vous y retrouvez vos mots, insérés dans un cadre en blocs — RÔLE, CONTEXTE, TÂCHE, CONTRAINTES, FORMAT DE SORTIE. Les sources ne précisent pas comment apparaissent, à cette étape, les documents ou l’image que vous importez, ni la charte de rédaction commune ajoutée à chaque instruction.",
      },
      {
        type: "paragraphe",
        texte:
          "« Rien n’est caché », annonce la bibliothèque d’instructions : sans rien remplir, vous y lisez les vingt modèles, chacun avec son numéro de version. Chaque carte se lit en « Vue par blocs » ou en « Texte brut » — c’est dans l’onglet « Texte brut » qu’apparaît la charte de rédaction accessible commune à tous les modules — et se copie avec « Copier tout le prompt ». Les vingt instructions sont aussi publiées en JSON ouvert, sous licence CC BY-SA (« Réutiliser les prompts → »).",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Bibliothèque d’instructions",
            href: "https://inclusia.forge.apps.education.fr/prompts/",
            description: "Les vingt instructions complètes, versionnées.",
          },
          {
            libelle: "Prendre en main l’outil",
            href: "/formations/inclusia/prendre-en-main",
            description: "Lire une instruction, bloc par bloc.",
          },
        ],
      },
    ],
  },

  {
    slug: "donnees",
    titre: "Mes données sont-elles envoyées quelque part ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "La page Démarche pose ce principe : « Aucune donnée d’élève/étudiant ne quitte votre navigateur sans votre validation. » Quand vous validez l’envoi, les instructions partent vers l’IA intégrée : la plateforme ILaaS, qui exécute des modèles ouverts dans les datacenters de l’enseignement supérieur, avec Albert, l’IA générative de l’État français, en secours — « un choix pensé pour les données scolaires ». Pour les traceurs tiers, la même page indique « Aucun — tout est auto-hébergé » ; et le guide précise que la dictée au micro est « transcrite sans service tiers ».",
      },
      {
        type: "paragraphe",
        texte:
          "Si vous copiez les instructions dans une autre IA, elles partent chez le fournisseur de cette IA. Dans tous les cas, la meilleure protection est en amont : ce que vous n’écrivez pas n’est envoyé nulle part. Aucun nom, aucun diagnostic, aucun détail qui permettrait de reconnaître l’élève.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
            description: "La règle d’or, en pratique.",
          },
          {
            libelle: "La démarche d’Inclus’IA",
            href: "https://inclusia.forge.apps.education.fr/demarche/",
          },
        ],
      },
    ],
  },

  {
    slug: "garde-fou",
    titre: "Le garde-fou RGPD bloque-t-il l’envoi ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Non. Si vous saisissez un diagnostic médical (autisme, dyslexie, TDAH…), une adresse e-mail, un numéro de téléphone ou une adresse postale, un avertissement orange s’affiche ; la page Démarche ajoute les noms propres. Mais le guide est clair : « L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. » C’est à vous de reformuler avant d’envoyer.",
      },
      {
        type: "paragraphe",
        texte:
          "L’absence d’avertissement ne prouve pas non plus que votre texte est anonyme. Le garde-fou est décrit comme repérant ces types d’informations ; une combinaison de détails anodins qui, réunis, désignent un élève (sa classe, une arrivée récente, une particularité rare) n’en fait pas partie. Ne gardez que ce qui sert l’adaptation.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
          },
          {
            libelle: "Décrire sans étiqueter",
            href: "/formations/inclusia/ressources/observables",
            description: "Des formulations prêtes à l’emploi.",
          },
        ],
      },
    ],
  },

  {
    slug: "plan-d-accompagnement",
    titre: "Puis-je importer le plan d’accompagnement d’un élève ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Non — ni un PAP, un PPS ou un PPRE, ni un bilan, une copie ou une photo d’élève. Réservez l’import de documents (PDF, Word, image…) à vos supports : un texte à adapter, une séance, un graphique à décrire. Un plan d’accompagnement contient un nom et souvent des informations de santé ou de handicap, des données particulièrement sensibles. Le guide est net : « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant. » La charte du lycée exclut de même toute donnée personnelle d’élève — noms, notes, copies, santé, photos.",
      },
      {
        type: "paragraphe",
        texte:
          "Faites l’inverse : lisez le plan vous-même, dans le cadre prévu par l’établissement, et reportez dans le formulaire seulement ce qui sert l’adaptation — ce que vous observez et les besoins, sans nom ni diagnostic. Les sources ne disent pas si le garde-fou examine le contenu des documents importés : ne comptez pas sur lui.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
          },
          {
            libelle: "Travailler en équipe autour d’un élève",
            href: "/formations/inclusia/travailler-en-equipe",
            description: "Le nom de l’élève reste dans les documents du lycée.",
          },
        ],
      },
    ],
  },

  {
    slug: "diagnostic",
    titre: "Pourquoi l’outil ne pose-t-il jamais de diagnostic ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Parce que ce n’est pas son rôle. La page Démarche le dit : « Ce n’est pas un outil de diagnostic. Le site ne pose pas d’étiquette sur un élève/étudiant. Il aide à adapter à des besoins observés, pas à des troubles déclarés. » Les instructions l’imposent à l’IA : « Ne JAMAIS poser ni confirmer de diagnostic » (Adaptations TSA, Dyslexie), ni « suggérer un trouble » (Accompagnement). Elles rappellent que le diagnostic relève des professionnels de santé et que l’école, elle, décrit les observables et aménage.",
      },
      {
        type: "paragraphe",
        texte:
          "Choisir le module Adaptations TSA ou Dyslexie n’est donc pas écrire un diagnostic : dans les champs, vous décrivez ce que vous voyez. Le guide donne l’exemple : « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ». La page Cas d’usage le résume : « Vous partez de ce que vous observez chez un élève, jamais d’un diagnostic. »",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Répondre à un besoin particulier",
            href: "/formations/inclusia/repondre-a-un-besoin",
            description: "Les huit modules centrés sur un élève.",
          },
          {
            libelle: "Décrire sans étiqueter",
            href: "/formations/inclusia/ressources/observables",
          },
        ],
      },
    ],
  },

  {
    slug: "resultat-tel-quel",
    titre: "Puis-je donner le résultat tel quel à un élève ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Non. Le guide l’écrit sans détour : « À aucun moment le site ne produit un document prêt à donner à l’élève : ce qui sort de l’IA est un brouillon expert, à relire avant utilisation avec l’élève. » Même les exemples de la page Cas d’usage sont présentés comme illustratifs : « ce ne sont pas des captures de génération ».",
      },
      {
        type: "paragraphe",
        texte:
          "Le résultat vous aide à relire : il est accompagné de points de vigilance qui disent où regarder en premier, et la plupart des instructions séparent ce qui est à remettre à l’élève des notes pour l’enseignant. Vérifiez l’exactitude et le niveau, repérez ce que l’IA a ajouté, adaptez à votre classe. Et si un support vient d’une IA, dites-le à vos élèves : la charte du lycée demande cette transparence.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Relire, ajuster, exporter",
            href: "/formations/inclusia/relire-et-adapter",
            description: "La relecture pas à pas, avant de donner un document.",
          },
        ],
      },
    ],
  },

  {
    slug: "resultat-decevant",
    titre: "Le résultat ne me convient pas : que faire ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Recommencez en ajustant vos réponses : le guide conseille d’itérer, car « chaque essai affine les instructions ». Une description vague donne une réponse vague. Le guide propose trois pistes : soyez précis (« CM1, 25 élèves/étudiants dont 3 avec PAP » est plus utile que « classe ordinaire »), donnez du contexte (matière, niveau, objectif pédagogique), précisez vos contraintes (pas de tablettes, salle fixe, temps limité). Pour voir à quoi ressemble une description complète, cliquez sur « Remplir avec un exemple », sous le formulaire.",
      },
      {
        type: "paragraphe",
        texte:
          "Préciser ne veut pas dire en dire plus sur l’élève : la précision utile porte sur la tâche, la situation et ce que vous observez, jamais sur son identité. Et si le résultat reste inadapté, gardez ce qui est bon et réécrivez le reste vous-même : dans la démarche, la cinquième étape vous appartient — « La séance finale est la vôtre ».",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          { libelle: "Relire, ajuster, exporter", href: "/formations/inclusia/relire-et-adapter" },
        ],
      },
    ],
  },

  {
    slug: "falc-officiel",
    titre: "Le texte produit par le module FALC est-il un FALC officiel ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Non, pas en l’état. L’instruction du module FALC demande à l’IA de le rappeler elle-même : un document n’est officiellement FALC, au sens des règles européennes (Inclusion Europe), que s’il a été relu et validé par des personnes concernées — des personnes en situation de handicap intellectuel. La version produite est un projet à faire valider ; elle ne peut pas porter le logo européen FALC sans cette relecture.",
      },
      {
        type: "paragraphe",
        texte:
          "Après votre relecture, vous pouvez l’utiliser comme texte simplifié, sans le présenter comme un FALC officiel. L’instruction applique les règles une à une (une idée par phrase, 15 mots au maximum, vocabulaire concret…) et interdit d’ajouter une information ou de modifier un fait : « on simplifie la forme, jamais le contenu ». La page Démarche le rappelle : le site « complète les démarches FALC et CUA, il ne les remplace pas ».",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Rendre un texte ou une activité lisible",
            href: "/formations/inclusia/rendre-un-texte-lisible",
            description: "FALC, Aide à la lecture, Allophone : lequel choisir.",
          },
        ],
      },
    ],
  },

  {
    slug: "cadre-francais",
    titre: "Les instructions parlent de MDPH et de PPS : et au lycée ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Les instructions citent le cadre français de l’école inclusive, en toutes lettres pour que n’importe quelle IA le comprenne : la loi du 11 février 2005, la circulaire du 5 juin 2019 « Pour une école inclusive » et sa réponse graduée (aménagements ordinaires en classe, PPRE et PAP décidés par l’établissement, PPS notifié par la MDPH), l’équipe de suivi de la scolarisation (ESS) ou l’enseignant référent. Le résultat peut y renvoyer, en particulier dans le rappel des partenaires à mobiliser.",
      },
      {
        type: "paragraphe",
        texte:
          "Le lycée est un établissement français à l’étranger : au lycée, les plans d’accompagnement suivent les procédures de l’établissement, et l’équipe de direction vous oriente. Lisez ces mentions comme des repères, et adaptez à l’organisation du lycée ce qui en dépend. Même vigilance pour le référentiel : selon les instructions, le socle commun ne vaut que du CP à la 3e — au lycée, vérifiez que le résultat ne le cite pas.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Travailler en équipe autour d’un élève",
            href: "/formations/inclusia/travailler-en-equipe",
          },
          {
            libelle: "Glossaire",
            href: "/formations/inclusia/ressources/glossaire",
            description: "PAP, PPS, PPRE, MDPH, ESS… expliqués simplement.",
          },
        ],
      },
    ],
  },

  {
    slug: "pictogrammes",
    titre: "Les pictogrammes sont-ils libres de droits ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Ils sont sous licence Creative Commons, avec des conditions. Les images des modules CAA, Tableau de communication, Séquentiel illustré et Scénario social viennent de la banque ARASAAC (Centre aragonais de la communication augmentative et alternative, Gouvernement d’Aragon) : des pictogrammes de Sergio Palao, sous licence CC BY-NC-SA. Dans Inclus’IA, l’IA ne dessine rien : elle découpe et classe les mots ; les images viennent de cette banque.",
      },
      {
        type: "paragraphe",
        texte:
          "Cette licence permet de reproduire et de modifier à trois conditions : citer l’auteur et la source (BY), ne pas en faire un usage commercial (NC), partager les adaptations sous la même licence (SA). Gardez la mention de la source sur les planches que vous diffusez : les sources ne disent pas si Inclus’IA l’ajoute à l’impression, vérifiez-le. À ne pas confondre : les instructions d’Inclus’IA sont publiées, elles, sous licence CC BY-SA.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          {
            libelle: "Communiquer autrement : les planches de pictogrammes",
            href: "/formations/inclusia/communiquer-autrement",
          },
        ],
      },
    ],
  },

  {
    slug: "m2pa",
    titre: "Qu’est-ce que la tuile Planification M2PA ?",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Ce n’est pas l’un des vingt modules : c’est une tuile qui renvoie vers un outil complémentaire dédié. La M2PA (Méthode de Planification Pédagogique de l’Accessibilité) va au-delà de l’adaptation ponctuelle : la page Démarche la décrit comme une démarche structurée en 3 niveaux pour anticiper les 8 besoins partagés des élèves, différencier et adapter une séance complète ; le guide la présente comme « Accessibilité d’une séquence ».",
      },
      {
        type: "paragraphe",
        texte:
          "Les pages d’Inclus’IA n’en disent pas plus, et ce tutoriel ne couvre pas cet outil. Pour concevoir ou analyser une séance dans Inclus’IA même, les modules Conception CUA et Analyse CUA restent la porte d’entrée.",
      },
      {
        type: "liens",
        titre: "Voir aussi",
        liens: [
          { libelle: "L’outil M2PA", href: "https://m2pa.forge.apps.education.fr/" },
          {
            libelle: "Concevoir, différencier, évaluer une séance",
            href: "/formations/inclusia/concevoir-une-seance",
          },
        ],
      },
    ],
  },

  {
    slug: "vrai-ou-faux",
    titre: "Vérifiez vos réflexes",
    blocs: [
      {
        type: "quiz",
        id: "inclusia-r-faq-reflexes",
        consigne:
          "Vrai ou faux ? Six affirmations pour vérifier que l’essentiel de ces réponses est acquis.",
        items: [
          {
            affirmation:
              "L’avertissement orange du garde-fou RGPD empêche d’envoyer les instructions.",
            reponse: false,
            explication:
              "Le guide : « L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. » C’est à vous de reformuler avant d’envoyer.",
          },
          {
            affirmation:
              "Si l’IA intégrée ne répond pas, vous pouvez copier les instructions dans Copilot Chat, puis recoller la réponse dans Inclus’IA.",
            reponse: true,
            explication:
              "Le guide le prévoit : instructions copiables en un clic à l’étape 2, puis « J’ai utilisé une autre IA — coller le résultat » sous le panneau de résultat. Au lycée, Copilot Chat s’utilise avec le compte Microsoft 365 de l’établissement.",
          },
          {
            affirmation:
              "Vous pouvez lire en clair, avant l’envoi, les instructions assemblées à partir de votre formulaire.",
            reponse: true,
            explication:
              "À l’étape 2, les instructions assemblées sont affichées en clair. Les vingt modèles sont aussi consultables, avec leur version, dans la bibliothèque d’instructions.",
          },
          {
            affirmation:
              "Vous pouvez importer le PAP d’un élève pour que l’IA cible mieux ses propositions.",
            reponse: false,
            explication:
              "Un plan d’accompagnement contient des informations qui identifient l’élève et des données de santé. Le guide : « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant. » Vous en tirez les observables utiles, sans nom ni diagnostic.",
          },
          {
            affirmation:
              "Après votre relecture, un texte produit par le module FALC peut porter le logo européen FALC.",
            reponse: false,
            explication:
              "L’instruction du module FALC le précise : sans relecture et validation par des personnes concernées, la version produite est un projet et ne peut pas porter le logo.",
          },
          {
            affirmation:
              "Les pictogrammes ARASAAC s’utilisent sans aucune condition.",
            reponse: false,
            explication:
              "Ils sont sous licence CC BY-NC-SA : citer l’auteur et la source, pas d’usage commercial, partage des adaptations sous la même licence.",
          },
        ],
      },
    ],
  },
];
