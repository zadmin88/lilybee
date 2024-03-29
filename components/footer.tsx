import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";

import { Label } from "./ui/label";
import Newsletter from "./newsletter-form";

export const Footer = () => {
  return (
    <div className="bottom-0 pt-16 bg-footerBackground w-full     flex flex-col gap-8 items-center justify-between ">
      <Image
        src="/isotipo.png"
        alt="Logo"
        width={96}
        height={81}
        // className="h-16"
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold">
          Ready for a peek behind the magic?{" "}
        </h3>
        <p className="text-lg">
          Head over the newsletter for exclusive content and more!
        </p>
      </div>
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
      <p className=" bg-footerBackground text py-4  md:w-full flex items-center justify-center text-mainText px-2 text-sm md:text-sm text-center">
        This website and all the artwork contained within are copyright ©Lily
        Bee Gentle, LLC. All rights reserved.
      </p>
    </div>
  );
};
