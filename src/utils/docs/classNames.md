# classNames Utility

Conditional className builder for React components. A lightweight utility to construct className strings conditionally.

## Import

```javascript
import { classNames } from 'tektokit';
```

## Usage

### Basic Usage

```javascript
// Simple strings
classNames('btn', 'primary');
// → "btn primary"

// With conditions
classNames('btn', isActive && 'active', isDisabled && 'disabled');
// → "btn active" (if isActive is true, isDisabled is false)

// Falsy values are ignored
classNames('btn', null, undefined, false, '');
// → "btn"
```

### Common Patterns

#### Button States

```jsx
import { classNames } from 'tektokit';

const Button = ({ variant, size, disabled, className }) => (
  <button
    className={classNames(
      'btn',
      variant === 'primary' && 'btn-primary',
      variant === 'secondary' && 'btn-secondary',
      size === 'sm' && 'btn-sm',
      size === 'lg' && 'btn-lg',
      disabled && 'btn-disabled',
      className
    )}
  >
    Click me
  </button>
);
```

#### Conditional Classes

```jsx
const Card = ({ active, hover, className }) => (
  <div
    className={classNames(
      'card',
      active && 'card-active',
      hover && 'card-hover',
      className
    )}
  >
    Content
  </div>
);
```

#### Tailwind CSS

```jsx
const Alert = ({ type, className }) => (
  <div
    className={classNames(
      'p-4 rounded-lg',
      type === 'success' && 'bg-green-100 text-green-800',
      type === 'error' && 'bg-red-100 text-red-800',
      type === 'warning' && 'bg-yellow-100 text-yellow-800',
      className
    )}
  >
    Alert message
  </div>
);
```

#### Complex Conditions

```jsx
const Input = ({ error, focused, disabled, className }) => (
  <input
    className={classNames(
      'input',
      error && !disabled && 'input-error',
      focused && !error && 'input-focused',
      disabled && 'input-disabled',
      className
    )}
  />
);
```

## API

### classNames(...args)

**Parameters:**
- `...args` - Any number of arguments (strings, booleans, null, undefined)

**Returns:**
- `string` - Joined className string with falsy values filtered out

**Examples:**

```javascript
classNames('a', 'b');                    // → "a b"
classNames('a', true && 'b');            // → "a b"
classNames('a', false && 'b');           // → "a"
classNames('a', null, undefined, 'b');   // → "a b"
classNames('a', '', 'b');                // → "a b"
```

## Notes

- Automatically filters out falsy values (false, null, undefined, '')
- Joins remaining values with spaces
- Preserves user's className prop by accepting it as last argument
- Works with any CSS framework (Tailwind, Bootstrap, custom CSS)
- Zero dependencies
- TypeScript friendly

## Comparison with clsx/classnames

This utility is intentionally simple and lightweight. For more complex use cases (objects, arrays), consider using `clsx` or `classnames` packages.

```javascript
// Our utility (simple, covers 90% of use cases)
classNames('btn', active && 'active', className);

// clsx (supports objects and arrays)
clsx('btn', { active }, [className]);
```
