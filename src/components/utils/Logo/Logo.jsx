/**
 * Logo - Reusable logo component
 * Can display image, text, or both in various layouts
 */

'use client';

import { classNames } from'../../../utils/base/classNames';
import { LOGO_SIZES, LOGO_LAYOUTS } from'./logoConstants';

const Logo = ({
  layout = 'horizontal',
  size = 'md',
  showImage = true,
  showText = true,
  className = '',
  imageClassName = '',
  textClassName = '',
  taglineClassName = '',
  children,
  config,
  ...rest
}) => {
  if (!config) return null;

  const {
    src,
    alt,
    name,
    tagline,
    href = '/',
    imageSize,
    target,
    onClick,
  } = config;
  const currentSize = LOGO_SIZES[size] || LOGO_SIZES.md;

  // Override image size if custom size provided
  const finalImageSize = imageSize || currentSize.image;

  const content = (
    <div
      className={classNames('inline-flex', LOGO_LAYOUTS[layout] || LOGO_LAYOUTS.horizontal, className)}
      {...rest}
    >
      {showImage && src && (
        <img
          src={src}
          alt={alt || name || 'Logo'}
          className={classNames(finalImageSize, 'object-contain', imageClassName)}
        />
      )}

      {showText && (name || tagline) && (
        <div className={classNames('flex flex-col', layout === 'horizontal' ? 'items-start' : 'items-center')}>
          {name && (
            <span className={classNames('font-bold leading-tight', currentSize.name, textClassName)}>
              {name}
            </span>
          )}
          {tagline && (
            <span className={classNames('opacity-70 leading-tight', currentSize.tagline, taglineClassName)}>
              {tagline}
            </span>
          )}
        </div>
      )}

      {children}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target ==='_blank' ?'noopener noreferrer' : undefined}
        onClick={onClick}
        className="inline-block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Logo;
