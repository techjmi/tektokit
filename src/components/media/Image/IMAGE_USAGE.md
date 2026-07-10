# Image Component

Optimized image component with fallback, lazy loading, loading states, and overlay support.

## Import

```javascript
import { Image } from 'tektokit';
```

## Basic Usage

```javascript
import { Image } from 'tektokit';

<Image
  src="/product.jpg"
  alt="Product image"
  aspectRatio="1/1"
/>
```

## Features

- ✅ Automatic fallback on error
- ✅ Lazy loading by default
- ✅ Loading skeleton/placeholder
- ✅ Aspect ratio control
- ✅ Object fit options
- ✅ Click handlers with hover effect
- ✅ Overlay support
- ✅ Smooth fade-in transition

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | `''` | Alt text |
| `fallback` | `string` | `'/placeholder.jpg'` | Fallback image on error |
| `width` | `string/number` | `'100%'` | Image width |
| `height` | `string/number` | `'auto'` | Image height |
| `aspectRatio` | `string` | - | CSS aspect ratio (e.g., '16/9', '1/1') |
| `objectFit` | `string` | `'cover'` | CSS object-fit |
| `loading` | `string` | `'lazy'` | Loading strategy |
| `className` | `string` | `''` | Additional classes |
| `onClick` | `function` | - | Click handler |
| `overlay` | `boolean` | `false` | Show dark overlay |
| `overlayOpacity` | `number` | `0.3` | Overlay opacity (0-1) |

## Examples

### Product Image (Square)

```javascript
<Image
  src={product.image}
  alt={product.name}
  aspectRatio="1/1"
  objectFit="cover"
/>
```

### Hero Banner (Wide)

```javascript
<Image
  src="/hero.jpg"
  alt="Hero banner"
  aspectRatio="21/9"
  overlay={true}
  overlayOpacity={0.5}
  loading="eager"
/>
```

### Fixed Dimensions

```javascript
<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  objectFit="contain"
/>
```

### With Custom Fallback

```javascript
<Image
  src={user.avatar}
  alt={user.name}
  fallback="/default-avatar.png"
  aspectRatio="1/1"
/>
```

### Clickable Image

```javascript
<Image
  src={product.image}
  alt={product.name}
  aspectRatio="4/3"
  onClick={() => router.push(`/products/${product.id}`)}
/>
```

### Responsive

```javascript
<Image
  src="/banner.jpg"
  alt="Banner"
  width="100%"
  height="auto"
  aspectRatio="16/9"
/>
```

### Profile Avatar

```javascript
<Image
  src={user.avatar}
  alt={user.name}
  fallback="/default-user.png"
  aspectRatio="1/1"
  className="rounded-full"
  width={48}
  height={48}
/>
```

### Card Image

```javascript
<div className="max-w-sm">
  <Image
    src={post.thumbnail}
    alt={post.title}
    aspectRatio="16/9"
    className="rounded-t-lg"
  />
  <div className="p-4">
    <h3>{post.title}</h3>
  </div>
</div>
```

### Gallery Image

```javascript
<Image
  src={photo.url}
  alt={photo.caption}
  aspectRatio="4/3"
  onClick={() => openLightbox(photo)}
  className="rounded-md"
/>
```

### With Overlay

```javascript
<Image
  src="/hero-bg.jpg"
  alt="Background"
  aspectRatio="21/9"
  overlay={true}
  overlayOpacity={0.6}
>
  <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
    <h1>Welcome to Our Site</h1>
  </div>
</Image>
```

## Object Fit Options

- `cover` - Default, fills container
- `contain` - Fits inside container
- `fill` - Stretches to fill
- `none` - Original size
- `scale-down` - Smaller of contain or none

## Aspect Ratios

Common values:
- `1/1` - Square
- `4/3` - Standard
- `16/9` - Wide
- `21/9` - Ultra wide
- `3/2` - Classic photo

## Loading Strategies

- `lazy` - Default, loads when visible
- `eager` - Loads immediately (for above-fold images)

## Notes

- Uses native `<img>` tag (no Next.js dependency)
- Works in any React app
- Automatic error handling with fallback
- Smooth fade-in on load
- Loading skeleton while image loads
- Hover scale effect when clickable
