'use client'

import { Suspense } from 'react'
import { useTranslator } from '@/global/translate/Translator.context'

import Loading from '../loading'
import AboutHero from '@/components/AboutHero'
import AboutPhoto from '@/components/AboutPhoto'
import AboutSkills from '@/components/Cards/AboutSkills'
import Divider from '@/components/Divider'

import { SkillsEnum } from '@/components/Cards/AboutSkills/skills.enum'

export default function About() {
  const { locale, translate } = useTranslator()
  const TEXTS = translate[locale]

  return (
    <Suspense
      fallback={
        <Loading title={TEXTS.LOADING.TITLE} message={TEXTS.LOADING.MESSAGE} />
      }
    >
      <section className="flex h-full w-full flex-col md:mt-[calc(78vw-56%)] md:h-screen md:w-screen md:pt-14">
        <section className="flex flex-col items-center justify-center px-0 md:flex-row">
          <AboutPhoto />
          <AboutHero />
        </section>
        <div className="flex items-center justify-center py-14">
          <Divider />
        </div>
        <section className="min-h-3/4 flex w-full items-center pb-20 md:px-[6%]">
          <div className="ml-3 flex flex-1 flex-col items-center justify-between lg:flex-row lg:items-start">
            <AboutSkills type={SkillsEnum.FRONT} />
            <AboutSkills type={SkillsEnum.BACK} />
            <AboutSkills type={SkillsEnum.OTHERS} />
          </div>
        </section>
      </section>
    </Suspense>
  )
}
