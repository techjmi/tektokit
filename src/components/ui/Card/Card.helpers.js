/**
 * Card helper functions
 * Utility functions for Card component
 */

/**
 * Get responsive image based on device
 * Falls back to original image if no responsive versions available
 * 
 * @param {string|object} image - Image URL or responsive image object
 * @returns {string} Image URL
 */
export const getResponsiveImage = (image) => {
  if (typeof image ==='string') return image;
  
  if (typeof image ==='object' && image !== null) {
    // Check for responsive image object
    // Priority: mobile > tablet > desktop > original
    if (typeof window !=='undefined') {
      const width = window.innerWidth;
      
      if (width < 768 && image.mobile) return image.mobile;
      if (width < 1024 && image.tablet) return image.tablet;
      if (image.desktop) return image.desktop;
    }
    
    // Fallback to any available image
    return image.desktop || image.tablet || image.mobile || image.original ||'';
  }
  
  return'';
};

/**
 * Normalize badge data to consistent format
 * Accepts string or object, returns object
 * 
 * @param {string|object} badge - Badge data
 * @returns {object} Normalized badge object
 */
export const normalizeBadge = (badge) => {
  if (typeof badge ==='string') {
    return {
      label: badge,
      color:'neutral',
      size:'sm',
    };
  }
  
  return {
    label: badge.label ||'',
    value: badge.value || null,
    color: badge.color ||'neutral',
    size: badge.size ||'sm',
  };
};
