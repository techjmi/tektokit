# Tooltip Component

Contextual information popup on hover.

## Import

```javascript
import { Tooltip } from 'tektokit';
```

## Basic Usage

```jsx
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Trigger element (required) |
| `content` | `string` or `ReactNode` | - | Tooltip content (required) |
| `position` | `string` | `'top'` | Position: `top`, `bottom`, `left`, `right` |
| `delay` | `number` | `200` | Show delay in milliseconds |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Tooltip

```jsx
<Tooltip content="This is helpful information">
  <Button>Hover me</Button>
</Tooltip>
```

### Different Positions

```jsx
<Tooltip content="Top tooltip" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <Button>Right</Button>
</Tooltip>
```

### Custom Delay

```jsx
<Tooltip content="Fast tooltip" delay={0}>
  <Button>Instant</Button>
</Tooltip>

<Tooltip content="Slow tooltip" delay={500}>
  <Button>Delayed</Button>
</Tooltip>
```

### With Icon Button

```jsx
<Tooltip content="Delete item">
  <Button variant="ghost" icon="trash" />
</Tooltip>

<Tooltip content="Edit">
  <Button variant="ghost" icon="edit" />
</Tooltip>
```

### Rich Content

```jsx
<Tooltip
  content={
    <div>
      <strong>Pro Tip</strong>
      <p>Press Ctrl+S to save</p>
    </div>
  }
>
  <Button icon="info" variant="ghost" />
</Tooltip>
```

### Long Text

```jsx
<Tooltip content="This is a very long tooltip text that provides detailed information about the feature">
  <span className="text-blue-600 underline cursor-help">
    What's this?
  </span>
</Tooltip>
```

### On Text

```jsx
<p>
  This feature is
  <Tooltip content="Available in Pro plan">
    <span className="underline cursor-help mx-1">premium only</span>
  </Tooltip>
  for now.
</p>
```

### Multiple Tooltips

```jsx
<div className="flex gap-4">
  <Tooltip content="Profile settings">
    <Button icon="user" variant="ghost" />
  </Tooltip>

  <Tooltip content="Notifications">
    <Button icon="bell" variant="ghost" />
  </Tooltip>

  <Tooltip content="Sign out">
    <Button icon="logout" variant="ghost" />
  </Tooltip>
</div>
```

## Notes

- Tooltip shows on hover and hides on mouse leave
- Position automatically adjusts based on viewport space
- Pure Tailwind implementation with no external CSS
- Arrow indicator shows tooltip direction
- Works with any trigger element
