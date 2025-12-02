import css from "./Modal.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBookFromRecommended } from "../../redux/books/operations.js";

export default function Modal({ book, setShowModal }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShowModal(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [setShowModal]);

  const handleAddFav = () => {
    dispatch(addBookFromRecommended({ id: book._id }));
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modalContainer}>
        <button type="button" className={css.closeBtn} onClick={handleClose}>
          <svg className={css.closeIco} width="22" height="22">
            <use href="/icons/sprite.svg#icon-close-menu"></use>
          </svg>
        </button>
        <img
          src={book?.imageUrl || "/icons/no-image-icon-23494.png"}
          alt={`${book.title} cover`}
          className={css.coverImage}
        />
        <h3 className={css.title}>{book.title}</h3>
        <p className={css.author}>{book.author}</p>
        <p className={css.totalPages}>{book.totalPages} pages</p>
        <button type="button" className={css.addBtn} onClick={handleAddFav}>
          Add to library
        </button>
      </div>
    </div>
  );
}
