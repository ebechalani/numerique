import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Fiche mémo » du tutoriel Inclus’IA — l’essentiel à imprimer, en
 * deux pages : les cinq étapes, la règle d’or, quel module pour quelle
 * situation, la relecture avant de donner un document à un élève, que faire si
 * l’IA intégrée ne répond pas, les liens utiles. Textes volontairement brefs.
 *
 * Tiré des pages « Guide d’utilisation », « Démarche », « Cas d’usage » et
 * « Bibliothèque d’instructions » d’Inclus’IA
 * (https://inclusia.forge.apps.education.fr/), telles qu’en ligne le
 * 24 septembre 2026, et de la charte IA du lycée.
 */
export const ficheMemo: SectionDeroule[] = [
  {
    slug: "cinq-etapes",
    titre: "Les cinq étapes",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Inclus’IA n’est pas un générateur clé en main : il transforme votre description d’une situation de classe en instructions expertes, qu’une IA exécute. Sur les cinq étapes, trois vous appartiennent.",
      },
      {
        type: "etapes",
        etapes: [
          {
            titre: "Vous décrivez",
            texte:
              "Choisissez la tuile du module sur la page d’accueil, puis décrivez votre situation dans vos mots : discipline, niveau, objectif, contraintes, observations. Pour essayer sans rien écrire : « Remplir avec un exemple », sous le formulaire.",
          },
          {
            titre: "Inclus’IA assemble",
            texte:
              "Ctrl+Entrée (« Générer les instructions ») : les instructions expertes s’affichent en clair. Vérifiez-les avant tout envoi.",
          },
          {
            titre: "L’IA répond",
            texte:
              "L’IA intégrée (ILaaS, avec Albert en secours), ou l’IA de votre choix : les instructions se copient en un clic.",
          },
          {
            titre: "Vous relisez",
            texte:
              "Vous recevez un brouillon expert, avec des points de vigilance qui disent où regarder en premier.",
          },
          {
            titre: "Vous adaptez",
            texte:
              "Vous coupez, ajustez, contextualisez, puis téléchargez en .doc, .odt ou .pdf. La séance finale est la vôtre.",
          },
        ],
      },
    ],
  },

  {
    slug: "regle-d-or",
    titre: "La règle d’or",
    blocs: [
      {
        type: "feu",
        colonnes: [
          {
            verdict: "autorise",
            titre: "Se saisit",
            precision: "ce qui sert l’adaptation",
            items: [
              "Discipline, niveau, objectif, contraintes (pas de tablettes, salle fixe, temps limité).",
              "La classe : « CM1, 25 élèves dont 3 avec PAP » plutôt que « classe ordinaire ».",
              "Ce que vous observez : situation, fréquence, durée, ce qui suit.",
              "Le support de cours à adapter.",
            ],
          },
          {
            verdict: "encadre",
            titre: "À reformuler",
            precision: "avant de saisir",
            items: [
              "« Un élève TDAH » → « un élève qui a du mal à se concentrer ».",
              "« Est agité » → « se lève et circule pendant le travail écrit, environ quatre fois par séance ».",
              "Un détail rare qui permettrait de reconnaître l’élève sans servir l’adaptation : retirez-le.",
            ],
          },
          {
            verdict: "interdit",
            titre: "Jamais",
            precision: "ni ici, ni dans une autre IA",
            items: [
              "Le nom ou le prénom d’un élève, même dans une phrase à mettre en pictogrammes : écrivez « mon camarade ».",
              "Une adresse, un téléphone, un e-mail.",
              "Une copie, un bilan, un plan d’accompagnement, une photo d’élève.",
            ],
            note: "→ Charte du lycée : aucune donnée personnelle dans un outil d’IA, quel que soit le compte.",
          },
        ],
        regleOr:
          "Décrire les difficultés observées sans nommer ni catégoriser. Ne saisissez jamais de nom, prénom ou information permettant d’identifier un élève.",
      },
      {
        type: "encadre",
        ton: "attention",
        titre: "Le garde-fou RGPD rappelle, il ne bloque pas",
        texte:
          "Un avertissement orange signale un nom propre, un diagnostic médical, une adresse, un téléphone ou un e-mail. L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. Et il ne contrôle pas ce que vous collez dans une autre IA.",
      },
    ],
  },

  {
    slug: "quel-module",
    titre: "Quel module pour quelle situation",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Les vingt modules, dans l’ordre des quatre familles : une séance à écrire, un texte à rendre lisible, un besoin particulier à couvrir, un élève qui n’a pas la parole.",
      },
      {
        type: "tableau",
        entetes: ["Votre situation", "Module", "Vous obtenez"],
        lignes: [
          [
            "Bâtir une séance accessible à tous dès le départ",
            "Conception CUA",
            "Une fiche de séance structurée par les 3 principes CUA",
          ],
          [
            "Une même consigne pour une classe hétérogène",
            "Différenciation",
            "Trois versions — soutien, standard, expert — pour un même objectif",
          ],
          [
            "Une séance déjà écrite qui ne fonctionne plus",
            "Analyse CUA",
            "Les forces, puis des améliorations classées par effort et impact",
          ],
          [
            "Des élèves qui font le travail sans voir ce qu’ils apprennent",
            "Expliciter une tâche",
            "Faire et apprendre séparés, les implicites levés, 3 à 5 critères en mots d’élève",
          ],
          [
            "Évaluer la notion, pas la vitesse de lecture",
            "Concevoir un QCM",
            "Un QCM conforme aux 20 règles de Leclercq, avec rétroaction ; export .json vers Caramel (H5P)",
          ],
          [
            "Un texte trop dense pour être lu seul",
            "FALC",
            "Le texte en FALC et un glossaire — un projet à faire valider",
          ],
          [
            "Garder le texte, lever les mots qui bloquent",
            "Aide à la lecture",
            "Un lexique et un résumé par paragraphe ; le texte reste intact",
          ],
          [
            "Un élève qui comprend très peu le français",
            "Allophone",
            "L’activité calibrée sur son niveau CECRL, un lexique, des phrases modèles à trous",
          ],
          [
            "Un élève qui reste bloqué aux changements d’activité, sort quand le bruit monte",
            "Adaptations TSA",
            "Une fiche par domaine : observable → besoin → adaptations",
          ],
          [
            "Un élève sourd ou malentendant",
            "Surdité",
            "Consignes écrites ou visuelles, lexique-clé illustré, supports donnés à l’avance",
          ],
          [
            "Un élève aveugle ou malvoyant ; une image à rendre accessible",
            "Déficience visuelle",
            "Le support linéarisé, chaque image décrite ; l’IA peut décrire une image que vous déposez",
          ],
          [
            "Le tracé ou la copie empêchent d’évaluer le savoir",
            "Handicap moteur",
            "L’activité à faible charge motrice, des supports pré-formatés",
          ],
          [
            "Un élève qui bute sur l’énoncé ou sur le nombre",
            "Maths & dyscalculie",
            "Des étapes numérotées, un énoncé allégé, de la manipulation, des aides mémoire",
          ],
          [
            "Un élève qui comprend le texte lu à voix haute, pas sur la feuille",
            "Dyslexie",
            "Le même support, accès allégé : mise en forme, quantité, canal, évaluation",
          ],
          [
            "Un élève qui finit toujours en avance et s’ennuie",
            "Haut potentiel",
            "Des tâches plus exigeantes, même objectif, sans « double ration »",
          ],
          [
            "Des comportements qui bloquent la classe",
            "Accompagnement",
            "Des observables, des stratégies en trois paliers, des indicateurs de suivi",
          ],
          [
            "Une phrase qu’un élève sans parole doit pouvoir dire",
            "CAA",
            "Une bande de pictogrammes à imprimer",
          ],
          [
            "Les mots d’une situation précise, comme la cantine",
            "Tableau de communication",
            "Une grille de 12 à 20 mots pour que l’élève s’exprime",
          ],
          [
            "Une routine que l’élève doit mener seul",
            "Séquentiel illustré",
            "De 4 à 8 étapes illustrées, affichées sur place",
          ],
          [
            "Une situation où l’imprévu est un obstacle, comme une sortie",
            "Scénario social",
            "Un récit illustré de 5 à 8 phrases, à la première personne",
          ],
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Les quatre derniers rendent une planche de pictogrammes ARASAAC à imprimer : l’IA découpe et classe, elle ne dessine rien, et chaque case reste modifiable.",
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Un module n’est pas un diagnostic",
        texte:
          "Vous partez de ce que vous observez chez un élève, jamais d’un diagnostic : le nom du module vous oriente, le formulaire décrit des faits.",
      },
    ],
  },

  {
    slug: "relire-avant-de-donner",
    titre: "Relire avant de donner",
    blocs: [
      {
        type: "citation",
        texte:
          "À aucun moment le site ne produit un document prêt à donner à l’élève : ce qui sort de l’IA est un brouillon expert, à relire avant utilisation avec l’élève.",
        source: "Guide d’utilisation d’Inclus’IA",
      },
      {
        type: "liste",
        items: [
          "Les points de vigilance d’abord : ils disent où regarder.",
          "Exactitude disciplinaire : faits, chiffres, définitions.",
          "Même objectif que la classe : on adapte le chemin, pas la destination.",
          "Bon référentiel : au lycée, jamais le socle commun, qui s’arrête à la 3e.",
          "Rien d’inventé : référence, page, document, image non fournie. Quand elles figurent, les lignes « Repris de vos documents : … » et « Ajouté par l’IA : … » aident à le voir.",
          "Traductions relues par une personne qui maîtrise la langue.",
          "Partie à remettre à l’élève : sans méta-commentaire ni désignation d’élève, mise en forme appliquée par vous.",
          "Faisable dans votre classe : matériel, durée, effectif.",
          "« 3 gestes prioritaires à mettre en place dès demain », quand le résultat les donne : pour chacun, le signe observable qui dira qu’on peut l’alléger.",
          "FALC : un projet tant que des personnes concernées ne l’ont pas relu et validé — pas de logo européen sans cette relecture.",
          "Transparence : dites à vos élèves quand un support vient d’une IA.",
        ],
      },
    ],
  },

  {
    slug: "si-l-ia-ne-repond-pas",
    titre: "Si l’IA intégrée ne répond pas",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "L’IA intégrée passe déjà par une cascade de quatre modèles. Si rien n’arrive, les instructions restent utilisables : elles sont écrites pour n’importe quelle IA.",
      },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "Copiez les instructions en un clic, à l’étape 2.",
          "Collez-les dans Copilot Chat, avec votre compte Microsoft 365 du lycée.",
          "Recollez la réponse sous le panneau de résultat : « J’ai utilisé une autre IA — coller le résultat ». Mise en forme, lecture audio et téléchargements suivent ; le résultat collé est identifié comme tel.",
        ],
      },
      {
        type: "encadre",
        ton: "attention",
        texte:
          "Avec une IA externe, aucune donnée personnelle identifiant un élève ne doit être saisie : le garde-fou d’Inclus’IA ne vous suit pas.",
      },
    ],
  },

  {
    slug: "liens-utiles",
    titre: "Liens utiles",
    blocs: [
      {
        type: "liens",
        titre: "Sur le site d’Inclus’IA",
        liens: [
          {
            libelle: "Inclus’IA — page d’accueil",
            href: "https://inclusia.forge.apps.education.fr/",
            description: "Les tuiles des vingt modules.",
          },
          {
            libelle: "Guide d’utilisation",
            href: "https://inclusia.forge.apps.education.fr/guide/",
            description: "Les quatre étapes, la protection des données, les fonctionnalités.",
          },
          {
            libelle: "La démarche",
            href: "https://inclusia.forge.apps.education.fr/demarche/",
            description: "Les cinq étapes, les quatre principes, ce que le site n’est pas.",
          },
          {
            libelle: "Cas d’usage",
            href: "https://inclusia.forge.apps.education.fr/cas-usage/",
            description: "Un exemple avant / après par module — illustratif.",
          },
          {
            libelle: "Bibliothèque d’instructions",
            href: "https://inclusia.forge.apps.education.fr/prompts/",
            description: "Les vingt instructions, versionnées, lisibles sans rien remplir.",
          },
          {
            libelle: "Planification M2PA",
            href: "https://m2pa.forge.apps.education.fr/",
            description:
              "L’outil complémentaire vers lequel renvoie la tuile M2PA — pas l’un des vingt modules.",
          },
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Sur papier : inclusia.forge.apps.education.fr pour l’accueil, suivie de /guide/, /demarche/, /cas-usage/ ou /prompts/ ; m2pa.forge.apps.education.fr pour la M2PA.",
      },
      {
        type: "liens",
        titre: "Dans ce tutoriel",
        liens: [
          {
            libelle: "Les vingt modules",
            href: "/formations/inclusia/ressources/carte-des-modules",
            description: "Ce que vous décrivez, ce que vous obtenez, module par module.",
          },
          {
            libelle: "Décrire sans étiqueter",
            href: "/formations/inclusia/ressources/observables",
            description: "Des formulations pour passer de l’étiquette à l’observable.",
          },
          {
            libelle: "Décrire un besoin sans exposer un élève",
            href: "/formations/inclusia/decrire-sans-exposer",
            description: "Le module sur la règle d’or, pour tout le monde.",
          },
          {
            libelle: "La charte IA du lycée",
            href: "/formations/ia-usages-numeriques/la-charte-ia",
            description: "Données personnelles, relecture humaine, transparence.",
          },
        ],
      },
    ],
  },
];
