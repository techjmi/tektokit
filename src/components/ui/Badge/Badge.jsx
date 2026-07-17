/**
 * Badge Component
 * See BADGE_USAGE.md for detailed usage examples
 */

import React from"react";
import { classNames } from"../../../utils/base/classNames";
import { getBadgeClasses } from"./badge.style";

const Badge = ({
  size = "md",
  radius = "md",
  color = "neutral",
  dot = false,
  className,
  children,
  ...rest
}) => {
  const badgeClasses = getBadgeClasses({ size, radius, color });
  return (
    <span className={classNames(badgeClasses, className)} {...rest}>
      {dot && (
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
      )}
      {children}
    </span>
  );
};

export default Badge;
