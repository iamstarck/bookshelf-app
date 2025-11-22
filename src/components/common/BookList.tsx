import BooksContext from "@/context/BooksContext";
import { useContext } from "react";
import BookItem from "./BookItem";

type BookListProps = {
  title: string;
  listId: string;
};

const BookList = ({ title, listId }: BookListProps) => {
  const booksCtx = useContext(BooksContext);
  if (!booksCtx)
    throw new Error("BooksContext belum di-wrap dengan BooksProvider");

  const { books } = booksCtx;

  const filteredBooks =
    listId === "incompleteBookList"
      ? books.filter((book) => !book.isFinishRead)
      : books.filter((book) => book.isFinishRead);

  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div id={listId} data-testid={listId}>
        {filteredBooks.length === 0 ? (
          <p className="text-sm text-muted-foreground">Belum ada buku</p>
        ) : (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              isFinishRead={book.isFinishRead}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BookList;
