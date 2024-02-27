"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
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
        "fixed md:sticky top-0 flex items-center  md:justify-center w-full h-15 px-8 md:px-4 py-4 mb-4 bg-mainBackground z-50",
        scrolled && "md:fixed  "
      )}
    >
      <Link className="transition w-full flex justify-start md:hidden" href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={240}
          className="h-15 w-56 "
        />
      </Link>

      <div className="hidden gap-2  md:gap-16 md:flex  ">
        <Link
          className={cn(
            "hover:font-semibold text-lg",
            pathname === "/about" && "font-semibold "
          )}
          href={"/about"}
        >
          About
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg",
            pathname === "/collections" && "font-semibold"
          )}
          href={"/collections"}
        >
          Collections
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg",
            pathname === "/contact" && "font-semibold"
          )}
          href={"/contact"}
        >
          Contact
        </Link>

        <Link
          className={cn(
            "hover:font-semibold text-lg",
            pathname === "/blog" && "font-semibold"
          )}
          href={"/blog"}
        >
          Blog
        </Link>
      </div>
      <div className="md:hidden fixed h-10 top-5 right-6 mb-20  ">
        <MobileToggle>
          <MobileNavbar />
        </MobileToggle>
      </div>
      <div className="hidden absolute right-0 top-1/2 transform -translate-y-1/2 md:flex gap-2 ">
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
    </nav>
  );
};
