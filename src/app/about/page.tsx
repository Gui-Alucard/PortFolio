'use client'

import dynamic from 'next/dynamic'

import { Suspense } from 'react'
import { useTranslator } from '@/global/translate/Translator.context'

import Loading from '../loading'
import AboutSkills from '@/components/Cards/AboutSkills'
import Divider from '@/components/Divider'

import { SkillsEnum } from '@/components/Cards/AboutSkills/skills.enum'

import { motion, AnimatePresence } from 'framer-motion'

const AboutPhoto = dynamic(() => import('@/components/AboutPhoto'), {
  loading: () => null,
})

const AboutHero = dynamic(() => import('@/components/AboutHero'), {
  loading: () => null,
})

export default function About() {
  const { locale, translate } = useTranslator()
  const TEXTS = translate[locale]

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.6,
      },
    },
  }

  return (
    <Suspense
      fallback={
        <Loading title={TEXTS.LOADING.TITLE} message={TEXTS.LOADING.MESSAGE} />
      }
    >
      <AnimatePresence mode="wait">
        <section className="no-scrollbar mt-[120vw] flex h-screen w-full flex-col justify-start overflow-y-scroll pb-40 pt-0 md:mt-[calc(78vw-60%)] md:h-screen md:w-screen md:pb-0 md:pt-14">
          <section className="flex flex-col items-center justify-center px-0 md:flex-row">
            <AboutPhoto />
            <AboutHero />
          </section>
          <div className="flex items-center justify-center py-14">
            <Divider />
          </div>
          <section className="min-h-3/4 flex w-full items-center pb-[20rem] md:px-[6%]">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="ml-3 flex flex-1 flex-col items-center justify-between lg:flex-row lg:items-start"
            >
              <AboutSkills type={SkillsEnum.FRONT} />
              <AboutSkills type={SkillsEnum.BACK} />
              <AboutSkills type={SkillsEnum.OTHERS} />
            </motion.div>
          </section>
        </section>
      </AnimatePresence>
    </Suspense>
  )
}
