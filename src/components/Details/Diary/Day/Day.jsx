// Day.jsx
import css from "./Day.module.css";

export default function Day({ dayData, totalPages }) {
  const formattedDate = new Date(dayData.startReading).toLocaleDateString(
    "uk-UA",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  const pagesRead =
    dayData.finishPage != null ? dayData.finishPage - dayData.startPage : 0;

  const isActive = dayData.status === "active";
  const isFinished = dayData.status === "inactive" && dayData.finishReading;

  let totalMinutes = 0;
  if (isActive) {
    const now = new Date();
    const diffInMs = now - new Date(dayData.startReading);
    totalMinutes = Math.max(0, Math.floor(diffInMs / (1000 * 60)));
  } else if (isFinished) {
    const diffInMs =
      new Date(dayData.finishReading) - new Date(dayData.startReading);
    totalMinutes = Math.max(0, Math.floor(diffInMs / (1000 * 60)));
  }

  const progressDisplay = isActive
    ? "in progress"
    : totalPages > 0
    ? `${((pagesRead / totalPages) * 100).toFixed(1)}%`
    : "—";

  const speedDisplay = isActive
    ? "calculating..."
    : dayData.speed != null
    ? `${dayData.speed} pages per hour`
    : "—";

  return (
    <div className={css.container}>
      {/* <div className={css.first}>
      </div> */}
      <div className={css.second}>
        <div className={css.line}></div>
        <div className={css.datebox}>
          <svg className={css.box} width="20" height="20">
            <use href="/sprite.svg#block"></use>
          </svg>
          <p className={css.date}>{formattedDate}</p>
        </div>
        <p className={css.percent}>{progressDisplay}</p>
        <p className={css.time}>{totalMinutes} minutes</p>
      </div>
      <div className={css.third}>
        <p className={css.pages}>{pagesRead} pages</p>
        <div>
          <svg className={css.diagram} width="59" height="25">
            <use href="/icons/sprite.svg#icon-line-diagram"></use>
          </svg>
          <button type="button" className={css.delBtn}>
            <svg className={css.trash} width="14" height="14">
              <use href="/icons/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <p className={css.speed}>{speedDisplay}</p>
      </div>
    </div>
  );
}
