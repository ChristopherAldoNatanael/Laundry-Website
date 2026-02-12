"use client";

import { useEffect } from "react";

/**
 * HydrationFix Component
 *
 * Aggressively removes browser extension-added attributes BEFORE React hydration.
 * This prevents hydration mismatches caused by extensions like LastPass, 1Password, etc.
 */
export function HydrationFix() {
  useEffect(() => {
    // List of attributes added by browser extensions
    const extensionAttributes = ["fdprocessedid", "data-lastpass-icon-root", "data-lastpass-root", "data-form-type", "data-kwimpalastatus", "data-kwimpalaid", "data-1p-ignore", "data-dashlane-rid", "data-bwignore"];

    // Function to clean all extension attributes
    const cleanupAttributes = () => {
      extensionAttributes.forEach((attr) => {
        const elements = document.querySelectorAll(`[${attr}]`);
        elements.forEach((el) => {
          el.removeAttribute(attr);
        });
      });
    };

    // Clean immediately on mount (as early as possible)
    cleanupAttributes();

    // Clean after a short delay (catch late additions)
    const timeoutId = setTimeout(cleanupAttributes, 100);

    // Create MutationObserver to catch real-time changes
    const observer = new MutationObserver((mutations) => {
      let needsCleanup = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const attrName = mutation.attributeName;
          if (attrName && extensionAttributes.includes(attrName)) {
            needsCleanup = true;
          }
        }
      });

      if (needsCleanup) {
        cleanupAttributes();
      }
    });

    // Start observing the entire document
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: extensionAttributes,
      subtree: true,
      childList: false,
    });

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
