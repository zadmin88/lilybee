"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 w-full h-40 px-4  flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col gap-8 items-center w-full justify-between">
        <Logo />
        <div className="flex   ">
          <ol className="flex gap-20 font-light text-base flex-1 ">
            <li>
              <Link
                className={cn(pathname === "/about" && "font-semibold")}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn(pathname === "/collections" && "font-semibold")}
                href={"/collections"}
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                className={cn(pathname === "/contact" && "font-semibold")}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={cn(pathname === "/blog" && "font-semibold")}
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ol>

          <div className="flex gap-2">
            <Facebook size={24} />
            <Twitter size={24} />
            <Instagram size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};
