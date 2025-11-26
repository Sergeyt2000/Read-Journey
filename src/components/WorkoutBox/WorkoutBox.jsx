import css from "./WorkoutBox.module.css";

export default function WorkoutBox() {
  return (
    <div className={css.container}>
      <p className={css.title}>Start your workout</p>
      <div className={css.choises}>
        <div className={css.line}>
          <span className={css.count}>1</span>
          <p className={css.text}>
            Create a personal library:
            <span className={css.textspan}>
              add the books you intend to read to it.
            </span>
          </p>
        </div>
        <div className={css.line}>
          <span className={css.count}>2</span>
          <p className={css.text}>
            Create your first workout:
            <span className={css.textspan}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </div>
      </div>
      <a href="/add-book" className={css.addBookLink}>
        My library
      </a>
    </div>
  );
}
