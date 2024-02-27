import { Button } from "@/components/ui/button";
import Link from "next/link";

const CollectionDescription = () => {
  return (
    <div className="w-full h-full lg:h-80  flex lg:flex-row flex-col  justify-between items-center my-8   xl:px-24">
      <div className="flex flex-col gap-4 max-w-[800px] ">
        <h1 className="text-5xl uppercase font-light ">Spring</h1>
        <p className="text-lg">
          SPRING Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.Forem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Forem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
          ac aliquet odio mattis.Forem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis.
        </p>
      </div>
      <Link href="/collections/spring">
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
