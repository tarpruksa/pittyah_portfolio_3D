import { DirectionType, TransitionType } from './type'

export const textVariant = (
  direction: DirectionType = 'down',
  delay: number = 0.3,
  duration: number = 1.2
) => {
  return {
    hidden: {
      y: direction === 'down' ? -50 : direction === 'up' ? 50 : 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: duration,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (
  direction: DirectionType,
  type: TransitionType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      y: direction === 'up' ? 80 : direction === 'down' ? -50 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (
  direction: DirectionType,
  type: TransitionType,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}
