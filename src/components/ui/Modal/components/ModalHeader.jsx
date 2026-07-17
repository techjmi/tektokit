/**
 * ModalHeader - Header with title and close button
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Button from'../../Button/Button';
import { Icon } from'../../../../icons';

const ModalHeader = ({
  title,
  subtitle,
  onClose,
  children,
  padding = true,
  className ="",
  // Analytics props for close button
  trackCloseClick = false,
  trackName,
  trackLocation,
  trackData = {},
  ...props
}) => {
  if (children) {
    return (
      <div
        className={classNames(
         "flex items-center justify-between dark:bg-gray-900 text-gray-900 dark:text-gray-100",
          padding &&"px-6 py-4",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (!title) return null;

  return (
    <div
      className={classNames(
       "flex items-start justify-between gap-3 dark:bg-gray-900 text-gray-900 dark:text-gray-100",
        padding &&"px-6 py-4",
        className
      )}
      {...props}
    >
      <div className="min-w-0 flex-1">
        <h2 className="text-base font-semibold">{title}</h2>
        {subtitle && <p className="mt-1 text-sm opacity-60">{subtitle}</p>}
      </div>

      {onClose && (
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          aria-label="Close modal"
          trackClick={trackCloseClick}
          trackName={trackName}
          trackLocation={trackLocation}
          trackData={trackData}
        >
          <Icon name="close" size={20} />
        </Button>
      )}
    </div>
  );
};

export default ModalHeader;
