/**
 * Un questionnaire prêt à lancer — celui projeté en réunion de parents, et
 * ceux qui viendront s'y ajouter.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import QuizInteractif from "@/components/reglement/QuizInteractif";
import {
  encoderQuiz,
  getModele,
  MODELES,
  questionsDe,
  versJouable,
} from "@/lib/reglement";

interface Props {
  params: Promise<{ modele: string }>;
}

export function generateStaticParams() {
  return MODELES.map((modele) => ({ modele: modele.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { modele: slug } = await params;
  const modele = getModele(slug);
  if (!modele) return { title: "Questionnaire introuvable" };
  return { title: modele.titre, description: modele.intro };
}

export default async function PageModeleQuiz({ params }: Props) {
  const { modele: slug } = await params;
  const modele = getModele(slug);
  if (!modele) notFound();

  const questions = questionsDe(modele.questions).map(versJouable);

  /* Reprendre le questionnaire dans le créateur : ses questions y arrivent
     déjà cochées, l'enseignant n'a plus qu'à retirer et ajouter. */
  const lienReprise = `/reglement-interieur/quiz?c=${encoderQuiz({
    t: modele.titre,
    m: modele.correction,
    q: modele.questions,
  })}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
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
            {modele.titre}
          </li>
        </ol>
      </nav>

      <div className="mt-6">
        <QuizInteractif
          titre={modele.titre}
          sousTitre={modele.sousTitre}
          intro={modele.intro}
          questions={questions}
          correction={modele.correction}
          cle={`modele-${modele.slug}`}
        />
      </div>

      <footer className="sans-impression mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-trait pt-5 text-sm">
        <Link
          href="/reglement-interieur/creer"
          className="text-accent underline underline-offset-4 transition-colors hover:text-accent-fort"
        >
          Composer votre propre questionnaire
        </Link>
        <Link
          href={lienReprise}
          className="text-graphite underline underline-offset-4 transition-colors hover:text-accent"
        >
          Obtenir un lien partageable de celui-ci
        </Link>
        <Link
          href="/reglement-interieur/reglement"
          className="text-graphite underline underline-offset-4 transition-colors hover:text-accent"
        >
          Lire le règlement
        </Link>
      </footer>
    </div>
  );
}
