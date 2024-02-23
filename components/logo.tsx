import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex lg:justify-center w-full pt-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={240}
          className="h-15 hover:opacity-75 transition "
        />
      </Link>
    </div>
  );
};
