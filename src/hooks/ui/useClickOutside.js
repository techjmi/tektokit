/**
 * Custom hook to detect clicks outside an element
 * Useful for closing dropdowns, modals, menus on outside click
 * 
 * @param {Function} callback - Function to call when clicked outside
 * @returns {RefObject} - Ref to attach to the element
 * 
 * @example
 * const ref = useClickOutside(() => setIsOpen(false));
 * <div ref={ref}>Content</div>
 */
import { useEffect, useRef } from "react";

export function useClickOutside(callback) {
  const ref = useRef(null);
  const callbackRef = useRef(callback);

  // Keep latest callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!ref.current) return;
      if (!ref.current.contains(event.target)) {
        callbackRef.current?.(event);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return ref;
}
