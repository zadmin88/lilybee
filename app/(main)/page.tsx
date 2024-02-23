import { Hero } from "./_components/hero";
import CollectionDescription from "./_components/collection-description";
import PatternsCarousel from "./_components/pattern-carousel";
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CollectionDescription />
      <PatternsCarousel />
    </div>
  );
}
