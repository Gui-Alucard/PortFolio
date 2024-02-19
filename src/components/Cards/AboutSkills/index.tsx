import Link from 'next/link'
import { ISkills } from '@/interfaces/skills.interface'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { SkillsEnum } from './skills.enum'
import { useTranslator } from '@/global/translate/Translator.context'
import { frontSkills, backSkills, othersSkills } from './skills.constants'
import { motion } from 'framer-motion'

function renderSkills(skills: ISkills[]) {
  return skills.map((skill: ISkills) => {
    return (
      <Link
        key={skill.id}
        href={skill.href}
        target="_blank"
        className="mb-3 flex items-center justify-center text-sm text-purple-900 transition duration-300 hover:text-purple-logo focus:outline-none sm:text-base lg:text-lg dark:text-purple-50"
      >
        {skill.name} <FaExternalLinkAlt className="ml-1 text-sm" />
      </Link>
    )
  })
}

export default function AboutSkills({ type }: { type: SkillsEnum }) {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale]

  const item = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div
      key={type}
      variants={item}
      className="mb-8 w-2/3 rounded-lg border-b-2 border-r-2 border-purple-logo/60 bg-purple-100/30 px-10 pb-10 pt-4 font-alt text-purple-900 backdrop-blur-sm sm:w-1/2 lg:w-[30%] dark:bg-purple-900/20 dark:text-purple-100"
    >
      <h4 className="pb-4 text-xl font-bold text-purple-900 dark:text-purple-50">
        {type === SkillsEnum.FRONT
          ? TRANSLATE.SKILLS.FRONT_TITLE
          : type === SkillsEnum.BACK
            ? TRANSLATE.SKILLS.BACK_TITLE
            : TRANSLATE.SKILLS.OTHERS_TITLE}
      </h4>
      <div className="h-fit overflow-y-scroll overscroll-y-none rounded-lg bg-purple-100/30 px-2 py-1 backdrop-blur-sm scrollbar scrollbar-thumb-purple-900 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1.5 lg:h-72 dark:bg-purple-900/30 dark:scrollbar-thumb-purple-logo">
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
    </motion.div>
  )
}
