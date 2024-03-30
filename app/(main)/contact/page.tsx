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
    <div className=" relative w-full my-12  lg:my-16 flex flex-col lg:container text-mainText">
      <AlertModal
        isOpen={open}
        onClose={onClosed}
        onConfirm={() => router.push("/")}
        loading={loading}
      />
      <Image
        src="/images/lilybee-website-flower3.webp"
        alt="Contact"
        width={350}
        height={200}
        className="hidden md:block absolute -bottom-16 -right-48 lg:-top-0 lg:right-8 opacity-40 lg:opacity-90 "
      />
      <Image
        src="/images/lilybee-website-flower6.webp"
        alt="Contact"
        width={250}
        height={100}
        className="md:hidden absolute bottom-8 -right-0  opacity-40  "
      />
      <p className="text-lg text-center mb-16 font-semibold">
        Let&apos;s team up and create something amazing!
      </p>
      <div className=" flex items-center flex-col lg:flex-row lg:px-32 gap-16 lg:gap-0">
        <Image
          src="/images/lilybee-website-contact-desktop.webp"
          alt="Contact"
          width={500}
          height={600}
          className="hidden md:block"
        />
        <Image
          src="/images/lilybee-website-contact-mobile.webp"
          alt="Contact"
          width={600}
          height={600}
          className="md:hidden z-0 "
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto w-80 z-40"
          >
            <div className="space-y-6  mb-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300 w-full "
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300  w-full bg-white"
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
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isLoading}
                        className="mt-1 px-4 py-2 border border-gray-300   w-full "
                        placeholder="Tell me what's on your mind!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="w-full uppercase"
              variant="default"
              disabled={isLoading}
            >
              Send message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
