/**
 * Custom hook to handle accordion state
 * Manages single or multiple open items
 * 
 * @param {Array|number} defaultOpen - Default open item(s)
 * @param {boolean} allowMultiple - Allow multiple items open
 * @returns {[Array, Function]} - [openItems, handleToggle]
 * 
 * @example
 * const [openItems, handleToggle] = useAccordion(0, false);
 * <AccordionItem isOpen={openItems.includes(0)} onToggle={() => handleToggle(0)} />
 */
import { useState, useCallback } from 'react';

export const useAccordion = (defaultOpen = [], allowMultiple = false) => {
  const [openItems, setOpenItems] = useState(
    Array.isArray(defaultOpen) ? defaultOpen : [defaultOpen].filter(Boolean)
  );

  const handleToggle = useCallback(
    (index) => {
      setOpenItems((prev) => {
        if (allowMultiple) {
          return prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index];
        } else {
          return prev.includes(index) ? [] : [index];
        }
      });
    },
    [allowMultiple]
  );

  return [openItems, handleToggle];
};
