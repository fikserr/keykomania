import mainImageOne from "../assets/images/mainImageOne.webp";
import mainImageTwo from "../assets/images/mainImageTwo.webp";
import navBack from "../assets/images/navBack.webp";
import mainImgOne from "../assets/images/mainCardImgOne.webp";
import mainImgTwo from "../assets/images/mainCardImgTwo.webp";
import Navbar from "../components/shared/navbar";
import BottomText from "../components/shared/bottomText";

function Main() {
  return (
    <div>
      <Navbar className="w-full bg-nav-back relative md:pb-[99px] lg:pb-[181px] opacity-80 bg-cover bg-top" />
      <div className="absolute top-0 z-0"></div>
      <img
        src={mainImageOne}
        alt="mainImageOne"
        loading="lazy"
        className="w-full h-[278px] md:h-[486px] lg:h-[716px] object-cover object-center"
      />
      <div className="relative">
        <div className="container mx-auto relative z-10 pt-[51px] md:pt-[70px] lg:pt-[143px] flex flex-col sm:justify-center sm:items-center">
          <div className="flex flex-col md:gap-[25px] lg:gap-[75px] items-center md:flex-row md:justify-between md:items-start">
            <img
              src={mainImgOne}
              alt="mainImgOne"
              loading="lazy"
              className="w-[336px] h-[448px] md:w-[440px] md:h-[639px] lg:w-[488px] lg:h-[709px] rounded-[19px] "
            />

            <p className="w-[333px] md:w-1/2 pt-[42px]  md:p-0 font-Poppins font-medium text-white text-sm leading-[46px] md:text-lg md:leading-[30px] lg:text-[20px]  lg:leading-[80px] md:text-right">
              2023 yildan beri ishlab kelaman.Safia, maselka,matte,croisant d
              eco, janonn chicken, vkusna by seva,xolodilnik,musa, va boshqa
              kompaniyalar uchun o`z xizmatimni ko`rsatdim.Rasm va video olib
              ularni sahifasini yanada yorqin qilib berdim.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center md:gap-[25px] lg:gap-[75px] md:flex-row md:justify-between md:items-start lg:items-center pt-[42px] lg:pt-[79px]">
            <div className=" h-full flex flex-col items-center md:justify-between">
              <p className="hidden md:flex font-Poppins font-medium text-white text-[20px] md:leading-[30px] lg:leading-[40px] xl:leading-[80px] text-right">
                Hozirda men bilan ishlagan brendlar, kompaniya va restoranlar
                o’z sahifalarida men tarafimdan qilingan rasm va videolarni o’z
                sahifalariga qo’yib ijtimoiy tarmoqda aktiv bo’lishmoqda.
              </p>
              <p className="pt-[37px] md:pt-[100px] md:w-full w-[333px] font-Poppins font-medium text-black text-sm leading-[46px] md:text-lg md:leading-[30px] lg:leading-[40px] lg:text-[20px] xl:leading-[80px] md:text-right">
                Oziq-ovqat sanʼati va madaniyatining boyligi meni doim
                ilhomlantiradi. Ushbu blog orqali sizga turli xil taomlar
                retseptlari, foydali maslahatlar va kashfiyotlarimni baham
                ko‘rishni istayman. Har bir retseptga jonimni berib tayyorlayman
                va bu jarayonda quvonch bilan o‘rtoqlashishni maqsad qilganman.
              </p>
            </div>

            <img
              src={mainImgTwo}
              alt="mainImgOne"
              loading="lazy"
              className="w-[336px] h-[393px] md:w-[440px] md:h-[639px] lg:w-[488px] lg:h-[853px] rounded-[19px] object-cover"
            />
          </div>

          <BottomText
          className={"flex flex-col items-center pt-[77px] md:pt-[112px] lg:pt-[98px]"}
          title="keykomania"
            text=" Agar siz ham mazali va noodatiy taomlarni Telefon orqali rasmga
                olishni xohlasangiz, meni kuzatib boring! Birgalikda Taomlarni
                taomlarni telefonda rasm va videoga olishni san’at darajasiga
                chiqaramiz."
          />
        </div>

        <div className="images absolute top-0 z-0 w-full">
          <div className="relative">
            <div className="w-full h-[998px] lg:h-[1352px] relative">
              <img
                src={mainImageTwo}
                alt="mainImageTwo"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-0 w-full h-full bg-[#804C2ECC] blur-sm"></div>
            </div>

            <img
              src={navBack}
              alt="navBack"
              loading="lazy"
              className="w-full h-[873px] md:h-[1048px] lg:h-[1119px] object-cover object-bottom opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
