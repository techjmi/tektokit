/**
 * Search Component
 * Search input with icon, clear button, and optional suggestions
 */

import React, { useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Icon } from '../../../icons';
import { SEARCH_SIZES, SEARCH_VARIANTS, SEARCH_RADIUS } from './searchConstants';

const Search = ({
  value: controlledValue,
  onChange,
  onSearch,
  onClear,
  placeholder = 'Search...',
  name = 'search',
  size = 'md',
  variant = 'outline',
  radius = 'md',
  showClearButton = true,
  showSearchIcon = true,
  searchIconPosition = 'left',
  disabled = false,
  autoFocus = false,
  className = '',
  inputClassName = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue('');
    }
    onClear?.();
    onChange?.({ target: { value: '', name } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) {
      e.preventDefault();
      onSearch(value);
    }
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18;
  const hasLeftIcon = showSearchIcon && searchIconPosition === 'left';
  const hasRightIcon = showSearchIcon && searchIconPosition === 'right';

  const inputClasses = classNames(
    'w-full transition-all focus:outline-none focus:ring-2 focus:ring-primary',
    SEARCH_SIZES[size],
    SEARCH_VARIANTS[variant],
    SEARCH_RADIUS[radius],
    disabled && 'opacity-60 cursor-not-allowed bg-muted',
    hasLeftIcon && 'pl-10',
    (hasRightIcon || (showClearButton && value)) && 'pr-10',
    inputClassName
  );

  return (
    <div className={classNames('relative', className)}>
      {/* Left Search Icon */}
      {hasLeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="search" size={iconSize} className="text-muted-foreground" />
        </div>
      )}

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={disabled}
        autoFocus={autoFocus}
        className={inputClasses}
        {...props}
      />

      {/* Right Side: Search Icon or Clear Button */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {/* Clear Button */}
        {showClearButton && value && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="hover:text-foreground text-muted-foreground transition-colors"
            aria-label="Clear search"
          >
            <Icon name="close" size={iconSize} />
          </button>
        )}

        {/* Right Search Icon */}
        {hasRightIcon && !value && (
          <Icon name="search" size={iconSize} className="text-muted-foreground" />
        )}
      </div>
    </div>
  );
};

export default Search;
