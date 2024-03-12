import CollectionCard from "./_components/collection-card";

const CollectionsPage = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-12 py-16 place-items-center ">
      <CollectionCard
        imageUrl="/spring-card.png"
        description="This collection is all about fresh starts and celebrating new beginnings."
        name="spring"
      />
      <CollectionCard
        imageUrl="/coming-soon.png"
        description="Forem ipsum dolor sit amet, consectetur adipiscing elit. "
        name="coming-soon"
      />
      <CollectionCard
        imageUrl="/coming-soon.png"
        description="Forem ipsum dolor sit amet, consectetur adipiscing elit. "
        name="coming-soon"
      />
      <CollectionCard
        imageUrl="/coming-soon.png"
        description="Forem ipsum dolor sit amet, consectetur adipiscing elit. "
        name="coming-soon"
      />
      <CollectionCard
        imageUrl="/coming-soon.png"
        description="Forem ipsum dolor sit amet, consectetur adipiscing elit. "
        name="coming-soon"
      />
      <CollectionCard
        imageUrl="/coming-soon.png"
        description="Forem ipsum dolor sit amet, consectetur adipiscing elit. "
        name="coming-soon"
      />
    </div>
  );
};

export default CollectionsPage;
