import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Image
        src="/hero-spring.png"
        alt="Logo"
        width={1400}
        height={240}
        className="hidden sm:block"
      />
      <Image
        src="/hero-spring-mobile.png"
        alt="Logo"
        width={700}
        height={600}
        className="flex sm:hidden"
      />
    </>
  );
};
