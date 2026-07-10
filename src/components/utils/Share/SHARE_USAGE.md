# Share Component

Social sharing buttons component for sharing content across multiple platforms.

## Features

- Multiple platforms: Copy Link, Twitter, Facebook, LinkedIn, WhatsApp, Telegram, Email
- Horizontal or vertical layouts
- Clipboard integration with "Copied!" feedback
- Customizable button variants and sizes
- Optional labels
- Current page URL as default

## Basic Usage

```jsx
import { Share } from 'tektokit';

<Share 
  url="https://example.com/article"
  title="Check out this amazing article!"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | Current page URL | URL to share |
| `title` | `string` | `''` | Text/title to share |
| `platforms` | `array` | `['copy', 'twitter', 'facebook', 'linkedin', 'whatsapp']` | Platforms to show |
| `layout` | `string` | `'horizontal'` | Layout direction |
| `showLabels` | `boolean` | `false` | Show platform labels |
| `variant` | `string` | `'outline'` | Button variant |
| `size` | `string` | `'md'` | Button size |
| `className` | `string` | `''` | Additional CSS classes |

## Available Platforms

| Platform | Key | Icon | Description |
|----------|-----|------|-------------|
| Copy Link | `'copy'` | `FiCopy` | Copy URL to clipboard |
| Twitter | `'twitter'` | `FiTwitter` | Share on Twitter |
| Facebook | `'facebook'` | `FiFacebook` | Share on Facebook |
| LinkedIn | `'linkedin'` | `FiLinkedin` | Share on LinkedIn |
| WhatsApp | `'whatsapp'` | `FiMessageCircle` | Share via WhatsApp |
| Telegram | `'telegram'` | `FiSend` | Share via Telegram |
| Email | `'email'` | `FiMail` | Share via Email |

## Examples

### Default (Icon Only)

```jsx
<Share 
  url="https://example.com"
  title="Amazing Product"
/>
```

### With Labels

```jsx
<Share 
  url="https://example.com"
  title="Check this out!"
  showLabels={true}
/>
```

### Custom Platforms

```jsx
<Share 
  url="https://example.com"
  platforms={['copy', 'twitter', 'email']}
/>
```

### Vertical Layout

```jsx
<Share 
  url="https://example.com"
  layout="vertical"
  showLabels={true}
/>
```

### Different Button Styles

```jsx
// Solid variant
<Share variant="solid" size="lg" />

// Ghost variant
<Share variant="ghost" size="sm" />
```

### Blog Post Sharing

```jsx
const BlogShareButtons = () => {
  return (
    <div className="border-t border-b py-4 my-8">
      <p className="text-sm font-medium mb-3">Share this article:</p>
      <Share 
        url={window.location.href}
        title="How to Build Better React Apps"
        platforms={['twitter', 'linkedin', 'facebook', 'copy']}
        showLabels={true}
      />
    </div>
  );
};
```

### Product Sharing

```jsx
<Share 
  url={`https://shop.com/products/${productId}`}
  title={productName}
  platforms={['whatsapp', 'facebook', 'email', 'copy']}
  variant="solid"
  size="sm"
/>
```

## Button Variants

Supports all Button component variants:
- `'solid'` - Filled background
- `'outline'` - Border only
- `'ghost'` - No border
- `'link'` - Text only

## Button Sizes

Supports all Button component sizes:
- `'sm'` - Small
- `'md'` - Medium (default)
- `'lg'` - Large

## Copy Feedback

When clicking "Copy Link":
- Button label changes to "Copied!" for 2 seconds
- Uses the centralized `copyToClipboard` utility
- Fallback for older browsers included

## Layout Options

### Horizontal (Default)
Buttons arranged in a row, wrapping if needed.

```jsx
layout="horizontal"
```

### Vertical
Buttons stacked vertically.

```jsx
layout="vertical"
```

## Platform-Specific Notes

### Copy Link
- Uses Clipboard API with fallback
- Shows "Copied!" feedback
- SSR-safe

### Twitter
- Includes URL and title in tweet
- Opens in new window

### Facebook
- Only includes URL (Facebook pulls title/description)
- Opens in new window

### LinkedIn
- Includes URL and title
- Opens in new window

### WhatsApp
- Combines title and URL
- Opens in new window or app

### Telegram
- Includes URL and title
- Opens in new window or app

### Email
- Creates email with title as subject and URL in body
- Opens default email client

## SSR Safety

- Uses `typeof window !== 'undefined'` check
- Safe for Next.js and other SSR frameworks
- Defaults to current page URL if available

## Accessibility

- Each button has proper `aria-label`
- Keyboard navigation supported
- Focus management

## Customization

```jsx
<Share 
  url="https://example.com"
  className="justify-center"
  variant="solid"
  size="lg"
/>
```

## Notes

- If `url` not provided, uses current page URL
- All platforms open in new window with `noopener,noreferrer`
- URLs are automatically encoded
- Uses library's Button component for consistent styling
