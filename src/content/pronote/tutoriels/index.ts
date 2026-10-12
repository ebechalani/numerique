import type { TutorielPronote } from "@/content/pronote/types";

import { telechargerPronote } from "./telecharger-pronote";
import { notifications } from "./notifications";
import { synchroniserCalendrier } from "./synchroniser-calendrier";
import { feuilleAppel } from "./feuille-appel";
import { memoVieScolaire } from "./memo-vie-scolaire";
import { elevesAbsents } from "./eleves-absents";
import { rappelAppelProfesseurs } from "./rappel-appel-professeurs";
import { absenceProfesseur } from "./absence-professeur";
import { saisirCahierDeTextes } from "./saisir-cahier-de-textes";
import { copierTravailCahierDeTextes } from "./copier-travail-cahier-de-textes";
import { renduDevoirAudio } from "./rendu-devoir-audio";
import { competencesTravaillees } from "./competences-travaillees";
import { creerDevoirNote } from "./creer-devoir-note";
import { calculMoyenne } from "./calcul-moyenne";
import { ajouterCompetence } from "./ajouter-competence";
import { evaluationCompetences } from "./evaluation-competences";
import { diffuserInformation } from "./diffuser-information";
import { reserverMateriel } from "./reserver-materiel";
import { parentsSite } from "./parents-site";
import { parentsApplication } from "./parents-application";
import { parentsMotDePasse } from "./parents-mot-de-passe";

/** Les tutoriels Pronote, dans l’ordre de la section. */
export const TUTORIELS: TutorielPronote[] = [
  telechargerPronote,
  notifications,
  synchroniserCalendrier,
  feuilleAppel,
  memoVieScolaire,
  elevesAbsents,
  rappelAppelProfesseurs,
  absenceProfesseur,
  saisirCahierDeTextes,
  copierTravailCahierDeTextes,
  renduDevoirAudio,
  competencesTravaillees,
  creerDevoirNote,
  calculMoyenne,
  ajouterCompetence,
  evaluationCompetences,
  diffuserInformation,
  reserverMateriel,
  parentsSite,
  parentsApplication,
  parentsMotDePasse,
];
