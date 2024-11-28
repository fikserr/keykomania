import BottomText from "../components/shared/bottomText";
import Card from "../components/shared/card";
import navBack from "../assets/images/navBack.webp";

const cardData = [
  {
    id: 1,
    image: navBack,
    title: "Услуга 1",
    text: "Sizning loyihangizda spikerlik xizmati",
    info: "Spikerlida mobilografiya bo'yicha ma'lumotlar beriladi",
  },
  {
    id: 2,
    image: navBack,
    title: "Услуга 1",
    text: "Sizning loyihangizda spikerlik xizmati",
    info: "Spikerlida mobilografiya bo'yicha ma'lumotlar beriladi",
  },
  {
    id: 3,
    image: navBack,
    title: "Услуга 1",
    text: "Sizning loyihangizda spikerlik xizmati",
    info: "Spikerlida mobilografiya bo'yicha ma'lumotlar beriladi",
  },
  {
    id: 4,
    image: navBack,
    title: "Услуга 1",
    text: "Sizning loyihangizda spikerlik xizmati",
    info: "Spikerlida mobilografiya bo'yicha ma'lumotlar beriladi",
  },
];

function Services() {
  return (
    <div>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="container flex flex-col items-center">
            <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-x-[33px] md:gap-y-[27px] lg:gap-x-[68px] lg:gap-y-11">
              {cardData.map((item) => (
                <div key={item.id}>
                  <Card
                    data={item}
                    className="relative z-10 h-[340px] w-[364px] md:h-[522px] md:w-[439px] rounded-[15px] pt-[31px] pb-5 px-[55px] overflow-hidden"
                  />
                </div>
              ))}
            </div>

            <BottomText
              className={
                "flex flex-col items-center pt-[110px] md:pt-[185px] lg:pt-[98px] pb-[62px] md:pb-98px lg:pb-[59px]"
              }
              title="XIZMATLAR"
              text="Xizmatlar toʻplami: Buyurtmachi uchun zarur xizmatlar bitta toʻplamga yigʻiladi."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
