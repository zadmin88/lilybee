"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky flex items-center justify-center w-full h-15 px-4 py-4 mb-4 ">
      <div className="flex justify-items-center gap-16">
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
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex gap-2 ">
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
