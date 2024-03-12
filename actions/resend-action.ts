"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
});

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
