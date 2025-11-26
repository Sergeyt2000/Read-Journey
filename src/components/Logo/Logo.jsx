import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo_container}>
      <svg className={css.logo} width="42" height="17">
        <use href="/icons/sprite.svg#icon-logo"></use>
      </svg>
      <span className={css.logo_text}>read journey</span>
    </div>
  );
}
