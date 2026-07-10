/**
 * ConfirmDialog - Convenience wrapper around Modal for yes/no confirmations
 * 
 * @example
 * <ConfirmDialog
 *   isOpen={isOpen}
 *   onCancel={handleCancel}
 *   onConfirm={handleDelete}
 *   title="Delete Item"
 *   message="Are you sure you want to delete this item?"
 *   confirmLabel="Delete"
 *   variant="danger"
 * />
 */

import React from'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from'../../ui';
import Button from'../../ui/Button/Button';

const ConfirmDialog = ({
  children,
  isOpen,
  onCancel,
  onConfirm,
  size = 'sm',
  loading = false,
  config,
  ...props
}) => {
  const {
    title = 'Confirm',
    message,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    variant = 'primary',
    // Analytics props
    trackConfirm = false,
    trackCancel = false,
    trackName,
    trackLocation,
    trackData = {},
  } = config || {};
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      size={size}
      placement="center"
      {...props}
    >
      <ModalHeader title={title} onClose={onCancel} />
      <ModalBody>
        {message && <p className="text-sm opacity-80">{message}</p>}
      </ModalBody>
      <ModalFooter align="between">
        <Button
          variant="ghost"
          onClick={onCancel}
          disabled={loading}
          trackClick={trackCancel}
          trackName={trackName ? `${trackName}_cancel` : undefined}
          trackLocation={trackLocation}
          trackData={trackData}
        >
          {cancelLabel}
        </Button>
        <Button
          variant="solid"
          color={variant ==="danger" ? "danger" : "primary"}
          onClick={onConfirm}
          disabled={loading}
          trackClick={trackConfirm}
          trackName={trackName ? `${trackName}_confirm` : undefined}
          trackLocation={trackLocation}
          trackData={trackData}
        >
          {loading ?"Loading..." : confirmLabel}
        </Button>
      </ModalFooter>
      {children}
    </Modal>
  );
};

export default ConfirmDialog;
