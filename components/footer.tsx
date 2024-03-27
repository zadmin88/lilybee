import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

import { Label } from "./ui/label";
import Newsletter from "./newsletter-form";

export const Footer = () => {
  return (
    <div className="bottom-0 pt-16 bg-[#F7F6F2] w-full     flex flex-col gap-8 items-center justify-between ">
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

      <div className=" flex gap-8 text-mainText ">
        <a href="https://www.instagram.com/lilybeegentle/">
          <FaInstagram size={24} />
        </a>
        <a href="https://pinterest.com/lilybeegentle/">
          <ImPinterest2 size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086417744367">
          <FaFacebookF size={24} />
        </a>
      </div>
      <p className=" bg-mainText text py-4  md:w-full flex items-center justify-center text-white px-2 text-sm md:text-sm text-center">
        This website and all the artwork contained within are copyright ©Lily
        Bee Gentle, LLC. All rights reserved.
      </p>
    </div>
  );
};
