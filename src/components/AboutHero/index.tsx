import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { useTranslator } from '@/global/translate/Translator.context'

import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'

import TextLink from './TextLink'

import family from '@/assets/family.jpg'
import Divider from '../Divider'

export default function AboutHero() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale]

  return (
    <motion.aside
      className="flex h-fit w-4/5 flex-col items-start justify-start duration-500 md:ml-14 md:h-[28rem] md:w-1/2 lg:max-w-[768px]"
      variants={fadeIn(VariantsEnum.LEFT, 0.2)}
      initial="hidden"
      animate="show"
    >
      <h3 className="p-3 font-alt text-3xl font-bold tracking-tight text-purple-logo sm:whitespace-nowrap sm:text-4xl lg:text-6xl xl:text-7xl">
        {TRANSLATE.ABOUT_PAGE.TITLE}
      </h3>
      <motion.div className="mb-5 overflow-y-scroll overscroll-none scroll-smooth text-wrap rounded-xl bg-purple-100/20 px-3.5 text-left text-sm leading-8 text-purple-900 backdrop-blur-sm sm:text-base md:mb-0 md:mt-10 md:text-justify md:scrollbar md:scrollbar-track-purple-900 md:scrollbar-thumb-purple-logo md:scrollbar-track-rounded-full md:scrollbar-thumb-rounded-full md:scrollbar-w-3 lg:text-lg dark:bg-purple-900/20 dark:text-purple-50">
        <p className="mb-5">{TRANSLATE.ABOUT_PAGE.FIRST_PREVIEW}</p>
        <p className="mb-5">
          {TRANSLATE.ABOUT_PAGE.SECOND_PREVIEW}
          <TextLink textKey="Trybe" url="https://www.betrybe.com" />
          {TRANSLATE.ABOUT_PAGE.THIRD_PREVIEW}
          <TextLink textKey="Accenture" url="https://www.accenture.com/br-pt" />
          .
        </p>
        <motion.div
          layout
          className={
            !isOpen
              ? 'my-0 h-0 overflow-hidden duration-500'
              : 'my-5 duration-500'
          }
        >
          <div className="flex items-center justify-center pb-2">
            <Divider />
          </div>
          <p className="mb-5">{TRANSLATE.ABOUT_PAGE.FULL_TEXT_ONE}</p>
          <p className="mb-5">{TRANSLATE.ABOUT_PAGE.FULL_TEXT_TWO}</p>
          <p className="mb-5">{TRANSLATE.ABOUT_PAGE.FULL_TEXT_THIRD}</p>
          <p className="mb-5">
            {TRANSLATE.ABOUT_PAGE.FULL_TEXT_FOURTH}{' '}
            <TextLink textKey="Trybe." url="https://www.betrybe.com" />
          </p>
          <p className="mb-5">
            {TRANSLATE.ABOUT_PAGE.FULL_TEXT_END}
            <Image
              src={family}
              loading="lazy"
              alt="picture of me"
              style={{
                width: '80%',
                height: 'auto',
              }}
              priority={false}
              placeholder="blur"
              className="mt-3 w-fit rounded-xl md:min-w-40 md:max-w-56"
            />
          </p>
        </motion.div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          onClick={() => setOpen(!isOpen)}
          className="my-3 h-auto w-fit cursor-pointer rounded-[0.250rem] bg-purple-logo px-4 py-1 font-bold text-purple-50"
        >
          {!isOpen ? TRANSLATE.BUTTON.READ_MORE : TRANSLATE.BUTTON.READ_LESS}
        </motion.button>
      </motion.div>
    </motion.aside>
  )
}
