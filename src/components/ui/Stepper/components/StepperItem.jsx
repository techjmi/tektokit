/**
 * StepperItem Component
 * Individual step in a stepper
 */

import React from 'react';
import { classNames } from '../../../../utils/base/classNames';
import { Icon } from '../../../../icons';

const StepperItem = ({
  index = 0,
  label,
  description,
  icon,
  isActive = false,
  isCompleted = false,
  isLast = false,
  showNumbers = true,
  showConnector = true,
  orientation = 'horizontal',
  className = '',
  onClick,
  ...props
}) => {
  const isHorizontal = orientation === 'horizontal';
  const stepNumber = index + 1;

  const renderStepIcon = () => {
    if (icon) {
      return typeof icon === 'string' ? (
        <Icon name={icon} size={20} />
      ) : (
        icon
      );
    }

    if (isCompleted) {
      return <Icon name="check" size={20} />;
    }

    if (showNumbers) {
      return <span className="text-sm font-semibold">{stepNumber}</span>;
    }

    return null;
  };

  return (
    <div
      className={classNames(
        'stepper-item flex',
        isHorizontal ? 'flex-col items-center flex-1' : 'flex-row',
        className
      )}
      {...props}
    >
      {/* Step Circle + Connector */}
      <div className={classNames(
        'flex items-center',
        isHorizontal ? 'flex-col w-full' : 'flex-col mr-4'
      )}>
        {/* Step Circle */}
        <div
          className={classNames(
            'flex items-center justify-center rounded-full transition-all duration-200',
            isHorizontal ? 'w-10 h-10' : 'w-8 h-8',
            onClick && 'cursor-pointer',
            isCompleted && 'bg-primary text-white',
            isActive && !isCompleted && 'bg-primary text-white ring-4 ring-primary/20',
            !isActive && !isCompleted && 'bg-muted text-muted-foreground border-2 border-border'
          )}
          onClick={onClick}
        >
          {renderStepIcon()}
        </div>

        {/* Connector Line */}
        {showConnector && (
          <div
            className={classNames(
              'bg-border transition-all duration-200',
              isHorizontal ? 'h-0.5 w-full my-2' : 'w-0.5 h-12 my-2',
              isCompleted && 'bg-primary'
            )}
          />
        )}
      </div>

      {/* Label & Description */}
      <div className={classNames(
        'text-center',
        isHorizontal ? 'mt-2' : 'mt-0 flex-1',
        !isHorizontal && 'text-left'
      )}>
        {label && (
          <div
            className={classNames(
              'font-medium text-sm transition-colors',
              isActive && 'text-primary',
              isCompleted && 'text-foreground',
              !isActive && !isCompleted && 'text-muted-foreground'
            )}
          >
            {label}
          </div>
        )}
        {description && (
          <div className="text-xs text-muted-foreground mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperItem;
