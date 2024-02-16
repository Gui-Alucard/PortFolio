import Link from 'next/link'
import { motion } from 'framer-motion'

export default function DownloadCV() {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        backgroundColor: '#8246ff',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="flex h-fit w-fit items-center justify-start rounded-[0.250rem] border border-purple-logo p-2 text-purple-700 hover:border-none hover:text-purple-50 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50"
    >
      <Link
        target="_blank"
        download="GUILHERME_ENGLISH"
        href="/cv/GUILHERME_ENGLISH.pdf"
        rel="noopener noreferrer"
        className="flex h-5 w-40 items-center justify-center font-orbitron font-bold uppercase md:h-7"
      >
        Download CV
      </Link>
    </motion.div>
  )
}
