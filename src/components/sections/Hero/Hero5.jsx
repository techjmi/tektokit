/**
 * Hero5 - Minimal Centered Hero
 * Perfect for: SaaS, minimal sites, clean landing pages
 */

'use client';

import Button from'../../ui/Button/Button';
import { classNames } from'../../../utils/base/classNames';

const Hero5 = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    badge,
    height ='min-h-[70vh] md:min-h-[80vh]',
  } = config;

  return (
    <section className={classNames('relative w-full overflow-hidden flex items-center justify-center', height, className)}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full /10  text-sm font-medium">
              {badge}
            </div>
          )}

          {subtitle && (
            <p className="text-xs md:text-sm font-semibold  uppercase tracking-wide">
              {subtitle}
            </p>
          )}

          {title && (
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              {title}
            </h1>
          )}

          {description && (
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

Hero5.displayName ='Hero5';

export default Hero5;
