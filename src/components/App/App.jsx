// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import RecommendedPage from "../../pages/RecommendedPage/RecommendedPage.jsx";
import Layout from "../Layout/Layout.jsx";
import RestricterRoute from "../RestricterRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";
import LibraryPage from "../../pages/LibraryPage/LibraryPage.jsx";
// import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/recommended" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/recommended"
            element={
              <PrivateRoute>
                <RecommendedPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/library"
            element={
              <PrivateRoute>
                <LibraryPage />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/reading"
            element={
              <PrivateRoute>
                <ReadingPage />
              </PrivateRoute>
            }
          /> */}
        </Route>
        <Route
          path="/register"
          element={
            <RestricterRoute>
              <RegisterPage />
            </RestricterRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestricterRoute>
              <LoginPage />
            </RestricterRoute>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route path="/" element={<NavigateToDefault />} />

<Route element={<PublicOnlyRoutes />}>
  <Route path="/login"    element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
</Route>

<Route element={<PrivateRoutes />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile"   element={<Profile />} />
</Route>

<Route path="*" element={<NotFound />} /> */
}
