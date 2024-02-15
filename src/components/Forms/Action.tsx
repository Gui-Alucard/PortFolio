'use server'

import React from 'react'
import { Resend } from 'resend'
import { ZodError, z } from 'zod'

import Email from '@/components/Forms/Email'

const resend = new Resend(process.env.RESEND_API_KEY)

export type Fields = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  phone?: string
}

export type FormState = {
  response: string
  errors: Record<keyof Fields, string> | undefined
  fieldValues: Fields
}

export async function submitFormActionSendEmail(
  formData: FormData,
): Promise<FormState> {
  const name = `${formData.get('firstName')} ${formData.get('lastName')}`
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string
  const phone = formData.get('phone') as string

  const schema = z.object({
    firstName: z.string().min(3).max(16),
    lastName: z.string().min(3).max(16),
    email: z.string().email(),
    subject: z.string().min(3).max(48),
    message: z.string().min(5).max(650),
    phone: z.any(),
  })

  try {
    schema.parse({
      firstName,
      lastName,
      email,
      subject,
      message,
      phone,
    })

    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'guilhermeanv7822@gmail.com',
      subject,
      reply_to: email,
      react: React.createElement(Email, { message, email, author: name }),
    })

    return {
      response: 'success',
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
  } catch (error) {
    const zodError = error as ZodError
    const errorMap = zodError.flatten().fieldErrors
    return {
      response: 'error',
      errors: {
        firstName: errorMap.firstName?.[0] ?? '',
        lastName: errorMap.lastName?.[0] ?? '',
        email: errorMap.email?.[0] ?? '',
        subject: errorMap.subject?.[0] ?? '',
        message: errorMap.message?.[0] ?? '',
        phone: errorMap.phone?.[0] ?? '',
      },
      fieldValues: {
        firstName,
        lastName,
        email,
        subject,
        message,
        phone,
      },
    }
  }
}
