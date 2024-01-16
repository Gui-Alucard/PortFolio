export default function AnimatedPhoto() {
  return (
    <div className="flex h-[360px] w-[360px] flex-col items-center justify-center sm:mt-4 sm:h-[420px] sm:w-[460px] md:w-[768px]">
      <div className="flex h-screen items-center justify-center">
        <div className="h-[280px] w-[280px] animate-mainPhoto border border-purple-logo bg-[url(../assets/main-picture.jpg)] bg-cover bg-center drop-shadow-main-photo transition-all delay-150 ease-in-out sm:h-[360px] sm:w-[360px] xl:h-[480px] xl:w-[480px]" />
      </div>
    </div>
  )
}
