import css from './RecommendedBooks.module.css';

export default function RecommendedBooks() {
    return (
      <div className={css.container}>
        <div>
          <h2>Recommended</h2>
          <p>←</p>
          <p>→</p>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    );
}