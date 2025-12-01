import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// Note: In Vercel Serverless Functions, use process.env
const resend = new Resend(process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const businessEmail = process.env.BUSINESS_EMAIL || process.env.VITE_BUSINESS_EMAIL || 'mirimbachristine@gmail.com';
    const contactEmail = process.env.CONTACT_EMAIL || process.env.VITE_CONTACT_EMAIL || 'onboarding@resend.dev'; // Fallback to resend default if custom domain not verified

    const { data, error } = await resend.emails.send({
      from: `Safe Digital Africa <${contactEmail}>`,
      to: [businessEmail],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Message from Safe Digital Africa Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
