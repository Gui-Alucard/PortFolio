'use client'

import dynamic from 'next/dynamic'

import { Suspense } from 'react'
import Loading from './loading'

import { useTranslator } from '@/global/translate/Translator.context'

import Summary from '@/components/Summary'

import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'

// const ParticlesComponent = dynamic(() => import('@/components/Particles'), {
//   loading: () => null,
//   ssr: false,
// })

const AnimatedPhoto = dynamic(() => import('@/components/AnimatedPhoto'), {
  loading: () => null,
})

export default function Page() {
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].LOADING

  return (
    <Suspense fallback={<Loading title={TEXT.TITLE} message={TEXT.MESSAGE} />}>
      <section className="no-scrollbar flex h-screen items-center justify-center overflow-y-scroll pb-32 pt-10 md:pb-0 md:pt-0">
        <section className="flex flex-col-reverse items-center justify-center px-6 md:flex-row">
          {/* Left - Bottom */}
          <AnimatePresence mode="wait">
            <motion.aside
              className="ml-8 mt-8 flex w-3/4 flex-1 flex-col items-start sm:w-2/3 md:mt-0 md:w-1/2"
              variants={fadeIn(VariantsEnum.UP, 0.5)}
              initial="hidden"
              animate="show"
            >
              <Summary translate={translate} locale={locale} />
            </motion.aside>

            {/* Right - Top */}
            <motion.aside
              className="flex w-3/4 flex-1 flex-col items-center justify-center sm:w-2/3 md:w-1/2"
              variants={fadeIn(VariantsEnum.DOWN, 0.3)}
              initial="hidden"
              animate="show"
            >
              <AnimatedPhoto />
            </motion.aside>
          </AnimatePresence>
        </section>
      </section>
    </Suspense>
  )
}
