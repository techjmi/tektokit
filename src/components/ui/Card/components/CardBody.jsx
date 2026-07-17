/**
 * CardBody - Description or custom content
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const CardBody = ({
  description,
  lines = 3,
  className ='',
  children,
  ...props
}) => {
  const clampClass = `line-clamp-${lines}`;

  return (
    <div className={classNames('card-body', className)} {...props}>
      {children ? children : description ? (
        <p className={classNames('text-sm opacity-80', clampClass)}>{description}</p>
      ) : null}
    </div>
  );
};

export default CardBody;
