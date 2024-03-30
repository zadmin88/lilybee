import Image from "next/image";
import MuckupCard from "./muckup-card";

const urls = {
  1: "https://www.spoonflower.com/en/fabric/16595681-watercolor-gingham-by-lilybee_design",
  2: "#",
  3: "https://www.spoonflower.com/en/fabric/16596643-blooming-symphony-light-pink-by-lilybee_design",
  4: "https://www.spoonflower.com/en/fabric/16596798-little-whispers-evergreen-8-small-by-lilybee_design",
  5: "https://www.spoonflower.com/en/fabric/16596867-flourishing-lines-caramel-by-lilybee_design",
  6: "https://www.spoonflower.com/en/fabric/16596801-rainbow-swirls-by-lilybee_design",
  7: "https://www.spoonflower.com/en/fabric/16596665-kissed-by-petals-evening-blue-by-lilybee_design",
  8: "https://www.spoonflower.com/en/fabric/16596661-gingham-bloom-beige-by-lilybee_design",
  9: "https://www.spoonflower.com/en/fabric/16596901-kissed-by-petals-white-by-lilybee_design",
  10: "#",
  11: "https://www.spoonflower.com/en/fabric/16596805-blossom-burst-beige-by-lilybee_design",
  12: "https://www.spoonflower.com/en/fabric/16596800-little-whispers-evening-blue-by-lilybee_design",
  13: "https://www.spoonflower.com/en/fabric/16596652-wispy-watercolor-lines-by-lilybee_design",
  14: "https://www.spoonflower.com/en/fabric/16596855-flourishing-lines-plump-by-lilybee_design",
  15: "https://www.spoonflower.com/en/fabric/16596803-blooming-harmony-by-lilybee_design",
};

const MuckupdContainer = () => {
  return (
    <div className="md:container w-full mb-8">
      <div className="w-full border-b border-mainText flex items-end justify-end place-content-center place-items-center">
        <a
          href={
            "https://www.spoonflower.com/profiles/lilybee_design?sub_action=shop"
          }
          className="mr-4 md:mr-16 pb-4"
        >
          Shop all
        </a>
      </div>

      <div className=" grid grid-cols-2  lg:grid-cols-4 gap-4 pt-8">
        {Array.from({ length: 15 }).map((_, index) => (
          <MuckupCard
            key={index}
            url={urls[(index + 1) as keyof typeof urls]}
            imageUrl={`/images/collection-muckups/lilybee-website-efflorescence-design-${
              index + 1
            }.webp`}
          />
        ))}
      </div>
    </div>
  );
};

export default MuckupdContainer;
