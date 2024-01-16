'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { VscColorMode } from 'react-icons/vsc'
import { useTranslator } from '@/global/translate/Translator.context'
import Tooltiper from '../Tooltip'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const { locale, translate } = useTranslator()
  const TOOLTIP = translate[locale].TOOLTIP

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-y-0 right-8 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Tooltiper content={TOOLTIP.COLOR_MODE} padding={72}>
        <button
          type="button"
          className="relative rounded-full p-1 text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800 dark:text-purple-400 dark:hover:text-purple-50"
        >
          <VscColorMode
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`${
              theme === 'light' ? 'rotate-180' : 'rotate-0'
            } h-5 w-auto drop-shadow-home sm:h-6 md:h-8`}
          />
        </button>
      </Tooltiper>
    </div>
  )
}
