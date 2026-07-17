# Chip Component

Interactive tag component with optional close button.

## Import

```javascript
import { Chip } from 'tektokit';
```

## Basic Usage

```jsx
<Chip>Default Chip</Chip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Chip content |
| `color` | `string` | `'neutral'` | Color: `neutral`, `primary`, `secondary`, `success`, `warning`, `danger` |
| `variant` | `string` | `'solid'` | Style: `solid`, `outline`, `soft` |
| `size` | `string` | `'md'` | Size: `xs`, `sm`, `md`, `lg` |
| `radius` | `string` | `'full'` | Border radius: `none`, `sm`, `md`, `lg`, `full` |
| `onClose` | `function` | - | Close button click handler |
| `disabled` | `boolean` | `false` | Disable interaction |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Chips

```jsx
<Chip>Basic Chip</Chip>
<Chip color="primary">Primary</Chip>
<Chip color="success">Success</Chip>
```

### With Close Button

```jsx
<Chip onClose={() => console.log('Closed')}>
  Closable Chip
</Chip>

<Chip color="primary" onClose={handleRemove}>
  Remove Me
</Chip>
```

### Sizes

```jsx
<Chip size="xs">Extra Small</Chip>
<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>
<Chip size="lg">Large</Chip>
```

### Variants

```jsx
<Chip variant="solid">Solid</Chip>
<Chip variant="outline">Outline</Chip>
<Chip variant="soft">Soft</Chip>
```

### Disabled

```jsx
<Chip disabled>Disabled Chip</Chip>
<Chip disabled onClose={handleClose}>
  Disabled with Close
</Chip>
```

### Tag List

```jsx
const tags = ['React', 'TypeScript', 'Tailwind'];

<div className="flex flex-wrap gap-2">
  {tags.map(tag => (
    <Chip key={tag} onClose={() => handleRemoveTag(tag)}>
      {tag}
    </Chip>
  ))}
</div>
```

### Filter Chips

```jsx
<div className="flex gap-2">
  <Chip
    color={activeFilter === 'all' ? 'primary' : 'neutral'}
    onClick={() => setActiveFilter('all')}
  >
    All
  </Chip>
  <Chip
    color={activeFilter === 'active' ? 'primary' : 'neutral'}
    onClick={() => setActiveFilter('active')}
  >
    Active
  </Chip>
  <Chip
    color={activeFilter === 'completed' ? 'primary' : 'neutral'}
    onClick={() => setActiveFilter('completed')}
  >
    Completed
  </Chip>
</div>
```

## Notes

- Chips are interactive by default when onClose is provided
- Use for tags, filters, and removable items
- Full radius is default for pill-shaped appearance
- Extends Badge component with close functionality
