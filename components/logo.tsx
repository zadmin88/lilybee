import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex md:justify-center w-full pt-8">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={240}
          className="h-12 w-56  "
        />
      </Link>
    </div>
  );
};
