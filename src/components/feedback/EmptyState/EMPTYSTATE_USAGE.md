# EmptyState Component

Generic empty state component for displaying empty data states, 404 pages, and error states.

## Import

```javascript
import { EmptyState, EMPTY_STATE_SIZE } from 'tektokit';
```

## Basic Usage

```jsx
<EmptyState
  icon="inbox"
  heading="No items found"
  description="There are no items to display at the moment."
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | - | Icon name from the Icon component |
| `customIcon` | `ReactNode` | - | Custom icon or SVG element |
| `title` | `string` | - | Large title text (typically for 404 pages) |
| `heading` | `string` | - | Main heading text |
| `description` | `string` | - | Supporting description text |
| `action` | `ReactNode` | - | Action button(s) or custom elements |
| `size` | `string` | `'md'` | Size variant: `sm`, `md`, `lg` |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Empty Data State

```jsx
<EmptyState
  icon="inbox"
  heading="No messages"
  description="You don't have any messages yet."
/>
```

### Empty Search Results

```jsx
<EmptyState
  icon="search"
  heading="No results found"
  description="Try adjusting your search terms or filters."
  action={
    <Button onClick={handleClearFilters}>
      Clear Filters
    </Button>
  }
/>
```

### 404 Page

```jsx
<EmptyState
  title="404"
  icon="alert"
  heading="Page Not Found"
  description="The page you're looking for doesn't exist or has been moved."
  size="lg"
  action={
    <>
      <Button as="a" href="/" color="primary">
        Back to Home
      </Button>
      <Button as="a" href="/contact" variant="outline">
        Contact Support
      </Button>
    </>
  }
/>
```

### Error State

```jsx
<EmptyState
  icon="close"
  heading="Something went wrong"
  description="We couldn't load your data. Please try again."
  action={
    <Button onClick={handleRetry}>
      Try Again
    </Button>
  }
/>
```

### Custom Icon

```jsx
<EmptyState
  customIcon={
    <svg className="w-8 h-8 text-gray-400">
      <path d="..." />
    </svg>
  }
  heading="Custom empty state"
  description="With your own icon"
/>
```

### Multiple Action Buttons

```jsx
<EmptyState
  icon="folder"
  heading="No projects yet"
  description="Create your first project to get started."
  action={
    <>
      <Button onClick={handleCreate} color="primary">
        Create Project
      </Button>
      <Button onClick={handleImport} variant="outline">
        Import Project
      </Button>
    </>
  }
/>
```

### Using Size Constants

```jsx
import { EmptyState, EMPTY_STATE_SIZE } from 'tektokit';

<EmptyState
  size={EMPTY_STATE_SIZE.sm}
  icon="inbox"
  heading="No data"
  description="Add items to see them here."
/>
```

## Size Variants

### Small

```jsx
<EmptyState
  size="sm"
  icon="inbox"
  heading="No items"
  description="Add items to get started."
/>
```

### Medium (Default)

```jsx
<EmptyState
  size="md"
  icon="folder"
  heading="No files"
  description="Upload files to see them here."
/>
```

### Large

```jsx
<EmptyState
  size="lg"
  icon="alert"
  heading="Access Denied"
  description="You don't have permission to view this page."
/>
```

## Notes

- The `title` prop is designed for large text like "404" on error pages
- The `heading` prop is the main message to the user
- Either `icon` or `customIcon` can be used, but not both
- Multiple action buttons should be wrapped in a fragment
- The component is fully responsive and centered by default
