/**
 * EmptyState - Generic empty/error state component
 * See EMPTYSTATE_USAGE.md for detailed usage examples
 */

import React from'react';
import { classNames } from'../../../utils/base/classNames';
import { Icon } from'../../../icons';
import { SIZE_CLASSES } from'./emptyStateConstants';

const EmptyState = ({
  size = 'md',
  className = '',
  config,
  ...props
}) => {
  const {
    icon,
    customIcon,
    title,
    heading,
    description,
    action,
  } = config || {};

  const sizes = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div
      className={classNames(
       'flex flex-col items-center justify-center text-center',
        sizes.container,
        className
      )}
      {...props}
    >
      {/* Large 404-style title */}
      {title && (
        <h1 className={classNames(
         'font-bold  mb-2',
          sizes.title
        )}>
          {title}
        </h1>
      )}

      {/* Icon Container */}
      {(icon || customIcon) && (
        <div className={classNames(
         'inline-flex items-center justify-center rounded-full',
          sizes.iconWrapper
        )}>
          {customIcon || (
            <Icon name={icon} size={sizes.iconSize} className="" />
          )}
        </div>
      )}

      {/* Heading */}
      {heading && (
        <h2 className={classNames(
         'font-semibold  mb-2',
          sizes.heading
        )}>
          {heading}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className={classNames(
         ' max-w-md mb-6',
          sizes.description
        )}>
          {description}
        </p>
      )}

      {/* Action Button/Element */}
      {action && (
        <div className="flex flex-wrap gap-3 justify-center">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
