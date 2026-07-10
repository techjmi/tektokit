# ScrollToTop Component

Floating button that scrolls to top of page. Shows/hides based on scroll position with optional circular progress indicator.

## Import

```javascript
import { ScrollToTop } from 'tektokit';
```

## Basic Usage

```jsx
import { ScrollToTop } from 'tektokit';

// Simple - bottom right corner
<ScrollToTop />

// With progress indicator
<ScrollToTop showProgress={true} />

// Custom position
<ScrollToTop position="bottom-left" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | `number` | `300` | Scroll pixels before showing button |
| `position` | `string` | `'bottom-right'` | Button position |
| `size` | `string` | `'md'` | Button size |
| `variant` | `string` | `'solid'` | Button style variant |
| `showProgress` | `boolean` | `false` | Show circular progress indicator |
| `smooth` | `boolean` | `true` | Smooth scroll animation |
| `duration` | `number` | - | Custom scroll duration (ms) |
| `className` | `string` | `''` | Additional CSS classes |
| `iconName` | `string` | `'FiArrowUp'` | Icon name from react-icons |
| `iconSize` | `number` | Auto | Icon size in pixels |

## Positions

- `'bottom-right'` - Bottom right (default)
- `'bottom-left'` - Bottom left  
- `'top-right'` - Top right
- `'top-left'` - Top left

## Sizes

- `'sm'` - Small (40x40px button)
- `'md'` - Medium (48x48px button, default)
- `'lg'` - Large (56x56px button)

## Variants

- `'solid'` - Dark background (default)
- `'outline'` - Border with transparent background
- `'ghost'` - Semi-transparent background with blur
- `'primary'` - Blue primary color

## Examples

### Simple Button

```jsx
<ScrollToTop />
```

### With Progress Circle

```jsx
<ScrollToTop 
  showProgress={true}
  variant="primary"
/>
```

### Custom Position & Size

```jsx
<ScrollToTop 
  position="bottom-left"
  size="lg"
  threshold={500}
/>
```

### Custom Styling

```jsx
<ScrollToTop 
  variant="outline"
  className="border-blue-500 text-blue-500 hover:bg-blue-50"
/>
```

### Custom Icon

```jsx
<ScrollToTop 
  iconName="FiChevronsUp"
  iconSize={24}
/>
```

### Ghost with Progress

```jsx
<ScrollToTop 
  variant="ghost"
  showProgress={true}
  position="bottom-right"
  size="md"
/>
```

### Fast Scroll

```jsx
<ScrollToTop 
  duration={300}
  smooth={true}
/>
```

### Instant Scroll

```jsx
<ScrollToTop 
  smooth={false}
/>
```

### Custom Threshold

```jsx
// Show after scrolling 100vh
<ScrollToTop 
  threshold={window.innerHeight}
  showProgress={true}
/>
```

## Visual Examples

### Solid (Default)
```
┌────────────────────┐
│                    │
│                    │
│                    │
│              ┌───┐ │
│              │ ↑ │ │ ← Dark button
│              └───┘ │
└────────────────────┘
```

### With Progress
```
┌────────────────────┐
│                    │
│                    │
│                    │
│              ⟲     │
│              ╱ ↑ ╲ │ ← Circular progress
│              ╲   ╱ │
│               ⟳   │
└────────────────────┘
```

### Ghost Variant
```
┌────────────────────┐
│                    │
│                    │
│                    │
│              ┌───┐ │
│              │ ↑ │ │ ← Semi-transparent
│              └───┘ │   with blur
└────────────────────┘
```

## Features

- Auto show/hide based on scroll position
- Smooth scroll animation
- Circular progress indicator
- 4 position options
- 3 size variants
- 4 style variants
- Custom icons
- Accessible (aria-label)
- Responsive
- SSR-safe
- Dark mode support
- Hover scale animation

## Layout Integration

### With Fixed Footer
```jsx
// Adjust position to avoid footer
<ScrollToTop position="bottom-right" className="mb-20" />
```

### Multiple Buttons
```jsx
// Combine with WhatsApp button
<>
  <ScrollToTop position="bottom-right" />
  <WhatsAppButton 
    phoneNumber="+1234567890"
    position="bottom-left"
  />
</>
```

## Notes

- Button appears when scrolled past `threshold` pixels
- Progress shows scroll percentage from 0-100%
- Uses library's scroll utilities (`scrollToTop`, `isScrolledBeyond`)
- Auto-hides in SSR (server-side)
- Cleanup on unmount (no memory leaks)
