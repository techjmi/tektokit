/**
 * SocialLinks - Social media links component
 * Displays social media icons with links
 */

'use client';

import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';
import { SOCIAL_PLATFORMS, SOCIAL_LINK_SIZES, SOCIAL_LINK_VARIANTS } from'./socialLinksConstant';

const SocialLinks = ({
  layout = 'horizontal',
  size = 'md',
  variant = 'outlined',
  showLabels = false,
  className = '',
  config,
}) => {
  const { links = [] } = config || {};
  const layoutClass = layout ==='vertical' ?'flex-col items-start' :'flex-row items-center';

  return (
    <div className={classNames('flex gap-3', layoutClass, className)}>
      {links.map((link, index) => {
        if (!link || !link.url) return null;

        const platform = SOCIAL_PLATFORMS[link.platform];
        if (!platform && !link.icon) return null;

        const iconName = link.icon || platform?.icon;
        const label = link.label || platform?.label || link.platform;

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            variant={variant}
            rel="noopener noreferrer"
            aria-label={label}
            className={classNames(
             'inline-flex items-center justify-center gap-2 rounded-full',
              SOCIAL_LINK_SIZES[size]?.container || SOCIAL_LINK_SIZES.md.container,
              SOCIAL_LINK_VARIANTS[variant] || SOCIAL_LINK_VARIANTS.default,
              className
            )}
          >
            <Icon name={iconName} size={SOCIAL_LINK_SIZES[size]?.icon || SOCIAL_LINK_SIZES.md.icon} />
            {showLabels && <span className="text-sm font-medium">{label}</span>}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
