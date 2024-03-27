import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Image
        src="/images/lilybee-website-banner-efflorence-desktop.webp"
        alt="Logo"
        width={1400}
        height={240}
        className="hidden sm:block"
      />
      <Image
        src="/images/lilybee-website-banner-efflorence-mobile.webp"
        alt="Logo"
        width={700}
        height={600}
        className="flex sm:hidden"
      />
    </>
  );
};
