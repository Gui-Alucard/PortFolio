'use client'

import logo from '@/assets/logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ILink } from './navbar.interface'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { useTranslator } from '@/global/translate/Translator.context'
import { TranslatorSwitcher } from '../TranslatorSwitcher'

function renderLinks(
  links: ILink[],
  textSize: string,
  pathname: string,
  toggleMenu: () => void,
) {
  return links.map((link: ILink) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={toggleMenu}
        className={clsx(
          `block rounded-md px-3 py-2 text-purple-logo hover:text-purple-900 dark:text-purple-50 dark:hover:text-purple-logo md:${textSize} font-alt font-medium transition duration-300`,
          {
            'text-purple-900 dark:text-purple-logo': pathname === link.href,
          },
        )}
      >
        <p className="block">{link.name}</p>
      </Link>
    )
  })
}

export default function NavBar() {
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
        <div className="mx-auto max-w-1920 px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-1 text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800 dark:text-purple-400 dark:hover:text-purple-50"
              >
                {!isOpen ? (
                  <FaBars
                    onClick={toggleMenu}
                    className="block h-6 w-auto drop-shadow-home sm:h-8 md:h-10"
                  />
                ) : (
                  <FaXmark
                    onClick={toggleMenu}
                    className="block h-6 w-auto drop-shadow-home sm:h-8 md:h-10"
                  />
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link key="home" href="/">
                <Image
                  src={logo}
                  alt="logo"
                  className="mt-2 h-5 w-auto min-w-20 drop-shadow-home sm:h-6 md:h-8"
                />
              </Link>
              <div className="hidden sm:ml-8 sm:block md:ml-10">
                <div className="flex space-x-4">
                  {renderLinks(links, 'text-3xl', pathname, toggleMenu)}
                </div>
              </div>
            </div>

            <div className="flex flex-row md:mt-16 md:flex-col md:space-y-4">
              {/* <!-- DARK MODE ---> */}
              <ThemeSwitcher />
              {/* <!-- TRANSLATOR ---> */}
              <TranslatorSwitcher />
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          {isOpen && (
            <div className="space-y-1 bg-purple-50 px-2 pb-4 pt-4 dark:bg-gray-600">
              {renderLinks(links, 'text-xl', pathname, toggleMenu)}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
