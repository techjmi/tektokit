# Footer Component

A flexible, config-based footer component that adapts to your needs.

## Installation

```javascript
import { Footer } from 'tektokit';
```

## Usage

Footer uses a **config-based approach** instead of individual props. Pass a single `config` object:

```javascript
const footerConfig = {
  brand: {
    name: 'My Company',
    logoUrl: '/logo.png',
    tagline: 'Building the future'
  },
  description: 'Your trusted partner for quality products and services',
  sections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Docs', href: '/docs' },
        { label: 'Help', href: '/help' },
      ]
    }
  ],
  socials: [
    { key: 'facebook', href: 'https://facebook.com/...', iconName: 'FaFacebook', label: 'Facebook' },
    { key: 'twitter', href: 'https://twitter.com/...', iconName: 'FaTwitter', label: 'Twitter' },
  ],
  contact: {
    title: 'Contact Us',
    email: 'hello@example.com',
    phone: '+1-234-567-8900',
    address: '123 Main St, City, Country'
  },
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  copyright: {
    text: 'My Company. All rights reserved.'
  },
  madeWith: {
    text: 'Made with',
    icon: '❤️',
    location: 'India'
  }
};

<Footer config={footerConfig} />
```

## Config Structure

### brand (object, optional)
```javascript
{
  name: 'Company Name',
  logoUrl: '/logo.png',  // If provided, shows logo; else shows name
  tagline: 'Your tagline here'
}
```

### description (string, optional)
Main footer description. Falls back to `brand.tagline` if not provided.

### sections (array, optional)
Link sections (Quick Links, Resources, etc.):
```javascript
[
  {
    title: 'Section Title',
    links: [
      { label: 'Link Text', href: '/path' }
    ]
  }
]
```

### socials (array, optional)
Social media links:
```javascript
[
  {
    key: 'facebook',         // Unique identifier
    name: 'Facebook',        // Display name
    href: 'https://...',     // URL
    label: 'Follow us...',   // Aria label
    iconName: 'FaFacebook',  // Icon component name from react-icons
    // OR
    icon: <CustomIcon />     // Custom icon component
  }
]
```

### contact (object, optional)
Contact information:
```javascript
{
  title: 'Contact Us',      // Optional, defaults to 'Contact'
  email: 'hello@example.com',
  phone: '+1-234-567-8900',
  address: '123 Main St...'
}
```

### legal (array, optional)
Legal/policy links shown in bottom row:
```javascript
[
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]
```

### copyright (object, optional)
```javascript
{
  text: 'Company Name. All rights reserved.'
}
```
Falls back to `brand.name` if not provided.

### madeWith (object, optional)
"Made with ❤️ in India" section:
```javascript
{
  text: 'Made with',
  icon: '❤️',
  location: 'India'
}
```

## Examples

### Minimal Footer
```javascript
const config = {
  brand: { name: 'My App' },
  copyright: { text: 'My App. All rights reserved.' }
};

<Footer config={config} />
```

### E-commerce Footer
```javascript
const config = {
  brand: {
    logoUrl: '/logo.png',
    name: 'Shop Name'
  },
  description: 'Your trusted online shopping destination',
  sections: [
    {
      title: 'Shop',
      links: [
        { label: 'New Arrivals', href: '/new' },
        { label: 'Best Sellers', href: '/bestsellers' },
        { label: 'Sale', href: '/sale' },
      ]
    },
    {
      title: 'Help',
      links: [
        { label: 'FAQ', href: '/faq' },
        { label: 'Shipping', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
      ]
    }
  ],
  contact: {
    email: 'support@shop.com',
    phone: '1-800-SHOP'
  },
  socials: [
    { key: 'fb', href: 'https://...', iconName: 'FaFacebook' },
    { key: 'ig', href: 'https://...', iconName: 'FaInstagram' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ]
};

<Footer config={config} />
```

### With Custom Children
```javascript
<Footer config={config}>
  <div className="my-8 p-4 bg-primary/10 rounded-lg">
    <h3 className="font-bold mb-2">Newsletter</h3>
    <p className="text-sm mb-4">Subscribe for updates</p>
    <input type="email" placeholder="Your email" className="..." />
  </div>
</Footer>
```

## Notes

- All fields are optional - renders only what you provide
- Responsive grid: 1 column (mobile) → 2 (tablet) → 4 (desktop)
- Auto-generates current year for copyright
- Supports custom children for newsletter, etc.
- Theme-agnostic - inherits colors from app
- SSR-safe with `'use client'`
