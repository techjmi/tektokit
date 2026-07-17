/**
 * Custom hook to handle toggle state
 * Useful for modals, dropdowns, menus, etc.
 * 
 * @param {boolean} initialValue - Initial state (default: false)
 * @returns {[boolean, Function]} - [value, toggle]
 * 
 * @example
 * const [isOpen, toggle] = useToggle(false);
 * <button onClick={toggle}>Toggle</button>
 */
import { useState } from 'react';

export const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(prev => !prev);
    return [value, toggle];
};
