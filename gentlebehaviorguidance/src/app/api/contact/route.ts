// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Send the email using Resend
    const emailRes = await resend.emails.send({
      from: 'youremail@yourdomain.com', // Replace with your verified sender email
      to: 'youremail@yourdomain.com',   // Replace with your destination email address
      subject: `New contact form submission: ${subject}`,
      html: `<p>You have a new contact form submission.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    return NextResponse.json({ success: true, emailRes });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}