/**
 * Custom hook to handle Intersection Observer API
 * Useful for lazy loading, infinite scroll, animations on scroll
 * 
 * @param {Function} callback - Function to call when intersection changes
 * @param {object} options - IntersectionObserver options
 * @returns {[Function, IntersectionObserverEntry]} - [setElement, entry]
 * 
 * @example
 * const [setElement, entry] = useIntersectionObserver(
 *   (entry) => console.log('Visible:', entry.isIntersecting),
 *   { threshold: 0.5 }
 * );
 * <div ref={setElement}>Content</div>
 */
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (callback, options) => {
  const [element, setElement] = useState(null);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
        setEntry(entry);
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [element, options, callback]);

  return [setElement, entry];
};
