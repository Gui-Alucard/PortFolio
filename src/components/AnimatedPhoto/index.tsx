import Image from 'next/image'
import mainPic from '@/assets/main-picture.jpg'

export default function AnimatedPhoto() {
  return (
    <Image
      src={mainPic}
      alt="picture of me"
      style={{
        width: '80%',
        height: 'auto',
      }}
      priority={false}
      className="w-fit animate-mainPhoto border border-purple-logo bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out md:min-w-72 md:max-w-[480px]"
    />
  )
}
