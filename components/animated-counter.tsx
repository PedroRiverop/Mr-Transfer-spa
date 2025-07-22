"use client"

import { useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useCounterAnimation } from "@/hooks/use-counter-animation"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2000, className = "", suffix = "" }: AnimatedCounterProps) {
  const { ref, hasIntersected } = useIntersectionObserver()
  const { count, startAnimation } = useCounterAnimation(end, duration)

  useEffect(() => {
    if (hasIntersected) {
      startAnimation()
    }
  }, [hasIntersected, startAnimation])

  return (
    <div ref={ref} className={`counter-text ${className}`}>
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
