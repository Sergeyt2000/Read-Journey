import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
// import Loader from "../Loader/Loader";

export default function Redirector() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <div>Loading...</div>; //<Loader />;
  }

  return isLoggedIn ? (
    <Navigate to="/recommended" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}
