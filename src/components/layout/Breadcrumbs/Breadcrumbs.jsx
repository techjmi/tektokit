/**
 * Breadcrumbs Component
 * See BREADCRUMBS_USAGE.md for detailed usage examples
 */

import React from'react';
import { classNames } from'../../../utils/base/classNames';
import { Icon } from'../../../icons';
import BreadcrumbItem from'./components/BreadcrumbItem';

const Breadcrumbs = ({
  children,
  separator,
  className = '',
  config,
  ...props
}) => {
  const { items } = config || {};
  // Default separator
  const defaultSeparator = (
    <span className="mx-2  select-none" aria-hidden="true">
      <Icon name="chevronRight" size={14} />
    </span>
  );

  const separatorElement = separator ? (
    <span className="mx-2  select-none" aria-hidden="true">
      {separator}
    </span>
  ) : defaultSeparator;

  // Render from items prop
  if (items && Array.isArray(items)) {
    return (
      <nav
        aria-label="Breadcrumb"
        className={classNames('w-full py-2', className)}
        {...props}
      >
        <ol className="flex flex-wrap items-center gap-0">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <BreadcrumbItem
                key={item.href || index}
                label={item.label}
                href={isLast ? undefined : item.href}
                icon={item.icon}
                isLast={isLast}
                separator={separatorElement}
              />
            );
          })}
        </ol>
      </nav>
    );
  }

  // Render from children (composition mode)
  if (children) {
    const childArray = React.Children.toArray(children);
    
    return (
      <nav
        aria-label="Breadcrumb"
        className={classNames('w-full py-2', className)}
        {...props}
      >
        <ol className="flex flex-wrap items-center gap-0">
          {React.Children.map(childArray, (child, index) => {
            if (!React.isValidElement(child)) return null;
            
            const isLast = index === childArray.length - 1;
            return React.cloneElement(child, {
              isLast,
              separator: !isLast ? separatorElement : null,
            });
          })}
        </ol>
      </nav>
    );
  }

  return null;
};

export default Breadcrumbs;
