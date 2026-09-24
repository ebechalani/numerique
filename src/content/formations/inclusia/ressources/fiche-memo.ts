import type { SectionDeroule } from "@/content/types";

/**
 * Ressource « Fiche mémo » du tutoriel Inclus’IA — l’essentiel à imprimer : les
 * cinq étapes, la règle d’or, quel module pour quelle situation, la relecture
 * avant de donner un document à un élève, que faire si l’IA intégrée ne répond
 * pas, les liens utiles. Textes volontairement brefs : le détail de chaque
 * module est dans la ressource « Les vingt modules ».
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
          "Inclus’IA n’est pas un générateur clé en main : sur les cinq étapes, trois vous appartiennent — la première et les deux dernières.",
      },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "Vous décrivez. Choisissez la tuile du module sur la page d’accueil, puis décrivez la situation dans vos mots, sans nom ni diagnostic. Pour essayer sans rien écrire : le lien « Remplir avec un exemple », sous le formulaire.",
          "Inclus’IA assemble. Ctrl+Entrée (« Générer les instructions ») : les instructions s’affichent en clair. Vérifiez-les avant tout envoi.",
          "L’IA répond. L’IA intégrée (ILaaS, avec Albert en secours) ou, en copiant les instructions, une autre IA — au lycée, Copilot Chat avec votre compte Microsoft 365 de l’établissement.",
          "Vous relisez. Un brouillon expert, avec des points de vigilance qui disent où regarder en premier. S’il ne convient pas, recommencez en ajustant votre description.",
          "Vous adaptez. Coupez, ajustez, contextualisez, puis téléchargez en .doc, .odt ou .pdf : la séance finale est la vôtre.",
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
              "Discipline, niveau, objectif, contraintes, la classe — exemple du guide : « CM1, 25 élèves dont 3 avec PAP », pas « classe ordinaire ».",
              "Ce que vous observez : situation, fréquence, durée, ce qui suit.",
              "Le support de cours, sans nom ni annotation d’élève.",
            ],
          },
          {
            verdict: "encadre",
            titre: "À reformuler",
            precision: "avant de saisir",
            items: [
              "« Un élève TDAH » → « un élève qui a du mal à se concentrer ».",
              "« Est agité » → « se lève et circule pendant le travail écrit, environ quatre fois par séance ».",
              "Un détail rare qui ferait reconnaître l’élève : retirez-le s’il ne sert pas l’adaptation.",
            ],
          },
          {
            verdict: "interdit",
            titre: "Jamais",
            precision: "ni ici, ni dans une autre IA",
            items: [
              "Le nom ou le prénom d’un élève, même en pictogrammes : écrivez « mon camarade », puis ajoutez sa photo sur la planche imprimée.",
              "Une adresse, un téléphone, un e-mail.",
              "Les notes d’un élève, une information sur sa santé (diagnostic, traitement, suivi), sa copie, son bilan, son plan d’accompagnement, sa photo.",
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
        titre: "Le garde-fou rappelle, il ne bloque pas",
        texte:
          "Le garde-fou RGPD (règlement général sur la protection des données) signale par un avertissement orange un nom propre, un diagnostic médical, une adresse, un téléphone ou un e-mail. L’envoi n’est pas bloqué : c’est un rappel, pas une interdiction. Pas d’avertissement ne veut pas dire anonyme : relisez ce que vous saisissez. Il ne contrôle pas non plus ce que vous collez dans une autre IA.",
      },
    ],
  },

  {
    slug: "quel-module",
    titre: "Quel module pour quelle situation",
    blocs: [
      {
        type: "tableau",
        entetes: ["Votre situation", "Module"],
        lignes: [
          [
            "Une séance accessible à tous dès le départ — conception universelle de l’apprentissage (CUA)",
            "Conception CUA",
          ],
          [
            "Une consigne en trois versions — soutien, standard, expert",
            "Différenciation",
          ],
          [
            "Une séance déjà écrite qui ne fonctionne plus",
            "Analyse CUA",
          ],
          [
            "Des élèves qui font le travail sans voir ce qu’ils apprennent",
            "Expliciter une tâche",
          ],
          [
            "Un QCM qui évalue la notion, pas la lecture",
            "Concevoir un QCM",
          ],
          [
            "Un texte trop dense, à réécrire en langage simple",
            "FALC",
          ],
          [
            "Un texte au bon niveau, mais des mots qui bloquent la compréhension",
            "Aide à la lecture",
          ],
          ["Un élève qui comprend très peu le français", "Allophone"],
          [
            "Un élève bloqué aux transitions, qui sort quand le bruit monte",
            "Adaptations TSA",
          ],
          ["Un élève sourd ou malentendant", "Surdité"],
          [
            "Un élève aveugle ou malvoyant ; une image à rendre accessible",
            "Déficience visuelle",
          ],
          [
            "Le tracé ou la copie empêchent d’évaluer le savoir",
            "Handicap moteur",
          ],
          [
            "Un élève qui bute sur l’énoncé ou sur le nombre",
            "Maths & dyscalculie",
          ],
          [
            "Un élève qui comprend le texte lu à voix haute, pas sur la feuille",
            "Dyslexie",
          ],
          [
            "Un élève qui finit toujours en avance et s’ennuie",
            "Haut potentiel",
          ],
          ["Des comportements qui bloquent la classe", "Accompagnement"],
          [
            "Une phrase que doit pouvoir dire un élève qui ne s’exprime pas oralement",
            "CAA",
          ],
          [
            "Les mots pour que l’élève s’exprime dans une situation, comme la cantine",
            "Tableau de communication",
          ],
          [
            "Une routine que l’élève doit mener seul",
            "Séquentiel illustré",
          ],
          [
            "Une situation où l’imprévu est un obstacle, comme une sortie",
            "Scénario social",
          ],
        ],
      },
      {
        type: "encadre",
        ton: "info",
        titre: "Un module n’est pas un diagnostic",
        texte:
          "Vous partez de ce que vous observez chez un élève, jamais d’un diagnostic : le nom du module guide votre choix ; dans le formulaire, vous décrivez des faits. Les instructions citent le cadre français (PAP, PPS, MDPH, ESS…) ; au lycée, les plans d’accompagnement suivent les procédures de l’établissement : l’équipe de direction vous oriente.",
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
          "Exactitude disciplinaire, bon niveau, même objectif que la classe ; bon référentiel — le socle commun ne couvre que le CP à la 3e, ni la maternelle ni le lycée.",
          "Rien d’inventé : référence, page, document, image non fournie. Toute traduction relue par une personne qui maîtrise la langue.",
          "Partie à remettre à l’élève : sans méta-commentaire ni désignation d’élève, mise en forme appliquée par vous, faisable dans votre classe. Pour un élève suivi par l’équipe, relisez à deux : le professeur de la classe valide cette partie.",
          "Planche de pictogrammes : l’IA ne dessine rien ; vérifiez chaque image et le mot écrit dessous — chaque case reste modifiable. Une négation ? Ajoutez une case « non » : sans elle, la bande peut dire le contraire.",
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
          "Relisez les instructions — elles reprennent ce que vous avez saisi —, puis copiez-les en un clic, à l’étape 2.",
          "Collez-les dans Copilot Chat, avec votre compte Microsoft 365 du lycée.",
          "Recollez la réponse sous le panneau de résultat, avec « J’ai utilisé une autre IA — coller le résultat ». Vous retrouvez la mise en forme, la lecture audio et les téléchargements ; le résultat collé est identifié comme tel.",
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
        liens: [
          {
            libelle: "Inclus’IA — page d’accueil",
            href: "https://inclusia.forge.apps.education.fr/",
            description: "Les tuiles des modules : c’est là que tout commence.",
          },
          {
            libelle: "Guide d’utilisation",
            href: "https://inclusia.forge.apps.education.fr/guide/",
            description: "Les quatre étapes, la protection des données, les fonctionnalités.",
          },
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
            libelle: "Glossaire",
            href: "/formations/inclusia/ressources/glossaire",
            description: "Les sigles — CUA, CAA, FALC, PAP, PPS… — expliqués simplement.",
          },
          {
            libelle: "La charte IA du lycée",
            href: "/formations/ia-usages-numeriques/la-charte-ia",
            description: "Données personnelles, relecture humaine, transparence.",
          },
        ],
      },
      {
        type: "paragraphe",
        texte:
          "Pour la version imprimée : inclusia.forge.apps.education.fr (accueil) ; la même adresse suivie de /guide/, /demarche/, /cas-usage/ ou /prompts/ (guide, démarche, cas d’usage, bibliothèque d’instructions) ; m2pa.forge.apps.education.fr (Planification M2PA, outil complémentaire).",
      },
    ],
  },
];
