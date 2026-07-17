/**
 * Accordion Component
 * See ACCORDION_USAGE.md for usage
 */

'use client';

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { useAccordion } from '../../../hooks';
import AccordionItem from './components/AccordionItem';

const Accordion = ({
  children,
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  config,
  ...props
}) => {
  const {
    items = [],
    itemClassName = '',
  } = config || {};

  const [openItems, handleToggle] = useAccordion(defaultOpen, allowMultiple);

  // Composition Mode - when children provided directly
  if (children) {
    return (
      <div
        className={classNames('accordion border border-gray-200 rounded-lg overflow-hidden', className)}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Data-Driven Mode - when items provided via config
  return (
    <div
      className={classNames('accordion border border-gray-200 rounded-lg overflow-hidden', className)}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
          disabled={item.disabled}
          icon={item.icon}
          className={itemClassName}
          config={item.config}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
