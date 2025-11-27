import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};