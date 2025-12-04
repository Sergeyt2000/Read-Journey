import css from "./Statistics.module.css";

export default function Statistics({ progress, totalPages }) {
  const pagesRead = progress?.at(-1)?.finishPage || progress?.at(-1)?.startPage || 0;
  const percent = totalPages ? ((pagesRead / totalPages) * 100).toFixed(1) : 0;

  // Обчислюємо dashoffset для прогресу (окружність ≈ 289px)
  const radius = 44;
  const circumference = 2 * Math.PI * radius; // радіус = 44
  const offset = circumference - (percent / 100) * circumference;
  return (
    <div className={css.container}>
      <p className={css.text}>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </p>     
        <div className={css.progressWrapper}>
          {/* Круговий прогрес */}
          <svg
            className={css.circularProgress}
            viewBox="0 0 100 100"
            width="168"
            height="168"
          >
            {/* Фонова доріжка */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#1f1f1f"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Прогрес */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#30b94d"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 50 50)" // починаємо з 12 годин
            />
            {/* Відсоток у центрі */}
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dy="0"
              className={css.percentText}
            >
              {percent}%
            </text>
          </svg>

          {/* Логотипи та текст під прогресом */}
          <div className={css.bottomInfo}>
            <div className={css.box}></div>
            <div>
              <p className={css.percent}>{percent}%</p>
              <p className={css.pagesInfo}>{pagesRead} pages read</p>
            </div>
          </div>
        </div>
    </div>
  );
}
