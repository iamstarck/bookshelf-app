import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isFinishRead: boolean;
}

interface BooksState {
  books: Book[];
  search: string;
  editingBook: Book | null;
  addBook: (book: Omit<Book, "id">) => void;
  editBook: (id: number, updated: Partial<Book>) => void;
  toggleRead: (id: number) => void;
  removeBook: (id: number) => void;
  setSearch: (query: string) => void;
  setEditingBook: (book: Book | null) => void;
}

export const useBooksStore = create<BooksState>()(
  persist(
    (set) => ({
      books: [],
      search: "",
      editingBook: null,

      addBook: (book) =>
        set((state) => ({
          books: [...state.books, { id: Date.now(), ...book }],
        })),

      editBook: (id, updated) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === id ? { ...book, ...updated } : book
          ),
        })),

      toggleRead: (id) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === id
              ? { ...book, isFinishRead: !book.isFinishRead }
              : book
          ),
        })),

      removeBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
        })),

      setSearch: (query) => set({ search: query }),
      setEditingBook: (book) => set({ editingBook: book }),
    }),

    {
      name: "book-storage",
    }
  )
);

export const useFilteredBooks = () => {
  const books = useBooksStore((book) => book.books);
  const search = useBooksStore((book) => book.search);

  const query = search.toLowerCase();

  return books.filter((book) => book.title.toLowerCase().includes(query));
};
