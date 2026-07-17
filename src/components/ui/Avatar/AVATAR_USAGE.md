# Avatar Component

Display user profile pictures with automatic fallback to initials or icons. Simple, flexible component without upload logic - perfect for navbars, profiles, comments, and more.

## Import

```javascript
import { Avatar, AVATAR_SIZE, AVATAR_SHAPE, USER_STATUS } from 'tektokit';
```

## Basic Usage

```jsx
<Avatar
  src="https://example.com/avatar.jpg"
  name="John Doe"
  size="md"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Image alt text |
| `name` | `string` | - | User name for initials fallback |
| `fallback` | `ReactNode` | - | Custom fallback content |
| `size` | `string` | `md` | Size: xs, sm, md, lg, xl, 2xl |
| `shape` | `string` | `circle` | Shape: circle, square, rounded |
| `showStatus` | `boolean` | `false` | Show status indicator |
| `status` | `string` | `offline` | Status: online, offline, away, busy, dnd |
| `className` | `string` | - | Additional CSS classes |
| `onClick` | `function` | - | Click handler |
| `delayMs` | `number` | `0` | Delay before showing image (avoids flash) |

## Examples

### Basic Avatar with Initials Fallback

```jsx
<Avatar
  src="https://example.com/user.jpg"
  name="Alice Johnson"
/>
```

### Avatar Sizes

```jsx
<Avatar src="/avatar.jpg" name="User" size="xs" />
<Avatar src="/avatar.jpg" name="User" size="sm" />
<Avatar src="/avatar.jpg" name="User" size="md" />
<Avatar src="/avatar.jpg" name="User" size="lg" />
<Avatar src="/avatar.jpg" name="User" size="xl" />
<Avatar src="/avatar.jpg" name="User" size="2xl" />
```

### Avatar Shapes

```jsx
<Avatar src="/avatar.jpg" name="User" shape="circle" />
<Avatar src="/avatar.jpg" name="User" shape="rounded" />
<Avatar src="/avatar.jpg" name="User" shape="square" />
```

### With Status Indicator

```jsx
<Avatar
  src="/avatar.jpg"
  name="John Doe"
  showStatus={true}
  status="online"
/>

<Avatar
  src="/avatar.jpg"
  name="Jane Smith"
  showStatus={true}
  status="away"
/>

<Avatar
  src="/avatar.jpg"
  name="Bob Wilson"
  showStatus={true}
  status="busy"
/>
```

### Navbar Profile Avatar with Dropdown

```jsx
import { Avatar, Dropdown, DropdownItem, DropdownDivider } from 'tektokit';

function NavbarProfile({ user }) {
  return (
    <Dropdown
      trigger={
        <Avatar
          src={user.avatar}
          name={user.name}
          size="md"
          showStatus={true}
          status={user.status}
        />
      }
      placement="bottom-end"
    >
      <DropdownItem onClick={() => navigate('/profile')}>
        My Profile
      </DropdownItem>
      <DropdownItem onClick={() => navigate('/settings')}>
        Settings
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={handleLogout}>
        Logout
      </DropdownItem>
    </Dropdown>
  );
}
```

### Avatar with Drawer (Mobile Menu)

```jsx
import { Avatar, Drawer } from 'tektokit';

function MobileProfile({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Avatar
        src={user.avatar}
        name={user.name}
        onClick={() => setOpen(true)}
      />
      
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        placement="right"
      >
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* Profile menu items */}
      </Drawer>
    </>
  );
}
```

### Avatar Group (Stacked Avatars)

```jsx
function AvatarGroup({ users }) {
  return (
    <div className="flex -space-x-2">
      {users.slice(0, 3).map((user, i) => (
        <Avatar
          key={user.id}
          src={user.avatar}
          name={user.name}
          size="sm"
          className="ring-2 ring-white"
          style={{ zIndex: users.length - i }}
        />
      ))}
      {users.length > 3 && (
        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xs font-semibold ring-2 ring-white">
          +{users.length - 3}
        </div>
      )}
    </div>
  );
}
```

### Comment Avatar

```jsx
function Comment({ comment }) {
  return (
    <div className="flex gap-3">
      <Avatar
        src={comment.author.avatar}
        name={comment.author.name}
        size="sm"
      />
      <div>
        <div className="font-semibold">{comment.author.name}</div>
        <div className="text-gray-600">{comment.text}</div>
      </div>
    </div>
  );
}
```

### Without Image (Initials Only)

```jsx
<Avatar name="John Doe" size="lg" />
<Avatar name="Alice" size="md" />
```

The initials are auto-generated and each name gets a consistent color.

### Custom Fallback

```jsx
<Avatar
  src="/broken-image.jpg"
  fallback={
    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold">
      JS
    </div>
  }
/>
```

### Using Constants

```jsx
import { Avatar, AVATAR_SIZE, AVATAR_SHAPE, USER_STATUS } from 'tektokit';

<Avatar
  src={user.avatar}
  name={user.name}
  size={AVATAR_SIZE.lg}
  shape={AVATAR_SHAPE.rounded}
  showStatus={true}
  status={USER_STATUS.online}
/>
```

## Notes

- No upload logic - purely a display component
- Automatic initials generation from name
- Deterministic colors - same name always gets same color
- Image loading states handled automatically
- Fallback shows on image error
- Works with any onClick handler
- Perfect for use with Dropdown, Drawer, or Modal
- SSR safe
- Accessible with proper ARIA labels
