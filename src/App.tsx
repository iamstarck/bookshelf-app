function App() {
  return (
    <>
      <header>
        <h1>Bookshelf App</h1>
      </header>

      <main>
        <section>
          <h2>Tambah Buku Baru</h2>
          <form id="bookForm" data-testid="bookForm">
            <div>
              <label htmlFor="bookFormTitle">Judul</label>
              <input
                id="bookFormTitle"
                type="text"
                required
                data-testid="bookFormTitleInput"
              />
            </div>
            <div>
              <label htmlFor="bookFormAuthor">Penulis</label>
              <input
                id="bookFormAuthor"
                type="text"
                required
                data-testid="bookFormAuthorInput"
              />
            </div>
            <div>
              <label htmlFor="bookFormYear">Tahun</label>
              <input
                id="bookFormYear"
                type="number"
                required
                data-testid="bookFormYearInput"
                min="1"
                max="2100"
              />
            </div>
            <div>
              <label htmlFor="bookFormIsComplete">Selesai dibaca</label>
              <input
                id="bookFormIsComplete"
                type="checkbox"
                data-testid="bookFormIsCompleteCheckbox"
              />
            </div>
            <button
              id="bookFormSubmit"
              type="submit"
              data-testid="bookFormSubmitButton"
            >
              Masukkan Buku ke rak <span>Belum selesai dibaca</span>
            </button>
          </form>
        </section>

        <section>
          <h2>Cari Buku</h2>
          <form id="searchBook" data-testid="searchBookForm">
            <label htmlFor="searchBookTitle">Judul</label>
            <input
              id="searchBookTitle"
              type="text"
              data-testid="searchBookFormTitleInput"
            />
            <button
              id="searchSubmit"
              type="submit"
              data-testid="searchBookFormSubmitButton"
            >
              Cari
            </button>
          </form>
        </section>

        <section>
          <h2>Belum selesai dibaca</h2>

          <div id="incompleteBookList" data-testid="incompleteBookList"></div>
        </section>

        <section>
          <h2>Selesai dibaca</h2>

          <div id="completeBookList" data-testid="completeBookList"></div>
        </section>
      </main>
    </>
  );
}

export default App;
