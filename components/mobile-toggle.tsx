"use client";

import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useMobileToogle } from "@/hooks/use-mobile-toggle";

export const MobileToggle = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useMobileToogle();
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={onOpen}>
      <SheetTrigger asChild>
        {isOpen ? (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-mainText"
          >
            <X className="h-6 w-6" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-mainText"
          >
            <Menu className="h-12 w-6" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className=" w-full flex  bg-mainBackground ">
        {children}
      </SheetContent>
    </Sheet>
  );
};
