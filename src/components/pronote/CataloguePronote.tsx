"use client";

/**
 * Catalogue des tutoriels Pronote : filtre par public, recherche, rubriques.
 *
 * Le serveur rend la liste complète ; le filtre ne fait que masquer des
 * cartes. Sans JavaScript, tout reste lisible et chaque lien fonctionne.
 */

import Link from "next/link";
import { useMemo, useState } from "react";

import type {
  PublicPronote,
  ThemePronote,
} from "@/content/pronote/types";

export interface CarteTutoriel {
  slug: string;
  titre: string;
  resume: string;
  public: PublicPronote[];
  theme: ThemePronote;
  application: string;
  duree?: string;
  etapes: number;
  /** Texte d’indexation : titre, résumé, étapes. */
  recherche: string;
}

interface Props {
  cartes: CarteTutoriel[];
  themes: Array<{ cle: ThemePronote; titre: string; texte: string }>;
  libellesPublic: Record<PublicPronote, string>;
}

/** Sans accents, en minuscules : « Équipe » se trouve en tapant « equipe ». */
function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

const PUBLICS: Array<PublicPronote | "tous"> = [
  "tous",
  "professeurs",
  "vie-scolaire",
  "parents",
];

export default function CataloguePronote({ cartes, themes, libellesPublic }: Props) {
  const [publicChoisi, setPublicChoisi] = useState<PublicPronote | "tous">("tous");
  const [requete, setRequete] = useState("");

  const visibles = useMemo(() => {
    const mots = normaliser(requete).split(/\s+/).filter(Boolean);
    return new Set(
      cartes
        .filter((c) => publicChoisi === "tous" || c.public.includes(publicChoisi))
        .filter((c) => mots.every((mot) => normaliser(c.recherche).includes(mot)))
        .map((c) => c.slug),
    );
  }, [cartes, publicChoisi, requete]);

  return (
    <div>
      {/* Filtres */}
      <div className="sans-impression flex flex-col gap-4 rounded-lg border border-trait bg-craie p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div role="group" aria-label="Filtrer par public" className="flex flex-wrap gap-2">
          {PUBLICS.map((cle) => {
            const actif = publicChoisi === cle;
            return (
              <button
                key={cle}
                type="button"
                aria-pressed={actif}
                onClick={() => setPublicChoisi(cle)}
                className={[
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  actif
                    ? "border-accent bg-accent text-craie"
                    : "border-trait-fort bg-papier text-graphite hover:border-accent hover:text-accent",
                ].join(" ")}
              >
                {cle === "tous" ? "Tous" : libellesPublic[cle]}
              </button>
            );
          })}
        </div>
        <label className="flex min-w-0 items-center gap-2 sm:w-72">
          <span className="sr-only">Rechercher un tutoriel</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-estompe"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-4.2-4.2" />
          </svg>
          <input
            type="search"
            value={requete}
            onChange={(e) => setRequete(e.target.value)}
            placeholder="Appel, devoir, mot de passe…"
            className="min-w-0 flex-1 rounded-md border border-trait bg-papier px-3 py-2 text-sm text-encre placeholder:text-estompe focus:border-accent focus:outline-none"
          />
        </label>
      </div>

      <p aria-live="polite" className="sr-only">
        {visibles.size} tutoriel{visibles.size > 1 ? "s" : ""} affiché{visibles.size > 1 ? "s" : ""}
      </p>

      {/* Rubriques */}
      <div className="mt-10 space-y-12">
        {themes.map((theme) => {
          const dansTheme = cartes.filter((c) => c.theme === theme.cle);
          const affichees = dansTheme.filter((c) => visibles.has(c.slug));
          if (dansTheme.length === 0) return null;
          return (
            <section
              key={theme.cle}
              aria-labelledby={`theme-${theme.cle}`}
              hidden={affichees.length === 0}
            >
              <h2
                id={`theme-${theme.cle}`}
                className="font-serif text-2xl text-encre sm:text-[1.75rem]"
              >
                {theme.titre}
              </h2>
              <p className="mt-1 max-w-[70ch] text-sm leading-relaxed text-graphite">
                {theme.texte}
              </p>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {dansTheme.map((c) => (
                  <li key={c.slug} hidden={!visibles.has(c.slug)}>
                    <Link
                      href={`/pronote/${c.slug}`}
                      className="group flex h-full flex-col rounded-lg border border-trait bg-craie p-5 transition-colors hover:border-accent hover:bg-accent-voile"
                    >
                      <span className="flex flex-wrap gap-1.5">
                        {c.public.map((p) => (
                          <span
                            key={p}
                            className="rounded-full bg-voile px-2 py-0.5 text-[0.7rem] font-medium tracking-wide text-graphite uppercase"
                          >
                            {libellesPublic[p]}
                          </span>
                        ))}
                      </span>
                      <span className="mt-2.5 font-serif text-xl leading-snug text-encre group-hover:text-accent-fort">
                        {c.titre}
                      </span>
                      <span className="mt-2 flex-1 text-sm leading-relaxed text-graphite">
                        {c.resume}
                      </span>
                      <span className="mt-4 flex flex-wrap items-center gap-x-2 text-xs text-estompe">
                        <span>{c.application}</span>
                        <span aria-hidden="true">·</span>
                        <span>
                          {c.etapes} étape{c.etapes > 1 ? "s" : ""}
                        </span>
                        {c.duree ? (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{c.duree}</span>
                          </>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {visibles.size === 0 ? (
          <p className="rounded-lg border border-trait bg-voile p-6 text-center text-graphite">
            Aucun tutoriel ne correspond. Essayez un autre mot, ou{" "}
            <button
              type="button"
              onClick={() => {
                setRequete("");
                setPublicChoisi("tous");
              }}
              className="text-accent underline underline-offset-4"
            >
              affichez tout
            </button>
            .
          </p>
        ) : null}
      </div>
    </div>
  );
}
