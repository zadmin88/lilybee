import { Hero } from "./_components/hero";
import CollectionDescription from "./_components/collection-description";
import PatternsCarousel from "./_components/pattern-carousel";
import Quote from "@/components/quote";
import FamilyComponent from "./_components/family";
export default function Home() {
  return (
    <div className="w-full text-mainText  ">
      <div className="lg:container">
        <Hero />
        <CollectionDescription />
        <PatternsCarousel />

        <FamilyComponent />
      </div>
      <Quote
        text="Bee Creative"
        style="text-center  w-full text-4xl uppercase"
      />
    </div>
  );
}
