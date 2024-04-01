"use client";

import { Menu, X } from "lucide-react";
import { IoMdMenu } from "react-icons/io";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SlMenu } from "react-icons/sl";

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
          <Button variant="ghost" size="icon" className="lg:hidden ">
            <X className="h-12 w-6 text-mainText" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-mainText"
          >
            <SlMenu className="h-16 w-6 text-mainText" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className=" w-full flex  bg-mainBackground ">
        {children}
      </SheetContent>
    </Sheet>
  );
};
