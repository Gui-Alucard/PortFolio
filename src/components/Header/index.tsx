'use client'

import { useState } from 'react'
import logo from '@/assets/logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ILink } from '../../interfaces/navbar.interface'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useTranslator } from '@/global/translate/Translator.context'
import { TranslatorSwitcher } from '../TranslatorSwitcher'

function renderLinks(links: ILink[], pathname: string, toggleMenu: () => void) {
  return links.map((link: ILink) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={toggleMenu}
        className={clsx(
          'block rounded-md p-3 font-alt font-medium text-purple-logo transition duration-300 hover:text-purple-900 dark:text-purple-50 dark:hover:text-purple-logo',
          {
            'text-purple-900 dark:text-purple-logo': pathname === link.href,
          },
        )}
      >
        <p className="block text-lg md:text-2xl lg:text-3xl">{link.name}</p>
      </Link>
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
    <>
      <nav>
        <div className="mx-auto max-w-[120rem] p-4 sm:p-6 lg:p-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative z-10 inline-flex items-center justify-center rounded-md p-2 text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800 dark:text-purple-400 dark:hover:text-purple-50"
              >
                {!isOpen ? (
                  <FaBars
                    onClick={toggleMenu}
                    className="block h-10 w-auto drop-shadow-home"
                  />
                ) : (
                  <FaXmark
                    onClick={toggleMenu}
                    className="block h-10 w-auto drop-shadow-home"
                  />
                )}
              </button>
            </div>
            <div className="absolute inset-y-0 left-0 right-0 flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link key="home" href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="h-11 w-auto min-w-20 drop-shadow-home md:h-12"
                />
              </Link>
              <div className="hidden md:ml-8 md:block">
                <div className="flex space-x-4">
                  {renderLinks(links, pathname, toggleMenu)}
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex flex-row sm:mt-2 md:flex-col md:space-y-4">
              {/* <!-- DARK MODE ---> */}
              <ThemeSwitcher />
              {/* <!-- TRANSLATOR ---> */}
              <TranslatorSwitcher />
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="md:hidden" id="mobile-menu">
          {isOpen && (
            <div className="space-y-2 bg-purple-50 px-2 py-4 dark:bg-gray-600">
              {renderLinks(links, pathname, toggleMenu)}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
