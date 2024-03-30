import Image from "next/image";

const MuckupCard = ({ imageUrl, url }: { imageUrl: string; url: string }) => {
  return (
    <div className="w-full group  relative">
      <Image src={imageUrl} alt={"Muckup"} width={304} height={376} />
      <a
        className="md:hidden flex absolute bottom-0 md:group-hover:flex items-center justify-center w-full h-12 bg-white/30 text-mainText hover:bg-white/50 hover:text-mainText "
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quick Shop
      </a>
    </div>
  );
};

export default MuckupCard;
