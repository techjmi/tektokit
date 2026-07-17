/**
 * Chip Component
 * See CHIP_USAGE.md for detailed usage examples
 */

import React from'react';
import { classNames } from'../../../utils/base/classNames';
import Badge from'../Badge/Badge';
import { Icon } from'../../../icons';

const Chip = ({
  label,
  value,
  size = "md",
  variant = "solid",
  color = "neutral",
  onClick,
  onClose,
  onDelete, // Support onDelete as alias for onClose
  className = "",
  children, // Support children as alternative to label
  ...props
}) => {
  const handleDelete = onDelete || onClose;
  const displayText = children || label;

  return (
    <Badge
      size={size}
      variant={variant}
      color={color}
      className={classNames("flex items-center gap-1.5", className)}
      onClick={onClick}
      {...props}
    >
      <span>{displayText}</span>
      {handleDelete && (
        <Icon
          name="close"
          size={14}
          className="cursor-pointer hover:opacity-70"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(value);
          }}
        />
      )}
    </Badge>
  );
};

export default Chip;
