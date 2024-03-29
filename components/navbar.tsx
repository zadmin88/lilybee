"use client";

import Link from "next/link";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { MobileToggle } from "./mobile-toggle";
import MobileNavbar from "./mobile-navbar";

export const Navbar = () => {
  const pathname = usePathname();
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "fixed md:sticky top-0 flex items-center  md:justify-center w-full h-15 px-8 md:px-4 py-4 mb-4 bg-mainBackground z-50 ",
        scrolled && "md:fixed md:border-b md:border-mainText"
      )}
    >
      <Link className=" w-full flex justify-center  md:hidden" href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={240}
          className="h-11 w-56  "
        />
      </Link>

      <div className="hidden  md:flex  gap-8 lg:gap-24 text-mainText">
        <Link
          className={cn(
            "hover:font-semibold text-lg w-24 text-right ",
            pathname === "/about" && "font-semibold "
          )}
          href={"/about"}
        >
          About
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg w-24 text-center ",
            pathname === "/collections" && "font-semibold"
          )}
          href={"/collections"}
        >
          Collections
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg w-24 text-center ",
            pathname === "/contact" && "font-semibold"
          )}
          href={"/contact"}
        >
          Contact
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg w-24 text-left ",
            pathname === "/blog" && "font-semibold"
          )}
          href={"/blog"}
        >
          Blog
        </Link>
      </div>
      <div className="md:hidden fixed h-10 top-4 left-4 mb-20  ">
        <MobileToggle>
          <MobileNavbar />
        </MobileToggle>
      </div>
      <div className="hidden  absolute right-4 top-1/2 transform -translate-y-1/2 md:flex gap-4 text-mainText ">
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
    </nav>
  );
};
