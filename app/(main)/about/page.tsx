import AboutHero from "./_components/hero";
import AboutDescription from "./_components/about-description";
import Quote from "@/components/quote";
import ClosingText from "./_components/closing-text";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full px-1 lg:px-0">
      <AboutHero />
      <AboutDescription />
      <Quote
        style="lg:px-48 text-center mt-16 lg:my-0"
        text="My biggest takeaway from this wild ride? Trust the journey, savor the moments, and remember, snuggles are always the best answer."
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
