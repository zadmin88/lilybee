import { Hero } from "./_components/hero";
import CollectionDescription from "./_components/collection-description";
import PatternsCarousel from "./_components/pattern-carousel";
import Quote from "@/components/quote";
import FamilyComponent from "./_components/family";
export default function Home() {
  return (
    <div className="w-full text-mainText">
      <Hero />
      <CollectionDescription />
      <PatternsCarousel />

      <FamilyComponent />
      <Quote
        text="¡Calling all creative bees!  "
        style="text-center mb-16 font-semibold"
      />
    </div>
  );
}
