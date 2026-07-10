# Partners Component

Showcase partner/client logos with grid or infinite scroll layout.

## Import

```javascript
import { Partners } from 'tektokit';
```

## Basic Usage

```jsx
<Partners
  config={{
    title: "Our Hiring Partners",
    subtitle: "Trusted By",
    partners: [
      {
        name: "Cognizant",
        logo: "/logos/cognizant.png",
        url: "https://cognizant.com"
      },
      {
        name: "Tech Mahindra",
        logo: "/logos/tech-mahindra.png",
        url: "https://techmahindra.com"
      },
      {
        name: "IBM",
        logo: "/logos/ibm.png",
        url: "https://ibm.com"
      }
    ]
  }}
/>
```

## Props

### Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `subtitle` | `string` | - | Small label above title |
| `description` | `string` | - | Section description |
| `partners` | `array` | `[]` | Array of partner objects |
| `layout` | `string` | `'scroll'` | Layout type: `grid` or `scroll` (infinite scroll) |
| `columns` | `number` | `6` | Grid columns: `3`, `4`, `5`, `6`, `8` |
| `speed` | `number` | `30` | Animation speed in seconds (for scroll layout) |
| `grayscale` | `boolean` | `true` | Show logos in grayscale (color on hover) |
| `className` | `string` | - | Additional CSS classes |

### Partner Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✅ | Partner name (for alt text) |
| `logo` | `string` | ✅ | Logo image URL or path |
| `url` | `string` | ❌ | Partner website URL (makes logo clickable) |

## Examples

### Infinite Scroll Layout (Default)

```jsx
<Partners
  config={{
    title: "Our Hiring Partners",
    subtitle: "Join 500+ Companies",
    partners: [
      { name: "Cognizant", logo: "/logos/cognizant.png" },
      { name: "Tech Mahindra", logo: "/logos/tech-mahindra.png" },
      { name: "IBM", logo: "/logos/ibm.png" },
      { name: "Capgemini", logo: "/logos/capgemini.png" },
      { name: "Wipro", logo: "/logos/wipro.png" },
      { name: "TCS", logo: "/logos/tcs.png" }
    ],
    layout: "scroll",
    speed: 40,
    grayscale: true
  }}
/>
```

### Grid Layout

```jsx
<Partners
  config={{
    title: "Trusted By Leading Companies",
    partners: [
      { name: "Company 1", logo: "/logos/1.png", url: "https://company1.com" },
      { name: "Company 2", logo: "/logos/2.png", url: "https://company2.com" },
      { name: "Company 3", logo: "/logos/3.png", url: "https://company3.com" },
      { name: "Company 4", logo: "/logos/4.png", url: "https://company4.com" }
    ],
    layout: "grid",
    columns: 4,
    grayscale: false
  }}
/>
```

### 6-Column Grid

```jsx
<Partners
  config={{
    title: "Our Clients",
    partners: [...], // 6+ partners
    layout: "grid",
    columns: 6
  }}
/>
```

### Custom Speed

```jsx
<Partners
  config={{
    partners: [...],
    layout: "scroll",
    speed: 50  // Slower scroll
  }}
/>
```

### Without Grayscale

```jsx
<Partners
  config={{
    partners: [...],
    grayscale: false  // Always show in color
  }}
/>
```

## Features

- ✅ **Infinite Scroll**: Seamless continuous scrolling animation
- ✅ **Pause on Hover**: Scroll pauses when hovering over logos
- ✅ **Grayscale Effect**: Logos in grayscale, color on hover
- ✅ **Responsive**: Works on all screen sizes
- ✅ **Grid Layout**: Alternative static grid layout
- ✅ **Clickable Links**: Optional URLs for each partner
- ✅ **Smooth Animations**: CSS-based performance-optimized animations

## Notes

- For infinite scroll, duplicate your partners array internally for seamless looping
- Logos should be in PNG or SVG format with transparent backgrounds
- Recommended logo size: 240x80px (3:1 aspect ratio)
- Use consistent logo heights for best results
- Grid layout is better for smaller partner lists (< 8)
- Scroll layout is better for larger partner lists (8+)
