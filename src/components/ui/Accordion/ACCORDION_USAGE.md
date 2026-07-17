# Accordion Component

Collapsible sections component for organizing content. Perfect for FAQs, settings, and documentation.

## Import

```javascript
import { Accordion, AccordionItem } from 'tektokit';
```

## Basic Usage

### Data-Driven Mode (Recommended)

```javascript
import { Accordion } from 'tektokit';

const items = [
  { title: 'What is React?', content: 'React is a JavaScript library...' },
  { title: 'How to install?', content: 'Run npm install react...' },
];

<Accordion config={{ items }} />
```

### Composition Mode (Manual Control)

```javascript
import { Accordion, AccordionItem } from 'tektokit';

<Accordion allowMultiple>
  <AccordionItem title="Section 1" isOpen={true} onToggle={() => {}}>
    Content 1
  </AccordionItem>
  <AccordionItem title="Section 2" isOpen={false} onToggle={() => {}}>
    Content 2
  </AccordionItem>
</Accordion>
```

## Features

- ✅ Two usage modes: Data-Driven and Composition
- ✅ Single or multiple open items
- ✅ Default open items
- ✅ Disabled items
- ✅ Custom icons
- ✅ Smooth animations
- ✅ Keyboard accessible
- ✅ Fully customizable

## Accordion Props

### Basic Props (Direct)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | - | Manual AccordionItem children (Composition Mode) |
| `allowMultiple` | `boolean` | `false` | Allow multiple items open simultaneously |
| `defaultOpen` | `array/number` | `[]` | Default open item(s) indices |
| `className` | `string` | `''` | Container CSS classes |

### Config Object (for Data-Driven Mode)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `array` | `[]` | Array of accordion items (see Item Object below) |
| `itemClassName` | `string` | `''` | CSS classes for each item |

### Item Object (in config.items)

| Property | Type | Description |
|----------|------|-------------|
| `title` | `string/node` | Item title/header |
| `content` | `node` | Item content body |
| `disabled` | `boolean` | Disable item interaction |
| `icon` | `string` | Custom icon name (default: 'chevron-down') |
| `config` | `object` | Item-specific configuration (see AccordionItem Config) |

## AccordionItem Props

### Basic Props (Direct)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string/node` | - | Item title/header (required) |
| `children` | `node` | - | Item content |
| `isOpen` | `boolean` | - | Controlled open state |
| `onToggle` | `function` | - | Toggle callback |
| `disabled` | `boolean` | `false` | Disable item |
| `icon` | `string` | `'chevron-down'` | Icon name |
| `className` | `string` | `''` | Item container CSS classes |

### Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `titleClassName` | `string` | `''` | Title CSS classes |
| `contentClassName` | `string` | `''` | Content wrapper CSS classes |
| `iconSize` | `number` | `20` | Icon size in pixels |

## Examples

### FAQ Section (Data-Driven)

```javascript
const faqs = [
  {
    title: 'What payment methods do you accept?',
    content: 'We accept all major credit cards, PayPal, and bank transfers.',
  },
  {
    title: 'How long does shipping take?',
    content: 'Standard shipping takes 3-5 business days.',
  },
  {
    title: 'What is your return policy?',
    content: '30-day money-back guarantee on all products.',
  },
];

<Accordion config={{ items: faqs }} />
```

### Allow Multiple Open

```javascript
<Accordion
  allowMultiple={true}
  defaultOpen={[0, 1]}
  config={{ items }}
/>
```

### With Default Open Item

```javascript
<Accordion
  defaultOpen={0}
  config={{ items }}
/>
```

### With Custom Icon

```javascript
const items = [
  {
    title: 'Advanced Settings',
    content: 'Configure advanced options...',
    icon: 'settings',
  },
];

<Accordion config={{ items }} />
```

### Disabled Item

```javascript
const items = [
  { title: 'Available', content: 'Content...' },
  { title: 'Coming Soon', content: 'Content...', disabled: true },
];

<Accordion config={{ items }} />
```

### Composition Mode with Manual Control

```javascript
import { useState } from 'react';
import { Accordion, AccordionItem } from 'tektokit';

function MyAccordion() {
  const [open, setOpen] = useState([0]);

  const handleToggle = (index) => {
    setOpen(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Accordion allowMultiple>
      <AccordionItem
        title="Section 1"
        isOpen={open.includes(0)}
        onToggle={() => handleToggle(0)}
      >
        Content for section 1
      </AccordionItem>
      <AccordionItem
        title="Section 2"
        isOpen={open.includes(1)}
        onToggle={() => handleToggle(1)}
      >
        Content for section 2
      </AccordionItem>
    </Accordion>
  );
}
```

### Custom Styling via Config

```javascript
const items = [
  {
    title: 'Styled Item',
    content: 'This has custom styling',
    config: {
      titleClassName: 'text-blue-600 font-bold',
      contentClassName: 'bg-blue-50',
      iconSize: 24,
    },
  },
];

<Accordion config={{ items }} />
```

### Settings Panel

```javascript
const settings = [
  {
    title: 'Account Settings',
    content: (
      <div className="space-y-2">
        <button className="btn">Change Password</button>
        <button className="btn">Update Email</button>
      </div>
    ),
  },
  {
    title: 'Privacy Settings',
    content: (
      <div>
        <label>
          <input type="checkbox" /> Make profile public
        </label>
      </div>
    ),
  },
];

<Accordion allowMultiple config={{ items: settings }} />
```

### Documentation Sections

```javascript
const docs = [
  {
    title: 'Getting Started',
    content: (
      <div>
        <h3>Installation</h3>
        <pre>npm install package</pre>
        <h3>Usage</h3>
        <p>Import and use...</p>
      </div>
    ),
  },
  {
    title: 'API Reference',
    content: 'API documentation...',
  },
];

<Accordion defaultOpen={0} config={{ items: docs }} />
```

### Product Features

```javascript
const features = [
  {
    title: 'Specifications',
    content: (
      <ul>
        <li>Weight: 1.5 kg</li>
        <li>Dimensions: 30x20x10 cm</li>
        <li>Material: Aluminum</li>
      </ul>
    ),
  },
  {
    title: 'Warranty',
    content: '2-year limited warranty included.',
  },
];

<Accordion config={{ items: features }} />
```

### Styled

```javascript
<Accordion
  className="max-w-2xl mx-auto shadow-lg"
  config={{
    items,
    itemClassName: 'hover:bg-blue-50'
  }}
/>
```

## Keyboard Navigation

- **Tab** - Focus next item
- **Shift + Tab** - Focus previous item
- **Enter/Space** - Toggle focused item

## Common Patterns

### Pattern 1: FAQ Page (Data-Driven)
```javascript
<Accordion config={{ items: faqs }} />
```

### Pattern 2: Settings (Allow Multiple)
```javascript
<Accordion allowMultiple config={{ items: settings }} />
```

### Pattern 3: Documentation (Default Open)
```javascript
<Accordion defaultOpen={0} config={{ items: docs }} />
```

### Pattern 4: Manual Composition (Full Control)
```javascript
<Accordion>
  <AccordionItem title="Section 1" isOpen={open1} onToggle={toggle1}>
    Content 1
  </AccordionItem>
  <AccordionItem title="Section 2" isOpen={open2} onToggle={toggle2}>
    Content 2
  </AccordionItem>
</Accordion>
```

## Component Architecture

```
Accordion/
├── Accordion.jsx           # Main component (supports both modes)
├── components/
│   └── AccordionItem.jsx  # Separate item component
├── index.js               # Exports
└── ACCORDION_USAGE.md     # This file
```

## Notes

- **Two modes**: Data-Driven (via `config`) or Composition (via `children`)
- Only one item open by default (unless `allowMultiple={true}`)
- Smooth height transitions
- Uses Icon component for chevrons
- Accessible with ARIA attributes
- Mobile-friendly
- Each item can have its own `config` for custom styling
