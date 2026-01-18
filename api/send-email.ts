import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  stage: string;
  idea: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: ContactFormData = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.stage || !data.idea) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'geturstyleofficial@gmail.com',
      replyTo: data.email,
      subject: `Web MVP Project Interest - ${data.company || 'New Founder'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Funding Stage:</strong> ${data.stage}</p>
        <h3>Idea/Details:</h3>
        <p>${data.idea.replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Funding Stage: ${data.stage}

Idea/Details:
${data.idea}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
