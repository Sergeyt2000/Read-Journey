import css from "./Diary.module.css";
import Day from "./Day/Day";

export default function Diary({ progress, totalPages }) {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.title}>Diary</h2>
        <div className={css.iconBtns}>
          <button type="button" className={css.btn}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/sprite.svg#icon-hourglass"></use>
            </svg>
          </button>
          <button type="button" className={css.btn}>
            <svg className={css.icon} width="20" height="20">
              <use href="/icons/sprite.svg#icon-diary"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.diary}>
        <ul className={css.list}>
          {progress.map((day) => (
            <li key={new Date(day.startReading)}>
              <Day dayData={day} totalPages={totalPages} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
