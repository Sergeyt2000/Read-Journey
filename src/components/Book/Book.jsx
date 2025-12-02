import { useDispatch } from "react-redux";
import css from "./Book.module.css";
import { delOwnBook } from "../../redux/books/operations.js"
import { useState } from "react";
import Modal from "../Modal/Modal.jsx";

export default function Book({ book }) {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(delOwnBook(book._id));  
  }
  const [showModal, setShowModal] = useState(false); 
  const handleModal = () => {
    setShowModal(true);
   }
  
  return (
    <div>
      <div className={css.book}>
        <button type="button" className={css.imageBtn} onClick={handleModal}>
          <img
            src={book?.imageUrl || "/icons/no-image-icon-23494.png"}
            alt={`${book.title} cover`}
            className={css.coverImage}
          />
        </button>
        <div className={book.recommend ? css.recommendedBook : css.ownBook}>
          <div className={book.recommend ? css.textBox : ""}>
            <h3 className={css.title}>{book.title}</h3>
            <p className={css.author}>{book.author}</p>
          </div>
          {!book.recommend && (
            <button
              type="button"
              className={css.delButton}
              onClick={handleDelete}
            >
              <svg width="14" height="14" className={css.delIcon}>
                <use href="/icons/sprite.svg#icon-trash"></use>
              </svg>
            </button>
          )}
        </div>
      </div>
      {showModal === true && <Modal book={book} setShowModal={setShowModal} />}
    </div>
  );
}