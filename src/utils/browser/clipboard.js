'use client';

/**
 * Clipboard Utilities
 * Browser clipboard operations with SSR safety
 */

import { isBrowser } from './window';

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful, false otherwise
 * 
 * @example
 * const success = await copyToClipboard('Hello World');
 * if (success) console.log('Copied!');
 */
export const copyToClipboard = async (text) => {
  if (!isBrowser() || !text) return false;

  try {
    // Modern Clipboard API (preferred)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return successful;
  } catch (error) {
    console.error('Copy to clipboard failed:', error);
    return false;
  }
};

/**
 * Read text from clipboard
 * @returns {Promise<string|null>} - Clipboard text or null if failed
 * 
 * @example
 * const text = await readFromClipboard();
 * console.log('Clipboard:', text);
 */
export const readFromClipboard = async () => {
  if (!isBrowser()) return null;

  try {
    if (navigator.clipboard && navigator.clipboard.readText) {
      const text = await navigator.clipboard.readText();
      return text;
    }
    return null;
  } catch (error) {
    console.error('Read from clipboard failed:', error);
    return null;
  }
};

/**
 * Check if clipboard API is available
 * @returns {boolean} - True if clipboard is supported
 */
export const isClipboardSupported = () => {
  if (!isBrowser()) return false;
  return !!(navigator.clipboard && navigator.clipboard.writeText);
};

/**
 * Copy with fallback message
 * @param {string} text - Text to copy
 * @param {object} options - Options { onSuccess, onError }
 * @returns {Promise<boolean>}
 * 
 * @example
 * await copyWithFeedback('Hello', {
 *   onSuccess: () => alert('Copied!'),
 *   onError: () => alert('Failed to copy')
 * });
 */
export const copyWithFeedback = async (text, options = {}) => {
  const { onSuccess, onError } = options;
  
  const success = await copyToClipboard(text);
  
  if (success && onSuccess) {
    onSuccess();
  } else if (!success && onError) {
    onError();
  }
  
  return success;
};
