/**
 * Drawer Component
 * See DRAWER_USAGE.md for usage examples
 */

import React, { useEffect } from"react";
import { classNames } from"../../../utils/base/classNames";
import { lockBodyScroll as lockScroll, addWindowListener } from"../../../utils/browser/window";
import { KEYS } from"../../../utils/browser/keyboard";
import { useClickOutside } from"../../../hooks";
import {
  DRAWER_POSITION_CLASS,
  DRAWER_SIZE,
  DRAWER_ANIMATION,
  DRAWER_HIDDEN,
  DRAWER_PANEL_CLASS,
} from"./drawerConstants";
import DrawerHeader from"./components/DrawerHeader";
import DrawerBody from"./components/DrawerBody";
import DrawerFooter from"./components/DrawerFooter";

const Drawer = ({
  children,
  isOpen,
  onClose,
  position ="right",
  size ="md",
  closeOnEsc = true,
  closeOnBackdrop = true,
  closeOnItemClick = true,
  lockBodyScroll = true,
  showBackdrop = true,
  backdropBlur = false,
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
  const drawerRef = useClickOutside(() => {
    if (closeOnBackdrop && isOpen) {
      onClose?.();
    }
  } );

  useEffect(() => {
    if (!isOpen || !lockBodyScroll) return;
    return lockScroll();
  }, [isOpen, lockBodyScroll]);

  useEffect(() => {
    if (!isOpen || !closeOnEsc) return;

    const handleEsc = (e) => {
      if (e.key === KEYS.ESCAPE) onClose?.();
    };

    return addWindowListener("keydown", handleEsc);
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;
  const positionClass = DRAWER_POSITION_CLASS[position] || DRAWER_POSITION_CLASS.right;

  const getSizeClass = () => {
    if (position ==="top" || position === "bottom") {
      if (typeof size ==="string" && size.includes("%")) {
        return `h-[${size}]`;
      }
      return DRAWER_SIZE[size]?.replace("w-","h-") || "h-96";
    } else {
      if (typeof size ==="string" && size.includes("%")) {
        return `w-[${size}] max-w-full`;
      }
      return `${DRAWER_SIZE[size] || DRAWER_SIZE.md} w-full sm:w-auto`;
    }
  };

  /**
   * Handle clicks inside drawer to auto-close on navigation
   * Uses data-drawer-close attribute for generic, opt-in behavior
   */
  const handleDrawerClick = (e) => {
    if (!closeOnItemClick) return;

    const shouldClose = e.target.closest('[data-drawer-close]');
    if (shouldClose) {
      onClose?.();
    }
  };

  const sizeClass = getSizeClass();
  const translateClass = isOpen ? DRAWER_ANIMATION[position] : DRAWER_HIDDEN[position];

  // Composition Mode - when children provided directly
  if (children) {
    return (
      <>
        {showBackdrop && (
          <div
            className={classNames(
             "fixed inset-0 z-40 bg-black/40 transition-opacity",
              backdropBlur &&"backdrop-blur-sm"
            )}
            onClick={closeOnBackdrop ? onClose : undefined}
          />
        )}

        <div
          ref={drawerRef}
          className={classNames(
            DRAWER_PANEL_CLASS,
            positionClass,
            sizeClass,
            translateClass,
            className
          )}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {children}
        </div>
      </>
    );
  }

  const renderHeader = () => {
    if (!header) return null;
    if (React.isValidElement(header)) {
      return <DrawerHeader onClose={onClose}>{header}</DrawerHeader>;
    }
    if (typeof header ==='string') {
      return (
        <DrawerHeader onClose={onClose}>
          <h3 className="text-lg font-semibold">{header}</h3>
        </DrawerHeader>
      );
    }
    if (typeof header ==='object') {
      return <DrawerHeader onClose={onClose} {...header} />;
    }
    return null;
  };

  const renderBody = () => {
    if (!body) return null;

    // Always wrap in DrawerBody for proper padding and scrolling
    if (React.isValidElement(body)) {
      return <DrawerBody>{body}</DrawerBody>;
    }
    return <DrawerBody>{body}</DrawerBody>;
  };

  const renderFooter = () => {
    if (!footer) return null;

    // Always wrap in DrawerFooter for proper padding
    if (React.isValidElement(footer)) {
      return <DrawerFooter align={footerAlign}>{footer}</DrawerFooter>;
    }
    return <DrawerFooter align={footerAlign}>{footer}</DrawerFooter>;
  };

  return (
    <>
      {showBackdrop && (
        <div
          className={classNames(
           "fixed inset-0 z-40 bg-black/40 transition-opacity",
            backdropBlur &&"backdrop-blur-sm"
          )}
          onClick={closeOnBackdrop ? onClose : undefined}
        />
      )}

      <div
        ref={drawerRef}
        onClick={handleDrawerClick}
        className={classNames(
          DRAWER_PANEL_CLASS,
          positionClass,
          sizeClass,
          translateClass,
          className
        )}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {renderHeader()}
        {renderBody()}
        {renderFooter()}
      </div>
    </>
  );
};

export default Drawer;
