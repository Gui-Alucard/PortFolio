'use client'

import React from 'react'
import Header from '../Header'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTranslator } from '@/global/translate/Translator.context'
import { PathnameEnum } from '@/Enums/pathname.enum'

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { locale, translate } = useTranslator()
  const NAVBAR: { [key: string]: string } = translate[locale].NAVBAR

  const handlePathname = (path: PathnameEnum): string => {
    if (Object.values(PathnameEnum).includes(path)) {
      if (path === '') return NAVBAR.HOME
      return NAVBAR[path.toUpperCase()]
    } else {
      return path
    }
  }

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          className="fixed z-40 h-screen w-screen rounded-b-[4rem] bg-purple-100 dark:bg-gray-900"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        <motion.div
          className="fixed bottom-0 left-0 right-0 top-0 z-50 m-auto h-fit w-fit cursor-default font-orbitron text-3xl text-purple-900 md:text-8xl dark:text-purple-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {handlePathname(pathname.substring(1) as PathnameEnum)}
        </motion.div>
        <motion.div
          className="fixed bottom-0 z-30 h-screen w-screen rounded-t-[4rem] bg-purple-100 dark:bg-gray-900"
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.4 } }}
        />
        <header>
          <Header />
        </header>
        <main className="mb-6 flex h-screen w-screen items-center justify-center overflow-hidden py-20 duration-500">
          {children}
        </main>
      </div>
    </AnimatePresence>
  )
}
