import React, { Suspense } from 'react';
import gridImgOne from "../assets/images/gridImgOne.webp";
import gridImgTwo from "../assets/images/gridImgTwo.webp";
import gridImgThree from "../assets/images/gridImgThree.webp";
import gridImgFour from "../assets/images/gridImgFour.webp";
import mainImgTwo from "../assets/images/mainCardImgTwo.webp";
import breakfastOne from "../assets/images/breakfastOne.webp";
import breakfastTwo from "../assets/images/breakfastTwo.webp";
import breakfastThree from "../assets/images/breakfastThree.webp";
const TopText = React.lazy(()=> import("../components/shared/topText"))

function Portfolio() {
  return (
    <div className="w-full">
      <div className="relative h-[762px] md:h-[1160px] lg:h-[1269px] pt-[177px] md:pt-[226px] lg:pt-[200px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="container">
            <div className="top md:pt-[86px] ">
              <TopText
                title="Портфолио"
                text=" Har bir loyihaga individual yondoshiladi. Sizning loyihangiz
                  uchun tanlangan gʻoya va uslub boshqalarda takrorlanmaydi."
              />
              
              <div className="grid justify-center grid-rows-2 grid-flow-col gap-x-[11px] gap-y-[13px] md:gap-x-[19px] md:gap-y-[23px] lg:h-[700px]  mt-[22px] md:mt-[75px]  lg:mt-[90px]">
                <div className="shadow-3xl w-[158px] h-[198px] md:w-[232px] md:h-[291px] lg:w-[270px] lg:h-[338px]  rounded-[19px] overflow-hidden ">
                  <img src={gridImgOne} alt="gridImgOne" loading="lazy" />
                </div>
                <div className="shadow-3xl w-[158px] h-[198px] md:w-[232px] md:h-[291px] lg:w-[270px] lg:h-[338px]  rounded-[19px] overflow-hidden ">
                  <img
                    src={gridImgTwo}
                    alt="gridImgOne"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="shadow-3xl h-[409px] w-[197px] md:h-[603px] md:w-[332px] lg:h-[700px] lg:w-[388px]  rounded-[19px] overflow-hidden row-span-2">
                  <img
                    src={gridImgThree}
                    alt="gridImgOne"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="hidden md:flex shadow-3xl md:h-[603px] md:w-[332px] lg:h-[700px] lg:w-[388px]  rounded-[19px] overflow-hidden row-span-2">
                  <img
                    src={gridImgFour}
                    alt="gridImgOne"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  h-[1074px] md:h-[1021px] lg:h-[1088px]">
        <div className="absolute inset-0 bg-portfolio-back  blur-[3px] brightness-50 bg-cover  bg-center"></div>
        <div className="absolute inset-0 bg-orange"></div>
        <div className="relative z-10 w-full ">
          <div className="container relative z-10 ">
            <div className="center pt-[60px] md:pt-[69px] lg:pt-[74px]">
              <h1 className="text-end font-Stray font-bold  text-white text-[26px] md:text-[35px] leading-[31px] md:leading-[42px]">
                Reels
              </h1>
              <div className="flex flex-col-reverse items-center md:gap-[25px] lg:gap-[75px] md:flex-row md:justify-between md:items-start lg:items-start pt-[42px] lg:pt-[79px]">
                <p className="pt-[37px] md:pt-[100px] md:w-full w-[333px] font-Poppins font-medium text-white text-sm leading-[46px] md:text-lg md:leading-[30px] lg:leading-[40px] lg:text-[20px] xl:leading-[80px] md:text-right">
                  2023 yildan beri ishlab kelaman.Safia, maselka,matte,croisant
                  d eco, janonn chicken, vkusna by seva,xolodilnik,musa, va
                  boshqa kompaniyalar uchun o'z xizmatimni ko'rsatdim.Rasm va
                  video olib ularni sahifasini yanada yorqin qilib berdim.
                </p>

                <img
                  src={mainImgTwo}
                  alt="mainImgOne"
                  loading="lazy"
                  className="w-[336px] h-[393px] md:w-[440px] md:h-[639px] lg:w-[488px] lg:h-[853px] rounded-[19px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[762px] md:h-[1160px] lg:h-[1119px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover"></div>
        <div className="relative  z-10 w-full flex justify-center pt-[37px] md:pt-[50px] lg:pt-[134px] overflow-scroll scrollbar-hide">
          <div className="cards flex gap-[10px] md:gap-[13px] lg:gap-4 ">
            <div className="shadow-3xl h-[436px] w-[218px] md:h-[559px] md:w-[278px] lg:h-[700px] lg:w-[348px] rounded-[19px] overflow-hidden">
              <img
                src={breakfastOne}
                alt="breakfastOne"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="shadow-3xl h-[436px] w-[218px] md:h-[559px] md:w-[278px] lg:h-[700px] lg:w-[348px] rounded-[19px] overflow-hidden">
              <img
                src={breakfastTwo}
                alt="breakfastOne"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="shadow-3xl h-[436px] w-[218px] md:h-[559px] md:w-[278px] lg:h-[700px] lg:w-[348px] rounded-[19px] overflow-hidden">
              <img
                src={breakfastThree}
                alt="breakfastOne"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
