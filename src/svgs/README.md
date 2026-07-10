# SVG Icons

Common SVG icons used across components. These are simple, reusable SVG components.

## Available Icons

### UserIcon

Default user/profile icon used as avatar fallback.

```jsx
import { UserIcon } from 'tektokit';

<UserIcon className="w-8 h-8 text-gray-600" />
```

## Usage in Components

### Avatar Component

```jsx
// Avatar uses UserIcon as default fallback
<Avatar name="John Doe" />
```

## Adding New SVG Icons

When adding new SVG icons:

1. Create a new file in `shamim-ui/src/svgs/`
2. Export as a React component
3. Accept `className` and spread props
4. Export from `index.js`

Example:

```jsx
// svgs/NewIcon.jsx
import React from 'react';

const NewIcon = ({ className = '', ...props }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="..." />
    </svg>
  );
};

export default NewIcon;
```

```javascript
// svgs/index.js
export { default as NewIcon } from './NewIcon.jsx';
```

## Notes

- All SVGs accept className for styling
- Use currentColor for fill to inherit text color
- Keep viewBox consistent (usually 0 0 24 24)
- Export from index.js for clean imports
