import imageTop from "../../assets/images/keykomania5x5.webp";
import CheckBlue from "../../icons/checkBlue";
import instagram from "../../assets/images/instagram.webp"
import Video from "../../icons/video";

function CardInsta({data}) {
  return (
    <div className="w-[390px] rounded-[10px] flex flex-col p-5 bg-white">
      <div className="top flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={imageTop}
            alt="image"
            loading="lazy"
            className="w-[50px] h-[50px] rounded-[10px]"
          />
          <div className=" flex flex-col gap-[2px]">
            <h5 className="flex items-start gap-[6px] font-Roboto font-bold text-lg leading-5">
              Keykomania
              <span> 
                <CheckBlue /> 
              </span>
            </h5>
            <p className=" font-Roboto font-normal text-xs text-[#464646]">{data.date}</p>
          </div>
        </div>
        <img src={instagram} alt="instagram image" loading="lazy"  className="w-6 h-6"/>

      </div>

      <div className=" w-[350px] h-[350px] my-5 relative">
            <img src={data.img} alt="bon image" loading="lazy" className=" w-full h-full rounded-[10px] object-cover object-center" />
            <Video />
      </div>


      <p className="font-Roboto font-normal text-black text-sm"><span className="text-[#76BCE3]">{data.link}</span>{data.text}</p>
    </div>
  );
}

export default CardInsta;
