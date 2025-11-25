import AddBookForm from "./books/components/AddBookForm";
import BookList from "./books/components/BookList";
import FindBook from "./books/components/FindBook";
import HeaderCustom from "./components/layout/HeaderCustom";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col items-center bg-primary md:my-4">
      <HeaderCustom />

      <main className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 w-[80%]">
        <AddBookForm />
        <FindBook />

        <BookList title="Belum Selesai Dibaca" listId="incompleteBookList" />

        <BookList title="Sudah Selesai Dibaca" listId="completeBookList" />
      </main>

      <Toaster richColors position="top-center" />
    </div>
  );
}

export default App;
