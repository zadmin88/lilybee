import AboutHero from "./_components/hero";
import AboutDescription from "./_components/about-description";
import Quote from "@/components/quote";
import ClosingText from "./_components/closing-text";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full px-1 lg:px-0 text-mainText">
      <AboutHero />
      <AboutDescription />
      <Quote
        style="lg:px-48 text-center mt-16 lg:my-16"
        text="Calling all creative bees! I can't wait to see the amazing things you bring to life with my fabrics. Share your masterpiece by tagging #lilybeegentle on social media, and let's spread the joy of crafting together!
        "
      />
      <ClosingText />
      <Image
        src="/about-footer.png"
        alt="Logo"
        width={1400}
        height={240}
        className="hidden md:flex"
      />
      <Image
        src="/about-footer-mobile.png"
        alt="Logo"
        width={1400}
        height={240}
        className="flex md:hidden"
      />
    </div>
  );
};

export default AboutPage;
