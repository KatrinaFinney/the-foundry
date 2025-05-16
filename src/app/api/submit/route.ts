export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: body.name,
      Email: body.email,
      Business: body.business,
      Package: body.package,
      Message: body.message,
    });

    // ✉️ Send admin notification
    await resend.emails.send({
      from: 'The Foundry <hello@webtriage.pro>',
      to: ['your@email.com'], // replace with your actual email
      subject: `New Inquiry from ${body.name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Business:</strong> ${body.business}</p>
        <p><strong>Package:</strong> ${body.package}</p>
        <p><strong>Message:</strong><br/>${body.message}</p>
      `,
    });

    // ✉️ Send thank-you email to user
    await resend.emails.send({
      from: 'The Foundry <hello@webtriage.pro>',
      to: [body.email],
      subject: `We’ve received your request — thank you!`,
      html: `
        <p>Hi ${body.name},</p>

        <p>Thanks for reaching out to <strong>The Foundry</strong>. We’ve received your request and will follow up within 1–2 business days.</p>

        <p>If you’re curious about where The Foundry came from, we’re a proud sister brand of <a href="https://webtriage.pro" target="_blank">WebTriage</a> — a trusted leader in digital repair and performance tuning for bold websites like yours.</p>

        <p>We're excited to collaborate on something exceptional.</p>

        <p style="margin-top: 2rem;">– The Foundry Team</p>
      `,
    });

    return NextResponse.json({ status: 'ok' });

  } catch (err) {
    console.error('Submit handler error:', err);
    return NextResponse.json({ status: 'error', error: err }, { status: 500 });
  }
}
