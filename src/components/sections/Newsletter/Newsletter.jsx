/**
 * Newsletter Component
 * Email subscription section with various layouts
 */

'use client';

import React, { useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Button } from '../../ui/Button';
import { Icon } from '../../../icons';

const Newsletter = ({
  children,
  layout = 'centered',
  className = '',
  config,
  ...props
}) => {
  const {
    title = 'Subscribe to our newsletter',
    description = 'Get the latest updates and news delivered to your inbox.',
    placeholder = 'Enter your email',
    buttonText = 'Subscribe',
    successMessage = 'Thanks for subscribing!',
    onSubmit,
    showIcon = true,
    backgroundColor = '',
  } = config || {};

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    if (onSubmit) {
      await onSubmit(email);
    }
    
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Composition mode
  if (children) {
    return (
      <section
        className={classNames(
          'newsletter py-12 md:py-16',
          backgroundColor || 'bg-muted/30',
          className
        )}
        {...props}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }

  // Layout variants
  const layouts = {
    centered: 'text-center',
    left: 'text-left',
    card: 'text-center bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm',
  };

  return (
    <section
      className={classNames(
        'newsletter py-12 md:py-16',
        backgroundColor || 'bg-muted/30',
        className
      )}
      {...props}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={classNames(layouts[layout] || layouts.centered)}>
          {/* Icon */}
          {showIcon && (
            <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-primary/10">
              <Icon name="mail" size={24} className="text-primary" />
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg opacity-70 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="sm:w-auto"
                >
                  {isLoading ? 'Subscribing...' : buttonText}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <Icon name="check" size={20} />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-xs opacity-60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
