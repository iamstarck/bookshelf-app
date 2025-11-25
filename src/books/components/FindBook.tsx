import { useBooksStore } from "@/books/store/useBooksStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const FindBook = () => {
  const setSearch = useBooksStore((state) => state.setSearch);
  const { register, handleSubmit } = useForm<{ title: string }>();

  const onSubmitHandler = ({ title }: { title: string }) => {
    setSearch(title);

    const results = useBooksStore
      .getState()
      .books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );

    if (results.length === 0) {
      toast.error("Buku tidak ditemukan!");
    }
  };

  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">Cari Buku</h2>
      <form
        id="searchBook"
        data-testid="searchBookForm"
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-2.5"
      >
        <Label htmlFor="searchBookTitle" className="font-bold text-lg">
          Judul
        </Label>
        <Input
          id="searchBookTitle"
          type="text"
          {...register("title", {
            onChange: (e) => setSearch(e.target.value),
          })}
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
