import css from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations.js";

export default function Header() {
  const userName = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return isLoggedIn && (
    <header className={css.header}>
      <Logo />
      <nav className={css.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.link} ${css.recipes} ${isActive ? css.active : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `${css.link} ${css.recipes} ${isActive ? css.active : ""}`
          }
        >
          My library
        </NavLink>
      </nav>
      <div className={css.auth}>
        <div className={css.user}>
          <div className={css.avatar}>
            {userName?.name?.charAt(0).toUpperCase() || "?"}
          </div>
          <span className={css.name}>{userName?.name || "Guest"}</span>
        </div>
        <button className={css.btn} onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </header>
  );
}
