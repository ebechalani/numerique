import type { TutorielPronote } from "@/content/pronote/types";

/**
 * Tutoriel Pronote « Calculer une moyenne pondérée ».
 * D’après le document « Calcul de la moyenne » d’Eddy Bachaalany (novembre 2024).
 */
export const calculMoyenne: TutorielPronote = {
  slug: "calcul-moyenne",
  titre: "Calculer une moyenne pondérée",
  resume: "Calculer pas à pas la moyenne pondérée d’un élève lorsque des coefficients sont appliqués, à partir d’un exemple de deux notes.",
  public: [
    "professeurs",
  ],
  theme: "evaluation",
  application: "client",
  duree: "3 min",
  sections: [
    {
      titre: "1. Convertir chaque note en fraction pondérée",
      intro: "Prenons l’exemple de deux notes : une première note de 15/20 avec un coefficient de 2, et une deuxième note de 2/5 avec un coefficient de 1/2.",
      etapes: [
        {
          texte: "Appliquez à la première note son coefficient de 2 : 15/20 devient 30/40.",
          detail: "15 et 20 sont multipliés par 2.",
        },
        {
          texte: "Ramenez la deuxième note sur 20 : 2/5 devient 8/20.",
          detail: "2/5 × 20 = 8.",
        },
        {
          texte: "Appliquez-lui ensuite son coefficient de 1/2 : 8/20 devient 4/10.",
          detail: "8 × 1/2 = 4 et 20 × 1/2 = 10.",
        },
      ],
    },
    {
      titre: "2. Additionner les notes pondérées",
      etapes: [
        {
          texte: "Additionnez les valeurs obtenues : 30 + 4 = 34.",
        },
        {
          texte: "Additionnez les dénominateurs : 40 + 10 = 50.",
        },
      ],
    },
    {
      titre: "3. Résultat final",
      etapes: [
        {
          texte: "Ramenez le résultat sur 20 : la note finale est 34/50, soit 13,6/20.",
          detail: "34 ÷ 50 × 20 = 13,6.",
        },
      ],
    },
  ],
  astuces: [
    {
      ton: "attention",
      titre: "Ce calcul suppose une note ramenée sur 20",
      texte: "Dans l’exemple, la note sur 5 est d’abord ramenée sur 20. Dans Pronote, c’est la case « Ramener sur 20 les notes du devoir lors du calcul de la moyenne », à cocher en créant le devoir (voir le tutoriel « Créer un devoir noté »). Si elle n’est pas cochée, la note garde son barème sur 5 et la moyenne obtenue est différente.",
    },
  ],
  source: {
    fichier: "Calcul de la moyenne",
    date: "novembre 2024",
  },
};
