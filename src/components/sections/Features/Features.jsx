/**
 * Features - Feature highlight section component
 * Displays features in a grid with icons
 */

'use client';

import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';

const Features = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    features = [],
    columns = 3,
    layout ='grid',
  } = config;

  const columnClasses = {
    2:'grid-cols-1 md:grid-cols-2',
    3:'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4:'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section className={classNames('py-12 md:py-16 lg:py-20', className)}>
      <div className=" mx-auto px-4 md:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {subtitle && (
              <p className="text-xs md:text-sm font-semibold  uppercase tracking-wide mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg opacity-80">
                {description}
              </p>
            )}
          </div>
        )}

        {features && features.length > 0 && (
          <div className={classNames(
           'grid gap-6 md:gap-8',
            columnClasses[columns] || columnClasses[3]
          )}>
            {features.map((feature, index) => (
              feature && (
                <div
                  key={index}
                  className={classNames(
                   'group',
                    layout ==='card' &&'p-6 md:p-8 rounded-xl border hover:shadow-lg transition-shadow'
                  )}
                >
                  {feature.icon && (
                    <div className="mb-4">
                      {typeof feature.icon ==='string' ? (
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg /10 flex items-center justify-center group-hover:/20 transition-colors">
                          <Icon name={feature.icon} size={24} className="" />
                        </div>
                      ) : (
                        feature.icon
                      )}
                    </div>
                  )}

                  {feature.title && (
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                  )}

                  {feature.description && (
                    <p className="text-sm md:text-base opacity-80">
                      {feature.description}
                    </p>
                  )}

                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="inline-flex items-center gap-2 mt-4 text-sm font-medium  hover:underline"
                    >
                      {feature.link.label ||'Learn more'}
                      <Icon name="FiArrowRight" size={16} />
                    </a>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

Features.displayName ='Features';

export default Features;
