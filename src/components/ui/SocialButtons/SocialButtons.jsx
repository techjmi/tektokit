/**
 * SocialButtons Component
 * Reusable social platform buttons with optional divider
 * Can be used for authentication, sharing, social links, or any social platform actions
 */

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Divider } from '../Divider';
import { Icon } from '../../../icons';
import {
  SOCIAL_BUTTON_SIZES,
  SOCIAL_BUTTON_VARIANTS,
  SOCIAL_BUTTON_LAYOUTS,
  SOCIAL_BUTTON_GRID_COLS,
  SOCIAL_ICON_SIZES,
} from './socialButtonsConstants';

const SocialButtons = ({
  providers = [],
  onProviderClick,
  dividerText,
  showDivider = false,
  variant = 'outline', // 'outline' | 'solid' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  layout = 'grid', // 'grid' | 'horizontal' | 'vertical'
  columns = 'auto', // 'auto' | 1 | 2 | 3 | 4
  className = '',
}) => {
  if (!providers || providers.length === 0) {
    return null;
  }

  // Determine grid columns
  const getGridCols = () => {
    if (layout !== 'grid') return '';
    
    if (columns === 'auto') {
      // Automatic: 1 column on mobile, 2 on desktop for multiple items
      return providers.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2';
    }
    
    return SOCIAL_BUTTON_GRID_COLS[columns] || 'grid-cols-1 sm:grid-cols-2';
  };

  // Layout class
  const layoutClass = layout === 'grid' 
    ? `${SOCIAL_BUTTON_LAYOUTS.grid} ${getGridCols()} gap-3`
    : `${SOCIAL_BUTTON_LAYOUTS[layout]} gap-3`;

  return (
    <>
      {showDivider && dividerText && (
        <div className="my-8">
          <Divider>{dividerText}</Divider>
        </div>
      )}

      <div className={classNames(layoutClass, className)}>
        {providers.map((provider) => (
          <button
            key={provider}
            onClick={() => onProviderClick?.(provider)}
            type="button"
            className={classNames(
              'flex items-center justify-center gap-2 rounded-lg transition-colors',
              SOCIAL_BUTTON_SIZES[size],
              SOCIAL_BUTTON_VARIANTS[variant]
            )}
          >
            <Icon name={provider} size={SOCIAL_ICON_SIZES[size]} />
            <span className="font-medium capitalize">{provider}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default SocialButtons;
