'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { VscGlobe } from 'react-icons/vsc'
import Tooltiper from '../Tooltip'

export const TranslatorSwitcher = () => {
  const { locale, setLocale, translate } = useTranslator()
  const TOOLTIP = translate[locale].TOOLTIP

  return (
    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:right-0">
      <Tooltiper content={TOOLTIP.TRANSLATE}>
        <button
          type="button"
          className="relative items-center justify-center rounded-full p-2 text-purple-700 hover:text-purple-900 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50 md:transition-colors md:delay-200"
        >
          <VscGlobe
            onClick={() => setLocale(locale === 'en' ? 'ptBr' : 'en')}
            className="h-8 w-auto drop-shadow-home"
          />
        </button>
      </Tooltiper>
    </div>
  )
}
