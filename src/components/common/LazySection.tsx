'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  height?: string
  offset?: string
}

/**
 * LazySection component wraps parts of the page that should only be loaded/rendered
 * when they enter the viewport. This significantly improves Initial Page Load and TTI.
 */
export function LazySection({ children, height = '300px', offset = '400px' }: LazySectionProps) {
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If the component is already in view or entered view once, don't observe anymore
    if (hasEnteredView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay for a smoother feeling on fast scroll
          setTimeout(() => {
            setHasEnteredView(true)
          }, 100)
          observer.disconnect()
        }
      },
      {
        rootMargin: `0px 0px 200px 0px`, // Load sooner on mobile
        threshold: 0.1
      }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [hasEnteredView, offset])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        minHeight: hasEnteredView ? 'auto' : height,
      }}
    >
      {hasEnteredView ? children : (
        // Placeholder for the section while loading
        <div className="w-full h-full bg-slate-50/20 backdrop-blur-sm animate-pulse rounded-lg" style={{ height }} />
      )}
    </div>
  )
}
