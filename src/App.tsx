import { Toaster } from "sonner";
import AddBookForm from "./components/common/AddBookForm";
import BookList from "./components/common/BookList";
import FindBook from "./components/common/FindBook";
import HeaderCustom from "./components/common/HeaderCustom";

function App() {
  return (
    <div className="flex flex-col items-center bg-primary">
      <HeaderCustom />

      <main className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 w-[80%]">
        <AddBookForm />
        <FindBook />

        <BookList title="Belum Selesai Dibaca" listId="incompleteBookList" />

        <BookList title="Sudah Selesai Dibaca" listId="completeBookList" />
      </main>

      <Toaster />
    </div>
  );
}

export default App;
