'use client'

import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import emailPrint from '@/assets/email-detail.png'
import { FaRegEye } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function ImagePopover({ text }: { text: string }) {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <motion.button
          type="button"
          whileHover={{ backgroundColor: '#8246ff' }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className="flex h-auto w-fit cursor-pointer items-center justify-center rounded-[0.250rem] border border-purple-logo px-4 py-1 font-bold text-purple-700 hover:text-purple-50 focus:outline-none dark:text-purple-400 dark:hover:text-purple-50"
        >
          {text} <FaRegEye className="ml-2" />
        </motion.button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="h-96 w-96 rounded p-5 backdrop-blur-sm will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideUpAndFade md:h-[30rem]"
          sideOffset={6}
        >
          <Image
            src={emailPrint}
            alt="picture of email"
            fill
            priority={true}
            placeholder="blur"
            className="object-contain"
          />
          <Popover.Arrow className="fill-purple-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
