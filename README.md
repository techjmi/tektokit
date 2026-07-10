# tektokit

<div align="center">

**A modern, framework-agnostic React UI component library**

[![npm version](https://img.shields.io/npm/v/tektokit.svg)](https://www.npmjs.com/package/tektokit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Documentation](#documentation) · [Components](#component-categories) · [Contributing](#contributing) · [License](#license)

</div>

## Overview

tektokit is a production-ready React component library built with modern web standards. It provides 50+ carefully crafted components designed for speed, accessibility, and developer experience.

### Key Features

- **50+ Production-Ready Components** - UI elements, layouts, sections, and utilities
- **Framework Agnostic** - Works seamlessly with Next.js, Vite, Remix, and more
- **SSR-Safe** - Full server-side rendering support out of the box
- **Tailwind CSS Powered** - Utility-first styling with full customization
- **Dark Mode Built-in** - Automatic dark mode support with theme toggle
- **TypeScript Ready** - Full type support for better DX
- **Zero Configuration** - Works immediately after installation
- **Accessibility First** - WCAG compliant components
- **Lightweight** - Tree-shakeable exports, only import what you need

## Installation

Install tektokit using your preferred package manager:

```bash
# npm
npm install tektokit

# yarn
yarn add tektokit

# pnpm
pnpm add tektokit
```

### Requirements

tektokit requires React 18.0.0 or higher:

```bash
npm install react@^18.0.0 react-dom@^18.0.0
```

**Note:** tektokit automatically includes `react-icons` and `swiper` as dependencies. You don't need to install them separately.

## Quick Start

```jsx
import { Button, Card, Hero1 } from 'tektokit';

function App() {
  return (
    <div>
      <Hero1 
        config={{
          title: "Welcome to tektokit",
          description: "Build beautiful UIs faster",
          primaryCta: { label: "Get Started", href: "/docs" }
        }}
      />
      
      <Card>
        <h2>Hello World</h2>
        <Button variant="solid" color="primary">
          Click me
        </Button>
      </Card>
    </div>
  );
}
```

## Setup

### 1. Import Styles

Add tektokit styles to your main CSS or entry file:

```css
/* For Tailwind v4 (CSS-based config) */
@import "tektokit/styles.css";
```

Or for Tailwind v3:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tektokit/dist/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Framework-Specific Setup

#### Next.js (App Router)

```jsx
// app/layout.jsx
import 'tektokit/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```jsx
// app/page.jsx
import { Hero1, Button } from 'tektokit';

export default function Home() {
  return (
    <main>
      <Hero1 config={{ title: "Welcome to tektokit" }} />
      <Button variant="solid" color="primary">Get Started</Button>
    </main>
  );
}
```

#### Vite/React

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'tektokit/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### Remix

```tsx
// app/root.tsx
import styles from 'tektokit/styles.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];
```

## Component Categories

tektokit includes 50+ components organized into five categories:

### UI Components (14)
Core building blocks for your interface

`Avatar` · `Badge` · `Button` · `Card` · `Chip` · `Divider` · `Image` · `Logo` · `Tooltip` · `UserProfile` · `Accordion` · `Carousel` · `VideoPlayer` · `VideoSwiper`

### Layout & Navigation (8)
Navigation and structure components

`Breadcrumbs` · `Drawer` · `Dropdown` · `Modal` · `Navbar` · `ThemeToggle` · `ScrollToTop` · `Sidebar`

### Feedback (4)
User feedback and state management

`EmptyState` · `ErrorBoundary` · `ConfirmDialog` · `Share`

### Page Sections (14)
Ready-to-use page sections

`Hero1-7` (7 variants) · `Footer` · `Features` · `Testimonials` · `FAQ` · `CTA` · `Stats` · `Newsletter` · `Teams` · `Pricing`

### Utilities (10+)
Helper components and tools

`SocialLinks` · `JsonLd` · `Analytics` · `WhatsAppButton` · `MarkdownRenderer` · `CodeBlock` · And more...

**[View Complete Component Documentation](./COMPONENTS_SUMMARY.md)**

## Usage Examples

### Basic Component

```jsx
import { Button, Card } from 'tektokit';

function MyComponent() {
  return (
    <Card shadow="md" padding="lg">
      <h2>Welcome</h2>
      <Button variant="solid" color="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </Card>
  );
}
```

### Config-Based Components

Many components use a config-based API for cleaner code:

```jsx
import { Hero1, Features, Testimonials } from 'tektokit';

const heroConfig = {
  title: "Build Amazing Products",
  description: "Modern UI components for your next project",
  primaryCta: { label: "Get Started", href: "/start" },
  secondaryCta: { label: "Learn More", href: "/docs" }
};

const featuresConfig = {
  heading: "Why Choose tektokit?",
  features: [
    {
      icon: "zap",
      title: "Fast Development",
      description: "Build UIs 10x faster with pre-built components"
    },
    {
      icon: "shield",
      title: "Production Ready",
      description: "Battle-tested components used in production"
    }
  ]
};

function LandingPage() {
  return (
    <>
      <Hero1 config={heroConfig} />
      <Features config={featuresConfig} />
    </>
  );
}
```

### Dark Mode

```jsx
import { ThemeToggle } from 'tektokit';

// Add theme toggle to your navbar
<ThemeToggle showLabel={true} />
```

## Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- **Report bugs** - Open an issue describing the bug
- **Suggest features** - Share your ideas for new components or improvements
- **Improve docs** - Help us make documentation clearer
- **Submit PRs** - Fix bugs or add features
- **Star the repo** - Show your support!

### Development Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/tektokit.git
cd tektokit
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development mode**

```bash
npm run dev
```

4. **Build the library**

```bash
npm run build
```

5. **Test your changes locally**

```bash
# In tektokit directory
npm link

# In your test project
npm link tektokit
```

### Contribution Guidelines

- Write clear, descriptive commit messages
- Follow existing code style and conventions
- Test your changes thoroughly
- Update documentation for new features
- Keep PRs focused on a single feature/fix
- Add examples for new components

### Code Style

- Use functional components with hooks
- Follow the config-based pattern for complex components
- Include JSDoc comments for props
- Write clean, readable code
- Use meaningful variable names

### Pull Request Process

1. Create a new branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Versioning

tektokit follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for new features (backwards compatible)
- **PATCH** version for bug fixes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Community & Support

- [Documentation](./COMPONENTS_SUMMARY.md)
- [Issue Tracker](https://github.com/techjmi/tektokit/issues)
- [Discussions](https://github.com/techjmi/tektokit/discussions)
- [GitHub](https://github.com/techjmi/tektokit)

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

Built using:

- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Swiper](https://swiperjs.com/) - Carousel component

---

<div align="center">

Made by [Md Shamim Akhter](https://github.com/techjmi)

If you find this library helpful, please consider giving it a star on [GitHub](https://github.com/techjmi/tektokit)!

</div>
