/**
 * Stepper Component
 * Display progress through numbered steps
 */

'use client';

import React from 'react';
import { classNames } from '../../../utils/base/classNames';
import StepperItem from './components/StepperItem';

const Stepper = ({
  children,
  currentStep = 0,
  orientation = 'horizontal',
  className = '',
  config,
  ...props
}) => {
  const {
    steps = [],
    showNumbers = true,
    showConnector = true,
    stepClassName = '',
  } = config || {};

  const isHorizontal = orientation === 'horizontal';

  // Composition Mode - when children provided directly
  if (children) {
    const childArray = React.Children.toArray(children);

    return (
      <div
        className={classNames(
          'stepper',
          isHorizontal ? 'flex items-start' : 'flex flex-col',
          className
        )}
        {...props}
      >
        {React.Children.map(childArray, (child, index) => {
          if (!React.isValidElement(child)) return null;

          const isLast = index === childArray.length - 1;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return React.cloneElement(child, {
            index,
            isActive,
            isCompleted,
            isLast,
            showConnector: !isLast && showConnector,
            orientation,
          });
        })}
      </div>
    );
  }

  // Data-Driven Mode - when steps provided via config
  if (steps.length > 0) {
    return (
      <div
        className={classNames(
          'stepper',
          isHorizontal ? 'flex items-start' : 'flex flex-col',
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <StepperItem
              key={index}
              index={index}
              label={step.label}
              description={step.description}
              icon={step.icon}
              isActive={isActive}
              isCompleted={isCompleted}
              isLast={isLast}
              showNumbers={showNumbers}
              showConnector={!isLast && showConnector}
              orientation={orientation}
              className={stepClassName}
            />
          );
        })}
      </div>
    );
  }

  return null;
};

export default Stepper;
