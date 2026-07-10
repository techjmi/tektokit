/**
 * ErrorFallback - Default fallback UI for ErrorBoundary
 */

import React from'react';
import EmptyState from'../EmptyState/EmptyState';
import Button from'../../ui/Button/Button';

const ErrorFallback = ({ resetError }) => {
  return (
    <EmptyState
      icon="alert"
      heading="Something went wrong"
      description="We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists."
      action={
        <Button onClick={resetError} color="primary">
          Try Again
        </Button>
      }
    />
  );
};

export default ErrorFallback;
