# LogoutButton Component

A reusable logout button with built-in confirmation dialog and loading states. Handles the logout flow consistently across your application.

## Import

```javascript
import { LogoutButton } from 'tektokit';
```

## Basic Usage

### Simple Logout

```javascript
import { LogoutButton } from 'tektokit';

function Header() {
  const handleLogout = async () => {
    await AuthService.signout();
    // Clear auth state
    dispatch(logout());
    // Redirect
    router.push('/');
  };

  return <LogoutButton onLogout={handleLogout} />;
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
| `children` | `node` | `'Logout'` | Button text |
| `icon` | `string` | `'log-out'` | Icon name |
| `iconPosition` | `string` | `'left'` | Icon position |
| `size` | `string` | `'md'` | Button size |
| `variant` | `string` | `'outline'` | Button variant |
| `color` | `string` | `'danger'` | Button color |
| `radius` | `string` | `'md'` | Button radius |
| `fullWidth` | `boolean` | `false` | Full width button |
| `className` | `string` | - | Additional classes |
| `showConfirmation` | `boolean` | `true` | Show confirmation dialog |
| `confirmTitle` | `string` | `'Confirm Logout'` | Dialog title |
| `confirmMessage` | `string` | `'Are you sure...'` | Dialog message |
| `confirmButtonText` | `string` | `'Logout'` | Confirm button text |
| `cancelButtonText` | `string` | `'Cancel'` | Cancel button text |
| **`onLogout`** | `function` | - | **Required** - Logout handler |
| `onSuccess` | `function` | - | Success callback |
| `onError` | `function` | - | Error callback |
| `isLoading` | `boolean` | `false` | External loading state |
| `loadingText` | `string` | `'Logging out...'` | Loading text |
| `trackClick` | `boolean` | `false` | Enable analytics |
| `trackName` | `string` | `'logout_button'` | Analytics name |
| `trackLocation` | `string` | - | Analytics location |

## Examples

### With Redux & Router (Next.js)

```javascript
'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { LogoutButton } from 'tektokit';
import { logout } from '@/redux/slice/authSlice';
import AuthService from '@/services/auth.service';

function UserMenu() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await AuthService.signout();
    dispatch(logout());
    router.push('/');
  };

  const handleSuccess = () => {
    console.log('Logged out successfully');
  };

  const handleError = (error) => {
    console.error('Logout failed:', error);
    // Show toast notification
  };

  return (
    <LogoutButton
      onLogout={handleLogout}
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}
```

### Without Confirmation Dialog

```javascript
<LogoutButton
  onLogout={handleLogout}
  showConfirmation={false}
/>
```

### Custom Styling

```javascript
<LogoutButton
  onLogout={handleLogout}
  variant="solid"
  color="danger"
  size="sm"
  icon="power"
  iconPosition="right"
>
  Sign Out
</LogoutButton>
```

### Custom Dialog Text

```javascript
<LogoutButton
  onLogout={handleLogout}
  confirmTitle="Leave Session?"
  confirmMessage="You will need to sign in again to access your account."
  confirmButtonText="Yes, Logout"
  cancelButtonText="Stay Logged In"
/>
```

### In Dropdown Menu

```javascript
import { Dropdown, DropdownItem, LogoutButton } from 'tektokit';

<Dropdown>
  <DropdownItem onClick={handleProfile}>Profile</DropdownItem>
  <DropdownItem onClick={handleSettings}>Settings</DropdownItem>
  <DropdownItem>
    <LogoutButton
      onLogout={handleLogout}
      variant="ghost"
      color="danger"
      size="sm"
      fullWidth
      className="justify-start"
    >
      Logout
    </LogoutButton>
  </DropdownItem>
</Dropdown>
```

### With Analytics

```javascript
<LogoutButton
  onLogout={handleLogout}
  trackClick={true}
  trackName="header_logout"
  trackLocation="main_navigation"
/>
```

### Mobile Menu

```javascript
<LogoutButton
  onLogout={handleLogout}
  variant="solid"
  fullWidth
  icon="log-out"
  size="lg"
/>
```

### Loading from Parent

```javascript
function Header() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await AuthService.signout();
      dispatch(logout());
      router.push('/');
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <LogoutButton
      onLogout={handleLogout}
      isLoading={isLoggingOut}
      loadingText="Signing out..."
    />
  );
}
```

## Common Patterns

### Pattern 1: Header/Navbar

```javascript
<LogoutButton
  onLogout={handleLogout}
  size="sm"
  variant="ghost"
  color="danger"
/>
```

### Pattern 2: User Profile Menu

```javascript
<LogoutButton
  onLogout={handleLogout}
  variant="solid"
  color="danger"
  icon="log-out"
  iconPosition="left"
/>
```

### Pattern 3: Settings Page

```javascript
<LogoutButton
  onLogout={handleLogout}
  variant="outline"
  color="danger"
  size="lg"
  confirmTitle="Logout from all devices?"
  confirmMessage="This will sign you out from all your active sessions."
/>
```

## Integration with Auth Systems

### tohfae Pattern

```javascript
const handleLogout = async () => {
  try {
    await AuthService.signout(); // Clear cookies
    dispatch(logout());           // Clear Redux
    router.push('/');
  } catch (error) {
    console.error('Signout error:', error);
  }
};
```

### next_client Pattern

```javascript
const handleLogout = async () => {
  try {
    const response = await signOut();
    dispatch(clearUser());
    if (response?.message) toast.success(response.message);
  } catch (e) {
    toast.error(e?.response?.data?.message || e.message);
  }
};
```

## Notes

- Always provide `onLogout` prop (required)
- Handles loading state automatically
- Confirmation dialog uses `ConfirmDialog` component
- Inherits all Button component props
- Works with any auth system (no dependencies)
- SSR-safe (uses 'use client')
