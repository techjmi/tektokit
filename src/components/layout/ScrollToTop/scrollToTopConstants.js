/**
 * ScrollToTop Component Constants
 */

export const SCROLL_TO_TOP_POSITIONS = {
 'bottom-right':'bottom-6 right-6',
 'bottom-left':'bottom-6 left-6',
 'top-right':'top-6 right-6',
 'top-left':'top-6 left-6',
};

export const SCROLL_TO_TOP_SIZES = {
  sm: {
    button:'w-10 h-10',
    icon: 18,
    progress:'w-12 h-12',
    stroke: 3,
  },
  md: {
    button:'w-12 h-12',
    icon: 20,
    progress:'w-14 h-14',
    stroke: 3,
  },
  lg: {
    button:'w-14 h-14',
    icon: 24,
    progress:'w-16 h-16',
    stroke: 4,
  },
};

export const SCROLL_TO_TOP_VARIANTS = {
  solid:' dark:  dark: hover: dark:hover:',
  outline:' dark: border-2 border-gray-900 dark:  dark: hover: dark:hover:',
  ghost:'/90 dark:/90 backdrop-blur-sm  dark: hover: dark:hover:',
  primary:'bg-blue-600  hover:bg-blue-700',
};
