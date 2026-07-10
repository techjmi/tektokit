# Drawer Component

Slide-out panel component from any direction.

## Import

```javascript
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from 'tektokit';
```

## Basic Usage

```jsx
const [isOpen, setIsOpen] = useState(false);

<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
  <DrawerHeader onClose={() => setIsOpen(false)}>
    <h2>Drawer Title</h2>
  </DrawerHeader>
  <DrawerBody>Drawer content goes here</DrawerBody>
  <DrawerFooter>
    <Button onClick={() => setIsOpen(false)}>Close</Button>
  </DrawerFooter>
</Drawer>
```

## Props

### Drawer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Control drawer visibility |
| `onClose` | `function` | - | Close handler |
| `children` | `ReactNode` | - | Drawer content |
| `position` | `string` | `'right'` | Position: `top`, `right`, `bottom`, `left` |
| `size` | `string` | `'md'` | Size: `sm`, `md`, `lg`, `xl`, `full` |
| `closeOnBackdrop` | `boolean` | `true` | Close when clicking backdrop |
| `closeOnEsc` | `boolean` | `true` | Close on ESC key press |
| `closeOnItemClick` | `boolean` | `true` | Auto-close when clicking elements with `data-drawer-close` |
| `lockBodyScroll` | `boolean` | `true` | Lock body scroll when open |
| `showBackdrop` | `boolean` | `true` | Show backdrop overlay |
| `backdropBlur` | `boolean` | `false` | Apply blur effect to backdrop |
| `className` | `string` | - | Additional CSS classes |
| `config` | `object` | - | Data-driven config: `{header, body, footer, footerAlign}` |

### DrawerHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `onClose` | `function` | - | Close button handler |
| `showCloseButton` | `boolean` | `true` | Show close button |

### DrawerBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |
| `padding` | `boolean` | `true` | Apply default padding |

### DrawerFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content |
| `align` | `string` | `'right'` | Alignment: `left`, `center`, `right`, `between` |
| `padding` | `boolean` | `true` | Apply default padding |

## Examples

### Basic Drawer

```jsx
<Drawer isOpen={isOpen} onClose={handleClose} position="right">
  <DrawerHeader onClose={handleClose}>
    <h2 className="text-xl font-semibold">Menu</h2>
  </DrawerHeader>
  <DrawerBody>
    <nav>Navigation items here</nav>
  </DrawerBody>
  <DrawerFooter>
    <Button onClick={handleClose}>Close</Button>
  </DrawerFooter>
</Drawer>
```

### With Divider

```jsx
import { Divider } from 'tektokit';

<Drawer isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Shopping Cart</h2>
  </DrawerHeader>
  <Divider spacing="none" />
  <DrawerBody>
    {items.map(item => <CartItem key={item.id} {...item} />)}
  </DrawerBody>
  <Divider spacing="none" />
  <DrawerFooter>
    <Button fullWidth>Checkout</Button>
  </DrawerFooter>
</Drawer>
```

### Different Positions

```jsx
<Drawer position="left" isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Left Drawer</h2>
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
</Drawer>

<Drawer position="top" isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Top Drawer</h2>
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
</Drawer>
```

### Different Sizes

```jsx
<Drawer size="sm" isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Small Drawer</h2>
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
</Drawer>

<Drawer size="lg" isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Large Drawer</h2>
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
</Drawer>
```

### Without Close Button

```jsx
<Drawer isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose} showCloseButton={false}>
    <h2>Custom Header</h2>
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
</Drawer>
```

### Full Height Drawer

```jsx
<Drawer size="full" position="right" isOpen={isOpen} onClose={handleClose}>
  <DrawerHeader onClose={handleClose}>
    <h2>Full Size</h2>
  </DrawerHeader>
  <DrawerBody>Takes full viewport height</DrawerBody>
</Drawer>
```

## Auto-Close on Navigation

The Drawer supports automatic closing when users click navigation items. This is useful for mobile menus and navigation drawers.

### How it works

Add `data-drawer-close="true"` to any element inside the drawer that should trigger a close when clicked:

```jsx
<Drawer isOpen={isOpen} onClose={handleClose} closeOnItemClick={true}>
  <DrawerBody>
    <nav>
      {/* This link will close the drawer when clicked */}
      <a href="/home" data-drawer-close="true">Home</a>

      {/* This button will close the drawer when clicked */}
      <button onClick={handleNavigate} data-drawer-close="true">
        Dashboard
      </button>

      {/* This accordion toggle will NOT close the drawer */}
      <button aria-expanded={isOpen}>
        Settings
      </button>

      {/* But items inside the accordion will close it */}
      <button onClick={handleSettings} data-drawer-close="true">
        Profile Settings
      </button>
    </nav>
  </DrawerBody>
</Drawer>
```

### Example: Mobile Navigation

```jsx
<Drawer
  isOpen={mobileMenuOpen}
  onClose={() => setMobileMenuOpen(false)}
  closeOnItemClick={true}
>
  <DrawerHeader onClose={() => setMobileMenuOpen(false)}>
    <Logo />
  </DrawerHeader>
  <DrawerBody>
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-drawer-close="true"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </DrawerBody>
</Drawer>
```

### Disable auto-close

Set `closeOnItemClick={false}` to disable this behavior entirely:

```jsx
<Drawer closeOnItemClick={false}>
  {/* All clicks inside will be ignored */}
</Drawer>
```

## Notes

- Drawer automatically locks body scroll when open
- ESC key closes the drawer by default
- Use `data-drawer-close="true"` on navigation items for auto-close behavior
- Generic and flexible - works with any clickable element (links, buttons, etc.)
- Does NOT assume what should close - you explicitly mark elements
- Clicking backdrop closes the drawer by default
- Use Divider for visual separation between sections
- Position affects animation direction
