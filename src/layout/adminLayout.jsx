import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/shared/adminNavbar";

const AdminLayout = () => {
    const name = localStorage.getItem('nameData') ? JSON.parse(localStorage.getItem('nameData')) : '';
    
    useEffect(() => {
  
    }, [name?.pass]);
  return (
    <div>
     <AdminNavbar/>
      <div>
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;
