'use client'

import { Suspense } from 'react'
import Loading from './loading'

import { useTranslator } from '@/global/translate/Translator.context'

import Summary from '@/components/Summary'
import AnimatedPhoto from '@/components/AnimatedPhoto'

import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  const { locale, translate } = useTranslator()
  const TEXT = translate[locale].HOME_PAGE

  return (
    <Suspense
      fallback={
        <Loading title={TEXT.SPLASH_TITLE} message={TEXT.SPLASH_MESSAGE} />
      }
    >
      <section className="flex h-fit items-center justify-center py-28 md:h-screen portrait:h-screen portrait:py-0">
        <section className="flex flex-col-reverse items-center justify-center px-6 md:flex-row">
          {/* Left - Bottom */}
          <AnimatePresence mode="wait">
            <motion.aside
              className="ml-8 mt-10 flex w-3/4 flex-1 flex-col items-start sm:w-2/3 md:mt-0 md:w-1/2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Summary title={TEXT.TITLE} summary={TEXT.SUMMARY} />
            </motion.aside>

            {/* Right - Top */}
            <motion.aside
              className="animate-main_photo_entry flex w-3/4 flex-1 flex-col items-center justify-center sm:w-2/3 md:w-1/2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatedPhoto />
            </motion.aside>
          </AnimatePresence>
        </section>
      </section>
    </Suspense>
  )
}
