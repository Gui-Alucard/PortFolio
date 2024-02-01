'use client'

import {
  type Container,
  type Engine,
  type ISourceOptions,
} from '@tsparticles/engine'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

import { useTheme } from 'next-themes'

import particlesOptions from '@/themes/particles.options'

import { IColors } from '@/interfaces/particles.interface'
import { COLORS } from '@/themes/colors'
import { usePathname } from 'next/navigation'

export default function ParticlesComponent({
  children,
}: {
  children: ReactNode
}) {
  const [init, setInit] = useState<boolean>(false)
  const pathname = usePathname()
  const { theme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(
    async (container?: Container | undefined): Promise<void> => {
      console.log(container)
    },
    [],
  )

  const options: ISourceOptions = useMemo(() => {
    const colors: IColors = {
      particles: theme === 'light' ? COLORS.purple[900] : COLORS.logo,
      links: theme === 'light' ? COLORS.purple[900] : COLORS.purple[400],
    }
    return particlesOptions(colors)
  }, [theme])

  return (
    <>
      {init ? (
        <div
          className={
            pathname === '/'
              ? 'm-0 box-border h-screen max-h-screen w-screen overflow-y-scroll p-0'
              : 'm-0 box-border h-screen max-h-full w-screen overflow-y-scroll p-0'
          }
        >
          <Particles particlesLoaded={particlesLoaded} options={options} />
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}
