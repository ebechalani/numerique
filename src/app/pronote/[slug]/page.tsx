/**
 * Page d’un tutoriel Pronote : les étapes, à cocher, avec leurs captures.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Encadre } from "@/components/blocs/Statiques";
import EtapesPronote from "@/components/pronote/EtapesPronote";
import { REFERENT } from "@/content/site";
import {
  getTutoriel,
  LIBELLES_APPLICATION,
  LIBELLES_PUBLIC,
  nombreEtapes,
  suivant,
  titreTheme,
  tutoriels,
  voisins,
} from "@/lib/pronote";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tutoriels.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutoriel = getTutoriel(slug);
  if (!tutoriel) return { title: "Tutoriel introuvable" };
  return { title: `${tutoriel.titre} — Pronote`, description: tutoriel.resume };
}

function Point() {
  return (
    <span aria-hidden="true" className="text-trait-fort">
      ·
    </span>
  );
}

export default async function PageTutorielPronote({ params }: Props) {
  const { slug } = await params;
  const tutoriel = getTutoriel(slug);
  if (!tutoriel) notFound();

  const autres = voisins(tutoriel);
  const apres = suivant(tutoriel);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
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
            <Link href="/pronote" className="transition-colors hover:text-accent">
              Pronote
            </Link>
          </li>
          <li aria-hidden="true" className="text-trait-fort">
            /
          </li>
          <li aria-current="page" className="text-encre">
            {tutoriel.titre}
          </li>
        </ol>
      </nav>

      <header className="mt-5 border-b border-trait pb-8">
        <p className="text-sm text-accent">{titreTheme(tutoriel.theme)}</p>
        <h1 className="mt-2 font-serif text-3xl leading-tight font-semibold tracking-tight text-encre sm:text-4xl">
          {tutoriel.titre}
        </h1>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-graphite">
          {tutoriel.resume}
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-graphite">
          <span>{tutoriel.public.map((p) => LIBELLES_PUBLIC[p]).join(", ")}</span>
          <Point />
          <span>{LIBELLES_APPLICATION[tutoriel.application]}</span>
          <Point />
          <span>{nombreEtapes(tutoriel)} étapes</span>
          {tutoriel.duree ? (
            <>
              <Point />
              <span>{tutoriel.duree}</span>
            </>
          ) : null}
        </p>

        {tutoriel.prerequis?.length ? (
          <div className="mt-6 rounded-lg border border-trait bg-craie p-4">
            <p className="text-xs font-medium tracking-wide text-estompe uppercase">
              Avant de commencer
            </p>
            <ul className="mt-2 space-y-1.5">
              {tutoriel.prerequis.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-encre-clair">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-trait-fort"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <div className="mt-8">
        <EtapesPronote slug={tutoriel.slug} sections={tutoriel.sections} />
      </div>

      {tutoriel.astuces?.length ? (
        <div className="mt-12 space-y-4">
          {tutoriel.astuces.map((a, i) => (
            <Encadre key={i} bloc={{ type: "encadre", ...a }} />
          ))}
        </div>
      ) : null}

      {tutoriel.liens?.length ? (
        <div className="mt-10">
          <p className="text-xs font-medium tracking-wide text-estompe uppercase">Liens utiles</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {tutoriel.liens.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start justify-between gap-3 rounded-lg border border-trait bg-craie p-4 transition-colors hover:border-accent hover:bg-accent-voile"
                >
                  <span className="font-medium text-encre group-hover:text-accent">{l.libelle}</span>
                  <span aria-hidden="true" className="text-accent">
                    ↗
                  </span>
                  <span className="sr-only">(s’ouvre dans un nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <nav aria-label="Autres tutoriels" className="sans-impression mt-14 border-t border-trait pt-8">
        {autres.length ? (
          <>
            <p className="text-xs font-medium tracking-wide text-estompe uppercase">
              Dans la même rubrique
            </p>
            <ul className="mt-3 space-y-2">
              {autres.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/pronote/${t.slug}`}
                    className="text-accent underline decoration-trait-fort underline-offset-4 transition-colors hover:text-accent-fort"
                  >
                    {t.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/pronote"
            className="text-sm text-graphite transition-colors hover:text-accent"
          >
            ← Tous les tutoriels
          </Link>
          {apres ? (
            <Link
              href={`/pronote/${apres.slug}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
            >
              Suivant : {apres.titre}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          ) : null}
        </div>
      </nav>

      <p className="mt-10 text-xs leading-relaxed text-estompe">
        D’après le document « {tutoriel.source.fichier} » de {REFERENT.nom} ({tutoriel.source.date}).
        Les données personnelles visibles sur les captures d’origine ont été masquées.
      </p>
    </div>
  );
}
