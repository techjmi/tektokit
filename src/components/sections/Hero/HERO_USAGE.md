# Hero Components

A collection of 6 versatile hero section variants for different use cases.

## Components

### Hero1 - Simple Background Image Hero
Perfect for: Landing pages, simple sites

```javascript
import { Hero1 } from 'tektokit';

<Hero1
  title="Welcome to Our Site"
  subtitle="Premium Quality"
  description="Discover amazing products and services"
  backgroundImage="/hero-bg.jpg"
  primaryCta={{ label: 'Get Started', href: '/signup' }}
  secondaryCta={{ label: 'Learn More', href: '/about' }}
  overlay={true}
  overlayOpacity={0.5}
  textAlign="left"
  height="min-h-[90vh]"
/>
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Description text
- `primaryCta` - Primary CTA button (object with `label/text` and `href/onClick`)
- `secondaryCta` - Secondary CTA button
- `backgroundImage` - Background image URL
- `height` - CSS height class (default: `min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh]`)
- `overlay` - Show dark overlay (default: `true`)
- `overlayOpacity` - Overlay opacity 0-1 (default: `0.5`)
- `textAlign` - Text alignment: `left`, `center`, `right` (default: `left`)

---

### Hero2 - Carousel Hero
Perfect for: E-commerce, promotional sites with multiple messages

```javascript
import { Hero2 } from 'tektokit';

const slides = [
  {
    image: '/slide1.jpg',
    title: 'Summer Collection',
    description: 'New arrivals for 2024',
    cta: { text: 'Shop Now', link: '/products' }
  },
  {
    image: '/slide2.jpg',
    title: 'Special Offer',
    description: 'Up to 50% off',
    cta: { text: 'View Deals', link: '/deals' }
  }
];

<Hero2
  slides={slides}
  effect="fade"
  autoplay={true}
  autoplayDelay={5000}
  navigation={true}
  pagination={true}
  height="h-[90vh]"
/>
```

**Props:**
- `slides` - Array of slide objects (required)
- `height` - CSS height class (default: `h-[60vh] sm:h-[70vh] lg:h-[90vh]`)
- `effect` - Transition effect: `slide`, `fade`, `cube`, `coverflow` (default: `fade`)
- `autoplay` - Auto-play slides (default: `true`)
- `autoplayDelay` - Delay between slides in ms (default: `5000`)
- `navigation` - Show nav arrows (default: `true`)
- `pagination` - Show pagination dots (default: `true`)

---

### Hero3 - Video Background Hero
Perfect for: Modern sites, portfolios, creative agencies

```javascript
import { Hero3 } from 'tektokit';

<Hero3
  title="Experience Innovation"
  subtitle="Next Generation"
  description="Transform your business with cutting-edge solutions"
  videoSrc="/hero-video.mp4"
  poster="/video-poster.jpg"
  primaryCta={{ label: 'Watch Demo', href: '/demo' }}
  secondaryCta={{ label: 'Contact Us', href: '/contact' }}
  textAlign="center"
  height="min-h-[90vh]"
/>
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Description text
- `primaryCta` - Primary CTA button
- `secondaryCta` - Secondary CTA button
- `videoSrc` - Video URL (required)
- `poster` - Video poster image
- `height` - CSS height class (default: `min-h-[60vh] sm:min-h-[70vh] lg:min-h-[90vh]`)
- `textAlign` - Text alignment: `left`, `center` (default: `center`)

---

### Hero4 - Split Layout Hero
Perfect for: Product launches, feature highlights, dual content

```javascript
import { Hero4 } from 'tektokit';

<Hero4
  title="Launch Your Product"
  subtitle="New Feature"
  description="Powerful tools to grow your business faster"
  image="/product-image.jpg"
  imagePosition="right"
  primaryCta={{ label: 'Try Free', href: '/signup' }}
  secondaryCta={{ label: 'See Pricing', href: '/pricing' }}
  backgroundColor="bg-gradient-to-br from-blue-50 to-purple-50"
  height="min-h-[70vh]"
/>
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Description text
- `primaryCta` - Primary CTA button
- `secondaryCta` - Secondary CTA button
- `image` - Image URL (required)
- `imagePosition` - Image position: `left`, `right` (default: `right`)
- `height` - CSS height class (default: `min-h-[60vh] sm:min-h-[70vh]`)
- `backgroundColor` - Background color class (default: gradient)

---

### Hero5 - Minimal Centered Hero
Perfect for: SaaS, minimal sites, clean landing pages

```javascript
import { Hero5 } from 'tektokit';

<Hero5
  badge="🚀 Now in Beta"
  title="Build Faster"
  subtitle="Developer Tools"
  description="The modern platform for rapid development"
  primaryCta={{ label: 'Get Started', href: '/start' }}
  secondaryCta={{ label: 'Documentation', href: '/docs' }}
  backgroundColor="bg-white dark:bg-gray-900"
  height="min-h-[80vh]"
/>
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Description text
- `badge` - Badge text/element above subtitle
- `primaryCta` - Primary CTA button
- `secondaryCta` - Secondary CTA button
- `height` - CSS height class (default: `min-h-[70vh] sm:min-h-[80vh]`)
- `backgroundColor` - Background color class

---

### Hero6 - Full Height Hero with Scroll Indicator
Perfect for: Portfolio, creative sites, storytelling, one-page sites

```javascript
import { Hero6 } from 'tektokit';

<Hero6
  title="Creative Studio"
  subtitle="Design & Development"
  description="We bring your ideas to life"
  backgroundImage="/studio-bg.jpg"
  primaryCta={{ label: 'View Work', href: '/portfolio' }}
  secondaryCta={{ label: 'Get Quote', href: '/contact' }}
  overlay={true}
  overlayOpacity={0.6}
  showScrollIndicator={true}
  scrollTo="about"
/>
```

**Props:**
- `title` - Main heading
- `subtitle` - Small text above title
- `description` - Description text
- `primaryCta` - Primary CTA button
- `secondaryCta` - Secondary CTA button
- `backgroundImage` - Background image URL
- `overlay` - Show dark overlay (default: `true`)
- `overlayOpacity` - Overlay opacity 0-1 (default: `0.6`)
- `showScrollIndicator` - Show scroll down indicator (default: `true`)
- `scrollTo` - ID of section to scroll to (optional)

---

## Common Patterns

### CTA Button Format
All hero components accept CTA objects in this format:

```javascript
{
  label: 'Button Text',  // or 'text'
  href: '/path',         // for links
  onClick: () => {}      // for buttons
}
```

### Responsive Heights
Use Tailwind responsive height classes:

```javascript
height="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[80vh] xl:min-h-[90vh]"
```

### Dark Mode Support
Hero4 and Hero5 support dark mode automatically. Others use images/videos as backgrounds.

---

## Use Cases

| Variant | Best For |
|---------|----------|
| Hero1   | Simple landing pages, basic sites |
| Hero2   | E-commerce, multiple promotions |
| Hero3   | Modern/tech sites, high-impact pages |
| Hero4   | Product pages, feature highlights |
| Hero5   | SaaS, minimal/clean designs |
| Hero6   | Portfolio, one-page sites, storytelling |

---

## Notes

- All components are SSR-safe with `'use client'`
- Hero2 requires `swiper` package
- Hero3 uses VideoPlayer component
- All support Tailwind dark mode where applicable
- Fully responsive and mobile-friendly
