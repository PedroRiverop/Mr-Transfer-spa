"use client"

import { useCounterAnimation } from "@/hooks/use-counter-animation"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  start?: number
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  start = 0,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const count = useCounterAnimation({
    end,
    duration,
    start,
    isVisible: isIntersecting,
  })

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
