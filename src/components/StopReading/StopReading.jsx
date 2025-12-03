import { useState } from "react";
import css from "./StopReading.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectReadBook } from "../../redux/books/selectors.js"
import { stopReading } from "../../redux/books/operations.js"

export default function StopReading() {
  const dispatch = useDispatch();
  const book = useSelector(selectReadBook);
  const [page, setPage] = useState("");
  const handleChange = (evt) => {
    const page = evt.target.value;
    if (page === "" || /^\d+$/.test(page)) {
      setPage(page);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(stopReading({ id: book._id, page }));
  };
  return (
    <div className={css.container}>
      <p className={css.readingtitle}>Stop page:</p>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.pageInput}>
          <input
            type="text"
            name="page"
            value={page}
            onChange={handleChange}
            placeholder="0"
            className={css.input}
          />
          <span className={css.title} aria-hidden="true">
            Page number:
          </span>
        </div>
        <button className={css.btn} type="submit">
          To stop
        </button>
      </form>
    </div>
  );
}