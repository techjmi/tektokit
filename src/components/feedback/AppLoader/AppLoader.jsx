/**
 * AppLoader - Full-page application loading screen
 * Displays during initial app load with animated logo and custom text
 */
'use client';

import { useEffect, useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import './AppLoader.css';

const AppLoader = ({
  text = 'tektokit',
  subtext = 'Loading your experience...',
  logo,
  backgroundColor = 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  textColor = 'text-white',
  accentColor = 'text-blue-500',
  logoSize = 'w-32 h-32',
  showProgress = true,
  duration = 2000,
  onComplete,
  className = '',
  ...props
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  if (isComplete) return null;

  return (
    <div
      className={classNames(
        'fixed inset-0 z-[9999] flex items-center justify-center',
        backgroundColor,
        className
      )}
      {...props}
    >
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div
            className={classNames(
              'relative',
              logoSize,
              'animate-loader-pulse'
            )}
          >
            {logo ? (
              typeof logo === 'string' ? (
                <img src={logo} alt="Loading" className="w-full h-full" />
              ) : (
                logo
              )
            ) : (
              <DefaultLogo />
            )}
            
            {/* Spinning Orbit */}
            <div className="absolute inset-0 animate-loader-spin">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1
            className={classNames(
              'text-4xl md:text-5xl font-bold tracking-tight',
              textColor,
              'animate-loader-text'
            )}
          >
            {text}
          </h1>
          
          {subtext && (
            <p
              className={classNames(
                'text-lg md:text-xl opacity-70',
                textColor,
                'animate-loader-subtext'
              )}
            >
              {subtext}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="mt-8 w-64 mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className={classNames(
                  'h-full rounded-full transition-all duration-300',
                  'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                )}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <p className={classNames('text-xs mt-2 opacity-50', textColor)}>
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-loader-dot-1" />
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-loader-dot-2" />
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-loader-dot-3" />
        </div>
      </div>
    </div>
  );
};

const DefaultLogo = () => (
  <img src="/svg/tektokit-logo.svg" alt="tektokit" className="w-full h-full" />
);

export default AppLoader;
