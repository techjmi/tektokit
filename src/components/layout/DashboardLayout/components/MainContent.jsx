/**
 * MainContent Component
 * Main content area for dashboard layout
 */

import React from 'react';
import { classNames } from '../../../../utils/base/classNames';

const MainContent = ({
  children,
  className = '',
  padding = true,
  ...props
}) => {
  return (
    <div
      className={classNames(
        'w-full',
        padding && 'p-4 md:p-6 lg:p-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MainContent;
