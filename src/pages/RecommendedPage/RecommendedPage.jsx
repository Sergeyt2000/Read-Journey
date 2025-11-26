import css from './RecommendedPage.module.css';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import RecommendedBooks from '../../components/RecommendedBooks/RecommendedBooks.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

export default function RecommendedPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? (
      <div className={css.container}>
        <Dashboard />
        <RecommendedBooks />
      </div>
    ) : (<h2>Please log in to see recommended books.</h2>
    );
}