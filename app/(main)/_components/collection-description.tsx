import { Button } from "@/components/ui/button";

const CollectionDescription = () => {
  return (
    <div className="w-full h-80  flex lg:flex-row flex-col  justify-between items-center my-8   xl:px-24">
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
      <Button size="lg" className="uppercase w-full md:w-48">
        shop the collection
      </Button>
    </div>
  );
};

export default CollectionDescription;
