'use client'

import AnimatedPhoto from '@/components/AnimatedPhoto'
import { useTranslator } from '@/global/translate/Translator.context'

export default function Home() {
  // const url = require('@/assets/intro.mp4')
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].HOME_PAGE

  return (
    <div className="flex h-screen max-w-1920 flex-col-reverse items-center justify-center md:flex-row">
      {/* Left - Bottom */}
      <div className="mt-8 flex w-[360px] flex-col flex-wrap sm:w-[480px] md:w-[768px] md:px-14">
        <h1 className="flex animate-h1_blurAnimation items-center justify-start py-2 font-alt text-3xl font-bold md:text-3xl xl:text-7xl">
          Guilherme Oliveira
        </h1>
        <span className="-z-0 flex animate-h3_blurAnimation items-center justify-start py-2 text-2xl font-bold md:text-2xl xl:text-5xl">
          <span className="animate-pulse font-orbitron text-purple-600">
            {TEXT.TITLE}
          </span>
        </span>
        <p className="animate-text_blurAnimation py-2 text-left text-lg leading-relaxed text-purple-900 md:text-justify dark:text-gray-50">
          {TEXT.SUMMARY}
        </p>
      </div>

      {/* Right - Top */}
      <AnimatedPhoto />

      {/* <video
          autoPlay={true}
          controls={false}
          preload="preload"
          className="aspect-video w-full h-full rounded-lg object-contain"
        >
          <source type="video/mp4" src={url}/>
        </video> */}
    </div>
  )
}
