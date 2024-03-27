import CollectionCard from "./_components/collection-card";

const CollectionsPage = () => {
  return (
    <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-12 py-16 md:mb-32 px-8 place-items-center ">
      <CollectionCard
        imageUrl="/images/lilybee-website-collection-all-mobile.webp"
        description="This collection is all about fresh starts and celebrating new beginnings."
        name="efflorescence"
      />
    </div>
  );
};

export default CollectionsPage;
