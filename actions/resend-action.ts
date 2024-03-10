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

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: email as string,
    subject: "Hello World",
    html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  return "Email sent!";
};

export default handler;
