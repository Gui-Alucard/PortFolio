import { VariantsEnum } from './variants.enum'

export const fadeIn = (direction: VariantsEnum, delay: number) => {
  return {
    hidden: {
      y:
        direction === VariantsEnum.UP
          ? 80
          : direction === VariantsEnum.DOWN
            ? -80
            : 0,
      x:
        direction === VariantsEnum.LEFT
          ? 80
          : direction === VariantsEnum.RIGHT
            ? -80
            : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}
