import { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'

import Header from '@/components/Header'

import {
  Bai_Jamjuree as BaiJamjuree,
  Orbitron,
  Roboto_Flex as Roboto,
} from 'next/font/google'

import './globals.css'
import { TranslatorProvider } from '@/global/translate/Translator.context'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
})

export const metadata = {
  title: 'G.O DEV',
  description:
    "Guilherme Oliveira's Portfolio buitted with React, Next.js, TailwindCSS and TypeScript.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} overflow-y-hidden bg-gradient-to-t from-purple-100 via-purple-50 to-gray-50 bg-auto font-sans text-purple-900 duration-500 dark:from-gray-800 dark:via-purple-900 dark:to-gray-950 dark:text-purple-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-right" />
          <TranslatorProvider>
            <header>
              <Header />
            </header>
            <main className="mb-6 flex h-screen w-screen items-center justify-center py-20 duration-500">
              {children}
            </main>
          </TranslatorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
