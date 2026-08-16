import { NextResponse } from "next/server";
import { sendEmail, getNotificationEmail } from "@/lib/nodemailer";
import { getContactUserEmail, getContactTeamEmail, ContactFormData } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, org, topic, message } = body;

    // Basic Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required fields." },
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

    const payload: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      org: org?.trim(),
      topic: topic?.trim() || "Web Application",
      message: message?.trim(),
    };

    // Prepare email contents
    const userEmailContent = getContactUserEmail(payload);
    const teamEmailContent = getContactTeamEmail(payload);
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
      console.error("Failed to send contact notification to team:", teamResult.reason);
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
      message: "Thank you for your enquiry. Our team will contact you shortly.",
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "An unexpected server error occurred.";
    console.error("Error in Contact API route:", error);
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
