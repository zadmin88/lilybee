"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import handler from "@/actions/resend-action";
import { useRouter } from "next/navigation";
import { AlertModal } from "@/components/modals/alert-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const email = await handler(values);
    if (email === "Email sent") {
      form.reset();
      setOpen(true);
    } else {
      setError(email);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const onClosed = () => {
    setOpen(false);
    router.push("/");
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <div className=" relative w-full my-12  lg:my-16 flex flex-col">
      <AlertModal
        isOpen={open}
        onClose={onClosed}
        onConfirm={() => router.push("/")}
        loading={loading}
      />
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-80">
            <div className="space-y-6  mb-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                        placeholder="What is your name?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full"
                        placeholder="Email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full "
                        placeholder="Tell me what's on your mind!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full" variant="default" disabled={isLoading}>
              Send
            </Button>
          </form>
        </Form>
        {/* <form className=" mx-auto" action={handler}>
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
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form> */}
      </div>
    </div>
  );
};

export default ContactPage;
