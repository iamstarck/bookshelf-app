import { useBooksStore, type Book } from "@/books/store/useBooksStore";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const BookItemButtons = ({ id, isFinishRead, ...rest }: Book) => {
  const toggleRead = useBooksStore((s) => s.toggleRead);
  const removeBook = useBooksStore((s) => s.removeBook);
  const setEditingBook = useBooksStore((s) => s.setEditingBook);

  const onDeleteHandler = (id: number) => {
    removeBook(id);

    toast.success("Book has been removed.");
  };

  const onToggleHandler = (id: number) => {
    toggleRead(id);

    toast.success("Status updated.");
  };

  return (
    <div>
      {isFinishRead ? (
        <Button
          data-testid="bookItemIsCompleteButton"
          onClick={() => onToggleHandler(id)}
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Mark as Unread
        </Button>
      ) : (
        <Button
          data-testid="bookItemIsCompleteButton"
          onClick={() => onToggleHandler(id)}
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Mark as FInished
        </Button>
      )}
      <Button
        data-testid="bookItemDeleteButton"
        onClick={() => onDeleteHandler(id)}
        className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
      >
        Delete Book
      </Button>
      <Button
        data-testid="bookItemEditButton"
        onClick={() => setEditingBook({ id, isFinishRead, ...rest })}
        className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
      >
        Edit Book
      </Button>
    </div>
  );
};

export default BookItemButtons;
