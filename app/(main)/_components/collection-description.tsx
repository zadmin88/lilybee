import { Button } from "@/components/ui/button";
import Link from "next/link";

const CollectionDescription = () => {
  return (
    <div className="w-full h-full lg:h-80  flex lg:flex-row flex-col  justify-between items-center my-8   xl:px-24">
      <div className="flex flex-col gap-4 max-w-[800px] ">
        <h1 className="text-5xl uppercase font-light ">Efflorescence</h1>
        <p className="text-lg">
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
      <Link href="/collections/efflorescence">
        <Button
          size="lg"
          className="uppercase w-full mt-8 lg:mt-0 md:w-[800px] lg:w-48"
        >
          shop the collection
        </Button>
      </Link>
    </div>
  );
};

export default CollectionDescription;
