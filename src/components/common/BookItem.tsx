import BookItemButtons from "./BookItemButtons";

interface BookItemProps {
  id: number;
  title: string;
  author: string;
  year: number;
  isFinishRead: boolean;
}

const BookItem = ({ id, title, author, year, isFinishRead }: BookItemProps) => {
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

      <BookItemButtons id={id} isFinishRead={isFinishRead} />
    </div>
  );
};

export default BookItem;
