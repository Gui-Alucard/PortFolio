'use client'

import { Suspense } from 'react'
import Simulator from './simulator'
import Loading from '../loading'
import { useTranslator } from '@/global/translate/Translator.context'

export default function About() {
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].HOME_PAGE

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <p>About</p>
      <Suspense
        fallback={
          <Loading title={TEXT.SPLASH_TITLE} message={TEXT.SPLASH_MESSAGE} />
        }
      >
        <Simulator />
      </Suspense>
    </div>
  )
}
