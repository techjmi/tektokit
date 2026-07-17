/**
 * Avatar Component Constants
 */

/**
 * Avatar sizes
 */
export const AVATAR_SIZE = {
  xs:'xs',
  sm:'sm',
  md:'md',
  lg:'lg',
  xl:'xl',
 '2xl':'2xl',
};

/**
 * Avatar size classes (width, height, text size)
 */
export const AVATAR_SIZE_CLASSES = {
  xs:'w-6 h-6 text-xs',
  sm:'w-8 h-8 text-xs',
  md:'w-10 h-10 text-sm',
  lg:'w-12 h-12 text-base',
  xl:'w-16 h-16 text-lg',
 '2xl':'w-24 h-24 text-2xl',
};

/**
 * Status indicator sizes (positioned absolute)
 */
export const STATUS_SIZE_CLASSES = {
  xs:'w-1.5 h-1.5',
  sm:'w-2 h-2',
  md:'w-2.5 h-2.5',
  lg:'w-3 h-3',
  xl:'w-4 h-4',
 '2xl':'w-5 h-5',
};

/**
 * Avatar shapes
 */
export const AVATAR_SHAPE = {
  circle:'circle',
  square:'square',
  rounded:'rounded',
};

/**
 * Avatar shape classes
 */
export const AVATAR_SHAPE_CLASSES = {
  circle:'rounded-full',
  square:'rounded-none',
  rounded:'rounded-lg',
};

/**
 * User status types
 */
export const USER_STATUS = {
  online:'online',
  offline:'offline',
  away:'away',
  busy:'busy',
  dnd:'dnd', // Do not disturb
};

/**
 * User status colors
 */
export const USER_STATUS_COLORS = {
  online:'bg-green-500',
  offline:'',
  away:'bg-yellow-500',
  busy:'bg-red-500',
  dnd:'bg-red-600',
};

/**
 * Fallback background colors (deterministic based on name)
 */
export const FALLBACK_COLORS = [
 'bg-blue-500',
 'bg-green-500',
 'bg-yellow-500',
 'bg-red-500',
 'bg-purple-500',
 'bg-pink-500',
 'bg-indigo-500',
 'bg-teal-500',
 'bg-orange-500',
 'bg-cyan-500',
];

/**
 * Get user initials from name
 * @param {string} name - User's full name
 * @returns {string} - User initials (max 2 characters)
 */
export const getUserInitials = (name) => {
  if (!name || typeof name !=='string') return'U';
  
  const trimmed = name.trim();
  if (!trimmed) return'U';
  
  const parts = trimmed.split(/\s+/);
  
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Get deterministic color based on name (same name = same color)
 * @param {string} name - User's name
 * @returns {string} - Tailwind bg color class
 */
export const getAvatarColor = (name) => {
  if (!name || typeof name !=='string') {
    return FALLBACK_COLORS[0];
  }
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % FALLBACK_COLORS.length;
  return FALLBACK_COLORS[index];
};

/**
 * Get avatar size class
 * @param {string} size - Size key
 * @returns {string} - Tailwind classes
 */
export const getAvatarSizeClass = (size) => {
  return AVATAR_SIZE_CLASSES[size] || AVATAR_SIZE_CLASSES.md;
};

/**
 * Get status size class
 * @param {string} size - Size key
 * @returns {string} - Tailwind classes
 */
export const getStatusSizeClass = (size) => {
  return STATUS_SIZE_CLASSES[size] || STATUS_SIZE_CLASSES.md;
};

/**
 * Get avatar shape class
 * @param {string} shape - Shape key
 * @returns {string} - Tailwind classes
 */
export const getAvatarShapeClass = (shape) => {
  return AVATAR_SHAPE_CLASSES[shape] || AVATAR_SHAPE_CLASSES.circle;
};
