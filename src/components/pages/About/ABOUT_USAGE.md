# About Component

Reusable About page component with multiple layout variants and flexible configuration.

## Import

```javascript
import { About } from 'tektokit';
```

## Variants

- **simple** - Centered title, description, and CTA
- **detailed** - Image, highlights grid, and content sections
- **timeline** - Timeline layout with year markers

## Basic Usage (Simple)

```javascript
import { About } from 'tektokit';

const aboutConfig = {
  title: 'About Our Company',
  description: 'We are a team of passionate developers building amazing products...',
  cta: {
    label: 'Get Started',
    href: '/contact',
    icon: 'arrowRight',
  },
};

export default function AboutPage() {
  return <About config={aboutConfig} variant="simple" />;
}
```

## Detailed Variant

```javascript
const detailedConfig = {
  title: 'About TechCorp',
  description: 'Building the future of technology, one innovation at a time.',
  image: '/about/team.jpg',
  
  highlights: [
    {
      icon: 'users',
      title: '50+ Team Members',
      description: 'Talented professionals from around the world',
    },
    {
      icon: 'globe',
      title: 'Global Reach',
      description: 'Serving customers in 30+ countries',
    },
    {
      icon: 'award',
      title: 'Award Winning',
      description: 'Recognized for innovation and excellence',
    },
  ],
  
  sections: [
    {
      title: 'Our Mission',
      content: 'To empower businesses with cutting-edge technology solutions...',
    },
    {
      title: 'Our Story',
      content: [
        'Founded in 2020, TechCorp started with a simple idea...',
        'Today, we serve thousands of customers worldwide...',
      ],
    },
  ],
  
  cta: {
    label: 'Join Our Team',
    href: '/careers',
    icon: 'briefcase',
  },
};

export default function AboutPage() {
  return <About config={detailedConfig} variant="detailed" />;
}
```

## Timeline Variant

```javascript
const timelineConfig = {
  title: 'Our Journey',
  description: 'A timeline of our growth and achievements',
  
  timeline: [
    {
      year: '2020',
      title: 'Company Founded',
      subtitle: 'The Beginning',
      description: 'Started in a small garage with big dreams',
    },
    {
      year: '2021',
      title: 'First Product Launch',
      subtitle: 'Major Milestone',
      description: 'Released our flagship product to great success',
    },
    {
      year: '2022',
      title: 'Series A Funding',
      description: 'Raised $10M to expand operations',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Opened offices in 5 new countries',
    },
  ],
  
  cta: {
    label: 'View All Milestones',
    href: '/timeline',
  },
};

export default function AboutPage() {
  return <About config={timelineConfig} variant="timeline" />;
}
```

## With Custom Children

```javascript
export default function AboutPage() {
  return (
    <About config={aboutConfig} variant="detailed">
      {/* Custom content */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="opacity-70">Always pushing boundaries</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p className="opacity-70">Doing the right thing</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="opacity-70">Delivering quality</p>
          </div>
        </div>
      </div>
    </About>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | required | Configuration object |
| `variant` | `'simple' \| 'detailed' \| 'timeline'` | `'simple'` | Layout variant |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | - | Custom content to append |

## Config Object

### Common Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Page title |
| `description` | `string` | Main description |
| `cta` | `object` | Call to action button |
| `cta.label` | `string` | Button text |
| `cta.href` | `string` | Button link |
| `cta.icon` | `string` | Optional icon name |

### Detailed Variant Fields

| Field | Type | Description |
|-------|------|-------------|
| `image` | `string` | Image URL |
| `highlights` | `array` | Highlight cards |
| `highlights[].icon` | `string` | Icon name |
| `highlights[].title` | `string` | Card title |
| `highlights[].description` | `string` | Card description |
| `sections` | `array` | Content sections |
| `sections[].title` | `string` | Section title |
| `sections[].content` | `string \| string[]` | Section content (string or array of paragraphs) |

### Timeline Variant Fields

| Field | Type | Description |
|-------|------|-------------|
| `timeline` | `array` | Timeline items |
| `timeline[].year` | `string` | Year badge |
| `timeline[].title` | `string` | Event title |
| `timeline[].subtitle` | `string` | Optional subtitle |
| `timeline[].description` | `string` | Event description |

## Styling

The component uses semantic CSS and Tailwind classes. All colors are dynamic and respect theme variables. No hardcoded colors.

## Next.js Metadata

```javascript
import { About } from 'tektokit';
import { buildSeo } from 'tektokit/server';

export const metadata = buildSeo({
  title: 'About Us',
  description: 'Learn about our company and team',
  canonical: '/about',
});

export default function AboutPage() {
  return <About config={aboutConfig} />;
}
```
