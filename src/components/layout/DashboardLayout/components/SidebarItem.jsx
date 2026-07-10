/**
 * SidebarItem Component
 * Individual navigation item in sidebar
 */

import React from 'react';
import { classNames } from '../../../../utils/base/classNames';
import { Icon } from '../../../../icons';

const SidebarItem = ({
  label,
  icon,
  href,
  isActive = false,
  onClick,
  children,
  showIcon = false,
  ...props
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classNames(
        'w-full flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg',
        'transition-colors duration-200',
        isActive
          ? 'bg-gray-200 text-gray-900'
          : 'hover:text-primary hover:bg-muted',
        !href && 'cursor-pointer'
      )}
      {...props}
    >
      {showIcon && icon && <Icon name={icon} size={18} />}
      <span className="flex-1 text-left">{label}</span>
      {children}
    </Component>
  );
};

export default SidebarItem;
