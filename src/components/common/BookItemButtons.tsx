import { useContext } from "react";
import { Button } from "../ui/button";
import BooksContext, { type Book } from "@/context/BooksContext";
import { toast } from "sonner";

const BookItemButtons = ({ id, isFinishRead, ...rest }: Book) => {
  const booksCtx = useContext(BooksContext);
  if (!booksCtx)
    throw new Error("BooksContext belum di-wrap dengan BooksProvider");

  const { toggleRead, removeBook, setEditingBook } = booksCtx;

  const onDeleteHandler = (id: number) => {
    removeBook(id);

    toast.success("Buku Berhasil dihapus!");
  };

  const onToggleHandler = (id: number) => {
    toggleRead(id);

    toast.success("Data Berhasil diperbarui!");
  };

  return (
    <div>
      {isFinishRead ? (
        <Button
          data-testid="bookItemIsCompleteButton"
          onClick={() => onToggleHandler(id)}
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Belum Dibaca
        </Button>
      ) : (
        <Button
          data-testid="bookItemIsCompleteButton"
          onClick={() => onToggleHandler(id)}
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
        onClick={() => setEditingBook({ id, isFinishRead, ...rest })}
        className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
      >
        Edit Buku
      </Button>
    </div>
  );
};

export default BookItemButtons;
