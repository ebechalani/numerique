/**
 * Le règlement intérieur, article par article.
 *
 * Composant serveur : rien d'interactif, tout est lisible sans JavaScript et
 * s'imprime correctement. Chaque article porte une ancre stable, qui sert de
 * cible aux corrigés des questionnaires.
 */

import type {
  ArticleReglement,
  BlocReglement,
  ChapitreReglement,
} from "@/content/reglement/types";
import { ancresDesArticles } from "@/lib/reglement";

function Bloc({ bloc }: { bloc: BlocReglement }) {
  if (bloc.type === "paragraphe") {
    return (
      <p className="max-w-[72ch] leading-relaxed text-encre-clair">
        {bloc.texte}
      </p>
    );
  }

  if (bloc.type === "liste") {
    return (
      <div className="max-w-[72ch]">
        {bloc.texte ? (
          <p className="leading-relaxed text-encre-clair">{bloc.texte}</p>
        ) : null}
        <ul className={bloc.texte ? "mt-2 space-y-1.5" : "space-y-1.5"}>
          {bloc.items.map((item, rang) => (
            <li key={rang} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-trait-fort"
              />
              <span className="leading-relaxed text-encre-clair">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[--radius-carte] border border-trait">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-voile">
          <tr>
            {bloc.entetes.map((entete, rang) => (
              <th
                key={rang}
                scope="col"
                className="border-b border-trait px-4 py-2.5 font-semibold whitespace-nowrap text-encre"
              >
                {entete}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-trait">
          {bloc.lignes.map((ligne, rang) => (
            <tr key={rang} className="odd:bg-craie even:bg-papier">
              {ligne.map((cellule, colonne) => (
                <td
                  key={colonne}
                  className={[
                    "px-4 py-2.5 align-top",
                    colonne === 0
                      ? "font-medium text-encre"
                      : "text-encre-clair tabular-nums",
                  ].join(" ")}
                >
                  {cellule}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Article({
  article,
  ancre,
  titreRepete = false,
}: {
  article: ArticleReglement;
  ancre: string;
  /** Le titre reprend celui du chapitre — inutile de l'écrire deux fois. */
  titreRepete?: boolean;
}) {
  return (
    <article id={ancre} className="scroll-mt-24">
      {titreRepete ? null : (
        <h3 className="flex flex-wrap items-baseline gap-x-3 font-serif text-xl leading-snug text-encre">
          {article.numero ? (
            <span className="font-mono text-sm text-accent tabular-nums">
              {article.numero}
            </span>
          ) : null}
          <span>{article.titre}</span>
        </h3>
      )}
      <div className={titreRepete ? "space-y-3" : "mt-3 space-y-3"}>
        {article.blocs.map((bloc, rang) => (
          <Bloc key={rang} bloc={bloc} />
        ))}
      </div>
    </article>
  );
}

export function SommaireReglement({
  chapitres,
}: {
  chapitres: ChapitreReglement[];
}) {
  const ancres = ancresDesArticles(chapitres);
  return (
    <nav
      aria-label="Sommaire du règlement"
      className="sans-impression lg:sticky lg:top-20 lg:max-h-[calc(100vh_-_6rem)] lg:overflow-y-auto lg:rounded-lg lg:border lg:border-trait lg:bg-craie lg:p-4"
    >
      <p className="text-xs font-medium tracking-wide text-estompe uppercase">
        Sommaire
      </p>
      <ol className="mt-2 space-y-3">
        {chapitres.map((chapitre, rangChapitre) => (
          <li key={chapitre.numero}>
            <a
              href={`#chapitre-${chapitre.numero}`}
              className="block text-sm font-medium leading-snug text-encre transition-colors hover:text-accent"
            >
              {chapitre.titre}
            </a>
            <ul className="mt-1 space-y-0.5">
              {chapitre.articles.map((article, rang) => (
                <li key={ancres[rangChapitre][rang]}>
                  <a
                    href={`#${ancres[rangChapitre][rang]}`}
                    className="flex gap-2 py-0.5 text-xs text-graphite transition-colors hover:text-accent"
                  >
                    <span className="w-9 shrink-0 font-mono tabular-nums text-estompe">
                      {article.numero}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">
                      {article.titre}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function TexteReglement({
  chapitres,
}: {
  chapitres: ChapitreReglement[];
}) {
  const ancres = ancresDesArticles(chapitres);
  return (
    <div className="space-y-12">
      {chapitres.map((chapitre, rangChapitre) => (
        <section
          key={chapitre.numero}
          id={`chapitre-${chapitre.numero}`}
          aria-labelledby={`titre-chapitre-${chapitre.numero}`}
          className="scroll-mt-24"
        >
          <h2
            id={`titre-chapitre-${chapitre.numero}`}
            className="border-b border-trait pb-2 font-serif text-2xl font-semibold tracking-tight text-encre sm:text-[1.75rem]"
          >
            {chapitre.titre}
          </h2>
          <div className="mt-6 space-y-8">
            {chapitre.articles.map((article, rang) => (
              <Article
                key={ancres[rangChapitre][rang]}
                article={article}
                ancre={ancres[rangChapitre][rang]}
                titreRepete={
                  chapitre.articles.length === 1 &&
                  article.titre === chapitre.titre
                }
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
