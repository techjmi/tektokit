# Window Utilities

Browser window and scroll utilities with SSR safety. All functions check for browser environment.

## Import

```javascript
import {
  isBrowser,
  isServer,
  scrollToTop,
  scrollToElement,
  getScrollProgress,
  isScrolledBeyond,
  navigateToExternal,
  lockBodyScroll,
} from 'tektokit';
```

## Environment Detection

### isBrowser

```javascript
import { isBrowser } from 'tektokit';

if (isBrowser) {
  // Browser-only code
  console.log(window.location.href);
}
```

### isServer

```javascript
import { isServer } from 'tektokit';

if (isServer) {
  // Server-only code
  console.log('Running on server');
}
```

## Scroll Utilities

### scrollToTop

Scroll to top of page with smooth animation.

```javascript
import { scrollToTop } from 'tektokit';

// Simple smooth scroll
scrollToTop();

// With callback
scrollToTop({
  onComplete: () => console.log('Scrolled to top!')
});

// Custom duration with easing
scrollToTop({
  duration: 1000,
  onComplete: () => console.log('Done!')
});

// Instant scroll
scrollToTop({ behavior: 'auto' });
```

**Parameters:**
- `behavior` - 'smooth' (default) or 'auto'
- `duration` - Custom animation duration in ms (uses ease-out-cubic)
- `onComplete` - Callback when scroll completes

### scrollToElement

Scroll to specific element on page.

```javascript
import { scrollToElement } from 'tektokit';

// By ID
scrollToElement('section-about');

// By selector
scrollToElement('.my-section');
scrollToElement('#hero');

// As element
const element = document.querySelector('.feature');
scrollToElement(element);

// With options
scrollToElement('#contact', { block: 'center' });
scrollToElement('#footer', { behavior: 'auto', block: 'end' });
```

**Parameters:**
- `target` - Element ID, CSS selector, or HTMLElement
- `options` - Scroll options (behavior, block, inline)

### getScrollProgress

Get current scroll progress as percentage (0-100).

```javascript
import { getScrollProgress } from 'tektokit';

const progress = getScrollProgress(); // e.g., 45.2

// Scroll progress bar
<div className="fixed top-0 left-0 right-0 h-1 bg-blue-500"
     style={{ width: `${getScrollProgress()}%` }} />

// Show element when 50% scrolled
{getScrollProgress() > 50 && <BackToTop />}
```

**Returns:** `number` - Scroll progress percentage (0-100)

### isScrolledBeyond

Check if page is scrolled beyond a threshold.

```javascript
import { isScrolledBeyond } from 'tektokit';

// Show "back to top" button after 300px
const showButton = isScrolledBeyond(300);

// Check if past hero section
const isPastHero = isScrolledBeyond(window.innerHeight);

// Custom threshold
const show = isScrolledBeyond(500);
```

**Parameters:**
- `threshold` - Scroll threshold in pixels (default: 300)

**Returns:** `boolean` - True if scrolled beyond threshold

## Navigation Utilities

### navigateToExternal

Navigate to external URL safely.

```javascript
import { navigateToExternal } from 'tektokit';

// Same tab
navigateToExternal('https://example.com');

// New tab (with security)
navigateToExternal('https://example.com', '_blank');
```

**Parameters:**
- `url` - URL to navigate to
- `target` - '_self' (default) or '_blank'

### getWindowUrl

Get current URL (SSR-safe).

```javascript
import { getWindowUrl } from 'tektokit';

const currentUrl = getWindowUrl(); // https://example.com/page
```

### reloadPage

Reload current page.

```javascript
import { reloadPage } from 'tektokit';

reloadPage();
```

## Body Scroll Lock

Lock/unlock body scroll (for modals, drawers).

```javascript
import { lockBodyScroll } from 'tektokit';

// Lock scroll and get unlock function
const unlock = lockBodyScroll();

// Later, unlock scroll
unlock();

// In React component
useEffect(() => {
  const unlock = lockBodyScroll();
  return unlock; // Cleanup on unmount
}, []);
```

## Event Listeners

### addWindowListener

Add event listener with automatic cleanup.

```javascript
import { addWindowListener } from 'tektokit';

// Returns cleanup function
const removeListener = addWindowListener('scroll', handleScroll);

// Later, remove listener
removeListener();

// In React
useEffect(() => {
  return addWindowListener('resize', handleResize);
}, []);
```

## Complete Examples

### Back to Top Button

```jsx
import { scrollToTop, isScrolledBeyond } from 'tektokit';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(isScrolledBeyond(300));
    return addWindowListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button onClick={() => scrollToTop({ duration: 500 })}>
      ↑ Back to Top
    </button>
  );
};
```

### Scroll Progress Bar

```jsx
import { getScrollProgress, addWindowListener } from 'tektokit';
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => setProgress(getScrollProgress());
    handleScroll(); // Initial
    return addWindowListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50"
         style={{ width: `${progress}%` }} />
  );
};
```
