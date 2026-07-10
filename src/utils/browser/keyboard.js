/**
 * Keyboard utility functions
 */

export const KEYS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  HOME: 'Home',
  END: 'End',
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
};

export const isKey = (event, key) => event.key === key;

export const isEscapeKey = (event) => isKey(event, KEYS.ESCAPE);
export const isEnterKey = (event) => isKey(event, KEYS.ENTER);
export const isSpaceKey = (event) => isKey(event, KEYS.SPACE);
export const isTabKey = (event) => isKey(event, KEYS.TAB);

export const isArrowKey = (event) => 
  [KEYS.ARROW_UP, KEYS.ARROW_DOWN, KEYS.ARROW_LEFT, KEYS.ARROW_RIGHT].includes(event.key);

/**
 * Create keyboard event handler
 */
export const createKeyHandler = (handlers) => (event) => {
  const handler = handlers[event.key];
  if (handler) {
    handler(event);
  }
};

/**
 * Handle ESC key press
 */
export const onEscapeKey = (callback) => (event) => {
  if (isEscapeKey(event)) {
    callback(event);
  }
};

/**
 * Handle ENTER key press
 */
export const onEnterKey = (callback) => (event) => {
  if (isEnterKey(event)) {
    callback(event);
  }
};
