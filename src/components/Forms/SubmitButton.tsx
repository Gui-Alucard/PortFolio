import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'

import { useTranslator } from '@/global/translate/Translator.context'

import { BsSendFill } from 'react-icons/bs'

export function SubmitButton() {
  const { pending } = useFormStatus()
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale].CONTACT_PAGE

  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="mt-6 flex h-auto w-fit cursor-pointer items-center justify-center rounded-[0.250rem] bg-purple-logo px-4 py-1 font-bold text-purple-50"
    >
      {pending ? (
        TRANSLATE.SENDING_EMAIL
      ) : (
        <>
          {TRANSLATE.SEND_EMAIL}{' '}
          <BsSendFill className="ml-2 text-sm text-purple-50" />
        </>
      )}
    </motion.button>
  )
}
