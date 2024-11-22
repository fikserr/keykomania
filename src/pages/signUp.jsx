import CardInsta from "../components/shared/cardInsta";
import cake from "../assets/images/cake.webp";
import bon from "../assets/images/bon.webp";
import nutmeg from "../assets/images/nutmeg.webp";
import brand from "../assets/images/brand.webp";
import Register from "../components/shared/register";
import Social from "../components/ui/social";


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
    <div className="w-full h-[100vh]  overflow-hidden relative bg-[url('../../assets/images/signUp.webp')] bg-cover bg-top ">
      <div className="flex flex-col gap-3 absolute ml-[107px] bottom-[-350px]">
        {cardInstagram.map((item, index) => (
          <div key={index}>
            <CardInsta data={item} />
          </div>
        ))}
      </div>
      <div className="container flex flex-col items-end  pt-[46px]">
        <div className="flex items-center gap-4">
          <button className="w-[98px] h-[40px] rounded-lg  border-[1px] border-white font-Poppins font-normal text-sm text-[#fff] leading-[21px]">
            Войти
          </button>
        </div>

        <div className="flex items-center">
              <div className="flex flex-col items-center pt-[46px]">
                <div className="flex items-start pb-[37px]">
                  <h1 className="font-Stray font-bold text-white text-[60px] leading-[72px]">
                    keykomania
                  </h1>
                  <img src={brand} alt="brand image" className="w-5 h-5" />
                </div>
                <Register />
                
              </div>
              <div className="flex">
              <Social/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
