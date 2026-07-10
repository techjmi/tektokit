'use client';

/**
 * Window utility functions
 */

export const isBrowser = typeof window !== 'undefined';
export const isServer = typeof window === 'undefined';

export const getWindowUrl = () => isBrowser ? window.location.href : '';

export const navigateToExternal = (url, target = '_self') => {
  if (!isBrowser || !url) return;
  
  if (target === '_blank') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = url;
  }
};

export const reloadPage = () => {
  if (isBrowser) window.location.reload();
};

/**
 * Smoothly scroll to top of page
 * @param {Object} options - Scroll options
 * @param {string} options.behavior - 'smooth' or 'auto'
 * @param {number} options.duration - Animation duration in ms (for custom animation)
 * @param {Function} options.onComplete - Callback when scroll completes
 */
export const scrollToTop = ({ behavior = 'smooth', duration, onComplete } = {}) => {
  if (!isBrowser) return;

  // Use native smooth scroll if no custom duration
  if (!duration) {
    window.scrollTo({ top: 0, behavior });
    if (onComplete) setTimeout(onComplete, 500);
    return;
  }

  // Custom animation with duration
  const start = window.pageYOffset;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out-cubic)
    const easeOutCubic = (t) => (--t) * t * t + 1;
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    } else if (onComplete) {
      onComplete();
    }
  };

  requestAnimationFrame(scroll);
};

/**
 * Scroll to element
 * @param {string|HTMLElement} target - Element ID, selector, or element
 * @param {Object} options - Scroll options
 */
export const scrollToElement = (target, options = {}) => {
  if (!isBrowser) return;

  let element;

  // Handle element, ID, or selector
  if (typeof target === 'string') {
    // Try as ID first
    element = document.getElementById(target);
    // If not found, try as selector
    if (!element) {
      element = document.querySelector(target);
    }
  } else {
    element = target;
  }

  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    ...options,
  });
};

/**
 * Lock body scroll (useful for modals/drawers)
 * @returns {Function} cleanup function to unlock scroll
 */
export const lockBodyScroll = () => {
  if (!isBrowser) return () => {};
  
  const original = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  
  return () => {
    document.body.style.overflow = original;
  };
};

/**
 * Add event listener with SSR safety
 */
export const addWindowListener = (event, handler) => {
  if (!isBrowser) return () => {};

  window.addEventListener(event, handler);
  return () => window.removeEventListener(event, handler);
};

/**
 * Get current scroll progress (0-100)
 * @returns {number} Scroll progress percentage
 */
export const getScrollProgress = () => {
  if (!isBrowser) return 0;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const scrollableHeight = documentHeight - windowHeight;

  if (scrollableHeight === 0) return 0;

  return Math.min((scrollTop / scrollableHeight) * 100, 100);
};

/**
 * Check if page is scrolled beyond threshold
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} True if scrolled beyond threshold
 */
export const isScrolledBeyond = (threshold = 300) => {
  if (!isBrowser) return false;
  return window.pageYOffset > threshold;
};
