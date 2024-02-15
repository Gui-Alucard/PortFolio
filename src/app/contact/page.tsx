'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'

import Forms from '@/components/Forms'
import DownloadCV from '@/components/Common/DownloadCV'
import SocialMedia from '@/components/Common/SocialMedia'
import { SocialMediaEnum } from '@/components/Common/SocialMedia/socialmedia.enum'

export default function Contact() {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale].CONTACT_PAGE

  return (
    <section className="absolute left-0 top-0 w-full px-6 pb-36 about:mt-10 md:mt-28 md:flex md:items-center md:justify-center md:pb-0">
      <div>
        <AnimatePresence mode="sync">
          <motion.h3
            variants={fadeIn(VariantsEnum.DOWN, 0.5)}
            initial="hidden"
            animate="show"
            className="py-4 pl-2 font-alt text-2xl font-bold tracking-tight text-purple-logo md:text-4xl"
          >
            {TRANSLATE.TITLE}
          </motion.h3>
          <motion.section
            variants={fadeIn(VariantsEnum.LEFT, 0.5)}
            initial="hidden"
            animate="show"
          >
            <Forms />
          </motion.section>
          <motion.section
            variants={fadeIn(VariantsEnum.RIGHT, 0.5)}
            initial="hidden"
            animate="show"
            className="ml-2 mt-4 flex w-1/2 flex-1 flex-row items-start space-x-6 sm:w-1/3 md:mt-6 md:w-1/4"
          >
            <SocialMedia name={SocialMediaEnum.LINKEDIN} />
            <SocialMedia name={SocialMediaEnum.GITHUB} />
            <DownloadCV />
          </motion.section>
        </AnimatePresence>
      </div>
    </section>
  )
}
