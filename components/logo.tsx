import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex md:justify-center w-full pt-8 pb-4 bg-headerBackground">
      <Link href="/">
        <Image
          src="/images/logo-lilybee.webp"
          alt="Logo"
          width={1280}
          height={250}
          className="h-12 w-56"
        />
      </Link>
    </div>
  );
};
