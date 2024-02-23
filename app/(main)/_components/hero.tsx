import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" items-center gap-x-2 hidden md:flex">
      <Image src="/hero-spring.png" alt="Logo" width={1200} height={240} />
    </div>
  );
};
