/**
 * DrawerBody - Scrollable content area
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const DrawerBody = ({
  children,
  scrollable = true,
  padding = true,
  className ="",
  ...props
}) => {

  return (
    <div
      className={classNames(
        padding &&"p-4",
       "flex-1",
        scrollable &&"overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default DrawerBody;
