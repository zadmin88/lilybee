import Image from "next/image";

const AboutHero = () => {
  return (
    <div className=" relative h-[600px] w-full flex flex-col lg:flex-row lg:gap-24 justify-between items-center lg:px-20">
      <Image
        src="/about.png"
        alt="about me"
        width={600}
        height={496}
        className="h-[496px]"
      />
      <div className="w-full lg:w-[500px] flex flex-col gap-4 mt-8 lg:mt-0  ">
        <h1 className="font-semibold text-lg ">Hey there, fellow makers!</h1>
        <p>
          I&apos;m Liliana, a mama bear, an art warrior, and a fabric whisperer
          (okay, okay, just a designer). Living my best life, with my mini-me,
          Lily Mia, following my Marine officer hubby across the US. We&apos;re
          a quiet souls, quality time is our jam, but don&apos;t let that fool
          you - Peloton rides keep my adrenaline pumping, while nature walks
          fuel our creative fire.
        </p>
      </div>
      <Image
        src="/red-flowers.png"
        alt="red flowers"
        width={180}
        height={300}
        className="h-[300px] absolute right-0 -bottom-40 lg:bottom-0 opacity-50 lg:opacity-100"
      />
    </div>
  );
};

export default AboutHero;
