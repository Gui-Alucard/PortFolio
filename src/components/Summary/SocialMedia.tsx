import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { SocialMediaEnum } from './socialmedia.enum'

export default function SocialMedia({ name }: { name: SocialMediaEnum }) {
  return (
    <AnimatePresence>
      <motion.span
        whileHover={{
          scale: 1.1,
          backgroundColor: `${name === SocialMediaEnum.GITHUB ? '#181717' : '#2867B2'}`,
          border: `${name === SocialMediaEnum.GITHUB ? '1px solid #181717' : '1px solid #2867B2'}`,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="flex h-fit w-fit items-center justify-start rounded-full border border-purple-logo p-2 text-purple-700 transition-colors delay-100 hover:text-purple-900 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50"
      >
        <Link
          key={name}
          target="_blank"
          href={
            name === SocialMediaEnum.GITHUB
              ? 'https://github.com/Gui-Alucard'
              : 'https://www.linkedin.com/in/g-silva-oliveira/'
          }
        >
          {name === SocialMediaEnum.GITHUB ? (
            <FaGithub className="h-5 w-auto md:h-7" />
          ) : (
            <FaLinkedinIn className="h-5 w-auto md:h-7" />
          )}
        </Link>
      </motion.span>
    </AnimatePresence>
  )
}
