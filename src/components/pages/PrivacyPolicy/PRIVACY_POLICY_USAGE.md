# PrivacyPolicy Component

Reusable Privacy Policy page component with configurable sections.

## Import

```javascript
import { PrivacyPolicy } from 'tektokit';
```

## Basic Usage

```javascript
import { PrivacyPolicy } from 'tektokit';

const privacyConfig = {
  title: 'Privacy Policy',
  updated: '2024-01-15',
  summary: 'We respect your privacy. This Privacy Policy explains what information we collect and how we use it.',
  sections: [
    {
      title: '1. Information We Collect',
      content: [
        'Account Information: username, email, and contact details.',
        'Usage Data: device information, log data, and analytics.',
        'Cookies: we use cookies to improve the site.',
      ],
    },
    {
      title: '2. How We Use Information',
      content: [
        'Provide and improve our services.',
        'Secure our platform and detect fraud.',
        'Communicate with you about your account.',
      ],
    },
  ],
};

<PrivacyPolicy config={privacyConfig} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | `required` | Privacy policy configuration |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `any` | - | Spread to root element |

## Config Object

```javascript
{
  title: 'Privacy Policy',        // Page title
  updated: '2024-01-15',           // Last updated date (optional)
  summary: 'Summary text...',      // Summary paragraph (optional)
  sections: [                      // Array of sections
    {
      title: '1. Section Title',   // Section heading
      content: [                   // Array of bullet points
        'Point 1...',
        'Point 2...',
      ],
    },
  ],
}
```

## Complete Example

```javascript
import { PrivacyPolicy } from 'tektokit';

const PRIVACY_CONFIG = {
  title: 'Privacy Policy',
  updated: new Date().toISOString().split('T')[0],
  summary: 'MyApp respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights.',
  sections: [
    {
      title: '1. Information We Collect',
      content: [
        'Account Information: such as username and contact details you provide when you create an account.',
        'Content You Submit: posts, comments, messages, and other content you upload or create.',
        'Usage Data: device information, log data, and analytics about how you use the website.',
        'Cookies & Similar Technologies: we use cookies to remember preferences and improve the site.',
      ],
    },
    {
      title: '2. How We Use Information',
      content: [
        'Provide and improve the services, including personalization.',
        'Secure our platform, detect fraud and abuse.',
        'Communicate with you about your account and updates.',
        'Comply with legal obligations.',
      ],
    },
    {
      title: '3. How We Share Information',
      content: [
        'Service Providers: we may share limited data with vendors who help us operate the website.',
        'Legal & Safety: we may disclose information if required by law.',
        'No Sale of Personal Data: we do not sell your personal information.',
      ],
    },
    {
      title: '4. Your Rights & Choices',
      content: [
        'You may access, update, or delete certain account information via your profile settings.',
        'Depending on your location, you may have rights to request access, correction, and deletion.',
        'To exercise rights, contact us via the Contact page.',
      ],
    },
    {
      title: '5. Contact',
      content: [
        'For questions or requests, please visit our Contact page.',
      ],
    },
  ],
};

export default function PrivacyPage() {
  return <PrivacyPolicy config={PRIVACY_CONFIG} />;
}
```

## Styling

The component uses semantic HTML and Tailwind CSS classes. You can customize by:

```javascript
<PrivacyPolicy 
  config={privacyConfig} 
  className="container mx-auto px-4"
/>
```

## Next.js Metadata

```javascript
export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return <PrivacyPolicy config={PRIVACY_CONFIG} />;
}
```

## Features

- ✅ Config-driven content
- ✅ Automatic bullet-point formatting
- ✅ Responsive design
- ✅ Optional summary and update date
- ✅ SEO-friendly semantic HTML
- ✅ Tailwind CSS styling
- ✅ Fully customizable
