/**
 * Le texte du règlement intérieur, article par article.
 *
 * Page statique : elle se lit sans JavaScript, s'imprime, et sert de cible aux
 * liens « RI 4.7.1 » posés par les corrigés des questionnaires.
 */

import type { Metadata } from "next";
import Link from "next/link";

import TexteReglement, {
  SommaireReglement,
} from "@/components/reglement/TexteReglement";
import {
  REFERENCE_REGLEMENT,
  REMARQUES_NUMEROTATION,
} from "@/content/reglement/reglement";
import { CHAPITRES, reglementDisponible } from "@/lib/reglement";

export const metadata: Metadata = {
  title: "Le texte du règlement intérieur",
  description:
    "Le règlement intérieur du 2nd degré du Lycée Montaigne, année 2026-2027, chapitre par chapitre et article par article.",
};

export default function PageTexteReglement() {
  const disponible = reglementDisponible();

  const nombreArticles = CHAPITRES.reduce(
    (total, chapitre) => total + chapitre.articles.length,
    0,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
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
            Le texte
          </li>
        </ol>
      </nav>

      <header className="mt-5 max-w-3xl border-b border-trait pb-8">
        <p className="text-sm text-accent">{REFERENCE_REGLEMENT.annee}</p>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-encre sm:text-4xl">
          {REFERENCE_REGLEMENT.titre}
        </h1>
        <p className="mt-2 text-lg text-graphite">
          {REFERENCE_REGLEMENT.precision} ·{" "}
          {REFERENCE_REGLEMENT.etablissement}
        </p>
        {disponible ? (
          <p className="mt-4 text-sm text-estompe">
            {nombreArticles} articles · transcription du document officiel, mot
            pour mot. En cas de doute, le document signé par la famille fait
            foi.
          </p>
        ) : null}
      </header>

      {!disponible ? (
        <div className="mt-10 rounded-lg border border-trait bg-craie p-6 sm:p-8">
          <h2 className="font-serif text-xl text-encre">
            Le texte n’est pas encore en ligne
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-graphite">
            La transcription du règlement article par article est en cours. Les
            questionnaires, eux, sont utilisables dès maintenant : chaque
            corrigé indique le numéro d’article, à retrouver dans le document
            remis aux familles.
          </p>
          <Link
            href="/reglement-interieur"
            className="mt-5 inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
          >
            Retour à la section
          </Link>
        </div>
      ) : (
        <div className="mt-8 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <aside className="sans-impression mb-8 lg:mb-0 lg:self-start">
            <SommaireReglement chapitres={CHAPITRES} />
          </aside>

          <div className="min-w-0">
            {REMARQUES_NUMEROTATION.length > 0 ? (
              <div className="mb-10 rounded-[--radius-carte] border border-trait border-l-4 border-l-ambre bg-ambre-voile px-5 py-4">
                <p className="font-semibold text-encre">
                  Numérotation du document
                </p>
                <ul className="mt-2 space-y-1.5">
                  {REMARQUES_NUMEROTATION.map((remarque, rang) => (
                    <li
                      key={rang}
                      className="text-sm leading-relaxed text-encre-clair"
                    >
                      {remarque}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  Ces numéros sont reproduits tels qu’ils figurent dans le
                  document officiel, sans correction.
                </p>
              </div>
            ) : null}

            <TexteReglement chapitres={CHAPITRES} />
          </div>
        </div>
      )}
    </div>
  );
}
