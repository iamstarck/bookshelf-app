import type { Book } from "@/books/store/useBooksStore";
import BookItemButtons from "./BookItemButtons";

const BookItem = ({ id, title, author, year, isFinishRead }: Book) => {
  return (
    <div
      data-bookid={id}
      data-testid="bookItem"
      className="my-4 mx-auto p-4 bg-chart-3 border-l-6 border-chart-4"
    >
      <h3 data-testid="bookItemTitle" className="text-2xl font-semibold mb-1.5">
        {title}
      </h3>
      <p data-testid="bookItemAuthor">Penulis: {author}</p>
      <p data-testid="bookItemYear">Tahun: {year}</p>

      <BookItemButtons
        id={id}
        title={title}
        author={author}
        year={year}
        isFinishRead={isFinishRead}
      />
    </div>
  );
};

export default BookItem;
