import Image from "next/image";
import { Button } from "@/components/ui/button";

const FamilyComponent = () => {
  return (
    <div className=" relative flex h-[800px] my-8 px-16">
      <div className="bg-secondaryBackground h-[400px] w-full  flex flex-col gap-8 justify-left px-8 py-12 mt-12 ">
        <p className="text-lg w-[400px]">
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
        width={600}
        height={600}
        className="h-[600px]"
      />
      <Image
        src="/flowers.png"
        alt="Family"
        width={500}
        height={500}
        className="h-[500px] absolute bottom-40 right-[500px] opacity-90"
      />
    </div>
  );
};

export default FamilyComponent;
