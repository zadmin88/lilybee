// import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Newsletter from "./newsletter-form";

export const Footer = () => {
  return (
    <div className="bottom-0 py-16 bg-[#F7F6F2]  p-4  h-[400px] w-screen md:w-full  flex flex-col gap-8 items-center justify-between ">
      <Image
        src="/isotipo.png"
        alt="Logo"
        width={96}
        height={81}
        // className="h-16"
      />
      <Label className="text-xl">Subscribe to our newsletter</Label>
      {/* <Input
        type="text"
        placeholder="Email"
        className="w-80 h-12 rounded-md border-2 border-primaryText"
      /> */}
      <Newsletter />

      <div className=" flex gap-8 ">
        <a href="https://www.instagram.com/lilybeegentle/">
          <Instagram size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086417744367">
          <Facebook size={24} />
        </a>
        <a href="#">
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
};
