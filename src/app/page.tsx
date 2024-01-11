export default function Home() {
  // const url = require('@/assets/intro.mp4')

  return (
    <div className="flex h-screen max-w-1920 flex-col-reverse items-center justify-center md:flex-row">
      {/* Left - Top */}
      <div className="mt-8 flex w-[360px] flex-col flex-wrap sm:w-[480px] md:w-[768px] md:px-14">
        <h1 className="flex animate-h1_blurAnimation items-center justify-start py-2 font-alt text-3xl font-bold md:text-3xl xl:text-7xl">
          Guilherme Oliveira
        </h1>
        <span className="-z-0 flex animate-h3_blurAnimation items-center justify-start py-2 text-2xl font-bold md:text-2xl xl:text-5xl">
          <span className="animate-pulse font-orbitron text-purple-600">
            Full-Stack Developer
          </span>
        </span>
        <p className="animate-text_blurAnimation py-2 text-left text-lg leading-relaxed text-gray-50 md:text-justify">
          Hi. I{"'"}m a brazilian developer who really look forward to making a
          solid contribution. Hope to make you enjoy my portfolio.
        </p>
      </div>

      {/* Right - Bottom */}
      <div className="flex h-[360px] w-[360px] flex-col items-center justify-center sm:mt-4 sm:h-[420px] sm:w-[460px] md:w-[768px]">
        <div className="flex h-screen items-center justify-center">
          <div className="h-[280px] w-[280px] animate-mainPhoto border border-purple-logo bg-[url(../assets/main-photo.png)] bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out sm:h-[360px] sm:w-[360px] xl:h-[480px] xl:w-[480px]" />
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
    </div>
  )
}
