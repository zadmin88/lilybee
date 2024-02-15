import Link from "next/link";

import { Logo } from "@/components/logo";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-56 px-4 border-b shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col gap-8 items-center w-full justify-between">
        <Logo />
        <ol className="flex gap-16">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/collections"}>Collections</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </ol>
      </div>
    </div>
  );
};
