import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersLogin } from "../../store/getUsers";
import { clearName, setName } from "../../store/userSlice";
const Eye = React.lazy(() => import("../../icons/eye"));
const UpRight = React.lazy(() => import("../../icons/upRight"));

function SingIn() {
  const [eyeActive, setEyeActive] = useState(false);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const documents  = useSelector((state) => state.userLogin.documents);
  const name = useSelector((state)=>state.userData.name)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function GetUsers(e) {
    e.preventDefault();
    dispatch(getUsersLogin());
    const data = getValues();
    const currentDate = new Date().toLocaleString(); // Yangi sanani olish
    dispatch(clearName())
    dispatch(setName({PhoneNumber:data.PhoneNumber, date:currentDate, pass:data.Password}))
    documents.map((item)=>{
      console.log(item.PhoneNumber.trim(""));
      
      if (item.PhoneNumber.trim("") == data.PhoneNumber && item.Password === data.Password) {
        navigate('/')
        console.log(item);
        
      }
    })
    
  }

  return (
    <div className="h-[469px] w-full md:h-[379px] md:w-[613px] rounded-[25px] relative overflow-hidden z-0">

      <div className="absolute top-0 h-full w-full blur-sm bg-[url('../../assets/images/signUp.webp')] brightness-50 bg-cover bg-center"></div>
      <div className="absolute h-full w-full top-0 z-10 pt-[27px] pb-[45px] px-[47px]">
        <h5 className="font-Poppins font-medium text-[25px] text-white leading-9">
          Войти
        </h5>
        <form className="h-full w-full pt-[13px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[35px] gap-y-4 ">
            <div className="flex flex-col gap-[13px] md:col-span-2">
              <p className="font-Poppins font-normal text-[13px] text-white">
                Номер телефона
              </p>
              <input
                type="number"
                {...register("PhoneNumber")}
                className="bg-transparent border-[1px] spin-hidden outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.number && <p>phone is required.</p>}
            </div>
            <div className="flex flex-col gap-[13px] md:col-span-2">
              <div className="flex  justify-between w-full">
                <p className="font-Poppins font-normal text-[13px] text-white">
                  Пароль
                </p>
                <button
                  type="button"
                  className="flex gap-[10px] items-center font-Poppins font-normal text-[13px] text-white"
                  onClick={() => setEyeActive(!eyeActive)}
                >
                  <Eye data={eyeActive} /> {eyeActive ? "Скрыть" : "Показать"}
                </button>
              </div>
              <input
                type={eyeActive ? "text" : "password"}
                {...register("Password")}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.password && <p>Password is 8 character</p>}
            </div>
          </div>

          <div className="flex flex-col gap-y-[13px] pt-3">
            <div className="flex flex-col md:flex-row items-center w-full pt-[21px] md:pt-[33px]">
              <button
                type="submit"
                onClick={GetUsers}
                className="font-Poppins font-normal text-xs text-[#060606] bg-white flex items-center justify-center w-full h-[43px] md:w-[156px] md:h-[32px] rounded-[5px]"
              >
                Войти
              </button>

              <div className="flex w-full items-center flex-col  md:hidden">
                <div className="flex w-full items-center justify-center pt-8">
                  <div className="w-full border-t-[1px] border-white"></div>
                  <span className="font-Poppins font-normal px-3 text-white text-sm">
                    ИЛИ
                  </span>
                  <div className="w-full border-t-[1px] border-white"></div>
                </div>
                <NavLink
                  to="/signUp"
                  className="flex items-center pt-5 font-Poppins font-normal text-sm leading-[21px] text-white"
                >
                  Создать новый аккаунт
                  <span className="pl-[6px]">
                    <UpRight />
                  </span>
                </NavLink>
              </div>

              <NavLink className="hidden md:flex items-end gap-[10px] ml-[37px]">
                <p className=" font-Poppins font-normal text-[13px] text-white">
                  Забыли пароль
                </p>
                <p className="font-Poppins font-semiBold text-[15px] text-white  text-decoration-line: underline underline-offset-4">
                  Восстановить
                </p>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingIn;
