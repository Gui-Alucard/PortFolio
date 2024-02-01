import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider } from './theme-provider'

import Header from '@/components/Header'

import {
  Bai_Jamjuree as BaiJamjuree,
  Orbitron,
  Roboto_Flex as Roboto,
} from 'next/font/google'

import './globals.css'
import { TranslatorProvider } from '@/global/translate/Translator.context'

const ParticlesComponent = dynamic(() => import('@/components/Particles'), {
  loading: () => null,
})

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
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} bg-purple-50 font-sans text-purple-900 duration-500 dark:bg-gray-600 dark:text-purple-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesComponent>
            <TranslatorProvider>
              <header>
                <Header />
              </header>
              <main className="z-1 relative flex h-screen items-start justify-center py-14 duration-500 sm:items-center sm:pt-0">
                {children}
              </main>
            </TranslatorProvider>
          </ParticlesComponent>
        </ThemeProvider>
      </body>
    </html>
  )
}
