import {
  EnumLanguages,
  Languages,
  translate,
} from '@/global/translate/Translator.context'
import TypeAnimator from '../TypeAnimator'
import SocialMedia from './SocialMedia'
import { SocialMediaEnum } from './socialmedia.enum'

interface ISummary {
  translate: typeof translate
  locale: Languages
}

export default function Summary({ translate, locale }: ISummary) {
  const TEXT = translate[locale].HOME_PAGE
  return (
    <>
      <h1 className="flex flex-1 font-alt text-3xl font-bold sm:whitespace-nowrap sm:text-4xl lg:text-6xl xl:text-7xl">
        Guilherme Oliveira
      </h1>
      <span
        className={`${locale === EnumLanguages.en ? 'flex-col-reverse' : 'flex-col md:flex-col'} mt-6 flex font-orbitron text-xl font-bold text-purple-600 sm:text-2xl md:mt-6 lg:text-4xl xl:text-5xl`}
      >
        {TEXT.TITLE}&nbsp;
        <TypeAnimator stackOne={TEXT.STACK_ONE} stackTwo={TEXT.STACK_TWO} />
      </span>
      <p className="mt-6 text-left text-sm leading-relaxed text-purple-900 dark:text-gray-50 sm:text-base md:mt-10 md:text-justify lg:text-lg">
        {TEXT.SUMMARY}
      </p>
      <section className="mt-6 flex w-1/2 flex-1 flex-row items-start space-x-6 sm:w-1/3 md:mt-10 md:w-1/4">
        <SocialMedia name={SocialMediaEnum.LINKEDIN} />
        <SocialMedia name={SocialMediaEnum.GITHUB} />
      </section>
    </>
  )
}
