'use client'

import React, { useState } from 'react'
import { useTranslator } from '@/global/translate/Translator.context'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Divider from '@/components/Divider'
import { IProjectCard } from '@/interfaces/project-card.interface'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard(details: IProjectCard) {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale]

  return (
    <div
      className="flex h-4/5 w-screen items-center justify-center px-8 md:mt-28 md:w-2/3 md:px-0"
      key={details.id}
    >
      <div className="flex flex-col gap-8">
        <h3 className="p-3 font-alt text-3xl font-bold tracking-tight text-purple-900 sm:whitespace-nowrap sm:text-4xl lg:text-6xl xl:text-7xl dark:text-purple-logo">
          {details.title}
        </h3>
        <div className="relative">
          <Image
            src={details.image}
            loading="lazy"
            alt="picture of me"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority={false}
            placeholder="blur"
            className="w-fit md:min-w-64 md:max-w-[640px]"
          />
        </div>
        <motion.div className="mb-5 text-wrap rounded-xl bg-purple-100/20 p-3.5 text-left text-sm leading-8 text-purple-900 backdrop-blur-sm sm:text-base md:mb-0 md:mt-10 md:text-justify lg:text-lg dark:bg-purple-900/20 dark:text-purple-50">
          <p className="mb-5">{details.description.P1}</p>
          <p className="mb-5">{details.description.P2}</p>
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
            <p className="mb-5">{details.description.P3}</p>
            <p className="mb-5">{details.description.P4}</p>
          </motion.div>
          <div className="flex items-center justify-between">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onClick={() => setOpen(!isOpen)}
              className="my-3 h-auto w-fit cursor-pointer rounded-[0.250rem] bg-purple-logo px-4 py-1 text-sm font-bold text-purple-50"
            >
              {!isOpen
                ? TRANSLATE.PROJECTS_PAGE.READ_MORE
                : TRANSLATE.PROJECTS_PAGE.READ_LESS}
            </motion.button>
            <Link target="_blank" href={details.link}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="mx-1 my-3 inline-flex h-auto w-fit cursor-pointer items-center justify-between rounded-[0.250rem] bg-purple-logo px-4 py-1 text-sm font-bold text-purple-50"
              >
                {TRANSLATE.PROJECTS_PAGE.BUTTON}
                <FaExternalLinkAlt className="mx-1" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
