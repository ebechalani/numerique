/**
 * Le créateur de QCM sur le règlement intérieur.
 *
 * Page statique ; toute la composition se fait dans le navigateur, et le
 * questionnaire produit voyage dans un lien plutôt que dans une base.
 */

import type { Metadata } from "next";
import Link from "next/link";

import CreateurQcm from "@/components/reglement/CreateurQcm";
import { BANQUE, THEMES } from "@/lib/reglement";

export const metadata: Metadata = {
  title: "Créer un QCM sur le règlement intérieur",
  description:
    "Composez un questionnaire interactif à partir du règlement intérieur : choisissez vos questions, ajoutez les vôtres, repartez avec un lien à projeter ou à envoyer.",
};

/**
 * Requête proposée pour produire d'autres questions à partir du règlement.
 * Elle suit la méthode ACTIF enseignée ailleurs sur le site : rôle, contexte,
 * tâche, ton, format — et impose la citation, qui est ce qui rend une
 * question vérifiable.
 */
const REQUETE_IA = `Tu es un professeur principal qui prépare l’heure de vie de classe de la rentrée. Le règlement intérieur du 2nd degré est la seule source de ce carnet ; ma classe est une [niveau]. À partir du chapitre [numéro ou thème] du règlement, rédige 8 questions à choix unique avec 4 propositions dont une seule est juste, ancrées dans des situations concrètes de la vie de l’établissement. Emploie un vocabulaire simple, sans jargon juridique, compréhensible par un élève de ce niveau. Présente le résultat dans un tableau : Question | Propositions | Bonne réponse | Article du règlement | Phrase du règlement qui le prouve. N’invente aucune règle : si le règlement ne tranche pas, ne pose pas la question.`;

export default function PageCreerQcm() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="Fil d’Ariane" className="sans-impression">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-graphite">
          <li>
            <Link href="/" className="transition-colors hover:text-accent">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true" className="text-trait-fort">
            /
          </li>
          <li>
            <Link
              href="/reglement-interieur"
              className="transition-colors hover:text-accent"
            >
              Règlement intérieur
            </Link>
          </li>
          <li aria-hidden="true" className="text-trait-fort">
            /
          </li>
          <li aria-current="page" className="text-encre">
            Créer un QCM
          </li>
        </ol>
      </nav>

      <header className="mt-5 max-w-3xl">
        <p className="text-sm text-accent">Pour les professeurs</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight text-encre sm:text-5xl">
          Créer un QCM
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-graphite">
          Choisissez vos questions dans la banque, ajoutez les vôtres, réglez le
          moment du corrigé. Vous repartez avec un lien : à projeter en classe,
          ou à envoyer aux élèves et aux familles.
        </p>

        <div className="mt-6 rounded-lg border border-trait border-l-2 border-l-accent bg-craie px-5 py-4">
          <p className="text-xs font-medium tracking-wide text-estompe uppercase">
            Ce que fait le lien
          </p>
          <p className="mt-1.5 leading-relaxed text-encre-clair">
            Le questionnaire tient entier dans son adresse. Rien n’est
            enregistré sur le site : aucun compte à créer, aucune réponse
            conservée, rien à supprimer après la séance. Les réponses de chacun
            restent dans son propre navigateur.
          </p>
        </div>
      </header>

      <div className="mt-10">
        <CreateurQcm banque={BANQUE} themes={THEMES} requeteIa={REQUETE_IA} />
      </div>

      <footer className="sans-impression mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-trait pt-5 text-sm">
        <Link
          href="/reglement-interieur/reglement"
          className="text-accent underline underline-offset-4 transition-colors hover:text-accent-fort"
        >
          Lire le règlement
        </Link>
        <Link
          href="/reglement-interieur/quiz/parents"
          className="text-graphite underline underline-offset-4 transition-colors hover:text-accent"
        >
          Voir le questionnaire des parents
        </Link>
      </footer>
    </div>
  );
}
