"use client";

import { useEffect } from "react";

/**
 * SuppressHydrationWarnings Component
 *
 * Intercepts and suppresses hydration warnings in the console.
 * Only runs in development mode.
 */
export function SuppressHydrationWarnings() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    // Store original console.error
    const originalError = console.error;

    // Override console.error to filter hydration warnings
    console.error = (...args: any[]) => {
      const errorMessage = args.join(" ");

      // List of hydration-related messages to suppress
      const hydrationMessages = [
        "Hydration",
        "hydration",
        "fdprocessedid",
        "Extra attributes from the server",
        "didn't match",
        "Text content does not match",
        "Prop `className` did not match",
        "data-lastpass",
        "data-kwimpalaid",
        "data-form-type",
      ];

      // Check if error is hydration-related
      const isHydrationError = hydrationMessages.some((msg) => errorMessage.includes(msg));

      // Only log non-hydration errors
      if (!isHydrationError) {
        originalError.apply(console, args);
      }
    };

    // Cleanup on unmount
    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}
