"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function AnimatedText({ children, className = "", delay = 0, direction = "up" }: AnimatedTextProps) {
  const { ref, hasIntersected } = useIntersectionObserver()

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"

    if (!hasIntersected) {
      switch (direction) {
        case "up":
          return `${baseClass} transform translate-y-8 opacity-0`
        case "down":
          return `${baseClass} transform -translate-y-8 opacity-0`
        case "left":
          return `${baseClass} transform translate-x-8 opacity-0`
        case "right":
          return `${baseClass} transform -translate-x-8 opacity-0`
        case "fade":
          return `${baseClass} opacity-0`
        default:
          return `${baseClass} transform translate-y-8 opacity-0`
      }
    }

    return `${baseClass} transform translate-y-0 translate-x-0 opacity-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
