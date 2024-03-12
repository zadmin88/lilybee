"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import handler from "@/actions/resend-action";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    const email = await handler(formData);
  };
  return (
    <div className=" relative w-full my-12  lg:my-16 flex flex-col">
      <Image
        src="/contact-flower.png"
        alt="Contact"
        width={350}
        height={200}
        className=" absolute -bottom-32 -right-4 lg:-top-48 lg:right-8 opacity-50 lg:opacity-90 "
      />
      <p className="text-lg text-center mb-16">
        <span className="font-semibold"> I&apos;d love to hear from you!</span>{" "}
        Feel free to leave a message, share a comment, ask a question, or even
        send a positive thought my way.
        <br /> I&apos;m eager to connect and hear what you have to say.
      </p>
      <div className=" flex items-center flex-col lg:flex-row lg:px-32 gap-16 lg:gap-0">
        <Image
          src="/contact.png"
          alt="Contact"
          width={600}
          height={600}
          className="lg:h-[400] h-[600px]  lg:w-[400px] w-[600px]"
        />
        <form className=" mx-auto" action={handler}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-80"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
