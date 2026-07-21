/**
 * DrawerHeader - Header with title and close button
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Button from'../../../ui/Button/Button';
import { Icon } from'../../../../icons';

const DrawerHeader = ({
  children,
  onClose,
  showCloseButton = true,
  className ="",
  // Analytics props for close button
  trackCloseClick = false,
  trackName,
  trackLocation,
  trackData = {},
  ...props
}) => {
  if (!children) return null;

  return (
    <div
      className={classNames(
       "flex items-center justify-between px-4 pt-4",
        className
      )}
      {...props}
    >
      <div className="flex-1">{children}</div>

      {showCloseButton && onClose && (
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="ml-4"
          aria-label="Close drawer"
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

export default DrawerHeader;
