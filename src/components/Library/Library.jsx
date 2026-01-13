import css from "./Library.module.css";
import { useSelector } from "react-redux";
import { selectNewBooks } from "../../redux/books/selectors.js";
import Book from "../Book/Book.jsx";
import { useDispatch } from "react-redux";
import { fetchOwnBooks } from "../../redux/books/operations.js";
import { useEffect } from "react";
import Select from 'react-select';
import { useState } from "react";

const options = [
  { value: "Unread", label: "Unread" },
  { value: "In progress", label: "In progress" },
  { value: "Done", label: "Done" },
  { value: "All books", label: "All books" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "46px",
    borderRadius: "12px",
    backgroundColor: "#262626",
    color: "#F9F9F9",
    border: "1px solid #3e3e3e",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#3e3e3e",
    },
    fontSize: "14px",
    fontWeight: "500",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#262626",
    borderRadius: "12px",
    overflow: "hidden",
    marginTop: "4px",
    // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "#262626",
    color: state.isSelected
      ? "#F9F9F9" // вибраний
      : state.isFocused
      ? "#ffffff" // ховер
      : "#686868",
    fontWeight: state.isSelected ? "600" : "500",
    padding: "12px 16px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#F9F9F9",
    fontWeight: "500",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#F9F9F9",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#aaa",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

export default function Library() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("All books");
  const ownbooks = useSelector(selectNewBooks);
  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  const onCategoryChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("selectedOption", selectedOption);
    
  }
  return (
    <div className={css.library}>
      <div className={css.libraryHeader}>
        <h2>My library</h2>        
        <Select
          defaultValue={selectedOption}
          options={options}
          onChange={onCategoryChange}
          styles={customStyles}
        />
      </div>

      <ul className={css.bookList}>
        {ownbooks?.length > 0 ? (
          ownbooks.map((book) => (
            <li key={book._id} className={css.bookItem}>
              <Book book={book} />
            </li>
          ))
        ) : (
          <div className={css.emptyState}>
            <img
              width="130"
              height="130"
              src="/icons/bookDefault.png"
              alt="No books"
            />
            <p className={css.text}>
              To start training, add{" "}
              <span className={css.spantext}>some of your books</span> or from
              the recommended ones.
            </p>
          </div>
        )}
      </ul>
    </div>
  );
}

