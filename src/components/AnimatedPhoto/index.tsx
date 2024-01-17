import Image from 'next/image'
import mainPic from '@/assets/main-picture.jpg'

export default async function AnimatedPhoto() {
  return (
    <div className="mb-4 flex h-[360px] w-[360px] flex-col items-center justify-center sm:mb-0 sm:mt-4 sm:h-[420px] sm:w-[460px] sm:px-14 md:w-[768px]">
      <div className="flex h-screen items-center justify-center">
        <Image
          src={mainPic}
          alt="picture of me"
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority={false}
          className="h-[280px] w-[280px] animate-mainPhoto border border-purple-logo bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out sm:h-[360px] sm:w-[360px] xl:h-[480px] xl:w-[480px]"
        />
      </div>
    </div>
  )
}
