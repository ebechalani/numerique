/**
 * Rendu d’une suite de blocs de contenu.
 *
 * Point d’entrée unique : les pages passent `blocs` (issus de src/content) et
 * ce composant délègue à la variante correspondante. Le `switch` est exhaustif —
 * ajouter une variante au contrat sans l’y déclarer casse la compilation.
 */

import { Fragment } from "react";

import type { Bloc } from "@/content/types";

import {
  Cartes,
  Citation,
  Encadre,
  Etapes,
  Feu,
  Liste,
  NotesAnimateur,
  Paragraphe,
  Tableau,
  Titre,
} from "@/components/blocs/Statiques";
import Requete from "@/components/blocs/Requete";

import BibliothequeRequetes from "@/components/interactif/BibliothequeRequetes";
import CasPratiques from "@/components/interactif/CasPratiques";
import Checklist from "@/components/interactif/Checklist";
import ConstructeurRequete from "@/components/interactif/ConstructeurRequete";
import Quiz from "@/components/interactif/Quiz";

function rendreBloc(bloc: Bloc) {
  switch (bloc.type) {
    /* --- blocs statiques --- */
    case "titre":
      return <Titre bloc={bloc} />;
    case "paragraphe":
      return <Paragraphe bloc={bloc} />;
    case "liste":
      return <Liste bloc={bloc} />;
    case "cartes":
      return <Cartes bloc={bloc} />;
    case "etapes":
      return <Etapes bloc={bloc} />;
    case "encadre":
      return <Encadre bloc={bloc} />;
    case "citation":
      return <Citation bloc={bloc} />;
    case "tableau":
      return <Tableau bloc={bloc} />;
    case "feu":
      return <Feu bloc={bloc} />;
    case "requete":
      return <Requete bloc={bloc} />;

    /* --- blocs interactifs (composants client) --- */
    case "quiz":
      return <Quiz bloc={bloc} />;
    case "casPratiques":
      return <CasPratiques bloc={bloc} />;
    case "checklist":
      return <Checklist bloc={bloc} />;
    case "constructeurRequete":
      return <ConstructeurRequete />;
    case "bibliothequeRequetes":
      return <BibliothequeRequetes bloc={bloc} />;

    /* --- encart animateur --- */
    case "notesAnimateur":
      return <NotesAnimateur bloc={bloc} />;

    default: {
      // Exhaustivité : si une variante du contrat n’est pas traitée ci-dessus,
      // TypeScript refuse cette affectation.
      const inconnu: never = bloc;
      return inconnu;
    }
  }
}

export function Blocs({
  blocs,
  montrerNotesAnimateur = false,
}: {
  blocs: Bloc[];
  montrerNotesAnimateur?: boolean;
}) {
  return (
    <div className="space-y-8">
      {blocs.map((bloc, i) =>
        bloc.type === "notesAnimateur" && !montrerNotesAnimateur ? null : (
          // Les blocs sont statiques : l’index est une clé stable.
          <Fragment key={i}>{rendreBloc(bloc)}</Fragment>
        ),
      )}
    </div>
  );
}

export default Blocs;
