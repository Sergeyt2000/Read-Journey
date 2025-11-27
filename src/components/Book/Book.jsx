import css from "./Book.module.css";

export default function Book({ book }) {
  return (
    <div className={css.book}>
      <img
        src={book.imageUrl}
        alt={`${book.title} cover`}
        className={css.coverImage}
      />
      <h3 className={css.title}>{book.title}</h3>
      <p className={css.author}>{book.author}</p>
    </div>
  );
}