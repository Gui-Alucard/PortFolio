'use client'

import logo from '@/assets/logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { VscColorMode } from 'react-icons/vsc'
import { ILink } from './navbar.interface'

const links: ILink[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function renderLinks(
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
          `block rounded-md px-3 py-2 text-purple-50 hover:text-purple-logo md:${textSize} font-alt font-medium transition duration-300`,
          {
            'text-purple-logo': pathname === link.href,
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <>
      <nav>
        <div className="mx-auto max-w-1920 px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-1 text-purple-400 hover:text-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800"
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
                  className="mr-1 h-8 w-auto drop-shadow-home sm:h-10 md:h-12"
                />
              </Link>
              <div className="hidden sm:ml-8 sm:block md:ml-12">
                <div className="flex space-x-4">
                  {renderLinks('text-3xl', pathname, toggleMenu)}
                </div>
              </div>
            </div>

            {/* <!-- DARK MODE ---> */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full p-1 text-purple-400 hover:text-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800"
              >
                <VscColorMode
                  onClick={toggleDarkMode}
                  className={`${
                    isDarkMode ? 'rotate-180' : 'rotate-0'
                  } h-5 w-auto drop-shadow-home sm:h-6`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          {isOpen && (
            <div className="space-y-1 bg-gray-600 px-2 pb-4 pt-4">
              {renderLinks('text-xl', pathname, toggleMenu)}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
