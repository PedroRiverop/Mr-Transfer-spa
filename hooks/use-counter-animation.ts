"use client"

import { useEffect, useState } from "react"

interface UseCounterAnimationProps {
  end: number
  duration?: number
  start?: number
  isVisible?: boolean
}

export function useCounterAnimation({ end, duration = 2000, start = 0, isVisible = true }: UseCounterAnimationProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start, isVisible])

  return count
}
