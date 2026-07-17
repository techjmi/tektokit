/**
 * AccordionItem Component
 * Individual accordion item with title and collapsible content
 */

import React from 'react';
import { classNames } from '../../../../utils/base/classNames';
import { Icon } from '../../../../icons';

const AccordionItem = ({
  title,
  children,
  isOpen,
  onToggle,
  disabled = false,
  icon = 'chevronDown',
  className = '',
  config,
  ...props
}) => {
  const {
    titleClassName = '',
    contentClassName = '',
    iconSize = 20,
  } = config || {};

  return (
    <div className={classNames('border-b border-gray-200', className)} {...props}>
      <button
        type="button"
        onClick={onToggle}
        disabled={disabled}
        className={classNames(
          'w-full flex items-center justify-between p-4 text-left',
          'hover:text-primary hover:bg-muted transition-colors',
          disabled && 'opacity-50 cursor-not-allowed',
          isOpen && ''
        )}
        aria-expanded={isOpen}
      >
        <span className={classNames('font-medium', titleClassName)}>
          {title}
        </span>
        <Icon
          name={icon}
          size={iconSize}
          className={classNames(
            'text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      
      <div
        className={classNames(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className={classNames('p-4 pt-0', contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
