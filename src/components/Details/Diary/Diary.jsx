import css from "./Diary.module.css";
import Day from "./Day/Day";

export default function Diary({ progress, totalPages, bookId }) {
  return (
    <div className={css.container}>
      <div className={css.diary}>
        <ul className={css.list}>
          {progress?.toReversed().map((day) => (
            <li key={new Date(day.startReading).getTime()}>
              <Day dayData={day} totalPages={totalPages} bookId={bookId} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
