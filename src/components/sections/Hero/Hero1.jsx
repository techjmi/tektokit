/**
 * Hero1 - Simple Hero with Background Image and CTA
 */

'use client';

import Button from'../../ui/Button/Button';
import Image from'../../media/Image/Image';
import { classNames } from'../../../utils/base/classNames';

const Hero1 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    backgroundImage,
    overlay = true,
    overlayOpacity = 0.5,
    textAlign ='left',
  } = config;

  return (
    <section className={classNames('relative w-full overflow-hidden', className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={title ||'Hero background'}
            className="w-full h-full object-cover object-center"
            style={{ objectFit:'cover' }}
          />
          {overlay && (
            <div
              className="absolute inset-0"
              style={{ opacity: overlayOpacity }}
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className={classNames(
           'max-w-4xl space-y-6 md:space-y-8',
            textAlign ==='center' &&'mx-auto text-center',
            textAlign ==='right' &&'ml-auto text-right'
          )}>
            {/* Subtitle */}
            {subtitle && (
              <p className="hero-subtitle text-xs sm:text-sm md:text-base font-semibold  uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            {/* Title */}
            {title && (
              <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  leading-tight">
                {title}
              </h1>
            )}

            {/* Description */}
            {description && (
              <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl /80 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className={classNames(
               'flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2',
                textAlign ==='center' &&'justify-center',
                textAlign ==='right' &&'justify-end'
              )}>
                {primaryCta && (
                  <Button
                    as={primaryCta.href ?'a' :'button'}
                    href={primaryCta.href}
                    onClick={primaryCta.onClick}
                    variant="solid"
                    color="primary"
                    size="lg"
                  >
                    {primaryCta.label || primaryCta.text}
                  </Button>
                )}

                {secondaryCta && (
                  <Button
                    as={secondaryCta.href ?'a' :'button'}
                    href={secondaryCta.href}
                    onClick={secondaryCta.onClick}
                    variant="outlined"
                    color="neutral"
                    size="lg"
                  >
                    {secondaryCta.label || secondaryCta.text}
                  </Button>
                )}
              </div>
            )}

            {/* Custom children */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero1.displayName ='Hero1';

export default Hero1;
