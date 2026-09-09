import type { ThemeReglement } from "./types";

/**
 * Les thèmes de la banque de questions, dans l'ordre où ils sont proposés
 * au créateur de QCM. Ils suivent le plan du règlement plutôt qu'un ordre
 * alphabétique : un enseignant qui prépare l'heure de vie de classe descend
 * la liste comme il descendrait le document.
 */
export const THEMES: ThemeReglement[] = [
  {
    cle: "droits",
    titre: "Droits des élèves et représentation",
    articles: ["1.1", "1.2", "1.3"],
  },
  {
    cle: "ponctualite",
    titre: "Ponctualité et retards",
    articles: ["2.2", "2.4"],
  },
  {
    cle: "entrees-sorties",
    titre: "Entrées, sorties et régime de sortie",
    articles: ["2.3", "2.5", "2.6"],
  },
  {
    cle: "deplacements",
    titre: "Intercours, récréations et déplacements",
    articles: ["2.7"],
  },
  {
    cle: "transport",
    titre: "Transport scolaire",
    articles: ["2.8"],
  },
  {
    cle: "communication",
    titre: "Communication avec les familles et Pronote",
    articles: ["3.1.1", "3.1.2", "3.1.3"],
  },
  {
    cle: "evaluations",
    titre: "Évaluations, fraude et conseils de classe",
    articles: ["3.1.4", "3.1.5", "3.1.6"],
  },
  {
    cle: "sante",
    titre: "Santé, infirmerie et médicaments",
    articles: ["3.2", "3.2.1"],
  },
  {
    cle: "absences",
    titre: "Absences et assiduité",
    articles: ["4.1", "4.2", "4.2.1", "4.2.2", "4.2.3"],
  },
  {
    cle: "tenue",
    titre: "Tenue vestimentaire, EPS et TP de sciences",
    articles: ["4.4"],
  },
  {
    cle: "comportement",
    titre: "Comportement, respect et harcèlement",
    articles: ["1.1", "4.5"],
  },
  {
    cle: "materiel-securite",
    titre: "Matériel, locaux, objets de valeur et sécurité",
    articles: ["4.6", "6.1", "6.2", "6.3"],
  },
  {
    cle: "telephone",
    titre: "Téléphone et objets connectés",
    articles: ["2.1", "4.7.1", "4.7.3", "4.7.4"],
  },
  {
    cle: "images-ia",
    titre: "Images, enregistrements et intelligence artificielle",
    articles: ["4.7.2"],
  },
  {
    cle: "interdits",
    titre: "Objets et produits interdits",
    articles: ["3.2", "4.7"],
  },
  {
    cle: "discipline",
    titre: "Punitions, sanctions et instances disciplinaires",
    articles: ["5.1.1", "5.1.2", "5.1.3", "5.1.4"],
  },
];

export const TITRE_THEME: Record<string, string> = Object.fromEntries(
  THEMES.map((theme) => [theme.cle, theme.titre]),
);
