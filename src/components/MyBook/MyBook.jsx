import css from "./MyBook.module.css";
import { useSelector } from "react-redux";
import { selectReadBook } from "../../redux/books//selectors.js";

export default function MyBook() {
  const book = useSelector(selectReadBook);

  return (
    <div className={css.container}>
      <h2 className={css.title}>My reading</h2>
      <div className={css.readbook}>
        <img
          width="224"
          height="340"
          src={book?.imageUrl || "/icons/no-image-icon.png"}
          alt={`${book.title} cover`}
          className={css.coverImage}
        />
        <div className={css.info}>
          <h3 className={css.booktitle}>{book.title}</h3>
          <p className={css.author}>{book.author}</p>
        </div>
        <button type="button" className={css.addBtn}>
          <svg className={css.logo} width="50" height="50">
            <use href="/icons/sprite.svg#icon-stop-record"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
