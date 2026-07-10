/**
 * Hero6 - Full Height Hero with Scroll Indicator
 * Perfect for: Portfolio, creative sites, storytelling
 */

'use client';

import Button from'../../ui/Button/Button';
import Image from'../../media/Image/Image';
import { classNames } from'../../../utils/base/classNames';
import { FiChevronDown } from'react-icons/fi';

const Hero6 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    backgroundImage,
    overlay = true,
    overlayOpacity = 0.6,
    showScrollIndicator = true,
    scrollTo,
  } = config;

  const handleScroll = () => {
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior:'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior:'smooth' });
    }
  };

  return (
    <section className={classNames('relative w-full h-screen overflow-hidden', className)}>
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
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            {subtitle && (
              <p className="text-xs md:text-sm font-semibold  uppercase tracking-wider">
                {subtitle}
              </p>
            )}

            {title && (
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold  mb-6 drop-shadow-2xl leading-tight">
                {title}
              </h1>
            )}

            {description && (
              <p className="text-lg md:text-2xl lg:text-3xl /95 mb-10 max-w-2xl mx-auto drop-shadow-lg">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 justify-center">
                {primaryCta && (
                  <Button
                    as={primaryCta.href ?'a' :'button'}
                    href={primaryCta.href}
                    onClick={primaryCta.onClick}
                    variant="solid"
                    color="primary"
                    size="lg"
                    className="shadow-2xl"
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

      {showScrollIndicator && (
        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 /80 hover: transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll</span>
          <FiChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      )}
    </section>
  );
};

Hero6.displayName ='Hero6';

export default Hero6;
