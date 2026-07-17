/**
 * ModalFooter - Footer for action buttons
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Button from'../../Button/Button';

const ModalFooter = ({
  children,
  buttons,
  onClose,
  align ="right",
  padding = true,
  className ="",
  ...props
}) => {
  const alignmentClass = {
    left:"justify-start",
    center:"justify-center",
    right:"justify-end",
    between:"justify-between",
  }[align] ||"justify-end";

  // If children provided, use composition mode
  if (children) {
    return (
      <div
        className={classNames(
         "flex items-center gap-3",
          padding &&"px-6 py-4",
          alignmentClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  // If buttons array provided, use data-driven mode
  if (buttons && Array.isArray(buttons)) {
    return (
      <div
        className={classNames(
         "flex items-center gap-3 dark:bg-gray-900 text-gray-900 dark:text-gray-100",
          padding &&"px-6 py-4",
          alignmentClass,
          className
        )}
        {...props}
      >
        {buttons.map((btn, index) => {
          const handleClick = (e) => {
            btn.onClick?.(e);
            if (btn.closeModal !== false) {
              onClose?.();
            }
          };

          return (
            <Button
              key={index}
              variant={btn.variant ||"solid"}
              color={btn.color ||"primary"}
              size={btn.size ||"md"}
              onClick={handleClick}
              disabled={btn.disabled}
              trackClick={btn.trackClick || false}
              trackName={btn.trackName}
              trackLocation={btn.trackLocation}
              trackData={btn.trackData || {}}
            >
              {btn.label}
            </Button>
          );
        })}
      </div>
    );
  }

  return null;
};

export default ModalFooter;
