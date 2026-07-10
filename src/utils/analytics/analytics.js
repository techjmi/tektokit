'use client';

/**
 * Analytics utility for tracking user interactions
 * Supports Google Analytics, GTM, Mixpanel, and custom services
 */

import { isBrowser } from '../browser/window';

const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';

/**
 * Check if tracking should be enabled
 */
const shouldTrack = () => {
  if (!isBrowser) return false;
  if (!isProduction) {
    // In development, just log to console
    return false;
  }
  return true;
};

/**
 * Wrapper for Google Analytics gtag
 */
const gtag = (...args) => {
  if (!shouldTrack() || !window.gtag) return;
  window.gtag(...args);
};

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  // Google Analytics
  gtag('event', eventName, eventParams);

  // Google Tag Manager
  if (isBrowser && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  // Mixpanel
  if (isBrowser && window.mixpanel) {
    window.mixpanel.track(eventName, eventParams);
  }

  // Development logging
  if (!isProduction && isBrowser) {
    console.log('[Analytics]', eventName, eventParams);
  }
};

/**
 * Track page view
 * @param {string} url - Page URL
 */
export const trackPageView = (url) => {
  if (!shouldTrack()) return;
  gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
    page_path: url,
  });
};

/**
 * Set user ID for tracking
 * @param {string} userId - User identifier
 */
export const setUserId = (userId) => {
  if (!shouldTrack()) return;
  gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID', {
    user_id: userId,
  });
};

/**
 * Track button click (used internally by Button component)
 * @param {string} buttonName - Button identifier
 * @param {string} location - Where the button is located
 * @param {object} additionalData - Any additional data
 */
export const trackButtonClick = (buttonName, location, additionalData = {}) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
    ...additionalData,
  });
};
