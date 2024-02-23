import React from "react";

const Quote = ({ text }: { text: string }) => {
  return (
    <article className=" md:h-64 lg:h-80 bg-secondaryBackground flex items-center justify-center text-xl ">
      {text}
    </article>
  );
};

export default Quote;
