/**
 * Button Component
 * See BUTTON_USAGE.md for detailed usage examples
 */

'use client';

import React from"react";
import { classNames } from"../../../utils/base/classNames";
import { trackButtonClick } from"../../../utils/analytics";
import { Icon } from"../../../icons";
import { SIZE, RADIUS, COLOR } from"./buttonConstant";

const getClasses = ({ variant, color }) => {
  const colorMap = COLOR[color] || COLOR.neutral;
  return colorMap[variant] || colorMap.outline ||"";
};

const Button = ({
  as: As ="button",
  href,
  label,
  children,
  size ="md",
  radius ="md",
  color ="neutral",
  variant ="outline",
  fullWidth = false,
  disabled = false,
  loading = false,
  className,
  icon,
  iconPosition ="left",
  iconSize,
  // Analytics props (optional - for tracking button clicks)
  trackClick = false,
  trackName,
  trackLocation,
  trackData = {},
  onClick,
  ...rest
}) => {
  const base =
   "inline-flex items-center justify-center whitespace-nowrap select-none transition-colors cursor-pointer";

  const sizeCls = SIZE[size] || SIZE.md;
  const radiusCls = RADIUS[radius] || RADIUS.md;
  const colorCls = getClasses({ variant, color });
  const widthCls = fullWidth ?"w-full" : "";
  const disabledCls = (disabled || loading) ?"opacity-60 pointer-events-none" : "";

  const content = children ?? label;

  // Auto-size icon based on button size
  const getIconSize = () => {
    if (iconSize) return iconSize;
    return size ==="xs" || size === "sm" ? 16 : 20;
  };

  // Loading spinner icon
  const loadingIcon = loading && (
    <Icon
      name="loader"
      size={getIconSize()}
      className={`animate-spin ${content ? "mr-2" : ""}`}
    />
  );

  // Icon component with proper spacing
  const iconComponent = !loading && icon && (
    <Icon
      name={icon}
      size={getIconSize()}
      className={iconPosition ==="left" && content ? "mr-2" : iconPosition === "right" && content ? "ml-2" : ""}
    />
  );

  // Handle click with optional tracking
  const handleClick = (e) => {
    if (disabled || loading) return;

    // Track button click if enabled
    if (trackClick && trackName) {
      trackButtonClick(trackName, trackLocation, trackData);
    }

    // Call original onClick
    if (onClick) {
      onClick(e);
    }
  };

  if (As ==="a") {
    return (
      <a
        href={href}
        className={classNames(
          base,
          sizeCls,
          radiusCls,
          colorCls,
          widthCls,
          disabledCls,
          className
        )}
        aria-disabled={disabled || loading}
        onClick={handleClick}
        {...rest}
      >
        {loadingIcon}
        {iconPosition ==="left" && iconComponent}
        {content}
        {iconPosition ==="right" && iconComponent}
      </a>
    );
  }

  return (
    <button
      type={rest.type ||"button"}
      disabled={disabled || loading}
      className={classNames(
        base,
        sizeCls,
        radiusCls,
        colorCls,
        widthCls,
        disabledCls,
        className
      )}
      onClick={handleClick}
      {...rest}
    >
      {loadingIcon}
      {iconPosition ==="left" && iconComponent}
      {content}
      {iconPosition ==="right" && iconComponent}
    </button>
  );
};

export default Button;
