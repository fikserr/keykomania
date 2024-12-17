import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const location = useLocation();

  // LocalStorage-dan qiymat olish va xavfsiz o'qish
  const name = JSON.parse(localStorage.getItem("nameData") || "{}");

  // Agar foydalanuvchi login qilmagan bo'lsa
  if (!name?.PhoneNumber || name.PhoneNumber.trim() === "") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  

  return children;

};

export default ProtectedRoute;
