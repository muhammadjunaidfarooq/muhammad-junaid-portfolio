import { Resend } from 'resend';
import { render } from '@react-email/components';
import React from 'react';
import AdminNotificationEmail from '@/emails/AdminNotification';
import { PROJECT_TYPE_LABELS } from '@/lib/project-labels';

// Lazy/guarded: constructing Resend with no key throws synchronously, which
// would crash this module's import (and the whole /api/contacts route) before
// the try/catch blocks below ever get a chance to run.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface ContactFormData {
  fullname: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
  requirements?: string;
}

/**
 * Send notification email to admin about new contact form submission
 */
export async function sendAdminNotificationEmail(data: ContactFormData) {
  if (!resend) {
    console.warn('⚠️ RESEND_API_KEY not set — skipping admin notification email.');
    return { success: false, error: new Error('RESEND_API_KEY not configured') };
  }

  try {
    const emailHtml = await render(
      React.createElement(AdminNotificationEmail, {
        fullname: data.fullname,
        email: data.email,
        projectType: data.projectType,
        timeline: data.timeline,
        budget: data.budget,
        message: data.message,
        requirements: data.requirements,
      })
    );

    // NOTE: see the sandbox-sender comment above — replace once you have a verified domain.
    const fromEmail = 'Portfolio Contact <onboarding@resend.dev>';

    const projectTypeLabel = PROJECT_TYPE_LABELS[data.projectType] || data.projectType;
    const subject = `New Lead – ${projectTypeLabel}`;

    const result = await resend.emails.send({
      from: fromEmail,
      to: 'junaidfarooq.pk@gmail.com',
      subject,
      html: emailHtml,
      replyTo: data.email,
    });

    console.log('✅ Admin notification email sent successfully:', result);
    return { success: true, data: result, error: null };
  } catch (error: unknown) {
    const err = error as { message?: string; statusCode?: number; name?: string };
    console.error('❌ Error sending admin notification email:', {
      message: err.message,
      statusCode: err.statusCode,
      name: err.name,
      details: error,
    });
    return { success: false, error };
  }
}

/**
 * Send the lead notification email.
 * Returns success even if the email fails (don't block form submission).
 */
export async function sendContactFormEmails(data: ContactFormData) {
  const adminEmail = await sendAdminNotificationEmail(data);

  console.log('Email sending results:', {
    adminEmailSent: adminEmail.success,
  });

  return { adminEmail };
}
