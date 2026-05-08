import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { SITE } from '@/lib/constants'

const schema = z.object({
  name:        z.string().min(2),
  company:     z.string().min(2),
  email:       z.string().email(),
  phone:       z.string().optional(),
  country:     z.string().min(2),
  enquiryType: z.string(),
  message:     z.string().min(20),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Email sending is skipped for now (Resend setup pending).
    // When ready, uncomment the Resend block below and add RESEND_API_KEY to .env.local.
    //
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from:    'Finsol Website <noreply@finsoltz.com>',
    //   to:      [SITE.email],
    //   subject: `New Enquiry — ${data.enquiryType} from ${data.company}`,
    //   html: `
    //     <h2>New website enquiry</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Company:</strong> ${data.company}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
    //     <p><strong>Country:</strong> ${data.country}</p>
    //     <p><strong>Enquiry type:</strong> ${data.enquiryType}</p>
    //     <hr/>
    //     <p>${data.message}</p>
    //   `,
    // })

    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.log('[Contact form]', { ...data, _to: SITE.email })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.issues }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
