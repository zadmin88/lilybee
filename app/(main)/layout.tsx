import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/logo";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col  ">
      <Logo />
      <header className="h-16 flex  items-center w-full ">
        <Navbar />
      </header>
      <main className="px-2 md:px-0  ">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
