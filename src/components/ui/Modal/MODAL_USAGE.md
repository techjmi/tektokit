# Modal Component

Dialog component with backdrop and flexible content layout.

## Import

```javascript
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'tektokit';
```

## Basic Usage

```jsx
const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader title="Modal Title" onClose={() => setIsOpen(false)} />
  <ModalBody>Modal content goes here</ModalBody>
  <ModalFooter>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </ModalFooter>
</Modal>
```

## Props

### Modal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Control modal visibility |
| `onClose` | `function` | - | Close handler |
| `children` | `ReactNode` | - | Modal content |
| `header` | `object` | - | Header config for data-driven mode |
| `body` | `string` or `ReactNode` | - | Body content for data-driven mode |
| `footer` | `array` | - | Footer buttons for data-driven mode |
| `footerAlign` | `string` | `'right'` | Footer alignment: `left`, `center`, `right`, `between` |
| `size` | `string` | `'md'` | Size: `sm`, `md`, `lg`, `xl`, `full` |
| `placement` | `string` | `'center'` | Position: `top`, `center`, `bottom` |
| `closeOnBackdrop` | `boolean` | `true` | Close when clicking backdrop |
| `closeOnEscape` | `boolean` | `true` | Close on ESC key press |
| `lockScroll` | `boolean` | `true` | Lock body scroll when open |
| `backdrop` | `string` | `'dark'` | Backdrop: `dark`, `light`, `blur`, `none` |
| `className` | `string` | - | Additional CSS classes |

### ModalHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Header title |
| `subtitle` | `string` | - | Header subtitle |
| `onClose` | `function` | - | Close button handler |
| `children` | `ReactNode` | - | Custom header content |
| `padding` | `boolean` | `true` | Apply default padding |

### ModalBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |
| `padding` | `boolean` | `true` | Apply default padding |
| `scrollable` | `boolean` | `false` | Enable scrolling for long content |

### ModalFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content (composition mode) |
| `buttons` | `array` | - | Array of button configs (data-driven mode) |
| `onClose` | `function` | - | Close handler for auto-close functionality |
| `align` | `string` | `'right'` | Alignment: `left`, `center`, `right`, `between` |
| `padding` | `boolean` | `true` | Apply default padding |

#### Button Config (for `buttons` array)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Button text |
| `variant` | `string` | `'solid'` | Button variant |
| `color` | `string` | `'primary'` | Button color |
| `size` | `string` | `'md'` | Button size |
| `onClick` | `function` | - | Click handler (runs before auto-close) |
| `closeModal` | `boolean` | `true` | Auto-close modal after click (set to `false` to keep open) |
| `disabled` | `boolean` | `false` | Disable button |

## Examples

### Composition Mode

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Delete Item" onClose={handleClose} />
  <ModalBody>
    Are you sure you want to delete this item? This action cannot be undone.
  </ModalBody>
  <ModalFooter align="between">
    <Button variant="ghost" onClick={handleClose}>Cancel</Button>
    <Button color="danger" onClick={handleDelete}>Delete</Button>
  </ModalFooter>
</Modal>
```

### With Divider

```jsx
import { Divider } from 'tektokit';

<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Settings" onClose={handleClose} />
  <Divider spacing="none" />
  <ModalBody>Your settings content here</ModalBody>
  <Divider spacing="none" />
  <ModalFooter align="between">
    <Button variant="ghost">Cancel</Button>
    <Button color="primary">Save Changes</Button>
  </ModalFooter>
</Modal>
```

### Data-Driven Mode

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  config={{
    header: { title: "Delete Item", subtitle: "This cannot be undone" },
    body: "Are you sure you want to delete this item?",
    footer: [
      { label: "Cancel", variant: "outlined" },
      { label: "Delete", color: "danger", onClick: handleDelete }
    ],
    footerAlign: "right"
  }}
/>
```

**Note:** Footer buttons automatically close the modal after their `onClick` handler runs. No need to call `handleClose` manually!

### Different Sizes

```jsx
<Modal size="sm" isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Small Modal" onClose={handleClose} />
  <ModalBody>Small modal content</ModalBody>
</Modal>

<Modal size="lg" isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Large Modal" onClose={handleClose} />
  <ModalBody>Large modal content</ModalBody>
</Modal>
```

### Custom Placement

```jsx
<Modal placement="top" isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Top Aligned" onClose={handleClose} />
  <ModalBody>Modal aligned to top</ModalBody>
</Modal>
```

### Scrollable Content

```jsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalHeader title="Long Content" onClose={handleClose} />
  <ModalBody scrollable>
    {longContent}
  </ModalBody>
  <ModalFooter>
    <Button onClick={handleClose}>Close</Button>
  </ModalFooter>
</Modal>
```

### Preventing Auto-Close

If you need a button that **doesn't** close the modal (e.g., form validation), set `closeModal: false`:

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  config={{
    header: { title: "Submit Form" },
    body: <FormComponent />,
    footer: [
      { label: "Cancel", variant: "outlined" },  // Auto-closes
      {
        label: "Validate",
        onClick: handleValidate,
        closeModal: false  // Stays open to show validation errors
      },
      {
        label: "Submit",
        color: "primary",
        onClick: handleSubmit  // Auto-closes after submit
      }
    ]
  }}
/>
```

## Notes

- **Auto-Close**: Footer buttons in data-driven mode automatically close the modal after `onClick` runs
- **Prevent Close**: Set `closeModal: false` on individual buttons to keep modal open
- Modal automatically locks body scroll when open
- ESC key closes the modal by default
- Clicking backdrop closes the modal by default
- Use ConfirmDialog for simple yes/no confirmations
- Divider component works well for visual separation
