import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-[#F1EADD]">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
