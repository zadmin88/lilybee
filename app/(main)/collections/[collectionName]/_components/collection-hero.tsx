import Image from "next/image";

const CollectionHero = () => {
  return (
    <div className="lg:h-[512px] flex flex-col lg:flex-row w-full">
      <Image src="/spring-hero.png" alt="Logo" width={1400} height={512} />
      <div className="flex bg-secondaryBackground flex-col gap-4 items-start justify-center px-4 py-4 lg:py-0 lg:px-2 xl:px-12 text-left text-mainText">
        <h1 className="text-5xl font-light">Efflorescence</h1>
        <p className="text-base">
          Efflorescence is here to celebrate my new beginnings as a fabric
          designer. Blooming like a delicate flower, whispering of fresh starts.
          Soft pinks, calming greens, and dreamy blues dance across the fabrics,
          inviting you to explore a new beginning. This collection is a gentle
          celebration filled with whimsical charm, offering a{" "}
          <span className="font-semibold">precise blend</span> of classic
          <span className="font-semibold"> stripes and charming ginghams </span>
          alongside
          <span className="font-semibold">
            {" "}
            adorable bird motifs and exquisite floral designs.
          </span>{" "}
          Imagine the{" "}
          <span className="font-semibold">
            quilts, bandanas, hair bows, and dresses
          </span>{" "}
          you can create with this collection.
        </p>
      </div>
    </div>
  );
};

export default CollectionHero;
