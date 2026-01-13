import css from "./ReadingPage.module.css";
import { Dashboard } from "../../components/Dashboard/Dashboard.jsx";
import AddReading from "../../components/AddReading/AddReading";
import StopReading from "../../components/StopReading/StopReading.jsx";
import Progress from "../../components/Progress/Progress";
import MyBook from "../../components/MyBook/MyBook";
import Details from "../../components/Details/Details.jsx" 
import { useSelector } from "react-redux";
import { selectReadBook } from "../../redux/books/selectors.js";

export default function ReadingPage() {
  const book = useSelector(selectReadBook);

  // if (!book) return;
  const readingStatus = book?.progress?.at(-1)?.status;
  const isReadingActive =
    readingStatus !== "inactive" && book?.progress && book.progress.length > 0;
  const isInProgress = book?.progress?.length;

  return (
    <div className={css.container}>
      <Dashboard>
        {!isReadingActive ? <AddReading /> : <StopReading />}
        {isInProgress === 0 ? <Progress /> : <Details />}
      </Dashboard>
      <MyBook />
    </div>
  );
}
