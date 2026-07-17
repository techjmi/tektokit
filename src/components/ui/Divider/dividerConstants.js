/**
 * Divider Constants
 */

export const DIVIDER_ORIENTATION = {
  horizontal:'horizontal',
  vertical:'vertical',
};

export const DIVIDER_SPACING = {
  none:'none',
  xs:'xs',
  sm:'sm',
  md:'md',
  lg:'lg',
  xl:'xl',
};

const BASE_STYLES ='border-gray-300';

const ORIENTATION_STYLES = {
  horizontal:'border-t w-full',
  vertical:'border-l h-full',
};

const SPACING_STYLES = {
  horizontal: {
    none:'',
    xs:'my-1',
    sm:'my-2',
    md:'my-3',
    lg:'my-4',
    xl:'my-6',
  },
  vertical: {
    none:'',
    xs:'mx-1',
    sm:'mx-2',
    md:'mx-3',
    lg:'mx-4',
    xl:'mx-6',
  },
};

export const getDividerClass = ({ orientation ='horizontal', spacing ='md' }) => {
  const orientationClass = ORIENTATION_STYLES[orientation] || ORIENTATION_STYLES.horizontal;
  const spacingClass = SPACING_STYLES[orientation]?.[spacing] || SPACING_STYLES.horizontal.md;
  
  return `${BASE_STYLES} ${orientationClass} ${spacingClass}`;
};
