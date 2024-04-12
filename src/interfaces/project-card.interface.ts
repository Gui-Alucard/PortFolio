import { StaticImageData } from 'next/image'

export interface IProjectCard {
  id: number
  title: string
  image: StaticImageData
  link: string
  description: {
    P1?: string
    P2?: string
    P3?: string
    P4?: string
  }
}
