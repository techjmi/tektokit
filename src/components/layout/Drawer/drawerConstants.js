/**
 * Drawer Constants
 */

// Position options
export const DRAWER_POSITION = {
  left:"left",
  right:"right",
  top:"top",
  bottom:"bottom",
};

// Position classes for positioning the drawer
export const DRAWER_POSITION_CLASS = {
  left:"left-0 top-0 h-full",
  right:"right-0 top-0 h-full",
  top:"top-0 left-0 w-full",
  bottom:"bottom-0 left-0 w-full",
};

// Size variants
export const DRAWER_SIZE = {
  sm:"w-72",
  md:"w-96",
  lg:"w-[28rem]",
  xl:"w-[32rem]",
  full:"w-screen",
};

// Animation states (when drawer is open)
export const DRAWER_ANIMATION = {
  left:"translate-x-0",
  right:"translate-x-0",
  top:"translate-y-0",
  bottom:"translate-y-0",
};

// Hidden states (when drawer is closed)
export const DRAWER_HIDDEN = {
  left:"-translate-x-full",
  right:"translate-x-full",
  top:"-translate-y-full",
  bottom:"translate-y-full",
};

// Drawer panel styles (background, text, etc.)
export const DRAWER_PANEL_CLASS = "fixed z-50 bg-white text-black shadow-xl transition-transform duration-300 ease-in-out flex flex-col";

