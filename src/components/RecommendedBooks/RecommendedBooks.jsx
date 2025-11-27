import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/books/operations.js";
import css from "./RecommendedBooks.module.css";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectAllBooksData,
} from "../../redux/books/selectors.js";
import Book from "../Book/Book.jsx";
import { setPage } from "../../redux/books/slice.js";

export default function RecommendedBooks() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const { page, totalPages } = useSelector(selectAllBooksData);
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;
  const prevpage = () => {
    dispatch(setPage((Math.max(1, page - 1))));
  };
  const nextpage = () => {
    dispatch(setPage((Math.min(totalPages, page + 1))));
  };

  useEffect(() => {
    dispatch(fetchBooks({ page }));
  }, [dispatch, page]);
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>Recommended</h2>
        <div>
          <button type="button" onClick={prevpage} disabled={isFirstPage}>
            ←
          </button>
          <button type="button" onClick={nextpage} disabled={isLastPage}>
            →
          </button>
        </div>
      </div>
      <ul className={css.bookList}>
        {books.map((book) => (
          <li key={book._id} className={css.bookItem}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}
