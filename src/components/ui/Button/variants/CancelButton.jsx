/**
 * CancelButton Component
 * See CANCELBUTTON_USAGE.md for usage
 */

'use client';

import React from'react';
import Button from'../Button';

const CancelButton = ({
  // Display options
  children ='Cancel',
  icon,
  iconPosition ='left',
  
  // Button styling
  size ='md',
  variant ='outline',
  color ='neutral',
  radius ='md',
  fullWidth = false,
  className,
  
  // Callbacks
  onCancel,
  onClick,
  
  // Analytics
  trackClick = false,
  trackName ='cancel_button',
  trackLocation,
  
  ...rest
}) => {
  const handleClick = (e) => {
    if (onCancel) {
      onCancel(e);
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={handleClick}
      icon={icon}
      iconPosition={iconPosition}
      size={size}
      variant={variant}
      color={color}
      radius={radius}
      fullWidth={fullWidth}
      className={className}
      trackClick={trackClick}
      trackName={trackName}
      trackLocation={trackLocation}
      {...rest}
    >
      {children}
    </Button>
  );
};

CancelButton.displayName ='CancelButton';

export default CancelButton;
