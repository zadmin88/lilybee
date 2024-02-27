"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavItem = ({ url }: { url: string }) => {
  const pathname = usePathname();
  return (
    <Link
      className="bg-[#4B5666] text-mainBackground w-48 rounded-md py-2 flex items-center justify-center text-lg font-semibold capitalize"
      href={`/${url}`}
    >
      {url}
    </Link>
  );
};

export default MobileNavItem;
