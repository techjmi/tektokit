/**
 * About Component - Reusable about page
 * Supports multiple layout variants: simple, detailed, timeline
 */

'use client';

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Button } from '../../ui/Button';
import { Icon } from '../../../icons';
import { parseHighlightedText } from '../../../utils/text/highlightText';

const About = ({
  config,
  variant = 'simple',
  className = '',
  children,
  ...props
}) => {
  const {
    title,
    description,
    sections = [],
    highlights = [],
    timeline = [],
    cta,
    image,
  } = config;

  // Helper to render text with highlighting support
  const renderText = (text) => {
    if (!text) return null;

    const segments = parseHighlightedText(text);

    return segments.map((segment, index) =>
      segment.type === 'highlight' ? (
        <span key={index} className="text-primary font-semibold">
          {segment.text}
        </span>
      ) : (
        <React.Fragment key={index}>{segment.text}</React.Fragment>
      )
    );
  };

  return (
    <main
      className={classNames(
        'min-h-screen',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        {variant === 'simple' && (
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
              {title}
            </h1>
            <p className="text-base sm:text-lg opacity-80 leading-relaxed">
              {renderText(description)}
            </p>
            {cta && (
              <Button
                as="a"
                href={cta.href}
                color="primary"
                size="lg"
                className="mt-6"
              >
                {cta.label}
                {cta.icon && <Icon name={cta.icon} className="ml-2" size={20} />}
              </Button>
            )}
          </div>
        )}

        {/* Detailed Variant with Image and Sections */}
        {variant === 'detailed' && (
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Header with optional image */}
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    {title}
                  </h1>
                  <p className="text-base sm:text-lg opacity-80 leading-relaxed">
                    {renderText(description)}
                  </p>
                </div>
                {image && (
                  <div className="relative aspect-square rounded-2xl overflow-hidden opacity-5">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Highlights Grid */}
            {highlights.length > 0 && (
              <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                    >
                      {item.icon && (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon name={item.icon} size={24} className="text-primary" />
                        </div>
                      )}
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base opacity-70">
                        {renderText(item.description)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Sections */}
            {sections.length > 0 && (
              <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
                {sections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {section.title}
                    </h2>
                    <div className="space-y-3 text-base sm:text-lg opacity-80 leading-relaxed">
                      {Array.isArray(section.content) ? (
                        section.content.map((paragraph, idx) => (
                          <p key={idx}>{renderText(paragraph)}</p>
                        ))
                      ) : (
                        <p>{renderText(section.content)}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {cta && (
              <div className="text-center">
                <Button
                  as="a"
                  href={cta.href}
                  color="primary"
                  size="lg"
                >
                  {cta.label}
                  {cta.icon && <Icon name={cta.icon} className="ml-2" size={20} />}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Timeline Variant */}
        {variant === 'timeline' && timeline.length > 0 && (
          <div className="space-y-12 sm:space-y-16">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {title}
              </h1>
              <p className="text-base sm:text-lg opacity-80 leading-relaxed">
                {renderText(description)}
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

              <div className="space-y-8 sm:space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-8 h-8 -translate-x-1/2 bg-primary rounded-full border-4 shadow-lg hidden sm:flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full opacity-20" />
                    </div>

                    {/* Content card - alternating sides */}
                    <div
                      className={classNames(
                        'sm:w-[calc(50%-2rem)]',
                        index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                      )}
                    >
                      <div className="p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        {item.year && (
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                            {item.year}
                          </span>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm sm:text-base opacity-70 font-medium mb-2">
                            {item.subtitle}
                          </p>
                        )}
                        {item.description && (
                          <p className="text-sm sm:text-base opacity-60">
                            {renderText(item.description)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {cta && (
              <div className="text-center">
                <Button
                  as="a"
                  href={cta.href}
                  color="primary"
                  size="lg"
                >
                  {cta.label}
                  {cta.icon && <Icon name={cta.icon} className="ml-2" size={20} />}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Custom children content */}
        {children && (
          <div className="max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-20">
            {children}
          </div>
        )}
      </div>
    </main>
  );
};

export default About;
