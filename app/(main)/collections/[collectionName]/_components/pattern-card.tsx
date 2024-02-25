import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PatternCard = ({ imageUrl, url }: { imageUrl: string; url: string }) => {
  return (
    <div className="max-w-[276px] flex flex-col gap-6">
      <Image
        src={imageUrl}
        alt="Pattern Image"
        width={276}
        height={276}
        className="rounded-full"
      />
      <Link href={url}>
        <Button className="w-full uppercase">shop</Button>
      </Link>
    </div>
  );
};

export default PatternCard;
