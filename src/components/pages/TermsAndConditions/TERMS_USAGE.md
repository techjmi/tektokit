# TermsAndConditions Component

Reusable Terms & Conditions page component with configurable sections.

## Import

```javascript
import { TermsAndConditions } from 'tektokit';
```

## Basic Usage

```javascript
import { TermsAndConditions } from 'tektokit';

const termsConfig = {
  title: 'Terms & Conditions',
  updated: '2024-01-15',
  sections: [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using MyApp, you agree to these Terms and our Privacy Policy.',
      ],
    },
    {
      title: '2. User Accounts',
      content: [
        'You are responsible for maintaining the confidentiality of your account.',
        'You must provide accurate information and not impersonate others.',
      ],
    },
  ],
};

<TermsAndConditions config={termsConfig} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | `required` | Terms configuration |
| `className` | `string` | `''` | Additional CSS classes |
| `...props` | `any` | - | Spread to root element |

## Config Object

```javascript
{
  title: 'Terms & Conditions',     // Page title
  updated: '2024-01-15',            // Last updated date (optional)
  sections: [                       // Array of sections
    {
      title: '1. Section Title',    // Section heading
      content: [                    // Array of bullet points
        'Point 1...',
        'Point 2...',
      ],
    },
  ],
}
```

## Complete Example

```javascript
import { TermsAndConditions } from 'tektokit';

const TERMS_CONFIG = {
  title: 'Terms & Conditions',
  updated: new Date().toISOString().split('T')[0],
  sections: [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using MyApp, you agree to these Terms and our Privacy Policy.',
      ],
    },
    {
      title: '2. User Accounts',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You must provide accurate information and not impersonate others.',
      ],
    },
    {
      title: '3. Content & Intellectual Property',
      content: [
        'Unless otherwise stated, the content on this site is owned by us or licensed to us.',
        'You may not copy, distribute, or create derivative works without permission.',
      ],
    },
    {
      title: '4. Acceptable Use',
      content: [
        'Do not misuse the services or attempt unauthorized access.',
        'We may suspend or terminate accounts that violate these terms.',
      ],
    },
    {
      title: '5. Disclaimers',
      content: [
        'The services are provided "as is" without warranties of any kind.',
        'We do not guarantee the accuracy or availability of the site.',
      ],
    },
    {
      title: '6. Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages.',
      ],
    },
    {
      title: '7. Changes to Terms',
      content: [
        'We may update these Terms from time to time. Your continued use constitutes acceptance of the revised Terms.',
      ],
    },
    {
      title: '8. Contact',
      content: [
        'If you have questions about these Terms, please contact us from the Contact page.',
      ],
    },
  ],
};

export default function TermsPage() {
  return <TermsAndConditions config={TERMS_CONFIG} />;
}
```

## Styling

The component uses semantic HTML and Tailwind CSS classes. You can customize by:

```javascript
<TermsAndConditions 
  config={termsConfig} 
  className="container mx-auto px-4"
/>
```

## Next.js Metadata

```javascript
export const metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using this website.',
};

export default function TermsPage() {
  return <TermsAndConditions config={TERMS_CONFIG} />;
}
```

## Features

- ✅ Config-driven content
- ✅ Automatic bullet-point formatting
- ✅ Responsive design
- ✅ Optional update date
- ✅ SEO-friendly semantic HTML
- ✅ Tailwind CSS styling
- ✅ Fully customizable
