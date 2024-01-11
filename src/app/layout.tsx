import { cookies } from 'next/headers'
import { ReactNode } from 'react'

// import Copyright from '@/components/Copyright'
// import Hero from '@/components/Hero'
// import Profile from '@/components/Profile'
// import SignIn from '@/components/SignIn'

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
    'Portifólio de Guilherme Oliveira construído com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} ${orbitron.variable} bg-gray-600 font-sans text-purple-50`}
      >
        {/* 
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            Blur
            <div className="absolute right-0 top-1/2 z-10 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            Stripes
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {!isAuthenticated ? <SignIn /> : <Profile />}
            <Hero />
            <Copyright />
          </div>
          */}
        {/* <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover"> */}
        <ParticlesComponent className="max-h-screen overflow-y-scroll">
          <main className='z-1 relative'>
            {children}
          </main>
        </ParticlesComponent>
      </body>
    </html>
  )
}
