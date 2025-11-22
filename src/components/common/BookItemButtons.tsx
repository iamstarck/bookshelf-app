import { useContext } from "react";
import { Button } from "../ui/button";
import BooksContext from "@/context/BooksContext";
import { toast } from "sonner";

type BookItemProps = {
  id: number;
  isFinishRead: boolean;
};

const BookItemButtons = ({ id, isFinishRead }: BookItemProps) => {
  const booksCtx = useContext(BooksContext);
  if (!booksCtx)
    throw new Error("BooksContext belum di-wrap dengan BooksProvider");

  const { removeBook } = booksCtx;

  const onDeleteHandler = (id: number) => {
    removeBook(id);

    toast.success("Buku Berhasil dihapus!");
  };

  return (
    <div>
      {isFinishRead ? (
        <Button
          data-testid="bookItemIsCompleteButton"
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Belum Dibaca
        </Button>
      ) : (
        <Button
          data-testid="bookItemIsCompleteButton"
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Sudah Dibaca
        </Button>
      )}
      <Button
        data-testid="bookItemDeleteButton"
        onClick={() => onDeleteHandler(id)}
        className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
      >
        Hapus Buku
      </Button>
      <Button
        data-testid="bookItemEditButton"
        className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
      >
        Edit Buku
      </Button>
    </div>
  );
};

export default BookItemButtons;
