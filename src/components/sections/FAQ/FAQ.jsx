/**
 * FAQ - Frequently Asked Questions section component
 * Uses Accordion component for expandable Q&A
 */

'use client';

import Accordion from'../../ui/Accordion/Accordion';
import { classNames } from'../../../utils/base/classNames';

const FAQ = ({ config, className ='', children }) => {
  if (!config) return null;

  const {
    title ='Frequently Asked Questions',
    subtitle,
    description,
    faqs = [],
    allowMultiple = false,
    columns = 1,
  } = config;

  const columnClass = {
    1:'grid-cols-1',
    2:'grid-cols-1 lg:grid-cols-2',
  };

  return (
    <section className={classNames('py-12 md:py-16 lg:py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
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

        {faqs && faqs.length > 0 && (
          <div className={classNames('grid gap-6 lg:gap-8', columnClass[columns] || columnClass[1])}>
            {columns === 2 ? (
              <>
                <Accordion
                  config={{ items: faqs.slice(0, Math.ceil(faqs.length / 2)) }}
                  allowMultiple={allowMultiple}
                />
                <Accordion
                  config={{ items: faqs.slice(Math.ceil(faqs.length / 2)) }}
                  allowMultiple={allowMultiple}
                />
              </>
            ) : (
              <Accordion config={{ items: faqs }} allowMultiple={allowMultiple} />
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

FAQ.displayName ='FAQ';

export default FAQ;
