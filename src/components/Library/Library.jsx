import css from "./Library.module.css";
import { useSelector } from "react-redux";
import { selectNewBooks } from "../../redux/books/selectors.js";
import Book from "../Book/Book.jsx";
import { useDispatch } from "react-redux";
import { fetchOwnBooks } from "../../redux/books/operations.js";
import { useEffect } from "react";

export default function Library() {
  const dispatch = useDispatch();
  const ownbooks = useSelector(selectNewBooks);
  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  return (
    <div className={css.library}>
          <div className={css.libraryHeader}>
          <h2>My library</h2>
          <select>
            <option value="all">All</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
      </div>

      <ul className={css.bookList}>
        {ownbooks?.length > 0 ? (
          ownbooks.map((book) => (
            <li key={book._id} className={css.bookItem}>
              <Book book={book} />
            </li>
          ))
        ) : (
          <div className={css.emptyState}>
            <img
              width="70"
              height="70"
              src="/icons/bookDefault.png"
              alt="No books"
            />
            {/* <span className={css.booksLogo}>Книга</span> */}
            <p className={css.text}>
              To start training, add some of your books or from the recommended
              ones.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
}

{
  /* <svg className={css.logo} width="42" height="17">
        <use href="/icons/sprite.svg#icon-book"></use>
      </svg> */
}
