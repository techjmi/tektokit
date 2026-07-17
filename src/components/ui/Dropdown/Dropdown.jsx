/**
 * Dropdown Component
 * See DROPDOWN_USAGE.md for detailed usage examples
 */

import React, { useEffect } from 'react';
import { classNames } from '../../../utils/base/classNames';
import { useClickOutside } from '../../../hooks';
import { addWindowListener } from '../../../utils/browser/window';
import { KEYS } from '../../../utils/browser/keyboard';
import { POSITION_CLASSES, SIZE_CLASSES } from './dropdownConstants';

const Dropdown = ({
  isOpen = false,
  onClose,
  children,
  position = 'bottom-right',
  size = 'md',
  className = '',
  closeOnClick = true,
  closeOnEsc = true,
  ...props
}) => {
  const dropdownRef = useClickOutside(() => {
    if (isOpen) {
      onClose?.();
    }
  });

  // Close on ESC key
  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const cleanup = addWindowListener('keydown', (e) => {
      if (e.key === KEYS.ESCAPE) {
        onClose?.();
      }
    });

    return cleanup;
  }, [isOpen, closeOnEsc, onClose]);

  // Close on item click
  const handleClick = (e) => {
    if (closeOnClick && e.target.closest('[role="menuitem"]')) {
      onClose?.();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      onClick={handleClick}
      className={classNames(
        'absolute z-50 bg-white text-black border border-gray-200 rounded-lg shadow-lg py-1',
        'animate-[fadeIn_0.15s_ease-out]',
        POSITION_CLASSES[position] || POSITION_CLASSES['bottom-right'],
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        className
      )}
      role="menu"
      {...props}
    >
      {children}
    </div>
  );
};

export default Dropdown;
