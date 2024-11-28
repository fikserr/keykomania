import bon from "../../assets/images/bon.webp";
import musa from "../../assets/images/musa.webp";
import instagram from "../../assets/images/instagram.webp";
import Video from "../../icons/video";
import Stars from "../../icons/stars";

function ReviewCard({img,video,stars}) {
  return (
    <div className="relative bg-white rounded-[10px] w-[335px] min-h-[479px] md:min-h-[467px] md:w-[313px] lg:w-[390px] lg:h-[524px] border-[1px] overflow-hidden">
      <p className={video}>
        <Video />
      </p>
      <img
        src={bon}
        alt="bon"
        loading="lazy"
        className="w-full h-[300px] object-cover object-center"
      />
      <div className="relative -top-[11px] px-[25px]">
        <div className="flex items-center gap-x-[15px]">
          <div className="w-20 h-20 border-[5px] border-white rounded-[17px] overflow-hidden">
            <img
              src={musa}
              alt="musa"
              loading="lazy"
              className="w-full object-right-top"
            />
          </div>
          <div className=" flex flex-col gap-y-[5px]">
            <h5 className="font-Roboto font-bold text-lg leading-[14px] text-black">
              Frozen Foods
            </h5>
            <p className="font-Roboto font-normal text-[#9CA0AC] text-xs leading-[14px]">
              в 15 Окт. 2024
            </p>
          </div>
        </div>
        <div className="md:pt-[11px] pt-5">
            <p className="font-Roboto font-normal text-sm text-black leading-[22px]"><span className="font-Roboto font-normal text-sm text-[#0081FF] leading-[22px]">#реклама #фодблог</span> Сняли красивое видео рекламу. Спасибо <span className="font-Roboto font-normal text-sm text-[#0081FF] leading-[22px]">@Keykomania</span> !!</p>
            <img src={instagram} alt="instagram" loading="lazy" className={img}/>
            <div className={stars}>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
              <Stars/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
