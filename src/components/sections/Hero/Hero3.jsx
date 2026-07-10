/**
 * Hero3 - Video Background Hero
 * Perfect for: Modern sites, portfolios
 */

'use client';

import Button from'../../ui/Button/Button';
import VideoPlayer from'../../media/VideoPlayer/VideoPlayer';
import { classNames } from'../../../utils/base/classNames';

const Hero3 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    videoSrc,
    poster,
    height ='min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh]',
    textAlign ='center',
  } = config;

  return (
    <section className={classNames('relative w-full overflow-hidden', height, className)}>
      {videoSrc && (
        <div className="absolute inset-0">
          <VideoPlayer
            src={videoSrc}
            poster={poster}
            autoPlay={true}
            loop={true}
            muted={true}
            showOverlay={false}
            showPlayButton={false}
            showMuteButton={false}
            aspectRatio="none"
            className="w-full h-full"
          />
          <div className="absolute inset-0 /50" />
        </div>
      )}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className={classNames(
           'max-w-4xl',
            textAlign ==='center' &&'mx-auto text-center'
          )}>
            {subtitle && (
              <p className="text-xs md:text-sm font-semibold  mb-2 md:mb-3 uppercase tracking-wide">
                {subtitle}
              </p>
            )}

            {title && (
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold  mb-4 md:mb-6 drop-shadow-2xl">
                {title}
              </h1>
            )}

            {description && (
              <p className="text-base md:text-xl lg:text-2xl /95 mb-8 md:mb-10 max-w-3xl mx-auto drop-shadow-lg">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className={classNames(
               'flex flex-wrap gap-4',
                textAlign ==='center' &&'justify-center'
              )}>
                {primaryCta && (
                  <Button
                    as={primaryCta.href ?'a' :'button'}
                    href={primaryCta.href}
                    onClick={primaryCta.onClick}
                    variant="solid"
                    color="primary"
                    size="lg"
                    className="shadow-2xl hover:shadow-3xl"
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
                    color="neutral"
                    size="lg"
                    className="/10 backdrop-blur-sm /30  hover:/20"
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
    </section>
  );
};

Hero3.displayName ='Hero3';

export default Hero3;
