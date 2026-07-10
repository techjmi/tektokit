/**
 * Formatting utility functions for numbers, dates, currency
 */
import { isNil, isNumber, isDate } from "./type";

/**
 * Format number with locale-specific formatting
 * @param {number} value - Number to format
 * @param {string} locale - Locale string (default: "en-IN")
 * @returns {string} Formatted number
 */
export const formatNumber = (value, locale = "en-IN") => {
  if (isNil(value) || !isNumber(value)) return "";
  return Number(value).toLocaleString(locale);
};

/**
 * Format date with locale-specific formatting
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale string (default: "en-IN")
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export const formatDate = (date, locale = "en-IN", options = {}) => {
  if (isNil(date)) return "";
  const dateObj = new Date(date);
  if (!isDate(dateObj)) return "";
  return dateObj.toLocaleDateString(locale, options);
};

/**
 * Format time with locale-specific formatting
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale string (default: "en-IN")
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted time
 */
export const formatTime = (date, locale = "en-IN", options = {}) => {
  if (isNil(date)) return "";
  const dateObj = new Date(date);
  if (!isDate(dateObj)) return "";
  return dateObj.toLocaleTimeString(locale, options);
};

/**
 * Format date and time with locale-specific formatting
 * @param {Date|string|number} date - Date to format
 * @param {string} locale - Locale string (default: "en-IN")
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date and time
 */
export const formatDateTime = (date, locale = "en-IN", options = {}) => {
  if (isNil(date)) return "";
  const dateObj = new Date(date);
  if (!isDate(dateObj)) return "";
  return dateObj.toLocaleString(locale, options);
};

/**
 * Format currency with locale-specific formatting
 * @param {number} value - Amount to format
 * @param {string} currency - Currency code (default: "INR")
 * @param {string} locale - Locale string (default: "en-IN")
 * @returns {string} Formatted currency
 */
export const formatCurrency = (value, currency = "INR", locale = "en-IN") => {
  if (isNil(value) || !isNumber(value)) return "";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

/**
 * Get current year
 * @returns {number} Current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};
