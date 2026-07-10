# VideoSwiper Component

Carousel component for displaying multiple videos with transitions and controls. Uses the VideoPlayer component internally.

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
```

## Import

```javascript
import { VideoSwiper } from 'tektokit';
```

## Basic Usage

```javascript
import { VideoSwiper } from 'tektokit';

const videos = [
  { id: 1, src: '/video1.mp4', title: 'Video 1', description: 'Description 1' },
  { id: 2, src: '/video2.mp4', title: 'Video 2', description: 'Description 2' },
];

<VideoSwiper videos={videos} />
```

## Features

- ✅ Uses VideoPlayer component for each slide
- ✅ Multiple transition effects (fade, slide, etc.)
- ✅ Navigation arrows (optional)
- ✅ Pagination dots (optional)
- ✅ Autoplay with configurable delay
- ✅ Loop support
- ✅ Customizable height and aspect ratio
- ✅ Overlay support
- ✅ Fallback when Swiper not installed

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videos` | `array` | `[]` | Array of video objects (required) |
| `effect` | `string` | `'fade'` | Swiper effect ('fade', 'slide', 'cube', 'coverflow') |
| `navigation` | `boolean` | `false` | Show navigation arrows |
| `pagination` | `boolean` | `true` | Show pagination dots |
| `autoplay` | `boolean` | `true` | Enable autoplay |
| `autoplayDelay` | `number` | `8000` | Delay between slides (ms) |
| `loop` | `boolean` | `true` | Loop videos |
| `speed` | `number` | `800` | Transition speed (ms) |
| `videoHeight` | `string` | `'h-[400px] sm:h-[500px] lg:h-[600px]'` | Container height |
| `aspectRatio` | `string` | `'16/9'` | Video aspect ratio |
| `showOverlay` | `boolean` | `true` | Show title/description overlay |
| `showPlayButton` | `boolean` | `false` | Show play/pause button |
| `showMuteButton` | `boolean` | `false` | Show mute button |
| `className` | `string` | `''` | Additional classes |
| `onSwiper` | `function` | - | Callback when swiper initialized |
| `onSlideChange` | `function` | - | Callback when slide changes |

### Video Object

Each video object should have:

```javascript
{
  id: 1,                    // Unique identifier
  src: '/video.mp4',        // Video source URL (or use 'path')
  title: 'Video Title',     // Optional title
  description: 'Desc',      // Optional description
  poster: '/poster.jpg'     // Optional poster image
}
```

## Examples

### Hero Video Carousel

```javascript
const heroVideos = [
  {
    id: 1,
    src: '/hero1.mp4',
    title: 'Welcome to Our Site',
    description: 'Discover amazing products',
  },
  {
    id: 2,
    src: '/hero2.mp4',
    title: 'New Collection',
    description: 'Shop the latest trends',
  },
];

<VideoSwiper
  videos={heroVideos}
  effect="fade"
  autoplay={true}
  autoplayDelay={6000}
  navigation={false}
  pagination={true}
/>
```

### Product Demo Videos

```javascript
const demoVideos = [
  { id: 1, src: '/demo1.mp4', title: 'Feature 1' },
  { id: 2, src: '/demo2.mp4', title: 'Feature 2' },
  { id: 3, src: '/demo3.mp4', title: 'Feature 3' },
];

<VideoSwiper
  videos={demoVideos}
  effect="slide"
  navigation={true}
  pagination={true}
  showPlayButton={true}
  showMuteButton={true}
/>
```

### Square Videos

```javascript
<VideoSwiper
  videos={videos}
  aspectRatio="1/1"
  videoHeight="h-[500px]"
/>
```

### Without Overlay

```javascript
<VideoSwiper
  videos={videos}
  showOverlay={false}
  autoplay={true}
  loop={true}
/>
```

### With Callbacks

```javascript
const handleSwiper = (swiper) => {
  console.log('Swiper initialized', swiper);
};

const handleSlideChange = (swiper) => {
  console.log('Active slide:', swiper.activeIndex);
};

<VideoSwiper
  videos={videos}
  onSwiper={handleSwiper}
  onSlideChange={handleSlideChange}
/>
```

### Custom Height

```javascript
<VideoSwiper
  videos={videos}
  videoHeight="h-[300px] md:h-[500px] lg:h-[700px]"
/>
```

### Cube Effect

```javascript
<VideoSwiper
  videos={videos}
  effect="cube"
  speed={1000}
/>
```

## Swiper Effects

- `fade` - Fade transition (default)
- `slide` - Slide transition
- `cube` - 3D cube effect
- `coverflow` - Coverflow effect

## Notes

- Requires `swiper` package to be installed
- Falls back to showing first video only if Swiper not installed
- All videos auto-play and are muted by default
- Uses VideoPlayer component for each slide
- SSR-safe
- Responsive with customizable breakpoints
