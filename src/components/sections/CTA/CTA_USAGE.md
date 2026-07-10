# CTA (Call-to-Action) Component

A flexible call-to-action section component with background image support and multiple layout variants.

## Features

- Config-based approach
- Background image with overlay
- 3 layout variants (centered, left, split)
- Primary and secondary CTA buttons
- Responsive and mobile-friendly
- Dark overlay with adjustable opacity

## Basic Usage

```jsx
import { CTA } from 'tektokit';

const ctaConfig = {
  title: 'Ready to Get Started?',
  description: 'Join thousands of developers building amazing products',
  primaryCta: {
    label: 'Start Free Trial',
    href: '/signup',
  },
  secondaryCta: {
    label: 'View Demo',
    href: '/demo',
  },
};

<CTA config={ctaConfig} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | - | Configuration object (required) |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `node` | - | Additional content |

## Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Main heading text |
| `subtitle` | `string` | - | Small text above title |
| `description` | `string` | - | Description below title |
| `primaryCta` | `object` | - | Primary button config |
| `secondaryCta` | `object` | - | Secondary button config |
| `backgroundImage` | `string` | - | Background image URL |
| `overlay` | `boolean` | `true` | Show dark overlay |
| `overlayOpacity` | `number` | `0.7` | Overlay opacity (0-1) |
| `variant` | `string` | `'centered'` | Layout variant |

## CTA Button Object

| Property | Type | Description |
|----------|------|-------------|
| `label` or `text` | `string` | Button text |
| `href` | `string` | Link URL (renders as `<a>`) |
| `onClick` | `function` | Click handler (renders as `<button>`) |

## Variants

### Centered (Default)

```jsx
const config = {
  variant: 'centered',
  title: 'Join Our Community',
  description: 'Connect with developers worldwide',
  primaryCta: { label: 'Sign Up', href: '/signup' },
};

<CTA config={config} />
```

### Left Aligned

```jsx
const config = {
  variant: 'left',
  title: 'Start Building Today',
  description: 'Everything you need in one place',
  primaryCta: { label: 'Get Started', href: '/start' },
};

<CTA config={config} />
```

### Split Layout

```jsx
const config = {
  variant: 'split',
  title: 'Transform Your Workflow',
  primaryCta: { label: 'Try Now', href: '/try' },
};

<CTA config={config} />
```

## With Background Image

```jsx
const config = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Special Offer',
  description: 'Get 50% off your first month',
  backgroundImage: '/images/cta-bg.jpg',
  overlay: true,
  overlayOpacity: 0.6,
  primaryCta: {
    label: 'Claim Offer',
    href: '/pricing',
  },
  secondaryCta: {
    label: 'Learn More',
    href: '/about',
  },
};

<CTA config={config} />
```

## Without Background

```jsx
const config = {
  title: 'Subscribe to Our Newsletter',
  description: 'Get weekly updates and insights',
  primaryCta: {
    label: 'Subscribe',
    onClick: () => console.log('Subscribe clicked'),
  },
};

<CTA config={config} />
```

## Custom Styling

```jsx
<CTA 
  config={config} 
  className="bg-gradient-to-r from-purple-500 to-pink-500" 
/>
```

## Button Integration

The CTA component uses the library's `Button` component with:
- Primary CTA: `variant="solid"` + `color="primary"` + `size="lg"`
- Secondary CTA: `variant="outline"` + custom styling for background images

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Accessible button labels
- High contrast text on background images

## Responsive Design

- Mobile-first approach
- Font sizes scale with breakpoints:
  - Mobile: `text-3xl`
  - Tablet: `text-4xl` 
  - Desktop: `text-5xl`
  - Large: `text-6xl`
- Buttons stack on mobile, inline on desktop

## Notes

- Background images use the `Image` component with overlay support
- All text content is optional
- Works with or without background images
- Buttons render as `<a>` if `href` provided, `<button>` if `onClick` provided
