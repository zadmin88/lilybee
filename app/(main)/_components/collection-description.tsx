import { Button } from "@/components/ui/button";

const CollectionDescription = () => {
  return (
    <div className="w-full h-80  flex justify-between items-center px-4  lg:px-32">
      <div className="flex flex-col gap-4 max-w-[800px]">
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
      <Button size="sm" className="uppercase">
        shop the collection
      </Button>
    </div>
  );
};

export default CollectionDescription;
