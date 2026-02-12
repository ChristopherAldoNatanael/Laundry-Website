"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

/**
 * DevWarningBanner
 *
 * Shows a helpful banner in development mode if hydration warnings are detected.
 * Only appears in development and can be dismissed.
 */
export function DevWarningBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    // Check if user has dismissed the banner
    const dismissed = localStorage.getItem("hydration-warning-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Listen for console errors
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(" ");

      // Check for hydration warnings
      if (errorMessage.includes("Hydration") || errorMessage.includes("fdprocessedid") || errorMessage.includes("Extra attributes from the server")) {
        setShowBanner(true);
      }

      // Call original console.error
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    setIsDismissed(true);
    localStorage.setItem("hydration-warning-dismissed", "true");
  };

  if (!showBanner || isDismissed || process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] max-w-md animate-in slide-in-from-bottom-5">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-yellow-800">Development Notice</h3>
            <p className="mt-1 text-xs text-yellow-700">
              Hydration warning detected. This is caused by <strong>browser extensions</strong> (form fillers, password managers) adding attributes to HTML elements.
            </p>
            <p className="mt-2 text-xs text-yellow-700">
              <strong>✓ Your code is fine!</strong> This won't appear in production.
            </p>
            <div className="mt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/vercel/next.js/discussions/35773", "_blank");
                }}
                className="text-xs font-medium text-yellow-800 hover:text-yellow-900 underline"
              >
                Learn more →
              </a>
            </div>
          </div>
          <button onClick={handleDismiss} className="flex-shrink-0 text-yellow-400 hover:text-yellow-600 transition-colors" aria-label="Dismiss warning">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
