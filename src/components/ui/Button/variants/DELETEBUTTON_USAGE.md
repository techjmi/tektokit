# DeleteButton Component

A reusable delete button with built-in confirmation dialog and loading states. Handles delete operations consistently across your application.

## Import

```javascript
import { DeleteButton } from 'tektokit';
```

## Basic Usage

### Simple Delete

```javascript
import { DeleteButton } from 'tektokit';

function ProductCard({ product }) {
  const handleDelete = async () => {
    await ProductService.delete(product.id);
    // Refresh list or redirect
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <DeleteButton onDelete={handleDelete} />
    </div>
  );
}
```

## Features

- ✅ Built-in confirmation dialog
- ✅ Loading states
- ✅ Error handling
- ✅ Customizable styling
- ✅ Success/error callbacks
- ✅ Analytics tracking
- ✅ All Button component props

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | `'Delete'` | Button text |
| `icon` | `string` | `'trash'` | Icon name |
| `iconPosition` | `string` | `'left'` | Icon position |
| `size` | `string` | `'md'` | Button size |
| `variant` | `string` | `'outline'` | Button variant |
| `color` | `string` | `'danger'` | Button color |
| `radius` | `string` | `'md'` | Button radius |
| `fullWidth` | `boolean` | `false` | Full width button |
| `className` | `string` | - | Additional classes |
| `showConfirmation` | `boolean` | `true` | Show confirmation dialog |
| `confirmTitle` | `string` | `'Confirm Delete'` | Dialog title |
| `confirmMessage` | `string` | `'Are you sure...'` | Dialog message |
| `confirmButtonText` | `string` | `'Delete'` | Confirm button text |
| `cancelButtonText` | `string` | `'Cancel'` | Cancel button text |
| **`onDelete`** | `function` | - | **Required** - Delete handler |
| `onSuccess` | `function` | - | Success callback |
| `onError` | `function` | - | Error callback |
| `isLoading` | `boolean` | `false` | External loading state |
| `loadingText` | `string` | `'Deleting...'` | Loading text |
| `trackClick` | `boolean` | `false` | Enable analytics |
| `trackName` | `string` | `'delete_button'` | Analytics name |
| `trackLocation` | `string` | - | Analytics location |

## Examples

### Delete Item from List

```javascript
'use client';

import { DeleteButton } from 'tektokit';
import { toast } from 'react-hot-toast';

function ItemList({ items, onRefresh }) {
  const handleDelete = async (id) => {
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    onRefresh();
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4">
          <span>{item.name}</span>
          <DeleteButton
            onDelete={() => handleDelete(item.id)}
            onSuccess={() => toast.success('Item deleted')}
            onError={() => toast.error('Failed to delete')}
            size="sm"
          />
        </div>
      ))}
    </div>
  );
}
```

### Delete with Custom Confirmation

```javascript
<DeleteButton
  onDelete={handleDelete}
  confirmTitle="Delete Product?"
  confirmMessage="This product will be permanently removed from your inventory."
  confirmButtonText="Yes, Delete Product"
  cancelButtonText="Keep Product"
/>
```

### Delete User Account

```javascript
function DeleteAccountSection() {
  const router = useRouter();

  const handleDeleteAccount = async () => {
    await UserService.deleteAccount();
    router.push('/');
  };

  return (
    <div className="border border-red-200 rounded p-4">
      <h3 className="text-lg font-semibold mb-2">Delete Account</h3>
      <p className="text-sm text-gray-600 mb-4">
        Once you delete your account, there is no going back. Please be certain.
      </p>
      <DeleteButton
        onDelete={handleDeleteAccount}
        confirmTitle="Delete Your Account?"
        confirmMessage="This will permanently delete your account and all associated data. This action cannot be undone."
        confirmButtonText="Delete My Account"
        variant="solid"
        color="danger"
      >
        Delete Account
      </DeleteButton>
    </div>
  );
}
```

### Icon Only Delete Button

```javascript
<DeleteButton
  onDelete={handleDelete}
  icon="trash"
  children={null}
  size="sm"
  variant="ghost"
  aria-label="Delete item"
/>
```

### Without Confirmation (Dangerous!)

```javascript
<DeleteButton
  onDelete={handleDelete}
  showConfirmation={false}
  onSuccess={() => toast.success('Deleted')}
/>
```

### In Table Row

```javascript
function UserTable({ users, onRefresh }) {
  const handleDelete = async (userId) => {
    await UserService.delete(userId);
    onRefresh();
  };

  return (
    <table>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <DeleteButton
                onDelete={() => handleDelete(user.id)}
                size="sm"
                variant="ghost"
                icon="trash"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### With Loading State

```javascript
function ProductCard({ product }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await ProductService.delete(product.id);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <DeleteButton
      onDelete={handleDelete}
      isLoading={isDeleting}
      loadingText="Removing..."
    />
  );
}
```

### Multiple Items Delete

```javascript
function BulkActions({ selectedIds, onSuccess }) {
  const handleBulkDelete = async () => {
    await Promise.all(
      selectedIds.map((id) => ItemService.delete(id))
    );
    onSuccess();
  };

  return (
    <DeleteButton
      onDelete={handleBulkDelete}
      confirmTitle={`Delete ${selectedIds.length} items?`}
      confirmMessage={`Are you sure you want to delete ${selectedIds.length} selected items?`}
      disabled={selectedIds.length === 0}
    >
      Delete Selected ({selectedIds.length})
    </DeleteButton>
  );
}
```

### With Analytics

```javascript
<DeleteButton
  onDelete={handleDelete}
  trackClick={true}
  trackName="delete_product"
  trackLocation="product_card"
  trackData={{ productId: product.id }}
/>
```

## Common Patterns

### Pattern 1: List Item Delete

```javascript
<DeleteButton
  onDelete={handleDelete}
  size="sm"
  variant="ghost"
  icon="trash"
/>
```

### Pattern 2: Card/Panel Delete

```javascript
<DeleteButton
  onDelete={handleDelete}
  size="md"
  variant="outline"
  color="danger"
/>
```

### Pattern 3: Dangerous Action (Account Delete)

```javascript
<DeleteButton
  onDelete={handleDelete}
  variant="solid"
  color="danger"
  confirmTitle="Are you absolutely sure?"
  confirmMessage="This is a permanent action..."
/>
```

### Pattern 4: Soft Delete / Archive

```javascript
<DeleteButton
  onDelete={handleArchive}
  icon="archive"
  color="warning"
  confirmTitle="Archive Item?"
  confirmMessage="This item will be moved to archive."
  confirmButtonText="Archive"
>
  Archive
</DeleteButton>
```

## Integration Examples

### With React Query

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';

function ProductCard({ product }) {
  const queryClient = useQueryClient();
  
  const deleteMutation = useMutation({
    mutationFn: (id) => ProductService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
      toast.success('Product deleted');
    },
  });

  return (
    <DeleteButton
      onDelete={() => deleteMutation.mutate(product.id)}
      isLoading={deleteMutation.isPending}
    />
  );
}
```

### With Redux

```javascript
import { useDispatch } from 'react-redux';
import { deleteProduct } from '@/redux/slice/productSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await ProductService.delete(product.id);
    dispatch(deleteProduct(product.id));
  };

  return <DeleteButton onDelete={handleDelete} />;
}
```

## Notes

- Always provide `onDelete` prop (required)
- Handles loading state automatically
- Confirmation dialog uses `ConfirmDialog` component
- Inherits all Button component props
- Works with any data/API (no dependencies)
- Default color is `danger` (red)
- SSR-safe (uses 'use client')
- Use `showConfirmation={false}` carefully - very dangerous!
