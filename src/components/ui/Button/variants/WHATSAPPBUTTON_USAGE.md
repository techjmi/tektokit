# WhatsAppButton Component

Floating WhatsApp contact button for quick customer communication.

## Features

- Fixed position floating button
- 4 position options (all corners)
- 3 size variants (sm, md, lg)
- Optional tooltip on hover
- Pre-filled message support
- Mobile-friendly WhatsApp link
- Smooth hover animations

## Basic Usage

```jsx
import { WhatsAppButton } from 'tektokit';

<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Hi! I'm interested in your services."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phoneNumber` | `string` | - | WhatsApp phone number (required) |
| `message` | `string` | `'Hello!'` | Pre-filled message |
| `position` | `string` | `'bottom-right'` | Button position |
| `size` | `string` | `'lg'` | Button size |
| `showTooltip` | `boolean` | `false` | Show tooltip on hover |
| `tooltipText` | `string` | `'Chat with us'` | Tooltip text |
| `className` | `string` | `''` | Additional CSS classes |

## Position Options

| Position | Description |
|----------|-------------|
| `'bottom-right'` | Bottom right corner (default) |
| `'bottom-left'` | Bottom left corner |
| `'top-right'` | Top right corner |
| `'top-left'` | Top left corner |

## Size Options

| Size | Dimensions | Icon Size |
|------|------------|-----------|
| `'sm'` | `48px` | `24px` |
| `'md'` | `56px` | `28px` |
| `'lg'` | `64px` | `32px` |

## Examples

### Bottom Right (Default)

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
/>
```

### Bottom Left

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  position="bottom-left"
/>
```

### With Custom Message

```jsx
<WhatsAppButton 
  phoneNumber="+919876543210"
  message="Hello! I need help with my order #12345"
/>
```

### With Tooltip

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Hi! I have a question"
  showTooltip={true}
  tooltipText="Need help? Chat with us!"
/>
```

### Different Sizes

```jsx
// Small
<WhatsAppButton 
  phoneNumber="+1234567890"
  size="sm"
/>

// Medium
<WhatsAppButton 
  phoneNumber="+1234567890"
  size="md"
/>

// Large (default)
<WhatsAppButton 
  phoneNumber="+1234567890"
  size="lg"
/>
```

### E-commerce Example

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Hi! I need help with product selection"
  position="bottom-right"
  showTooltip={true}
  tooltipText="Chat with our sales team"
  size="lg"
/>
```

### Support Example

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="I need technical support"
  showTooltip={true}
  tooltipText="24/7 Support Available"
/>
```

### Custom Styling

```jsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  className="hover:bg-green-700"
/>
```

## Phone Number Format

The component automatically cleans the phone number:
- Removes all non-numeric characters
- Works with various formats:
  - `+1234567890`
  - `+1 (234) 567-8900`
  - `1234567890`
  - `+91-98765-43210`

Example:
```jsx
// All these work
<WhatsAppButton phoneNumber="+1 (234) 567-8900" />
<WhatsAppButton phoneNumber="+1234567890" />
<WhatsAppButton phoneNumber="1234567890" />
```

## WhatsApp Link Format

The component generates:
```
https://wa.me/[number]?text=[encoded_message]
```

## Tooltip Behavior

When `showTooltip={true}`:
- Appears on hover
- Positioned above/below button based on position
- Dark background with white text
- Smooth fade-in animation
- Arrow pointing to button

## Animations

- **Hover**: Scales up to 110%
- **Background**: Green-500 → Green-600 on hover
- **Shadow**: Large shadow for depth
- **Transitions**: Smooth 300ms duration

## Fixed Positioning

- Uses `fixed` positioning
- `z-index: 50` (high priority)
- `6` units (24px) from edges
- Stays visible during scroll

## Mobile Behavior

- On mobile devices: Opens WhatsApp app
- On desktop: Opens WhatsApp Web
- Works seamlessly on both platforms

## Accessibility

- Proper `aria-label`: "Contact us on WhatsApp"
- `target="_blank"` for new window
- `rel="noopener noreferrer"` for security
- Keyboard accessible (tab navigation)

## Styling

- Green background (`bg-green-500`)
- White icon (`text-white`)
- Rounded circle (`rounded-full`)
- Drop shadow (`shadow-lg`)
- Hover effects included

## Use Cases

1. **E-commerce**: Customer support and sales
2. **Services**: Quick consultation booking
3. **Support**: 24/7 customer assistance
4. **Lead Generation**: Quick contact for inquiries
5. **Appointments**: Schedule bookings

## Notes

- Returns `null` if `phoneNumber` not provided
- Safe for SSR (no browser-specific code at render)
- Opens in new tab/window
- Message is URL-encoded automatically
- Tooltip is optional and off by default
- Compatible with all modern browsers
