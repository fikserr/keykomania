import { useForm } from "react-hook-form";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { createUser } from "../../store/createUser";
import Eye from "../../icons/eye";
import { getDataUser } from "../../store/userToken";

function Register() {
  const [eyeActive, setEyeActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = getValues();

    // Tokenni olishni kutamiz
    let tokenApiUser;
    try {
      tokenApiUser = await dispatch(getDataUser(data.PhoneNumber)).unwrap(); // unwrap tokenni to‘g‘ri qaytaradi
      console.log("Yangilangan token:", tokenApiUser);
    } catch (error) {
      console.error("Tokenni olishda xatolik:", error);
      alert("Tokenni olishda xatolik yuz berdi. Qaytadan urinib ko'ring.");
      return;
    }

    if (isChecked) {
      console.log(tokenApiUser, "token");

      // Foydalanuvchini yaratish
      dispatch(createUser({ userData: data, tokenApiUser })).then((res) => {
        if (!res.error) {
          navigate("/login");
        } else {
          console.error("Foydalanuvchi yaratishda xatolik:", res.error);
        }
      });
    } else {
      alert("Checkboxni belgilashingiz shart!");
    }
  }

  function handleCheckBox(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <div className="h-[641px] w-full md:h-[513px] md:w-[613px] rounded-[25px] relative overflow-hidden z-0">
      <div className="absolute top-0 h-full w-full blur-sm bg-[url('../../assets/images/signUp.webp')] brightness-50 bg-cover bg-center"></div>
      <div className="absolute h-full w-full top-0 z-10 pt-[27px] pb-[45px] px-[47px]">
        <h5 className="font-Poppins font-medium text-[25px] text-white leading-9">
          Регистрация
        </h5>
        <form className="h-full w-full pt-[13px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[35px] gap-y-4 ">
            <div className="flex flex-col gap-[13px]">
              <p className="font-Poppins font-normal text-[13px] text-white">
                Имя
              </p>
              <input
                type="text"
                {...register("FirstName", { required: "Введите свое имя!" })}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.FirstName && <p>{errors.FirstName.message}</p>}
            </div>
            <div className="flex flex-col gap-[13px]">
              <p className="font-Poppins font-normal text-[13px] text-white">
                Фамилия
              </p>
              <input
                type="text"
                {...register("LastName", { required: "Введите свою фамилию!" })}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.LastName && <p>{errors.LastName.message}</p>}
            </div>
            <div className="flex flex-col gap-[13px] md:col-span-2">
              <p className="font-Poppins font-normal text-[13px] text-white">
                Номер телефона
              </p>
              <input
                type="number"
                {...register("PhoneNumber", {
                  required: "Введите номер телефона!",
                  minLength: {
                    value: 12,
                    message: "Номер телефона должен быть не менее 12 символов!",
                  },
                })}
                className="bg-transparent border-[1px] spin-hidden outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}
            </div>
            <div className="flex flex-col gap-[13px] md:col-span-2">
              <div className="flex justify-between w-full">
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
                {...register("Password", {
                  required: "Введите пароль!",
                  minLength: {
                    value: 8,
                    message: "Parol kamida 8 belgidan iborat bo'lishi kerak!",
                  },
                })}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-white pl-1"
              />
              {errors.Password && <p>{errors.Password.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-y-[13px] pt-3">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckBox}
                className="check w-[18px] h-[18px] accent-black"
              />
              <p className="font-Poppins font-normal text-[8px] leading-3 md:text-[13px] md:leading-5 text-white">
                Создавая учетную запись, я соглашаюсь с нашими <br />
                Условиями использования и Политикой конфиденциальности.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center w-full gap-2">
              <button
                type="submit"
                className="font-Poppins font-normal text-xs text-[#060606] bg-white flex items-center justify-center w-full h-[43px] md:w-[156px] md:h-[32px] rounded-[5px]"
              >
                Создать аккаунт
              </button>

              <p className="pt-2 md:pt-0 text-white text-[8px] md:text-[13px]">
                У вас уже есть аккаунт?{" "}
                <NavLink to="/login" className="underline">
                  Войти
                </NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
