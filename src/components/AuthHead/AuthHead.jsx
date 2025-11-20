import css from "./AuthHead.module.css";

export default function AuthHead() {
  return (
    <div className={css.container}>
      <div class={css.logo_container}>
        <svg className={css.logo} width="42" height="17">
          <use href="/icons/sprite.svg#icon-logo"></use>
        </svg>
        <span className={css.logo_text}>read journey</span>
      </div>
      <h1 className={css.title}>
        Expand your mind, reading <span className={css.title_span}>a book</span>
      </h1>
    </div>
  );
}
