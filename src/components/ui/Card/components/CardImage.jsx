/**
 * CardImage - Image with badges and overlay support
 * Auto-detects and uses Next.js Image if available
 */

import React from'react';
import { classNames } from'../../../../utils/base/classNames';
import Badge from'../../Badge/Badge';

const CardImage = ({
  src,
  images,
  alt ='',
  badges = [],
  overlay = false,
  overlayOpacity = 0.3,
  aspectRatio ='1/1',
  objectFit ='cover',
  onClick,
  className ='',
  priority = false,
  ...props
}) => {
  let NextImage = null;
  try {
    NextImage = require('next/image').default;
  } catch (e) {}

  const imageStyle = { aspectRatio, objectFit };

  const renderImage = () => {
    if (NextImage && src) {
      return <NextImage src={src} alt={alt} fill style={{ objectFit }} priority={priority} />;
    }
    return <img src={src} alt={alt} className="w-full h-full object-cover" style={imageStyle} />;
  };

  return (
    <div className={classNames('card-image relative overflow-hidden', className)} onClick={onClick} {...props}>
      <div className="relative w-full" style={{ aspectRatio }}>
        {renderImage()}
        {overlay && <div className="absolute inset-0" style={{ opacity: overlayOpacity }} />}
      </div>

      {badges.length > 0 && (
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {badges.map((badge, index) => {
            const badgeLabel = typeof badge ==='string' ? badge : badge.label;
            const badgeValue = typeof badge ==='object' ? badge.value : null;
            const badgeColor = typeof badge ==='object' ? badge.color :'neutral';
            const badgeSize = typeof badge ==='object' ? badge.size :'sm';

            return (
              <Badge key={index} color={badgeColor} size={badgeSize} radius="md">
                <span>{badgeLabel}</span>
                {badgeValue && <span className="ml-1">{badgeValue}</span>}
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardImage;
