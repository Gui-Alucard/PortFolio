// import { cookies } from 'next/headers'
import { ReactNode } from 'react'

import NavBar from '@/components/Header/NavBar'
import ParticlesComponent from '@/components/particles/Particles'

import {
  Bai_Jamjuree as BaiJamjuree,
  Orbitron,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import './globals.css'

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
    'Portfolio de Guilherme Oliveira construído com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} bg-gray-600 font-sans text-purple-50`}
      >
        <ParticlesComponent>
          <header className="fixed left-0 top-0 z-10 w-screen">
            <NavBar />
          </header>
          <main className="z-1 relative">{children}</main>
        </ParticlesComponent>
      </body>
    </html>
  )
}
