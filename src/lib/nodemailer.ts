import nodemailer from "nodemailer";

/**
 * Creates and configures the Nodemailer SMTP transporter using environment variables.
 * Fallbacks allow flexibility across different naming conventions (SMTP_USERNAME, SMTP_USER, etc.).
 */
export function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const user = process.env.SMTP_USERNAME || process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || "";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Optional TLS configuration for modern servers
    tls: {
      rejectUnauthorized: false,
    },
  });
}

/**
 * Default Sender Email string (e.g., "BellCurve Studio <connect@bellcurvestudio.com>")
 */
export function getSenderEmail(): string {
  if (process.env.SMTP_FROM) {
    return process.env.SMTP_FROM;
  }
  
  const fromName = process.env.SMTP_FROM_NAME || "BellCurve Studio";
  const fromAddr = process.env.SMTP_FROM_EMAIL || process.env.SENDER_EMAIL || "connect@bellcurvestudio.com";
  
  return `"${fromName}" <${fromAddr}>`;
}

/**
 * Destination Email for Team Notifications (defaults to connect@bellcurvestudio.com)
 */
export function getNotificationEmail(): string {
  return process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || "connect@bellcurvestudio.com";
}

export interface SendMailParams {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

/**
 * Sends a single email using the configured SMTP transporter
 */
export async function sendEmail({ to, subject, html, text, replyTo }: SendMailParams) {
  const transporter = createTransporter();
  const from = getSenderEmail();

  return await transporter.sendMail({
    from,
    to,
    subject,
    html,
    text,
    replyTo: replyTo || from,
  });
}
