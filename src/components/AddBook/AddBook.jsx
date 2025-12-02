import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./AddBook.module.css";
import { addNewBook } from "../../redux/books/operations.js";
import AddBookModal from "../AddBookModal/AddBookModal.jsx"

export default function AddBook() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); 
  const [form, setForm] = useState({
    title: "",
    author: "",
    totalPages: "",
  });
  const handleAdd = (e) => {
    e.preventDefault();
    const payload = {
      title: form.title,
      author: form.author,
      totalPages: Number(form.totalPages),
    };
    dispatch(addNewBook(payload));
    setShowModal(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <div className={css.filtersBox}>
      <p className={css.filterstitle}>Create your library:</p>
      <form className={css.form}>
        <div className={`${css.filter} ${css.leftPadding1}`}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title} aria-hidden="true">
            Book title:
          </span>
        </div>
        <div className={`${css.filter} ${css.leftPadding2}`}>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title}>The author:</span>
        </div>
        <div className={`${css.filter} ${css.leftPadding3}`}>
          <input
            type="text"
            name="totalPages"
            value={form.totalPages}
            onChange={handleChange}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title}>Number of pages:</span>
        </div>
        <button className={css.btn} onClick={handleAdd} type="button">
          Add book
        </button>
      </form>
      {showModal === true && <AddBookModal setShowModal={setShowModal} />}
    </div>
  );
}
