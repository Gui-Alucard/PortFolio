'use client'

import { createContext, useContext, useState, SetStateAction } from 'react'
import en from './languages/en.json'
import ptBr from './languages/ptBr.json'

export const translate = { en, ptBr }

export type Languages = 'en' | 'ptBr'
export enum EnumLanguages {
  en = 'en',
  ptBr = 'ptBr',
}

export interface TranslateState {
  locale: Languages
  setLocale: React.Dispatch<SetStateAction<Languages>>
  translate: typeof translate
}

const initialValue: TranslateState = {
  locale: 'ptBr',
  setLocale: () => EnumLanguages,
  translate,
}

export const TranslatorContext = createContext<TranslateState>(initialValue)

export function TranslatorProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [locale, setLocale] = useState<Languages>('en')
  // https://www.youtube.com/watch?v=ngOwT3BPIvU
  return (
    <TranslatorContext.Provider value={{ locale, setLocale, translate }}>
      {children}
    </TranslatorContext.Provider>
  )
}

export function useTranslator(): TranslateState {
  return useContext<TranslateState>(TranslatorContext)
}
