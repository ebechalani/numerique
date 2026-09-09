"use client";

/**
 * Lecteur de questionnaire sur le règlement intérieur.
 *
 * Il rejoue à l'écran ce que faisait le diaporama : une question à la fois,
 * en gros, avec les mêmes symboles ▲ ◆ ● ■ pour que la salle annonce sa
 * réponse à voix haute ou à main levée. Deux différences : chacun peut y
 * répondre sur son téléphone, et le corrigé renvoie à l'article du règlement.
 *
 * Deux moments de corrigé :
 *  - « immediat » : la réponse est jugée au clic, pour un travail individuel ;
 *  - « fin » : rien n'est révélé avant le récapitulatif, comme en réunion.
 *
 * Les réponses restent dans le navigateur. Rien n'est transmis, et aucun nom
 * n'est demandé : ce questionnaire n'évalue personne.
 */

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useState } from "react";

import type { MomentCorrection } from "@/content/reglement/types";
import { lienArticle, TITRE_THEME, type QuestionJouable } from "@/lib/reglement";
import { useEtatLocal, useHydrate } from "@/lib/progression";

/** Les symboles du diaporama : reconnaissables du fond de la salle. */
const SYMBOLES = ["▲", "◆", "●", "■", "★", "✚"];

/** Touches acceptées pour répondre, dans l'ordre des options. */
const TOUCHES = ["a", "b", "c", "d", "e", "f"];

interface EtatQuiz {
  /** Rang de la question → rang de l'option choisie. */
  reponses: Record<string, number>;
  /** Question affichée. */
  etape: number;
  /** Le récapitulatif est-il ouvert ? */
  termine: boolean;
}

const ETAT_INITIAL: EtatQuiz = { reponses: {}, etape: 0, termine: false };

/** Le stockage peut contenir n'importe quoi : on reconstruit un état sûr. */
function etatSur(brut: unknown, total: number): EtatQuiz {
  const objet = (brut ?? {}) as Partial<EtatQuiz> & { reponses?: unknown };
  const reponses: Record<string, number> = {};
  if (typeof objet.reponses === "object" && objet.reponses !== null) {
    for (const [rang, valeur] of Object.entries(
      objet.reponses as Record<string, unknown>,
    )) {
      if (typeof valeur === "number" && Number.isInteger(valeur)) {
        reponses[rang] = valeur;
      }
    }
  }
  const etape =
    typeof objet.etape === "number" && Number.isInteger(objet.etape)
      ? Math.min(Math.max(objet.etape, 0), Math.max(total - 1, 0))
      : 0;
  return { reponses, etape, termine: objet.termine === true };
}

/* ------------------------------------------------------------------ */
/* Icônes                                                              */
/* ------------------------------------------------------------------ */

function IconeJuste({ classe = "h-4 w-4" }: { classe?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${classe} shrink-0`}
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

function IconeFausse({ classe = "h-4 w-4" }: { classe?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${classe} shrink-0`}
    >
      <path d="M5.5 5.5 14.5 14.5" />
      <path d="M14.5 5.5 5.5 14.5" />
    </svg>
  );
}

function Fleche({ sens }: { sens: "gauche" | "droite" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      {sens === "gauche" ? <path d="M14 6l-6 6 6 6" /> : <path d="M10 6l6 6-6 6" />}
    </svg>
  );
}

function IconeProjection({ actif }: { actif: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
    >
      {actif ? (
        <>
          <path d="M9 4v5H4" />
          <path d="M15 4v5h5" />
          <path d="M9 20v-5H4" />
          <path d="M15 20v-5h5" />
        </>
      ) : (
        <>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M9 21h6" />
        </>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Renvoi aux articles                                                 */
/* ------------------------------------------------------------------ */

function Articles({
  articles,
  gros = false,
}: {
  articles: string[];
  gros?: boolean;
}) {
  if (articles.length === 0) return null;
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      {articles.map((numero) => (
        <Link
          key={numero}
          href={lienArticle(numero)}
          className={[
            "inline-flex items-center rounded-md border border-trait bg-craie font-mono text-accent transition-colors hover:border-accent hover:text-accent-fort",
            gros ? "px-2 py-1 text-sm" : "px-1.5 py-0.5 text-xs",
          ].join(" ")}
        >
          RI {numero}
        </Link>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Le lecteur                                                          */
/* ------------------------------------------------------------------ */

export interface ProprietesQuiz {
  titre: string;
  sousTitre?: string;
  intro?: string;
  questions: QuestionJouable[];
  correction: MomentCorrection;
  /** Clé de stockage local, propre à ce questionnaire. */
  cle: string;
}

export default function QuizInteractif({
  titre,
  sousTitre,
  intro,
  questions,
  correction,
  cle,
}: ProprietesQuiz) {
  const base = useId();
  const total = questions.length;
  const pret = useHydrate();

  const [brut, setBrut] = useEtatLocal<EtatQuiz>(`quiz-ri:${cle}`, ETAT_INITIAL);
  const etat = useMemo(() => etatSur(brut, total), [brut, total]);
  const { reponses, etape, termine } = etat;

  const [projection, setProjection] = useState(false);

  const modifier = useCallback(
    (transformer: (precedent: EtatQuiz) => EtatQuiz) => {
      setBrut((precedent) => transformer(etatSur(precedent, total)));
    },
    [setBrut, total],
  );

  const repondre = useCallback(
    (rangOption: number) => {
      modifier((precedent) => {
        // Une réponse est définitive : c'est ce qui rend le score honnête.
        if (precedent.reponses[String(precedent.etape)] !== undefined) {
          return precedent;
        }
        return {
          ...precedent,
          reponses: { ...precedent.reponses, [String(precedent.etape)]: rangOption },
        };
      });
    },
    [modifier],
  );

  const allerA = useCallback(
    (rang: number) => {
      modifier((precedent) => ({
        ...precedent,
        etape: Math.min(Math.max(rang, 0), Math.max(total - 1, 0)),
        termine: false,
      }));
    },
    [modifier, total],
  );

  const terminer = useCallback(() => {
    modifier((precedent) => ({ ...precedent, termine: true }));
  }, [modifier]);

  const recommencer = useCallback(() => {
    modifier(() => ETAT_INITIAL);
  }, [modifier]);

  /* ---------------- Clavier ---------------- */

  useEffect(() => {
    function surTouche(evenement: KeyboardEvent) {
      const cible = evenement.target;
      if (
        cible instanceof HTMLElement &&
        (cible.tagName === "INPUT" ||
          cible.tagName === "TEXTAREA" ||
          cible.isContentEditable)
      ) {
        return;
      }

      if (evenement.key === "Escape" && projection) {
        setProjection(false);
        return;
      }
      if (termine) return;

      if (evenement.key === "ArrowRight") {
        evenement.preventDefault();
        if (etape < total - 1) allerA(etape + 1);
        else terminer();
        return;
      }
      if (evenement.key === "ArrowLeft") {
        evenement.preventDefault();
        allerA(etape - 1);
        return;
      }

      const courante = questions[etape];
      if (!courante) return;
      const parLettre = TOUCHES.indexOf(evenement.key.toLowerCase());
      const parChiffre = Number(evenement.key) - 1;
      const rang =
        parLettre >= 0 && parLettre < courante.options.length
          ? parLettre
          : Number.isInteger(parChiffre) &&
              parChiffre >= 0 &&
              parChiffre < courante.options.length
            ? parChiffre
            : -1;
      if (rang >= 0) {
        evenement.preventDefault();
        repondre(rang);
      }
    }

    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
  }, [allerA, etape, projection, questions, repondre, terminer, termine, total]);

  /* ---------------- Données dérivées ---------------- */

  const repondues = Object.keys(reponses).length;
  const justes = questions.filter(
    (question, rang) => reponses[String(rang)] === question.bonne,
  ).length;
  const pourcentage = total > 0 ? Math.round((repondues / total) * 100) : 0;

  if (total === 0) {
    return (
      <p className="rounded-lg border border-dashed border-trait-fort bg-voile p-6 text-center text-encre-clair">
        Ce questionnaire ne contient aucune question.
      </p>
    );
  }

  const courante = questions[etape];
  const choix = reponses[String(etape)];
  const repondu = choix !== undefined;
  const corrigeVisible = correction === "immediat" && repondu;

  /* ---------------- En-tête ---------------- */

  const enTete = (
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div className="min-w-0">
        <h2
          className={[
            "font-serif leading-tight text-encre",
            projection ? "text-3xl sm:text-4xl" : "text-2xl",
          ].join(" ")}
        >
          {titre}
        </h2>
        {sousTitre ? (
          <p
            className={
              projection ? "mt-1 text-lg text-graphite" : "mt-0.5 text-sm text-graphite"
            }
          >
            {sousTitre}
          </p>
        ) : null}
      </div>

      <div className="sans-impression flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setProjection((actif) => !actif)}
          aria-pressed={projection}
          className={[
            "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
            projection
              ? "border-accent bg-accent-voile text-accent-fort"
              : "border-trait bg-craie text-encre hover:border-trait-fort",
          ].join(" ")}
        >
          <IconeProjection actif={projection} />
          {projection ? "Quitter la projection" : "Mode projection"}
        </button>
        <button
          type="button"
          onClick={recommencer}
          className="rounded-lg border border-trait bg-craie px-3 py-1.5 text-sm font-medium text-graphite transition-colors hover:border-trait-fort hover:text-encre"
        >
          Recommencer
        </button>
      </div>
    </header>
  );

  /* ---------------- Progression ---------------- */

  const progression = (
    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      <div
        role="progressbar"
        aria-label="Questions répondues"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={pret ? repondues : 0}
        aria-valuetext={`${repondues} sur ${total}`}
        className="h-1 min-w-24 flex-1 overflow-hidden rounded-full bg-voile"
      >
        <div
          className="h-full rounded-full bg-accent transition-all duration-150"
          style={{ width: `${pret ? pourcentage : 0}%` }}
        />
      </div>
      <span
        className={[
          "shrink-0 font-mono tabular-nums text-graphite",
          projection ? "text-base" : "text-xs",
        ].join(" ")}
      >
        {termine ? `${total} / ${total}` : `Question ${etape + 1} sur ${total}`}
      </span>
    </div>
  );

  /* ---------------- Récapitulatif ---------------- */

  if (termine) {
    const contenu = (
      <div className="space-y-6">
        {enTete}
        {progression}

        <div
          role="status"
          className="rounded-lg border border-accent bg-accent-voile p-5 sm:p-6"
        >
          <p className="text-xs font-medium tracking-wide text-accent-fort uppercase">
            Corrigé
          </p>
          <p
            className={[
              "mt-1 font-serif text-encre",
              projection ? "text-3xl" : "text-2xl",
            ].join(" ")}
          >
            {pret ? justes : 0} bonne{justes > 1 ? "s" : ""} réponse
            {justes > 1 ? "s" : ""} sur {total}
          </p>
          {repondues < total ? (
            <p className="mt-1 text-sm text-graphite">
              {total - repondues} question{total - repondues > 1 ? "s" : ""} sans
              réponse.
            </p>
          ) : null}
        </div>

        <ol className="space-y-3">
          {questions.map((question, rang) => {
            const donnee = reponses[String(rang)];
            const juste = donnee === question.bonne;
            return (
              <li
                key={rang}
                className={[
                  "rounded-lg border p-4",
                  donnee === undefined
                    ? "border-trait bg-craie"
                    : juste
                      ? "border-vert-trait bg-vert-voile"
                      : "border-rouge-trait bg-rouge-voile",
                ].join(" ")}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-trait bg-craie font-mono text-xs tabular-nums text-graphite"
                  >
                    {rang + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={[
                        "text-encre",
                        projection ? "text-lg" : "text-sm",
                      ].join(" ")}
                    >
                      {question.question}
                    </p>

                    <p
                      className={[
                        "mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1",
                        projection ? "text-lg" : "text-sm",
                      ].join(" ")}
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-vert"
                      >
                        {SYMBOLES[question.bonne]}
                      </span>
                      <span className="font-semibold text-encre">
                        {question.options[question.bonne]}
                      </span>
                      <Articles articles={question.articles} gros={projection} />
                    </p>

                    {donnee !== undefined && !juste ? (
                      <p className="mt-1 flex items-center gap-2 text-sm text-rouge">
                        <IconeFausse />
                        <span>
                          Votre réponse : {question.options[donnee] ?? "—"}
                        </span>
                      </p>
                    ) : null}
                    {donnee !== undefined && juste ? (
                      <p className="mt-1 flex items-center gap-2 text-sm text-vert">
                        <IconeJuste />
                        <span>Votre réponse était juste.</span>
                      </p>
                    ) : null}
                    {donnee === undefined ? (
                      <p className="mt-1 text-sm text-graphite">
                        Vous n’avez pas répondu.
                      </p>
                    ) : null}

                    {question.explication ? (
                      <p className="mt-2 text-sm leading-relaxed text-graphite">
                        {question.explication}
                      </p>
                    ) : null}

                    {question.citation ? (
                      <blockquote className="mt-2 border-l-2 border-trait-fort pl-3 text-sm leading-relaxed text-encre-clair italic">
                        « {question.citation} »
                      </blockquote>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="sans-impression flex flex-wrap items-center gap-3 border-t border-trait pt-5">
          <button
            type="button"
            onClick={() => allerA(0)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-trait bg-craie px-3 py-2 text-sm font-medium text-encre transition-colors hover:border-trait-fort"
          >
            <Fleche sens="gauche" />
            Revoir les questions
          </button>
          <button
            type="button"
            onClick={recommencer}
            className="rounded-md px-2 py-1 text-sm text-graphite underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Tout effacer et recommencer
          </button>
        </div>
      </div>
    );

    return projection ? (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-papier">
        <div className="mx-auto max-w-5xl px-6 py-10">{contenu}</div>
      </div>
    ) : (
      contenu
    );
  }

  /* ---------------- Une question ---------------- */

  const carte = (
    <div className="space-y-6">
      {enTete}
      {intro && !projection && etape === 0 ? (
        <p className="max-w-3xl leading-relaxed text-graphite">{intro}</p>
      ) : null}
      {progression}

      <section
        aria-labelledby={`${base}-enonce`}
        className={[
          "rounded-lg border border-trait bg-craie",
          projection ? "p-8 sm:p-10" : "p-5 sm:p-7",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {courante.theme && TITRE_THEME[courante.theme] ? (
            <span
              className={[
                "inline-flex items-center rounded-full bg-accent-voile px-2.5 py-0.5 font-semibold tracking-wide text-accent-fort uppercase",
                projection ? "text-sm" : "text-[0.7rem]",
              ].join(" ")}
            >
              {TITRE_THEME[courante.theme]}
            </span>
          ) : null}
          <span
            className={[
              "font-mono tabular-nums text-estompe",
              projection ? "text-base" : "text-xs",
            ].join(" ")}
          >
            {String(etape + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          id={`${base}-enonce`}
          className={[
            "mt-4 font-serif leading-tight text-encre",
            projection ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
          ].join(" ")}
        >
          {courante.question}
        </h3>

        <ul
          className={[
            "mt-6 grid gap-3",
            courante.options.length > 2 ? "sm:grid-cols-2" : "",
          ].join(" ")}
        >
          {courante.options.map((option, rang) => {
            const choisi = repondu && choix === rang;
            const attendu = corrigeVisible && rang === courante.bonne;
            const rate = corrigeVisible && choisi && rang !== courante.bonne;

            let habillage =
              "border-trait-fort bg-papier text-encre hover:border-accent hover:bg-accent-voile";
            if (attendu) habillage = "border-vert bg-vert-voile text-vert";
            else if (rate) habillage = "border-rouge bg-rouge-voile text-rouge";
            else if (corrigeVisible)
              habillage = "border-trait bg-voile text-estompe";
            else if (choisi) habillage = "border-accent bg-accent-voile text-accent-fort";

            return (
              <li key={rang}>
                <button
                  type="button"
                  onClick={() => repondre(rang)}
                  aria-pressed={choisi}
                  aria-disabled={repondu}
                  className={[
                    "flex w-full items-start gap-3 rounded-lg border text-left transition-colors duration-150",
                    projection ? "px-5 py-4 text-xl" : "px-4 py-3 text-base",
                    habillage,
                    choisi ? "font-semibold" : "font-medium",
                    repondu ? "cursor-default" : "cursor-pointer",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "shrink-0 font-mono leading-none",
                      projection ? "mt-1 text-2xl" : "mt-0.5 text-lg",
                    ].join(" ")}
                  >
                    {SYMBOLES[rang]}
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{option}</span>
                  {attendu ? <IconeJuste classe={projection ? "h-6 w-6" : "h-5 w-5"} /> : null}
                  {rate ? <IconeFausse classe={projection ? "h-6 w-6" : "h-5 w-5"} /> : null}
                </button>
              </li>
            );
          })}
        </ul>

        {corrigeVisible ? (
          <div
            role="status"
            className={[
              "mt-6 rounded-lg border p-4",
              choix === courante.bonne
                ? "border-vert-trait bg-vert-voile"
                : "border-rouge-trait bg-rouge-voile",
            ].join(" ")}
          >
            <p
              className={[
                "font-semibold",
                choix === courante.bonne ? "text-vert" : "text-rouge",
                projection ? "text-xl" : "text-base",
              ].join(" ")}
            >
              {choix === courante.bonne
                ? "Bonne réponse."
                : `Réponse inexacte — c’était « ${courante.options[courante.bonne]} ».`}
            </p>
            {courante.explication ? (
              <p
                className={[
                  "mt-1.5 leading-relaxed text-encre-clair",
                  projection ? "text-lg" : "text-sm",
                ].join(" ")}
              >
                {courante.explication}
              </p>
            ) : null}
            {courante.citation ? (
              <blockquote
                className={[
                  "mt-3 border-l-2 border-trait-fort pl-3 leading-relaxed text-encre-clair italic",
                  projection ? "text-base" : "text-sm",
                ].join(" ")}
              >
                « {courante.citation} »
              </blockquote>
            ) : null}
            <p className="mt-3">
              <Articles articles={courante.articles} gros={projection} />
            </p>
          </div>
        ) : null}

        {repondu && !corrigeVisible ? (
          <p
            role="status"
            className={[
              "mt-6 rounded-lg border border-trait bg-voile px-4 py-3 text-graphite",
              projection ? "text-lg" : "text-sm",
            ].join(" ")}
          >
            Réponse enregistrée. Le corrigé s’affiche à la fin du questionnaire.
          </p>
        ) : null}
      </section>

      <nav
        aria-label="Navigation dans le questionnaire"
        className="sans-impression flex flex-wrap items-center justify-between gap-3"
      >
        <button
          type="button"
          onClick={() => allerA(etape - 1)}
          disabled={etape === 0}
          className="inline-flex items-center gap-1.5 rounded-lg border border-trait bg-craie px-3 py-2 text-sm font-medium text-encre transition-colors hover:border-trait-fort disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Fleche sens="gauche" />
          Précédent
        </button>

        <span className="text-xs text-estompe">
          Clavier : A B C D pour répondre, flèches pour naviguer
        </span>

        {etape < total - 1 ? (
          <button
            type="button"
            onClick={() => allerA(etape + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-encre px-4 py-2 text-sm font-medium text-papier transition-colors hover:bg-encre-clair"
          >
            Suivant
            <Fleche sens="droite" />
          </button>
        ) : (
          <button
            type="button"
            onClick={terminer}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
          >
            Voir le corrigé
            <Fleche sens="droite" />
          </button>
        )}
      </nav>

      {projection ? null : (
        <p className="text-xs leading-relaxed text-estompe">
          Vos réponses restent dans ce navigateur : rien n’est transmis, aucun
          nom n’est demandé.
        </p>
      )}
    </div>
  );

  return projection ? (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-papier">
      <div className="mx-auto max-w-5xl px-6 py-10">{carte}</div>
    </div>
  ) : (
    carte
  );
}
