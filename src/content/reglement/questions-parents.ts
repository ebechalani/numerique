import type { QuestionReglement } from "./types";

/**
 * Les vingt questions du diaporama « Es-tu un expert du règlement intérieur ? »
 * (édition parents, année 2026-2027), reprises au mot près : énoncés, options,
 * ordre des propositions et bonnes réponses sont ceux des diapositives.
 *
 * S'y ajoute, pour chacune, la phrase du règlement qui prouve la réponse —
 * le diaporama ne donnait que le numéro d'article. C'est elle qui permet de
 * vérifier avant de projeter, et de remonter au texte après avoir répondu.
 */
export const QUESTIONS_PARENTS: QuestionReglement[] = [
  {
    id: "parents-01-retard-matin",
    theme: "ponctualite",
    question: "Votre enfant arrive après 7h45. Que se passe-t-il ?",
    type: "qcm",
    options: [
      "Il entre directement en classe",
      "Il attend dans la cour jusqu’à la récréation",
      "Billet de retard à la vie scolaire, entrée en classe à la 2e heure",
      "Il est renvoyé à la maison",
    ],
    bonne: 2,
    explication:
      "Passé 7h45, l’entrée en cours n’est plus directe : l’élève va chercher un billet à la vie scolaire et rejoint sa classe à la deuxième heure. Les parents en sont avertis.",
    articles: ["2.4"],
    citation:
      "Les élèves doivent se diriger vers le bureau de la vie scolaire pour obtenir un billet de retard ou le faire signer dans leur carnet de vie scolaire pour les collégiens. […] Il leur sera interdit d’assister à la première heure de cours et ils intègrent leur classe à la deuxième heure.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-02-retard-journee",
    theme: "ponctualite",
    question: "En journée, plus de 5 minutes de retard après la sonnerie :",
    type: "qcm",
    options: [
      "Il est refusé en cours et va à la vie scolaire chercher un billet",
      "L’enseignant l’accepte s’il s’excuse",
      "Il attend devant la porte la fin de l’heure",
      "Ce n’est pas comptabilisé",
    ],
    bonne: 0,
    explication:
      "Au-delà de cinq minutes, l’élève n’entre pas en classe : il se présente à la vie scolaire, qui lui remet un billet pour être admis au cours suivant.",
    articles: ["2.4"],
    citation:
      "Dans la journée, au-delà de cinq minutes de retard après la sonnerie, l’élève sera refusé en classe et devra se présenter au bureau de la vie scolaire pour être pris en charge. Un billet de retard sera transmis à l’élève pour être admis au cours suivant.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-03-absence-prevenir",
    theme: "absences",
    question: "Votre enfant est absent. Que devez-vous faire ?",
    type: "qcm",
    options: [
      "Envoyer un mot par un camarade",
      "Appeler le professeur principal sur son portable",
      "Rien, l’école appelle si besoin",
      "Prévenir la vie scolaire via Pronote avant 9h",
    ],
    bonne: 3,
    explication:
      "L’absence se signale le matin même, avant 9h, à la vie scolaire et par Pronote. C’est le seul canal prévu.",
    articles: ["4.2.1"],
    citation:
      "Les parents sont priés de prévenir l’établissement via Pronote en s’adressant à la vie scolaire avant 9h.",
    public: "parents",
    difficulte: "facile",
  },
  {
    id: "parents-04-certificat-deux-jours",
    theme: "absences",
    question:
      "Une absence de plus de 2 jours nécessite un certificat médical",
    type: "vrai-faux",
    options: ["Vrai", "Faux"],
    bonne: 0,
    explication:
      "Au retour, l’élève présente une justification de sa famille, et un certificat médical dès que l’absence dépasse deux jours.",
    articles: ["4.2.1"],
    citation:
      "A son retour, l’élève devra présenter une justification de sa famille et/ou un certificat médical pour une absence qui dépasserait les 2 jours.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-05-sortie-anticipee",
    theme: "entrees-sorties",
    question: "Une sortie anticipée exceptionnelle se demande :",
    type: "qcm",
    options: [
      "Par téléphone le matin même",
      "Par écrit sur Pronote, 24h à l’avance, à la vie scolaire",
      "Oralement à l’enseignant",
      "Aucune démarche n’est nécessaire",
    ],
    bonne: 1,
    explication:
      "La demande est écrite, adressée à la vie scolaire, et déposée vingt-quatre heures avant. La même règle vaut pour une dispense de transport.",
    articles: ["2.5"],
    citation:
      "Les sorties anticipées à l’initiative des parents doivent faire l’objet d’une demande préalable par écrit sur Pronote. Cette demande sera envoyée à la vie scolaire 24h à l’avance par le biais de Pronote ou d’un courriel.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-06-telephone-principe",
    theme: "telephone",
    question:
      "Dans le nouveau règlement, l’usage du téléphone dans l’établissement est :",
    type: "qcm",
    options: [
      "Interdit partout, sauf usage pédagogique demandé par un professeur",
      "Autorisé pendant les récréations",
      "Autorisé dans la cour et en intercours",
      "Autorisé s’il est en mode silencieux",
    ],
    bonne: 0,
    explication:
      "L’interdiction couvre toute l’enceinte, espaces extérieurs compris, pendant tout le temps scolaire. Seul un professeur peut autoriser un usage ponctuel, pour une activité précise.",
    articles: ["4.7.1"],
    citation:
      "L’usage des téléphones portables et de tout appareil personnel connecté (montres, écouteurs, tablettes, etc.) est strictement interdit dans l’enceinte de l’établissement, y compris dans les espaces extérieurs, pendant tout le temps scolaire.",
    public: "les-deux",
    difficulte: "facile",
  },
  {
    id: "parents-07-telephone-arrivee",
    theme: "telephone",
    question: "À son arrivée, que doit faire l’élève de son téléphone ?",
    type: "qcm",
    options: [
      "Le garder éteint au fond de son sac",
      "Le confier à un camarade",
      "L’éteindre et le déposer dans les boîtes sécurisées prévues",
      "Le remettre au professeur principal",
    ],
    bonne: 2,
    explication:
      "Le téléphone est éteint puis déposé dans les boîtes sécurisées, selon l’organisation de la vie scolaire. Le garder sur soi ne suffit pas.",
    articles: ["4.7.1"],
    citation:
      "À leur arrivée, les élèves doivent impérativement éteindre leur téléphone et le déposer dans les boîtes sécurisées prévues, selon l’organisation de la vie scolaire.",
    public: "les-deux",
    difficulte: "moyenne",
  },
  {
    id: "parents-08-telephone-evaluation",
    theme: "telephone",
    question: "Un téléphone détenu pendant une évaluation entraîne :",
    type: "qcm",
    options: [
      "Un avertissement oral",
      "La note de 0/20, et une sanction en cas de récidive",
      "Rien s’il ne s’en sert pas",
      "Le retrait de 2 points",
    ],
    bonne: 1,
    explication:
      "La détention suffit : il n’est pas nécessaire de s’en servir. L’élève en possession d’un téléphone pendant une évaluation est réputé fraudeur.",
    articles: ["4.7.1", "3.1.4"],
    citation:
      "Durant les évaluations, la détention ou l’usage d’un téléphone ou objet connecté est strictement interdit. Tout manquement entraîne la note de 0/20, assortie d’une sanction en cas de récidive.",
    public: "les-deux",
    difficulte: "moyenne",
  },
  {
    id: "parents-09-captation-images",
    theme: "images-ia",
    question: "Photos, vidéos et enregistrements dans l’établissement :",
    type: "qcm",
    options: [
      "Autorisés pendant les récréations",
      "Autorisés entre camarades d’accord entre eux",
      "Autorisés s’ils ne sont pas publiés",
      "Interdits sans autorisation expresse de la direction",
    ],
    bonne: 3,
    explication:
      "L’interdiction vaut pour toute la communauté scolaire, quel que soit l’accord des personnes filmées. Partager ou modifier ces contenus est également interdit.",
    articles: ["4.7.2"],
    citation:
      "Il est strictement interdit d’enregistrer des conversations, de capter des images, de réaliser des photos, vidéos ou tout autre enregistrement sonore ou visuel dans l’établissement sans autorisation expresse de la direction.",
    public: "les-deux",
    difficulte: "facile",
  },
  {
    id: "parents-10-deepfake",
    theme: "images-ia",
    question:
      "Diffuser un deepfake visant un membre de l’établissement peut entraîner :",
    type: "qcm",
    options: [
      "Une retenue le samedi",
      "Un simple rappel à l’ordre",
      "Un conseil de discipline et un refus de réinscription",
      "Rien, l’IA n’est pas encadrée par le règlement",
    ],
    bonne: 2,
    explication:
      "Les usages de l’intelligence artificielle sont encadrés par une charte annexée au règlement, qui a la même valeur que lui. La diffusion d’un deepfake relève des sanctions les plus lourdes.",
    articles: ["4.7.2"],
    citation:
      "En cas de diffusion de deepfake ou d’enregistrement portant atteinte à un membre de la communauté ou à l’établissement, la direction pourra réunir un conseil de discipline et/ou refuser la réinscription de l’élève à la rentrée suivante.",
    public: "les-deux",
    difficulte: "moyenne",
  },
  {
    id: "parents-11-blouse-tp",
    theme: "tenue",
    question: "Quelle tenue est obligatoire pour les TP de sciences ?",
    type: "qcm",
    options: [
      "Un tablier en plastique",
      "Une blouse blanche en coton",
      "La tenue de sport de l’établissement",
      "Aucune tenue particulière",
    ],
    bonne: 1,
    explication:
      "La blouse blanche en coton est obligatoire. Sans elle, l’élève ne participe pas à l’activité, pour des raisons de sécurité.",
    articles: ["4.4"],
    citation:
      "Le port d’une blouse blanche en coton est obligatoire pour les TP de sciences. En cas d’oubli, l’élève ne pourra pas participer à l’activité, pour des raisons de sécurité.",
    public: "les-deux",
    difficulte: "facile",
  },
  {
    id: "parents-12-transport-changement",
    theme: "transport",
    question: "Un changement concernant le transport scolaire se signale :",
    type: "qcm",
    options: [
      "Au chauffeur le matin même",
      "Par SMS à l’accompagnateur",
      "Aucune démarche n’est nécessaire",
      "Via Pronote ou par mail à la vie scolaire, 24h à l’avance",
    ],
    bonne: 3,
    explication:
      "Toute modification passe par la vie scolaire, par écrit, vingt-quatre heures avant. Ni le chauffeur ni l’accompagnateur ne sont le bon interlocuteur.",
    articles: ["2.8"],
    citation:
      "Toute modification doit être communiquée via Pronote ou par mail à la vie scolaire 24 heures avant.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-13-transport-camarade",
    theme: "transport",
    question:
      "Votre enfant peut faire monter dans le bus un camarade non inscrit",
    type: "vrai-faux",
    options: ["Vrai", "Faux"],
    bonne: 1,
    explication:
      "Le transport est soumis à inscription. Faire monter un camarade non inscrit est interdit, et peut aller jusqu’à la radiation du service.",
    articles: ["2.8"],
    citation:
      "Il est interdit, de se faire accompagner par des camarades qui n’y sont pas inscrits en temps ordinaire.",
    public: "les-deux",
    difficulte: "facile",
  },
  {
    id: "parents-14-oubli-tenue-eps",
    theme: "tenue",
    question:
      "En cas d’oubli de la tenue de sport, l’élève est noté absent et risque une sanction",
    type: "vrai-faux",
    options: ["Vrai", "Faux"],
    bonne: 0,
    explication:
      "Sans la tenue de l’établissement, l’élève ne participe pas au cours d’EPS. Il est noté absent, et le motif est jugé irrecevable.",
    articles: ["4.4"],
    citation:
      "En cas d’oubli, il sera demandé aux parents d’apporter la tenue à leur enfant. L’élève ne pourra pas participer à l’activité. L’élève sera noté absent et le motif considéré irrecevable. L’élève s’exposera donc à des sanctions.",
    public: "les-deux",
    difficulte: "moyenne",
  },
  {
    id: "parents-15-absence-evaluation",
    theme: "evaluations",
    question: "Votre enfant est absent le jour d’une évaluation. Il faut :",
    type: "qcm",
    options: [
      "Ne rien faire, le contrôle est annulé",
      "Prévenir seulement le professeur oralement",
      "Une excuse écrite des parents sur Pronote au professeur concerné",
      "Attendre le bulletin pour en parler",
    ],
    bonne: 2,
    explication:
      "L’excuse est écrite, adressée au professeur concerné et à la vie scolaire. La régularisation auprès de la vie scolaire est incontournable, et une épreuve de remplacement peut être organisée.",
    articles: ["3.1.6"],
    citation:
      "Toute absence à une évaluation prévue doit faire l´objet d´une excuse écrite parentale via Pronote au professeur concerné et à la vie scolaire. La régularisation administrative à la vie scolaire est incontournable.",
    public: "parents",
    difficulte: "moyenne",
  },
  {
    id: "parents-16-eleve-malade",
    theme: "sante",
    question:
      "Votre enfant se sent mal en cours. Quelle est la procédure ?",
    type: "qcm",
    options: [
      "Il prévient l’enseignant, passe par la vie scolaire, puis l’infirmerie",
      "Il appelle directement ses parents",
      "Il se rend seul à l’infirmerie",
      "Il attend la récréation",
    ],
    bonne: 0,
    explication:
      "Trois étapes dans l’ordre : l’enseignant autorise, la vie scolaire remet un billet, l’infirmière examine et décide. C’est elle qui contacte les parents.",
    articles: ["3.2.1"],
    citation:
      "L’élève ressent un malaise et en informe son enseignant. L’enseignant autorise l’élève à se rendre à la vie scolaire. La vie scolaire remet un billet de passage à l’élève pour l’infirmerie (lycée) ou renseigne le carnet de vie scolaire (collège).",
    public: "les-deux",
    difficulte: "moyenne",
  },
  {
    id: "parents-17-representation-reunion",
    theme: "communication",
    question:
      "Un parent peut se faire représenter par une tierce personne aux réunions",
    type: "vrai-faux",
    options: ["Vrai", "Faux"],
    bonne: 1,
    explication:
      "L’un des deux parents au moins doit venir en personne. Aucune tierce personne ne peut le remplacer.",
    articles: ["3.1.2"],
    citation:
      "L’un des deux parents, au moins, devra se présenter aux réunions en personne. En aucun cas, il ne pourra se faire représenter par une tierce personne.",
    public: "parents",
    difficulte: "difficile",
  },
  {
    id: "parents-18-acces-parents",
    theme: "materiel-securite",
    question: "Pour entrer dans l’établissement, un parent doit :",
    type: "qcm",
    options: [
      "Aller directement voir le professeur",
      "Passer par l’accueil, prendre un badge ; l’accès se fait sur rendez-vous",
      "Entrer librement pendant les récréations",
      "Attendre son enfant dans la cour",
    ],
    bonne: 1,
    explication:
      "Toute personne extérieure se présente à l’accueil et reçoit un badge visiteur. Pour les parents, l’accès se fait sur rendez-vous.",
    articles: ["6.2"],
    citation:
      "Toute personne extérieure à l’établissement doit se présenter à l’accueil afin d’informer de sa présence et d’être dirigée vers son interlocuteur. Un badge visiteur lui sera remis. En particulier, l’accès des parents à l’établissement se fait sur rendez-vous.",
    public: "parents",
    difficulte: "facile",
  },
  {
    id: "parents-19-objet-autorise",
    theme: "interdits",
    question: "Lequel de ces objets est autorisé dans l’établissement ?",
    type: "qcm",
    options: [
      "Une boisson énergisante",
      "Des médicaments gardés sur soi",
      "Un téléphone allumé",
      "Une gourde d’eau",
    ],
    bonne: 3,
    explication:
      "La gourde est même recommandée. Les boissons énergisantes, les médicaments gardés sur soi et le téléphone allumé sont interdits.",
    articles: ["4.4", "4.7", "3.2"],
    citation:
      "L’élève veillera également à se munir d’une gourde ou d’une bouteille d’eau.",
    public: "les-deux",
    difficulte: "facile",
  },
  {
    id: "parents-20-harcelement",
    theme: "comportement",
    question:
      "Face à un acte de harcèlement, l’établissement peut aller jusqu’à :",
    type: "qcm",
    options: [
      "Une simple médiation",
      "Une remarque orale",
      "Une exclusion temporaire ou définitive selon la gravité",
      "Un devoir supplémentaire",
    ],
    bonne: 2,
    explication:
      "Le harcèlement fait partie des actes de violence qui ne peuvent être tolérés. L’échelle des sanctions va jusqu’à l’exclusion définitive, prononcée par le conseil de discipline.",
    articles: ["1.1", "4.5", "5.1.2"],
    citation:
      "Exclusion temporaire de l’établissement (d’une durée allant de 1 à 8 jours), à l’interne ou à l’externe, - Exclusion temporaire supérieure à 8 jours ou exclusion définitive de l’établissement, à l’issue de la comparution devant le conseil de discipline.",
    public: "les-deux",
    difficulte: "moyenne",
  },
];
