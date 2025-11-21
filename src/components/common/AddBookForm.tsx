import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddBookForm = () => {
  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">Tambah Buku Baru</h2>
      <form
        id="bookForm"
        data-testid="bookForm"
        className="flex flex-col gap-2.5"
      >
        <div className="mb-4">
          <Label htmlFor="bookFormTitle" className="font-bold text-lg">
            Judul
          </Label>
          <Input
            id="bookFormTitle"
            type="text"
            required
            data-testid="bookFormTitleInput"
            className="mt-2 p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-full"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="bookFormAuthor" className="font-bold text-lg">
            Penulis
          </Label>
          <Input
            id="bookFormAuthor"
            type="text"
            required
            data-testid="bookFormAuthorInput"
            className="mt-2 p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-full"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="bookFormYear" className="font-bold text-lg">
            Tahun
          </Label>
          <Input
            id="bookFormYear"
            type="number"
            required
            data-testid="bookFormYearInput"
            min="1"
            max="2100"
            className="mt-2 p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-fit"
          />
        </div>

        <div className="flex items-center mb-4">
          <Label htmlFor="bookFormIsComplete" className="font-bold text-lg">
            Selesai dibaca
          </Label>
          <Checkbox
            id="bookFormIsComplete"
            data-testid="bookFormIsCompleteCheckbox"
            className="w-5 h-5 data-[state=checked]:bg-chart-4 data-[state=checked]:text-foreground cursor-pointer ml-2"
          />
        </div>

        <Button
          id="bookFormSubmit"
          type="submit"
          data-testid="bookFormSubmitButton"
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Masukkan Buku ke rak
        </Button>
      </form>
    </section>
  );
};

export default AddBookForm;
