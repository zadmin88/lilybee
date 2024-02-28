import Image from "next/image";

const CollectionHero = () => {
  return (
    <div className="lg:h-[512px] flex flex-col lg:flex-row w-full">
      <Image src="/spring-hero.png" alt="Logo" width={1400} height={512} />
      <div className="flex bg-secondaryBackground flex-col gap-4 items-start justify-center px-4 py-4 lg:py-0 lg:px-2 xl:px-12 text-left">
        <h1 className="text-5xl font-light">spring</h1>
        <p className="">
          SPRING Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.Forem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Forem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
          ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );
};

export default CollectionHero;
