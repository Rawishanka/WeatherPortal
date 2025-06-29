import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const parsed = item ? JSON.parse(item) : null;

      // Ensure parsed value is valid, fallback to initialValue if not
      return (Array.isArray(parsed) || typeof parsed === "object" && parsed !== null)
        ? (parsed as T)
        : initialValue;

    } catch (error) {
      console.error(`useLocalStorage: Failed to parse localStorage key "${key}"`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`useLocalStorage: Failed to save key "${key}"`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}
