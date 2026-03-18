import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactBody {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const toEmail = process.env.EMAIL_TO || process.env.EMAIL_USER

    // Email to WICC
    await transporter.sendMail({
      from: `"WICC Website" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `[WICC Contact Form] ${subject}`,
      html: `
        <div style="font-family: 'Lato', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f3; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a2244, #243060); padding: 32px 40px;">
            <h1 style="color: #e8d5a3; font-family: Georgia, serif; font-weight: 400; font-size: 28px; margin: 0;">
              New Message — WICC Website
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 8px; margin-bottom: 0;">
              Received via the contact form
            </p>
          </div>
          <div style="padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid rgba(201,168,76,0.2);">
                <td style="padding: 12px 0; color: #c9a84c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">Name</td>
                <td style="padding: 12px 0; color: #1c1c1e;">${sanitise(name)}</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(201,168,76,0.2);">
                <td style="padding: 12px 0; color: #c9a84c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 12px 0; color: #1c1c1e;"><a href="mailto:${sanitise(email)}" style="color: #c9a84c;">${sanitise(email)}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(201,168,76,0.2);">
                <td style="padding: 12px 0; color: #c9a84c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
                <td style="padding: 12px 0; color: #1c1c1e;">${sanitise(subject)}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #c9a84c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">Message</p>
              <div style="background: white; border: 1px solid rgba(201,168,76,0.2); border-radius: 8px; padding: 16px 20px; color: #1c1c1e; line-height: 1.7; white-space: pre-wrap;">${sanitise(message)}</div>
            </div>
          </div>
          <div style="background: #1a2244; padding: 20px 40px; text-align: center;">
            <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
              Westminster Islamic Community Centre — wicc.org.uk
            </p>
          </div>
        </div>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Westminster Islamic Community Centre" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message — WICC`,
      html: `
        <div style="font-family: 'Lato', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background: #faf8f3; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1a2244, #243060); padding: 32px 40px;">
            <h1 style="color: #e8d5a3; font-family: Georgia, serif; font-weight: 400; font-size: 28px; margin: 0;">
              JazakAllah Khayran, ${sanitise(name)}
            </h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 8px; margin-bottom: 0;">
              Westminster Islamic Community Centre
            </p>
          </div>
          <div style="padding: 32px 40px;">
            <p style="color: #1c1c1e; line-height: 1.8; font-size: 15px;">
              Assalamu Alaikum,<br/><br/>
              Thank you for reaching out to us. We have received your message and will respond as soon as possible, insha'Allah.
            </p>
            <p style="color: #1c1c1e; line-height: 1.8; font-size: 15px;">
              For urgent matters, please call us directly:<br/>
              <strong style="color: #c9a84c;">Brothers: 07846 353712</strong><br/>
              <strong style="color: #c9a84c;">Sisters: 07723 384465</strong>
            </p>
            <p style="color: #1c1c1e; line-height: 1.8; font-size: 15px;">
              Wassalamu Alaikum Wa Rahmatullahi Wa Barakatuh
            </p>
          </div>
          <div style="background: #1a2244; padding: 20px 40px; text-align: center;">
            <p style="color: rgba(255,255,255,0.3); font-size: 12px; margin: 0;">
              Westminster Islamic Community Centre<br/>
              Lillington Gardens Community Centre, Morgan House, 57 Vauxhall Bridge Rd, London SW1V 2LF
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}

// Simple HTML entity sanitisation to prevent injection
function sanitise(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
