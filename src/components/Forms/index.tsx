'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslator } from '@/global/translate/Translator.context'

import Input from './Input'
import toast from 'react-hot-toast'
import { SubmitButton } from './SubmitButton'
import { FormState, submitFormActionSendEmail } from './Action'

const initialFormState: FormState = {
  response: '',
  errors: undefined,
  fieldValues: {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  },
}

export default function Forms() {
  const { locale, translate } = useTranslator()
  const TRANSLATE = translate[locale].CONTACT_PAGE
  const [formState, setFormState] = useState<FormState>(initialFormState)

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formState.response === 'success') {
      formRef.current?.reset()
    }
  }, [formState])

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const data = await submitFormActionSendEmail(formData)
        setFormState(data)

        if (data.response === 'error') {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } pointer-events-auto flex w-full max-w-md rounded-lg bg-purple-50 shadow-lg ring-1 ring-purple-900 ring-opacity-5`}
            >
              <div className="w-0 flex-1 p-4">
                <div className="flex items-start">
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-purple-900">
                      {TRANSLATE.ERRORS.TOAST_MESSAGE}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-purple-300">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-semibold text-purple-500 hover:text-purple-logo focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {TRANSLATE.ERRORS.CLOSE}
                </button>
              </div>
            </div>
          ))
          return
        }

        toast.success(TRANSLATE.SEND_RESPONSE)
      }}
      className="ml-1 w-full max-w-3xl rounded-lg border-b-2 border-r-2 border-purple-logo/60 bg-purple-100/30 px-10 py-10 font-alt text-purple-900 backdrop-blur-sm dark:bg-purple-900/20 dark:text-purple-100"
    >
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
          <Input
            id="grid-first-name"
            name="firstName"
            htmlFor="grid-first-name"
            inputType="text"
            label={TRANSLATE.LABELS.FIRST_NAME}
            placeholder={TRANSLATE.PLACEHOLDERS.FIRST_NAME}
            defaultValue={formState.fieldValues.firstName}
          />
          {formState.errors?.firstName && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.FIRST_NAME}
            </span>
          )}
        </div>
        <div className="w-full px-3 md:w-1/2">
          <Input
            id="grid-last-name"
            name="lastName"
            htmlFor="grid-last-name"
            inputType="text"
            label={TRANSLATE.LABELS.LAST_NAME}
            placeholder={TRANSLATE.PLACEHOLDERS.LAST_NAME}
            defaultValue={formState.fieldValues.lastName}
          />
          {formState.errors?.lastName && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.LAST_NAME}
            </span>
          )}
        </div>
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="mb-4 w-full px-3 md:mb-0 md:w-1/2">
          <Input
            id="grid-phone"
            name="phone"
            htmlFor="grid-phone"
            inputType="tel"
            label={TRANSLATE.LABELS.PHONE}
            placeholder={TRANSLATE.PLACEHOLDERS.PHONE}
            defaultValue={formState.fieldValues.phone as string}
          />
          {formState.errors?.phone && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.PHONE}
            </span>
          )}
        </div>
        <div className="w-full px-3 md:w-1/2">
          <Input
            id="grid-email"
            name="email"
            htmlFor="grid-email"
            inputType="email"
            label={TRANSLATE.LABELS.EMAIL}
            placeholder={TRANSLATE.PLACEHOLDERS.EMAIL}
            defaultValue={formState.fieldValues.email}
          />
          {formState.errors?.email && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.EMAIL}
            </span>
          )}
        </div>
      </div>

      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="mb-4 w-full px-3 md:mb-0">
          <Input
            id="grid-subject"
            name="subject"
            htmlFor="grid-subject"
            inputType="text"
            label={TRANSLATE.LABELS.SUBJECT}
            placeholder={TRANSLATE.PLACEHOLDERS.SUBJECT}
            defaultValue={formState.fieldValues.subject}
          />
          {formState.errors?.subject && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.SUBJECT}
            </span>
          )}
        </div>
      </div>

      <div className="-mx-3 mb-2 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block font-orbitron text-xs font-semibold uppercase tracking-wide"
            htmlFor="grid-message"
          >
            {TRANSLATE.LABELS.MESSAGE}
          </label>
          <textarea
            className="form-input mb-1 block min-h-24 w-full appearance-none rounded border-b-2 border-r-2 border-purple-logo/60 bg-purple-100/20 px-4 py-3 leading-tight text-purple-900 placeholder-purple-900/50 focus:border-purple-logo focus:bg-purple-50/20 focus:outline-none focus:ring-0 dark:text-purple-50 dark:placeholder-purple-100/50"
            id="grid-message"
            name="message"
            placeholder={TRANSLATE.PLACEHOLDERS.MESSAGE}
            defaultValue={formState.fieldValues.message}
          />
          {formState.errors?.message && (
            <span className="text-left text-sm text-red-400">
              {TRANSLATE.ERRORS.MESSAGE}
            </span>
          )}
        </div>
      </div>
      <SubmitButton />
    </form>
  )
}
