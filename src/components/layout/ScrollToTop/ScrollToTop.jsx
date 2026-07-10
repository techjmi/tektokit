/**
 * ScrollToTop Component
 * Floating button that scrolls to top of page
 * Shows/hides based on scroll position
 */

'use client';

import { useState, useEffect } from'react';
import Button from'../../ui/Button/Button';
import { CircularProgress } from'../../../svgs';
import { classNames } from'../../../utils/base/classNames';
import { scrollToTop, isScrolledBeyond, addWindowListener } from'../../../utils/browser/window';
import { SCROLL_TO_TOP_POSITIONS, SCROLL_TO_TOP_SIZES, SCROLL_TO_TOP_VARIANTS } from'./scrollToTopConstants';

const ScrollToTop = ({
  threshold = 300,
  position = 'bottom-right',
  size = 'md',
  variant = 'solid',
  showProgress = false,
  smooth = true,
  duration,
  className = '',
  config,
}) => {
  const {
    iconName = 'FiArrowUp',
    iconSize,
  } = config || {};
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShow(isScrolledBeyond(threshold));
      
      if (showProgress) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollableHeight = documentHeight - windowHeight;
        const currentProgress = scrollableHeight > 0 
          ? Math.min((scrollTop / scrollableHeight) * 100, 100) 
          : 0;
        setProgress(currentProgress);
      }
    };

    handleScroll(); // Initial check
    return addWindowListener('scroll', handleScroll);
  }, [threshold, showProgress]);

  const handleClick = () => {
    scrollToTop({ 
      behavior: smooth ?'smooth' :'auto',
      duration 
    });
  };

  if (!show) return null;

  const currentSize = SCROLL_TO_TOP_SIZES[size] || SCROLL_TO_TOP_SIZES.md;
  const finalIconSize = iconSize || currentSize.icon;

  return (
    <div className={classNames(
     'fixed z-50',
      SCROLL_TO_TOP_POSITIONS[position] || SCROLL_TO_TOP_POSITIONS['bottom-right']
    )}>
      {showProgress ? (
        // With circular progress
        <div className={classNames('relative', currentSize.progress)}>
          {/* Progress circle */}
          <CircularProgress
            progress={progress}
            strokeWidth={currentSize.stroke}
            className="absolute inset-0"
          />
          
          {/* Button */}
          <Button
            onClick={handleClick}
            icon={iconName}
            iconSize={finalIconSize}
            aria-label="Scroll to top"
            radius="full"
            className={classNames(
             'absolute inset-0 m-auto shadow-lg hover:scale-110',
              currentSize.button,
              SCROLL_TO_TOP_VARIANTS[variant] || SCROLL_TO_TOP_VARIANTS.solid,
              className
            )}
          />
        </div>
      ) : (
        // Simple button without progress
        <Button
          onClick={handleClick}
          icon={iconName}
          iconSize={finalIconSize}
          aria-label="Scroll to top"
          radius="full"
          className={classNames(
           'shadow-lg hover:scale-110',
            currentSize.button,
            SCROLL_TO_TOP_VARIANTS[variant] || SCROLL_TO_TOP_VARIANTS.solid,
            className
          )}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
