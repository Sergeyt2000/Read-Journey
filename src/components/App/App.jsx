// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
// import NotFound from './pages/NotFound/NotFound.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App


{/* <Route path="/" element={<NavigateToDefault />} />

<Route element={<PublicOnlyRoutes />}>
  <Route path="/login"    element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
</Route>

<Route element={<PrivateRoutes />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile"   element={<Profile />} />
</Route>

<Route path="*" element={<NotFound />} /> */}