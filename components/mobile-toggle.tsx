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
          <Button variant="ghost" size="icon" className="lg:hidden">
            <X />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full flex gap-0 ">
        {children}
      </SheetContent>
    </Sheet>
  );
};
