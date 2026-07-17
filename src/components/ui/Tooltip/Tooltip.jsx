/**
 * Tooltip Component
 * See TOOLTIP_USAGE.md for detailed usage examples
 */

import React, { useState } from'react';
import { classNames } from'../../../utils/base/classNames';
import { TOOLTIP_POSITION_CLASSES, TOOLTIP_ARROW_CLASSES } from'./tooltipConstants';

const Tooltip = ({
  content,
  position ='top',
  delay = 200,
  className ='',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
  };

  if (!content) return children;

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          className={classNames(
           'absolute z-[1000] px-3 py-1.5 /90  text-xs rounded whitespace-nowrap pointer-events-none',
           'animate-[fadeIn_0.2s_ease-in-out]',
            TOOLTIP_POSITION_CLASSES[position],
            className
          )}
        >
          {content}
          {/* Arrow */}
          <div
            className={classNames(
             'absolute w-0 h-0 border-[5px]',
              TOOLTIP_ARROW_CLASSES[position]
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
