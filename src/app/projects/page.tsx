'use client'

import { useTranslator } from '@/global/translate/Translator.context'
import { motion } from 'framer-motion'

import ProjectCard from '@/components/Cards/ProjectCard'

import gerandoFalcoes from '@/assets/gerandoFalcoes.png'
import sbtVideos from '@/assets/sbtVideos.png'
import appArena from '@/assets/appArena.png'

export default function Projects() {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale].PROJECTS_PAGE

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="mt-0 h-full overflow-y-scroll md:mt-16"
    >
      <div className="flex flex-col p-12">
        <div className="flex h-[calc(100vh-20rem)] items-center justify-center text-center font-orbitron text-8xl text-purple-900 dark:text-purple-50">
          {TRANSLATE.MAIN_TITLE}
        </div>
        <div className="flex h-fit flex-col items-center gap-8">
          <ProjectCard
            id={TRANSLATE.FIRST_PROJECTS.ID}
            title={TRANSLATE.FIRST_PROJECTS.TITLE}
            image={gerandoFalcoes}
            link={TRANSLATE.FIRST_PROJECTS.LINK}
            description={{
              P1: TRANSLATE.FIRST_PROJECTS.DESCRIPTION.P1,
              P2: TRANSLATE.FIRST_PROJECTS.DESCRIPTION.P2,
              P3: TRANSLATE.FIRST_PROJECTS.DESCRIPTION.P3,
              P4: TRANSLATE.FIRST_PROJECTS.DESCRIPTION.P4,
            }}
          />
          <ProjectCard
            id={TRANSLATE.SECOND_PROJECTS.ID}
            title={TRANSLATE.SECOND_PROJECTS.TITLE}
            image={sbtVideos}
            link={TRANSLATE.SECOND_PROJECTS.LINK}
            description={{
              P1: TRANSLATE.SECOND_PROJECTS.DESCRIPTION.P1,
              P2: TRANSLATE.SECOND_PROJECTS.DESCRIPTION.P2,
              P3: TRANSLATE.SECOND_PROJECTS.DESCRIPTION.P3,
              P4: TRANSLATE.SECOND_PROJECTS.DESCRIPTION.P4,
            }}
          />
          <ProjectCard
            id={TRANSLATE.THIRD_PROJECTS.ID}
            title={TRANSLATE.THIRD_PROJECTS.TITLE}
            image={appArena}
            link={TRANSLATE.THIRD_PROJECTS.LINK}
            description={{
              P1: TRANSLATE.THIRD_PROJECTS.DESCRIPTION.P1,
              P2: TRANSLATE.THIRD_PROJECTS.DESCRIPTION.P2,
              P3: TRANSLATE.THIRD_PROJECTS.DESCRIPTION.P3,
              P4: TRANSLATE.THIRD_PROJECTS.DESCRIPTION.P4,
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
