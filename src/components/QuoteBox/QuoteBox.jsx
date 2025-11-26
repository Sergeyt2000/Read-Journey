import css from "./QuoteBox.module.css";

export default function QuoteBox() {
  return (
    <div className={css.quoteBox}>
      {/* <svg className={css.logo} width="42" height="17">
        <use href="/icons/sprite.svg#icon-logo"></use>
      </svg> */}
      <span className={css.booksLogo}>📚</span>
      <p className={css.text}>
        "Books are <span className={css.textspan}>windows</span> to the world, and reading is a journey into the unknown."
      </p>
    </div>
  );
}
