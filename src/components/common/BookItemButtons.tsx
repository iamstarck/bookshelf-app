import { Button } from "../ui/button";

type BookItemProps = {
  isFinishRead: boolean;
};

const BookItemButtons = ({ isFinishRead }: BookItemProps) => {
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
