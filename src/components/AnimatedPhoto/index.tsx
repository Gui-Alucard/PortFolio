import Image from 'next/image'

import mainPic from '@/assets/main-picture.jpg'

export default function AnimatedPhoto() {
  return (
    <Image
      src={mainPic}
      loading="lazy"
      alt="picture of me"
      style={{
        width: '70%',
        height: 'auto',
      }}
      priority={false}
      placeholder="blur"
      className="w-fit animate-mainPhoto border border-purple-logo bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out md:min-w-64 md:max-w-[480px]"
    />
  )
}
