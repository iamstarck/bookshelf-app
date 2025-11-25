import { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBooksStore } from "@/books/store/useBooksStore";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../../components/ui/field";
import { CircleAlertIcon } from "lucide-react";
import { toast } from "sonner";

const bookSchema = z.object({
  title: z.string().min(1, { error: "Judul wajib diisi" }),
  author: z.string().min(1, { error: "Penulis wajib diisi" }),
  year: z.number().min(1, "Tahun minimal 1").max(2100, "Tahun maksimal 2100"),
  isFinishRead: z.boolean(),
});

type BooksFormValues = z.infer<typeof bookSchema>;

const AddBookForm = () => {
  const addBook = useBooksStore((s) => s.addBook);
  const editBook = useBooksStore((s) => s.editBook);
  const editingBook = useBooksStore((s) => s.editingBook);
  const setEditingBook = useBooksStore((s) => s.setEditingBook);

  const defaultValues: BooksFormValues = {
    title: "",
    author: "",
    year: 0,
    isFinishRead: false,
  };

  const form = useForm<BooksFormValues>({
    resolver: zodResolver(bookSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (editingBook) {
      reset(editingBook);
    }
  }, [editingBook, reset]);

  const onSubmitHandler = (data: BooksFormValues) => {
    if (editingBook) {
      editBook(editingBook.id, data);
      setEditingBook(null);
    } else {
      addBook(data);
    }

    reset(defaultValues);
    toast.success("Book has been saved.");
  };

  return (
    <section className="bg-card-foreground mb-4 lg:mb-0 p-6 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-2xl font-semibold mb-4">Add New Book</h2>
      <form data-testid="bookForm" onSubmit={handleSubmit(onSubmitHandler)}>
        <FieldSet>
          <FieldGroup>
            <Field data-invalid={!!errors.title} className="mb-4">
              <FieldLabel htmlFor="bookFormTitle" className="font-bold text-lg">
                Title
              </FieldLabel>
              <Input
                id="bookFormTitle"
                type="text"
                {...register("title")}
                data-testid="bookFormTitleInput"
                className="p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-full"
              />
              {errors.title && (
                <FieldError className="inline-flex items-center gap-1">
                  <CircleAlertIcon size="14px" /> {errors.title.message}
                </FieldError>
              )}
            </Field>

            <Field data-invalid={!!errors.title} className="mb-4">
              <FieldLabel
                htmlFor="bookFormAuthor"
                className="font-bold text-lg"
              >
                Author
              </FieldLabel>
              <Input
                id="bookFormAuthor"
                type="text"
                {...register("author")}
                data-testid="bookFormAuthorInput"
                className="p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-full"
              />
              {errors.author && (
                <FieldError className="inline-flex items-center gap-1">
                  <CircleAlertIcon size="14px" /> {errors.author.message}
                </FieldError>
              )}
            </Field>

            <Field data-invalid={!!errors.year} className="mb-4">
              <FieldLabel htmlFor="bookFormYear" className="font-bold text-lg">
                Year
              </FieldLabel>
              <Input
                id="bookFormYear"
                type="number"
                {...register("year", { valueAsNumber: true })}
                data-testid="bookFormYearInput"
                className="p-2 border-none outline-none rounded-sm text-base font-medium bg-background text-foreground w-fit"
              />
              {errors.year && (
                <FieldError className="inline-flex items-center gap-1">
                  <CircleAlertIcon size="14px" /> {errors.year.message}
                </FieldError>
              )}
            </Field>

            <div className="flex items-center mb-4">
              <FieldLabel
                htmlFor="bookFormIsComplete"
                className="font-bold text-lg"
              >
                Already Finished?
              </FieldLabel>
              <Controller
                name="isFinishRead"
                control={form.control}
                render={({ field }) => (
                  <Checkbox
                    id="bookFormIsComplete"
                    data-testid="bookFormIsCompleteCheckbox"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="w-5 h-5 data-[state=checked]:bg-chart-4 data-[state=checked]:text-foreground cursor-pointer ml-2"
                  />
                )}
              />
            </div>

            <Button
              id="bookFormSubmit"
              type="submit"
              data-testid="bookFormSubmitButton"
              className="text-base bg-chart-4 text-foreground py-2.5 px-5 border-none m-1 hover:scale-105 hover:bg-chart-2"
            >
              Put on the shelf
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </section>
  );
};

export default AddBookForm;
