'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { VscGlobe } from 'react-icons/vsc'
import Tooltiper from '../Tooltip'

export const TranslatorSwitcher = () => {
  const { locale, setLocale, translate } = useTranslator()
  const TOOLTIP = translate[locale].TOOLTIP

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Tooltiper content={TOOLTIP.TRANSLATE}>
        <button
          type="button"
          className="relative rounded-full p-1 text-purple-700 hover:text-purple-900 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-2 focus:ring-offset-purple-800 dark:text-purple-400 dark:hover:text-purple-50"
        >
          <VscGlobe
            onClick={() => setLocale(locale === 'en' ? 'ptBr' : 'en')}
            className="h-5 w-auto drop-shadow-home sm:h-6 md:h-8"
          />
        </button>
      </Tooltiper>
    </div>
  )
}
