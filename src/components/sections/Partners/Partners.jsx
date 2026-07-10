/**
 * Partners - Partner logos showcase with infinite scroll
 * Displays partner/client logos in grid or infinite scroll layout
 */
'use client';

import Image from '../../media/Image/Image';
import { classNames } from '../../../utils/base/classNames';
import './Partners.css';

const Partners = ({ config, className = '', children, ...props }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    partners = [],
    layout = 'scroll', // 'grid' or 'scroll'
    columns = 6,
    speed = 30, // Animation speed in seconds
    grayscale = true, // Show logos in grayscale
  } = config;

  const columnClasses = {
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
  };

  return (
    <section className={classNames('py-12 md:py-16 lg:py-20', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="text-center mb-12 md:mb-16">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {partners && partners.length > 0 && (
          layout === 'scroll' ? (
            <div className="partners-scroll-container overflow-hidden">
              <div
                className="partners-scroll-track"
                style={{ animationDuration: `${speed}s` }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="partners-scroll-item">
                    <PartnerLogo partner={partner} grayscale={grayscale} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={classNames('grid gap-8 md:gap-12', columnClasses[columns] || columnClasses[6])}>
              {partners.map((partner, index) => (
                <PartnerLogo key={index} partner={partner} grayscale={grayscale} />
              ))}
            </div>
          )
        )}

        {children}
      </div>
    </section>
  );
};

const PartnerLogo = ({ partner, grayscale }) => {
  const content = (
    <div className="partner-logo-wrapper">
      <Image
        src={partner.logo}
        alt={partner.name}
        aspectRatio="16/9"
        objectFit="contain"
        className={classNames(
          'partner-logo',
          grayscale && 'partner-logo--grayscale'
        )}
      />
    </div>
  );

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="partner-link"
        aria-label={`Visit ${partner.name}`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Partners;
