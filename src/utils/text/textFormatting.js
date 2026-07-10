/**
 * Text formatting utility functions
 */
import { isNil, isString } from "../base/type";

/**
 * Capitalize first letter of a string
 * @param {string} text - Text to capitalize
 * @returns {string} Capitalized text
 */
export const capitalize = (text = "") => {
  if (isNil(text) || !isString(text)) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Convert text to title case (capitalize each word)
 * @param {string} text - Text to convert
 * @returns {string} Title cased text
 */
export const titleCase = (text = "") => {
  if (isNil(text) || !isString(text)) return "";
  return text.split(" ").map(capitalize).join(" ");
};

/**
 * Truncate text to specified length with suffix
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to append (default: "…")
 * @returns {string} Truncated text
 */
export const truncate = (text = "", length = 100, suffix = "…") => {
  if (isNil(text) || !isString(text)) return "";
  return text.length > length ? text.slice(0, length) + suffix : text;
};

/**
 * Convert text to slug (URL-friendly format)
 * @param {string} text - Text to convert
 * @returns {string} Slugified text
 */
export const slugify = (text = "") => {
  if (isNil(text) || !isString(text)) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
