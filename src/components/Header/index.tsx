'use client'

import { useState } from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ILink } from '../../interfaces/navbar.interface'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useTranslator } from '@/global/translate/Translator.context'
import { TranslatorSwitcher } from '../TranslatorSwitcher'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'
import clsx from 'clsx'

function renderLinks(links: ILink[], pathname: string, toggleMenu: () => void) {
  return links.map((link: ILink) => {
    return (
      <div
        key={link.name}
        className="block rounded-md p-2 transition duration-300 hover:bg-purple-400/20 focus:outline-none md:hover:bg-transparent"
      >
        <Link
          href={link.href}
          onClick={toggleMenu}
          className={clsx(
            'font-alt font-medium text-purple-logo transition duration-300 hover:text-purple-900 focus:outline-none dark:text-purple-50 dark:hover:text-purple-logo',
            {
              'text-purple-900 dark:text-purple-logo': pathname === link.href,
            },
          )}
        >
          <p className="block text-lg md:text-3xl">{link.name}</p>
        </Link>
      </div>
    )
  })
}

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const { locale, translate } = useTranslator()
  const NAVBAR = translate[locale].NAVBAR

  const toggleMenu = () => setIsOpen(!isOpen)

  const links: ILink[] = [
    { name: NAVBAR.HOME, href: '/', current: true },
    { name: NAVBAR.ABOUT, href: '/about', current: false },
    { name: NAVBAR.PROJECTS, href: '/projects', current: false },
    { name: NAVBAR.CONTACT, href: '/contact', current: false },
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        variants={fadeIn(VariantsEnum.UP, 0.2)}
        initial="hidden"
        animate="show"
        id="menu-container"
        className="fixed bottom-2 z-10 h-fit w-screen overflow-hidden md:bottom-0 md:left-0 md:top-4"
      >
        {/* <!-- Mobile menu, show/hide based on menu state --> */}
        <div
          className="flex items-center justify-center md:hidden"
          id="menu-mobile"
        >
          {isOpen && (
            <div className="max-w-96 flex-grow space-y-2 rounded-lg bg-purple-100/20 p-2 backdrop-blur-2xl dark:bg-purple-900/20">
              {renderLinks(links, pathname, toggleMenu)}
            </div>
          )}
        </div>
        <div id="menu-inner" className="mx-auto max-w-96 p-4 pt-2">
          <div className="flex h-16 w-full flex-row items-center justify-between rounded-full bg-purple-100/20 px-6 backdrop-blur-2xl dark:bg-purple-900/20 sm:p-6 md:rounded-none md:bg-transparent md:px-8 md:backdrop-blur-none dark:md:bg-transparent">
            <div className="md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="flex items-center justify-center text-purple-700 hover:text-purple-900 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50"
              >
                {!isOpen ? (
                  <FaBars
                    onClick={toggleMenu}
                    className="h-8 w-auto drop-shadow-home"
                  />
                ) : (
                  <FaXmark
                    onClick={toggleMenu}
                    className="h-8 w-auto drop-shadow-home"
                  />
                )}
              </button>
            </div>
            <div className="hidden md:absolute md:left-4 md:flex md:flex-1 md:items-stretch md:justify-start md:focus:outline-none">
              <Link key="home" href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-9 w-auto min-w-20 drop-shadow-home focus:outline-none md:h-12"
                />
              </Link>
              <div className="hidden md:ml-8 md:block">
                <div className="flex space-x-4">
                  {renderLinks(links, pathname, toggleMenu)}
                </div>
              </div>
            </div>

            {/* <!-- DARK MODE ---> */}
            <ThemeSwitcher />
            {/* <!-- TRANSLATOR ---> */}
            <TranslatorSwitcher />
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  )
}
