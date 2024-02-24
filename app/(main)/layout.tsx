import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Logo } from "@/components/logo";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-col items-center   ">
      <Logo />
      <header className="h-16 flex flex-col items-center w-full ">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
