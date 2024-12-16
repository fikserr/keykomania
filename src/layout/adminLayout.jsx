import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/shared/adminNavbar";

const AdminLayout = () => {
    
    useEffect(() => {
  
    }, []);
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
