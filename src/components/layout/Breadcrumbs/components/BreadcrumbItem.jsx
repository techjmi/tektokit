/**
 * BreadcrumbItem - Individual breadcrumb link/text
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import { Icon } from'../../../../icons';

const BreadcrumbItem = ({
  label,
  href,
  isLast = false,
  icon,
  separator,
  className ="",
}) => {
  const content = (
    <>
      {icon && (
        typeof icon ==='string' ? (
          <Icon name={icon} size={16} />
        ) : (
          icon
        )
      )}
      <span>{label}</span>
    </>
  );

  return (
    <li className={classNames('inline-flex items-center', className)}>
      {href && !isLast ? (
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-sm  hover: transition-colors"
        >
          {content}
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-sm  font-medium">
          {content}
        </span>
      )}
      
      {!isLast && separator}
    </li>
  );
};

export default BreadcrumbItem;
