/**
 * Identité du site : l’établissement et la personne qui le porte.
 * Un seul endroit à modifier ; l’en-tête, le pied de page, l’accueil et les
 * métadonnées s’y réfèrent.
 */

export const ETABLISSEMENT = {
  nom: "Lycée Montaigne",
  lieu: "Beit Chabab",
  pays: "Liban",
} as const;

export const REFERENT = {
  nom: "Eddy Bachaalany",
  role: "référent numérique",
  courriel: "eddy.bachaalany@lycee-montaigne.edu.lb",
} as const;

/** « Eddy Bachaalany, référent numérique » */
export const SIGNATURE = `${REFERENT.nom}, ${REFERENT.role}`;
