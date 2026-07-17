# Divider Component

Visual separator for content sections.

## Import

```javascript
import { Divider } from 'tektokit';
```

## Basic Usage

```jsx
<Divider />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `string` | `'horizontal'` | Direction: `horizontal`, `vertical` |
| `spacing` | `string` | `'md'` | Margin spacing: `none`, `sm`, `md`, `lg`, `xl` |
| `thickness` | `string` | `'thin'` | Line thickness: `thin`, `medium`, `thick` |
| `color` | `string` | `'gray'` | Color: `gray`, `dark`, `light` |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Horizontal Divider

```jsx
<div>
  <p>Content above</p>
  <Divider />
  <p>Content below</p>
</div>
```

### Vertical Divider

```jsx
<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Divider orientation="vertical" />
  <span>Item 2</span>
  <Divider orientation="vertical" />
  <span>Item 3</span>
</div>
```

### Spacing Variants

```jsx
<Divider spacing="none" />
<Divider spacing="sm" />
<Divider spacing="md" />
<Divider spacing="lg" />
<Divider spacing="xl" />
```

### Thickness Variants

```jsx
<Divider thickness="thin" />
<Divider thickness="medium" />
<Divider thickness="thick" />
```

### Color Variants

```jsx
<Divider color="gray" />
<Divider color="dark" />
<Divider color="light" />
```

### In Card Component

```jsx
<Card>
  <CardHeader title="Product" />
  <Divider spacing="none" />
  <CardBody>Product description</CardBody>
  <Divider spacing="none" />
  <CardFooter>
    <Button>Buy Now</Button>
  </CardFooter>
</Card>
```

### In Modal Component

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Settings" onClose={handleClose} />
  <Divider spacing="none" />
  <ModalBody>Settings content</ModalBody>
  <Divider spacing="none" />
  <ModalFooter>
    <Button>Save</Button>
  </ModalFooter>
</Modal>
```

### In Navigation

```jsx
<nav className="flex gap-4">
  <a href="/">Home</a>
  <Divider orientation="vertical" spacing="none" />
  <a href="/about">About</a>
  <Divider orientation="vertical" spacing="none" />
  <a href="/contact">Contact</a>
</nav>
```

## Notes

- Use spacing none for tight layouts like cards and modals
- Vertical dividers require flex or inline-flex parent
- Default horizontal divider works in block layouts
- Thickness variants help create visual hierarchy
