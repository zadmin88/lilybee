import CollectionHero from "./_components/collection-hero";
import PatternCard from "./_components/pattern-card";

const CollectionName = ({ params }: { params: { collectionName: string } }) => {
  const { collectionName } = params;
  return (
    <div className="w-full mt-16">
      <CollectionHero />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-20 py-16  px-8">
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
        <PatternCard imageUrl="/coming-soon.png" url="#" />
      </div>
    </div>
  );
};

export default CollectionName;
