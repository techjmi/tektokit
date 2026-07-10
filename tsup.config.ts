import { defineConfig } from 'tsup';

export default defineConfig([
  // Client components bundle (index.js and auth.js)
  {
    entry: {
      index: 'src/index.js',
      auth: 'src/auth.js',
    },
    format: ['esm'],
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', 'next', 'next/image', 'swiper', 'swiper/react', 'swiper/modules'],
    outDir: 'dist',
    loader: {
      '.js': 'jsx',
    },
    banner: {
      js: '"use client";',
    },
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
  // Server-only bundle (server.js) - NO "use client"
  {
    entry: {
      server: 'src/server.js',
    },
    format: ['esm'],
    dts: false,
    splitting: false,
    sourcemap: true,
    clean: false,
    external: ['react', 'react-dom', 'next', 'next/image'],
    outDir: 'dist',
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
  // Styles
  {
    entry: {
      styles: 'src/styles.css',
    },
    clean: false,
    outDir: 'dist',
  },
]);
