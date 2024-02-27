import { create } from "zustand";

interface MobileToggleStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMobileToogle = create<MobileToggleStore>((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set({ isOpen: false }),
}));
