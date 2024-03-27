import { cn } from "@/lib/utils";

const Quote = ({ text, style }: { text: string; style?: string }) => {
  return (
    <article
      className={cn(
        " px-8 py-8 md:h-64 lg:h-80 bg-secondaryBackground flex items-center justify-center text-xl text-mainText ",
        style && style
      )}
    >
      {text}
    </article>
  );
};

export default Quote;
