/**
 * Lecteur d'un questionnaire composé par un enseignant.
 *
 * Tout le questionnaire tient dans le paramètre « c » de l'adresse : rien
 * n'est lu ni écrit côté serveur, il n'y a donc aucune donnée à conserver.
 * Le décodage est fait ici pour que la première page rendue contienne déjà
 * les questions, y compris sans JavaScript.
 */

import type { Metadata } from "next";
import Link from "next/link";

import QuizInteractif from "@/components/reglement/QuizInteractif";
import { cleQuiz, decoderQuiz, MODELES, questionsDuQuiz } from "@/lib/reglement";

export const metadata: Metadata = {
  title: "Questionnaire sur le règlement intérieur",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function FilAriane() {
  return (
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
          Questionnaire
        </li>
      </ol>
    </nav>
  );
}

export default async function PageQuizCompose({ searchParams }: Props) {
  const parametres = await searchParams;
  const brut = parametres.c;
  const charge = typeof brut === "string" ? brut : null;
  const quiz = charge ? decoderQuiz(charge) : null;
  const questions = quiz ? questionsDuQuiz(quiz) : [];

  if (!quiz || questions.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <FilAriane />
        <div className="mt-6 rounded-lg border border-trait bg-craie p-6 sm:p-8">
          <h1 className="font-serif text-2xl leading-tight text-encre">
            {charge
              ? "Ce lien de questionnaire n’est pas lisible"
              : "Aucun questionnaire dans ce lien"}
          </h1>
          <p className="mt-3 leading-relaxed text-graphite">
            {charge
              ? "Le lien a probablement été coupé par une messagerie : les adresses de questionnaire sont longues, et certaines applications les tronquent. Demandez qu’on vous le renvoie, en le collant entre crochets ou dans un document."
              : "Cette page affiche un questionnaire composé par un professeur. Vous pouvez en créer un, ou lancer l’un des questionnaires prêts."}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/reglement-interieur/creer"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-craie transition-colors hover:bg-accent-fort"
            >
              Créer un questionnaire
            </Link>
            {MODELES.map((modele) => (
              <Link
                key={modele.slug}
                href={`/reglement-interieur/quiz/${modele.slug}`}
                className="inline-flex items-center rounded-lg border border-trait bg-craie px-4 py-2 text-sm font-medium text-encre transition-colors hover:border-accent hover:text-accent"
              >
                {modele.titre}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <FilAriane />
      <div className="mt-6">
        <QuizInteractif
          titre={quiz.t ?? "Questionnaire sur le règlement intérieur"}
          sousTitre={`${questions.length} question${questions.length > 1 ? "s" : ""}`}
          questions={questions}
          correction={quiz.m ?? "fin"}
          cle={cleQuiz(charge ?? "")}
        />
      </div>
    </div>
  );
}
