# Card Component

Flexible card container supporting both composition and data-driven patterns.

## Import

```javascript
import { Card, CardImage, CardHeader, CardBody, CardFooter } from 'tektokit';
```

## Basic Usage

```jsx
<Card>
  <CardHeader title="Card Title" />
  <CardBody>Card content goes here</CardBody>
</Card>
```

## Props

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `data` | `object` | - | Data object for data-driven mode |
| `image` | `boolean` | `false` | Show image in data-driven mode |
| `header` | `boolean` | `false` | Show header in data-driven mode |
| `body` | `boolean` | `false` | Show body in data-driven mode |
| `radius` | `string` | `'md'` | Border radius: `none`, `sm`, `md`, `lg`, `xl` |
| `shadow` | `string` | `'sm'` | Shadow size: `none`, `sm`, `md`, `lg`, `xl` |
| `padding` | `string` | `'md'` | Padding: `none`, `sm`, `md`, `lg` |
| `background` | `string` | `'white'` | Background: `white`, `gray`, `transparent` |
| `border` | `boolean` | `true` | Show border |
| `className` | `string` | - | Additional CSS classes |

### CardImage

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL (required) |
| `alt` | `string` | - | Image alt text |
| `aspectRatio` | `string` | `'video'` | Aspect ratio: `square`, `video`, `wide`, `portrait` |
| `objectFit` | `string` | `'cover'` | Object fit: `cover`, `contain`, `fill` |

### CardHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Header title |
| `subtitle` | `string` | - | Header subtitle |
| `badge` | `string` or `object` | - | Badge text or config |

### CardBody

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Body description text |
| `children` | `ReactNode` | - | Body content |

### CardFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content |

## Examples

### Composition Mode

```jsx
<Card>
  <CardImage
    src="/image.jpg"
    alt="Product"
    aspectRatio="video"
  />
  <CardHeader
    title="Product Name"
    subtitle="Category"
    badge="New"
  />
  <CardBody description="Product description goes here." />
  <CardFooter>
    <Button fullWidth>Add to Cart</Button>
  </CardFooter>
</Card>
```

### With Divider

```jsx
import { Divider } from 'tektokit';

<Card>
  <CardHeader title="Product Details" />
  <Divider spacing="none" />
  <CardBody>Content here</CardBody>
  <Divider spacing="none" />
  <CardFooter>
    <Button>View More</Button>
  </CardFooter>
</Card>
```

### Data-Driven Mode

```jsx
const data = {
  image: '/image.jpg',
  title: 'Product Name',
  subtitle: 'Category',
  description: 'Product description',
  badge: 'Sale'
};

<Card
  data={data}
  image={true}
  header={true}
  body={true}
>
  <CardFooter>
    <Button>Buy Now</Button>
  </CardFooter>
</Card>
```

### Simple Card

```jsx
<Card>
  <CardBody>
    Simple card with just content
  </CardBody>
</Card>
```

### Card with Custom Styling

```jsx
<Card
  radius="lg"
  shadow="md"
  padding="lg"
  background="gray"
  border={false}
>
  <CardHeader title="Custom Card" />
  <CardBody>Custom styled card</CardBody>
</Card>
```

### Minimal Card

```jsx
<Card padding="none" border={false} shadow="none">
  <CardImage src="/image.jpg" />
  <div className="p-4">
    <h3>Custom Layout</h3>
  </div>
</Card>
```

## Notes

- Composition mode offers more flexibility
- Data-driven mode is convenient for dynamic content
- Use Divider component for separators between sections
- CardFooter is typically used for action buttons
- All sub-components can be used independently
