/**
 * DropdownDivider - Separator between menu items
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const DropdownDivider = ({ className ="" }) => {
  return (
    <div 
      className={classNames('my-1 border-t border-gray-200', className)} 
      role="separator"
    />
  );
};

export default DropdownDivider;
