/**
 * DeleteButton Component
 * See DELETEBUTTON_USAGE.md for usage
 */

'use client';

import React, { useState } from'react';
import Button from'../Button';
// import { ConfirmDialog } from'../../ConfirmDialog'; // TODO: Create ConfirmDialog component

const DeleteButton = ({
  // Display options
  children ='Delete',
  icon ='trash',
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
  confirmTitle ='Confirm Delete',
  confirmMessage ='Are you sure? This action cannot be undone.',
  confirmButtonText ='Delete',
  cancelButtonText ='Cancel',
  
  // Callbacks
  onDelete,
  onSuccess,
  onError,
  
  // Loading state
  isLoading = false,
  loadingText ='Deleting...',
  
  // Analytics
  trackClick = false,
  trackName ='delete_button',
  trackLocation,
  
  ...rest
}) => {
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (showConfirmation) {
      setShowDialog(true);
    } else {
      handleDelete();
    }
  };

  const handleDelete = async () => {
    if (!onDelete) {
      console.warn('DeleteButton: onDelete callback is required');
      return;
    }

    setLoading(true);

    try {
      await onDelete();
      onSuccess?.();
    } catch (error) {
      console.error('Delete error:', error);
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
          onConfirm={handleDelete}
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

DeleteButton.displayName ='DeleteButton';

export default DeleteButton;
