'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { Suspense } from 'react'
import Loading from './loading'
import AnimatedPhoto from '@/components/AnimatedPhoto'

export default function Home() {
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].HOME_PAGE

  return (
    <Suspense
      fallback={
        <Loading title={TEXT.SPLASH_TITLE} message={TEXT.SPLASH_MESSAGE} />
      }
    >
      <section className="flex h-screen items-center justify-center">
        <section className="mt-8 flex flex-col-reverse items-center justify-center px-6 sm:mt-0 md:flex-row">
          {/* Left - Bottom */}
          <div className="mt-10 flex w-3/4 flex-1 flex-col items-start sm:w-2/3 md:mt-0 md:w-1/2">
            <h1 className="flex flex-1 animate-h1_entry whitespace-nowrap font-alt text-4xl font-bold lg:text-6xl xl:text-7xl">
              Guilherme Oliveira
            </h1>
            <span className="mt-4 flex flex-1 animate-h3_entry text-2xl font-bold md:mt-6 lg:text-4xl xl:text-5xl">
              <span className="animate-pulse font-orbitron text-purple-600">
                {TEXT.TITLE}
              </span>
            </span>
            <p className="mt-6 animate-text_entry text-left text-base leading-relaxed text-purple-900 dark:text-gray-50 md:mt-10 md:text-justify lg:text-lg">
              {TEXT.SUMMARY}
            </p>
          </div>

          {/* Right - Top */}
          <AnimatedPhoto />
        </section>
      </section>
    </Suspense>
  )
}
