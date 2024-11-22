import { useForm } from "react-hook-form";
import Eye from "../../icons/eye";
import { useState } from "react";

function Register() {
  const [eyeActive, setEyeActive] = useState(false);
  const [checkWord, setCheckWord] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(checkWord);

  const inputChange = (e) => {
    setCheckWord(e.target.value);
  };

  return (
    <div className="h-[513px] w-[613px] rounded-[7px]  relative overflow-hidden z-0">
      <div className="absolute top-0 h-full w-full blur-sm bg-[url('../../assets/images/signUp.webp')]  bg-cover bg-center"></div>
      <div className="absolute h-full w-full top-0 z-10 pt-[27px] pb-[45px] px-[47px]">
        <h5 className="font-Poppins font-medium text-[25px] text-[#fff] leading-9">
          Регистрация
        </h5>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="h-full w-full pt-[13px]"
        >
          <div className="grid grid-cols-2 gap-x-[35px] gap-y-4 ">
            <div className="flex flex-col  gap-[13px]">
              <p className="font-Poppins font-normal text-[13px] text-[#FFF]">
                Имя
              </p>
              <input
                type="text"
                {...register("firstName")}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-[#FFF] pl-1"
              />
            </div>
            <div className="flex flex-col gap-[13px]">
              <p className="font-Poppins font-normal text-[13px] text-[#FFF]">
                Фамилия
              </p>
              <input
                type="text"
                {...register("lastName")}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-[#FFF] pl-1"
              />
              {errors.lastName && <p>Last name is required.</p>}
            </div>
            <div className="flex flex-col gap-[13px] col-span-2">
              <p className="font-Poppins font-normal text-[13px] text-[#FFF]">
                Номер телефона
              </p>
              <input
                type="number"
                {...register("number")}
                className="bg-transparent border-[1px] spin-hidden outline-none w-full h-[41px] rounded-[5px] text-[#FFF] pl-1"
              />
              {errors.number && <p>phone is required.</p>}
            </div>
            <div className="flex flex-col gap-[13px] col-span-2">
              <div className="flex  justify-between w-full">
                <p className="font-Poppins font-normal text-[13px] text-[#FFF]">
                  Пароль
                </p>
                <button
                  className="flex gap-[10px] items-center font-Poppins font-normal text-[13px] text-white"
                  onClick={() => setEyeActive(!eyeActive)}
                >
                  <Eye data={eyeActive} /> {eyeActive ? "Скрыть" : "Показать"}
                </button>
              </div>
              <input
                value={checkWord}
                onChange={inputChange}
                type={eyeActive ? "text" : "password"}
                {...register("password")}
                className="bg-transparent border-[1px] outline-none w-full h-[41px] rounded-[5px] text-[#FFF] pl-1"
              />
              {errors.password && <p>Password is 8 character</p>}
            </div>
          </div>

          <div className="flex flex-col gap-y-[13px] pt-3">
            <div className="flex gap-2 items-center">
              <input type="radio" />
              <p className="font-Poppins font-normal text-[10px] text-[#FFFFFF99]">
                Используйте 8 или более символов
              </p>
            </div>

            <div className="flex items-start gap-2 ">
              <input type="checkbox" className="check w-[18px] h-[18px] " />
              <p className="font-Poppins font-normal text-[13px] leading-5 text-white">
                Создавая учетную запись, я соглашаюсь с нашими <br />
                Условиями использования и Политикой конфиденциальности.
              </p>
            </div>
            <div className="flex items-center w-full ">
              <button
                type="submit"
                className="font-Poppins font-normal text-xs text-[#060606] bg-white flex items-center justify-center w-[156px] h-[32px] rounded-[5px]"
              >
                Создать аккаунт
              </button>

              <div className="flex items-end gap-[10px] ml-[37px]">
                <p className="font-Poppins font-normal text-[13px] text-white">
                  Уже есть аккаунт
                </p>
                <p className="font-Poppins font-semiBold text-[15px] text-white">
                  Войти
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
