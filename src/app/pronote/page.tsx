/**
 * Accueil de la section « Pronote » : les tutoriels du lycée, par rubrique,
 * avec un filtre par public et une recherche.
 */

import type { Metadata } from "next";
import Link from "next/link";

import CataloguePronote, {
  type CarteTutoriel,
} from "@/components/pronote/CataloguePronote";
import { REFERENT } from "@/content/site";
import {
  LIBELLES_APPLICATION,
  LIBELLES_PUBLIC,
  nombreEtapes,
  THEMES,
  tutoriels,
} from "@/lib/pronote";

export const metadata: Metadata = {
  title: "Pronote",
  description:
    "Les tutoriels Pronote du Lycée Montaigne, pas à pas : appel, cahier de textes, notes et compétences, communication avec les familles, Espace Parents.",
};

/** Adresse publique de connexion à la base Pronote du lycée. */
const ADRESSE_PRONOTE = "https://2050048n.index-education.net/pronote/";

export default function PagePronote() {
  const cartes: CarteTutoriel[] = tutoriels.map((t) => ({
    slug: t.slug,
    titre: t.titre,
    resume: t.resume,
    public: t.public,
    theme: t.theme,
    application: LIBELLES_APPLICATION[t.application],
    duree: t.duree,
    etapes: nombreEtapes(t),
    recherche: [
      t.titre,
      t.resume,
      ...t.sections.flatMap((s) => [s.titre ?? "", ...s.etapes.map((e) => e.texte)]),
    ].join(" "),
  }));
  const pourParents = tutoriels.filter((t) => t.public.includes("parents")).length;

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
          <li aria-current="page" className="text-encre">
            Pronote
          </li>
        </ol>
      </nav>

      <header className="mt-5 max-w-3xl">
        <p className="text-sm text-accent">Tutoriels pas à pas</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight text-encre sm:text-5xl">
          Pronote
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-graphite">
          Les gestes de Pronote au Lycée Montaigne, un écran après l’autre :
          faire l’appel, remplir le cahier de textes, créer un devoir, évaluer
          par compétences, écrire aux familles. Cochez chaque étape au fur et à
          mesure — votre progression reste dans votre navigateur.
        </p>
        <p className="mt-3 text-sm text-estompe">
          {tutoriels.length} tutoriels · dont {pourParents} à transmettre aux
          familles · par {REFERENT.nom}, {REFERENT.role}
        </p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a
          href={ADRESSE_PRONOTE}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 rounded-lg border border-accent bg-accent-voile p-5 transition-colors hover:bg-accent hover:text-craie"
        >
          <span>
            <span className="block text-xs font-medium tracking-wide text-accent-fort uppercase group-hover:text-craie">
              Se connecter
            </span>
            <span className="mt-1 block font-serif text-xl text-encre group-hover:text-craie">
              Ouvrir Pronote
            </span>
            <span className="mt-1 block text-sm text-graphite group-hover:text-craie">
              La base du Lycée Montaigne, dans le navigateur.
            </span>
          </span>
          <span aria-hidden="true" className="text-accent group-hover:text-craie">
            ↗
          </span>
          <span className="sr-only">(s’ouvre dans un nouvel onglet)</span>
        </a>
        <div
          role="note"
          className="rounded-lg border border-trait border-l-2 border-l-ambre bg-ambre-voile p-5"
        >
          <p className="text-xs font-medium tracking-wide text-estompe uppercase">
            Captures d’écran
          </p>
          <p className="mt-1 text-sm leading-relaxed text-encre-clair">
            Elles viennent de la base du lycée et des démonstrations
            d’Index Éducation. Les noms, dates, codes et toute information
            sur un élève y sont masqués par des aplats gris : ce site est
            public.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <CataloguePronote
          cartes={cartes}
          themes={THEMES}
          libellesPublic={LIBELLES_PUBLIC}
        />
      </div>

      <footer className="mt-14 rounded-lg border border-trait bg-voile px-5 py-4">
        <p className="leading-relaxed text-encre-clair">
          Un écran a changé, une étape ne marche plus ? Pronote évolue chaque
          année.{" "}
          <a
            href={`mailto:${REFERENT.courriel}`}
            className="text-accent underline underline-offset-4 transition-colors hover:text-accent-fort"
          >
            Écrivez au référent numérique
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
