import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Faire l’appel avec la feuille d’appel ».
 * D’après le document « La feuille d’appel » d’Eddy Bachaalany (juin 2025).
 * Captures : données personnelles masquées avant publication.
 */
export const feuilleAppel: TutorielPronote = {
  slug: "feuille-appel",
  titre: "Faire l’appel avec la feuille d’appel",
  resume: "Remplir la feuille d’appel d’un cours, indiquer le motif d’une absence et signaler que l’appel est terminé.",
  public: [
    "professeurs",
  ],
  theme: "appel",
  application: "espace",
  duree: "2 min",
  prerequis: [
    "Être connecté à Pronote avec vos identifiants professeur.",
  ],
  sections: [
    {
      etapes: [
        {
          texte: "Dans l’onglet « Vie scolaire », cliquez sur « Feuille d’appel ».",
          detail: "La liste des élèves du cours s’affiche. Les icônes placées à côté des noms vous donnent des informations sur les élèves.",
          capture: {
            src: "/pronote/feuille-appel/c-01-02.webp",
            largeur: 1400,
            hauteur: 731,
            alt: "Feuille d’appel : dans le menu du haut, l’onglet « Vie scolaire » est sélectionné et « Feuille d’appel » est ouvert juste en dessous. À gauche, l’emploi du temps de la journée ; au centre, la liste des 25 élèves (noms masqués) et les colonnes « Absence », « Retard », « Infirmerie », « Punition », « Exclusion », « Dispense », « Observations ». Un cadre jaune entoure les icônes d’information affichées à côté des noms. Sous-titre : « Sur la feuille d’appel, vous retrouvez des informations sur les élèves. »",
          },
        },
        {
          texte: "Passez la souris sur une icône pour afficher sa signification.",
          detail: "Par exemple : « Cet élève a été absent au précédent cours (Motif non encore connu) ».",
          capture: {
            src: "/pronote/feuille-appel/c-01-03.webp",
            largeur: 1400,
            hauteur: 695,
            alt: "Feuille d’appel : la souris survole l’icône placée à côté du nom d’un élève (noms masqués) et une info-bulle indique « Cet élève a été absent au précédent cours (Motif non encore connu) ».",
          },
        },
        {
          texte: "Remplissez la feuille d’appel en cochant les cases appropriées.",
          liste: [
            "« Absence »",
            "« Retard »",
            "« Infirmerie »",
            "« Punition »",
            "« Exclusion »",
            "« Dispense »",
          ],
          capture: {
            src: "/pronote/feuille-appel/c-02-02.webp",
            largeur: 1400,
            hauteur: 887,
            alt: "Feuille d’appel : un cadre jaune met en évidence les colonnes à cocher « Absence », « Retard », « Infirmerie », « Punition », « Exclusion » et « Dispense ». Les noms des élèves sont masqués. En bas, la case « Appel terminé ». Sous-titre : « Remplissez la feuille d’appel en cochant les cases appropriées. »",
          },
        },
        {
          texte: "Pour une absence, choisissez le motif dans la fenêtre « Sélectionner un motif d’absence ».",
          detail: "Si le motif n’est pas connu, choisissez « Motif non encore connu », en tête de liste.",
          capture: {
            src: "/pronote/feuille-appel/c-02-03.webp",
            largeur: 1400,
            hauteur: 769,
            alt: "Fenêtre « Sélectionner un motif d’absence » ouverte sur la feuille d’appel : « Motif non encore connu », puis une liste de motifs (« Convocation administrative », « Divers », « Ergothérapie », « Exclusion temporaire », « Infirmerie », « Maladie avec certificat », « Maladie sans certificat »…) et le bouton « Annuler ». Les noms des élèves, en arrière-plan, sont masqués.",
          },
        },
        {
          texte: "Une fois l’appel terminé, cochez la case « Appel terminé » en bas de la feuille d’appel.",
          detail: "Ainsi, vous ne serez pas relancé.",
          capture: {
            src: "/pronote/feuille-appel/c-03-02.webp",
            largeur: 1400,
            hauteur: 821,
            alt: "Feuille d’appel affichant les colonnes « Dispense », « Observations », « Encouragements », « Défauts de carnet », « Oubli de matériel », « Travail non fait » ; les noms des élèves sont masqués. En bas à gauche, un cadre jaune entoure la case « Appel terminé ». Sous-titre : « Une fois l’appel terminé, indiquez-le afin de ne pas être relancé. »",
          },
        },
      ],
    },
  ],
  source: {
    fichier: "La feuille d’appel",
    date: "juin 2025",
  },
};
