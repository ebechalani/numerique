import type { SectionDeroule } from "@/content/types";

import { ficheMemo } from "./fiche-memo";
import { carteDesModules } from "./carte-des-modules";
import { observables } from "./observables";
import { questionsInclusia } from "./questions";
import { glossaire } from "./glossaire";

/**
 * Les ressources du tutoriel Inclus’IA, indexées par slug. Chacune est une
 * suite de sections (un titre, puis des blocs), aplatie au rendu.
 */
export const ressourcesInclusia: Record<string, SectionDeroule[]> = {
  "fiche-memo": ficheMemo,
  "carte-des-modules": carteDesModules,
  "observables": observables,
  "questions": questionsInclusia,
  "glossaire": glossaire,
};
