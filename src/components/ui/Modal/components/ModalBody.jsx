/**
 * ModalBody - Scrollable content area
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const ModalBody = ({
  children,
  padding = true,
  scrollable = true,
  className ="",
  ...props
}) => {
  if (!children) return null;

  return (
    <div
      className={classNames(
        padding &&"px-6 py-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100",
        scrollable &&"overflow-y-auto max-h-[70vh]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModalBody;
