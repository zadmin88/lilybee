import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiPinterestLine } from "react-icons/ri";

import { Label } from "./ui/label";
import Newsletter from "./newsletter-form";

export const Footer = () => {
  return (
    <div className="bottom-0 pt-16 bg-footerBackground w-full text-mainText    flex flex-col gap-4 md:gap-8 items-center justify-between z-50 ">
      <Image
        src="/images/bee.webp"
        alt="Logo"
        width={600}
        height={500}
        className="h-20 w-24"
      />
      <div className="flex flex-col items-center justify-center px-8 text-center">
        <h3 className="md:text-xl font-semibold">
          Ready for a peek behind the magic?{" "}
        </h3>
        <p className="md:text-lg">
          Head over the newsletter for exclusive content and more!
        </p>
      </div>
      {/* <Input
        type="text"
        placeholder="Email"
        className="w-80 h-12 rounded-md border-2 border-primaryText"
      /> */}
      <Newsletter />

      <div className=" flex gap-8 text-mainText felx items-center ">
        <a href="https://www.instagram.com/lilybeegentle/">
          <BsInstagram size={24} />
        </a>
        <a href="https://pinterest.com/lilybeegentle/">
          <RiPinterestLine size={26} />
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
