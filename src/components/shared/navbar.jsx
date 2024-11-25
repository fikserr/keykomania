import { NavLink } from "react-router-dom";
import navBack from "../../assets/images/navBack.webp";
import Logo from "../ui/logo";

function Navbar() {
  return (
    <div className="w-full relative">
      
      <div className="container flex flex-col justify-center relative z-10 pt-10">
        <Logo
          className="text-black font-Stray font-bold text-[50px] leading-[60px]"
          icon="w-[15px] h-[15px]"
        />

        <div className="py-[15px] mt-[46px] pt-5 mb-[33px] md:pt-0 md:pb-[13px] lg:pb-[19px] flex justify-end gap-[9px] md:gap-0 md:justify-between border-t-2 md:border-b-[3px] border-black md:mb-[99px] lg:mb-[181px] ">
          <NavLink
            to="strim"
            className="font-Poppins font-semibold text-base leading-6 w-[152px] h-10 border-[1px] md:border-2 border-black rounded-lg flex justify-center items-center"
          >
            Прямой эфир
          </NavLink>
          <div className="hidden md:flex justify-between w-1/2">
            <NavLink
              to="services"
              className="font-Poppins font-semibold text-[22px] leading-[33px]"
            >
              Услуги
            </NavLink>
            <NavLink
              to="portfolio"
              className="font-Poppins font-semibold text-[22px] leading-[33px]"
            >
              Портфолио
            </NavLink>
            <NavLink
              to="courses"
              className="font-Poppins font-semibold text-[22px] leading-[33px]"
            >
              Курсы
            </NavLink>
            <NavLink
              to="reviews"
              className="font-Poppins font-semibold text-[22px] leading-[33px]"
            >
              Отзывы
            </NavLink>
          </div>

          <NavLink
            to="billing"
            className="font-Poppins font-semibold text-base leading-6 w-[152px] h-10 border-[1px] md:border-2 border-black rounded-lg flex justify-center items-center"
          >
            Прямой эфир
          </NavLink>
        </div>
      </div>
      <img
        src={navBack}
        alt="navBack"
        loading="lazy"
        className="absolute top-0 z-0 h-full w-full object-cover object-left-top blur-[3px] opacity-80"
      />
    </div>
  );
}

export default Navbar;
