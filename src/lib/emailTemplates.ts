export interface ContactFormData {
  name: string;
  email: string;
  org?: string;
  topic?: string;
  message?: string;
}

export interface AuditFormData {
  orgName: string;
  contactName: string;
  email: string;
  phone?: string;
  websiteUrl?: string;
  headache: string;
}

/**
 * Common email wrapper for consistent BellCurve branding across email clients
 */
function wrapTemplate(title: string, bodyContent: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4efe5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #17232d;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4efe5; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #fffdf8; border: 2px solid #17232d; border-radius: 20px; overflow: hidden; box-shadow: 6px 6px 0px #17232d;">
          
          <!-- Header Bar -->
          <tr>
            <td style="background-color: #17232d; padding: 24px 32px; border-bottom: 2px solid #17232d;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 800; color: #ffbd5f; text-transform: uppercase; letter-spacing: 2px;">
                      BELLCURVE STUDIO
                    </span>
                    <h1 style="margin: 6px 0 0 0; font-size: 20px; font-weight: 900; color: #fffdf8; letter-spacing: -0.5px;">
                      ${title}
                    </h1>
                  </td>
                  <td align="right" valign="middle">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #ed542d; display: inline-block;"></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 32px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f4efe5; padding: 20px 32px; border-top: 2px solid #17232d; text-align: center;">
              <p style="margin: 0; font-size: 12px; font-weight: 700; color: #56616a;">
                BellCurve Studio • High-Performance Systems & Digital Products
              </p>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #8c99a1;">
                <a href="mailto:connect@bellcurvestudio.com" style="color: #ed542d; text-decoration: none; font-weight: 800;">connect@bellcurvestudio.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * 1. Contact Form - User Confirmation Email
 */
export function getContactUserEmail(data: ContactFormData): { subject: string; html: string; text: string } {
  const subject = `Thank you for reaching out, ${data.name} | BellCurve Studio`;
  
  const html = wrapTemplate("Inquiry Received", `
    <h2 style="font-size: 22px; font-weight: 900; color: #17232d; margin-top: 0; margin-bottom: 12px;">
      Hello ${data.name},
    </h2>
    <p style="font-size: 14px; line-height: 1.6; color: #40505a; margin-bottom: 24px;">
      Thank you for contacting <strong>BellCurve Studio</strong>. Your message regarding <strong>${data.topic || "Web & Digital Systems"}</strong> has been routed directly to our founders.
    </p>

    <!-- Submission Details Summary -->
    <div style="background-color: #f4efe5; border: 2px solid #17232d; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 900; color: #ed542d; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">
        SUMMARY OF YOUR ENQUIRY
      </span>
      
      <table role="presentation" width="100%" cellspacing="0" cellpadding="4" style="font-size: 13px; color: #17232d;">
        <tr>
          <td width="30%" style="font-weight: 800; color: #56616a; vertical-align: top; padding-top: 6px;">Topic:</td>
          <td style="font-weight: 700;">
            ${
              data.topic && data.topic !== "Not specified"
                ? data.topic
                    .split(', ')
                    .map(
                      (t) =>
                        `<span style="display: inline-block; background-color: #fffdf8; color: #17232d; border: 1.5px solid #17232d; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 800; margin-right: 4px; margin-bottom: 4px; box-shadow: 1.5px 1.5px 0 #ed542d;">${t}</span>`
                    )
                    .join('')
                : 'General'
            }
          </td>
        </tr>
        ${data.org ? `
        <tr>
          <td style="font-weight: 800; color: #56616a;">Organisation:</td>
          <td style="font-weight: 700;">${data.org}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="font-weight: 800; color: #56616a;">Work Email:</td>
          <td style="font-weight: 700;">${data.email}</td>
        </tr>
        ${data.message ? `
        <tr>
          <td valign="top" style="font-weight: 800; color: #56616a; padding-top: 8px;">Message:</td>
          <td style="font-weight: 500; line-height: 1.5; padding-top: 8px;">${data.message.replace(/\n/g, '<br/>')}</td>
        </tr>
        ` : ''}
      </table>
    </div>

    <div style="background-color: #17232d; color: #fffdf8; border-radius: 12px; padding: 16px 20px; font-size: 13px;">
      <strong style="color: #ffbd5f;">What happens next?</strong><br/>
      One of our founders will review your submission and respond directly to this email within <strong>24 business hours</strong>.
    </div>
  `);

  const text = `
Hello ${data.name},

Thank you for contacting BellCurve Studio. Your message regarding ${data.topic || "Web & Digital Systems"} has been received.

Summary of your enquiry:
- Name: ${data.name}
- Organisation: ${data.org || "N/A"}
- Email: ${data.email}
- Topic: ${data.topic || "General"}
${data.message ? `- Message: ${data.message}` : ''}

One of our founders will review your submission and respond within 24 business hours.

Best regards,
BellCurve Studio Team
connect@bellcurvestudio.com
  `.trim();

  return { subject, html, text };
}

/**
 * 2. Contact Form - Team Notification Email (connect@bellcurvestudio.com)
 */
export function getContactTeamEmail(data: ContactFormData): { subject: string; html: string; text: string } {
  const subject = `[New Contact Lead] ${data.name}${data.org ? ` (${data.org})` : ""} - Website Inquiry`;

  const html = wrapTemplate("New Contact Form Inquiry", `
    <div style="background-color: #ffbd5f; color: #17232d; border: 2px solid #17232d; border-radius: 10px; padding: 10px 16px; font-weight: 900; font-size: 12px; font-family: 'Courier New', Courier, monospace; margin-bottom: 16px;">
      ⚡ NEW WEBSITE INQUIRY RECEIVED
    </div>

    <!-- Highlighted Topic / Starting Points at the Top -->
    <div style="background-color: #f4efe5; border: 2px solid #17232d; border-radius: 12px; padding: 16px 20px; margin-bottom: 20px; box-shadow: 4px 4px 0 #17232d;">
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 900; color: #ed542d; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 8px;">
        TOPIC / COMMON STARTING POINTS
      </span>
      <div style="font-size: 13px; font-weight: 800; color: #17232d; line-height: 1.6;">
        ${
          data.topic && data.topic !== "Not specified"
            ? data.topic
                .split(', ')
                .map(
                  (t) =>
                    `<span style="display: inline-block; background-color: #fffdf8; color: #17232d; border: 1.5px solid #17232d; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 800; margin-right: 6px; margin-bottom: 6px; box-shadow: 2px 2px 0 #ed542d;">${t}</span>`
                )
                .join('')
            : '<span style="color: #56616a; font-weight: 600;">None selected (General Enquiry)</span>'
        }
      </div>
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="font-size: 14px; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td width="35%" style="font-weight: 800; color: #56616a;">Full Name:</td>
        <td style="font-weight: 900; color: #17232d;">${data.name}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Work Email:</td>
        <td><a href="mailto:${data.email}" style="color: #ed542d; font-weight: 900; text-decoration: none;">${data.email}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Organisation:</td>
        <td style="font-weight: 700;">${data.org || "Not provided"}</td>
      </tr>
    </table>

    <div style="margin-top: 20px; background-color: #f4efe5; border: 2px solid #17232d; border-radius: 12px; padding: 16px;">
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 900; color: #ed542d; text-transform: uppercase;">
        MESSAGE CONTENT
      </span>
      <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.6; color: #17232d; font-weight: 500;">
        ${data.message ? data.message.replace(/\n/g, '<br/>') : 'No message body provided.'}
      </p>
    </div>

    <p style="margin-top: 24px; font-size: 12px; color: #56616a; font-weight: 700;">
      👉 Hit <strong>Reply</strong> to reply directly to ${data.name} (${data.email}).
    </p>
  `);

  const text = `
New Contact Form Inquiry

Topic / Starting Points: ${data.topic || "None selected"}
- Name: ${data.name}
- Email: ${data.email}
- Organisation: ${data.org || "Not provided"}

Message:
${data.message || "No message body provided."}
  `.trim();

  return { subject, html, text };
}

/**
 * 3. Free Audit Form - User Confirmation Email
 */
export function getAuditUserEmail(data: AuditFormData): { subject: string; html: string; text: string } {
  const subject = `Free Operational Audit Request Confirmed | BellCurve Studio`;

  const html = wrapTemplate("Audit Request Confirmed", `
    <h2 style="font-size: 22px; font-weight: 900; color: #17232d; margin-top: 0; margin-bottom: 12px;">
      Thank you, ${data.contactName}!
    </h2>
    <p style="font-size: 14px; line-height: 1.6; color: #40505a; margin-bottom: 24px;">
      We have received your request for a <strong>Free Operational Audit</strong> for <strong>${data.orgName}</strong>. Our founding team will begin analyzing your digital presence and operational intake.
    </p>

    <!-- Submission Details Summary -->
    <div style="background-color: #f4efe5; border: 2px solid #17232d; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 900; color: #ed542d; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">
        AUDIT INTAKE DETAILS
      </span>
      
      <table role="presentation" width="100%" cellspacing="0" cellpadding="4" style="font-size: 13px; color: #17232d;">
        <tr>
          <td width="35%" style="font-weight: 800; color: #56616a;">Organisation:</td>
          <td style="font-weight: 700;">${data.orgName}</td>
        </tr>
        <tr>
          <td style="font-weight: 800; color: #56616a;">Contact & Role:</td>
          <td style="font-weight: 700;">${data.contactName}</td>
        </tr>
        <tr>
          <td style="font-weight: 800; color: #56616a;">Work Email:</td>
          <td style="font-weight: 700;">${data.email}</td>
        </tr>
        ${data.phone ? `
        <tr>
          <td style="font-weight: 800; color: #56616a;">Phone:</td>
          <td style="font-weight: 700;">${data.phone}</td>
        </tr>
        ` : ''}
        ${data.websiteUrl ? `
        <tr>
          <td style="font-weight: 800; color: #56616a;">Website / System URL:</td>
          <td style="font-weight: 700;"><a href="${data.websiteUrl}" style="color: #ed542d;">${data.websiteUrl}</a></td>
        </tr>
        ` : ''}
        <tr>
          <td valign="top" style="font-weight: 800; color: #56616a; padding-top: 8px;">Key Bottleneck / Challenge:</td>
          <td style="font-weight: 500; line-height: 1.5; padding-top: 8px;">${data.headache.replace(/\n/g, '<br/>')}</td>
        </tr>
      </table>
    </div>

    <div style="background-color: #17232d; color: #fffdf8; border-radius: 12px; padding: 20px; font-size: 13px; border-left: 4px solid #ffbd5f;">
      <strong style="color: #ffbd5f; font-size: 14px;">Next Steps (3-5 Business Days)</strong><br/>
      <p style="margin: 8px 0 0 0; line-height: 1.5; color: #d6dce1;">
        Our founders will conduct a thorough review of your workflow & digital intake. You will receive a clear, actionable written diagnostic report at <strong>${data.email}</strong>. No mandatory sales call required.
      </p>
    </div>
  `);

  const text = `
Thank you, ${data.contactName}!

We have received your Free Operational Audit request for ${data.orgName}.

Audit Intake Details:
- Organisation: ${data.orgName}
- Contact & Role: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone || "N/A"}
- Website: ${data.websiteUrl || "N/A"}
- Operational Headache: ${data.headache}

Expect your written diagnosis in 3-5 business days.

Best regards,
BellCurve Studio Team
connect@bellcurvestudio.com
  `.trim();

  return { subject, html, text };
}

/**
 * 4. Free Audit Form - Team Notification Email (connect@bellcurvestudio.com)
 */
export function getAuditTeamEmail(data: AuditFormData): { subject: string; html: string; text: string } {
  const subject = `[New Audit Request] ${data.orgName} (${data.contactName})`;

  const html = wrapTemplate("New Audit Request Submitted", `
    <div style="background-color: #ed542d; color: #fffdf8; border: 2px solid #17232d; border-radius: 10px; padding: 10px 16px; font-weight: 900; font-size: 12px; font-family: 'Courier New', Courier, monospace; margin-bottom: 20px;">
      🔍 NEW FREE OPERATIONAL AUDIT REQUEST
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="font-size: 14px; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td width="35%" style="font-weight: 800; color: #56616a;">Organisation:</td>
        <td style="font-weight: 900; color: #17232d;">${data.orgName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Contact Name & Role:</td>
        <td style="font-weight: 900; color: #17232d;">${data.contactName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Work Email:</td>
        <td><a href="mailto:${data.email}" style="color: #ed542d; font-weight: 900; text-decoration: none;">${data.email}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Phone Number:</td>
        <td style="font-weight: 700;">${data.phone || "Not provided"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="font-weight: 800; color: #56616a;">Website / System URL:</td>
        <td>${data.websiteUrl ? `<a href="${data.websiteUrl}" target="_blank" style="color: #ed542d; font-weight: 700;">${data.websiteUrl}</a>` : "Not provided"}</td>
      </tr>
    </table>

    <div style="margin-top: 20px; background-color: #f4efe5; border: 2px solid #17232d; border-radius: 12px; padding: 16px;">
      <span style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 900; color: #ed542d; text-transform: uppercase;">
        OPERATIONAL HEADACHE / CHALLENGE
      </span>
      <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.6; color: #17232d; font-weight: 500;">
        ${data.headache.replace(/\n/g, '<br/>')}
      </p>
    </div>

    <p style="margin-top: 24px; font-size: 12px; color: #56616a; font-weight: 700;">
      👉 Hit <strong>Reply</strong> to reply directly to ${data.contactName} (${data.email}).
    </p>
  `);

  const text = `
New Operational Audit Request

- Organisation: ${data.orgName}
- Contact & Role: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone || "Not provided"}
- Website: ${data.websiteUrl || "Not provided"}

Operational Headache:
${data.headache}
  `.trim();

  return { subject, html, text };
}
