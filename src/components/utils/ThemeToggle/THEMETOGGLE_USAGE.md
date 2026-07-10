# ThemeToggle Component

Dark/light mode toggle component with localStorage persistence and system theme detection.

## Features

- Two variants: Icon button or Switch
- LocalStorage persistence
- System theme detection
- SSR-safe with loading state
- 3 size options
- Smooth animations
- Optional onChange callback
- Custom storage key

## Basic Usage

```jsx
import { ThemeToggle } from 'tektokit';

<ThemeToggle />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `string` | `'icon'` | Toggle style (`'icon'` or `'switch'`) |
| `size` | `string` | `'md'` | Component size |
| `storageKey` | `string` | `'theme'` | localStorage key |
| `onChange` | `function` | - | Callback when theme changes |
| `className` | `string` | `''` | Additional CSS classes |

## Variants

### Icon Button (Default)

```jsx
<ThemeToggle variant="icon" />
```

### Switch

```jsx
<ThemeToggle variant="switch" />
```

## Size Options

| Size | Icon Button | Switch |
|------|-------------|--------|
| `'sm'` | `32px` | `44px × 24px` |
| `'md'` | `40px` | `48px × 28px` |
| `'lg'` | `48px` | `56px × 32px` |

## Examples

### Default Icon Button

```jsx
<ThemeToggle />
```

### Switch Variant

```jsx
<ThemeToggle variant="switch" />
```

### Different Sizes

```jsx
// Small icon
<ThemeToggle size="sm" />

// Medium (default)
<ThemeToggle size="md" />

// Large
<ThemeToggle size="lg" />
```

### With Callback

```jsx
const handleThemeChange = (newTheme) => {
  console.log('Theme changed to:', newTheme);
  // Track analytics
  // Update app state
};

<ThemeToggle onChange={handleThemeChange} />
```

### Custom Storage Key

```jsx
<ThemeToggle storageKey="app-theme" />
```

### In Header/Navbar

```jsx
<header className="flex items-center justify-between p-4">
  <Logo />
  <nav className="flex items-center gap-4">
    <NavLinks />
    <ThemeToggle variant="icon" size="md" />
  </nav>
</header>
```

### With Switch in Settings

```jsx
<div className="settings-item">
  <div>
    <h3>Dark Mode</h3>
    <p>Toggle dark/light theme</p>
  </div>
  <ThemeToggle variant="switch" size="lg" />
</div>
```

## How It Works

### Theme Detection Priority

1. **LocalStorage**: Checks for saved theme preference
2. **System**: Falls back to system preference (`prefers-color-scheme`)
3. **Default**: Falls back to `'light'`

### Theme Application

The component toggles the `dark` class on `<html>`:

```html
<!-- Light mode -->
<html>...</html>

<!-- Dark mode -->
<html class="dark">...</html>
```

### Tailwind Configuration

Ensure your `tailwind.config.js` has:

```js
module.exports = {
  darkMode: 'class', // Important!
  // ... rest of config
}
```

## SSR Safety

The component is SSR-safe:
- Shows a loading placeholder during SSR
- Reads theme after component mounts
- Prevents flash of wrong theme

Loading state:
```jsx
// Shows gray pulsing circle while loading
<div className="animate-pulse rounded-full bg-gray-200" />
```

## Icons

- **Light mode**: Sun icon (`FiSun`)
- **Dark mode**: Moon icon (`FiMoon`)
- Smooth rotation animation on hover

## Styling

### Icon Button Variant
- Border
- Hover background color
- Focus ring
- Rounded corners

### Switch Variant
- Track background changes with theme
- Sliding circle with icon inside
- Smooth transitions

## Persistence

Theme is saved to localStorage:

```js
localStorage.setItem('theme', 'dark');
// or
localStorage.setItem('theme', 'light');
```

## Integration Examples

### Next.js App Router

```jsx
// app/layout.jsx
import { ThemeToggle } from 'tektokit';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <header>
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
```

### Next.js Pages Router

```jsx
// components/Layout.jsx
import { ThemeToggle } from 'tektokit';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <ThemeToggle variant="switch" />
      </header>
      <main>{children}</main>
    </>
  );
}
```

### React SPA

```jsx
// App.jsx
import { ThemeToggle } from 'tektokit';

function App() {
  return (
    <div className="app">
      <nav>
        <ThemeToggle />
      </nav>
      <Routes>...</Routes>
    </div>
  );
}
```

## Accessibility

- Proper `aria-label`: "Switch to dark/light mode"
- Keyboard accessible (tab + enter/space)
- Focus ring on keyboard navigation
- Visual feedback on state change

## Custom Styling

```jsx
// Custom colors
<ThemeToggle className="border-purple-500 hover:bg-purple-100" />

// Custom size
<ThemeToggle className="w-14 h-14" />
```

## Troubleshooting

### Flash of Wrong Theme

Add `suppressHydrationWarning` to `<html>`:

```jsx
<html suppressHydrationWarning>
```

### Theme Not Persisting

Check localStorage is available and not blocked.

### Icons Not Showing

Ensure `react-icons` is installed:

```bash
npm install react-icons
```

## Notes

- Requires `darkMode: 'class'` in Tailwind config
- Uses localStorage (won't work in private browsing mode)
- SSR-safe with loading state
- Smooth transitions between themes
- System theme detection on first load
