import { NextResponse } from "next/server";
import { sendEmail, getNotificationEmail } from "@/lib/nodemailer";
import { getAuditUserEmail, getAuditTeamEmail, AuditFormData } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const body: AuditFormData = await req.json();
    const { orgName, contactName, email, phone, websiteUrl, headache } = body;

    // Basic Validation
    if (!orgName || !contactName || !email || !headache) {
      return NextResponse.json(
        { success: false, error: "Organisation Name, Contact Name, Email, and Challenge description are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const payload: AuditFormData = {
      orgName: orgName.trim(),
      contactName: contactName.trim(),
      email: email.trim(),
      phone: phone?.trim(),
      websiteUrl: websiteUrl?.trim(),
      headache: headache.trim(),
    };

    // Prepare email contents
    const userEmailContent = getAuditUserEmail(payload);
    const teamEmailContent = getAuditTeamEmail(payload);
    const teamNotificationAddress = getNotificationEmail();

    // Send dual emails in parallel
    const [userResult, teamResult] = await Promise.allSettled([
      // 1. Thank you email to user
      sendEmail({
        to: payload.email,
        subject: userEmailContent.subject,
        html: userEmailContent.html,
        text: userEmailContent.text,
      }),
      // 2. Notification email to team (connect@bellcurvestudio.com) with replyTo = user email
      sendEmail({
        to: teamNotificationAddress,
        subject: teamEmailContent.subject,
        html: teamEmailContent.html,
        text: teamEmailContent.text,
        replyTo: payload.email,
      }),
    ]);

    // Check if team email failed (critical failure)
    if (teamResult.status === "rejected") {
      console.error("Failed to send audit notification to team:", teamResult.reason);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to dispatch email via SMTP. Please verify SMTP credentials or try again later.",
        },
        { status: 500 }
      );
    }

    if (userResult.status === "rejected") {
      console.warn("User thank you email failed, but team notification succeeded:", userResult.reason);
    }

    return NextResponse.json({
      success: true,
      message: "Audit request confirmed. Expect your report in 3-5 business days.",
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "An unexpected server error occurred.";
    console.error("Error in Audit API route:", error);
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
