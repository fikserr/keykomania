import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { clearName } from "../store/userSlice";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children, isAdmin }) => {
  const location = useLocation();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const dispatch = useDispatch();
  // LocalStorage-dan qiymat olish va xavfsiz o'qish
  const name = JSON.parse(localStorage.getItem("nameData") || "{}");
  let checkdate ;
  if (month == name?.month && year == name?.year) {
    checkdate = day - name?.day;
  }
  
  if (!name?.PhoneNumber || name.PhoneNumber.trim() === "") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else if (checkdate >= 5 || !name) {
    dispatch(clearName());
    return <Navigate to="/signUp" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
