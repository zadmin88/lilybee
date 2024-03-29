import Image from "next/image";

const AboutHero = () => {
  return (
    <div className=" relative h-[600px] w-full flex flex-col lg:flex-row lg:gap-24 justify-between items-center lg:px-20">
      <Image
        src="/images/lilybee-website-about-desktop.webp"
        alt="about me"
        width={600}
        height={496}
        className="hidden md:block h-[496px]"
      />
      <Image
        src="/images/lilybee-website-about-mobile.webp"
        alt="about me"
        width={600}
        height={496}
        className=" md:hidden h-[496px]"
      />
      <div className="w-full lg:w-[500px] flex flex-col gap-4 mt-16 lg:mt-0 px-8 md:px-0  ">
        <h1 className="font-semibold text-lg ">Hey there, fellow makers!</h1>
        <p>
          Hi there! So thrilled you&apos;re here! I&apos;m Liliana, a mama,
          artist, and surface pattern designer living in the beautiful island of
          Japan. I adore capturing the magic of nature in my fabric designs,
          helping your handmade items stand out from the crowd.
        </p>
      </div>
      <Image
        src="/red-flowers.png"
        alt="red flowers"
        width={180}
        height={400}
        className="h-[350px] absolute right-0 -bottom-40 lg:bottom-0 opacity-50 lg:opacity-100"
      />
    </div>
  );
};

export default AboutHero;
