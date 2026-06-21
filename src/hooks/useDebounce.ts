// useDebounce hook — delays updating a value until input settles

import { useState, useEffect } from "react";
import { DEBOUNCE_DELAYS } from "@/lib/constants";

export function useDebounce<T>(value: T, delay: number = DEBOUNCE_DELAYS.SEARCH): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
