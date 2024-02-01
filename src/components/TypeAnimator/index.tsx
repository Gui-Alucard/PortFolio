import { TypeAnimation } from 'react-type-animation'

export default function TypeAnimator({
  stackOne,
  stackTwo,
}: {
  stackOne: string
  stackTwo: string
}) {
  return (
    <TypeAnimation
      sequence={[stackOne, 2000, stackTwo, 2000]}
      wrapper="span"
      cursor={true}
      speed={{ type: 'keyStrokeDelayInMs', value: 60 }}
      repeat={Infinity}
      style={{
        display: 'block',
      }}
      className="flex flex-1 font-orbitron text-xl font-bold text-purple-600 sm:text-2xl lg:text-4xl xl:text-5xl"
    />
  )
}
