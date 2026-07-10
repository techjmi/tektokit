# Testimonials Component

A testimonial section component with grid or carousel layout options.

## Features

- Config-based approach
- Grid or carousel layout
- Star rating display
- Avatar integration
- 2 or 3 column grid layouts
- Responsive and mobile-friendly
- Quote styling

## Basic Usage

```jsx
import { Testimonials } from 'tektokit';

const testimonialsConfig = {
  title: 'What Our Customers Say',
  testimonials: [
    {
      quote: 'This product changed how we work. Highly recommended!',
      name: 'John Doe',
      role: 'CEO at TechCorp',
      avatar: '/images/john.jpg',
      rating: 5,
    },
    {
      quote: 'Amazing experience and great support team.',
      name: 'Jane Smith',
      role: 'Marketing Director',
      avatar: '/images/jane.jpg',
      rating: 5,
    },
  ],
};

<Testimonials config={testimonialsConfig} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `object` | - | Configuration object (required) |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `node` | - | Additional content |

## Config Object

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Section title |
| `subtitle` | `string` | - | Section subtitle (above title) |
| `description` | `string` | - | Section description (below title) |
| `testimonials` | `array` | `[]` | Array of testimonial items |
| `layout` | `string` | `'grid'` | Layout type (`'grid'` or `'carousel'`) |
| `columns` | `number` | `3` | Number of columns (2 or 3, for grid only) |
| `showRating` | `boolean` | `true` | Show star ratings |

## Testimonial Item Object

| Property | Type | Description |
|----------|------|-------------|
| `quote` | `string` | Testimonial text |
| `name` | `string` | Customer name |
| `role` | `string` | Customer role/title |
| `avatar` | `string` | Avatar image URL |
| `rating` | `number` | Star rating (1-5) |

## Examples

### Grid Layout (Default)

```jsx
const config = {
  title: 'Client Reviews',
  subtitle: 'Testimonials',
  layout: 'grid',
  columns: 3,
  testimonials: [
    {
      quote: 'Excellent service and support!',
      name: 'Alice Johnson',
      role: 'Product Manager',
      rating: 5,
    },
    {
      quote: 'Best decision for our team.',
      name: 'Bob Williams',
      role: 'CTO',
      rating: 5,
    },
    {
      quote: 'Highly professional and reliable.',
      name: 'Carol Brown',
      role: 'Founder',
      rating: 4,
    },
  ],
};

<Testimonials config={config} />
```

### Carousel Layout

```jsx
const config = {
  title: 'Customer Success Stories',
  layout: 'carousel',
  testimonials: [
    {
      quote: 'Transformed our entire workflow.',
      name: 'David Lee',
      role: 'Operations Manager',
      avatar: '/images/david.jpg',
      rating: 5,
    },
    {
      quote: 'Worth every penny!',
      name: 'Emma Davis',
      role: 'Small Business Owner',
      avatar: '/images/emma.jpg',
      rating: 5,
    },
  ],
};

<Testimonials config={config} />
```

### Two Columns

```jsx
const config = {
  title: 'What People Are Saying',
  columns: 2,
  testimonials: [
    {
      quote: 'Game changer for productivity.',
      name: 'Frank Miller',
      role: 'Freelancer',
      rating: 5,
    },
    {
      quote: 'Simple and powerful.',
      name: 'Grace Taylor',
      role: 'Designer',
      rating: 4,
    },
  ],
};

<Testimonials config={config} />
```

### Without Ratings

```jsx
const config = {
  title: 'Client Feedback',
  showRating: false,
  testimonials: [
    {
      quote: 'Professional and efficient team.',
      name: 'Henry Wilson',
      role: 'Consultant',
      avatar: '/images/henry.jpg',
    },
  ],
};

<Testimonials config={config} />
```

### Without Avatars

```jsx
const config = {
  testimonials: [
    {
      quote: 'Great product!',
      name: 'Anonymous User',
      role: 'Customer',
      rating: 5,
    },
  ],
};

<Testimonials config={config} />
```

## Layout Types

### Grid
Displays testimonials in a responsive grid.

```jsx
layout: 'grid'
```

### Carousel
Displays testimonials in a swipeable carousel using the Carousel component.

```jsx
layout: 'carousel'
```

## Carousel Breakpoints

When using carousel layout:
- **Mobile**: 1 slide per view
- **Tablet (640px+)**: 1 slide per view
- **Desktop (768px+)**: 2 slides per view
- **Large (1024px+)**: 3 slides per view

## Rating Display

Star ratings use the `FiStar` icon:
- Filled stars: Yellow (`text-yellow-500 fill-yellow-500`)
- Empty stars: Gray with opacity (`opacity-30`)

## Avatar Integration

Uses the library's `Avatar` component:
- Shows image if `avatar` provided
- Shows initials fallback based on `name`
- Size: `md`

## Card Styling

Each testimonial card features:
- Padding: `p-6 md:p-8`
- Border radius: `rounded-xl`
- Border
- Full height: `h-full`
- Flexbox layout for consistent spacing

## Responsive Design

- **Mobile**: Single column
- **Tablet (md)**: 2 columns
- **Desktop (lg)**: 3 columns (if configured)
- Font sizes scale with breakpoints

## Accessibility

- Semantic HTML with `<blockquote>` for quotes
- Proper heading hierarchy
- Avatar alt text from names
- Keyboard navigation (carousel)

## Notes

- All testimonial properties are optional except `quote`
- Section header is optional
- Works with or without avatars
- Carousel uses Swiper via the Carousel component
- Ratings default to showing, can be hidden with `showRating: false`
