/**
 * Size system for the UI library
 * Consistent sizing across all components
 */

export const SIZES = {
  xs: {
    fontSize: "var(--ui-text-xs, 0.75rem)",      // 12px
    padding: "var(--ui-spacing-xs, 0.5rem)",      // 8px
    height: "var(--ui-height-xs, 1.5rem)",        // 24px
    gap: "var(--ui-gap-xs, 0.25rem)",             // 4px
  },
  sm: {
    fontSize: "var(--ui-text-sm, 0.875rem)",      // 14px
    padding: "var(--ui-spacing-sm, 0.75rem)",     // 12px
    height: "var(--ui-height-sm, 2rem)",          // 32px
    gap: "var(--ui-gap-sm, 0.375rem)",            // 6px
  },
  md: {
    fontSize: "var(--ui-text-md, 1rem)",          // 16px
    padding: "var(--ui-spacing-md, 1rem)",        // 16px
    height: "var(--ui-height-md, 2.5rem)",        // 40px
    gap: "var(--ui-gap-md, 0.5rem)",              // 8px
  },
  lg: {
    fontSize: "var(--ui-text-lg, 1.125rem)",      // 18px
    padding: "var(--ui-spacing-lg, 1.25rem)",     // 20px
    height: "var(--ui-height-lg, 3rem)",          // 48px
    gap: "var(--ui-gap-lg, 0.75rem)",             // 12px
  },
  xl: {
    fontSize: "var(--ui-text-xl, 1.25rem)",       // 20px
    padding: "var(--ui-spacing-xl, 1.5rem)",      // 24px
    height: "var(--ui-height-xl, 3.5rem)",        // 56px
    gap: "var(--ui-gap-xl, 1rem)",                // 16px
  },
};

export const SPACING = {
  0: "0",
  1: "var(--ui-space-1, 0.25rem)",    // 4px
  2: "var(--ui-space-2, 0.5rem)",     // 8px
  3: "var(--ui-space-3, 0.75rem)",    // 12px
  4: "var(--ui-space-4, 1rem)",       // 16px
  5: "var(--ui-space-5, 1.25rem)",    // 20px
  6: "var(--ui-space-6, 1.5rem)",     // 24px
  8: "var(--ui-space-8, 2rem)",       // 32px
  10: "var(--ui-space-10, 2.5rem)",   // 40px
  12: "var(--ui-space-12, 3rem)",     // 48px
  16: "var(--ui-space-16, 4rem)",     // 64px
};

export const RADIUS = {
  none: "0",
  xs: "var(--ui-radius-xs, 0.125rem)",    // 2px
  sm: "var(--ui-radius-sm, 0.25rem)",     // 4px
  md: "var(--ui-radius-md, 0.375rem)",    // 6px
  lg: "var(--ui-radius-lg, 0.5rem)",      // 8px
  xl: "var(--ui-radius-xl, 0.75rem)",     // 12px
  "2xl": "var(--ui-radius-2xl, 1rem)",    // 16px
  full: "var(--ui-radius-full, 9999px)",
};

export const SHADOWS = {
  none: "none",
  sm: "var(--ui-shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05))",
  md: "var(--ui-shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))",
  lg: "var(--ui-shadow-lg, 0 10px 15px -3px rgb(0 0 0 / 0.1))",
  xl: "var(--ui-shadow-xl, 0 20px 25px -5px rgb(0 0 0 / 0.1))",
};
