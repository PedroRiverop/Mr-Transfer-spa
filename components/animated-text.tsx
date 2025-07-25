"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedTextProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "fade"
  delay?: number
  className?: string
}

export default function AnimatedText({ children, direction = "up", delay = 0, className = "" }: AnimatedTextProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    if (!isIntersecting) {
      switch (direction) {
        case "up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "down":
          return `${baseClasses} opacity-0 -translate-y-8`
        case "left":
          return `${baseClasses} opacity-0 translate-x-8`
        case "right":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "fade":
          return `${baseClasses} opacity-0`
        default:
          return `${baseClasses} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
