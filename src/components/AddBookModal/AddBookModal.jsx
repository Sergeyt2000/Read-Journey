import css from "./AddBookModal.module.css";
import { useEffect } from "react";

export default function AddBookModal({ setShowModal }) {
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

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modalContainer}>
        <button type="button" className={css.closeBtn} onClick={handleClose}>
          <svg className={css.closeIco} width="22" height="22">
            <use href="/icons/sprite.svg#icon-close-menu"></use>
          </svg>
        </button>
        <img
          width="70"
          height="70"
          src={"/icons/ok.png"}
          alt={`Success`}
          className={css.coverImage}
        />
        <h3 className={css.title}>Good job</h3>
        <p className={css.text}>
          Your book is now in <span className={css.spantext}>the library!</span>{" "}
          The joy knows no bounds and now you can start your training
        </p>
      </div>
    </div>
  );
}
