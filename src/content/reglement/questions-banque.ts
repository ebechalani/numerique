import type { QuestionReglement } from "./types";

/**
 * Banque de questions dérivée du règlement, thème par thème.
 *
 * Chaque question a été rédigée à partir du texte officiel, puis relue deux
 * fois : une relecture de fidélité (la citation existe-t-elle, prouve-t-elle
 * la réponse, l'article annoncé est-il le bon ?) et une relecture de qualité
 * (une autre option est-elle défendable, l'énoncé est-il ambigu ?). Les
 * questions qui n'ont pas passé les deux relectures ne figurent pas ici.
 *
 * Les vingt questions du diaporama destiné aux parents vivent à part, dans
 * questions-parents.ts : elles sont reprises au mot près et ne doivent pas
 * être retouchées.
 */
export const QUESTIONS_BANQUE: QuestionReglement[] = [];
