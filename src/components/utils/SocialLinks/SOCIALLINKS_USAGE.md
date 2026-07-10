# SocialLinks Component

Social media links component for displaying social media icons with links.

## Features

- 10+ pre-configured platforms
- 3 style variants (default, outlined, filled)
- 3 size options (sm, md, lg)
- Horizontal or vertical layouts
- Optional labels
- Custom platform support

## Basic Usage

```jsx
import { SocialLinks } from 'tektokit';

const links = [
  { platform: 'facebook', url: 'https://facebook.com/yourpage' },
  { platform: 'twitter', url: 'https://twitter.com/yourhandle' },
  { platform: 'instagram', url: 'https://instagram.com/yourprofile' },
];

<SocialLinks links={links} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `array` | `[]` | Array of link objects (required) |
| `layout` | `string` | `'horizontal'` | Layout direction |
| `size` | `string` | `'md'` | Icon size |
| `variant` | `string` | `'default'` | Style variant |
| `showLabels` | `boolean` | `false` | Show platform labels |
| `className` | `string` | `''` | Additional CSS classes |

## Link Object

| Property | Type | Description |
|----------|------|-------------|
| `platform` | `string` | Platform key (see below) |
| `url` | `string` | Link URL (required) |
| `icon` | `string` | Custom icon name (optional) |
| `label` | `string` | Custom label (optional) |

## Available Platforms

| Platform | Key | Icon |
|----------|-----|------|
| Facebook | `'facebook'` | `FiFacebook` |
| Twitter | `'twitter'` | `FiTwitter` |
| Instagram | `'instagram'` | `FiInstagram` |
| LinkedIn | `'linkedin'` | `FiLinkedin` |
| YouTube | `'youtube'` | `FiYoutube` |
| GitHub | `'github'` | `FiGithub` |
| WhatsApp | `'whatsapp'` | `FiMessageCircle` |
| Telegram | `'telegram'` | `FiSend` |
| Email | `'email'` | `FiMail` |
| Phone | `'phone'` | `FiPhone` |

## Examples

### Default Style

```jsx
const links = [
  { platform: 'facebook', url: 'https://facebook.com/company' },
  { platform: 'twitter', url: 'https://twitter.com/company' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/name' },
];

<SocialLinks links={links} />
```

### Outlined Variant

```jsx
<SocialLinks 
  links={links}
  variant="outlined"
/>
```

### Filled Variant

```jsx
<SocialLinks 
  links={links}
  variant="filled"
/>
```

### With Labels

```jsx
<SocialLinks 
  links={links}
  showLabels={true}
  layout="vertical"
/>
```

### Different Sizes

```jsx
// Small
<SocialLinks links={links} size="sm" />

// Medium (default)
<SocialLinks links={links} size="md" />

// Large
<SocialLinks links={links} size="lg" />
```

### Vertical Layout

```jsx
<SocialLinks 
  links={links}
  layout="vertical"
  showLabels={true}
/>
```

### Footer Example

```jsx
const footerSocials = [
  { platform: 'facebook', url: 'https://facebook.com/company' },
  { platform: 'twitter', url: 'https://twitter.com/company' },
  { platform: 'instagram', url: 'https://instagram.com/company' },
  { platform: 'youtube', url: 'https://youtube.com/company' },
];

<footer className="py-8 border-t">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center">
      <p>&copy; 2024 Company Name</p>
      <SocialLinks links={footerSocials} variant="outlined" />
    </div>
  </div>
</footer>
```

### Contact Section

```jsx
const contactLinks = [
  { platform: 'email', url: 'mailto:contact@company.com' },
  { platform: 'phone', url: 'tel:+1234567890' },
  { platform: 'whatsapp', url: 'https://wa.me/1234567890' },
];

<SocialLinks 
  links={contactLinks}
  variant="filled"
  size="lg"
  showLabels={true}
  layout="vertical"
/>
```

### Custom Platform

```jsx
const links = [
  {
    platform: 'discord',
    url: 'https://discord.gg/yourserver',
    icon: 'FiMessageSquare',
    label: 'Discord',
  },
  { platform: 'github', url: 'https://github.com/yourorg' },
];

<SocialLinks links={links} />
```

## Variants

### Default
Simple icons with opacity hover effect.

```jsx
variant="default"
```

### Outlined
Icons with border, fills with primary color on hover.

```jsx
variant="outlined"
```

### Filled
Icons with primary background, darker on hover.

```jsx
variant="filled"
```

## Sizes

| Size | Container | Icon Size |
|------|-----------|-----------|
| `sm` | `32px` | `16px` |
| `md` | `40px` | `20px` |
| `lg` | `48px` | `24px` |

## Platform Detection

The component automatically:
- Detects platform from the `platform` key
- Uses pre-configured icon and label
- Falls back to custom `icon` and `label` if provided

## Link Attributes

All links include:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security best practice
- `aria-label` - Accessibility label

## Accessibility

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Focus states
- Semantic HTML

## Customization

```jsx
<SocialLinks 
  links={links}
  className="gap-6"
  size="lg"
  variant="outlined"
/>
```

## Notes

- Links without `url` are automatically skipped
- Unknown platforms without custom icon are skipped
- All icons use the library's Icon component
- Safe for SSR (no browser-specific code)
- Labels only show when `showLabels={true}`
