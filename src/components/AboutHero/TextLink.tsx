import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface ITextLink {
  textKey: string
  url: string
}

export default function TextLink({ textKey, url }: ITextLink) {
  return (
    <Link key={textKey} target="_blank" href={url}>
      <motion.span
        whileTap={{ scale: 1.2 }}
        className="mx-1 inline-flex items-center justify-between text-sm text-indigo-500 dark:text-purple-400 sm:text-base lg:text-lg"
      >
        {textKey} <FaExternalLinkAlt className="mx-1" />
      </motion.span>
    </Link>
  )
}
