import { useDispatch } from "react-redux";
import css from "./Book.module.css";
import { delOwnBook } from "../../redux/books/operations.js"

export default function Book({ book }) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(delOwnBook({ id: book._id }));  
   }
  
  return (
    <div className={css.book}>
      <button type="button" className={css.imageBtn}>
        <img
          src={book?.imageUrl || "/icons/no-image-icon-23494.png"}
          alt={`${book.title} cover`}
          className={css.coverImage}
        />
      </button>
      <div className={book.recommend ? css.recommendedBook : css.ownBook}>
        <div className={book.recommend && css.textBox}>
          <h3 className={css.title}>{book.title}</h3>
          <p className={css.author}>{book.author}</p>
        </div>
        {!book.recommend && (
          <button type="button" className={css.delButton} onClick={handleDelete}>
            <svg width="14" height="14" className={css.delIcon}>
              <use href="/icons/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        )}
      </div>     
    </div>
  );
}