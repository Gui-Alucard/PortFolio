import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/themes/variants'
import { VariantsEnum } from '@/themes/variants.enum'

import youngMe from '@/assets/about.png'

export default function AboutPhoto() {
  return (
    <motion.div
      className="absolute left-0 top-0 max-w-[75%] overflow-hidden rounded-ee-[12rem] border-b-2 border-r-2 border-purple-logo duration-500 md:relative md:m-0 md:flex md:h-fit md:max-w-[50%] md:items-center xl:max-w-[640px]"
      variants={fadeIn(VariantsEnum.DOWN, 0.3)}
      initial="hidden"
      animate="show"
    >
      <Image
        src={youngMe}
        alt="picture of me"
        style={{
          width: '100%',
          height: 'auto',
        }}
        priority={false}
        placeholder="blur"
        className="w-fit duration-500 hover:filter-none about:min-w-64 about:max-w-[640px] md:grayscale"
      />
    </motion.div>
  )
}
