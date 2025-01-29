import { NextRequest, NextResponse } from 'next/server'

// Nodemailer
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_SERVER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

interface EmailRequestBody {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as EmailRequestBody

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: 'Preencha todos os campos' },
        { status: 400 },
      )
    }

    if (Object.values(body).some((value) => !value.trim())) {
      return NextResponse.json(
        { error: 'Preencha todos os campos corretamente' },
        { status: 400 },
      )
    }

    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: process.env.GMAIL_SERVER,
      subject: body.subject,
      text: `\n Email do usuário: ${body.email}\n` + body.message,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso! Obrigado pelo contato.' },
      { status: 200 },
    )
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err)
    return NextResponse.json(
      {
        error: (err as Error).message,
      },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ message: 'Healthy.' }, { status: 200 })
}
