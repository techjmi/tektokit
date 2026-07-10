# FAQ Component

Frequently Asked Questions section component with accordion-style expandable answers.

## Features

- Config-based approach for easy data management
- Built on top of the Accordion component
- 1 or 2 column layouts
- Responsive and mobile-friendly
- Allow single or multiple items open
- Section header with title, subtitle, and description

## Basic Usage

```jsx
import { FAQ } from 'tektokit';

const faqConfig = {
  title: 'Frequently Asked Questions',
  subtitle: 'Help Center',
  description: 'Find answers to common questions about our product',
  faqs: [
    {
      title: 'What is tektokit?',
      content: 'tektokit is a modern React UI component library built with Tailwind CSS.',
    },
    {
      title: 'Is it free to use?',
      content: 'Yes, tektokit is completely free and open source.',
    },
    {
      title: 'Does it support TypeScript?',
      content: 'TypeScript support is coming soon in a future release.',
    },
  ],
};

<FAQ config={faqConfig} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | - | Configuration object (required) |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `node` | - | Additional content below FAQs |

## Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | `'Frequently Asked Questions'` | Section title |
| `subtitle` | `string` | - | Section subtitle (above title) |
| `description` | `string` | - | Section description (below title) |
| `faqs` | `array` | `[]` | Array of FAQ items |
| `allowMultiple` | `boolean` | `false` | Allow multiple items open at once |
| `columns` | `number` | `1` | Number of columns (1 or 2) |

## FAQ Item Object

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string` | Question text |
| `content` | `string` or `node` | Answer text or JSX |

## Examples

### Single Column

```jsx
const config = {
  title: 'Common Questions',
  faqs: [
    { title: 'Question 1?', content: 'Answer 1' },
    { title: 'Question 2?', content: 'Answer 2' },
  ],
};

<FAQ config={config} />
```

### Two Columns

```jsx
const config = {
  title: 'Help & Support',
  columns: 2,
  faqs: [
    { title: 'Question 1?', content: 'Answer 1' },
    { title: 'Question 2?', content: 'Answer 2' },
    { title: 'Question 3?', content: 'Answer 3' },
    { title: 'Question 4?', content: 'Answer 4' },
  ],
};

<FAQ config={config} />
```

### Allow Multiple Open

```jsx
const config = {
  title: 'FAQ',
  allowMultiple: true,
  faqs: [
    { title: 'Question 1?', content: 'Answer 1' },
    { title: 'Question 2?', content: 'Answer 2' },
  ],
};

<FAQ config={config} />
```

### With Rich Content

```jsx
const config = {
  title: 'Support Center',
  subtitle: 'We\'re here to help',
  description: 'Browse our most frequently asked questions',
  faqs: [
    {
      title: 'How do I get started?',
      content: (
        <div>
          <p>Getting started is easy:</p>
          <ol>
            <li>Install the package</li>
            <li>Import components</li>
            <li>Start building!</li>
          </ol>
        </div>
      ),
    },
  ],
};

<FAQ config={config} />
```

## Styling

The FAQ component uses Tailwind CSS and adapts to your theme. It automatically handles dark mode if configured.

## Accessibility

- Uses semantic HTML
- Keyboard navigation supported via Accordion
- Proper ARIA labels
- Focus management

## Notes

- Built on top of the `Accordion` component
- Mobile-first responsive design
- Section header is optional (only shows if title/subtitle/description provided)
- FAQs are evenly split across columns when using 2 columns
