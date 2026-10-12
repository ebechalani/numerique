import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Créer une évaluation par compétences ».
 * D’après le document « Créer une évaluation par compétences » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const evaluationCompetences: TutorielPronote = {
  slug: "evaluation-competences",
  titre: "Créer une évaluation par compétences",
  resume: "Créer une évaluation par compétences, saisir les niveaux de maîtrise des élèves et laisser Pronote les transformer en note.",
  public: [
    "professeurs",
  ],
  theme: "evaluation",
  application: "client",
  duree: "5 min",
  prerequis: [
    "Être connecté au Client Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      titre: "Créer l’évaluation",
      etapes: [
        {
          texte: "Dans votre emploi du temps, faites un clic droit sur le cours de la classe concernée, puis choisissez « Saisir des évaluations ».",
          capture: {
            src: "/pronote/evaluation-competences/c-01-02.webp",
            largeur: 878,
            hauteur: 624,
            alt: "Emploi du temps de la semaine dans le Client Pronote : un clic droit sur un cours ouvre un menu contextuel dans lequel l’option « Saisir des évaluations » est encadrée en rouge.",
          },
        },
        {
          texte: "Cliquez sur « Cliquez ici pour créer une évaluation ».",
          capture: {
            src: "/pronote/evaluation-competences/c-01-03.webp",
            largeur: 1400,
            hauteur: 433,
            alt: "Onglet « Évaluations » : à gauche la liste des services (matière, classe, professeur), à droite le lien « Cliquez ici pour créer une évaluation » encadré en rouge.",
          },
        },
        {
          texte: "Dans la fenêtre « Création d’une évaluation » qui s’ouvre, saisissez l’intitulé de l’évaluation et, si besoin, un descriptif.",
          capture: {
            src: "/pronote/evaluation-competences/c-02-01.webp",
            largeur: 1019,
            hauteur: 1193,
            alt: "Fenêtre « Création d’une évaluation » : champs « Intitulé » et « Descriptif », date, période, coefficient, case « Prendre en compte l’évaluation dans les bilans de cycle », tableau des compétences évaluées avec le bouton « Ajouter des compétences », puis la case « Créer un devoir » cochée avec « Notation sur » et « Coefficient », et les boutons « Annuler » et « Valider ».",
          },
        },
        {
          texte: "Ajoutez les compétences évaluées avec « Ajouter des compétences ».",
          detail: "Vous pouvez aussi affecter un coefficient à chaque compétence, changer l’ordre d’apparition des compétences ou copier leur liste dans un fichier tableur (.csv).",
        },
        {
          texte: "Pour que Pronote transforme les degrés d’acquisition des compétences en note, cochez la case « Créer un devoir ».",
          detail: "Vous pouvez alors choisir la notation (« Notation sur ») et le « Coefficient » du devoir.",
        },
        {
          texte: "Cliquez sur « Valider ».",
        },
      ],
    },
    {
      titre: "Saisir les degrés d’acquisition et calculer les notes",
      etapes: [
        {
          texte: "Pour saisir le degré d’acquisition de chaque compétence élève par élève, utilisez le bouton de saisie par élève.",
          icone: {
            src: "/pronote/evaluation-competences/c-03-02.webp",
            largeur: 80,
            hauteur: 75,
            alt: "Icône de saisie par élève : un crayon accompagné d’une flèche vers la droite.",
          },
        },
        {
          texte: "Pour saisir compétence par compétence (item), utilisez le bouton de saisie par compétence.",
          icone: {
            src: "/pronote/evaluation-competences/c-03-03.webp",
            largeur: 55,
            hauteur: 59,
            alt: "Icône de saisie par compétence (item) : un crayon accompagné d’une flèche vers le bas.",
          },
        },
        {
          texte: "Choisissez le degré d’acquisition dans la fenêtre « Niveau de maîtrise ».",
          detail: "Les degrés proposés dépendent du paramétrage de l’établissement, par exemple :",
          liste: [
            "4 : « Très bonne maîtrise »",
            "3 : « Maîtrise satisfaisante »",
            "2 : « Maîtrise fragile »",
            "1 : « Maîtrise insuffisante »",
          ],
          capture: {
            src: "/pronote/evaluation-competences/c-03-04.webp",
            largeur: 1400,
            hauteur: 469,
            alt: "Saisie des évaluations : à gauche l’évaluation créée, à droite la liste des élèves (noms masqués) avec la colonne « Notes » précédée du bouton « Σ » ; en haut à droite, le bouton de saisie par élève est activé. La fenêtre « Niveau de maîtrise » propose « Très bonne maîtrise », « Maîtrise satisfaisante », « Maîtrise fragile », « Maîtrise insuffisante », « Absent » et « Dispensé ».",
          },
        },
        {
          texte: "Pour que Pronote calcule les notes, cliquez sur « Σ », à côté de la colonne « Notes ».",
          detail: "Une fenêtre « Confirmation » s’ouvre.",
        },
        {
          texte: "Pour savoir comment le logiciel calcule la note, cliquez sur le bouton d’information de la fenêtre « Confirmation ».",
          capture: {
            src: "/pronote/evaluation-competences/c-03-06.webp",
            largeur: 1400,
            hauteur: 954,
            alt: "Fenêtre « Confirmation » : « Les notes du devoir vont être calculées à partir des niveaux de maîtrise de chaque compétence évaluée. Voulez-vous continuer ? », avec les boutons « Oui » et « Non » ; le bouton d’information « i » se trouve en haut à droite de la fenêtre. Devant, la fenêtre « Comment est calculée la note d’une évaluation ? » détaille le calcul et donne un exemple avec les points par défaut (50, 40, 25 et 10 points).",
          },
          icone: {
            src: "/pronote/evaluation-competences/c-03-05.webp",
            largeur: 55,
            hauteur: 50,
            alt: "Bouton d’information : un « i » noir sur fond rouge.",
          },
        },
        {
          texte: "Si vous êtes d’accord, cliquez sur « Oui ».",
          detail: "Les notes apparaissent dans la colonne « Notes » et sont automatiquement reportées dans le relevé de notes des élèves.",
        },
      ],
    },
  ],
  astuces: [
    {
      ton: "astuce",
      titre: "Comment la note est calculée",
      texte: "Pronote fait la somme des points obtenus à chaque item, en tenant compte de son coefficient et des points attribués dans « Paramètres > Niveaux de maîtrise ». Cette somme est divisée par le nombre d’items évalués, puis ramenée sur 20 (ou sur le barème du devoir) et arrondie au point supérieur.",
    },
  ],
  source: {
    fichier: "Créer une évaluation par compétences",
    date: "juin 2025",
  },
};
