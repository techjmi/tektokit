/**
 * Image Component
 * See IMAGE_USAGE.md for usage
 */

'use client';

import React, { useState } from'react';
import { classNames } from'../../../utils/base/classNames';

const Image = ({
  src,
  alt ='',
  fallback ='/placeholder.jpg',
  width,
  height,
  aspectRatio,
  objectFit ='cover',
  className ='',
  loading ='lazy',
  onClick,
  overlay = false,
  overlayOpacity = 0.3,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = imageError ? fallback : src || fallback;

  const containerStyle = {
    position:'relative',
    width: width ||'100%',
    height: height ||'auto',
    aspectRatio: aspectRatio || undefined,
    overflow:'hidden',
  };

  const imageStyle = {
    width:'100%',
    height:'100%',
    objectFit,
    opacity: imageLoaded ? 1 : 0,
    transition:'opacity 0.3s ease-in-out',
  };

  return (
    <div 
      className={classNames('image-container', className)}
      style={containerStyle}
      {...props}
    >
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        style={imageStyle}
        onClick={onClick}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={classNames(
         'image',
          onClick &&'cursor-pointer hover:scale-105 transition-transform duration-300'
        )}
      />
      
      {overlay && (
        <div
          className="absolute inset-0  pointer-events-none"
          style={{ opacity: overlayOpacity, zIndex: 1 }}
        />
      )}
      
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0  animate-pulse" />
      )}
    </div>
  );
};

Image.displayName ='Image';

export default Image;
