import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Image
        src="/images/lilybee-website-banner-1400-efflorence-desktop.webp"
        alt="Logo"
        width="0"
        height="0"
        sizes="100vw"
        // fill={true}
        className="hidden sm:block  lg:h-[512px] md:h-full w-full   aspect-auto "
      />
      <Image
        src="/images/lilybee-website-banner-efflorence-mobile.webp"
        alt="Logo"
        width="0"
        height="0"
        sizes="100vw"
        className="flex sm:hidden w-[600px] h-[450px] aspect-auto"
      />
    </>
  );
};
