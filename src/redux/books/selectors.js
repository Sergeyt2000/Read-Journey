export const selectBooks = (state) => state.books.books.results;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectAllBooksData = (state) => state.books.books;
export const selectBookFilter = (state) => state.books.filter;
export const selectNewBooks = (state) => state.books.newBooks;
export const selectReadBook = (state) => state.books.readBook;