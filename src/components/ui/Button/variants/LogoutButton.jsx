/**
 * LogoutButton Component
 * See LOGOUTBUTTON_USAGE.md for usage
 */

'use client';

import React, { useState } from'react';
import Button from'../Button';
// import { ConfirmDialog } from'../../ConfirmDialog'; // TODO: Create ConfirmDialog component

const LogoutButton = ({
  // Display options
  children ='Logout',
  icon ='log-out',
  iconPosition ='left',
  
  // Button styling (inherits from Button)
  size ='md',
  variant ='outline',
  color ='danger',
  radius ='md',
  fullWidth = false,
  className,
  
  // Confirmation dialog
  showConfirmation = true,
  confirmTitle ='Confirm Logout',
  confirmMessage ='Are you sure you want to logout?',
  confirmButtonText ='Logout',
  cancelButtonText ='Cancel',
  
  // Callbacks
  onLogout,
  onSuccess,
  onError,
  
  // Loading state
  isLoading = false,
  loadingText ='Logging out...',
  
  // Analytics
  trackClick = false,
  trackName ='logout_button',
  trackLocation,
  
  ...rest
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (showConfirmation) {
      setShowDialog(true);
    } else {
      handleLogout();
    }
  };

  const handleLogout = async () => {
    if (!onLogout) {
      console.warn('LogoutButton: onLogout callback is required');
      return;
    }

    setLoading(true);

    try {
      await onLogout();
      onSuccess?.();
    } catch (error) {
      console.error('Logout error:', error);
      onError?.(error);
    } finally {
      setLoading(false);
      setShowDialog(false);
    }
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        icon={icon}
        iconPosition={iconPosition}
        size={size}
        variant={variant}
        color={color}
        radius={radius}
        fullWidth={fullWidth}
        disabled={loading || isLoading}
        className={className}
        trackClick={trackClick}
        trackName={trackName}
        trackLocation={trackLocation}
        {...rest}
      >
        {loading || isLoading ? loadingText : children}
      </Button>

      {showConfirmation && (
        <ConfirmDialog
          isOpen={showDialog}
          onClose={handleCancel}
          onConfirm={handleLogout}
          onCancel={handleCancel}
          title={confirmTitle}
          message={confirmMessage}
          confirmText={confirmButtonText}
          cancelText={cancelButtonText}
          variant="danger"
          isLoading={loading}
        />
      )}
    </>
  );
};

LogoutButton.displayName ='LogoutButton';

export default LogoutButton;
