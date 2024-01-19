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

  return (
    <>
      {mounted && (
        <div className="absolute inset-y-0 right-12 flex items-center sm:static sm:inset-auto sm:right-0 sm:mr-2">
          <Tooltiper content={TOOLTIP.COLOR_MODE} padding={78}>
            <button
              type="button"
              className="relative items-center justify-center rounded-full p-2 text-purple-700 hover:text-purple-900 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50 md:transition-colors md:delay-200"
            >
              <VscColorMode
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`${
                  theme === 'light' ? 'rotate-180' : 'rotate-0'
                } h-8 w-auto drop-shadow-home`}
              />
            </button>
          </Tooltiper>
        </div>
      )}
    </>
  )
}
