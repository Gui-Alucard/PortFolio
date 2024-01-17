'use client'

import dynamic from 'next/dynamic'
import { useTranslator } from '@/global/translate/Translator.context'
import ImageLoader from '@/components/Loading'
import { useEffect, useState } from 'react'

const AnimatedPhoto = dynamic(() => import('@/components/AnimatedPhoto'), {
  loading: () => <ImageLoader />,
})

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].HOME_PAGE

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <div className="flex h-screen flex-col-reverse items-center justify-center md:flex-row">
          {/* Left - Bottom */}
          <div className="mt-8 flex w-[360px] flex-col flex-wrap sm:w-[480px] md:w-[768px] md:px-14">
            <h1 className="flex animate-h1_entry items-center justify-start py-2 font-alt text-3xl font-bold md:text-3xl xl:text-7xl">
              Guilherme Oliveira
            </h1>
            <span className="-z-0 flex animate-h3_entry items-center justify-start py-2 text-2xl font-bold md:text-2xl xl:text-5xl">
              <span className="animate-pulse font-orbitron text-purple-600">
                {TEXT.TITLE}
              </span>
            </span>
            <p className="animate-text_entry py-2 text-left text-lg leading-relaxed text-purple-900 md:text-justify dark:text-gray-50">
              {TEXT.SUMMARY}
            </p>
          </div>

          {/* Right - Top */}
          <AnimatedPhoto />
        </div>
      ) : (
        <ImageLoader />
      )}
    </>
  )
}
