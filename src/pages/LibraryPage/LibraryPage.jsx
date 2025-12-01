import { Dashboard } from "../../components/Dashboard/Dashboard";
import css from "./LibraryPage.module.css";
import AddBook from "../../components/AddBook/AddBook.jsx";
import Library from "../../components/Library/Library.jsx";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks.jsx";

export default function LibraryPage() {
  return (
    <div className={css.container}>
      <Dashboard>
        <AddBook />
        {/* <RecommendedBooks /> */}
      </Dashboard>
      <Library />
    </div>
  );
}
