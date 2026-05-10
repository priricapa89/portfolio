import type { ActionFunctionArgs } from "react-router";
import { Resend } from "resend";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const firstName  = (formData.get("firstName")  as string)?.trim();
  const lastName   = (formData.get("lastName")   as string)?.trim();
  const email      = (formData.get("email")      as string)?.trim();
  const interest   = (formData.get("interest")   as string)?.trim();
  const message    = (formData.get("message")    as string)?.trim();

  if (!firstName || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "PRicapa.com <onboarding@resend.dev>",
    to: "pri.ricapa89@gmail.com",
    reply_to: email,
    subject: `New message from ${firstName} ${lastName} — ${interest || "General Inquiry"}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1833;">
        <div style="background: linear-gradient(135deg, #7B4FD4, #E84393); padding: 28px 32px; border-radius: 12px 12px 0 0;">
          <p style="margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.75);">PRicapa.com</p>
          <h1 style="margin: 8px 0 0; font-size: 22px; color: #fff; font-weight: 700;">New contact form submission</h1>
        </div>
        <div style="background: #fff; padding: 32px; border: 1px solid #ede9f8; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 13px; font-weight: 600; color: #7B4FD4; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 14px; color: #1a1833;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 13px; font-weight: 600; color: #7B4FD4;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 14px;"><a href="mailto:${email}" style="color: #E84393;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 13px; font-weight: 600; color: #7B4FD4;">Interested in</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0ebff; font-size: 14px; color: #1a1833;">${interest || "Not specified"}</td>
            </tr>
          </table>
          <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #7B4FD4;">Message</p>
          <div style="background: #f8f6ff; border-left: 3px solid #7B4FD4; border-radius: 4px; padding: 16px 20px; font-size: 14px; line-height: 1.75; color: #3d3660; white-space: pre-wrap;">${message}</div>
          <p style="margin: 24px 0 0; font-size: 12px; color: #aaa;">Reply directly to this email to respond to ${firstName}.</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return { success: false, error: "Failed to send. Please email directly." };
  }

  return { success: true };
}
