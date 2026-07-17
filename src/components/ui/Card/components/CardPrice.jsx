/**
 * CardPrice - Helper for price display with optional discount
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';

const CardPrice = ({ price, originalPrice, currency ='₹', className ='', ...props }) => {
  if (!price) return null;

  return (
    <div className={classNames('flex flex-col', className)} {...props}>
      <span className="text-lg font-bold">{currency}{price}</span>
      {originalPrice && (
        <span className="text-sm opacity-60 line-through">{currency}{originalPrice}</span>
      )}
    </div>
  );
};

export default CardPrice;
