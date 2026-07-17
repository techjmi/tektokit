# Button Component

Versatile button component with multiple variants, sizes, colors, and icon support.

## Import

```javascript
import { Button } from 'tektokit';
```

## Basic Usage

```jsx
<Button onClick={handleClick}>
  Click Me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'button'` | HTML element or component to render |
| `href` | `string` | - | URL for link buttons |
| `label` | `string` | - | Button text (alternative to children) |
| `children` | `ReactNode` | - | Button content |
| `size` | `string` | `'md'` | Size: `xs`, `sm`, `md`, `lg`, `xl` |
| `radius` | `string` | `'md'` | Border radius: `none`, `sm`, `md`, `lg`, `full` |
| `color` | `string` | `'neutral'` | Color: `neutral`, `primary`, `secondary`, `success`, `warning`, `danger` |
| `variant` | `string` | `'outline'` | Style: `solid`, `outline`, `ghost`, `soft` |
| `fullWidth` | `boolean` | `false` | Button takes full width of container |
| `disabled` | `boolean` | `false` | Disable button interaction |
| `icon` | `string` | - | Icon name from Icon component |
| `iconPosition` | `string` | `'left'` | Icon position: `left`, `right` |
| `iconSize` | `number` | - | Custom icon size in pixels |
| `trackClick` | `boolean` | `false` | Enable analytics tracking |
| `trackName` | `string` | - | Event name for analytics |
| `trackLocation` | `string` | - | Location identifier for analytics |
| `trackData` | `object` | `{}` | Additional analytics data |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Variants

```jsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
```

### Colors

```jsx
<Button color="neutral">Neutral</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
```

### Sizes

```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### With Icons

```jsx
<Button icon="plus" iconPosition="left">
  Add Item
</Button>

<Button icon="trash" iconPosition="right">
  Delete
</Button>

<Button icon="settings" iconSize={20}>
  Settings
</Button>
```

### As Link

```jsx
<Button as="a" href="/page">
  Go to Page
</Button>

<Button as="a" href="https://example.com" target="_blank">
  External Link
</Button>
```

### Full Width

```jsx
<Button fullWidth>
  Full Width Button
</Button>
```

### Disabled

```jsx
<Button disabled>
  Disabled Button
</Button>
```

### With Analytics Tracking

```jsx
<Button
  trackClick={true}
  trackName="cta_signup"
  trackLocation="homepage_hero"
  trackData={{ plan: 'premium' }}
>
  Sign Up Now
</Button>
```

### Combined Example

```jsx
<Button
  variant="solid"
  color="primary"
  size="lg"
  icon="arrow-right"
  iconPosition="right"
  fullWidth
  onClick={handleSubmit}
>
  Continue
</Button>
```

## Notes

- When using `as="a"`, the component renders an anchor tag with button styling
- Analytics tracking only works in production mode
- Icon names must match those available in the Icon component
- The `label` prop is an alternative to using children
