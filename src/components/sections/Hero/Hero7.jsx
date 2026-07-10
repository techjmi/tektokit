/**
 * Hero7 - Hero with Integrated Stats
 * Perfect for: SaaS, landing pages, data-driven sites
 */

'use client';

import Button from'../../ui/Button/Button';
import Image from'../../media/Image/Image';
import Stats from'../Stats/Stats';
import { classNames } from'../../../utils/base/classNames';

const Hero7 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    backgroundImage,
    stats = [],
    overlay = true,
    overlayOpacity = 0.5,
    statsPosition ='bottom',
    height ='min-h-[70vh] md:min-h-[80vh]',
  } = config;

  return (
    <section className={classNames('relative w-full overflow-hidden', className)}>
      <div className={classNames('relative', height)}>
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt={title ||'Hero background'}
              aspectRatio="none"
              objectFit="cover"
              overlay={overlay}
              overlayOpacity={overlayOpacity}
              className="w-full h-full"
            />
          </div>
        )}

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              {subtitle && (
                <p className={classNames(
                 'text-xs md:text-sm font-semibold uppercase tracking-wide',
                  backgroundImage ?'' :''
                )}>
                  {subtitle}
                </p>
              )}

              {title && (
                <h1 className={classNames(
                 'text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight',
                  backgroundImage ?' drop-shadow-2xl' :''
                )}>
                  {title}
                </h1>
              )}

              {description && (
                <p className={classNames(
                 'text-base md:text-xl lg:text-2xl max-w-3xl mx-auto',
                  backgroundImage ?'/95 drop-shadow-lg' :''
                )}>
                  {description}
                </p>
              )}

              {(primaryCta || secondaryCta) && (
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  {primaryCta && (
                    <Button
                      as={primaryCta.href ?'a' :'button'}
                      href={primaryCta.href}
                      onClick={primaryCta.onClick}
                      variant="solid"
                      color="primary"
                      size="lg"
                      className={backgroundImage ?'shadow-2xl' :''}
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
        </div>
      </div>

      {stats && stats.length > 0 && (
        <div className={classNames(
         'relative z-20',
          statsPosition ==='bottom' &&'-mt-16',
          statsPosition ==='overlay' &&'absolute bottom-8 left-0 right-0'
        )}>
          <Stats
            config={{
              stats,
              columns: stats.length <= 4 ? stats.length : 4,
              variant:'bordered'
            }}
            className={classNames(
             'py-0',
              statsPosition ==='bottom' ?'' :'/90 dark:/90 backdrop-blur-sm rounded-2xl'
            )}
          />
        </div>
      )}
    </section>
  );
};

Hero7.displayName ='Hero7';

export default Hero7;
