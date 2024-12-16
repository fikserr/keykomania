import React from 'react';
import cake from "../assets/images/cake.webp";
import bon from "../assets/images/bon.webp";
import nutmeg from "../assets/images/nutmeg.webp";
import { NavLink } from "react-router-dom";
import Resouce from "../resource_img_16194826707835.jpg"


const Register = React.lazy(()=> import("../components/shared/register"))
const Social = React.lazy(()=> import("../components/ui/social"))
const Sertificate = React.lazy(()=> import("../icons/sertificate"))
const Logo = React.lazy(()=> import("../components/ui/logo"))
const CardInsta = React.lazy(()=> import("../components/shared/cardInsta"))

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

function SignUp() {
  return (
    <div className="w-full h-[100vh]  overflow-hidden relative  bg-cover bg-top min-h-[1000px]">
            <img src={Resouce} alt="" className="blur-md object-cover object-center w-full absolute "/>
      <div className="hidden flex-col gap-3 absolute z-0 bottom-[-350px] ml-[-107px] lg:ml-[57px] xl:ml-[107px]  md:flex">
        {cardInstagram.map((item, index) => (
          <div key={index}>
            <CardInsta data={item} />
          </div>
        ))}
      </div>
      <div className="container relative  flex flex-col md:items-end z-30 mt-[46px]">
          <NavLink to='/login' className="hidden items-center justify-center w-[98px] h-[40px] rounded-lg  border-[1px] border-white font-Poppins font-normal text-sm text-[#fff] leading-[21px] md:flex">
            Войти
          </NavLink>
 

        <div className="flex flex-col pt-[46px] z-50">
                
              <Logo className="font-Stray font-bold text-white text-[60px] leading-[72px]" icon="fill-white size-2 md:size-5"/>

              <div className="flex flex-col lg:px-40  items-center xl:flex-row w-full pt-[21px] md:pt-[31px] lg:pt-[37px]">
              <Register />
              <div className="xl:absolute lg:right-10 lg:pr-20 ">
                <Social />
              </div>
            
              </div>

              <p className="flex items-center justify-center pt-[98px] font-Poppins font-medium text-[10px] text-white leading-[63px]"> <span className="pr-2"><Sertificate/></span>Все права защищены ООО “keykomania” 2024 </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
