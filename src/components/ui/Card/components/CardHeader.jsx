/**
 * CardHeader - Title, subtitle, and optional badge
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Badge from'../../Badge/Badge';

const CardHeader = ({
  title,
  subtitle,
  badge,
  titleClassName ='',
  subtitleClassName ='',
  className ='',
  ...props
}) => {
  return (
    <div className={classNames('card-header', className)} {...props}>
      {subtitle && (
        <p className={classNames('text-sm mb-1 opacity-70', subtitleClassName)}>
          {subtitle}
        </p>
      )}

      <div className="flex items-start justify-between gap-2">
        <h3 className={classNames('text-lg font-semibold flex-1 line-clamp-2', titleClassName)}>
          {title}
        </h3>

        {badge && (
          <Badge
            color={typeof badge ==='object' ? badge.color :'neutral'}
            size={typeof badge ==='object' ? badge.size :'sm'}
            radius="md"
          >
            {typeof badge ==='string' ? badge : badge.label}
          </Badge>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
