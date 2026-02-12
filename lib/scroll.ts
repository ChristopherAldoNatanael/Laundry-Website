/**
 * Scroll Utilities
 * Untuk smooth scroll dan scroll detection
 */

/**
 * Smooth scroll ke element
 * @param selector - CSS selector atau element
 * @param offset - Offset dari top (untuk navbar)
 */
export function smoothScrollToElement(selector: string, offset: number = 80): void {
  try {
    const element = document.querySelector(selector) as HTMLElement
    if (!element) {
      console.warn(`[Scroll] Element not found: ${selector}`)
      return
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  } catch (error) {
    console.error('[Scroll] Error scrolling to element:', error)
  }
}

/**
 * Smooth scroll to top
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

/**
 * Detect if user scrolled down
 * @param callback - Callback function
 * @param threshold - Pixels scrolled
 */
export function onScrollDown(callback: () => void, threshold: number = 50): () => void {
  let lastScrollTop = 0

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop

    if (scrollTop - lastScrollTop > threshold) {
      callback()
    }

    lastScrollTop = scrollTop
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll)
}

/**
 * Get scroll position
 * @returns Current scroll position (0-100%)
 */
export function getScrollProgress(): number {
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = (window.scrollY / windowHeight) * 100
  return Math.min(scrolled, 100)
}

/**
 * Check if element is in viewport
 * @param element - DOM element
 * @param offset - Offset from viewport edge
 */
export function isElementInViewport(element: HTMLElement, offset: number = 0): boolean {
  const rect = element.getBoundingClientRect()
  return (
    rect.top <= window.innerHeight - offset &&
    rect.bottom >= offset &&
    rect.left <= window.innerWidth &&
    rect.right >= 0
  )
}

/**
 * Observe elements that enter viewport (for animations)
 * @param selector - CSS selector for elements to observe
 * @param callback - Callback when element enters viewport
 * @param options - IntersectionObserver options
 */
export function observeElementsInViewport(
  selector: string,
  callback: (element: Element) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    ...options,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target)
        // Optional: unobserve after first intersection
        // observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  document.querySelectorAll(selector).forEach((element) => {
    observer.observe(element)
  })

  return observer
}

/**
 * Disable scroll (for modals, etc)
 */
export function disableScroll(): void {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = `${scrollbarWidth}px`
}

/**
 * Enable scroll
 */
export function enableScroll(): void {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

/**
 * Scroll lock/unlock hook compatible function
 */
export function useScrollLock(): { lock: () => void; unlock: () => void } {
  return {
    lock: disableScroll,
    unlock: enableScroll,
  }
}
