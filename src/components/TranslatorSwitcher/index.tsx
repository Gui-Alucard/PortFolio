'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { VscGlobe } from 'react-icons/vsc'
import Tooltiper from '../Tooltip'

export const TranslatorSwitcher = () => {
  const { locale, setLocale, translate } = useTranslator()
  const TRANSLATE = translate[locale]

  return (
    <div className="md:absolute md:inset-y-0 md:right-4 md:m-4 md:h-fit lg:right-8">
      <Tooltiper content={TRANSLATE.TOOLTIP.TRANSLATE}>
        <button
          type="button"
          className="flex items-center justify-center text-purple-700 hover:text-purple-950 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50 md:transition-colors md:delay-200"
        >
          <VscGlobe
            onClick={() => setLocale(locale === 'en' ? 'ptBr' : 'en')}
            className="hidden md:mr-1 md:block md:h-8 md:w-auto md:drop-shadow-home"
          />
          <input
            value={TRANSLATE.BUTTON.TRANSLATE_SWITCH}
            type="button"
            className="cursor-pointer text-xl font-bold"
            onClick={() => setLocale(locale === 'en' ? 'ptBr' : 'en')}
          />
        </button>
      </Tooltiper>
    </div>
  )
}
