/**
 * Modal Component
 * See MODAL_USAGE.md for detailed usage examples
 */

import React, { useEffect } from'react';
import { classNames } from'../../../utils/base/classNames';
import { isBrowser, lockBodyScroll, addWindowListener } from'../../../utils/browser/window';
import { KEYS } from'../../../utils/browser/keyboard';
import { MODAL_SIZE, MODAL_PLACEMENT, MODAL_BACKDROP } from'./modalConstants';
import ModalHeader from'./components/ModalHeader';
import ModalBody from'./components/ModalBody';
import ModalFooter from'./components/ModalFooter';

const Modal = ({
  children,
  isOpen,
  onClose,
  size ="md",
  placement ="center",
  backdrop ="default",
  closeOnEsc = true,
  closeOnBackdrop = true,
  lockScroll = true,
  className ="",
  config,
  ...props
}) => {
  const {
    header,
    body,
    footer,
    footerAlign ="right",
  } = config || {};
  useEffect(() => {
    if (!isOpen || !lockScroll || !isBrowser) return;

    const unlock = lockBodyScroll();
    return unlock;
  }, [isOpen, lockScroll]);

  useEffect(() => {
    if (!isOpen || !closeOnEsc || !isBrowser) return;

    const cleanup = addWindowListener('keydown', (e) => {
      if (e.key === KEYS.ESCAPE) {
        onClose?.();
      }
    });

    return cleanup;
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const placementConfig = MODAL_PLACEMENT[placement] || MODAL_PLACEMENT.center;
  const backdropClass = MODAL_BACKDROP[backdrop] || MODAL_BACKDROP.default;
  const sizeClass = MODAL_SIZE[size] || MODAL_SIZE.md;

  // Composition Mode - children provided
  if (children) {
    return (
      <div
        className={classNames(
         "fixed inset-0 z-[9999] flex",
          backdropClass,
          placementConfig.wrapper
        )}
        onClick={closeOnBackdrop ? onClose : undefined}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={classNames(
           "bg-white dark:bg-gray-900 shadow-2xl relative",
            sizeClass,
            placementConfig.panel,
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }

  // Data-Driven Mode
  const renderHeader = () => {
    if (!header) return null;
    if (React.isValidElement(header)) return header;
    if (typeof header ==='object') {
      return <ModalHeader {...header} onClose={onClose} />;
    }
    return <ModalHeader title={header} onClose={onClose} />;
  };

  const renderBody = () => {
    if (!body) return null;
    if (React.isValidElement(body)) return body;
    return <ModalBody>{body}</ModalBody>;
  };

  const renderFooter = () => {
    if (!footer) return null;
    if (React.isValidElement(footer)) return footer;
    if (Array.isArray(footer)) {
      return <ModalFooter buttons={footer} onClose={onClose} align={footerAlign} />;
    }
    return <ModalFooter align={footerAlign}>{footer}</ModalFooter>;
  };

  return (
    <div
      className={classNames(
       "fixed inset-0 z-[9999] flex",
        backdropClass,
        placementConfig.wrapper
      )}
      onClick={closeOnBackdrop ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={classNames(
         "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-2xl relative",
          sizeClass,
          placementConfig.panel,
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
        {children}
      </div>
    </div>
  );
};

export default Modal;
