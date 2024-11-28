import { NavLink } from "react-router-dom";
import Logo from "../ui/logo";
import MenuBar from "../../icons/menuBar";
import { useState } from "react";
import Cancel from "../../icons/cancel";

function Navbar({ className }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className={className}>
      <div className="absolute top-0 inset-0 blur-[3px]"></div>
      <div className="container flex flex-col justify-center relative  z-10 pt-[18px] md:pt-[67px] lg:pt-10">
        <NavLink to="/">
          <Logo
            className="text-black font-Stray font-bold text-[25px] leading-[25px] md:text-[50px] md:leading-[60px] "
            icon="w-[15px] h-[15px]"
          />
        </NavLink>

        <div className="py-[15px] mt-[11px] md:mt-[46px] pt-5 mb-[33px] md:mb-0 md:pt-0 md:pb-[13px] lg:pb-[19px] flex justify-end gap-[9px] md:gap-0 md:justify-between border-t-2 md:border-t-0 md:border-b-[3px] border-black">
          <NavLink
            to="stream"
            className="font-Poppins font-semibold text-xs md:text-base leading-6 w-[152px] h-10 border-[1px] md:border-2 border-black rounded-lg flex justify-center items-center"
          >
            Прямой эфир
          </NavLink>
          <div className="hidden md:flex justify-between items-center w-1/2">
            <NavLink
              to="services"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Услуги
            </NavLink>
            <NavLink
              to="portfolio"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Портфолио
            </NavLink>
            <NavLink
              to="courses"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Курсы
            </NavLink>
            <NavLink
              to="reviews"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Отзывы
            </NavLink>
          </div>

          <NavLink
            to="billing"
            className="font-Poppins font-semibold text-xs md:text-base leading-6 w-[152px] h-10 border-[1px] md:border-2 border-black rounded-lg flex justify-center items-center"
          >
            Заказать услугу
          </NavLink>

          <button onClick={() => setMenu(!menu)} className="md:hidden">
            <MenuBar />
          </button>
        </div>
      </div>
      <div
        className={
          menu
            ? "absolute top-0 right-0 z-50 h-[100vh] w-44 bg-white brightness-70 bg-cover bg-center transition duration-300"
            : "hidden absolute top-0 -right-56 z-50 transition duration-300"
        }
      >
        <div className="p-5">
            <button  onClick={() => setMenu(!menu)}><Cancel/></button>
          <div className="flex flex-col justify-between items-start">
            <NavLink
              to="services"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Услуги
            </NavLink>
            <NavLink
              to="portfolio"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Портфолио
            </NavLink>
            <NavLink
              to="courses"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Курсы
            </NavLink>
            <NavLink
              to="reviews"
              className="font-Poppins font-semibold md:text-lg lg:text-[22px] leading-[33px]"
            >
              Отзывы
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
