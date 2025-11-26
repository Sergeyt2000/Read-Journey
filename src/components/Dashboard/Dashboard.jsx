import css from "./Dashboard.module.css";
import FiltersBox from "../FiltersBox/FiltersBox";
import WorkoutBox from "../WorkoutBox/WorkoutBox";
import QuoteBox from "../QuoteBox/QuoteBox";

export default function Dashboard() {
  return (
    <div className={css.dashboard}>
      <p className={css.title}>Filters:</p>
      <div className={css.contant}>
        <FiltersBox />
        <WorkoutBox />
        <QuoteBox />
      </div>
    </div>
  );
}
