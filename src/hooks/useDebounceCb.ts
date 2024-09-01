import { useRef } from 'react'

export function useDebounceCb () {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const debounceCb = (callback: () => void, debounce = 1000) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(callback, debounce)
  }

  const clearRef = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  return { debounceCb, clearRef }
}
