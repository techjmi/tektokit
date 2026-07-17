# Badge Component

Small label component for statuses, counts, and tags.

## Import

```javascript
import { Badge } from 'tektokit';
```

## Basic Usage

```jsx
<Badge>Default</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Badge content |
| `color` | `string` | `'neutral'` | Color: `neutral`, `primary`, `secondary`, `success`, `warning`, `danger` |
| `variant` | `string` | `'solid'` | Style: `solid`, `outline`, `soft` |
| `size` | `string` | `'md'` | Size: `xs`, `sm`, `md`, `lg` |
| `radius` | `string` | `'md'` | Border radius: `none`, `sm`, `md`, `lg`, `full` |
| `dot` | `boolean` | `false` | Show dot indicator |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Colors

```jsx
<Badge color="neutral">Neutral</Badge>
<Badge color="primary">Primary</Badge>
<Badge color="secondary">Secondary</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="danger">Danger</Badge>
```

### Variants

```jsx
<Badge variant="solid">Solid</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="soft">Soft</Badge>
```

### Sizes

```jsx
<Badge size="xs">Extra Small</Badge>
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### With Dot

```jsx
<Badge dot>Online</Badge>
<Badge dot color="success">Active</Badge>
<Badge dot color="danger">Offline</Badge>
```

### Status Badges

```jsx
<Badge color="success" variant="soft">Published</Badge>
<Badge color="warning" variant="soft">Pending</Badge>
<Badge color="danger" variant="soft">Rejected</Badge>
```

### Count Badges

```jsx
<Badge color="danger" radius="full">3</Badge>
<Badge color="primary" radius="full">99+</Badge>
```

### Full Radius

```jsx
<Badge radius="full">Pill Badge</Badge>
<Badge radius="full" color="primary">New</Badge>
```

## Notes

- Use solid variant for emphasis
- Use soft variant for subtle indicators
- Use outline variant for less prominent badges
- Dot badges are great for status indicators
