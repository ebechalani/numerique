import { QUESTIONS_PARENTS } from "./questions-parents";
import type { ModeleQuiz } from "./types";

/**
 * Les questionnaires prêts à lancer. Un enseignant peut les projeter tels
 * quels, ou partir de l'un d'eux dans le créateur pour en retirer et en
 * ajouter des questions.
 */
export const MODELES: ModeleQuiz[] = [
  {
    slug: "parents",
    titre: "Es-tu un expert du règlement intérieur ?",
    sousTitre: "Édition parents · 20 questions",
    intro:
      "Le questionnaire projeté en réunion de parents : seize questions à choix unique et quatre vrai ou faux, sur les points du règlement qui reviennent le plus souvent. Le corrigé s’affiche à la fin, comme en salle.",
    public: "parents",
    correction: "fin",
    questions: QUESTIONS_PARENTS.map((question) => question.id),
  },
];
