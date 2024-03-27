import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const PatternsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full  px-0  lg:px-8 mb-8 "
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="p-1 mr-2 basis-3/4  md:basis-1/4 "
          >
            <Image
              src={`/images/efflorescence-muckups/lilybee-website-efflorescence-m${
                index + 1
              }.webp`}
              alt={`Pattern ${index + 1}`}
              width={300}
              height={300}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PatternsCarousel;
