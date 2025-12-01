import { useState } from "react";
import css from "./FiltersBox.module.css";
// import { useSelector } from "react-redux";
// import { selectBookFilter } from "../../redux/books/selectors.js";
import { setAuthorFilter, setTitleFilter } from "../../redux/books/slice.js";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/books/slice.js";

export default function FiltersBox() {
  const [localTitle, setLocalTitle] = useState("");
  const [localAuthor, setLocalAuthor] = useState("");
  
  //   const clearFilters = () => {
  //     setTitle("");
  //     setAuthor("");
  //   };

  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(setTitleFilter(localTitle));
    dispatch(setAuthorFilter(localAuthor));
    dispatch(setPage(1));
  };

  // const { title, author } = useSelector(selectBookFilter);
  // console.log('title, author',title, author);
  

  return (
    <div className={css.filtersBox}>
      <form className={css.form}>
        <div className={css.filter}>
          {/* <label htmlFor="title">Book title</label> */}
          <input
            type="text"
            // value={title}
            onChange={(e) => setLocalTitle(e.target.value)}
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
            // value={author}
            onChange={(e) => setLocalAuthor(e.target.value)}
            placeholder="Enter text"
            className={css.input}
          />
          <span className={css.title}>The author:</span>
        </div>
        <button className={css.btn} onClick={handleApply} type="button">
          To apply
        </button>
        {/* <button onClick={clearFilters}>Clear</button> */}
      </form>
    </div>
  );
}
