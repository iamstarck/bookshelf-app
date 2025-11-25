// import { createContext, useEffect, useState, type ReactNode } from "react";
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

// interface BooksContextType {
//   books: Book[];
//   addBook: (book: Omit<Book, "id">) => void;
//   editBook: (id: number, updated: Partial<Book>) => void;
//   editBook: (id: number, updated: Partial<Book>) => void;
//   toggleRead: (id: number) => void;
//   removeBook: (id: number) => void;
//   editingBook: Book | null;
//   setEditingBook: (book: Book | null) => void;
// }

export const useBooksStore = create<BooksState>()(
  persist(
    (set, get) => ({
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

// const BooksContext = createContext<BooksContextType | null>(null);
// const STORAGE_KEY = "book";

// export const BooksProvider = ({ children }: { children: ReactNode }) => {
//   const [books, setBooks] = useState<Book[]>(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);

//     return saved ? JSON.parse(saved) : [];
//   });

//   const [editingBook, setEditingBook] = useState<Book | null>(null);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
//   }, [books]);

//   function addBook({ title, author, year, isFinishRead }: Omit<Book, "id">) {
//     setBooks((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         title,
//         author,
//         year,
//         isFinishRead,
//       },
//     ]);
//   }

//   function editBook(id: number, updated: Partial<Book>) {
//     setBooks((prev) =>
//       prev.map((book) => (book.id === id ? { ...book, ...updated } : book))
//     );
//   }

//   function toggleRead(id: number) {
//     setBooks((prev) =>
//       prev.map((book) =>
//         book.id === id ? { ...book, isFinishRead: !book.isFinishRead } : book
//       )
//     );
//   }

//   function removeBook(id: number) {
//     setBooks((prev) => prev.filter((book) => book.id !== id));
//   }

//   return (
//     <BooksContext.Provider
//       value={{
//         books,
//         addBook,
//         editBook,
//         toggleRead,
//         removeBook,
//         editingBook,
//         setEditingBook,
//       }}
//     >
//       {children}
//     </BooksContext.Provider>
//   );
// };

// export default BooksContext;
