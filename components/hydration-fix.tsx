'use client'

import { useEffect } from 'react'

/**
 * HydrationFix Component
 * 
 * Removes browser extension-added attributes that cause hydration warnings.
 * Browser extensions (password managers, form fillers) add attributes like
 * 'fdprocessedid' which cause React hydration mismatches.
 * 
 * This is a cosmetic fix for development - these warnings don't affect production.
 */
export function HydrationFix() {
  useEffect(() => {
    // Run after hydration to clean up extension-added attributes
    const cleanupExtensionAttributes = () => {
      const attributesToRemove = [
        'fdprocessedid',
        'data-lastpass-icon-root',
        'data-form-type',
        'data-kwimpalastatus',
        'data-kwimpalaid',
      ]

      // Remove from all elements
      attributesToRemove.forEach((attr) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
          el.removeAttribute(attr)
        })
      })
    }

    // Clean up immediately and on DOM changes
    cleanupExtensionAttributes()

    // Use MutationObserver to catch extension modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement
          const attributesToRemove = [
            'fdprocessedid',
            'data-lastpass-icon-root',
            'data-form-type',
            'data-kwimpalastatus',
            'data-kwimpalaid',
          ]
          
          attributesToRemove.forEach((attr) => {
            if (target.hasAttribute(attr)) {
              target.removeAttribute(attr)
            }
          })
        }
      })
    })

    // Observe the entire document for attribute changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        'fdprocessedid',
        'data-lastpass-icon-root',
        'data-form-type',
        'data-kwimpalastatus',
        'data-kwimpalaid',
      ],
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}
