import CardInsta from "../components/shared/cardInsta";
import cake from "../assets/images/cake.webp";
import bon from "../assets/images/bon.webp";
import nutmeg from "../assets/images/nutmeg.webp";
import Register from "../components/shared/register";
import Social from "../components/ui/social";
import Sertificate from "../icons/sertificate";
import Logo from "../components/ui/logo";
import SingIn from "../components/shared/singIn";
import { NavLink } from "react-router-dom";

const cardInstagram = [
  {
    date: "20 Июль 2024",
    img: cake,
    text: "Barcha rasmlar Iphone 14 Pro ga olingan va telefondan korreksiya qilingan.",
    link: "",
  },
  {
    date: "20 Июль 2024",
    img: bon,
    text: " brendi uchun olingan rasmlar. Barcha rasmlar telefonga olingan va telefonda obrabotka qilingan✨",
    link: "@musa__baraka",
  },
  {
    date: "15 Июль 2024 ",
    img: nutmeg,
    text: "Barcha rasmlar Iphone 14 Pro ga olingan va telefondan korreksiya qilingan.",
    link: "",
  },
];

function Login() {
  return (
    <div className="w-full h-[100vh]  overflow-hidden relative bg-[url('../../assets/images/signUp.webp')] bg-cover bg-top ">
      <div className="hidden flex-col gap-3 absolute bottom-[-350px] ml-[-107px] lg:ml-[57px] xl:ml-[107px]  md:flex">
        {cardInstagram.map((item, index) => (
          <div key={index}>
            <CardInsta data={item} />
          </div>
        ))}
      </div>
      <div className="container flex flex-col md:items-end  mt-[46px]">
        <NavLink to='/signUp' className="hidden items-center justify-center w-[121px] h-[40px] rounded-lg  border-[1px] border-white font-Poppins font-normal text-sm text-[#fff] leading-[21px] md:flex">
          Регистрация
        </NavLink>

        <div className="flex flex-col pt-[46px]">
          <Logo
            className="font-Stray font-bold text-white text-[60px] leading-[72px]"
            icon="fill-white size-2 md:size-5"
          />

          <div className="flex flex-col items-center xl:flex-row w-full pt-[21px] md:pt-[31px] lg:pt-[37px]">
            <SingIn />
            <Social />
          </div>

          <p className="flex items-center justify-center pt-[98px] font-Poppins font-medium text-[10px] text-white leading-[63px]">
            {" "}
            <span className="pr-2">
              <Sertificate />
            </span>
            Все права защищены ООО “keykomania” 2024{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
