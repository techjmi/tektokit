/**
 * SocialButtons constants
 */

export const SOCIAL_BUTTON_SIZES = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-3.5 text-base',
};

export const SOCIAL_BUTTON_VARIANTS = {
  outline: 'border border-border bg-background hover:bg-muted/50',
  solid: 'bg-muted hover:bg-muted/80 border border-transparent',
  ghost: 'hover:bg-muted/50 border border-transparent',
};

export const SOCIAL_BUTTON_LAYOUTS = {
  grid: 'grid',
  horizontal: 'flex flex-wrap',
  vertical: 'flex flex-col',
};

export const SOCIAL_BUTTON_GRID_COLS = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
};

export const SOCIAL_ICON_SIZES = {
  sm: 18,
  md: 20,
  lg: 22,
};
