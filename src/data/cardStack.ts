export type StackPose = {
  topFrac: number;
  leftFrac: number;
  width: number;
  rotate: number;
};

/**
 * 4-card stack. In the hero, all cards sit as a tight overlapping pile
 * in the right half of the viewport — vertically centered with the hero
 * text, with subtle rotation offsets creating the fanned-deck look.
 */
export const STACK_CONFIG: Record<string, { start: StackPose; peak: StackPose }> = {
  // Back card (rendered first = lowest z) — rotated furthest left
  "scrollers-to-readers": {
    start: { topFrac: 0.22, leftFrac: 0.48, width: 400, rotate: -12 },
    peak: { topFrac: 0.08, leftFrac: 0.38, width: 540, rotate: -6 },
  },
  // Second from back — slight left lean
  "pagarbook-order-management": {
    start: { topFrac: 0.24, leftFrac: 0.50, width: 400, rotate: -5 },
    peak: { topFrac: 0.16, leftFrac: 0.44, width: 540, rotate: -2 },
  },
  // Third — slight right lean
  "prime-membership": {
    start: { topFrac: 0.26, leftFrac: 0.52, width: 400, rotate: 3 },
    peak: { topFrac: 0.24, leftFrac: 0.48, width: 540, rotate: 2 },
  },
  // Top card (rendered last = highest z) — rotated furthest right
  "credit-card-journey": {
    start: { topFrac: 0.28, leftFrac: 0.54, width: 400, rotate: 9 },
    peak: { topFrac: 0.32, leftFrac: 0.52, width: 540, rotate: 5 },
  },
};
