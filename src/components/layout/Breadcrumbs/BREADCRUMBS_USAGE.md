# Breadcrumbs Component

Navigation path component showing current location hierarchy.

## Import

```javascript
import { Breadcrumbs, BreadcrumbItem } from 'tektokit';
```

## Basic Usage

```jsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumbs>
```

## Props

### Breadcrumbs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Breadcrumb items (composition mode) |
| `items` | `array` | - | Items array (data-driven mode) |
| `separator` | `string` or `ReactNode` | `>` icon | Custom separator |
| `className` | `string` | - | Additional CSS classes |

### BreadcrumbItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Item text |
| `href` | `string` | - | Link URL |
| `isLast` | `boolean` | `false` | Last item (auto-detected) |
| `icon` | `string` or `ReactNode` | - | Icon before text |
| `separator` | `ReactNode` | - | Custom separator (auto-provided) |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Composition Mode

```jsx
<Breadcrumbs>
  <BreadcrumbItem href="/" icon="home">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
  <BreadcrumbItem>Laptops</BreadcrumbItem>
</Breadcrumbs>
```

### Data-Driven Mode

```jsx
const items = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' }
];

<Breadcrumbs items={items} />
```

### Custom Separator

```jsx
<Breadcrumbs separator="/">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
  <BreadcrumbItem>Guide</BreadcrumbItem>
</Breadcrumbs>

<Breadcrumbs separator="-">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Page</BreadcrumbItem>
</Breadcrumbs>
```

### With Icons

```jsx
<Breadcrumbs>
  <BreadcrumbItem href="/" icon="home">
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/dashboard" icon="dashboard">
    Dashboard
  </BreadcrumbItem>
  <BreadcrumbItem icon="user">
    Profile
  </BreadcrumbItem>
</Breadcrumbs>
```

### Simple Path

```jsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
  <BreadcrumbItem>Article Title</BreadcrumbItem>
</Breadcrumbs>
```

### E-commerce Example

```jsx
<Breadcrumbs>
  <BreadcrumbItem href="/" icon="home">
    Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/shop">
    Shop
  </BreadcrumbItem>
  <BreadcrumbItem href="/shop/men">
    Men
  </BreadcrumbItem>
  <BreadcrumbItem href="/shop/men/shoes">
    Shoes
  </BreadcrumbItem>
  <BreadcrumbItem>
    Running Shoes
  </BreadcrumbItem>
</Breadcrumbs>
```

### Documentation Example

```jsx
const docPath = [
  { label: 'Docs', href: '/docs' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Breadcrumbs' }
];

<Breadcrumbs items={docPath} />
```

### With Custom Separator

```jsx
<Breadcrumbs
  separator={
    <span className="mx-2 text-gray-400">•</span>
  }
>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
  <BreadcrumbItem>Post</BreadcrumbItem>
</Breadcrumbs>
```

## Notes

- Last item is automatically styled as active/current
- Last item does not have a link by default
- isLast is auto-detected in composition mode
- Default separator is a chevron right icon
- Items can include icons for visual hierarchy
