import AboutHero from "./_components/hero";
import AboutDescription from "./_components/about-description";
import Quote from "@/components/quote";
import ClosingText from "./_components/closing-text";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutDescription />
      <Quote
        style="px-48 text-center"
        text="My biggest takeaway from this wild ride? Trust the journey, savor the moments, and remember, snuggles are always the best answer."
      />
      <ClosingText />
      <Image src="/about-footer.png" alt="Logo" width={1400} height={240} />
    </div>
  );
};

export default AboutPage;
