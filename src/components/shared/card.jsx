import React from "react";
import { NavLink } from "react-router-dom";
import NoImage from '../../assets/images/gridImgOne.webp'
const Button = React.lazy(() => import("../ui/button"));

function Card({ data, className, card }) {
  return (
    <div className={className}>
      <div className="relative z-20 w-full h-full content flex flex-col justify-between items-start">
        <div className="flex flex-col items-center">
          <h3 className="font-Poppins font-semibold text-[30px] md:text-[35px] leading-[50px] text-white">
            {data?.Details}
          </h3>
          <div className="flex flex-col justify-start">
            <p className="pt-7 font-Poppins font-normal text-xs leading-6 text-[#EFEDE8CC]">
              {data?.Description}
            </p>
            <ul className="flex flex-col pt-3">
              <li className="font-Poppins font-normal text-xs leading-6 text-[#EFEDE8CC]">
                {data?.Description}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <NavLink to={`/detail/${data.$id}`}>
            <Button
              className={
                "relative h-[41px] w-[150px] rounded-[10px] bg-white flex items-center justify-center"
              }
              text={"Подробно"}
            />
          </NavLink>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-0 bg-[#7E5943]  h-full w-full ">
        <img
          src={data.Image ? data.Image : NoImage}
          alt="image"
          loading="lazy"
          className="h-full w-full opacity-20 object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Card;
