import { useLayoutEffect, useState } from 'react'

export const useWindowSize = (): number => {
  const [windowSize, setWindowSize] = useState<number>(0)

  const onResize = () => {
    setWindowSize(window.innerWidth)
  }

  useLayoutEffect(() => {
    onResize()

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return windowSize
}
