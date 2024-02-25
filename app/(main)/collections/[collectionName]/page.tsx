import CollectionHero from "./_components/collection-hero";

const CollectionName = ({ params }: { params: { collectionName: string } }) => {
  const { collectionName } = params;
  return (
    <div className="w-full">
      <CollectionHero />
    </div>
  );
};

export default CollectionName;
