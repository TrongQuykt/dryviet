'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  height?: string // Legacy fixed height
  minHeightClass?: string // Recommended: Responsive Tailwind class e.g., 'min-h-[500px] lg:min-h-[800px]'
  offset?: string
}

/**
 * LazySection component wraps parts of the page that should only be loaded/rendered
 * when they enter the viewport. This significantly improves Initial Page Load and TTI.
 */
export function LazySection({ children, height, minHeightClass = '', offset = '400px' }: LazySectionProps) {
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If the component is already in view or entered view once, don't observe anymore
    if (hasEnteredView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: `0px 0px 800px 0px`, // Pre-load way sooner for smoothness
        threshold: 0.01 // Trigger as soon as a single pixel or near-margin is reached
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
      className={minHeightClass}
      style={height ? { minHeight: height } : {}}
    >
      {hasEnteredView ? children : (
        // Placeholder for the section while loading
        <div className={`w-full shadow-sm bg-slate-50/20 backdrop-blur-sm animate-pulse rounded-lg ${minHeightClass}`} style={height ? { height } : {}} />
      )}
    </div>
  )
}
