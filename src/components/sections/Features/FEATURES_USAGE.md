# Features Component

A feature highlight section component for showcasing product features, benefits, or services.

## Features

- Config-based approach
- Grid or card layout
- Icon support (string or custom JSX)
- 2, 3, or 4 column layouts
- Optional "Learn more" links
- Responsive and mobile-friendly
- Hover effects on cards

## Basic Usage

```jsx
import { Features } from 'tektokit';

const featuresConfig = {
  title: 'Why Choose Us',
  features: [
    {
      icon: 'FiZap',
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance',
    },
    {
      icon: 'FiShield',
      title: 'Secure',
      description: 'Enterprise-grade security',
    },
    {
      icon: 'FiUsers',
      title: 'Collaborative',
      description: 'Work together seamlessly',
    },
  ],
};

<Features config={featuresConfig} />
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
| `title` | `string` | - | Section title |
| `subtitle` | `string` | - | Section subtitle (above title) |
| `description` | `string` | - | Section description (below title) |
| `features` | `array` | `[]` | Array of feature items |
| `columns` | `number` | `3` | Number of columns (2, 3, or 4) |
| `layout` | `string` | `'grid'` | Layout type (`'grid'` or `'card'`) |

## Feature Item Object

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string` or `node` | Icon name (from react-icons) or custom JSX |
| `title` | `string` | Feature title |
| `description` | `string` | Feature description |
| `link` | `object` | Optional link object `{ href, label }` |

## Examples

### Three Columns (Default)

```jsx
const config = {
  title: 'Our Features',
  subtitle: 'What we offer',
  columns: 3,
  features: [
    {
      icon: 'FiCpu',
      title: 'High Performance',
      description: 'Built for speed',
    },
    {
      icon: 'FiLock',
      title: 'Secure by Default',
      description: 'Security first approach',
    },
    {
      icon: 'FiCode',
      title: 'Developer Friendly',
      description: 'Clean and simple APIs',
    },
  ],
};

<Features config={config} />
```

### Two Columns

```jsx
const config = {
  title: 'Core Benefits',
  columns: 2,
  features: [
    {
      icon: 'FiTrendingUp',
      title: 'Grow Your Business',
      description: 'Scale effortlessly as you grow',
    },
    {
      icon: 'FiDollarSign',
      title: 'Save Money',
      description: 'Reduce costs by up to 50%',
    },
  ],
};

<Features config={config} />
```

### Four Columns

```jsx
const config = {
  columns: 4,
  features: [
    { icon: 'FiCloud', title: 'Cloud Native', description: 'Deploy anywhere' },
    { icon: 'FiGlobe', title: 'Global CDN', description: 'Fast worldwide' },
    { icon: 'FiDatabase', title: 'Auto Backup', description: 'Never lose data' },
    { icon: 'FiActivity', title: 'Real-time', description: 'Live updates' },
  ],
};

<Features config={config} />
```

### Card Layout with Links

```jsx
const config = {
  title: 'Explore Our Services',
  layout: 'card',
  features: [
    {
      icon: 'FiPackage',
      title: 'Product Management',
      description: 'Manage products efficiently',
      link: {
        href: '/products',
        label: 'Learn more',
      },
    },
    {
      icon: 'FiBarChart',
      title: 'Analytics',
      description: 'Track your performance',
      link: {
        href: '/analytics',
        label: 'View details',
      },
    },
  ],
};

<Features config={config} />
```

### Custom Icon (JSX)

```jsx
const config = {
  features: [
    {
      icon: (
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>
      ),
      title: 'Rocket Fast',
      description: 'Launch in seconds',
    },
  ],
};

<Features config={config} />
```

## Layout Types

### Grid Layout (Default)
Clean grid with no borders, hover effects on icons.

```jsx
<Features config={{ layout: 'grid', features: [...] }} />
```

### Card Layout
Features displayed in bordered cards with shadow on hover.

```jsx
<Features config={{ layout: 'card', features: [...] }} />
```

## Icon Handling

The component accepts icons in two ways:

1. **String (Icon Name)**: Uses the `Icon` component from the library
   ```jsx
   icon: 'FiZap'
   ```

2. **Custom JSX**: Render any custom icon or element
   ```jsx
   icon: <MyCustomIcon />
   ```

## Responsive Behavior

- **Mobile**: Single column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 or 4 columns (based on config)

## Styling

- Icons have hover effect: `bg-primary/10` → `bg-primary/20`
- Card layout adds border and hover shadow
- Links styled with primary color and underline on hover

## Accessibility

- Semantic HTML structure
- Icon containers have proper sizing
- Links have arrow indicators
- Keyboard navigation support

## Notes

- All config properties are optional except `features`
- Section header only shows if title/subtitle/description provided
- Icons are displayed in a colored circular background
- Works seamlessly with the library's Icon component
