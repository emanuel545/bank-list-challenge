import { create } from 'zustand';

const useStore = create((set) => ({
  banks: [],
  originalBanks: [],
  sorted: false, 
  setBanks: (banks) => set({ banks, originalBanks: banks }),
  removeBank: (index) =>
    set((state) => ({
      banks: state.banks.filter((_, i) => i !== index),
    })),
  searchBanks: (searchTerm) =>
    set((state) => ({
      banks: searchTerm
        ? state.originalBanks.filter((bank) =>
            bank.bankName.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : state.originalBanks,
    })),
  sortBanks: () =>
    set((state) => ({
      banks: state.sorted
        ? state.originalBanks
        : [...state.banks].sort((a, b) =>
            a.bankName.localeCompare(b.bankName)
          ),
      sorted: !state.sorted, 
    })),
  resetBanks: () =>
    set((state) => ({
      banks: state.originalBanks,
      sorted: false, 
    })),
}));

export default useStore;