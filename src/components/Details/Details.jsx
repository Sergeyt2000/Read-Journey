import css from "./Details.module.css";
import Diary from "./Diary/Diary";
import Statistics from "./Statistics/Statistics";
import { useSelector } from "react-redux";
import { selectReadBook } from "../../redux/books/selectors.js";
import { useState } from "react";

export default function Details() {
  const book = useSelector(selectReadBook);
  const [activeTab, setActiveTab] = useState("diary");

  return (
    <div className={css.container}>
      <div className={css.header}>
        {activeTab === "diary" && <h2 className={css.title}>Diary</h2>}
        {activeTab === "statistics" && (
          <h2 className={css.title}>Statistics</h2>
        )}
        <div className={css.iconBtns}>
          <button
            type="button"
            className={css.tabBtn}
            onClick={() => setActiveTab("diary")}
          >
            <svg
              className={`${css.icon} ${
                activeTab === "diary" ? css.active : ""
              }`}
              width="20"
              height="20"
            >
              <use href="/icons/sprite.svg#icon-hourglass"></use>
            </svg>
          </button>
          <button
            type="button"
            className={css.tabBtn}
            onClick={() => setActiveTab("statistics")}
          >
            <svg
              className={`${css.icon} ${
                activeTab === "statistics" ? css.active : ""
              }`}
              width="20"
              height="20"
            >
              <use href="/icons/sprite.svg#icon-diary"></use>
            </svg>
          </button>
        </div>
      </div>
      {activeTab === "diary" && (
        <Diary progress={book.progress} totalPages={book.totalPages} />
      )}
      {activeTab === "statistics" && (
        <Statistics progress={book.progress} totalPages={book.totalPages} />
      )}
    </div>
  );
}
