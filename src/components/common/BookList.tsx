type BookListProps = {
  title: string;
  listId: string;
};

const BookList = ({ title, listId }: BookListProps) => {
  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>

      <div id={listId} data-testid={listId}></div>
    </section>
  );
};

export default BookList;
