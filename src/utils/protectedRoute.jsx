import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isAdmin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = localStorage.getItem("nameData")
    ? JSON.parse(localStorage.getItem("nameData"))
    : "";
    useEffect(()=>{
      if (!name) {
        navigate('/login')
      }
    },[])

    useEffect(() => {
      // Agar PhoneNumber yo'q yoki bo'sh bo'lsa, login sahifasiga yo'naltirish
      if (!name?.PhoneNumber || name.PhoneNumber.trim() === "") {
        navigate("/login", { state: { from: location } });
      }
    }, [name?.PhoneNumber, navigate, location]); // Dependency array simplified
    

  return children;
};

export default ProtectedRoute;
