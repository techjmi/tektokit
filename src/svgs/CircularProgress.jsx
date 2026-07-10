/**
 * Circular Progress SVG
 * Circular progress indicator with percentage
 */

import React from 'react';

const CircularProgress = ({ 
  progress = 0, 
  strokeWidth = 3,
  className = '',
  progressColor = 'text-blue-600',
  backgroundColor = 'text-gray-200 dark:text-gray-700',
  ...props 
}) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg 
      className={className}
      viewBox="0 0 100 100"
      {...props}
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className={backgroundColor}
        transform="rotate(-90 50 50)"
      />
      
      {/* Progress circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={`${progressColor} transition-all duration-300`}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
};

export default CircularProgress;
