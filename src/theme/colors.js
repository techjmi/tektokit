/**
 * Color system for the UI library
 * Uses CSS variables for dynamic theming
 * Users can override these values in their app
 */

export const COLORS = {
  // Primary colors
  primary: {
    DEFAULT: "var(--ui-primary, #3b82f6)",
    light: "var(--ui-primary-light, #60a5fa)",
    dark: "var(--ui-primary-dark, #2563eb)",
    contrast: "var(--ui-primary-contrast, #ffffff)",
  },
  
  // Secondary colors
  secondary: {
    DEFAULT: "var(--ui-secondary, #8b5cf6)",
    light: "var(--ui-secondary-light, #a78bfa)",
    dark: "var(--ui-secondary-dark, #7c3aed)",
    contrast: "var(--ui-secondary-contrast, #ffffff)",
  },
  
  // Semantic colors
  success: {
    DEFAULT: "var(--ui-success, #10b981)",
    light: "var(--ui-success-light, #34d399)",
    dark: "var(--ui-success-dark, #059669)",
    contrast: "var(--ui-success-contrast, #ffffff)",
  },
  
  warning: {
    DEFAULT: "var(--ui-warning, #f59e0b)",
    light: "var(--ui-warning-light, #fbbf24)",
    dark: "var(--ui-warning-dark, #d97706)",
    contrast: "var(--ui-warning-contrast, #ffffff)",
  },
  
  danger: {
    DEFAULT: "var(--ui-danger, #ef4444)",
    light: "var(--ui-danger-light, #f87171)",
    dark: "var(--ui-danger-dark, #dc2626)",
    contrast: "var(--ui-danger-contrast, #ffffff)",
  },
  
  info: {
    DEFAULT: "var(--ui-info, #3b82f6)",
    light: "var(--ui-info-light, #60a5fa)",
    dark: "var(--ui-info-dark, #2563eb)",
    contrast: "var(--ui-info-contrast, #ffffff)",
  },
  
  // Neutral colors
  neutral: {
    DEFAULT: "var(--ui-neutral, #6b7280)",
    light: "var(--ui-neutral-light, #9ca3af)",
    dark: "var(--ui-neutral-dark, #4b5563)",
    contrast: "var(--ui-neutral-contrast, #ffffff)",
  },
  
  // Base colors
  white: "var(--ui-white, #ffffff)",
  black: "var(--ui-black, #000000)",
  
  // Background colors
  background: {
    DEFAULT: "var(--ui-bg, #ffffff)",
    secondary: "var(--ui-bg-secondary, #f9fafb)",
    tertiary: "var(--ui-bg-tertiary, #f3f4f6)",
  },
  
  // Border colors
  border: {
    DEFAULT: "var(--ui-border, #e5e7eb)",
    light: "var(--ui-border-light, #f3f4f6)",
    dark: "var(--ui-border-dark, #d1d5db)",
  },
  
  // Text colors
  text: {
    DEFAULT: "var(--ui-text, #1f2937)",
    secondary: "var(--ui-text-secondary, #6b7280)",
    tertiary: "var(--ui-text-tertiary, #9ca3af)",
    inverse: "var(--ui-text-inverse, #ffffff)",
  },
};

/**
 * Get color value by path
 * @param {string} path - Color path (e.g., "primary", "success.light")
 * @returns {string} Color value
 */
export function getColor(path) {
  const keys = path.split(".");
  let value = COLORS;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return null;
  }
  
  return typeof value === "object" ? value.DEFAULT : value;
}
