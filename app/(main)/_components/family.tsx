import Image from "next/image";
import { Button } from "@/components/ui/button";

const FamilyComponent = () => {
  return (
    <div className=" relative mb-8 sm:mb-48 mt-8 flex-col flex  lg:flex-row h-[800px] lg:mb-0 lg:my-8 lg:px-16">
      <div className="bg-secondaryBackground h-[400px] w-full  flex flex-col gap-8 px-8 py-12 xl:mt-12 ">
        <p className="text-lg w-full md:w-[400px]">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. risus sem sollicitudin lacus, ut interdum tellus elit
          sed risus.
        </p>
        <Button className="uppercase w-40" size="lg">
          learn more
        </Button>
      </div>
      <Image
        src="/family.png"
        alt="Family"
        width={800}
        height={800}
        className="xl:h-[600px] lg:h-[400px] md:h-[600px]  md:w-full "
      />
      <Image
        src="/flowers.png"
        alt="Family"
        width={500}
        height={500}
        className="h-[500px] absolute bottom-40 right-0 top-0 lg:right-[400px] lg:top-[150px] xl:right-[500px] opacity-40 md:opacity-70 lg:opacity-90"
      />
    </div>
  );
};

export default FamilyComponent;
