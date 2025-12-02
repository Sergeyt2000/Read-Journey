import css from "./Dashboard.module.css";
import FiltersBox from "../FiltersBox/FiltersBox";
import WorkoutBox from "../WorkoutBox/WorkoutBox";
import QuoteBox from "../QuoteBox/QuoteBox";

// export default function Dashboard() {
//   return (
//     <div className={css.dashboard}>
//       <div className={css.contant}>
//         <FiltersBox />
//         <WorkoutBox />
//         <QuoteBox />
//       </div>
//     </div>
//   );
// }
export const Dashboard = ({ children }) => {
  return (
    <div className={css.dashboard}>
      <div className={css.content}>
        {children}
      </div>
    </div>
  );
}