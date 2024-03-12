"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const handler = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return "Please fill out all fields";
  }

  const sentEmail = await resend.emails.send({
    from: "contact@lilybeegentle.com",
    to: "zaimon88@gmail.com",
    subject: `${name as string} - ${email as string}`,
    html: `<p>${message}</p>`,
  });

  return sentEmail ? "Email sent" : "Email failed to send";
};

export default handler;
