import SocialMedia from './SocialMedia'
import { SocialMediaEnum } from './socialmedia.enum'

export default function Summary({
  title,
  summary,
}: {
  title: string
  summary: string
}) {
  return (
    <>
      <h1 className="flex flex-1 whitespace-nowrap font-alt text-3xl font-bold sm:text-4xl lg:text-6xl xl:text-7xl">
        Guilherme Oliveira
      </h1>
      <span className="mt-4 flex flex-1 text-2xl font-bold md:mt-6 lg:text-4xl xl:text-5xl">
        <span className="animate-pulse font-orbitron text-purple-600">
          {title}
        </span>
      </span>
      <p className="mt-6 text-left text-base leading-relaxed text-purple-900 dark:text-gray-50 md:mt-10 md:text-justify lg:text-lg">
        {summary}
      </p>
      <section className="mt-6 flex w-1/2 flex-1 flex-row items-start space-x-6 sm:w-1/3 md:mt-10 md:w-1/4">
        <SocialMedia name={SocialMediaEnum.LINKEDIN} />
        <SocialMedia name={SocialMediaEnum.GITHUB} />
      </section>
    </>
  )
}
