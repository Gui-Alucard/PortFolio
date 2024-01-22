'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { VscGlobe } from 'react-icons/vsc'
import Tooltiper from '../Tooltip'

export const TranslatorSwitcher = () => {
  const { locale, setLocale, translate } = useTranslator()
  const TOOLTIP = translate[locale].TOOLTIP

  return (
    <div className="md:absolute md:inset-y-0 md:right-0 md:m-4 md:h-fit">
      <Tooltiper content={TOOLTIP.TRANSLATE}>
        <button
          type="button"
          className="flex items-center justify-center text-purple-700 hover:text-purple-950 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50 md:transition-colors md:delay-200"
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
