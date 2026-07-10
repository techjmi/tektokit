/**
 * Hero4 - Split Layout Hero (Image + Content Side by Side)
 * Perfect for: Product launches, feature highlights
 */

'use client';

import Button from'../../ui/Button/Button';
import Image from'../../media/Image/Image';
import { classNames } from'../../../utils/base/classNames';

const Hero4 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    image,
    imagePosition ='right',
    height ='min-h-[60vh] md:min-h-[70vh]',
  } = config;

  const imageOnRight = imagePosition ==='right';

  return (
    <section className={classNames('relative w-full overflow-hidden', height, className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12 lg:py-0">
          <div className={classNames('space-y-6', imageOnRight ?'lg:order-1' :'lg:order-2')}>
            {subtitle && (
              <p className="text-xs md:text-sm font-semibold  uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            {title && (
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {title}
              </h1>
            )}

            {description && (
              <p className="text-sm md:text-lg max-w-xl">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
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
                    color="primary"
                    size="lg"
                  >
                    {secondaryCta.label || secondaryCta.text}
                  </Button>
                )}
              </div>
            )}

            {children}
          </div>

          {image && (
            <div className={classNames('relative', imageOnRight ?'lg:order-2' :'lg:order-1')}>
              <Image
                src={image}
                alt={title ||'Hero image'}
                aspectRatio="4/3"
                objectFit="cover"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Hero4.displayName ='Hero4';

export default Hero4;
