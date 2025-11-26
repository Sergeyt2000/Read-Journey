import css from "./AuthHead.module.css";
import Logo from "../Logo/Logo.jsx";

export default function AuthHead() {
  return (
    <div className={css.container}>
      <Logo />
      <h1 className={css.title}>
        Expand your mind, reading <span className={css.title_span}>a book</span>
      </h1>
    </div>
  );
}
