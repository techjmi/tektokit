/**
 * Type checking utility functions
 * Provides consistent type checking across the library
 */

// Environment checks
export const isBrowser = typeof window !== "undefined";
export const isServer = !isBrowser;

// Type checkers
export const isFunction = (v) => typeof v === "function";
export const isString = (v) => typeof v === "string";
export const isNumber = (v) => typeof v === "number";
export const isBoolean = (v) => typeof v === "boolean";
export const isUndefined = (v) => typeof v === "undefined";
export const isNull = (v) => v === null;
export const isNil = (v) => isNull(v) || isUndefined(v);
export const isArray = (v) => Array.isArray(v);
export const isObject = (v) => v !== null && typeof v === "object" && !isArray(v);
export const isDate = (v) => v instanceof Date && !isNaN(v);
export const isEmpty = (v) => {
  if (isNil(v)) return true;
  if (isString(v) || isArray(v)) return v.length === 0;
  if (isObject(v)) return Object.keys(v).length === 0;
  return false;
};
