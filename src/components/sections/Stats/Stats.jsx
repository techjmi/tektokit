/**
 * Stats - Statistics display section component
 * Displays key metrics in a grid or row layout
 */

'use client';

import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';

const Stats = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title,
    subtitle,
    description,
    stats = [],
    columns = 4,
    variant ='default',
  } = config;

  const columnClasses = {
    2:'grid-cols-1 md:grid-cols-2',
    3:'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4:'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const variantClasses = {
    default:'',
    bordered:'border rounded-xl p-6 md:p-8',
    highlighted:'/5 rounded-xl p-6 md:p-8',
  };

  return (
    <section className={classNames('py-12 md:py-16 lg:py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
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

        {stats && stats.length > 0 && (
          <div className={classNames(
           'grid gap-6 md:gap-8',
            columnClasses[columns] || columnClasses[4]
          )}>
            {stats.map((stat, index) => (
              stat && (
                <div
                  key={index}
                  className={classNames(
                   'text-center',
                    variantClasses[variant] || variantClasses.default
                  )}
                >
                  {stat.icon && (
                    <div className="flex justify-center mb-4">
                      {typeof stat.icon ==='string' ? (
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg /10 flex items-center justify-center">
                          <Icon name={stat.icon} size={24} className="" />
                        </div>
                      ) : (
                        stat.icon
                      )}
                    </div>
                  )}

                  {stat.value && (
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                      {stat.prefix && <span className="">{stat.prefix}</span>}
                      {stat.value}
                      {stat.suffix && <span className="">{stat.suffix}</span>}
                    </div>
                  )}

                  {stat.label && (
                    <div className="text-sm md:text-base font-medium opacity-80">
                      {stat.label}
                    </div>
                  )}

                  {stat.description && (
                    <p className="text-xs md:text-sm opacity-60 mt-2">
                      {stat.description}
                    </p>
                  )}

                  {stat.trend && (
                    <div className={classNames(
                     'inline-flex items-center gap-1 mt-3 text-xs md:text-sm font-medium',
                      stat.trend.direction ==='up' ?'text-green-500' :'text-red-500'
                    )}>
                      <Icon 
                        name={stat.trend.direction ==='up' ?'FiTrendingUp' :'FiTrendingDown'} 
                        size={16} 
                      />
                      <span>{stat.trend.value}</span>
                      {stat.trend.label && <span className="opacity-70">{stat.trend.label}</span>}
                    </div>
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

export default Stats;
