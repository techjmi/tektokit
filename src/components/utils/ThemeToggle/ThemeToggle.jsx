/**
 * ThemeToggle - Dark/Light mode toggle component
 * Works with Next.js themes or custom theme implementations
 */

'use client';

import { useState, useEffect } from'react';
import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';

const ThemeToggle = ({
  variant = 'icon',
  size = 'md',
  className = '',
  config,
  ...rest
}) => {
  const {
    storageKey = 'theme',
    onChange,
  } = config || {};
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(storageKey) ||'light';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ?'dark' :'light';
    const initialTheme = savedTheme ==='system' ? systemTheme : savedTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme ==='dark');
  }, [storageKey]);

  const toggleTheme = () => {
    const newTheme = theme ==='light' ?'dark' :'light';
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
    document.documentElement.classList.toggle('dark', newTheme ==='dark');
    
    if (onChange) {
      onChange(newTheme);
    }
  };

  if (!mounted) {
    return (
      <div className={classNames(
       'animate-pulse rounded-full',
        size ==='sm' ?'w-8 h-8' : size ==='lg' ?'w-12 h-12' :'w-10 h-10',
        className
      )} />
    );
  }

  const sizeClasses = {
    sm:'w-8 h-8 text-sm',
    md:'w-10 h-10 text-base',
    lg:'w-12 h-12 text-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  if (variant ==='switch') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={`Switch to ${theme ==='light' ?'dark' :'light'} mode`}
        className={classNames(
         'relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          theme ==='dark' ?'' :'',
          size ==='sm' ?'h-6 w-11' : size ==='lg' ?'h-8 w-14' :'h-7 w-12',
          className
        )}
      >
        <span
          className={classNames(
           'inline-block transform rounded-full  shadow-lg transition-transform',
            theme ==='dark' ?'translate-x-6' :'translate-x-1',
            size ==='sm' ?'h-4 w-4' : size ==='lg' ?'h-6 w-6' :'h-5 w-5'
          )}
        >
          <Icon
            name={theme ==='dark' ?'FiMoon' :'FiSun'}
            size={size ==='sm' ? 12 : size ==='lg' ? 18 : 16}
            className=""
          />
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme ==='light' ?'dark' :'light'} mode`}
      className={classNames(
       'inline-flex items-center justify-center rounded-lg border hover: dark:hover: transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        sizeClasses[size],
        className
      )}
    >
      <Icon
        name={theme ==='dark' ?'FiMoon' :'FiSun'}
        size={iconSizes[size]}
        className="transition-transform hover:rotate-12"
      />
    </button>
  );
};

export default ThemeToggle;
