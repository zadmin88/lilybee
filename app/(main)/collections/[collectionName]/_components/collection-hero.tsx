import Image from "next/image";
import { Button } from "@/components/ui/button";

const CollectionHero = () => {
  return (
    <div className="lg:h-[512px] flex flex-col lg:flex-row w-full">
      <Image
        src="/images/lilybee-website-collection-all-desktop.webp"
        alt="Logo"
        width={1400}
        height={512}
        className="hidden md:block"
      />
      <Image
        src="/images/lilybee-website-collection-all-mobile.webp"
        alt="Logo"
        width={500}
        height={500}
        className="md:hidden"
      />
      <div className="flex bg-thirdBackground flex-col gap-4 items-start text-white justify-center px-8 py-8 lg:py-0 lg:px-2 xl:px-12 text-left ">
        <h1 className="text-5xl font-light uppercase">Efflorescence</h1>
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
          <br />
          Imagine the{" "}
          <span className="font-semibold">
            quilts, bandanas, hair bows, and dresses
          </span>{" "}
          you can create with this collection.
        </p>
        <a href="https://www.spoonflower.com/profiles/lilybee_design?sub_action=shop">
          <Button className="bg-mainBackground text-secondText uppercase hover:bg-mainBackground/90">
            shop the collection
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CollectionHero;
