import Link from 'next/link'
import { ISkills } from '@/interfaces/skills.interface'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { SkillsEnum } from './skills.enum'
import { useTranslator } from '@/global/translate/Translator.context'
import { frontSkills, backSkills, othersSkills } from './skills.constants'

function renderSkills(skills: ISkills[]) {
  return skills.map((skill: ISkills) => {
    return (
      <Link
        key={skill.id}
        href={skill.href}
        target="_blank"
        className="mb-1 flex items-center justify-center text-sm text-purple-900 transition duration-300 hover:text-purple-logo focus:outline-none sm:text-base lg:text-lg"
      >
        {skill.name} <FaExternalLinkAlt className="ml-1 text-sm" />
      </Link>
    )
  })
}

export default function AboutSkills({ type }: { type: SkillsEnum }) {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale]

  return (
    <div className="mb-8 w-2/3 rounded-md bg-purple-900 drop-shadow-skills sm:w-1/2 lg:w-[30%]">
      <h4 className="p-3 text-xl font-bold text-purple-50">
        {type === SkillsEnum.FRONT
          ? TRANSLATE.SKILLS.FRONT_TITLE
          : type === SkillsEnum.BACK
            ? TRANSLATE.SKILLS.BACK_TITLE
            : TRANSLATE.SKILLS.OTHERS_TITLE}
      </h4>
      <div className="h-fit overflow-y-scroll overscroll-y-none rounded-b-md bg-purple-100 px-2 py-2 scrollbar scrollbar-track-purple-100 scrollbar-thumb-purple-900 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1.5 lg:h-72">
        <div className="flex flex-col items-center justify-center">
          {renderSkills(
            type === SkillsEnum.FRONT
              ? frontSkills
              : type === SkillsEnum.BACK
                ? backSkills
                : othersSkills,
          )}
        </div>
      </div>
    </div>
  )
}
