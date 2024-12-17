import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// Lazily load components
const Navbar = React.lazy(() => import("../components/shared/navbar"));
const Footer = React.lazy(() => import("../components/shared/footer"));

function HomeLayout() {
  const name = localStorage.getItem('nameData') ? JSON.parse(localStorage.getItem('nameData')) : '';
  const isAdmin = name?.pass === "2658474z";
  useEffect(() => {
    if (isAdmin) {
      window.location.reload(); 
    }
  }, [name?.pass]);
  return (
    <div className="relative min-h-screen">

       <div className="container">
       <Navbar className="absolute left-0 z-50  top-0 w-full bg-transparent brightness-80 bg-cover bg-top" />
       </div>


      
        <Outlet />
        <Footer />
    </div>
  );
}

export default HomeLayout;
