import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

function HomeLayout() {
  return (
    <div className="relative min-h-screen">
        <Navbar className="absolute left-0 top-0 w-full z-10 bg-transparent brightness-80 bg-cover bg-top" />

      <main className="relative top-0 z-0">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default HomeLayout;
