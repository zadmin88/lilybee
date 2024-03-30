import { Button } from "@/components/ui/button";
import Link from "next/link";

const CollectionDescription = () => {
  return (
    <div className="w-full h-full lg:h-80  flex lg:flex-row flex-col  justify-between items-center my-8   xl:px-24">
      <div className="flex flex-col gap-4 max-w-[800px] px-4 md:px-0 md:justify-normal md:items-start md:text-start justify-center items-center text-center ">
        <h1 className="text-5xl uppercase font-light ">Efflorescence</h1>
        <p className="text-lg  ">
          This collection is all about fresh starts and celebrating new
          beginnings.
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
