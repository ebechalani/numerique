"use client";

/**
 * Les étapes d’un tutoriel Pronote.
 *
 * Chaque étape se coche une fois faite ; la progression reste dans le
 * navigateur (rien n’est transmis). Une capture s’agrandit au clic, dans une
 * fenêtre qu’on ferme avec Échap ou le bouton « Fermer ».
 */

import Image from "next/image";
import { useRef, useState } from "react";

import type { CapturePronote, SectionPronote } from "@/content/pronote/types";
import { useEtatLocal } from "@/lib/progression";

type Faites = Record<string, boolean | undefined>;
const AUCUNE: Faites = {};

function Coche() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

function Loupe() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2M11 8v6M8 11h6" />
    </svg>
  );
}

export default function EtapesPronote({
  slug,
  sections,
}: {
  slug: string;
  sections: SectionPronote[];
}) {
  const [faites, setFaites] = useEtatLocal<Faites>(`pronote:${slug}`, AUCUNE);
  const [agrandie, setAgrandie] = useState<CapturePronote | null>(null);
  const fenetre = useRef<HTMLDialogElement>(null);

  const cles = sections.flatMap((s, i) => s.etapes.map((_, j) => `${i}-${j}`));
  const total = cles.length;
  const nbFaites = cles.filter((c) => faites[c] === true).length;
  const pourcentage = total ? Math.round((nbFaites / total) * 100) : 0;

  /* Numéro de chaque étape, en continu d’une section à l’autre. */
  const debuts = sections.map((_, i) =>
    sections.slice(0, i).reduce((n, s) => n + s.etapes.length, 0),
  );

  function ouvrir(capture: CapturePronote) {
    setAgrandie(capture);
    fenetre.current?.showModal();
  }

  return (
    <div>
      {/* Progression */}
      <div className="sans-impression sticky top-16 z-10 -mx-4 border-b border-trait bg-papier/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-lg sm:border sm:px-5">
        <div className="flex items-center gap-4">
          <div
            role="progressbar"
            aria-label="Étapes faites"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={nbFaites}
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-voile"
          >
            <div
              className="h-full rounded-full bg-accent transition-all duration-200"
              style={{ width: `${pourcentage}%` }}
            />
          </div>
          <span className="shrink-0 font-mono text-xs tabular-nums text-graphite">
            {nbFaites} / {total}
          </span>
          {nbFaites > 0 ? (
            <button
              type="button"
              onClick={() => setFaites({})}
              className="shrink-0 text-xs text-graphite underline-offset-4 hover:text-accent hover:underline"
            >
              Recommencer
            </button>
          ) : null}
        </div>
        {nbFaites === total && total > 0 ? (
          <p role="status" className="mt-2 text-sm font-medium text-vert">
            Toutes les étapes sont faites.
          </p>
        ) : null}
      </div>

      {/* Sections et étapes */}
      <div className="mt-8 space-y-12">
        {sections.map((section, i) => (
          <section key={i} aria-label={section.titre ?? undefined}>
            {section.titre ? (
              <h2 className="border-b border-trait pb-2 font-serif text-2xl font-semibold tracking-tight text-encre">
                {section.titre}
              </h2>
            ) : null}
            {section.intro ? (
              <p className="mt-4 max-w-[70ch] leading-relaxed text-encre-clair">
                {section.intro}
              </p>
            ) : null}
            <ol className={section.titre || section.intro ? "mt-6 space-y-8" : "space-y-8"}>
              {section.etapes.map((etape, j) => {
                const numero = debuts[i] + j + 1;
                const cle = `${i}-${j}`;
                const faite = faites[cle] === true;
                return (
                  <li key={cle} className="relative">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFaites({ ...faites, [cle]: !faite })}
                        aria-pressed={faite}
                        aria-label={`Étape ${numero} : ${faite ? "faite" : "à faire"}`}
                        className={[
                          "mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border font-mono text-sm font-semibold tabular-nums transition-colors",
                          faite
                            ? "border-vert bg-vert text-craie"
                            : "border-trait-fort bg-craie text-encre hover:border-accent hover:text-accent",
                        ].join(" ")}
                      >
                        {faite ? <Coche /> : numero}
                      </button>
                      <div className="min-w-0 flex-1">
                        <p
                          className={[
                            "max-w-[70ch] text-[1.0625rem] leading-relaxed",
                            faite ? "text-graphite" : "text-encre",
                          ].join(" ")}
                        >
                          {etape.texte}
                          {etape.icone ? (
                            <span className="ml-2 inline-flex translate-y-1 rounded border border-trait bg-craie p-0.5 align-baseline">
                              <Image
                                src={etape.icone.src}
                                alt={etape.icone.alt}
                                width={etape.icone.largeur}
                                height={etape.icone.hauteur}
                                className="h-6 w-auto"
                              />
                            </span>
                          ) : null}
                        </p>
                        {etape.detail ? (
                          <p className="mt-1.5 max-w-[70ch] text-sm leading-relaxed text-graphite">
                            {etape.detail}
                          </p>
                        ) : null}
                        {etape.liste ? (
                          <ul className="mt-2 max-w-[70ch] space-y-1.5">
                            {etape.liste.map((item, k) => (
                              <li key={k} className="flex gap-3 text-sm leading-relaxed text-encre-clair">
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-trait-fort"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {etape.capture ? (
                          <figure className="mt-4">
                            <button
                              type="button"
                              onClick={() => ouvrir(etape.capture!)}
                              className="group relative block w-full overflow-hidden rounded-lg border border-trait bg-craie text-left transition-colors hover:border-accent"
                            >
                              <Image
                                src={etape.capture.src}
                                alt={etape.capture.alt}
                                width={etape.capture.largeur}
                                height={etape.capture.hauteur}
                                sizes="(min-width: 1024px) 720px, 100vw"
                                className="h-auto w-full"
                              />
                              <span className="sans-impression absolute right-2 bottom-2 inline-flex items-center gap-1.5 rounded-md bg-encre/80 px-2 py-1 text-xs text-craie opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                                <Loupe />
                                Agrandir
                              </span>
                            </button>
                          </figure>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      {/* Capture agrandie */}
      <dialog
        ref={fenetre}
        onClose={() => setAgrandie(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) fenetre.current?.close();
        }}
        className="m-auto max-h-[92vh] w-[min(96vw,1400px)] max-w-none rounded-lg bg-craie p-0 shadow-2xl backdrop:bg-encre/70"
      >
        {agrandie ? (
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-trait px-4 py-2">
              <p className="truncate text-sm text-graphite">{agrandie.alt}</p>
              <button
                type="button"
                onClick={() => fenetre.current?.close()}
                className="shrink-0 rounded-md border border-trait px-3 py-1 text-sm text-encre hover:border-accent hover:text-accent"
              >
                Fermer
              </button>
            </div>
            <div className="overflow-auto p-2">
              <Image
                src={agrandie.src}
                alt={agrandie.alt}
                width={agrandie.largeur}
                height={agrandie.hauteur}
                sizes="96vw"
                className="mx-auto h-auto max-w-full"
              />
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
