# Dropdown Component

Positioned menu component with items and dividers.

## Import

```javascript
import { Dropdown, DropdownItem, DropdownDivider } from 'tektokit';
```

## Basic Usage

```jsx
const [isOpen, setIsOpen] = useState(false);

<div className="relative">
  <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
  <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <DropdownItem onClick={handleAction}>Action</DropdownItem>
    <DropdownItem onClick={handleAnother}>Another Action</DropdownItem>
  </Dropdown>
</div>
```

## Props

### Dropdown

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Control dropdown visibility |
| `onClose` | `function` | - | Close handler |
| `children` | `ReactNode` | - | Dropdown content |
| `position` | `string` | `'bottom-right'` | Position: `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left`, `right` |
| `size` | `string` | `'md'` | Size: `xs`, `sm`, `md`, `lg`, `xl`, `full` |
| `closeOnClick` | `boolean` | `true` | Close when item clicked |
| `closeOnEsc` | `boolean` | `true` | Close on ESC key press |
| `className` | `string` | - | Additional CSS classes |

### DropdownItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Item content |
| `onClick` | `function` | - | Click handler |
| `icon` | `string` or `ReactNode` | - | Icon before text |
| `disabled` | `boolean` | `false` | Disable interaction |
| `danger` | `boolean` | `false` | Danger styling |
| `className` | `string` | - | Additional CSS classes |

### DropdownDivider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Menu

```jsx
<div className="relative">
  <Button onClick={() => setIsOpen(!isOpen)}>
    Options
  </Button>
  
  <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <DropdownItem icon="user" onClick={handleProfile}>
      Profile
    </DropdownItem>
    <DropdownItem icon="settings" onClick={handleSettings}>
      Settings
    </DropdownItem>
    <DropdownDivider />
    <DropdownItem icon="logout" danger onClick={handleLogout}>
      Logout
    </DropdownItem>
  </Dropdown>
</div>
```

### Different Positions

```jsx
<Dropdown position="bottom-left" isOpen={isOpen} onClose={handleClose}>
  <DropdownItem>Item 1</DropdownItem>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>

<Dropdown position="top-right" isOpen={isOpen} onClose={handleClose}>
  <DropdownItem>Item 1</DropdownItem>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>
```

### With Icons

```jsx
<Dropdown isOpen={isOpen} onClose={handleClose}>
  <DropdownItem icon="home" onClick={goHome}>
    Home
  </DropdownItem>
  <DropdownItem icon="folder" onClick={openFolder}>
    Projects
  </DropdownItem>
  <DropdownItem icon="settings" onClick={openSettings}>
    Settings
  </DropdownItem>
</Dropdown>
```

### With Disabled Items

```jsx
<Dropdown isOpen={isOpen} onClose={handleClose}>
  <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
  <DropdownItem disabled>Share (Coming Soon)</DropdownItem>
  <DropdownDivider />
  <DropdownItem danger onClick={handleDelete}>Delete</DropdownItem>
</Dropdown>
```

### Different Sizes

```jsx
<Dropdown size="sm" isOpen={isOpen} onClose={handleClose}>
  <DropdownItem>Small dropdown</DropdownItem>
</Dropdown>

<Dropdown size="lg" isOpen={isOpen} onClose={handleClose}>
  <DropdownItem>Large dropdown</DropdownItem>
</Dropdown>
```

### User Menu

```jsx
<div className="relative">
  <Button
    icon="user"
    variant="ghost"
    onClick={() => setIsOpen(!isOpen)}
  />
  
  <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom-right">
    <DropdownItem icon="user">My Profile</DropdownItem>
    <DropdownItem icon="settings">Account Settings</DropdownItem>
    <DropdownDivider />
    <DropdownItem icon="help">Help Center</DropdownItem>
    <DropdownDivider />
    <DropdownItem icon="logout" danger onClick={handleLogout}>
      Sign Out
    </DropdownItem>
  </Dropdown>
</div>
```

## With Custom Hook (useToggle)

You can use the `useToggle` hook for cleaner state management:

```jsx
import { Dropdown, DropdownItem } from 'tektokit';
import { useToggle } from 'tektokit';

function MyComponent() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="relative">
      <Button onClick={toggle}>Menu</Button>
      <Dropdown isOpen={isOpen} onClose={toggle}>
        <DropdownItem onClick={() => console.log('Clicked')}>
          Action
        </DropdownItem>
      </Dropdown>
    </div>
  );
}
```

## Component Architecture

```
Dropdown/
├── Dropdown.jsx              # Main component (uses useClickOutside hook)
├── components/
│   ├── DropdownItem.jsx     # Individual menu item
│   └── DropdownDivider.jsx  # Menu separator
├── dropdownConstants.js     # Position and size constants
├── index.js                 # Exports
└── DROPDOWN_USAGE.md        # This file
```

## Notes

- Dropdown requires a relative positioned parent
- Uses `useClickOutside` hook to detect clicks outside
- Closes on ESC key press automatically (can be disabled with `closeOnEsc={false}`)
- Closes when clicking outside automatically
- Closes when clicking items by default (can be disabled with `closeOnClick={false}`)
- Use `danger` prop on DropdownItem for destructive actions
- Supports all positions and sizes via constants
