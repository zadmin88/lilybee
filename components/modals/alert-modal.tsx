"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Thank you!"
      description="Your message has been sent successfully. I will get back to you as soon as possible."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 px-8 w-full space-x-2 flex items-center justify-end ">
        <Button disabled={loading} onClick={onConfirm} className="w-full">
          Continue
        </Button>
      </div>
    </Modal>
  );
};
