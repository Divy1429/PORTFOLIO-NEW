/**
 * Poses for the project card stack that lives beside the hero text.
 *
 * `start` is the small pose next to the hero copy (viewport-fraction based,
 * so it scales with window size). `peak` is the enlarged mid-scroll pose —
 * the stack visually dominates the screen just before it settles into the
 * grid. The final ("end") pose isn't listed here: it's measured live from
 * the actual grid slot in WorkSection (see FlyingCard.tsx).
 */
export type StackPose = {
  topFrac: number;
  leftFrac: number;
  width: number;
  rotate: number;
};

export const STACK_CONFIG: Record<string, { start: StackPose; peak: StackPose }> = {
  "scrollers-to-readers": {
    start: { topFrac: 0.2, leftFrac: 0.6, width: 220, rotate: -8 },
    // Peak stays right of the ~560-640px bio text column at any reasonable
    // viewport width so the enlarged cards never cover the hero copy.
    peak: { topFrac: 0.1, leftFrac: 0.42, width: 520, rotate: -4 },
  },
  "pagarbook-order-management": {
    start: { topFrac: 0.4, leftFrac: 0.68, width: 220, rotate: 7 },
    peak: { topFrac: 0.36, leftFrac: 0.53, width: 520, rotate: 4 },
  },
};
