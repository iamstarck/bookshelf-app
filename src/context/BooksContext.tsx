import { createContext, useEffect, useState, type ReactNode } from "react";

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isFinishRead: boolean;
}

interface BooksContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => void;
  editBook: (id: number, updated: Partial<Book>) => void;
  toggleRead: (id: number) => void;
  removeBook: (id: number) => void;
}

const BooksContext = createContext<BooksContextType | null>(null);
const STORAGE_KEY = "book";

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function addBook({ title, author, year, isFinishRead }: Omit<Book, "id">) {
    setBooks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        author,
        year,
        isFinishRead,
      },
    ]);
  }

  function editBook(id: number, updated: Partial<Book>) {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...updated } : book))
    );
  }

  function toggleRead(id: number) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, isFinishRead: !book.isFinishRead } : book
      )
    );
  }

  function removeBook(id: number) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  return (
    <BooksContext.Provider
      value={{ books, addBook, editBook, toggleRead, removeBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
