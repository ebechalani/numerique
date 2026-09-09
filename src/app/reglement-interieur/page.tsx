/**
 * Accueil de la section « Règlement intérieur ».
 *
 * Trois portes : le texte, un questionnaire prêt à projeter, et le créateur
 * qui permet à chaque professeur d'en composer un pour sa classe.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { REFERENCE_REGLEMENT } from "@/content/reglement/reglement";
import { REFERENT } from "@/content/site";
import { BANQUE, MODELES, reglementDisponible, THEMES } from "@/lib/reglement";

export const metadata: Metadata = {
  title: "Règlement intérieur",
  description:
    "Le règlement intérieur du Lycée Montaigne, article par article, et de quoi en faire un QCM interactif à projeter en classe ou en réunion de parents.",
};

function Fleche({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 ${className}`}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const USAGES = [
  {
    numero: "1",
    titre: "L’heure de vie de classe de rentrée",
    texte:
      "Dix questions projetées, une par une, et la classe répond à main levée. Le corrigé renvoie à l’article : la règle n’est pas assénée, elle est lue.",
  },
  {
    numero: "2",
    titre: "La réunion de parents",
    texte:
      "Le questionnaire des vingt questions se projette tel quel. Les points qui font débat chaque année — téléphone, retards, absences — y passent tous.",
  },
  {
    numero: "3",
    titre: "Un rappel en cours d’année",
    texte:
      "Après un incident, composez trois questions sur l’article concerné et envoyez le lien. Cinq minutes, sans photocopie.",
  },
];

export default function PageReglementInterieur() {
  const disponible = reglementDisponible();

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
            Règlement intérieur
          </li>
        </ol>
      </nav>

      <header className="mt-5 max-w-3xl">
        <p className="text-sm text-accent">{REFERENCE_REGLEMENT.annee}</p>
        <h1 className="mt-2 font-serif text-4xl leading-tight text-encre sm:text-5xl">
          Règlement intérieur
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-graphite">
          Le texte du règlement du second degré, article par article — et de
          quoi en faire un questionnaire interactif, à projeter en classe ou en
          réunion de parents. Chaque question cite l’article qui la fonde.
        </p>
        <p className="mt-3 text-sm text-estompe">
          {REFERENCE_REGLEMENT.titre} · {REFERENCE_REGLEMENT.precision} ·{" "}
          {REFERENCE_REGLEMENT.etablissement}
        </p>
      </header>

      {/* Les trois portes */}
      <section aria-labelledby="titre-portes" className="mt-10 sm:mt-12">
        <h2 id="titre-portes" className="sr-only">
          Que voulez-vous faire ?
        </h2>

        <ul className="grid gap-5 md:grid-cols-3">
          <li>
            <Link
              href="/reglement-interieur/creer"
              className="group flex h-full flex-col rounded-lg border border-accent bg-accent-voile p-6 transition-colors hover:bg-accent hover:text-craie"
            >
              <span className="text-xs font-medium tracking-wide text-accent-fort uppercase group-hover:text-craie">
                Pour les professeurs
              </span>
              <span className="mt-2 font-serif text-2xl leading-tight text-encre group-hover:text-craie">
                Créer un QCM
              </span>
              <span className="mt-3 flex-1 text-sm leading-relaxed text-graphite group-hover:text-craie">
                Choisissez vos questions dans la banque, ajoutez les vôtres,
                réglez le moment du corrigé. Vous repartez avec un lien à
                projeter ou à envoyer.
              </span>
              <span className="mt-4 flex items-center gap-2 text-sm font-medium text-accent group-hover:text-craie">
                Composer mon questionnaire
                <Fleche className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>

          {MODELES.map((modele) => (
            <li key={modele.slug}>
              <Link
                href={`/reglement-interieur/quiz/${modele.slug}`}
                className="group flex h-full flex-col rounded-lg border border-trait bg-craie p-6 transition-colors hover:border-accent hover:bg-accent-voile"
              >
                <span className="text-xs font-medium tracking-wide text-estompe uppercase">
                  Questionnaire prêt
                </span>
                <span className="mt-2 font-serif text-2xl leading-tight text-encre">
                  {modele.titre}
                </span>
                <span className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
                  {modele.intro}
                </span>
                <span className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                  Lancer le questionnaire
                  <Fleche className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/reglement-interieur/reglement"
              className="group flex h-full flex-col rounded-lg border border-trait bg-craie p-6 transition-colors hover:border-accent hover:bg-accent-voile"
            >
              <span className="text-xs font-medium tracking-wide text-estompe uppercase">
                La source
              </span>
              <span className="mt-2 font-serif text-2xl leading-tight text-encre">
                Lire le règlement
              </span>
              <span className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
                Le texte complet, chapitre par chapitre, avec un lien direct
                vers chaque article. C’est lui que citent les corrigés.
              </span>
              <span className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                {disponible ? "Ouvrir le texte" : "Voir la section"}
                <Fleche className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Chiffres de la banque */}
      <section
        aria-label="La banque de questions"
        className="mt-10 rounded-lg border border-trait bg-voile p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <p className="text-sm text-graphite">
            <span className="font-serif text-2xl text-encre">
              {BANQUE.length}
            </span>{" "}
            questions prêtes
          </p>
          <p className="text-sm text-graphite">
            <span className="font-serif text-2xl text-encre">
              {THEMES.length}
            </span>{" "}
            thèmes, du téléphone aux sanctions
          </p>
          <p className="text-sm text-graphite">
            <span className="font-serif text-2xl text-encre">1</span> article
            cité pour chaque réponse
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-graphite">
          Chaque question porte la phrase du règlement qui la prouve : vous
          pouvez vérifier avant de projeter, et un élève qui se trompe remonte
          au texte plutôt qu’à votre parole.
        </p>
      </section>

      {/* Usages */}
      <section aria-labelledby="titre-usages" className="mt-12 sm:mt-16">
        <h2
          id="titre-usages"
          className="font-serif text-2xl text-encre sm:text-3xl"
        >
          Trois façons de s’en servir
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {USAGES.map((usage) => (
            <li
              key={usage.numero}
              className="rounded-lg border border-trait bg-craie p-5"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent text-sm tabular-nums text-accent"
              >
                {usage.numero}
              </span>
              <h3 className="mt-3 font-serif text-lg leading-snug text-encre">
                {usage.titre}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {usage.texte}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 rounded-lg border border-trait border-l-2 border-l-ambre bg-ambre-voile px-5 py-4">
        <p className="text-xs font-medium tracking-wide text-estompe uppercase">
          À savoir
        </p>
        <p className="mt-1.5 leading-relaxed text-encre-clair">
          Cette transcription est un confort de lecture et la source citée par
          les questionnaires. En cas de désaccord sur un point, le document
          signé par la famille fait foi. Une erreur repérée ?{" "}
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
