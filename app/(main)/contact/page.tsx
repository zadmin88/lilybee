import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className=" relative w-full lg:w-[1400px] my-16 flex flex-col">
      <Image
        src="/contact-flower.png"
        alt="Contact"
        width={350}
        height={200}
        className=" absolute -top-48 right-8 "
      />
      <p className="text-lg text-center mb-16">
        Hi there! Please feel to leave me a message, comment, question or just a
        positive thought. <br /> I look forward to reading all you have to say.
      </p>
      <div className=" flex items-center px-32">
        <Image src="/contact.png" alt="Contact" width={400} height={400} />
        <form className="max-w-md mx-auto">
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
