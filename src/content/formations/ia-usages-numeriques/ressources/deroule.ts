import type { SectionDeroule } from "@/content/types";

/**
 * Déroulé détaillé pour l’animateur — session de 2 heures.
 * Version 3, septembre 2026. Réservé à l’animation : cette ressource n’est pas
 * destinée aux participants.
 */
export const deroule: SectionDeroule[] = [
  {
    slug: "fiche-synthetique",
    titre: "Fiche synthétique",
    blocs: [
      {
        type: "paragraphe",
        texte:
          "Animation : Eddy Bachaalany, référent numérique. Supports associés : diaporama de la session (25 diapositives) · fiche outils remise aux participants · charte d’usage de l’IA de l’établissement.",
      },
      {
        type: "tableau",
        entetes: ["Rubrique", "Détail"],
        lignes: [
          [
            "Public",
            "Enseignants du collège et du lycée (toutes disciplines). Vie scolaire bienvenue.",
          ],
          [
            "Durée / format",
            "2 heures — apports courts, cas pratiques, atelier guidé puis atelier de production par discipline.",
          ],
          [
            "Effectif conseillé",
            "Jusqu’à 40 personnes en plénière ; groupes de 3 à 4 pour les ateliers (par discipline ou niveau).",
          ],
          [
            "Matériel",
            "Vidéoprojecteur, wifi fiable, un ordinateur portable par participant (ou un pour deux), multiprises. Fiche outils imprimée pour chacun. Chaque participant vient avec un compte Google actif et un chapitre de son cours en PDF (voir annexe C).",
          ],
          [
            "Outils utilisés",
            "NotebookLM (que Google renomme « Gemini Notebook »), avec un compte Google personnel — outil principal des ateliers : travailler sur ses propres supports de cours (résumés, quiz, flashcards, cartes mentales, résumés audio). Microsoft Copilot Chat avec le compte établissement — outil d’appoint pour la génération libre (exercices, grilles, reformulations). Le sondage d’entrée, la trame de restitution et l’enquête de satisfaction se remplissent sur le site de la formation (pages « participer ») : aucune application externe, aucun compte supplémentaire.",
          ],
          [
            "Objectifs",
            "Comprendre ce qu’est (et n’est pas) une IA générative, et ses limites. Connaître le cadre de l’établissement : charte IA, règles élèves et enseignants, données personnelles. Savoir ancrer une IA sur ses propres supports avec NotebookLM, en tirer des ressources vérifiées — et savoir quand passer par Copilot. Repartir avec une ressource produite et vérifiée, et un message clair pour ses élèves.",
          ],
          [
            "Ce que chacun emporte",
            "Un carnet NotebookLM sur un de ses chapitres avec au moins une ressource vérifiée (guide d’étude, quiz ou résumé audio), la fiche outils, trois phrases à dire aux élèves la première semaine, ses accès vérifiés (Google et Microsoft 365).",
          ],
        ],
      },
    ],
  },

  {
    slug: "preparation",
    titre: "Préparation logistique",
    blocs: [
      { type: "titre", texte: "Avant la session (au plus tard la veille)" },
      {
        type: "etapes",
        etapes: [
          {
            titre: "Comptes Google",
            texte:
              "Envoyer aux participants le message d’invitation (annexe C) : venir avec un compte Google actif, avoir testé l’accès à notebooklm.google.com, apporter un chapitre de cours en PDF. Prévoir des binômes pour ceux qui n’auront pas de compte.",
          },
          {
            titre: "Carnet de démonstration",
            texte:
              "Créer soi-même un carnet NotebookLM avec un chapitre non personnel (PDF) ; générer à l’avance un guide d’étude, un quiz et un résumé audio en français — la génération audio prend plusieurs minutes, il faut l’avoir sous la main le jour J.",
          },
          {
            titre: "Copilot (appoint)",
            texte:
              "Vérifier avec l’administrateur Microsoft 365 que Copilot Chat est actif pour les comptes enseignants ; tester avec un compte enseignant standard.",
          },
          {
            titre: "Collecte des réponses",
            texte:
              "Les trois formulaires (sondage d’entrée, trame de restitution, enquête de satisfaction) sont déjà écrits dans le site : il n’y a rien à créer, seulement à activer la collecte. Renseigner deux variables d’environnement — DATABASE_URL, la chaîne de connexion Postgres qui reçoit les réponses, et CODE_ANIMATEUR, le code d’accès au tableau de bord, à changer à chaque session. Sur Vercel : Project Settings → Environment Variables ; en local, dans .env.local. Puis appliquer le schéma une fois (npm run db:init). Sans DATABASE_URL, les pages de réponse annoncent « collecte non configurée » et la session se tient à main levée.",
          },
          {
            titre: "Ouvrir la session",
            texte:
              "Ouvrir le tableau de bord animateur (/formations/ia-usages-numeriques/animateur), saisir le code, créer la session du jour — un libellé suffit, par exemple « Pré-rentrée 2026 ». Tant qu’aucune session n’est ouverte, les formulaires n’acceptent pas de réponse ; les dépôts d’une session close restent consultables. Une seule session couvre le sondage, la restitution et l’enquête : il n’y a plus de canal Teams ni de bloc-notes OneNote à préparer.",
          },
          {
            titre: "QR codes",
            texte:
              "Le tableau de bord affiche les QR codes des trois pages (sondage, restitution, satisfaction) une fois la session ouverte. Les projeter au moment voulu, ou les capturer pour les insérer dans le diaporama (diapositives 2 et 25). Écrire aussi l’adresse au tableau, pour ceux qui n’ont pas de téléphone à portée.",
          },
          {
            titre: "Textes de démonstration",
            texte:
              "Préparer 2 ou 3 chapitres de cours non personnels en PDF (extrait de manuel, texte libre de droits) pour ceux qui n’auront rien apporté.",
          },
          {
            titre: "Fiche outils",
            texte:
              "Imprimer un exemplaire par participant ; envoyer aussi la version numérique après la session.",
          },
        ],
      },
      { type: "titre", texte: "La veille" },
      {
        type: "liste",
        items: [
          "Tester le wifi de la salle avec 5 à 10 appareils connectés simultanément (la génération audio consomme davantage) ; prévoir les multiprises.",
          "Plan B hors ligne : captures d’écran des démonstrations et exercices, résumé audio de démonstration téléchargé (en cas de panne de connexion, la session se poursuit en mode démonstration + cas pratiques).",
          "Vérifier que le diaporama s’affiche correctement sur le vidéoprojecteur de la salle.",
        ],
      },
      { type: "titre", texte: "Une heure avant" },
      {
        type: "liste",
        items: [
          "Ouvrir : le diaporama, le carnet NotebookLM de démonstration (connecté), Copilot avec le compte établissement, le tableau de bord animateur (code saisi, session du jour ouverte) et le mur des contributions.",
          "Disposer la salle en îlots de 3-4 (par discipline ou niveau) ; distribuer la fiche outils.",
        ],
      },
    ],
  },

  {
    slug: "minute-par-minute",
    titre: "Déroulé minute par minute",
    blocs: [
      {
        type: "tableau",
        entetes: [
          "Horaire",
          "Durée",
          "Séquence",
          "Déroulement et consignes",
          "Supports",
        ],
        lignes: [
          [
            "0:00",
            "5 min",
            "Accueil et sondage flash",
            "Les participants répondent au sondage du site (QR code projeté) pendant l’installation : « Utilisez-vous l’IA ? Pour quoi ? Et vos élèves ? Votre principale question aujourd’hui ? »",
            "Diapo 2 · Page sondage",
          ],
          [
            "0:05",
            "10 min",
            "Pourquoi on en parle",
            "Afficher les résultats du sondage en direct depuis le tableau de bord. Trois constats : les élèves l’utilisent déjà ; un cadre national existe (juin 2025) ; l’établissement a une charte. Présenter les objectifs et le programme.",
            "Diapos 3-5 · Tableau de bord",
          ],
          [
            "0:15",
            "15 min",
            "Comprendre l’IA générative",
            "Comment ça marche en 3 idées ; 4 limites. Démonstration « l’IA se trompe » (Copilot), puis contre-démonstration : la même question dans NotebookLM avec le chapitre en source → réponse citée. Quiz vrai/faux (main levée).",
            "Diapos 6-10 · Copilot + NotebookLM",
          ],
          [
            "0:30",
            "15 min",
            "Le cadre : la charte IA",
            "5 principes, feu tricolore élèves, obligations enseignants. Puis 6 cas pratiques en binômes (1 min chacun) : « autorisé, encadré ou interdit ? » — vote à main levée, corrigé.",
            "Diapos 11-15 · Fiche outils",
          ],
          [
            "0:45",
            "5 min",
            "Pause",
            "Inviter chacun à se connecter à notebooklm.google.com avec son compte Google pendant la pause.",
            "Diapo 16",
          ],
          [
            "0:50",
            "25 min",
            "Atelier guidé NotebookLM",
            "Deux outils, deux logiques. Étape 0 : connexion, création d’un carnet, ajout d’une source. Étape 1 : les 5 briques d’une bonne requête. Exercices 1 à 3 : guide d’étude, quiz et flashcards, résumé audio — chacun sur son ordinateur, l’animateur projette.",
            "Diapos 17-21 · NotebookLM",
          ],
          [
            "1:15",
            "30 min",
            "Atelier par discipline",
            "Groupes de 3-4. Choisir un cas d’usage (NotebookLM ou Copilot selon la tâche), produire une ressource, la vérifier, déposer la trame de restitution sur le site. L’animateur circule.",
            "Diapo 22 · NotebookLM / Copilot · Page restitution",
          ],
          [
            "1:45",
            "10 min",
            "Restitution éclair",
            "1 minute par groupe : ce que nous avons produit, ce qu’il a fallu corriger, une vigilance. Projeter le mur des contributions : le groupe qui parle a son dépôt sous les yeux.",
            "Diapo 23 · Mur des contributions",
          ],
          [
            "1:55",
            "5 min",
            "Clôture",
            "Les trois phrases à dire aux élèves la première semaine ; la suite (ateliers, Pix+Édu IA, café numérique) ; enquête de satisfaction sur le site (QR code projeté).",
            "Diapos 24-25 · Page satisfaction",
          ],
        ],
      },
      {
        type: "encadre",
        ton: "attention",
        titre: "Repères de tenue du temps",
        texte:
          "À 0:45 la partie « cadre » doit être terminée ; à 1:15 tout le monde doit avoir un carnet NotebookLM avec une source et une première réponse citée. En cas de retard, réduire l’atelier disciplinaire à 20 minutes plutôt que de supprimer la restitution.",
      },
    ],
  },

  {
    slug: "variantes",
    titre: "Variantes",
    blocs: [
      {
        type: "cartes",
        colonnes: 3,
        cartes: [
          {
            titre: "Version 1 heure",
            texte:
              "Sondage (3 min) · Pourquoi + comprendre (15 min, une démonstration et la contre-démonstration NotebookLM) · Cadre + 3 cas pratiques (15 min) · Atelier guidé NotebookLM, exercices 1 et 2 (22 min) · Clôture (5 min). L’atelier disciplinaire devient un « devoir de rentrée » à déposer sur la page de restitution du site, la session restant ouverte quelques jours.",
          },
          {
            titre: "Version demi-journée (3 heures)",
            texte:
              "Ajouter, après la pause, deux ateliers tournants de 25 min (Copilot : exercices et grilles ; NotebookLM : un carnet de révision de classe avec plusieurs sources) et allonger l’atelier disciplinaire à 45 min avec une production finalisée ; terminer par une restitution de 20 min.",
          },
          {
            titre: "Si la connexion tombe",
            texte:
              "Passer en mode démonstration avec les captures d’écran et l’audio de démonstration préparés ; consacrer plus de temps aux cas pratiques et à un atelier « papier » : rédiger la requête idéale pour son cas d’usage, à tester chez soi.",
          },
        ],
      },
    ],
  },

  {
    slug: "annexes",
    titre: "Annexes",
    blocs: [
      { type: "titre", texte: "Annexe A — Sondage d’entrée" },
      {
        type: "paragraphe",
        texte:
          "Se remplit sur le site : /formations/ia-usages-numeriques/participer/sondage — 5 minutes, pendant l’installation. Anonyme : ni nom, ni adresse, ni identifiant. Les résultats s’affichent dans le tableau de bord animateur, prêts à projeter à 0:05.",
      },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "Utilisez-vous des outils d’IA générative ? — Jamais / Rarement / Souvent / Tous les jours.",
          "Pour quoi faire ? (plusieurs réponses) — Préparer des cours / Corriger ou évaluer / Tâches administratives / Usage personnel / Je n’en utilise pas.",
          "Vos élèves l’utilisent-ils pour leurs travaux ? — Non / Je ne sais pas / Oui, parfois / Oui, souvent.",
          "Quelle est votre principale question sur l’IA aujourd’hui ? (réponse libre)",
        ],
      },
      {
        type: "titre",
        texte: "Annexe B — Enquête de satisfaction",
      },
      {
        type: "paragraphe",
        texte:
          "Se remplit sur le site : /formations/ia-usages-numeriques/participer/satisfaction — 2 minutes, avant de quitter la salle. Anonyme, comme le sondage d’entrée. Les moyennes et les réponses libres s’affichent dans le tableau de bord animateur.",
      },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "La session m’a permis de mieux comprendre ce qu’est une IA générative. — Échelle de 1 à 5.",
          "Je connais maintenant les règles de la charte IA de l’établissement. — Échelle de 1 à 5.",
          "Je me sens capable d’utiliser NotebookLM pour préparer une ressource à partir de mon cours. — Échelle de 1 à 5.",
          "De quel atelier auriez-vous besoin ensuite ? (réponse libre)",
        ],
      },
      {
        type: "titre",
        texte:
          "Annexe C — Message d’invitation aux participants (à envoyer quelques jours avant)",
      },
      {
        type: "paragraphe",
        texte: "Objet : Formation IA de pré-rentrée — trois choses à préparer",
      },
      { type: "paragraphe", texte: "Bonjour à toutes et à tous," },
      {
        type: "paragraphe",
        texte:
          "Le [date], de [heure] à [heure], salle [salle], nous nous retrouvons pour une formation de deux heures « IA et usages numériques : comprendre, encadrer, utiliser ». Elle est très pratique : chacun repartira avec une ressource prête pour sa classe.",
      },
      {
        type: "paragraphe",
        texte: "Pour que l’atelier fonctionne, merci de venir avec :",
      },
      {
        type: "liste",
        ordonnee: true,
        items: [
          "votre ordinateur portable chargé ;",
          "un compte Google actif (Gmail). Si vous n’en avez pas, créez-le gratuitement avant la session (cinq minutes) et testez l’accès à notebooklm.google.com ;",
          "un chapitre de votre cours au format PDF (exporté depuis Word), sans aucune donnée d’élève ;",
          "vos identifiants Microsoft 365 de l’établissement.",
        ],
      },
      {
        type: "paragraphe",
        texte:
          "À votre arrivée, je projetterai le lien d’un court sondage anonyme — trois questions et une question ouverte, deux minutes. Il se remplit directement sur le site de la formation : rien à installer, aucun compte à créer, et aucune information permettant de vous identifier n’est demandée. Ses résultats ouvrent la séance.",
      },
      {
        type: "paragraphe",
        texte:
          "Aucun prérequis : la session s’adresse aussi bien à ceux qui n’ont jamais utilisé d’IA qu’à ceux qui en utilisent déjà.",
      },
      { type: "paragraphe", texte: "À très vite," },
      {
        type: "paragraphe",
        texte: "Eddy Bachaalany, référent numérique",
      },
    ],
  },
];
