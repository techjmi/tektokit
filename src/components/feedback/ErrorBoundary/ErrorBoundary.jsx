/**
 * ErrorBoundary Component
 * See ERRORBOUNDARY_USAGE.md for detailed usage examples
 */

import React from'react';
import { isBrowser } from'../../../utils/browser/window';
import ErrorFallback from'./ErrorFallback';
import Button from'../../ui/Button/Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    const { onError, logErrors = true } = this.props;

    if (logErrors) {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Error Info:', errorInfo);
    }

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    if (onError && typeof onError ==='function') {
      onError(error, errorInfo);
    }
  }

  resetErrorBoundary = () => {
    const { onReset } = this.props;

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    if (onReset && typeof onReset ==='function') {
      onReset();
    }
  };

  render() {
    const {
      children,
      fallback,
      FallbackComponent,
      showDetails = false,
    } = this.props;

    if (this.state.hasError) {
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            resetError={this.resetErrorBoundary}
          />
        );
      }

      if (fallback) {
        return fallback;
      }

      return (
        <>
          <ErrorFallback resetError={this.resetErrorBoundary} />

          {showDetails && isBrowser && process.env.NODE_ENV ==='development' && this.state.error && (
            <div className="fixed bottom-4 right-4 max-w-md bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-50">
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-red-900 mb-2">
                    Development Error Details
                  </h3>
                  <details className="text-xs text-red-800">
                    <summary className="cursor-pointer font-medium mb-2">
                      {this.state.error.toString()}
                    </summary>
                    <pre className="mt-2 overflow-auto max-h-40 bg-red-100 p-2 rounded text-xs whitespace-pre-wrap">
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </details>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={this.resetErrorBoundary}
                    className="mt-3"
                  >
                    Try Again
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  color="danger"
                  icon="close"
                  onClick={() => this.setState({ error: null })}
                  aria-label="Close"
                />
              </div>
            </div>
          )}
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
