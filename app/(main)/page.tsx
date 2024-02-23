import { Hero } from "./_components/hero";
import CollectionDescription from "./_components/collection-description";
import PatternsCarousel from "./_components/pattern-carousel";
import Quote from "@/components/quote";
import FamilyComponent from "./_components/family";
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CollectionDescription />
      <PatternsCarousel />
      <Quote text="Torem ipsum dolor sit amet, consectetur adipiscing elit." />
      <FamilyComponent />
    </div>
  );
}
