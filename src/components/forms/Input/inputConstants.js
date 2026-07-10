/**
 * Input component constants
 */

export const INPUT_SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-5 py-3 text-lg',
};

export const INPUT_VARIANTS = {
  outline: 'border border-border bg-background',
  filled: 'border-0 bg-muted',
  flushed: 'border-0 border-b-2 border-border rounded-none px-0',
};

export const INPUT_STATES = {
  default: 'focus:outline-none focus:ring-2 focus:ring-primary',
  error: 'border-red-500 focus:ring-red-500',
  success: 'border-green-500 focus:ring-green-500',
  disabled: 'opacity-60 cursor-not-allowed bg-muted',
};

export const INPUT_RADIUS = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};
