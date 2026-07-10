# ErrorBoundary Component

React error boundary component for gracefully handling component errors.

## Import

```javascript
import { ErrorBoundary } from 'tektokit';
```

## Basic Usage

```jsx
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Components to wrap with error boundary |
| `fallback` | `ReactNode` | - | Fallback UI to show on error |
| `FallbackComponent` | `Component` | - | Custom fallback component |
| `onError` | `function` | - | Error callback `(error, errorInfo) => void` |
| `onReset` | `function` | - | Reset callback |
| `logErrors` | `boolean` | `true` | Log errors to console |
| `showDetails` | `boolean` | `false` | Show error details in development |

## Examples

### Basic Error Boundary

```jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### With Custom Fallback

```jsx
<ErrorBoundary
  fallback={
    <div className="text-center py-12">
      <h2>Something went wrong</h2>
      <p>Please refresh the page</p>
    </div>
  }
>
  <YourComponent />
</ErrorBoundary>
```

### With Custom Fallback Component

```jsx
function ErrorFallback({ error, resetError }) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button onClick={resetError} className="btn-primary">
        Try Again
      </button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

### With Error Logging

```jsx
function logErrorToService(error, errorInfo) {
  console.error('Error:', error);
  console.error('Component Stack:', errorInfo.componentStack);
  
  // Send to your error tracking service
  // e.g., Sentry, New Relic, etc.
}

<ErrorBoundary
  onError={logErrorToService}
  logErrors={true}
>
  <YourComponent />
</ErrorBoundary>
```

### With Development Details

```jsx
<ErrorBoundary showDetails={true}>
  <YourComponent />
</ErrorBoundary>
```

### Multiple Error Boundaries

```jsx
<ErrorBoundary>
  <Header />
  
  <ErrorBoundary
    fallback={<div>Failed to load sidebar</div>}
  >
    <Sidebar />
  </ErrorBoundary>
  
  <ErrorBoundary
    FallbackComponent={MainContentError}
  >
    <MainContent />
  </ErrorBoundary>
  
  <Footer />
</ErrorBoundary>
```

### With Reset Handler

```jsx
function App() {
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(prev => prev + 1);
  };

  return (
    <ErrorBoundary
      key={key}
      onReset={handleReset}
      FallbackComponent={ErrorFallback}
    >
      <YourComponent />
    </ErrorBoundary>
  );
}
```

### Page Level Error Boundary

```jsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ErrorBoundary>
          <Header />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### Route Level Error Boundaries

```jsx
function Dashboard() {
  return (
    <ErrorBoundary
      fallback={<div>Dashboard failed to load</div>}
      onError={(error) => {
        console.error('Dashboard error:', error);
      }}
    >
      <DashboardContent />
    </ErrorBoundary>
  );
}
```

### With EmptyState Component

```jsx
import { ErrorBoundary, EmptyState, Button } from 'tektokit';

function ErrorFallback({ resetError }) {
  return (
    <EmptyState
      icon="alert"
      heading="Something went wrong"
      description="An error occurred while loading this section."
      action={
        <Button onClick={resetError}>
          Try Again
        </Button>
      }
    />
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <YourComponent />
</ErrorBoundary>
```

### Integration with Error Tracking

```jsx
import * as Sentry from '@sentry/react';

<ErrorBoundary
  onError={(error, errorInfo) => {
    Sentry.captureException(error, {
      contexts: {
        react: {
          componentStack: errorInfo.componentStack,
        },
      },
    });
  }}
>
  <App />
</ErrorBoundary>
```

## Main Entry Point Setup

### Next.js App Router

```jsx
// app/layout.js
import { ErrorBoundary } from 'tektokit';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary showDetails={true}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### Next.js with Error Tracking

```jsx
// app/layout.js
import { ErrorBoundary } from 'tektokit';

function reportError(error, errorInfo) {
  if (typeof window !== 'undefined' && window.newrelic) {
    window.newrelic.noticeError(error, {
      componentStack: errorInfo?.componentStack,
    });
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary
          onError={reportError}
          showDetails={process.env.NODE_ENV === 'development'}
        >
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### React App (Vite/CRA)

```jsx
// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'tektokit';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary showDetails={true}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

### With Provider Pattern

```jsx
// components/Providers.jsx
'use client';
import { ErrorBoundary } from 'tektokit';

export default function Providers({ children }) {
  return (
    <ErrorBoundary
      showDetails={process.env.NODE_ENV === 'development'}
      onError={(error, errorInfo) => {
        console.error('App Error:', error, errorInfo);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

// app/layout.js
import Providers from '@/components/Providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Multiple Boundaries Strategy

```jsx
// app/layout.js - Root boundary
import { ErrorBoundary } from 'tektokit';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ErrorBoundary showDetails={true}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}

// app/dashboard/layout.js - Section boundary
export default function DashboardLayout({ children }) {
  return (
    <ErrorBoundary
      fallback={<div>Dashboard error. Please refresh.</div>}
    >
      {children}
    </ErrorBoundary>
  );
}
```

## Notes

- ErrorBoundary only catches errors in React component tree
- Does not catch errors in event handlers, async code, or SSR
- Use multiple boundaries to isolate errors in different parts of the app
- Development mode shows detailed error information when showDetails is true
- Always provide a fallback UI for better user experience
- FallbackComponent receives error, errorInfo, and resetError as props
- Default fallback uses EmptyState component from tektokit
- Development error panel uses Button component from tektokit
