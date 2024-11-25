import Facebook from "../../icons/facebook";
import Telegram from "../../icons/telegram";
import Instagram from "../../icons/instagram";
import Youtube from "../../icons/youtube";

function Social() {
  return (
    <div className="flex flex-row gap-12 xl:ml-[52px] xl:flex-col pt-[23px] md:pt-[43px] xl:p-0">
                    <Facebook/>
                    <Telegram/>
                    <Instagram/>
                    <Youtube/>
            </div>
  )
}

export default Social