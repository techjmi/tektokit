/**
 * Utility function to combine class names
 * Filters out falsy values and joins with space
 * 
 * @param {...(string|boolean|null|undefined)} args - Class names to combine
 * @returns {string} Combined class names
 * 
 * @example
 * classNames('btn', isActive && 'active', 'primary')
 * // Returns: "btn active primary"
 * 
 * classNames('btn', false && 'hidden', null, undefined, 'lg')
 * // Returns: "btn lg"
 */
export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}
