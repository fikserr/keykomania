import mainImageOne from "../assets/images/mainImageOne.webp";
import mainImageTwo from "../assets/images/mainImageTwo.webp";
import navBack from "../assets/images/navBack.webp";
import mainImgOne from "../assets/images/mainCardImgOne.webp";
import mainImgTwo from "../assets/images/mainCardImgTwo.webp";
import Logo from "../components/ui/logo";

function Main() {
  return (
    <div>
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

              <p className="w-[333px] md:w-1/2 pt-[42px]  md:p-0 font-Poppins font-medium text-white text-sm leading-[46px] md:text-lg md:leading-[58px] lg:text-[20px]  lg:leading-[80px] md:text-right">
                2023 yildan beri ishlab kelaman.Safia, maselka,matte,croisant d
                eco, janonn chicken, vkusna by seva,xolodilnik,musa, va boshqa 
                kompaniyalar uchun o`z xizmatimni ko`rsatdim.Rasm va video olib
                ularni sahifasini yanada yorqin qilib berdim.
              </p>
            </div>
            
            <div className="flex flex-col-reverse items-center md:gap-[25px] lg:gap-[75px] md:flex-row md:justify-between md:items-start lg:items-end pt-[42px] lg:pt-[79px]">
              <div className="w-[700px] flex flex-col items-center">
                <p className="hidden md:flex font-Poppins font-medium text-white text-[20px] leading-[80px] text-right">
                  Hozirda men bilan ishlagan brendlar, kompaniya va restoranlar
                  o’z sahifalarida men tarafimdan qilingan rasm va videolarni o’z
                  sahifalariga qo’yib ijtimoiy tarmoqda aktiv bo’lishmoqda.
                </p>
                <p className="pt-[30px] md:w-full w-[333px] font-Poppins font-medium text-black text-sm leading-[46px] md:text-lg md:leading-[58px] lg:text-[20px] lg:leading-[80px] md:text-right">
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

            <div className="flex flex-col pt-[110px] md: lg:pt-[213px]">
              <Logo
                className="font-Stray font-bold text-[26px] md:text-[35px] text-[#1D1D1D] leading-[42px]"
                icon="hidden"
              />

              <p className="font-Poppins font-medium text-sm md:text-[20px] text-[#1D1D1D] leading-[46px]  md:leading-[63px]">
                Agar siz ham mazali va noodatiy taomlarni Telefon orqali rasmga
                olishni xohlasangiz, meni kuzatib boring! Birgalikda Taomlarni
                taomlarni telefonda rasm va videoga olishni san’at darajasiga
                chiqaramiz.
              </p>
            </div>
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
