import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PatternCard = ({ imageUrl, url }: { imageUrl: string; url: string }) => {
  return (
    <div className=" flex flex-col gap-6  ">
      <Image
        src={imageUrl}
        alt="Pattern Image"
        width={276}
        height={276}
        className=" w-[220px] h-[220px] rounded-full self-center"
      />
      <Link href={url}>
        <Button className="w-full uppercase">shop</Button>
      </Link>
    </div>
  );
};

export default PatternCard;
