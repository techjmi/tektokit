# CancelButton Component

A reusable cancel button with consistent styling and behavior across your application.

## Import

```javascript
import { CancelButton } from 'tektokit';
```

## Basic Usage

```javascript
import { CancelButton } from 'tektokit';

function MyForm() {
  const handleCancel = () => {
    console.log('Cancelled');
    // Navigate back or close modal
  };

  return <CancelButton onCancel={handleCancel} />;
}
```

## Features

- ✅ Consistent cancel button styling
- ✅ Customizable (all Button props)
- ✅ Analytics tracking
- ✅ Works with forms, modals, drawers

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | `'Cancel'` | Button text |
| `icon` | `string` | - | Icon name |
| `iconPosition` | `string` | `'left'` | Icon position |
| `size` | `string` | `'md'` | Button size |
| `variant` | `string` | `'outline'` | Button variant |
| `color` | `string` | `'neutral'` | Button color |
| `radius` | `string` | `'md'` | Button radius |
| `fullWidth` | `boolean` | `false` | Full width button |
| `className` | `string` | - | Additional classes |
| `onCancel` | `function` | - | Cancel handler |
| `onClick` | `function` | - | Alternative click handler |
| `trackClick` | `boolean` | `false` | Enable analytics |
| `trackName` | `string` | `'cancel_button'` | Analytics name |
| `trackLocation` | `string` | - | Analytics location |

## Examples

### In Form

```javascript
<form onSubmit={handleSubmit}>
  <input type="text" />
  <div className="flex gap-2">
    <CancelButton onCancel={() => router.back()} />
    <button type="submit">Submit</button>
  </div>
</form>
```

### In Modal Footer

```javascript
import { Modal, ModalFooter, CancelButton, Button } from 'tektokit';

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalFooter>
    <CancelButton onCancel={onClose} />
    <Button variant="solid" color="primary" onClick={handleSave}>
      Save
    </Button>
  </ModalFooter>
</Modal>
```

### In Drawer

```javascript
import { Drawer, DrawerFooter, CancelButton } from 'tektokit';

<Drawer isOpen={isOpen} onClose={onClose}>
  <DrawerFooter>
    <CancelButton onCancel={onClose} fullWidth />
  </DrawerFooter>
</Drawer>
```

### Custom Styling

```javascript
<CancelButton
  onCancel={handleCancel}
  variant="ghost"
  icon="x"
  size="sm"
>
  Discard
</CancelButton>
```

### With Router Navigation

```javascript
import { useRouter } from 'next/navigation';

function EditPage() {
  const router = useRouter();

  return (
    <CancelButton 
      onCancel={() => router.back()} 
      icon="arrow-left"
    >
      Back
    </CancelButton>
  );
}
```

### Form Actions Group

```javascript
<div className="flex justify-end gap-2">
  <CancelButton 
    onCancel={() => router.push('/dashboard')}
  />
  <Button 
    type="submit" 
    variant="solid" 
    color="primary"
  >
    Save Changes
  </Button>
</div>
```

### With Confirmation

```javascript
import { CancelButton, ConfirmDialog } from 'tektokit';
import { useState } from 'react';

function MyForm() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [hasChanges, setHasChanges] = useState(true);

  const handleCancel = () => {
    if (hasChanges) {
      setShowConfirm(true);
    } else {
      router.back();
    }
  };

  return (
    <>
      <CancelButton onCancel={handleCancel} />
      
      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={() => router.back()}
        title="Discard Changes?"
        message="You have unsaved changes. Are you sure you want to leave?"
      />
    </>
  );
}
```

## Common Patterns

### Pattern 1: Form Cancel
```javascript
<CancelButton onCancel={() => router.back()} />
```

### Pattern 2: Modal Close
```javascript
<CancelButton onCancel={onClose} />
```

### Pattern 3: Reset Form
```javascript
<CancelButton onCancel={resetForm}>Reset</CancelButton>
```

## Notes

- Default color is `neutral` (not `danger`)
- Works with both `onCancel` and `onClick` props
- Inherits all Button component props
- SSR-safe
- Analytics-ready
