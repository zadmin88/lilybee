"use client";

import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="p-0 w-full flex gap-0 ">
        {children}
      </SheetContent>
    </Sheet>
  );
};
