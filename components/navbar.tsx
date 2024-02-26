"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const Navbar = () => {
  const pathname = usePathname();
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "sticky top-0 flex md:items-center justify-between md:justify-center w-full h-15 px-0 md:px-4 py-4 mb-4 bg-mainBackground z-50",
        scrolled && "fixed"
      )}
    >
      <div className="flex gap-2  md:gap-16">
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
      <Link className="transition w-full flex justify-end md:hidden" href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={240}
          className="h-15 w-56 "
        />
      </Link>
    </nav>
  );
};
