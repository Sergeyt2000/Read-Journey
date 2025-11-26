import { useState } from "react";
import css from "./FiltersBox.module.css";

export default function FiltersBox() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const applyFilters = () => {
    // тут передаєте значення десь далі або виконуєте запит
    console.log("Apply filters:", { title, author });
  };

  //   const clearFilters = () => {
  //     setTitle("");
  //     setAuthor("");
  //   };

  return (
    <div className={css.filtersBox}>
      <form className={css.form}>
        <div className={css.filter}>
          {/* <label htmlFor="title">Book title</label> */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title} aria-hidden="true">
            Book title:
          </span>
        </div>
        <div className={css.filter}>
          {/* <label htmlFor="author">The author</label> */}
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title}>The author:</span>
        </div>
        <button className={css.btn} onClick={applyFilters}>To apply</button>
        {/* <button onClick={clearFilters}>Clear</button> */}
      </form>
    </div>
  );
}
