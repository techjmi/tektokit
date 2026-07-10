# VideoPlayer Component

Generic video player component with custom controls, overlays, and loading states.

## Import

```javascript
import { VideoPlayer } from 'tektokit';
```

## Basic Usage

```javascript
import { VideoPlayer } from 'tektokit';

<VideoPlayer
  src="/video.mp4"
  title="Video Title"
  description="Video description"
/>
```

## Features

- ✅ Custom play/pause controls
- ✅ Mute/unmute toggle
- ✅ Aspect ratio control
- ✅ Title & description overlay
- ✅ Loading states
- ✅ Auto-play and loop options
- ✅ Object fit options
- ✅ Poster image support
- ✅ Event callbacks (onPlay, onPause, onEnded)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Video source URL (required) |
| `title` | `string` | - | Video title for overlay |
| `description` | `string` | - | Video description for overlay |
| `autoPlay` | `boolean` | `true` | Auto-play video |
| `loop` | `boolean` | `true` | Loop video |
| `controls` | `boolean` | `false` | Show native controls |
| `muted` | `boolean` | `true` | Mute video |
| `showMuteButton` | `boolean` | `false` | Show mute/unmute button |
| `aspectRatio` | `string` | `'16/9'` | Video aspect ratio |
| `objectFit` | `string` | `'cover'` | CSS object-fit |
| `className` | `string` | `''` | Additional classes |
| `showOverlay` | `boolean` | `true` | Show title/description overlay |
| `showPlayButton` | `boolean` | `false` | Show play/pause button overlay |
| `poster` | `string` | - | Poster image URL |
| `onPlay` | `function` | - | Callback when video plays |
| `onPause` | `function` | - | Callback when video pauses |
| `onEnded` | `function` | - | Callback when video ends |

## Examples

### Hero Video

```javascript
<VideoPlayer
  src="/hero-video.mp4"
  title="Welcome to Our Site"
  description="Discover amazing products"
  aspectRatio="16/9"
  autoPlay={true}
  loop={true}
  muted={true}
/>
```

### With Custom Controls

```javascript
<VideoPlayer
  src="/demo.mp4"
  showPlayButton={true}
  showMuteButton={true}
  autoPlay={false}
  muted={false}
/>
```

### Square Video

```javascript
<VideoPlayer
  src="/promo.mp4"
  aspectRatio="1/1"
  objectFit="cover"
/>
```

### With Poster Image

```javascript
<VideoPlayer
  src="/video.mp4"
  poster="/video-poster.jpg"
  autoPlay={false}
  showPlayButton={true}
/>
```

### Without Overlay

```javascript
<VideoPlayer
  src="/background.mp4"
  showOverlay={false}
  autoPlay={true}
  loop={true}
  muted={true}
/>
```

### With Event Callbacks

```javascript
const handlePlay = () => console.log('Video started');
const handlePause = () => console.log('Video paused');
const handleEnded = () => console.log('Video ended');

<VideoPlayer
  src="/tutorial.mp4"
  onPlay={handlePlay}
  onPause={handlePause}
  onEnded={handleEnded}
/>
```

### Native Browser Controls

```javascript
<VideoPlayer
  src="/content.mp4"
  controls={true}
  showPlayButton={false}
  showMuteButton={false}
/>
```

### Portrait Video

```javascript
<VideoPlayer
  src="/story.mp4"
  aspectRatio="none"
  objectFit="contain"
  className="max-w-md mx-auto"
/>
```

### Background Video

```javascript
<VideoPlayer
  src="/bg-video.mp4"
  autoPlay={true}
  loop={true}
  muted={true}
  showOverlay={false}
  aspectRatio="16/9"
  className="absolute inset-0"
/>
```

### Product Demo

```javascript
<VideoPlayer
  src="/product-demo.mp4"
  title="Product Demo"
  description="See our product in action"
  aspectRatio="4/3"
  showPlayButton={true}
  showMuteButton={true}
  autoPlay={false}
/>
```

## Aspect Ratios

- `16/9` - Wide (default)
- `4/3` - Standard
- `1/1` - Square
- `none` - Natural video size

## Object Fit Options

- `cover` - Fills container (default)
- `contain` - Fits inside container
- `fill` - Stretches to fill
