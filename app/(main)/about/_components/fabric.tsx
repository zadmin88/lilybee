import Image from "next/image";
import { Button } from "@/components/ui/button";

const FabricComponent = () => {
  return (
    <div className=" relative mb-8 sm:mb-48 lg:h-[500px] mt-8 flex-col flex   lg:flex-row   lg:my-16 ">
      <div className="bg-secondaryBackground  w-full text-mainText  items-center text-center flex flex-col gap-4 px-84  justify-center py-32">
        <h3 className="text-lg w-full  font-semibold">
          Find the perfect fabric for your next project!
        </h3>

        <a href="https://www.spoonflower.com/profiles/lilybee_design?sub_action=shop">
          <Button className="uppercase w-40 mt-4" size="lg">
            shop now
          </Button>
        </a>
      </div>
      <Image
        src="/images/lilybee-website-banner-about-desktop.webp"
        alt="Fabric"
        width={600}
        height={600}
        className="hidden md:block   md:w-full "
      />
      <Image
        src="/images/lilybee-website-banner-about-mobile.webp"
        alt="Fabric"
        width={600}
        height={600}
        className="md:hidden "
      />
      <Image
        src="/images/lilybee-website-flower4.webp"
        alt="Fabric"
        width={572}
        height={852}
        className="hidden md:block lg:h-[426px] lg:w-[300px] h-[300px] w-[200px] absolute -right-16 top-24 md:left-[400px]  md:top-40 opacity-90"
      />
      <Image
        src="/images/lilybee-website-flower5.webp"
        alt="Fabric"
        width={100}
        height={200}
        className="md:hidden absolute -right-0 top-12 md:left-[400px]  md:top-40 opacity-90"
      />
    </div>
  );
};

export default FabricComponent;
