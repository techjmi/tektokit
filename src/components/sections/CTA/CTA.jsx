/**
 * CTA - Call-to-Action section component
 * Config-based approach for flexibility
 */

'use client';

import Button from'../../ui/Button/Button';
import Image from'../../media/Image/Image';
import { classNames } from'../../../utils/base/classNames';

const CTA = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    backgroundImage,
    overlay = true,
    overlayOpacity = 0.7,
    variant ='centered',
  } = config;

  const variantClasses = {
    centered:'text-center items-center',
    left:'text-left items-start',
    split:'text-left items-center',
  };

  return (
    <section className={classNames('relative py-16 md:py-20 lg:py-24 overflow-hidden', className)}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title ||'CTA background'}
            aspectRatio="none"
            objectFit="cover"
            overlay={overlay}
            overlayOpacity={overlayOpacity}
            className="w-full h-full"
          />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={classNames(
         'max-w-4xl mx-auto flex flex-col gap-6 md:gap-8',
          variantClasses[variant] || variantClasses.centered
        )}>
          {subtitle && (
            <p className="text-xs md:text-sm font-semibold  uppercase tracking-wide">
              {subtitle}
            </p>
          )}

          {title && (
            <h2 className={classNames(
             'text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold',
              backgroundImage ?'' :''
            )}>
              {title}
            </h2>
          )}

          {description && (
            <p className={classNames(
             'text-base md:text-lg lg:text-xl max-w-2xl',
              backgroundImage ?'/90' :'opacity-80',
              variant ==='centered' &&'mx-auto'
            )}>
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={classNames(
             'flex flex-wrap gap-4',
              variant ==='centered' &&'justify-center'
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
                  variant="outline"
                  color={backgroundImage ?'neutral' :'primary'}
                  size="lg"
                  className={backgroundImage ?'/10 backdrop-blur-sm /30  hover:/20' :''}
                >
                  {secondaryCta.label || secondaryCta.text}
                </Button>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
};

export default CTA;
