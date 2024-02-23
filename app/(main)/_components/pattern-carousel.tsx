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
      className="w-full  lg:px-8 mb-8 "
    >
      <CarouselContent className="">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="p-1 md:basis-1/3 lg:basis-1/4">
            <Image
              src={`/spring-patterns/pattern${index + 1}.png`}
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
