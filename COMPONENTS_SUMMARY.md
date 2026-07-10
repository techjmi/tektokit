# tektokit Component Library - Summary

Complete list of all components in the tektokit UI library.

## Components

### Core UI Components

1. **Avatar** - Profile pictures with initials fallback and status indicators
2. **Button** - Versatile button with variants, sizes, colors, and icons
   - **CancelButton** - Reusable cancel button (variant)
   - **DeleteButton** - Reusable delete button with confirmation (variant)
   - **LogoutButton** - Reusable logout button with confirmation (variant)
3. **Badge** - Small label for statuses, counts, and tags
4. **Chip** - Interactive tag with optional close button
5. **Divider** - Visual separator (horizontal/vertical)

### Layout Components

6. **Card** - Flexible card container with composition and data-driven patterns
7. **Modal** - Dialog component with backdrop
8. **Drawer** - Slide-out panel from any direction
9. **ConfirmDialog** - Convenience wrapper for yes/no confirmations

### Navigation Components

10. **Dropdown** - Positioned menu with items and dividers
11. **Breadcrumbs** - Navigation path component

### Feedback Components

12. **Tooltip** - Contextual information on hover
13. **EmptyState** - Generic empty/error state display
14. **ErrorBoundary** - React error boundary with fallback UI

### Utility Components

15. **JsonLd** - Structured data (JSON-LD) component for SEO
16. **Image** - Optimized image with fallback and lazy loading
17. **Accordion** - Collapsible sections for FAQs and content
18. **Carousel** - Image carousel/slider using Swiper
19. **VideoPlayer** - Video player with custom controls and overlays
20. **VideoSwiper** - Video carousel using Swiper and VideoPlayer
21. **Analytics** - Event tracking utilities

### Page Sections

22. **Hero1** - Simple hero with background image and CTA
23. **Hero2** - Carousel-based hero with multiple slides
24. **Hero3** - Video background hero
25. **Hero4** - Split layout hero (image + content side by side)
26. **Hero5** - Minimal centered hero for clean designs
27. **Hero6** - Full height hero with scroll indicator
28. **Footer** - Config-based footer with sections, socials, contact, and legal links

## Utilities

### SEO & Metadata

- **SEO Utilities** (`utils/seo.js`) - Meta tags, Open Graph, Twitter Cards
  - `createSEOConfig()` - Create site-wide SEO configuration
  - `buildSeo()` - Generate page-specific metadata

- **JSON-LD Schemas** (`utils/jsonld.js`) - Structured data generators
  - `createOrganizationSchema()` - Company/organization schema
  - `createWebSiteSchema()` - Website schema
  - `createArticleSchema()` - Blog post/article schema
  - `createProductSchema()` - E-commerce product schema
  - `createBreadcrumbSchema()` - Navigation breadcrumbs
  - `createFAQSchema()` - FAQ page schema
  - `createPersonSchema()` - Person/author schema
  - `createVideoSchema()` - Video content schema
  - `createCourseSchema()` - Educational course schema
  - `createWebPageSchema()` - Generic webpage schema

### Other Utilities

- **Clipboard** (`utils/clipboard.js`) - Browser clipboard operations
- **Analytics** (`utils/analytics.js`) - Event tracking
- **Format** (`utils/format.js`) - Number and date formatting
- **Text Formatting** (`utils/textFormatting.js`) - Text transformations
- **Window** (`utils/window.js`) - SSR-safe browser checks
- **Keyboard** (`utils/keyboard.js`) - Keyboard event helpers
- **Type Checking** (`utils/type.js`) - Runtime type validation
- **Class Names** (`utils/classNames.js`) - Conditional class merging

## Documentation

### Component Documentation

Each component has a dedicated markdown file in its directory:

- `AVATAR_USAGE.md`
- `BUTTON_USAGE.md`
- `BADGE_USAGE.md`
- `CHIP_USAGE.md`
- `CARD_USAGE.md`
- `DIVIDER_USAGE.md`
- `MODAL_USAGE.md`
- `DRAWER_USAGE.md`
- `DROPDOWN_USAGE.md`
- `BREADCRUMBS_USAGE.md`
- `TOOLTIP_USAGE.md`
- `EMPTYSTATE_USAGE.md`
- `ERRORBOUNDARY_USAGE.md`
- `LOGOUTBUTTON_USAGE.md`
- `DELETEBUTTON_USAGE.md`
- `CANCELBUTTON_USAGE.md`
- `IMAGE_USAGE.md`
- `ACCORDION_USAGE.md`
- `CAROUSEL_USAGE.md`
- `VIDEOPLAYER_USAGE.md`
- `VIDEOSWIPER_USAGE.md`

### Utility Documentation

Utility documentation is in `src/utils/docs/`:

- **`seo.md`** - Complete SEO guide (createSEOConfig, buildSeo)
- **`jsonld.md`** - JSON-LD schemas guide (10+ schema types)
- **`CLIPBOARD_USAGE.md`** - Clipboard utilities guide

### Complete Guides

- **`SEO_GUIDE.md`** - Complete SEO implementation guide (root level)

## Import Examples

```javascript
// Individual imports
import { Button, Badge, Card } from 'tektokit';

// All components
import * as tektokit from 'tektokit';

// Sub-components
import { Card, CardHeader, CardBody, CardFooter } from 'tektokit';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'tektokit';
import { Dropdown, DropdownItem, DropdownDivider } from 'tektokit';
```

## Main Entry Point Setup

### Next.js App Router

```jsx
import { ErrorBoundary } from 'tektokit';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ErrorBoundary showDetails={true}>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

### React App

```jsx
import { ErrorBoundary } from 'tektokit';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary showDetails={true}>
    <App />
  </ErrorBoundary>
);
```

## Features

- SSR-safe components
- TypeScript support (future)
- Tailwind CSS based styling
- Analytics tracking integration
- Accessibility (ARIA) support
- Composition and data-driven patterns
- Flexible and customizable
- Zero external CSS dependencies
- Professional documentation
- Production-ready

## Package Name

**tektokit** - Independent UI component library
