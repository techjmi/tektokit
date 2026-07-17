/**
 * Divider Component
 * See DIVIDER_USAGE.md for detailed usage examples
 */

import React from'react';
import { classNames } from'../../../utils/base/classNames';
import { getDividerClass } from'./dividerConstants';

const Divider = ({ 
  orientation ="horizontal",
  spacing ="md",
  className ="",
  ...props 
}) => {
  const dividerClass = getDividerClass({ orientation, spacing });
  
  return (
    <div
      className={classNames(dividerClass, className)}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default Divider;
