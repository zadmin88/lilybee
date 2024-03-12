"use server";

import { Resend } from "resend";
import { formSchema } from "@/app/(main)/contact/page";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const handler = async (values: z.infer<typeof formSchema>) => {
  const { name, email, message } = values;

  if (!name || !email || !message) {
    return "Please fill out all fields";
  }

  const sentEmail = await resend.emails.send({
    from: "contact@lilybeegentle.com",
    to: "lilybeegentle@gmail.com",
    subject: `${name as string} - ${email as string}`,
    html: `<p>${message}</p>`,
  });

  return sentEmail ? "Email sent" : "Email failed to send";
};

export default handler;
