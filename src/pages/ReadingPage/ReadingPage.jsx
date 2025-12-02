import css from "./ReadingPage.module.css"
import { Dashboard } from "../../components/Dashboard/Dashboard.jsx";
import AddReading from "../../components/AddReading/AddReading";
import Progress from "../../components/Progress/Progress"
import MyBook from "../../components/MyBook/MyBook"

export default function ReadingPage() {
    return (
      <div className={css.container}>
        <Dashboard>
          <AddReading />
          <Progress />
        </Dashboard>
        <MyBook />
      </div>
    );
 }


//  const handelAddToRead = () => {
//    dispatch(addReadBook({ id }));
//    navigate("/reading");
//  };