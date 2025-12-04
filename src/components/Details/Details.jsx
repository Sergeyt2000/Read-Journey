import css from "./Details.module.css"
import Diary from "./Diary/Diary";
import Statistics from "./Statistics/Statistics"
import { useSelector } from "react-redux";
import { selectReadBook } from "../../redux/books/selectors.js"

export default function Details() {
    const book = useSelector(selectReadBook);
    console.log("book", book);
    
    return (
      <div className={css.container}>
        {/* <Diary progress={book.progress} totalPages={book.totalPages} /> */}
        <Statistics progress={book.progress} totalPages={book.totalPages} />
      </div>
    );
}