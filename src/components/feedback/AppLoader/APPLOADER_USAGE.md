# AppLoader Component

Full-page loading screen with animated logo and progress bar.

## Import

```javascript
import { AppLoader } from 'tektokit';
```

## Basic Usage

```jsx
'use client';
import { AppLoader } from 'tektokit';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) {
    return <AppLoader text="My App" subtext="Loading..." />;
  }

  return <div>App Content</div>;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `'tektokit'` | Main heading text |
| `subtext` | `string` | `'Loading your experience...'` | Subtitle text |
| `logo` | `string` \| `ReactNode` | Default SVG | Custom logo (path or component) |
| `backgroundColor` | `string` | `'bg-gradient-to-br from-slate-900...'` | Tailwind background classes |
| `textColor` | `string` | `'text-white'` | Text color class |
| `accentColor` | `string` | `'text-blue-500'` | Accent color class |
| `logoSize` | `string` | `'w-32 h-32'` | Logo size classes |
| `showProgress` | `boolean` | `true` | Show progress bar |
| `duration` | `number` | `2000` | Display duration in milliseconds |
| `onComplete` | `function` | - | Callback when complete |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Custom Branding

```jsx
<AppLoader
  text="MyApp"
  subtext="Initializing your workspace..."
  logo="/my-logo.svg"
  backgroundColor="bg-gradient-to-br from-purple-900 via-pink-900 to-red-900"
  textColor="text-white"
/>
```

### Custom Logo Component

```jsx
<AppLoader
  text="Dashboard"
  logo={
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  }
/>
```

### With Callback

```jsx
const [isLoading, setIsLoading] = useState(true);

<AppLoader
  text="Loading"
  duration={2500}
  onComplete={() => {
    console.log('Loading complete!');
    setIsLoading(false);
  }}
/>
```

### Without Progress Bar

```jsx
<AppLoader
  text="Please Wait"
  showProgress={false}
/>
```

### Minimal Loading

```jsx
<AppLoader
  text="Loading"
  subtext=""
  showProgress={false}
  logoSize="w-24 h-24"
  duration={1500}
/>
```

### Light Theme

```jsx
<AppLoader
  text="My App"
  backgroundColor="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
  textColor="text-gray-900"
/>
```

### Custom Sizing

```jsx
<AppLoader
  logoSize="w-48 h-48"
  className="text-6xl"
/>
```

## Integration Examples

### Next.js App Router

```jsx
// app/layout.js
'use client';
import { AppLoader } from 'tektokit';
import { useState, useEffect } from 'react';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <body>
        {isLoading && <AppLoader />}
        {children}
      </body>
    </html>
  );
}
```

### With Data Fetching

```jsx
'use client';
import { AppLoader } from 'tektokit';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      await Promise.all([
        fetch('/api/user'),
        fetch('/api/settings'),
        fetch('/api/data')
      ]);
      setIsLoading(false);
    }
    loadData();
  }, []);

  if (isLoading) {
    return <AppLoader text="Dashboard" subtext="Loading your data..." />;
  }

  return <div>Dashboard Content</div>;
}
```

## Features

- **Animated Logo**: Smooth pulse and orbit animations
- **Progress Bar**: Visual loading progress indicator
- **Custom Branding**: Full control over logo, colors, and text
- **Responsive**: Works on all screen sizes
- **Smooth Transitions**: CSS-based animations
- **Minimum Duration**: Ensures loader is visible for a minimum time
- **Callback Support**: Run code when loading completes
- **Default Logo**: Beautiful SVG logo included out of the box

## Notes

- The loader automatically unmounts when `duration` completes
- Progress bar is simulated for visual effect (not tied to actual loading)
- Use `onComplete` callback for cleanup or navigation
- Default logo is a modern, animated tektokit brand mark
- Loader has `z-index: 9999` to appear above all content
- All animations are GPU-accelerated for smooth performance
