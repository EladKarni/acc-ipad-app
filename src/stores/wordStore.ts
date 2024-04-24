import { create } from 'zustand'

export interface wordState {
    words: string[];
    addWordToEnd: (word: string) => void;
    removeWordFromEnd: (word: string[]) => void;
    clearWords: () => void;
}

export const useWordStore = create<wordState>()((set) => ({
    words: ["Like", "This", "Bad"],
    addWordToEnd: (word: string) => set((state) => ({ words: [...state.words, word] })),
    removeWordFromEnd: (words: string[]) => set(() => ({ words: words.slice(0, -1) })),
    clearWords: () => set({ words: [] }),
}))