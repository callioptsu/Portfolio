import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Nodemailer
import nodemailer from 'nodemailer'

/**
 * @description Configuração do transporter.
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: true,
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

interface EmailResponseBody {
  message: string
  status: number
}

/**
 * @description Método responsável para o envio de emails.
 * @param req Requisição
 * @returns {EmailResponseBody}
 */
export async function POST(
  req: NextRequest,
): Promise<NextResponse<EmailResponseBody>> {
  try {
    const body = (await req.json()) as EmailRequestBody

    const templatePath =
      path.join(
        process.cwd(),
        'src',
        'app',
        'api',
        'send-email',
        'template.html',
      ) || null

    if (!templatePath) {
      return NextResponse.json(
        { message: 'Arquivo de template não encontrado', status: 500 },
        { status: 500 },
      )
    }

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          message: 'Preencha todos os campos',
          status: 400,
        },
        { status: 400 },
      )
    }

    if (Object.values(body).some((value) => !value.trim())) {
      return NextResponse.json({
        message: 'Preencha todos os campos corretamente',
        status: 400,
      })
    }

    let emailHtml = fs.readFileSync(templatePath, 'utf-8')
    emailHtml = emailHtml
      .replace('{{name}}', body.name)
      .replace('{{email}}', body.email)
      .replace('{{message}}', body.message)

    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      to: process.env.GMAIL_SERVER,
      subject: body.subject,
      html: emailHtml,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        message: 'E-mail enviado com sucesso! Obrigado pelo contato.',
        status: 200,
      },
      { status: 200 },
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        message: (err as Error).message,
        status: 500,
      },
      { status: 500 },
    )
  }
}

/**
 * @description Método GET para verificar se a api está funcional.
 * @returns {EmailResponseBody}
 */
export async function GET(): Promise<NextResponse<EmailResponseBody>> {
  return NextResponse.json({ message: 'Healthy.', status: 200 })
}
