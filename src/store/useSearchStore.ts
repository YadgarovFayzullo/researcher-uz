import { create } from "zustand";

interface SearchState {
  query: string;
  results: any[];
  setQuery: (query: string) => void;
  search: () => Promise<void>;
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  results: [],

  setQuery: (query) => set({ query }),

  search: async () => {
    const query = get().query; 
    if (!query) return;

    try {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      set({ results: data.hits });
    } catch (error) {
      console.error("Ошибка при поиске:", error);
    }
  },
}));
