import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      <Button className="w-full">View all</Button>
    </div>
  );
};

export default CollectionCard;
