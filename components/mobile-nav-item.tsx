"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavItem = ({ url }: { url: string }) => {
  const pathname = usePathname();
  return (
    <Link
      className="text-mainText w-full rounded-md py-2 flex  text-xl font-semibold capitalize"
      href={`/${url}`}
    >
      {url}
    </Link>
  );
};

export default MobileNavItem;
