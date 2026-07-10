# Carousel Component

Generic image carousel/slider component with navigation, pagination, and multiple effects.

## Installation

First, install Swiper:

```bash
npm install swiper
```

Then import the required CSS in your app (app/globals.css or layout.js):

```css
@import 'swiper/css';
@import 'swiper/css/navigation';
@import 'swiper/css/pagination';
@import 'swiper/css/effect-fade';
@import 'swiper/css/effect-coverflow';
@import 'swiper/css/effect-cube';
```

## Import

```javascript
import { Carousel } from 'tektokit';
```

## Basic Usage

```javascript
import { Carousel } from 'tektokit';

const slides = [
  { id: 1, image: '/slide1.jpg', alt: 'Slide 1' },
  { id: 2, image: '/slide2.jpg', alt: 'Slide 2' },
  { id: 3, image: '/slide3.jpg', alt: 'Slide 3' },
];

<Carousel slides={slides} />
```

## Features

- ✅ Multiple transition effects (fade, slide, cube, coverflow)
- ✅ Navigation arrows
- ✅ Pagination dots
- ✅ Autoplay with pause on hover
- ✅ Loop support
- ✅ Title & description overlays
- ✅ Responsive height
- ✅ Fallback when Swiper not installed

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slides` | `array` | `[]` | Array of slide objects (required) |
| `effect` | `string` | `'fade'` | Transition effect |
| `navigation` | `boolean` | `true` | Show navigation arrows |
| `pagination` | `boolean` | `true` | Show pagination dots |
| `autoplay` | `boolean` | `true` | Enable autoplay |
| `autoplayDelay` | `number` | `3000` | Delay between slides (ms) |
| `pauseOnMouseEnter` | `boolean` | `false` | Pause autoplay on hover |
| `loop` | `boolean` | `true` | Loop slides |
| `speed` | `number` | `600` | Transition speed (ms) |
| `className` | `string` | `''` | Additional classes |
| `slideClassName` | `string` | `''` | Slide wrapper classes |
| `imageHeight` | `string` | `'h-[400px] sm:h-[500px] lg:h-[600px]'` | Slide height |
| `imageClassName` | `string` | `''` | Image classes |
| `spaceBetween` | `number` | `0` | Space between slides (px) |
| `slidesPerView` | `number` | `1` | Slides per view |
| `onSwiper` | `function` | - | Callback when swiper initialized |
| `onSlideChange` | `function` | - | Callback when slide changes |

### Slide Object

```javascript
{
  id: 1,                     // Unique identifier
  image: '/image.jpg',       // Image URL (or use 'src')
  alt: 'Description',        // Alt text
  title: 'Slide Title',      // Optional overlay title
  description: 'Details'     // Optional overlay description
}
```

## Examples

### Hero Carousel

```javascript
const heroSlides = [
  {
    id: 1,
    image: '/hero1.jpg',
    title: 'Welcome to Our Site',
    description: 'Discover amazing products',
  },
  {
    id: 2,
    image: '/hero2.jpg',
    title: 'New Collection',
    description: 'Shop the latest trends',
  },
];

<Carousel
  slides={heroSlides}
  effect="fade"
  autoplay={true}
  autoplayDelay={5000}
  pauseOnMouseEnter={true}
/>
```

### Product Images

```javascript
const productImages = [
  { id: 1, image: '/product1.jpg', alt: 'Product view 1' },
  { id: 2, image: '/product2.jpg', alt: 'Product view 2' },
  { id: 3, image: '/product3.jpg', alt: 'Product view 3' },
];

<Carousel
  slides={productImages}
  effect="slide"
  imageHeight="h-[500px]"
  autoplay={false}
/>
```

### Cube Effect

```javascript
<Carousel
  slides={slides}
  effect="cube"
  speed={1000}
  navigation={true}
/>
```

### Coverflow Effect

```javascript
<Carousel
  slides={slides}
  effect="coverflow"
  slidesPerView={3}
  spaceBetween={30}
/>
```

### Custom Height

```javascript
<Carousel
  slides={slides}
  imageHeight="h-[300px] md:h-[500px] lg:h-[700px]"
/>
```

### Without Overlays

```javascript
const slides = [
  { id: 1, image: '/img1.jpg' },  // No title/description
  { id: 2, image: '/img2.jpg' },
];

<Carousel slides={slides} />
```

### With Callbacks

```javascript
const handleSwiper = (swiper) => {
  console.log('Swiper initialized', swiper);
};

const handleSlideChange = (swiper) => {
  console.log('Active slide:', swiper.activeIndex);
};

<Carousel
  slides={slides}
  onSwiper={handleSwiper}
  onSlideChange={handleSlideChange}
/>
```

## Effects

- `fade` - Fade transition (default)
- `slide` - Slide transition
- `cube` - 3D cube effect
- `coverflow` - Coverflow effect

## Notes

- Requires `swiper` package to be installed
- Falls back to showing first slide if Swiper not installed
- Uses Image component for optimized images
- Responsive with customizable heights
- SSR-safe
- First image uses eager loading, rest are lazy
