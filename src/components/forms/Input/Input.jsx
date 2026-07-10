/**
 * Input Component
 * Reusable text input with support for icons, validation states, and variants
 */

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Icon } from '../../../icons';
import { INPUT_SIZES, INPUT_VARIANTS, INPUT_STATES, INPUT_RADIUS } from './inputConstants';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  readOnly = false,
  autoFocus = false,
  size = 'md',
  variant = 'outline',
  radius = 'md',
  state = 'default',
  icon,
  iconPosition = 'left',
  rightElement,
  leftElement,
  className = '',
  inputClassName = '',
  wrapperClassName = '',
  ...props
}) => {
  const hasLeftIcon = icon && iconPosition === 'left';
  const hasRightIcon = icon && iconPosition === 'right';
  const hasLeftElement = leftElement || hasLeftIcon;
  const hasRightElement = rightElement || hasRightIcon;

  const inputClasses = classNames(
    'w-full transition-all',
    INPUT_SIZES[size],
    INPUT_VARIANTS[variant],
    INPUT_RADIUS[radius],
    disabled ? INPUT_STATES.disabled : INPUT_STATES[state],
    hasLeftElement && 'pl-10',
    hasRightElement && 'pr-10',
    inputClassName
  );

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;

  return (
    <div className={classNames('relative', wrapperClassName, className)}>
      {/* Left Icon/Element */}
      {hasLeftElement && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {leftElement || (icon && <Icon name={icon} size={iconSize} className="text-muted-foreground" />)}
        </div>
      )}

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id || name}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
        className={inputClasses}
        {...props}
      />

      {/* Right Icon/Element */}
      {hasRightElement && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightElement || (icon && <Icon name={icon} size={iconSize} className="text-muted-foreground" />)}
        </div>
      )}
    </div>
  );
};

export default Input;
