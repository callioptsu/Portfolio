import postEmail from './postEmail'

interface Payload {
  subject: string
  email: string
  message: string
}

export default async function emailFormAction(formData: FormData) {
  'use server'
  const raw = Object.fromEntries(formData.entries())

  if (
    typeof raw.subject !== 'string' ||
    typeof raw.email !== 'string' ||
    typeof raw.message !== 'string'
  ) {
    throw new Error('Campos inválidos!')
  }

  const payload: Payload = {
    subject: raw.subject,
    email: raw.email,
    message: raw.message,
  }

  await postEmail(payload)
}
