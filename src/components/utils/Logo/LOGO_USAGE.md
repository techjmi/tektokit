# Logo Component

A flexible, reusable logo component that can display images, text, or both in various layouts. Perfect for headers, footers, and branding.

## Features

- Image, text, or combination display
- Horizontal or vertical layouts
- 3 size variants (sm, md, lg)
- Smart linking with href
- Customizable styling for each part
- Responsive design
- Auto-aspect ratio handling
- Config-based content pattern

## Basic Usage

```jsx
import { Logo } from 'tektokit';

<Logo
  layout="horizontal"
  size="md"
  config={{
    src: "/logo.png",
    name: "tektokit",
    href: "/"
  }}
/>
```

## Props Structure

**Behavioral Props** (direct props):
- `layout` - Layout direction
- `size` - Component size
- `showImage` - Show/hide image
- `showText` - Show/hide text
- `className` - Container classes
- `imageClassName` - Image classes
- `textClassName` - Name text classes
- `taglineClassName` - Tagline text classes

**Content Props** (inside `config` object):
- `src` - Logo image URL
- `alt` - Image alt text
- `name` - Brand/company name
- `tagline` - Tagline/slogan text
- `href` - Link URL
- `imageSize` - Custom image size
- `target` - Link target
- `onClick` - Click handler

## Props

### Behavioral Props (Direct)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `string` | `'horizontal'` | Layout direction (`horizontal`, `vertical`) |
| `size` | `string` | `'md'` | Component size (`sm`, `md`, `lg`) |
| `showImage` | `boolean` | `true` | Show image |
| `showText` | `boolean` | `true` | Show text |
| `className` | `string` | `''` | Container classes |
| `imageClassName` | `string` | `''` | Image wrapper classes |
| `textClassName` | `string` | `''` | Name text classes |
| `taglineClassName` | `string` | `''` | Tagline text classes |

### Content Props (Inside `config`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Logo image URL |
| `alt` | `string` | `name` or `'Logo'` | Image alt text |
| `name` | `string` | - | Brand/company name |
| `tagline` | `string` | - | Tagline/slogan text |
| `href` | `string` | `'/'` | Link URL (wraps in `<a>`) |
| `imageSize` | `string` | - | Custom image size (overrides size) |
| `target` | `string` | - | Link target (`_blank`, etc.) |
| `onClick` | `function` | - | Click handler |

## Layout Options

### Horizontal (Default)
Image and text side by side - perfect for navbars.

```jsx
<Logo
  layout="horizontal"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "UI Library"
  }}
/>
```

**Visual:**
```
┌──────────────────────────────┐
│  [🖼️]  tektokit               │
│        UI Library           │
└──────────────────────────────┘
   ↑      ↑
 Image  Text (left-aligned)
```

### Vertical
Image above text - perfect for footers and centered displays.

```jsx
<Logo
  layout="vertical"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "UI Component Library"
  }}
/>
```

**Visual:**
```
┌──────────────────────────────┐
│         [🖼️ Logo]           │
│           tektokit              │
│    UI Component Library      │
└──────────────────────────────┘
     ↑        ↑        ↑
   Image   Name   Tagline
   (all centered)
```

## Size Variants

### Small (`sm`)
Best for compact navbars and mobile headers.

```jsx
<Logo
  size="sm"
  config={{
    src: "/logo.png",
    name: "tektokit"
  }}
/>
```
- Image: `h-6`
- Name: `text-base md:text-lg`
- Tagline: `text-xs`

### Medium (`md`) - Default
Best for standard headers and footers.

```jsx
<Logo
  size="md"
  config={{
    src: "/logo.png",
    name: "tektokit"
  }}
/>
```
- Image: `h-8 md:h-10`
- Name: `text-lg md:text-xl`
- Tagline: `text-xs md:text-sm`

### Large (`lg`)
Best for hero sections and landing pages.

```jsx
<Logo
  size="lg"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "Build Better"
  }}
/>
```
- Image: `h-10 md:h-12 lg:h-14`
- Name: `text-xl md:text-2xl lg:text-3xl`
- Tagline: `text-sm md:text-base`

## Display Modes

### Image + Text (Default)
```jsx
<Logo
  config={{
    src: "/logo.png",
    name: "tektokit"
  }}
/>
```
**Visual:**
```
[🖼️] tektokit
```

### Image Only
```jsx
<Logo
  showText={false}
  config={{
    src: "/logo.png"
  }}
/>
```
**Visual:**
```
[🖼️ Logo Image]
```
Perfect for icon-only mobile navbars.

### Text Only
```jsx
<Logo
  showImage={false}
  config={{
    name: "tektokit",
    tagline: "UI Library"
  }}
/>
```
**Visual:**
```
tektokit
UI Library
```
Perfect when you don't have a logo image yet.

### Image + Text + Tagline (Horizontal)
```jsx
<Logo
  layout="horizontal"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "Build Better UIs"
  }}
/>
```
**Visual:**
```
[🖼️]  tektokit
      Build Better UIs
```

### Image + Text + Tagline (Vertical)
```jsx
<Logo
  layout="vertical"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "Build Better UIs"
  }}
/>
```
**Visual:**
```
     [🖼️]
     tektokit
Build Better UIs
```

## Real-World Examples

### Navbar Logo
```jsx
<header className="border-b bg-white">
  <div className="container mx-auto px-4 py-3">
    <Logo
      size="sm"
      layout="horizontal"
      config={{
        src: "/logo.png",
        name: "tektokit",
        href: "/"
      }}
    />
  </div>
</header>
```

### Footer Logo
```jsx
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <Logo
      layout="vertical"
      size="md"
      config={{
        src: "/logo-white.png",
        name: "tektokit",
        tagline: "© 2024 All rights reserved",
        href: "/"
      }}
    />
  </div>
</footer>
```

### Hero Section Logo
```jsx
<section className="py-20 text-center">
  <Logo
    layout="vertical"
    size="lg"
    config={{
      src: "/logo.png",
      name: "Welcome to tektokit",
      tagline: "The Ultimate React UI Library"
    }}
  />
</section>
```

### Login Page Logo
```jsx
<div className="min-h-screen flex items-center justify-center">
  <div className="w-full max-w-md p-8">
    <Logo
      layout="vertical"
      size="lg"
      className="mb-8"
      config={{
        src: "/logo.png",
        name: "Sign In"
      }}
    />
    <form>...</form>
  </div>
</div>
```

### Partner Logos Grid
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  <Logo size="md" showText={false} config={{ src: "/partner1.png" }} />
  <Logo size="md" showText={false} config={{ src: "/partner2.png" }} />
  <Logo size="md" showText={false} config={{ src: "/partner3.png" }} />
  <Logo size="md" showText={false} config={{ src: "/partner4.png" }} />
</div>
```

### External Link
```jsx
<Logo
  config={{
    src: "/sponsor.png",
    name: "Sponsored by Acme Corp",
    href: "https://acmecorp.com",
    target: "_blank"
  }}
/>
```

## Advanced Customization

### Custom Image Size
```jsx
<Logo
  config={{
    src: "/logo.png",
    name: "tektokit",
    imageSize: "h-16 w-16"
  }}
/>
```

### Custom Colors & Styles
```jsx
<Logo
  textClassName="text-blue-600 font-extrabold"
  taglineClassName="text-gray-500 italic"
  imageClassName="rounded-full border-2 border-blue-600"
  config={{
    src: "/logo.png",
    name: "tektokit",
    tagline: "UI Library"
  }}
/>
```

### With Animation
```jsx
<Logo
  className="hover:scale-110 transition-transform duration-300"
  config={{
    src: "/logo.png",
    name: "tektokit"
  }}
/>
```

### Click Handler
```jsx
<Logo
  config={{
    src: "/logo.png",
    name: "tektokit",
    href: "#",
    onClick: (e) => {
      e.preventDefault();
      console.log('Logo clicked!');
    }
  }}
/>
```

## Integration with Footer

The Footer component now uses Logo internally:

```jsx
<Footer 
  config={{
    brand: {
      logoUrl: "/logo.png",
      name: "tektokit",
      tagline: "UI Component Library",
      href: "/"
    }
  }}
/>
```

## Accessibility

- Proper `alt` text for images
- Semantic link structure
- Keyboard navigation
- ARIA labels when needed

## Responsive Behavior

- Image sizes scale with breakpoints
- Text sizes adapt to screen width
- Layout remains consistent
- Mobile-first approach

## Notes

- If no `href` provided, renders as plain div
- If `href` is `false` or `null`, no link wrapping
- Image uses the library's Image component (lazy load, fallback)
- Works with or without image source
- Auto aspect ratio maintained
- SSR-safe
