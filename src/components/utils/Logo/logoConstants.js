/**
 * Logo Component Constants
 */

export const LOGO_SIZES = {
  sm: {
    image:'h-6 w-auto',
    name:'text-base md:text-lg',
    tagline:'text-xs',
  },
  md: {
    image:'h-8 w-auto md:h-10',
    name:'text-lg md:text-xl',
    tagline:'text-xs md:text-sm',
  },
  lg: {
    image:'h-10 w-auto md:h-12 lg:h-14',
    name:'text-xl md:text-2xl lg:text-3xl',
    tagline:'text-sm md:text-base',
  },
};

export const LOGO_LAYOUTS = {
  horizontal:'flex-row items-center gap-2 md:gap-3',
  vertical:'flex-col items-center gap-1 md:gap-2 text-center',
};
