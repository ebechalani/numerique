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
      "Le questionnaire projeté en réunion de parents : seize questions à choix unique et quatre vrai ou faux, sur les points du règlement qui reviennent le plus souvent. La bonne réponse et son explication s’affichent dès qu’on a répondu ; le bouton « Corrigé » en haut permet de les garder pour la fin, comme en salle.",
    public: "parents",
    correction: "immediat",
    questions: QUESTIONS_PARENTS.map((question) => question.id),
  },
];
