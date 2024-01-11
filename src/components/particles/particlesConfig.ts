import { COLORS } from '@/themes/colors'
import { type ISourceOptions } from '@tsparticles/engine'

const ParticlesConfig: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 260,
        duration: 0.4,
      },
    },
  },
  particles: {
    reduceDuplicates: true,
    color: {
      value: COLORS.logo,
    },
    links: {
      color: COLORS.purple[400],
      distance: 140,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        height: 800,
        width: 800,
      },
      value: 32,
    },
    opacity: {
      value: 0.6,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  style: {
    zIndex: '0',
    position: 'absolute',
  },
  detectRetina: true,
}

export default ParticlesConfig
