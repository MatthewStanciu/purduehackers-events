import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'
import Mailgun from 'mailgun-js'
import { generateUUID } from '../../lib/uuid'
import VerifyEmail from '../../components/emails/verify'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, eventName, slug } = req.body
  const mailgun = Mailgun
  const mg = mailgun({
    apiKey: `${process.env.MAILGUN_API_KEY}`,
    domain: 'purduehackers.com'
  })

  const uuid = await generateUUID(email)

  try {
    const data = await resend.sendEmail({
      from: 'Purdue Hackers <onboarding@resend.dev>',
      to: email,
      subject: 'Purdue Hackers: Please verify your email',
      react: (
        <VerifyEmail
          list={slug}
          email={email}
          eventName={eventName}
          uuid={uuid}
        />
      )
    })

    console.log(data)
    res.status(200).json(data)
  } catch (e) {
    console.log(e)
    res.status(400).json(e)
  }

  // const data = {
  //   from: 'Purdue Hackers <events@purduehackers.com>',
  //   to: `${email}`,
  //   subject: `Purdue Hackers: Please verify your email`,
  //   template: 'verify-your-email',
  //   'h:X-Mailgun-Variables': JSON.stringify({
  //     eventName,
  //     list: slug,
  //     email,
  //     uuid
  //   })
  // }

  // mg.messages()
  //   .send(data)
  //   .then((r) => {
  //     console.log(`Successfully sent verification email to ${email}!`)
  //     console.log(r)
  //     res.json({ ok: true, status: 200 })
  //   })
  //   .catch((err) => {
  //     console.log('Error sending verification email: ' + err)
  //     res.status(500).end()
  //   })
}
