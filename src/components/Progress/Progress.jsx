import css from "./Progress.module.css";

export default function Progress() {
  return (
    <div className={css.container}>
          <div className={css.textbox}>
        <h3 className={css.title}>Progress</h3>
        <p className={css.text}>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </p>
      </div>
      <img
        width="100"
        height="100"
        src={"/icons/star.png"}
        alt={`star`}
        className={css.coverImage}
      />
    </div>
  );
}
