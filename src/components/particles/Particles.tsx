'use client'

import {
  type Container,
  type Engine,
  type ISourceOptions,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'
import ParticlesConfig from './particles.config'
import { useTheme } from 'next-themes'
import { IColors } from '@/interfaces/particles.interface'
import { COLORS } from '@/themes/colors'

const ParticlesComponent = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState<boolean>(false)
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
    return ParticlesConfig(colors)
  }, [theme])

  return (
    <>
      {init ? (
        <div className="max-h-screen overflow-y-scroll">
          <Particles particlesLoaded={particlesLoaded} options={options} />
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}

export default ParticlesComponent
