import Image, { StaticImageData } from 'next/image'

export default function AnimatedPhoto({
  staticImage,
  width,
}: {
  staticImage: StaticImageData
  width?: string
}) {
  return (
    <Image
      src={staticImage}
      alt="picture of me"
      style={{
        width: width || '100%',
        height: 'auto',
      }}
      priority={false}
      className="w-fit animate-mainPhoto border border-purple-logo bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out md:min-w-64 md:max-w-[480px]"
    />
  )
}
