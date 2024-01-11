import Image from "next/image"

import logo from '@/assets/logo.svg'

export default function Home() {
  // const url = require('@/assets/intro.mp4')

  return (
    <div className="flex flex-col-reverse items-center justify-center h-screen md:flex-row">
      {/* Header */}
      <a href="" className="absolute top-2 left-2 items-center gap-3">
        <div className="flex items-center justify-start ml-4 w-[230px] md:w-[420px] sm:w-[340px]">
          <Image src={logo} alt="logo" className="drop-shadow-home h-12 w-16 md:h-20 md:w-28 sm:h-14 sm:w-20" />
          <span className="w-fit ml-6 md:text-4xl sm:text-3xl text-xl drop-shadow-home font-bold text-purple-logo">
            &lt; <span className="font-orbitron md:text-3xl sm:text-2xl text-purple-50 font-bold">G.O DEV</span>/&gt;
          </span>
        </div>
      </a>

      {/* Left - Top */}
      <div className="flex flex-wrap flex-col w-[360px] mt-8 md:px-14 md:w-[768px] sm:w-[480px]">
        <h1 className="flex items-center justify-start py-2 font-bold text-3xl md:text-3xl xl:text-7xl animate-h1_blurAnimation font-alt">Guilherme Oliveira</h1>
        <span className="flex items-center justify-start py-2 font-bold text-2xl md:text-2xl xl:text-5xl animate-h3_blurAnimation -z-0">
          <span className="font-orbitron text-purple-600 animate-pulse">Full-Stack Developer</span>
        </span>
        <p className="text-left md:text-justify leading-relaxed py-2 animate-text_blurAnimation text-lg text-gray-50">
          Hi. I{"'"}m a brazilian developer who really look forward to making a solid contribution. Hope to make you enjoy my portfolio.
        </p>
      </div>

      {/* Right - Bottom */}
      <div className="flex flex-col w-[360px] h-[360px] items-center justify-center md:w-[768px] sm:w-[460px] sm:h-[420px] sm:mt-4">
        <div className="flex items-center justify-center h-screen">
          <div className="border-purple-logo border bg-[url(../assets/main-photo.png)] bg-cover bg-center drop-shadow-main-photo animate-mainPhoto transition-all ease-in-out delay-150 h-[280px] w-[280px] xl:h-[480px] xl:w-[480px] sm:h-[360px] sm:w-[360px]" />
        </div>
      </div>

      {/* <video
          autoPlay={true}
          controls={false}
          preload="preload"
          className="aspect-video w-full h-full rounded-lg object-contain"
        >
          <source type="video/mp4" src={url}/>
        </video> */}
    </div >
  )
}
