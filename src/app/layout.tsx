// import { cookies } from 'next/headers'
import { ReactNode } from 'react'

import NavBar from '@/components/Header/NavBar'
import ParticlesComponent from '@/components/Particles/Particles'
import { ThemeProvider } from './theme-provider'

import {
  Bai_Jamjuree as BaiJamjuree,
  Orbitron,
  Roboto_Flex as Roboto,
} from 'next/font/google'

import './globals.css'
import { TranslatorProvider } from '@/global/translate/Translator.context'

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
  // const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} bg-purple-50 font-sans text-purple-900 duration-500 dark:bg-gray-600 dark:text-purple-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ParticlesComponent>
            <TranslatorProvider>
              <header className="fixed left-0 top-0 z-10 w-screen">
                <NavBar />
              </header>
              <main className="z-1 relative">{children}</main>
            </TranslatorProvider>
          </ParticlesComponent>
        </ThemeProvider>
      </body>
    </html>
  )
}
