import css from "./AddReading.module.css"

export default function AddReading() {
    return (
      <div className={css.container}>
        <p className={css.readingtitle}>Start page:</p>
        <form className={css.form}>
          <div className={css.pageInput}>
            <input
              type="text"
              name="page"
            //   value={form.page}
            //   onChange={handleChange}
              placeholder="0"
              className={css.input}
            />
            <span className={css.title} aria-hidden="true">
              Page number:
            </span>
          </div>
          <button className={css.btn} type="button">
            To start
          </button>
        </form>
      </div>
    );
 }