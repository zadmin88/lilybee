import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CollectionCard = ({
  imageUrl,
  description,
  name,
}: {
  imageUrl: string;
  description: string;
  name: string;
}) => {
  return (
    <div className="max-w-[320px] flex flex-col gap-6">
      <Image src={imageUrl} alt="Collection Image" width={320} height={240} />
      <p>{description}</p>
      {name !== "coming-soon" ? (
        <Link href={`/collections/${name}`}>
          <Button className="w-full uppercase">View all</Button>
        </Link>
      ) : (
        <p className="rounded-lg w-full font-semibold flex items-center justify-center py-1.5 border-2 border-[#4B5666]">
          Coming soon
        </p>
      )}
    </div>
  );
};

export default CollectionCard;
