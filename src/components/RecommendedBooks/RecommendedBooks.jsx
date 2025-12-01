import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../redux/books/operations.js";
import css from "./RecommendedBooks.module.css";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectAllBooksData,
  selectBookFilter,
} from "../../redux/books/selectors.js";
import Book from "../Book/Book.jsx";
import { setPage } from "../../redux/books/slice.js";

export default function RecommendedBooks() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const { page, totalPages } = useSelector(selectAllBooksData);
  const { author, title } = useSelector(selectBookFilter);
  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;
  const prevpage = () => {
    dispatch(setPage(Math.max(1, page - 1)));
  };
  const nextpage = () => {
    dispatch(setPage(Math.min(totalPages, page + 1)));
  };

  useEffect(() => {
    dispatch(fetchBooks({ page, author, title }));
  }, [dispatch, page, author, title]);
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>Recommended</h2>
        <div className={css.arrowbtns}>
          <button type="button" className={css.btn} onClick={prevpage} disabled={isFirstPage}>
            <svg className={css.arrow} width="20" height="20">
              <use href="/icons/sprite.svg#icon-prev"></use>
            </svg>
          </button>
          <button type="button" className={css.btn} onClick={nextpage} disabled={isLastPage}>
            <svg className={css.arrow} width="20" height="20">
              <use href="/icons/sprite.svg#icon-next"></use>
            </svg>
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
