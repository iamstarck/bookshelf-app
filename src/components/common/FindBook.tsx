import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FindBook = () => {
  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">Cari Buku</h2>
      <form
        id="searchBook"
        data-testid="searchBookForm"
        className="flex flex-col gap-2.5"
      >
        <Label htmlFor="searchBookTitle" className="font-bold text-lg">
          Judul
        </Label>
        <Input
          id="searchBookTitle"
          type="text"
          data-testid="searchBookFormTitleInput"
          className="mt-2 p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-full"
        />
        <Button
          id="searchSubmit"
          type="submit"
          data-testid="searchBookFormSubmitButton"
          className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
        >
          Cari
        </Button>
      </form>
    </section>
  );
};

export default FindBook;
