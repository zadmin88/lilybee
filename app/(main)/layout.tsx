import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/logo";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full container flex flex-col items-center   ">
      <Logo />
      <header className=" flex flex-col items-center w-full ">
        <Navbar />
      </header>
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
