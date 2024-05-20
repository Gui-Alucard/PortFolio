'use client'

import { Suspense } from 'react'
import Loading from './loading'

import { useTranslator } from '@/global/translate/Translator.context'

import notFound from '@/assets/404.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale]

  return (
    <Suspense
      fallback={
        <Loading title={TEXT.LOADING.TITLE} message={TEXT.LOADING.MESSAGE} />
      }
    >
      <section className="no-scrollbar flex h-screen flex-col items-center justify-center overflow-y-scroll pb-32 pt-10 md:flex-row-reverse md:gap-16 md:pb-0 md:pt-0">
        <Link key="home" href="/">
          <Image
            src={notFound}
            alt="not found page"
            className="mb-6 h-56 w-auto drop-shadow-home focus:outline-none md:mb-0 md:h-[24rem]"
          />
        </Link>
        <aside className="flex flex-col items-center justify-center text-center md:items-start md:text-start">
          <h3 className="mt-8 font-orbitron text-2xl font-bold tracking-wider text-purple-900 md:text-4xl dark:text-purple-50">
            {TEXT.NOT_FOUND.TITLE}
          </h3>
          <h4 className="mt-4 font-orbitron text-lg text-purple-900 md:text-2xl dark:text-purple-50">
            {TEXT.NOT_FOUND.MESSAGE}
          </h4>
          <h5 className="mt-2 font-orbitron text-base text-purple-400 md:text-xl">
            {TEXT.NOT_FOUND.SUB_MESSAGE}
          </h5>
        </aside>
      </section>
    </Suspense>
  )
}
