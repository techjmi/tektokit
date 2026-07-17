# Stepper Component

Display progress through numbered steps with visual indicators.

## Import

```javascript
import { Stepper, StepperItem } from 'tektokit';
```

## Basic Usage

```jsx
const config = {
  steps: [
    { label: "Account", description: "Create your account" },
    { label: "Profile", description: "Complete your profile" },
    { label: "Verification", description: "Verify your email" },
    { label: "Done", description: "All set!" }
  ]
};

<Stepper currentStep={1} config={config} />
```

## Props

### Stepper

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentStep` | `number` | `0` | Current active step (0-indexed) |
| `orientation` | `string` | `'horizontal'` | Layout: `horizontal` or `vertical` |
| `config` | `object` | - | Configuration object with steps |
| `children` | `ReactNode` | - | StepperItem components for composition mode |
| `className` | `string` | - | Additional CSS classes |

### Config Object

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `array` | `[]` | Array of step objects |
| `showNumbers` | `boolean` | `true` | Show step numbers in circles |
| `showConnector` | `boolean` | `true` | Show connecting lines between steps |
| `stepClassName` | `string` | - | Class applied to each step |

### Step Object

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Step label text |
| `description` | `string` | Optional description below label |
| `icon` | `string` or `ReactNode` | Optional custom icon |

### StepperItem (Composition Mode)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Step label |
| `description` | `string` | - | Optional description |
| `icon` | `string` or `ReactNode` | - | Custom icon |
| `onClick` | `function` | - | Click handler (for clickable steps) |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Horizontal Stepper (Default)

```jsx
const config = {
  steps: [
    { label: "Cart", description: "Review items" },
    { label: "Shipping", description: "Enter address" },
    { label: "Payment", description: "Complete purchase" }
  ]
};

<Stepper currentStep={1} config={config} />
```

### Vertical Stepper

```jsx
<Stepper 
  currentStep={2} 
  orientation="vertical"
  config={config} 
/>
```

### Without Numbers

```jsx
const config = {
  steps: [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" }
  ],
  showNumbers: false
};

<Stepper currentStep={0} config={config} />
```

### With Icons

```jsx
const config = {
  steps: [
    { label: "Login", icon: "user" },
    { label: "Verify", icon: "shield" },
    { label: "Complete", icon: "check" }
  ]
};

<Stepper currentStep={1} config={config} />
```

### Composition Mode

```jsx
<Stepper currentStep={1}>
  <StepperItem label="Account" description="Create account" />
  <StepperItem label="Profile" description="Add details" />
  <StepperItem label="Done" description="All set!" />
</Stepper>
```

### Clickable Steps

```jsx
const [current, setCurrent] = useState(0);

<Stepper currentStep={current}>
  <StepperItem 
    label="Step 1" 
    onClick={() => setCurrent(0)} 
  />
  <StepperItem 
    label="Step 2" 
    onClick={() => setCurrent(1)} 
  />
  <StepperItem 
    label="Step 3" 
    onClick={() => setCurrent(2)} 
  />
</Stepper>
```

## States

- **Completed**: Steps before `currentStep` - shows checkmark, primary color
- **Active**: Current step - shows number/icon, primary color with ring
- **Upcoming**: Steps after `currentStep` - shows number, muted colors

## Accessibility

- Uses semantic HTML
- Appropriate ARIA attributes
- Keyboard navigation support (when clickable)

## Common Use Cases

1. **Multi-step Forms** - Guide users through form completion
2. **Onboarding** - Show progress through setup process
3. **Checkout Flow** - Display cart → shipping → payment steps
4. **Progress Tracking** - Visualize task completion status
