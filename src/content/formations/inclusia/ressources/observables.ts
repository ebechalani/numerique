import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Décrire sans étiqueter » — une banque de formulations pour
 * remplir les formulaires d’Inclus’IA sans exposer un élève : la règle d’or,
 * un tableau par domaine (au lieu d’écrire · écrivez plutôt · module utile),
 * la description de la classe et ce qui ne se saisit jamais.
 *
 * Tirée des pages « Guide d’utilisation » (protection des données, conseils),
 * « Démarche » (principes), « Cas d’usage » (exemples 3 à 20) et
 * « Bibliothèque d’instructions » (CONTEXTE et CONTRAINTES des modules) d’Inclus’IA,
 * telles qu’en ligne le 24 septembre 2026. Les formulations « Écrivez plutôt »
 * sont des exemples à adapter ; celles qui viennent des sources le sont
 * mot pour mot.
 */

/** Les trois colonnes de chaque tableau de domaine. */
const COLONNES = ["Au lieu d’écrire", "Écrivez plutôt", "Module utile"];

export const observables: SectionDeroule[] = [
  {
    slug: "regle-d-or",
    titre: "La règle d’or",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Cette page rassemble des formulations pour remplir les formulaires d’Inclus’IA sans exposer un élève : domaine par domaine, ce qu’on a tendance à écrire, ce qu’il vaut mieux écrire, et le module où la description servira. Elle applique la règle d’or que le site pose dans sa démarche : « décrire les difficultés observées sans nommer ni catégoriser ».",
      },
      {
        type: "citation",
        texte:
          "Règle d’or : décrivez les difficultés observées sans utiliser de terme médical. Écrivez « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ». Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève/étudiant.",
        source: "Inclus’IA, Guide d’utilisation — Protection des données",
      },
      {
        type: "cartes",
        colonnes: 3,
        cartes: [
          {
            titre: "Protéger l’élève",
            texte:
              "Un nom, un diagnostic, une information de santé sont des données personnelles, et parmi les plus sensibles. La charte du lycée ne transige pas : jamais de données personnelles d’élèves dans un outil d’IA, quel que soit le compte.",
          },
          {
            titre: "Obtenir de meilleures adaptations",
            texte:
              "Les instructions partent de ce que vous décrivez : « observable → besoin → adaptations » pour Adaptations TSA, « obstacle → besoin → adaptation » pour Maths & dyscalculie. Une étiquette ne dit pas quoi faire lundi matin ; « reste assis quand la classe change d’activité », si.",
          },
          {
            titre: "Rester dans son rôle",
            texte:
              "Le diagnostic relève des professionnels de santé : les instructions le rappellent et interdisent à l’IA d’en poser un. À l’école revient la description des observables et l’aménagement pédagogique.",
          },
        ],
      },
      {
        type: "encadre",
        ton: "attention",
        titre: "Le garde-fou rappelle, il ne filtre pas",
        texte:
          "Un diagnostic médical, une adresse e-mail, un numéro de téléphone ou une adresse postale font apparaître un avertissement orange ; la page Démarche ajoute les noms propres à la liste. Mais l’envoi n’est pas bloqué — « c’est un rappel, pas une interdiction » —, et une combinaison de détails anodins qui ferait reconnaître un élève n’est pas dans la liste. Si vous copiez les instructions pour une autre IA, le guide le redit : aucune donnée personnelle identifiant un élève.",
      },
    ],
  },

  {
    slug: "methode",
    titre: "Une description utile, en quatre points",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Les instructions des modules Accompagnement et Adaptations TSA disent ce qu’elles attendent : rester « dans le registre de l’observable » — ce qui se voit et s’entend —, sans interpréter l’intention ni l’état intérieur de l’élève. Celle d’Accompagnement demande même de reformuler tout comportement décrit « en termes interprétatifs ».",
      },
      {
        type: "cartes",
        colonnes: 4,
        cartes: [
          {
            numero: "1",
            titre: "La situation",
            texte:
              "Quand, pendant quelle activité : « pendant le travail écrit », « au retour de récréation », « en fin de matinée ».",
          },
          {
            numero: "2",
            titre: "Le comportement",
            texte:
              "Ce que l’élève fait, avec des verbes d’action : « se lève et circule », « quitte la salle », « ne commence pas seul ».",
          },
          {
            numero: "3",
            titre: "La fréquence, la durée",
            texte:
              "« Environ quatre fois par séance », « au bout de dix minutes », « depuis la rentrée ».",
          },
          {
            numero: "4",
            titre: "Ce qui suit, ce qui aide",
            texte:
              "Ce qui se passe ensuite, et ce qui marche déjà : « reprend quand on lui montre la première étape ».",
          },
        ],
      },
      {
        type: "citation",
        texte:
          "Écrire « se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée » plutôt que « est agité », « provoque » ou « ne veut pas travailler ».",
        source: "Instruction du module Accompagnement, v1.5.0 — bibliothèque d’instructions d’Inclus’IA",
      },
      {
        type: "paragraphe",
        texte:
          "Pour vous relire, deux questions suffisent. Un collègue qui entrerait dans la classe pourrait-il le voir ou l’entendre ? Votre phrase prête-t-elle une intention ou un état d’âme — « il ne veut pas », « il le fait exprès », « il s’en moque » ? Si la première réponse est non ou la seconde oui, reformulez. Notez aussi ce que l’élève réussit : plusieurs exemples de la page Cas d’usage commencent par là — « l’élève sait ce qu’est une fraction », « comprend parfaitement le texte quand on le lui lit ».",
      },
      {
        type: "requete",
        titre: "Trame d’une description, à compléter",
        texte:
          "Situation : pendant [type d’activité, moment de la journée]\nCe que l’élève fait : [des verbes d’action]\nFréquence et durée : environ [nombre] fois par [séance, semaine], pendant [durée]\nCe qui suit : [ce qui se passe ensuite]\nCe que l’élève réussit, ce qui l’aide déjà : [même un peu]",
        commentaire:
          "Remplissez-la hors de l’outil, gardez ce qui sert l’adaptation, puis reprenez-la dans le formulaire du module. Jamais de nom : « l’élève ».",
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Comment lire la colonne « Module utile »",
        texte:
          "Elle indique où votre description servira, pas ce que l’élève « a ». Choisir le module Dyslexie ou Adaptations TSA ne pose aucun diagnostic — leurs instructions interdisent d’ailleurs à l’IA d’en poser ou d’en confirmer un — et, quel que soit le module, c’est un observable que vous écrivez dans les champs. Quand la difficulté touche plusieurs élèves, pensez d’abord aux modules qui adaptent la séance pour toute la classe : Conception CUA, Différenciation, Expliciter une tâche.",
      },
    ],
  },

  {
    slug: "attention",
    titre: "Attention et entrée dans la tâche",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le guide donne lui-même l’exemple : « un élève/étudiant qui a du mal à se concentrer » plutôt que « un élève/étudiant TDAH ». Allez un cran plus loin : à quel moment l’attention décroche, au bout de combien de temps, et ce qui ramène l’élève au travail.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Élève TDAH »",
            "Décroche de l’écoute après une dizaine de minutes de cours dialogué ; reprend le fil quand l’adulte lui parle directement.",
            "Accompagnement ; Conception CUA pour toute la classe",
          ],
          [
            "« Ne se met jamais au travail »",
            "Ne commence pas seul le travail écrit : attend, regarde ses voisins ; démarre quand l’adulte lui montre la première étape.",
            "Différenciation (version soutien) ; Accompagnement",
          ],
          [
            "« Rêveur, toujours ailleurs »",
            "Pendant les consignes orales, regarde par la fenêtre ; demande ensuite ce qu’il faut faire, trois ou quatre fois par séance.",
            "Conception CUA (la consigne sous plusieurs formats)",
          ],
          [
            "« Bâcle son travail »",
            "Rend la fiche en dix minutes quand la classe en met trente ; les réponses tiennent en une ligne et ne citent pas les documents.",
            "Expliciter une tâche (critères de réussite en mots d’élève)",
          ],
        ],
      },
    ],
  },

  {
    slug: "comportement",
    titre: "Comportement",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "C’est le cœur du module Accompagnement. Son instruction attend « la situation déclenchante, le comportement lui-même, sa fréquence, sa durée, ce qui suit », et reçoit aussi le contexte — classe entière, petit groupe, individuel — et les ressources disponibles.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Très agité, provoque, ne veut rien faire »",
            "Se lève et circule pendant le travail écrit, environ quatre fois par séance, surtout en fin de matinée.",
            "Accompagnement",
          ],
          [
            "« Insolent »",
            "Répond à voix haute sans lever la main, quatre ou cinq fois par heure, surtout pendant la correction collective ; s’arrête quand la règle lui est rappelée, reprend dix minutes plus tard.",
            "Accompagnement",
          ],
          [
            "« Violent »",
            "A poussé un camarade dans le rang, au retour de récréation, deux fois cette semaine ; les deux fois juste après une remarque d’un autre élève.",
            "Accompagnement ; et l’équipe, selon l’organisation du lycée",
          ],
          [
            "« Il le fait exprès »",
            "Parle fort dès que le travail écrit commence ; se calme quand la tâche est découpée en étapes courtes, avec un repère visuel.",
            "Accompagnement",
          ],
        ],
      },
      {
        type: "requete",
        titre: "Exemple de description — module Accompagnement",
        texte:
          "Pendant le travail écrit individuel, se lève et circule dans la classe, environ quatre fois par séance de 55 minutes, surtout en fin de matinée. Revient à sa place quand l’adulte le lui demande, puis se relève quelques minutes plus tard. Reste assis plus longtemps quand la tâche est découpée en étapes courtes.",
        commentaire:
          "Construit sur la reformulation que cite l’instruction du module. Remplacez chaque élément par ce que vous avez réellement observé.",
      },
    ],
  },

  {
    slug: "transitions",
    titre: "Transitions et imprévu",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Dans l’exemple de la page Cas d’usage consacré au module Adaptations TSA, la fiche est organisée par domaine — transitions, entrée dans la tâche, sensorialité — avec pour chacun un observable, un besoin, des adaptations : l’instruction part des seuls observables sélectionnés par l’enseignant, « organisés par domaine de fonctionnement ». Pour une routine à apprendre ou une situation à préparer, Séquentiel illustré et Scénario social prennent le relais.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Rigide, ne supporte pas le changement »",
            "Reste assis quand la classe change d’activité ; se lève quand l’adulte le lui annonce à part, quelques minutes avant.",
            "Adaptations TSA",
          ],
          [
            "« Fait une crise quand le programme change »",
            "Quitte la salle quand un cours est remplacé ou déplacé sans avoir été annoncé — deux fois depuis la rentrée.",
            "Scénario social ; Adaptations TSA",
          ],
          [
            "« Pas autonome »",
            "Connaît les gestes d’une routine mais pas leur ordre : à chaque passage aux toilettes, il faut quatre rappels d’adulte.",
            "Séquentiel illustré",
          ],
          [
            "« Angoissé par la sortie »",
            "La veille d’une sortie, demande plusieurs fois où l’on va, avec qui, et à quelle heure on rentre.",
            "Scénario social",
          ],
        ],
      },
    ],
  },

  {
    slug: "sensorialite",
    titre: "Sensorialité",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "L’instruction du module Adaptations TSA demande de tenir compte des particularités sensorielles : un espace ou un temps de répit, les outils de réduction des stimulations, aucune double tâche sensorielle. Décrivez la source — bruit, lumière, foule, contact —, la réaction, et ce qui apaise.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Hypersensible »",
            "Quitte la salle quand le niveau sonore monte, en travail de groupe comme à la cantine ; revient seul au bout de quelques minutes.",
            "Adaptations TSA",
          ],
          [
            "« Fait des crises au self »",
            "Au self, se bouche les oreilles puis laisse son plateau quand la file est longue et bruyante.",
            "Scénario social (préparer le passage au self) ; Adaptations TSA",
          ],
          [
            "« Ne supporte pas qu’on le touche »",
            "Se recule quand un adulte lui pose la main sur l’épaule pour attirer son attention ; répond calmement quand on l’appelle de face.",
            "Adaptations TSA",
          ],
        ],
      },
    ],
  },

  {
    slug: "lecture",
    titre: "Lecture",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Trois modules touchent à la lecture, et leurs instructions tracent la frontière : FALC réécrit la forme du texte, Aide à la lecture le garde intact et ajoute un lexique et des résumés, Dyslexie agit sur l’accès — mise en forme, quantité, canal. D’où l’intérêt de noter où l’élève bute : le déchiffrage, les mots, ou la densité. Si c’est la langue française elle-même, voyez plus bas.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Dyslexique »",
            "Comprend le texte quand on le lui lit ; seul, n’en vient pas à bout : le temps passe à déchiffrer et la question de compréhension n’est jamais atteinte.",
            "Dyslexie",
          ],
          [
            "« Ne comprend rien à ce qu’il lit »",
            "Déchiffre correctement mais perd le fil, bloqué par des mots comme « en revanche » ou « néanmoins ».",
            "Aide à la lecture",
          ],
          [
            "« Trop faible pour ce texte »",
            "Ne traite pas seul une consigne de trois lignes qui enchaîne plusieurs actions ; réussit quand chaque action a sa propre ligne.",
            "FALC ; Différenciation",
          ],
        ],
      },
    ],
  },

  {
    slug: "ecriture",
    titre: "Écriture et geste",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "L’instruction du module Handicap moteur le dit en une phrase : « Ne jamais évaluer le geste quand on veut évaluer le savoir. » Décrivez donc ce que l’élève sait, puis ce qui coince dans le geste : tracé, copie, vitesse, fatigue.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Dyspraxique »",
            "Comprend les propriétés géométriques, mais le tracé tremble, la règle glisse, et la copie prend deux fois plus de temps que pour la classe.",
            "Handicap moteur",
          ],
          [
            "« Écriture illisible, travail sale »",
            "Après une dizaine de lignes, l’écriture devient illisible ; s’arrête pour secouer la main.",
            "Handicap moteur",
          ],
          [
            "« Ne copie jamais le cours »",
            "Dans le temps donné, copie depuis le tableau la moitié de ce que copie la classe ; le cours reste incomplet.",
            "Handicap moteur ; Dyslexie",
          ],
          [
            "« Nul en orthographe »",
            "En histoire, l’orthographe d’usage est très fragile — plus de dix erreurs par paragraphe —, alors que les idées et le vocabulaire sont justes.",
            "Dyslexie (l’orthographe dissociée de ce qui est évalué)",
          ],
        ],
      },
    ],
  },

  {
    slug: "nombre",
    titre: "Nombre et calcul",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "L’instruction Maths & dyscalculie demande de distinguer toujours ce qui relève de la difficulté mathématique de ce qui relève de la charge de lecture de l’énoncé. Votre description doit permettre ce tri : ce que l’élève sait faire, et l’endroit exact où il décroche. Le module vaut aussi pour des « difficultés en mathématiques », dit son instruction.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Dyscalculique »",
            "Sait ce qu’est une fraction ; devant un problème long, ne démarre pas : les nombres sont noyés dans le texte, et le choix de l’opération bloque.",
            "Maths & dyscalculie",
          ],
          [
            "« Nul en maths »",
            "En 2nde, pose correctement l’équation mais se trompe dans les calculs avec des fractions ; réussit quand la procédure est écrite sous ses yeux.",
            "Maths & dyscalculie (aides mémoire)",
          ],
          [
            "« N’apprend pas ses tables »",
            "Retrouve 6 × 7 en recomptant à partir de 6 × 5 ; d’une séance à l’autre, oublie les résultats appris.",
            "Maths & dyscalculie",
          ],
        ],
      },
    ],
  },

  {
    slug: "langue",
    titre: "Langue française",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le module Allophone calibre la langue sur l’un des quatre niveaux cités par son instruction — « Ne parle pas français », « Quelques mots », « Phrases simples », « Conversations basiques » — ou sur un code CECRL (A1, A2, B1…) s’il est connu. Indiquez la langue maternelle : sans elle, pas de lexique bilingue. Le pays d’origine et le parcours de l’élève, eux, n’apportent rien à l’adaptation.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Ne comprend rien au français »",
            "Comprend les consignes courtes accompagnées d’un geste ; répond par des mots isolés. Langue maternelle : arabe.",
            "Allophone",
          ],
          [
            "« Niveau de français catastrophique »",
            "Niveau A2 : comprend des phrases courtes sur des situations familières ; ne peut pas encore rédiger une synthèse. Langue maternelle : anglais.",
            "Allophone",
          ],
          [
            "« Réfugié arrivé de [pays] en janvier, vit chez un oncle »",
            "Langue maternelle : [langue]. Niveau de français : « Phrases simples ».",
            "Allophone — rien d’autre n’est utile",
          ],
          [
            "« Comprend mal les textes en français »",
            "Suit le cours à l’oral ; dans les documents écrits, bute sur des mots courants de la langue écrite comme « établir » ou « répartir ».",
            "Aide à la lecture, avec la langue maternelle pour la colonne de traduction",
          ],
        ],
      },
    ],
  },

  {
    slug: "communication",
    titre: "Communication orale",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Pour un élève qui ne s’exprime pas oralement, les instructions CAA et Tableau de communication partent de son profil de communication. Décrivez ce qu’il fait pour se faire comprendre, pas ce qui lui manque : le tableau doit contenir les mots dont l’élève a besoin pour demander, refuser, choisir, signaler un problème.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Élève non verbal »",
            "Ne s’exprime pas oralement ; désigne du doigt, tire l’adulte par la manche, se met en colère quand on ne comprend pas.",
            "CAA ; Tableau de communication",
          ],
          [
            "« Dit oui à tout »",
            "À la cantine, acquiesce à toutes les propositions de l’adulte, ou refuse tout en bloc ; ne montre pas son choix.",
            "Tableau de communication",
          ],
          [
            "« Ne comprend pas l’humour »",
            "Demande ce que veut dire « il pleut des cordes » ; prend une remarque ironique au pied de la lettre.",
            "FALC (ni ironie ni sens figuré) ; Adaptations TSA",
          ],
          [
            "« Timide, ne participe jamais »",
            "Ne prend pas la parole devant la classe ; répond quand on l’interroge en binôme ou par écrit.",
            "Conception CUA (plusieurs formats de réponse)",
          ],
        ],
      },
    ],
  },

  {
    slug: "vision",
    titre: "Vision",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le module Déficience visuelle part du type de déficience — « de l’agrandissement à l’accès entièrement non visuel », dit son instruction —, de la nature du support et des adaptations souhaitées. Le guide y annonce le dépôt d’image : un schéma ou un graphique de cours, jamais la photo d’un élève.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Malvoyant, ne voit rien »",
            "Lit en corps 18 au minimum, la feuille à quelques centimètres des yeux ; ne lit pas le tableau depuis le troisième rang.",
            "Déficience visuelle (malvoyance)",
          ],
          [
            "« Ne fait pas d’effort pour lire »",
            "Au bout de vingt minutes de lecture, se frotte les yeux et perd sa ligne ; lit plus longtemps sur un document agrandi et aéré.",
            "Déficience visuelle (malvoyance)",
          ],
          [
            "« Aveugle, ne peut pas faire les exercices »",
            "Travaille avec un lecteur d’écran et une plage braille ; n’a accès ni aux graphiques ni aux schémas du manuel.",
            "Déficience visuelle (cécité)",
          ],
        ],
      },
    ],
  },

  {
    slug: "audition",
    titre: "Audition",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le module Surdité adapte selon le mode de communication de l’élève — bilingue LSF, oraliste avec LPC, ou appui écrit + visuel — et les difficultés visées. Notez les moments où l’information lui échappe : c’est là que porteront les adaptations.",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Sourd, toujours en retard sur les autres »",
            "Accompagné en LSF ; reçoit l’information avec un décalage et perd le fil quand une consigne est donnée pendant qu’une vidéo tourne.",
            "Surdité (bilingue LSF)",
          ],
          [
            "« Malentendant, n’écoute pas »",
            "Comprend en voyant le visage de la personne qui parle ; perd l’échange quand plusieurs élèves parlent à la fois ou quand l’enseignant parle en écrivant au tableau.",
            "Surdité",
          ],
          [
            "« Décroche pendant les vidéos »",
            "Pendant une vidéo sans sous-titres, détourne le regard au bout de quelques minutes ; suit quand une transcription est fournie.",
            "Surdité",
          ],
        ],
      },
    ],
  },

  {
    slug: "en-avance",
    titre: "Un élève en avance, qui semble s’ennuyer",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Le module Haut potentiel part du « profil observé de l’élève », de l’objectif de la classe et du type d’enrichissement souhaité — approfondissement, complexification ou ouverture. Son instruction interdit la « double ration » : décrivez ce que l’élève fait déjà, pas ce qu’il « est ».",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« HPI », « surdoué », « précoce »",
            "Finit les dix exercices de calcul littéral en un quart d’heure, sans erreur, quand la classe en met quarante.",
            "Haut potentiel",
          ],
          [
            "« S’ennuie et perturbe »",
            "Une fois le travail fini, discute avec ses voisins ; reste concentré longtemps quand on lui pose un problème ouvert.",
            "Haut potentiel ; Accompagnement si le comportement devient la question",
          ],
          [
            "« Brillant à l’oral, bâcle l’écrit »",
            "Expose à l’oral un raisonnement complet ; à l’écrit, rédige deux lignes et ne recopie pas au propre.",
            "Haut potentiel (ne pas pénaliser le raisonnement par la longueur d’écrit)",
          ],
          [
            "« Conteste tout »",
            "Demande « à quoi ça sert ? » à chaque nouvelle notion ; s’engage quand le lien avec une autre discipline est expliqué.",
            "Haut potentiel ; Différenciation (version expert)",
          ],
        ],
      },
    ],
  },

  {
    slug: "la-classe",
    titre: "Décrire la classe",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Pour les modules qui travaillent sur une séance, c’est la classe qu’on décrit : ses profils pour Conception CUA, les problèmes observés et les contraintes matérielles pour Analyse CUA, vos constats pour Expliciter une tâche. Le guide donne le modèle : « CM1, 25 élèves/étudiants dont 3 avec PAP » est plus utile que « classe ordinaire ».",
      },
      {
        type: "tableau",
        entetes: COLONNES,
        lignes: [
          [
            "« Classe ordinaire »",
            "2nde, 32 élèves dont 3 avec un plan d’accompagnement ; 4 lisent lentement et ne finissent pas les documents longs ; 2 sont arrivés cette année avec un niveau A2 en français.",
            "Conception CUA",
          ],
          [
            "« Classe faible »",
            "4e, 28 élèves ; tous rendent le paragraphe demandé, mais la moitié ne cite aucun document, et l’évaluation suivante est ratée.",
            "Expliciter une tâche",
          ],
          [
            "« Ma séance ne marche plus »",
            "3e, physique-chimie : un tiers de la classe décroche à la phase d’exercices, deux élèves ne rendent rien ; salle sans ordinateurs.",
            "Analyse CUA",
          ],
          [
            "« Classe bavarde, difficile »",
            "Terminale, 35 élèves ; en travail de groupe, le bruit monte au bout de dix minutes ; les consignes orales sont redemandées plusieurs fois.",
            "Analyse CUA ; Conception CUA",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Au lycée, précisez le niveau exact — 2nde, 1re, Terminale : l’instruction Conception CUA rattache l’objectif au seul référentiel de ce niveau, et le socle commun ne vaut que du CP à la 3e.",
      },
      {
        type: "requete",
        titre: "Trame pour décrire la classe",
        texte:
          "Classe : [niveau], [nombre] élèves, dont [nombre] avec un plan d’accompagnement\nCe que j’observe dans le groupe : [ex. un tiers ne termine pas la phase d’exercices]\nObjectif de la séance : [ce que les élèves doivent avoir appris à la fin]\nContraintes : [durée, salle, matériel disponible ou non]",
        commentaire:
          "Le guide le rappelle : mentionnez la matière, le niveau et l’objectif — l’IA calibre sa réponse en fonction —, et vos contraintes, qui l’aident à proposer des solutions réalistes.",
      },
    ],
  },

  {
    slug: "jamais",
    titre: "Ce qui ne se saisit jamais",
    blocs: [
      {
        type: "feu",
        colonnes: [
          {
            verdict: "autorise",
            titre: "À saisir",
            precision: "ce qui sert l’adaptation",
            items: [
              "Le niveau, la discipline, l’objectif de la séance",
              "Ce que l’élève fait : situation, fréquence, durée, ce qui suit",
              "Ce qu’il réussit, ce qui l’aide déjà",
              "La langue maternelle et le niveau de français (Allophone)",
              "Le mode de communication (Surdité)",
              "Vos contraintes : durée, salle, matériel",
            ],
            note: "→ Toujours sans nom : « l’élève », ou « élève A » comme le veut la charte du lycée.",
          },
          {
            verdict: "encadre",
            titre: "À reformuler",
            precision: "avant d’envoyer",
            items: [
              "Un jugement : « paresseux », « insolent », « classe faible »",
              "Une intention prêtée : « il le fait exprès », « il provoque », « il ne veut pas »",
              "Un état d’âme supposé : « il s’ennuie », « il est angoissé »",
              "Une formule vague : « a des difficultés », « classe ordinaire »",
            ],
            note: "→ Vers un observable : ce qui se voit et s’entend.",
          },
          {
            verdict: "interdit",
            titre: "Jamais",
            precision: "ni ici, ni dans une autre IA",
            items: [
              "Nom, prénom, initiales, surnom",
              "Adresse, téléphone, e-mail",
              "Un diagnostic ou un terme médical — « autisme », « dyslexie », « TDAH » —, même abrégé",
              "Un traitement, un suivi médical ou paramédical",
              "Notes, copies, photos d’élèves",
              "La situation familiale ou sociale",
              "Un détail qui, ajouté aux autres, ferait reconnaître l’élève",
            ],
            note: "→ Le garde-fou n’en repère qu’une partie : noms propres, diagnostics, adresses, téléphones, e-mails.",
          },
        ],
        regleOr: "Décrire les difficultés observées sans nommer ni catégoriser.",
      },
      {
        type: "paragraphe",
        texte:
          "Les documents importés — PDF, Word, image — suivent la même règle : un support de cours, oui ; une copie d’élève, un plan d’accompagnement, un bilan ou une photo d’élève, jamais. Les instructions citent le cadre français — PAP, PPS, ESS, MDPH ; au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
      },
      {
        type: "paragraphe",
        texte:
          "Pour les modules à pictogrammes, l’instruction CAA prévoit qu’un prénom reste sans pictogramme, à remplacer par une photo. Écrivez plutôt « mon camarade » ou « l’adulte » dans la phrase, et collez la photo sur la planche imprimée, hors de l’outil.",
      },
      {
        type: "checklist",
        id: "inclusia-r-obs-avant-envoi",
        consigne:
          "Avant de générer les instructions (Ctrl+Entrée), passez votre description au crible : cochez chaque vérification faite.",
        items: [
          {
            titre: "Aucun nom",
            texte: "Ni nom, ni prénom, ni initiales, ni surnom : « l’élève », ou « élève A ».",
          },
          {
            titre: "Aucun terme médical",
            texte:
              "Pas de diagnostic, même abrégé — même si l’avertissement orange ne s’est pas affiché.",
          },
          {
            titre: "Des faits situés",
            texte:
              "Chaque difficulté dit dans quelle situation, à quelle fréquence, pendant combien de temps.",
          },
          {
            titre: "Aucune intention prêtée",
            texte: "Pas de « il ne veut pas », « il provoque », « il le fait exprès ».",
          },
          {
            titre: "Ce qui réussit",
            texte: "Au moins une chose que l’élève sait faire, ou qui l’aide déjà.",
          },
          {
            titre: "Le strict nécessaire",
            texte:
              "Seuls restent les détails utiles à l’adaptation : rien qui, ajouté au reste, ferait reconnaître l’élève.",
          },
          {
            titre: "Des documents de cours seulement",
            texte:
              "Aucune copie, aucun plan d’accompagnement, aucun bilan, aucune photo d’élève en pièce jointe.",
          },
        ],
      },
    ],
  },

  {
    slug: "aller-plus-loin",
    titre: "Pour aller plus loin",
    blocs: [
      {
        type: "liens",
        liens: [
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
            description:
              "Le module qui enseigne la méthode, avec des cas pratiques et un exercice de réécriture.",
          },
          {
            libelle: "Répondre à un besoin particulier",
            href: "/formations/inclusia/repondre-a-un-besoin",
            description:
              "Les huit modules centrés sur un élève : ce que vous décrivez, ce que vous obtenez.",
          },
          {
            libelle: "Les vingt modules",
            href: "/formations/inclusia/ressources/carte-des-modules",
            description: "Chaque module d’Inclus’IA en une ligne, pour choisir le bon.",
          },
          {
            libelle: "Glossaire",
            href: "/formations/inclusia/ressources/glossaire",
            description: "PAP, PPS, CECRL, LSF, CAA… : les sigles de cette page, expliqués.",
          },
          {
            libelle: "La charte IA du lycée",
            href: "/formations/ia-usages-numeriques/la-charte-ia",
            description:
              "Données personnelles, relecture, transparence : les règles de l’établissement.",
          },
          {
            libelle: "Le guide d’utilisation d’Inclus’IA",
            href: "https://inclusia.forge.apps.education.fr/guide/",
            description:
              "Les conseils de saisie et la protection des données, sur le site de l’outil.",
          },
        ],
      },
    ],
  },
];
