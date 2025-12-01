import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./AddBook.module.css";
import { addNewBook } from "../../redux/books/operations.js";

export default function AddBook() {
    const dispatch = useDispatch();
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
      console.log("payload", payload);
      dispatch(addNewBook(payload));
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
          {/* <label htmlFor="title">Book title</label> */}
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
          {/* <label htmlFor="author">The author</label> */}
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
          {/* <label htmlFor="author">The author</label> */}
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
    </div>
  );
}
