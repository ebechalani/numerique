/**
 * Espaces insécables de la typographie française.
 *
 * Le contenu est saisi avec des espaces ordinaires autour des guillemets et
 * devant « : ; ? ! ». À l’écran, le navigateur peut alors couper la ligne
 * juste après « ou juste avant : — un signe se retrouve seul en début ou en
 * fin de ligne. Remplacer ces espaces par des insécables à la lecture du
 * contenu règle le problème sans toucher aux fichiers de contenu.
 */

const REGLES: ReadonlyArray<readonly [RegExp, string]> = [
  [/« /g, "« "],
  [/ »/g, " »"],
  [/ ([:;?!])/g, " $1"],
];

export function insecables(texte: string): string {
  return REGLES.reduce(
    (acc, [motif, remplacement]) => acc.replace(motif, remplacement),
    texte,
  );
}

/**
 * Applique les insécables à toutes les chaînes d’une structure de contenu,
 * en profondeur. Les identifiants, slugs et adresses ne contiennent ni
 * guillemets ni ponctuation précédée d’une espace : ils ne changent pas.
 */
export function typographier<T>(valeur: T): T {
  if (typeof valeur === "string") return insecables(valeur) as T;
  if (Array.isArray(valeur)) return valeur.map(typographier) as T;
  if (valeur !== null && typeof valeur === "object") {
    return Object.fromEntries(
      Object.entries(valeur).map(([cle, v]) => [cle, typographier(v)]),
    ) as T;
  }
  return valeur;
}
