"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavItem = ({ url }: { url: string }) => {
  const pathname = usePathname();
  return (
    <Link className="hover:font-semibold text-lg capitalize" href={`/${url}`}>
      {url}
    </Link>
  );
};

export default MobileNavItem;
