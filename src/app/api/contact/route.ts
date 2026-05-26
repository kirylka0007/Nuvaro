import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  product: z.enum(['flow', 'sync', 'both']),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Insert into Supabase leads table
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    )

    const { error: dbError } = await supabase.from('leads').insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      product: data.product,
      message: data.message,
      source: 'contact_form',
    })

    if (dbError) {
      console.error('[contact] Supabase insert error:', dbError)
    }

    // Send notification email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY!)
    const productLabel = {
      flow: 'Nuvaro Flow',
      sync: 'Nuvaro Sync',
      both: 'Both products',
    }[data.product]

    try {
      await resend.emails.send({
        from: 'Nuvaro Website <onboarding@resend.dev>',
        to: process.env.RESEND_TO_EMAIL!,
        subject: `New enquiry — ${productLabel} — ${data.name} from ${data.company || 'Unknown company'}`,
        html: `
          <h2>New business enquiry from Nuvaro website</h2>
          <table>
            <tr><td><strong>Name:</strong></td><td>${data.name}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${data.company || '—'}</td></tr>
            <tr><td><strong>Product:</strong></td><td>${productLabel}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${data.message}</td></tr>
          </table>
        `,
      })
    } catch (resendError) {
      console.error('[contact] Resend email error:', resendError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}
