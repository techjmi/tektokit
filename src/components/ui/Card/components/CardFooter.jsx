/**
 * CardFooter - Primitive footer container
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const CardFooter = ({ className ='', children, ...props }) => {
  if (!children) return null;
  return (
    <div className={classNames('card-footer', className)} {...props}>
      {children}
    </div>
  );
};

export default CardFooter;
