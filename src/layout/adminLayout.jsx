import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/shared/adminNavbar";

const AdminLayout = () => {
    
  console.log(<Outlet />);
  
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
