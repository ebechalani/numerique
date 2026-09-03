/**
 * Pied de page du site : l’établissement, le référent numérique et le rappel
 * de la règle non négociable de la charte.
 * Composant serveur — aucun état, aucune interactivité.
 */
export default function PiedDePage() {
  return (
    <footer className="sans-impression mt-16 border-t border-trait bg-voile">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 md:gap-10">
        <section>
          <h2 className="font-serif text-sm text-encre">L’établissement</h2>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Lycée Montaigne — Beit Chabab
            <span aria-hidden="true" className="mx-1.5 text-trait-fort">
              ·
            </span>
            Liban
          </p>
        </section>

        <section>
          <h2 className="font-serif text-sm text-encre">Référent numérique</h2>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Eddy Bachaalany, référent numérique
            <br />
            <a
              href="mailto:eddy.bachaalany@lycee-montaigne.edu.lb"
              className="break-words text-accent underline decoration-trait-fort underline-offset-2 transition-colors hover:text-accent-fort"
            >
              eddy.bachaalany@lycee-montaigne.edu.lb
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-sm text-encre">
            La règle non négociable
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-graphite">
            Aucune donnée personnelle d’élève dans un outil d’IA, quel que soit
            le compte.
          </p>
        </section>
      </div>
    </footer>
  );
}
