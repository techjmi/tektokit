/**
 * Avatar Component
 * See AVATAR_USAGE.md for detailed usage examples
 * Can be used with Dropdown, Drawer, or any onClick handler
 */

import React, { useState } from'react';
import { classNames } from'../../../utils/base/classNames';
import { UserIcon } from'../../../svgs';
import {
  getAvatarSizeClass,
  getStatusSizeClass,
  getAvatarShapeClass,
  getUserInitials,
  getAvatarColor,
  USER_STATUS_COLORS,
  AVATAR_SIZE,
  AVATAR_SHAPE,
} from'./avatarConstants';

const Avatar = ({
  src,
  alt ='',
  name ='',
  fallback,
  size = AVATAR_SIZE.md,
  shape = AVATAR_SHAPE.circle,
  showStatus = false,
  status ='offline',
  className ='',
  onClick,
  delayMs = 0,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [showFallback, setShowFallback] = useState(!src);

  const sizeClass = getAvatarSizeClass(size);
  const shapeClass = getAvatarShapeClass(shape);
  const statusSizeClass = getStatusSizeClass(size);
  const statusColor = USER_STATUS_COLORS[status] || USER_STATUS_COLORS.offline;

  // Handle image load
  const handleImageLoad = () => {
    setImageError(false);

    if (delayMs > 0) {
      setTimeout(() => setShowFallback(false), delayMs);
    } else {
      setShowFallback(false);
    }
  };

  // Handle image error - show fallback
  const handleImageError = () => {
    setImageError(true);
    setShowFallback(true);
  };

  // Determine fallback content
  const renderFallback = () => {
    // Custom fallback provided
    if (fallback) {
      return fallback;
    }

    // Use name initials with deterministic color
    if (name) {
      const initials = getUserInitials(name);
      const bgColor = getAvatarColor(name);
      return (
        <div className={classNames(
         'w-full h-full flex items-center justify-center  font-semibold',
          bgColor
        )}>
          {initials}
        </div>
      );
    }

    // Default user icon fallback
    return (
      <div className="w-full h-full flex items-center justify-center   font-semibold">
        <UserIcon className="w-2/3 h-2/3" />
      </div>
    );
  };

  return (
    <div
      className={classNames(
       'relative inline-block',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Avatar Container */}
      <div
        className={classNames(
          sizeClass,
          shapeClass,
         'overflow-hidden',
          onClick &&'cursor-pointer hover:opacity-90 transition-opacity'
        )}
      >
        {/* Image */}
        {src && !showFallback && (
          <img
            src={src}
            alt={alt || name ||'Avatar'}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        )}

        {/* Fallback */}
        {(showFallback || !src) && renderFallback()}
      </div>

      {/* Status Indicator */}
      {showStatus && (
        <span
          className={classNames(
           'absolute bottom-0 right-0',
            statusSizeClass,
            statusColor,
            shapeClass,
           'border-2  ring-1 ring-gray-200'
          )}
          aria-label={`Status: ${status}`}
          role="status"
        />
      )}
    </div>
  );
};

Avatar.displayName ='Avatar';

export default Avatar;
