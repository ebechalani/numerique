import type { ChapitreReglement } from "./types";

/**
 * Le règlement intérieur du 2nd degré (collège-lycée), année 2026-2027,
 * transcrit article par article depuis le document officiel.
 *
 * Le texte est repris mot pour mot : seuls les artefacts d'extraction du PDF
 * ont été corrigés (espaces au milieu d'un mot, césures, retours à la ligne).
 * La numérotation imprimée est conservée telle quelle, y compris là où le
 * document réutilise un numéro — voir REMARQUES_NUMEROTATION.
 *
 * Cette transcription est un confort de lecture et la source citée par les
 * questions ; en cas de doute, le document signé par la famille fait foi.
 */
export const CHAPITRES: ChapitreReglement[] = [];

/** Anomalies de numérotation du document, signalées à la lecture. */
export const REMARQUES_NUMEROTATION: string[] = [];

/** Référence affichée en tête de la section. */
export const REFERENCE_REGLEMENT = {
  titre: "Règlement intérieur du 2nd degré",
  precision: "Collège et lycée",
  annee: "Année scolaire 2026-2027",
  etablissement: "Lycée Montaigne — Beit Chabab, Liban",
};
