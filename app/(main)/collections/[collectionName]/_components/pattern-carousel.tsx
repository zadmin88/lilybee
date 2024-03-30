import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const CollectionPatternsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full  px-0  lg:px-8 mb-8 my-12 "
    >
      <CarouselContent>
        {Array.from({ length: 23 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="p-1 mr-2 basis-3/4  md:basis-1/4 "
          >
            <Image
              src={`/images/pattern-circle/lilybee-website-pattern_${
                index + 1
              }.webp`}
              alt={`Pattern ${index + 1}`}
              width={300}
              height={300}
              className="w-[260px] h-[260px] rounded-full self-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CollectionPatternsCarousel;
