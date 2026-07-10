/**
 * DrawerFooter - Footer for action buttons
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const DrawerFooter = ({
  children,
  align ="right",
  padding = true,
  className ="",
  ...props
}) => {
  const alignmentClass = {
    left:"justify-start",
    center:"justify-center",
    right:"justify-end",
    between:"justify-between",
  }[align] ||"justify-end";

  if (!children) return null;

  return (
    <div
      className={classNames(
       "flex items-center gap-3 dark:bg-gray-900 text-gray-900 dark:text-gray-100",
        padding &&"p-4",
        alignmentClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DrawerFooter;
