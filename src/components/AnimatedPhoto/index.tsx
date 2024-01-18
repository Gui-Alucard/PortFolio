'use client'

import Image from 'next/image'
import mainPic from '@/assets/main-picture.jpg'

export default function AnimatedPhoto() {
  return (
    <div className="flex w-3/4 flex-1 animate-main_photo_entry flex-col sm:w-2/3 md:w-1/2">
      <div className="my-2 flex items-center justify-center">
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
      </div>
    </div>
  )
}
