import type { Module } from "@/content/types";

/**
 * Restitution éclair et clôture — parties 4.7 et 4.8 du déroulé animateur,
 * diapositives 23 à 25 du diaporama, partie 7 de la fiche outils.
 */
export const restitutionCloture: Module = {
  slug: "restitution-et-cloture",
  numero: 6,
  titre: "Restitution et clôture",
  sousTitre: "Ce que nous avons produit, ce que nous emportons",
  duree: 15,
  horaire: "1:45",
  objectif:
    "Partager sa production et sa vigilance avec le groupe, repartir avec la check-list de vérification et trois phrases à dire aux élèves la première semaine.",
  blocs: [
    { type: "titre", texte: "Restitution éclair — 1 minute par groupe" },
    {
      type: "paragraphe",
      texte:
        "Chrono projeté, une minute par groupe, trois questions dans l’ordre.",
    },
    {
      type: "liste",
      ordonnee: true,
      items: [
        "Qu’avons-nous produit, avec quel outil ?",
        "Qu’a-t-il fallu corriger ou compléter ?",
        "Une vigilance à partager avec les collègues.",
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Les vigilances communes deviennent notre check-list collective",
      texte:
        "Erreurs factuelles, niveau inadapté, formulations trop scolaires, stéréotypes… : notées au tableau au fil des passages, elles rejoignent les six points de contrôle ci-dessous.",
    },
    { type: "titre", texte: "Avant d’utiliser ce que l’IA a produit" },
    {
      type: "checklist",
      id: "avant-utilisation",
      consigne:
        "Les six points de contrôle de la fiche outils — la check-list que chacun emporte et applique avant de mettre une production devant des élèves.",
      items: [
        {
          titre: "Exactitude",
          texte:
            "Faits, dates, calculs, références vérifiés (sans source, les références peuvent être inventées ; avec source, on clique sur les citations).",
        },
        {
          titre: "Niveau",
          texte: "Vocabulaire et difficulté adaptés à la classe visée.",
        },
        {
          titre: "Programme",
          texte: "Conformité avec les attendus de la discipline et du niveau.",
        },
        {
          titre: "Biais et stéréotypes",
          texte: "Représentations, exemples, prénoms, contextes culturels.",
        },
        {
          titre: "Droits",
          texte:
            "Images et textes réutilisables ; mention de l’usage de l’IA si nécessaire.",
        },
        {
          titre: "Données",
          texte: "Aucune information personnelle n’a été saisie ni déposée.",
        },
      ],
    },
    { type: "titre", texte: "La première semaine, je dis à mes élèves…" },
    {
      type: "encadre",
      ton: "astuce",
      texte:
        "Trois phrases à adapter à sa matière et à ses classes : l’essentiel est que chaque élève entende la même règle dans toutes les disciplines.",
    },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          numero: "1",
          titre: "Le cadre, travail par travail",
          texte:
            "« Dans ma matière, pour chaque travail, je vous dirai si l’IA est interdite, autorisée avec déclaration, ou libre. »",
        },
        {
          numero: "2",
          titre: "L’usage non déclaré est une fraude",
          texte:
            "« Utiliser une IA sans autorisation dans un travail noté, c’est une fraude — comme un plagiat. »",
        },
        {
          numero: "3",
          titre: "Vous restez responsables",
          texte:
            "« Une IA peut se tromper et vous ne devez jamais lui donner d’informations personnelles : vous restez responsables de ce que vous rendez. »",
        },
      ],
    },
    {
      type: "exercice",
      id: "trois-phrases",
      titre: "Vos trois phrases, dans vos mots",
      consigne:
        "Reprenez chacune des trois phrases et adaptez-la à votre matière et à vos classes. Copiez-les ensuite : elles vous serviront dès la première semaine.",
      duree: "3 min",
      champs: [
        {
          id: "phrase-cadre",
          type: "texte-long",
          libelle: "1. Le cadre, travail par travail",
          aide: "Modèle : « Dans ma matière, pour chaque travail, je vous dirai si l’IA est interdite, autorisée avec déclaration, ou libre. »",
          lignes: 2,
        },
        {
          id: "phrase-fraude",
          type: "texte-long",
          libelle: "2. L’usage non déclaré est une fraude",
          aide: "Modèle : « Utiliser une IA sans autorisation dans un travail noté, c’est une fraude — comme un plagiat. »",
          lignes: 2,
        },
        {
          id: "phrase-responsables",
          type: "texte-long",
          libelle: "3. Vous restez responsables",
          aide: "Modèle : « Une IA peut se tromper et vous ne devez jamais lui donner d’informations personnelles : vous restez responsables de ce que vous rendez. »",
          lignes: 2,
        },
      ],
      retour: {
        titre: "L’essentiel",
        texte:
          "Les mots peuvent changer d’une matière à l’autre, pas la règle : chaque élève doit entendre la même règle dans toutes les disciplines.",
      },
    },
    { type: "titre", texte: "Avant de quitter la salle" },
    {
      type: "paragraphe",
      texte:
        "Deux minutes pour l’enquête de satisfaction, quatre questions, sur le site : /formations/ia-usages-numeriques/participer/satisfaction — QR code projeté. Les réponses sont anonymes : ni nom, ni adresse, ni identifiant. Elles servent à améliorer la session et à choisir les ateliers de l’année.",
    },
    { type: "titre", texte: "La suite" },
    {
      type: "cartes",
      colonnes: 3,
      cartes: [
        {
          titre: "A3 · RGPD au quotidien",
          texte: "Atelier, avant les vacances d’automne.",
        },
        {
          titre: "A5 · Préparer ses cours avec l’IA",
          texte: "Atelier, en novembre.",
        },
        {
          titre: "Café numérique",
          texte: "Chaque mois.",
        },
        {
          titre: "Pix+Édu IA",
          texte:
            "Parcours d’autoformation pour les enseignants, via Pix Orga.",
        },
        {
          titre: "Accompagnement individuel",
          texte: "Avec le référent numérique, sur rendez-vous.",
        },
      ],
    },
    {
      type: "encadre",
      ton: "info",
      titre: "Rester en contact",
      texte:
        "Eddy Bachaalany, référent numérique — eddy.bachaalany@lycee-montaigne.edu.lb. La fiche outils vous est envoyée en version numérique après la session. Le mur des contributions reste consultable : /formations/ia-usages-numeriques/participer/restitution/contributions — les ressources, les requêtes et les vigilances de tous les groupes y sont rassemblées.",
    },
    {
      type: "notesAnimateur",
      texte:
        "1:45 — 10 minutes de restitution, puis 5 minutes de clôture (diapositives 23 à 25). Chrono projeté, une minute par groupe, sans débordement. Noter au tableau les vigilances communes : elles deviennent la check-list collective. Pour la clôture : les trois phrases (à adapter à sa matière), la suite du plan de formation, puis l’enquête de satisfaction sur le site — projeter le QR code de la page satisfaction affiché par le tableau de bord, 4 questions (annexe B), 2 minutes, avant de quitter la salle. Attendre que le compteur de réponses se stabilise avant de fermer la session dans le tableau de bord. Rappeler la date du prochain atelier. Envoyer la fiche outils et le lien du mur des contributions le jour même.",
    },
  ],
};
