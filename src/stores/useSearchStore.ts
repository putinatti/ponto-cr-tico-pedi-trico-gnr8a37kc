import { useState, useEffect } from 'react'

let globalIsOpen = false
const listeners = new Set<() => void>()

const notify = () => listeners.forEach((l) => l())

export default function useSearchStore() {
  const [isOpen, setIsOpenState] = useState(globalIsOpen)

  useEffect(() => {
    const listener = () => setIsOpenState(globalIsOpen)
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }, [])

  const setIsOpen = (newVal: boolean) => {
    globalIsOpen = newVal
    notify()
  }

  return { isOpen, setIsOpen }
}
