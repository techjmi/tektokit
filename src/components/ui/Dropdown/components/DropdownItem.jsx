/**
 * DropdownItem - Individual menu item
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import { Icon } from'../../../../icons';

const DropdownItem = ({
  children,
  onClick,
  icon,
  disabled = false,
  danger = false,
  className ="",
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
       'flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-colors',
        disabled &&'opacity-50 cursor-not-allowed',
        !disabled && !danger &&'hover:',
        !disabled && danger &&'text-red-600 hover:bg-red-50',
        className
      )}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {icon && (
        typeof icon ==='string' ? (
          <Icon name={icon} size={16} />
        ) : (
          icon
        )
      )}
      {children}
    </div>
  );
};

export default DropdownItem;
