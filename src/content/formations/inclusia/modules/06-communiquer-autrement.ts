import type { Module } from "@/content/types";

/**
 * Module 6 — Communiquer autrement : les planches de pictogrammes (15 minutes).
 *
 * Les quatre modules de la famille « Communiquer autrement » : CAA, Tableau de
 * communication, Séquentiel illustré, Scénario social. Ce qui change (une
 * planche d’images, pas un texte), ARASAAC et ses limites, la clé de
 * Fitzgerald, la négation, les règles de chaque instruction, le prénom qui ne
 * se saisit pas.
 * Tiré du « Guide d’utilisation » (les modules à pictogrammes), de la page
 * « Démarche », des cas 17 à 20 de la page « Cas d’usage » et des quatre
 * instructions de la « Bibliothèque d’instructions » d’Inclus’IA
 * (https://inclusia.forge.apps.education.fr/), telles qu’en ligne le
 * 24 septembre 2026.
 */
export const communiquerAutrement: Module = {
  slug: "communiquer-autrement",
  numero: 6,
  titre: "Communiquer autrement : les planches de pictogrammes",
  sousTitre:
    "CAA, tableau de communication, séquentiel illustré, scénario social : une planche d’images à imprimer, pour un élève qui n’a pas la parole ou pour qui l’imprévu est un obstacle",
  duree: 15,
  objectif:
    "Choisir le module à pictogrammes qui convient à une situation réelle, la décrire sans nommer personne, puis vérifier la planche — négation, ordre, vocabulaire, pictogrammes — avant de l’imprimer.",
  blocs: [
    { type: "titre", texte: "Quatre modules pour communiquer autrement" },
    {
      type: "paragraphe",
      texte:
        "Les quatre derniers modules d’Inclus’IA forment la famille « Communiquer autrement ». La page Cas d’usage la résume ainsi : « Vous partez d’un élève qui n’a pas la parole, ou pour qui l’imprévu est un obstacle. » Ces planches concernent le professeur autant que l’AESH, la coordination ou la vie scolaire : le repas, une sortie, un passage aux toilettes se jouent souvent hors de la classe.",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          numero: "1",
          titre: "CAA — Phrase en pictogrammes ARASAAC",
          texte:
            "Vous donnez une phrase ; vous obtenez une bande de pictogrammes, un par mot porteur de sens, dans l’ordre de la phrase.",
        },
        {
          numero: "2",
          titre: "Tableau de communication — Vocabulaire d’une situation",
          texte:
            "Vous décrivez une situation ; vous obtenez une grille de 12 à 20 mots que l’élève désigne pour demander, refuser, choisir ou dire que ça ne va pas.",
        },
        {
          numero: "3",
          titre: "Séquentiel illustré — Une routine, étape par étape",
          texte:
            "Vous décrivez une routine ; vous obtenez 4 à 8 étapes illustrées, dans l’ordre réel, à afficher là où l’activité a lieu.",
        },
        {
          numero: "4",
          titre: "Scénario social — Préparer une situation",
          texte:
            "Vous décrivez une situation à venir ; vous obtenez un court récit de 5 à 8 phrases à la première personne, une vignette par phrase.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La CAA — communication alternative et augmentative — désigne, selon l’instruction du module, « l’ensemble des moyens qui remplacent ou complètent la parole pour une personne qui ne peut pas s’exprimer oralement ». L’objectif n’est pas de faire parler l’élève.",
    },
    {
      type: "citation",
      texte:
        "L’enjeu n’est pas qu’il parle, mais qu’il dispose d’un support pour dire lui-même ce qu’il a à dire.",
      source: "Inclus’IA, page Cas d’usage (cas 17)",
    },

    { type: "titre", texte: "Une planche d’images, pas un texte" },
    {
      type: "citation",
      texte:
        "CAA, Tableau de communication, Séquentiel illustré et Scénario social ne rendent pas un texte : ils rendent une planche d’images à imprimer.",
      source: "Inclus’IA, Guide d’utilisation",
    },
    {
      type: "etapes",
      etapes: [
        {
          titre: "Vous décrivez",
          texte:
            "La phrase, la situation ou la routine, avec le niveau de l’élève et ce que vous observez de sa façon de communiquer. Sans nom, sans diagnostic.",
        },
        {
          titre: "L’IA découpe et classe — elle ne dessine rien",
          texte:
            "Elle sépare les mots, les ramène à leur forme de base et les range par famille grammaticale. Elle rend « UNIQUEMENT un tableau JSON valide » : une liste codée, pas une fiche rédigée. Seul le Scénario social écrit des phrases, une par vignette, sans aucun commentaire autour.",
        },
        {
          titre: "Les images viennent d’ARASAAC",
          texte:
            "Chaque pictogramme est ensuite tiré de la banque ARASAAC (Gouvernement d’Aragon). Chaque case prend la couleur de sa famille, selon la clé de Fitzgerald.",
        },
        {
          titre: "Vous corrigez chaque case",
          texte:
            "Chaque case reste modifiable : vous pouvez chercher un autre pictogramme, changer le mot écrit dessous, ajouter ou retirer une case avant d’imprimer.",
        },
        {
          titre: "Vous imprimez",
          texte:
            "En bande, en séquentiel ou en cartes, au format PDF, Word ou LibreOffice.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Vous n’obtenez donc pas de fiche à mettre en page : la relecture porte sur la planche elle-même, case par case — et, pour un scénario social, sur chaque phrase écrite par l’IA. Trois mises en page au choix : la bande (les cases à la suite, lues de gauche à droite), le séquentiel (une étape par ligne, numérotée, lue de haut en bas) ou les cartes (une par mot, à découper). Les exemples de la page Cas d’usage proposent de plastifier la bande ou la grille, et d’afficher le séquentiel sur le lieu même de l’activité.",
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Avec une autre IA",
      texte:
        "Si vous collez les instructions dans une autre IA — Copilot Chat avec le compte du lycée, par exemple —, elles lui demandent de rendre cette liste codée (un tableau JSON), pas des images. Le guide permet de recoller dans le site un résultat obtenu ailleurs, avec « J’ai utilisé une autre IA — coller le résultat » ; il ne précise pas si la planche se construit alors comme avec l’IA intégrée. Vérifiez à l’écran avant de compter dessus. Et le guide le rappelle : avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie — le garde-fou d’Inclus’IA ne vous y suit pas.",
    },

    { type: "titre", texte: "Quatre notions pour lire une planche" },
    {
      type: "tableau",
      entetes: ["Notion", "Ce qu’il faut savoir"],
      lignes: [
        [
          "Lemme",
          "La forme du dictionnaire : l’infinitif pour un verbe, le singulier pour un nom. ARASAAC n’indexe que les lemmes : « compris » y est cherché sous « comprendre ». Dans une bande CAA, le mot écrit sous l’image reste celui de la phrase, pour que l’élève retrouve la phrase qu’il a entendue.",
        ],
        [
          "Clé de Fitzgerald",
          "Le code couleur « employé en CAA depuis les travaux d’Edith Fitzgerald », dit le guide. Il range chaque mot selon sa fonction : personnes et pronoms, actions, choses, descriptions, formules sociales, mots de liaison. La famille est toujours écrite à côté de la couleur : la couleur ne porte jamais seule l’information.",
        ],
        [
          "Style télégraphique",
          "Une bande CAA ne garde que les mots porteurs de sens. Elle se lit « chat manger pomme », pas « le chat mange une pomme » — c’est l’exemple de l’instruction.",
        ],
        [
          "Temps du verbe",
          "L’instruction CAA marque le temps — passé, présent ou futur — sur le verbe seul. Selon elle, ARASAAC ajoute alors une flèche temporelle sur le pictogramme : c’est ce qui distingue « je mange » de « j’ai mangé ».",
        ],
      ],
    },
    {
      type: "encadre",
      ton: "attention",
      titre: "La négation, le piège numéro un",
      texte:
        "Dans la liste que rend l’IA, la négation n’a pas de case : l’instruction CAA la note comme une marque sur le verbe. Or ARASAAC ne sait pas la dessiner, et le guide prévient qu’une bande sans case « non » ajoutée « peut dire exactement le contraire de ce qu’on voulait ». Dans l’exemple de la page Cas d’usage, « Je n’ai pas compris la consigne » donne trois cases : je · compris · consigne — soit « j’ai compris la consigne ». Le site le signale et propose d’ajouter une case « non » : ajoutez-la. Dès que la phrase est négative — ne… pas, ne… plus, jamais, rien, aucun, personne —, vérifiez cette case avant d’imprimer.",
    },

    { type: "titre", texte: "ARASAAC : ce que la banque sait faire, et ce qu’elle ne sait pas" },
    {
      type: "paragraphe",
      texte:
        "ARASAAC est la banque de pictogrammes du Centre aragonais de la communication augmentative et alternative (Gouvernement d’Aragon) ; les pictogrammes sont de Sergio Palao. L’instruction du module CAA la présente comme « la banque de référence en Europe », qui « couvre le vocabulaire du quotidien ». Les quatre instructions en tirent aussi des limites, qu’il vaut mieux connaître avant de remplir le formulaire :",
    },
    {
      type: "liste",
      items: [
        "Elle ne cherche qu’un seul mot à la fois, à sa forme de base et en français courant : ni groupe de mots, ni forme conjuguée, ni pluriel, ni anglicisme (« pull » plutôt que « sweat »).",
        "Elle n’a pas de pictogramme pour un terme abstrait ou savant : préférez des mots du quotidien, concrets et courants.",
        "Les verbes mentaux — réfléchir, penser, se concentrer — n’ont pas de pictogramme qui les représente correctement : préférez des gestes que l’élève peut voir faire.",
        "Aucun pictogramme ne correspond à un prénom : c’est une photo qui le remplace.",
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Une licence, pas un libre-service",
      texte:
        "Les pictogrammes ARASAAC sont publiés sous licence CC BY-NC-SA : on peut les réutiliser à des fins non commerciales, à condition de citer l’auteur, la source et la licence, et de partager ses adaptations sous la même licence. Sur vos planches, indiquez donc l’auteur des pictogrammes (Sergio Palao), leur source (ARASAAC, Gouvernement d’Aragon) et la licence (CC BY-NC-SA). Le guide ne dit pas si la planche imprimée porte déjà cette mention : vérifiez-le, et ajoutez-la si elle manque.",
    },

    { type: "titre", texte: "Ce qu’impose chaque instruction" },
    {
      type: "paragraphe",
      texte:
        "Chaque instruction, consultable dans la bibliothèque d’instructions (au 24 septembre 2026 : CAA v1.0.0, Tableau de communication v1.0.0, Séquentiel illustré v1.1.0, Scénario social v1.0.0), cadre l’IA à votre place ; la connaître vous dit quoi écrire, et quoi vérifier sur la planche. Les quatre laissent aussi une place à vos contraintes supplémentaires : par exemple les mots que l’élève connaît déjà, ou ceux à éviter.",
    },

    { type: "titre", texte: "CAA : une phrase en pictogrammes" },
    {
      type: "liste",
      items: [
        "Vous donnez la phrase, le niveau de l’élève et son profil de communication.",
        "Les articles (le, la, un, des…) et les prépositions vides de sens (à, de) disparaissent. Les prépositions qui changent le sens (dans, sur, sous, avec, sans…) restent. Les pronoms aussi : ce sont eux qui disent qui agit.",
        "L’IA ne réécrit pas le message : aucun mot ajouté, aucun mot porteur de sens retiré, l’ordre de la phrase conservé.",
        "Dans un temps composé, l’auxiliaire n’a pas de case : dans « je suis tombé », « suis » disparaît, et « tombé » porte à lui seul le verbe et le temps.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage (ULIS école : l’unité localisée pour l’inclusion scolaire, un dispositif qui scolarise en petit groupe, dans une école ordinaire, des élèves en situation de handicap), un élève ne s’exprime pas oralement : il désigne, il tire par la manche, il se met en colère quand on ne le comprend pas. La phrase « Je n’ai pas compris la consigne » devient trois cases — je (Personne), compris (Action, passé), consigne (Chose) —, à imprimer et à plastifier.",
    },

    { type: "titre", texte: "Tableau de communication : les mots d’une situation" },
    {
      type: "liste",
      items: [
        "Vous donnez la situation, le niveau de l’élève et son profil de communication.",
        "Le point de vue est celui de l’élève : les mots dont il a besoin pour demander, refuser, choisir, signaler un problème — pas ceux dont l’adulte a besoin pour donner une consigne.",
        "Le vocabulaire noyau d’abord — selon l’instruction, une petite centaine de mots très fréquents qui couvrent l’essentiel des échanges quotidiens. Sur chaque tableau : « je », « veux », « encore », « fini », « aider », « oui », « non », « ça ne va pas ». Puis les objets, les lieux, les personnes et les actions de la situation.",
        "La liste est rangée par famille de la clé de Fitzgerald, les personnes puis les actions : l’ordre dans lequel se construit une phrase.",
        "Des mots pour dire que quelque chose ne va pas : « mal », « trop fort », « trop chaud », « toilettes », « peur », « fatigué ».",
        "Entre 12 et 20 mots : au-delà, l’élève ne retrouve plus la case qu’il cherche ; en deçà, il ne peut pas dire grand-chose.",
      ],
    },
    {
      type: "encadre",
      ton: "regle",
      titre: "Un tableau pour que l’élève s’exprime",
      texte:
        "L’instruction est formelle : le tableau ne sert pas à l’adulte pour parler à l’élève, il sert à l’élève pour s’exprimer lui-même en désignant les cases. Et « un tableau qui ne permet que de demander enferme l’élève dans la demande ».",
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage (le repas au self, dans un IME — institut médico-éducatif), un classeur de pictogrammes rangé par thèmes, trop lourd pour être emporté, n’est jamais ouvert pendant le repas. Il laisse la place à une grille pour cette seule situation : je · vouloir · encore · fini · aider, puis eau · pain · plateau · chaud · trop. « Un tableau de communication n’est pas un imagier. »",
    },

    { type: "titre", texte: "Séquentiel illustré : une routine, étape par étape" },
    {
      type: "liste",
      items: [
        "Vous donnez la routine ou l’activité, le niveau de l’élève et son profil.",
        "Entre 4 et 8 étapes, chacune une action observable, que l’élève peut réaliser puis considérer comme terminée. « Se préparer » n’est pas une étape ; « mettre son manteau » en est une.",
        "L’ordre chronologique réel, et aucune étape que la demande n’implique pas : un séquentiel qui décrit autre chose que ce que fait l’élève le met en échec.",
        "Chaque étape à l’infinitif, forme neutre : « se laver les mains », ni « lave-toi les mains » ni « je me lave les mains ». Le support décrit l’action, il ne gronde pas.",
        "Des verbes concrets — ouvrir, prendre, poser, frotter, ranger, s’asseoir — et une dernière étape qui signe la fin : ranger, retourner s’asseoir, dire que c’est fini.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage (ULIS école), le lavage des mains devient six étapes affichées au-dessus du lavabo : « le support est là où l’activité a lieu ». L’instruction s’appuie sur l’enseignement structuré (approche TEACCH), et la page Cas d’usage en tire l’idée clé : « Découper une routine en étapes visibles, c’est transférer le rappel de l’adulte vers l’environnement. »",
    },
    {
      type: "encadre",
      ton: "astuce",
      titre: "Un étayage fait pour disparaître",
      texte:
        "La page Cas d’usage le rappelle : « L’étayage est fait pour être estompé : on retire les étapes une à une à mesure qu’elles sont acquises. » Dès l’affichage, notez à quoi vous verrez qu’une étape est acquise — l’élève l’enchaîne sans regarder le support ni attendre de rappel : c’est la première que vous retirerez.",
    },

    { type: "titre", texte: "Scénario social : raconter ce qui va se passer" },
    {
      type: "liste",
      items: [
        "Vous donnez la situation à préparer, le niveau de l’élève et son profil.",
        "Entre 5 et 8 phrases, une idée par phrase, 12 mots au maximum : chaque phrase devient une vignette.",
        "À la première personne, du point de vue de l’élève — jamais à l’impératif ni à la deuxième personne.",
        "Au moins deux phrases qui décrivent (ce qui se passe, ce que ressentent les autres, une évidence rassurante) pour une seule phrase qui suggère quoi faire. Sinon, dit l’instruction, « un scénario qui n’aligne que des consignes n’est pas un scénario social, c’est un règlement ».",
        "Des formulations souples : « je peux essayer de… », jamais « je dois » ni « il faut ». Ni absolu ni promesse que l’adulte ne peut pas tenir, comme « tout se passera bien » : plutôt « souvent », « la plupart du temps », « parfois ».",
        "Une fin rassurante ou une solution de repli concrète : à qui demander de l’aide, où aller pour faire une pause.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "L’instruction interdit à l’IA d’inventer un élément qu’on ne lui a pas donné — un nom, un horaire, un lieu précis : « un détail faux décrédibilise tout le scénario ». C’est donc à vous de décrire la situation réelle : le moment, le trajet, ce qui peut gêner l’élève, la solution de repli prévue — sans nom de personne, adulte compris, et sans détail qui permettrait de reconnaître l’élève. Les noms et les photos s’ajoutent à la main sur la planche imprimée.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans l’exemple de la page Cas d’usage (6e, une sortie au musée), « Demain on va au musée, ça va bien se passer, ne t’inquiète pas » devient un récit en vignettes, à lire plusieurs fois avant le jour J. La page en montre un extrait : « Jeudi matin, je monte dans le bus avec ma classe. » « Au musée, il y a beaucoup de monde et c’est parfois bruyant. » « Le bruit peut me fatiguer. » « Je peux demander à sortir quelques minutes avec un adulte. »",
    },

    { type: "titre", texte: "Pas de prénom, même dans une phrase" },
    {
      type: "paragraphe",
      texte:
        "Une phrase à mettre en pictogrammes parle souvent de quelqu’un. L’instruction CAA prévoit même le cas d’un prénom : gardé tel quel, sans pictogramme, pour être remplacé par une photo. Ne vous en servez pas : la règle d’or d’Inclus’IA vaut pour ces modules comme pour les autres.",
    },
    {
      type: "citation",
      texte:
        "Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant.",
      source: "Inclus’IA, Guide d’utilisation",
    },
    {
      type: "cartes",
      colonnes: 2,
      cartes: [
        {
          titre: "Dans le formulaire",
          texte:
            "Écrivez « mon camarade », « l’adulte », « mon professeur », « je » — pas plus le nom d’un adulte que celui d’un élève. Pour le profil, ce que vous observez — « ne s’exprime pas oralement, désigne du doigt » —, jamais un nom ni un diagnostic.",
        },
        {
          titre: "Sur la planche imprimée",
          texte:
            "La photo de la personne, collée à la main, et son prénom écrit au stylo s’il le faut. Rien de cela ne passe par l’outil : ni photo déposée, ni prénom tapé sous une case. Une photo — d’un camarade comme d’un adulte — ne s’utilise que dans le respect des règles de l’établissement sur le droit à l’image : l’équipe de direction vous les indique.",
        },
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le garde-fou RGPD affiche un avertissement orange s’il repère un nom propre ou un diagnostic, mais il ne bloque pas l’envoi. Tout ce qu’il faut savoir pour décrire un besoin sans exposer un élève est au module 2.",
    },

    { type: "titre", texte: "Avant d’imprimer" },
    {
      type: "checklist",
      id: "inclusia-m6-avant-impression",
      consigne:
        "Passez chaque point sur votre planche avant de l’imprimer. La relecture complète d’un résultat est au module 7.",
      items: [
        {
          titre: "La négation",
          texte:
            "Si la phrase est négative — ne… pas, ne… plus, jamais, rien, aucun, personne —, la case « non » est ajoutée.",
        },
        {
          titre: "L’ordre",
          texte:
            "La bande suit l’ordre de la phrase ; le séquentiel, l’ordre réel des gestes, jusqu’à l’étape qui signe la fin.",
        },
        {
          titre: "Chaque case",
          texte:
            "Chaque pictogramme dit bien ce que vous voulez dire, et le mot écrit dessous est celui que l’élève doit lire ; sinon, changez l’un ou l’autre. Regardez surtout deux cas : dans un séquentiel, un verbe trop général est illustré par l’objet — « mettre du savon » par « savon » ; dans un scénario social, chaque phrase n’a qu’un pictogramme, tiré de son mot-clé.",
        },
        {
          titre: "Les phrases du scénario social",
          texte:
            "À la première personne, une idée par phrase, sans « je dois » ni promesse, au moins deux phrases qui décrivent pour une qui dit quoi faire, et une solution de repli réelle.",
        },
        {
          titre: "Rien d’inventé",
          texte:
            "Aucun mot ajouté à la phrase, aucune étape que la routine ne comporte pas, aucun détail que vous n’aviez pas donné.",
        },
        {
          titre: "Aucun nom dans l’outil",
          texte:
            "Ni prénom d’élève, ni nom d’adulte : photos et prénoms s’ajoutent sur papier, après l’impression.",
        },
        {
          titre: "La source des images",
          texte:
            "La mention ARASAAC (Sergio Palao, Gouvernement d’Aragon, CC BY-NC-SA) figure sur la planche — sinon, ajoutez-la.",
        },
      ],
    },

    { type: "titre", texte: "Après l’impression : faire vivre la planche" },
    {
      type: "liste",
      ordonnee: true,
      items: [
        "Si l’élève utilise déjà un outil de communication (classeur, tablette, gestes), partez de lui : mêmes mots, pictogrammes aussi proches que possible. Parlez-en avec ceux qui l’accompagnent — famille, professionnels qui le suivent, équipe inclusive —, selon l’organisation du lycée.",
        "Présentez la planche en montrant vous-même les cases quand vous parlez : l’élève voit ainsi à quoi elle sert.",
        "Laissez-la à portée de main au moment de la situation : dans l’exemple de la page Cas d’usage, le classeur trop lourd n’était jamais ouvert pendant le repas.",
        "Tous les adultes qui accompagnent l’élève s’en servent de la même façon (module 8).",
        "Après quelques jours, observez et ajustez : chaque case reste modifiable, et le guide invite à recommencer en ajustant vos réponses.",
      ],
    },

    { type: "titre", texte: "Vrai ou faux ?" },
    {
      type: "quiz",
      id: "inclusia-m6-quiz",
      consigne: "Huit affirmations sur les planches de pictogrammes : vraies ou fausses ?",
      items: [
        {
          affirmation: "L’IA intégrée à Inclus’IA dessine les pictogrammes de la planche.",
          reponse: false,
          explication:
            "Faux. Le guide est clair : « L’IA découpe et classe, elle ne dessine rien. » Elle sépare les mots, les ramène à leur forme de base et les range par famille ; les images viennent ensuite de la banque ARASAAC.",
        },
        {
          affirmation:
            "Sur la planche, la couleur d’une case suffit à indiquer la famille du mot.",
          reponse: false,
          explication:
            "Faux. Le code couleur est celui de la clé de Fitzgerald, mais « la famille est toujours écrite à côté de la couleur : elle ne porte jamais seule l’information » (guide).",
        },
        {
          affirmation:
            "Mise en pictogrammes, la phrase « Je n’ai pas compris la consigne » peut dire le contraire de ce que l’élève veut dire.",
          reponse: true,
          explication:
            "Vrai. ARASAAC ne sait pas dessiner la négation : sans case « non » ajoutée, la bande je · compris · consigne dit « j’ai compris la consigne ». Le site le signale et propose d’ajouter une case « non » : à vous de la valider.",
        },
        {
          affirmation:
            "Un tableau de communication sert surtout à l’adulte pour donner ses consignes à l’élève.",
          reponse: false,
          explication:
            "Faux. L’instruction le dit en toutes lettres : le tableau sert à l’élève pour s’exprimer lui-même en désignant les cases — demander, refuser, choisir, signaler un problème. Il compte de 12 à 20 mots, vocabulaire noyau en tête.",
        },
        {
          affirmation:
            "Dans un séquentiel illustré, « lave-toi les mains » est une bonne formulation d’étape.",
          reponse: false,
          explication:
            "Faux. L’instruction demande l’infinitif, forme neutre et non injonctive : « se laver les mains ». Le support décrit l’action, il ne gronde pas.",
        },
        {
          affirmation:
            "Dans un scénario social, il faut au moins deux phrases qui décrivent — la situation, ce que ressentent les autres, une évidence rassurante — pour une seule phrase qui dit quoi faire.",
          reponse: true,
          explication:
            "Vrai. L’instruction reprend la règle de Carol Gray : au moins deux phrases descriptives, de perspective ou d’affirmation pour une seule phrase directive. Sinon, ce n’est plus un scénario social, c’est un règlement.",
        },
        {
          affirmation:
            "Un scénario social peut se terminer par « tout se passera bien » pour rassurer l’élève.",
          reponse: false,
          explication:
            "Faux. L’instruction interdit les promesses que l’adulte ne peut pas tenir. Elle demande de terminer par une phrase rassurante ou une solution de repli concrète, comme « Je peux demander à sortir quelques minutes avec un adulte » dans l’exemple de la page Cas d’usage.",
        },
        {
          affirmation:
            "L’instruction du module CAA prévoit le cas d’un prénom : vous pouvez donc écrire celui d’un camarade dans la phrase.",
          reponse: false,
          explication:
            "Faux. L’instruction prévoit bien le cas — le prénom n’a pas de pictogramme et sera remplacé par une photo —, mais la règle d’or d’Inclus’IA passe avant : « Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant. » Écrivez « mon camarade », et ajoutez la photo sur la planche imprimée.",
        },
      ],
    },

    { type: "titre", texte: "À vous : une planche pour une situation de l’établissement" },
    {
      type: "paragraphe",
      texte:
        "Partez d’une situation réelle où un élève aurait besoin d’un support visuel : la file du self, une sortie en bus, un exercice d’évacuation, un changement de salle ou d’emploi du temps, un devoir surveillé dans une salle inconnue, l’arrivée d’un professeur remplaçant, la première journée de stage… Décrivez ce qui se passe vraiment : l’outil ne connaît pas l’établissement, et l’IA ne doit rien inventer. Pour un collégien ou un lycéen, indiquez son niveau réel et relisez le ton : aucun mot, aucune formulation, aucun pictogramme ne doit l’infantiliser — remplacez la case qui ne convient pas à son âge.",
    },
    {
      type: "requete",
      titre: "Exemple de description — Scénario social, exercice d’évacuation",
      texte:
        "Situation — Un exercice d’évacuation est prévu cette semaine. Une alarme très forte sonne sans prévenir. La classe sort avec le professeur et rejoint le point de rassemblement. On attend qu’un adulte dise que l’on peut rentrer. Cela dure quelques minutes.\n\nProfil — Se bouche les oreilles quand un bruit est fort. S’inquiète quand le programme de la journée change. Se calme quand un adulte qu’il connaît reste près de lui. Lit des phrases courtes.",
      commentaire:
        "Pour un élève de 6e, par exemple. Remplacez chaque détail par ce qui se passe réellement chez vous et répartissez le texte dans les champs du formulaire. Pour un exercice de sécurité, reprenez les consignes telles que l’établissement les fixe, sans les inventer, et prévoyez une solution de repli compatible avec elles — rester près de l’adulte, se boucher les oreilles, jamais sortir ou s’éloigner du groupe ; en cas de doute, l’équipe de direction vous oriente. Aucun prénom, aucun diagnostic, ni nom d’établissement, ni nom de classe, ni date : « cette semaine », « ma classe » suffisent.",
    },
    {
      type: "exercice",
      id: "inclusia-m6-exercice-planche",
      titre: "Votre première planche",
      consigne:
        "Choisissez le module qui correspond à votre situation, décrivez-la sans nommer personne, générez la planche et vérifiez-la avant de l’imprimer. Notez ensuite ce que vous avez obtenu.",
      duree: "10 min",
      etapes: [
        "Sur la page d’accueil d’Inclus’IA, choisissez la tuile : CAA pour une phrase, Tableau de communication pour les mots d’une situation, Séquentiel illustré pour une routine, Scénario social pour une situation à préparer. Une même situation peut appeler les deux derniers : le séquentiel dit quoi faire et dans quel ordre, affiché sur place, à chaque fois ; le scénario social aide à comprendre à l’avance une situation nouvelle ou rare, et se lit plusieurs fois avant.",
        "Si vous hésitez sur ce qu’on attend, cliquez d’abord sur « Remplir avec un exemple ».",
        "Décrivez le niveau, le profil de l’élève (ce que vous observez) et la phrase, la situation ou la routine — sans aucun nom : « mon camarade », « l’adulte ».",
        "Générez les instructions (Ctrl+Entrée), parcourez-les, puis envoyez-les à l’IA intégrée.",
        "Sur la planche, repérez ce que le site signale — la négation surtout —, puis changez un pictogramme, un mot ou une case si besoin.",
        "Choisissez la mise en page (bande, séquentiel ou cartes) et le format de téléchargement.",
      ],
      champs: [
        {
          id: "module",
          type: "choix",
          libelle: "Le module utilisé",
          options: [
            "CAA",
            "Tableau de communication",
            "Séquentiel illustré",
            "Scénario social",
          ],
        },
        {
          id: "situation",
          type: "texte-long",
          libelle: "La situation ou la phrase, telle que vous l’avez décrite",
          aide: "Sans prénom ni détail qui permettrait de reconnaître l’élève. Vos réponses restent dans votre navigateur.",
          lignes: 3,
        },
        {
          id: "corrections",
          type: "texte-long",
          libelle: "Ce que vous avez corrigé sur la planche avant d’imprimer",
          aide: "Une case « non » ajoutée, un pictogramme remplacé, un mot changé, une étape retirée… ou « rien ». Sans nom d’élève ni d’adulte.",
          lignes: 3,
        },
        {
          id: "mise-en-page",
          type: "choix",
          libelle: "La mise en page retenue",
          options: ["Bande", "Séquentiel", "Cartes", "Pas encore imprimée"],
          facultatif: true,
        },
      ],
      retour: {
        titre: "Ce qu’on vérifie",
        texte:
          "Une planche utile dit exactement ce que vous vouliez dire, et elle sera là où l’élève en a besoin. Relisez vos notes à la lumière de ces repères :",
        points: [
          "Le module correspond à ce que vous aviez : une phrase pour la CAA, les mots d’une situation pour le tableau, une routine pour le séquentiel, une situation à préparer pour le scénario social.",
          "Une phrase négative a reçu sa case « non ».",
          "Un tableau commence par le vocabulaire noyau, permet de dire que ça ne va pas et compte de 12 à 20 mots.",
          "Un séquentiel compte de 4 à 8 étapes à l’infinitif, se termine par l’étape qui signe la fin et sera affiché sur place.",
          "Un scénario social compte de 5 à 8 phrases à la première personne, sans « je dois » ni promesse, avec une solution de repli.",
          "Aucun nom — d’élève ou d’adulte — n’est passé par l’outil : photos et prénoms s’ajoutent sur la planche imprimée.",
        ],
      },
      suite: {
        href: "/formations/inclusia/relire-et-adapter",
        libelle: "Module 7 — Relire, ajuster, exporter",
      },
    },

    {
      type: "liens",
      titre: "Pour aller plus loin",
      liens: [
        {
          libelle: "Module 2 — Décrire un besoin sans exposer un élève",
          href: "/formations/inclusia/decrire-sans-exposer",
          description:
            "La règle d’or, le garde-fou RGPD, passer de l’étiquette à ce que l’on observe.",
        },
        {
          libelle: "Module 8 — Travailler en équipe autour d’un élève",
          href: "/formations/inclusia/travailler-en-equipe",
          description:
            "Professeur, AESH, vie scolaire : qui observe, qui relit, qui fait vivre la planche.",
        },
        {
          libelle: "Décrire sans étiqueter",
          href: "/formations/inclusia/ressources/observables",
          description:
            "Des formulations pour décrire la façon de communiquer d’un élève, ou sa réaction à l’imprévu, sans diagnostic.",
        },
        {
          libelle: "La charte IA du lycée",
          href: "/formations/ia-usages-numeriques/la-charte-ia",
          description:
            "Aucune donnée personnelle d’élève — nom, photo, santé — dans un outil d’IA.",
        },
        {
          libelle: "Glossaire",
          href: "/formations/inclusia/ressources/glossaire",
          description:
            "CAA, ARASAAC, clé de Fitzgerald, vocabulaire noyau, TEACCH, scénario social…",
        },
        {
          libelle: "Cas d’usage — cas 17 à 20",
          href: "https://inclusia.forge.apps.education.fr/cas-usage/",
          description:
            "Les quatre exemples avant / après de la famille « Communiquer autrement ».",
        },
        {
          libelle: "Bibliothèque d’instructions",
          href: "https://inclusia.forge.apps.education.fr/prompts/",
          description:
            "Les quatre instructions complètes, en « Vue par blocs » ou en « Texte brut ».",
        },
      ],
    },
  ],
};
