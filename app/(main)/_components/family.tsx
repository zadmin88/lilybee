import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FamilyComponent = () => {
  return (
    <div className=" relative mb-8 sm:mb-48  mt-8 flex-col flex   lg:flex-row   lg:my-16 lg:px-16">
      <div className="bg-secondaryBackground h-[400px] w-full text-mainText  items-center text-center flex flex-col gap-4 px-8 py-12 xl:mt-24 justify-center ">
        <h3 className="text-lg w-full md:w-[400px] font-semibold">
          What makes me happy
        </h3>
        <ul>
          <li>Flowers</li>
          <li>Being Home</li>
          <li>Mountains</li>
          <li>Peloton rides</li>
          <li>Hiking</li>
          <li>Snuggling</li>
          <li>Black coffee</li>
          <li>Plants</li>
          <li>Seeing my daughter grow</li>
        </ul>
        <Link href="/about">
          <Button className="uppercase w-40 mt-4" size="lg">
            learn more
          </Button>
        </Link>
      </div>
      {/* <div className="w-[600px] h-[600px] relative"> */}
      <Image
        src="/images/lilybee-website-family-desktop.webp"
        alt="Family"
        width={600}
        height={600}
        // fill={true}
        className="xl:h-[600px] lg:h-[400px] md:h-full  w-full "
        // className="object-cover"
      />
      {/* </div> */}
      <Image
        src="/images/lilybee-website-flower1.webp"
        alt="Family"
        width={572}
        height={852}
        className="lg:h-[426px] lg:w-[300px] h-[300px] w-[200px] absolute  left-0 lg:-top-16 top-0 opacity-90"
      />
    </div>
  );
};

export default FamilyComponent;
