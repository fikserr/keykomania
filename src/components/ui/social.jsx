import React from "react";

const Facebook = React.lazy(()=> import("../../icons/facebook"))
const Telegram  = React.lazy(()=> import("../../icons/telegram"))
const Instagram  = React.lazy(()=> import("../../icons/instagram"))
const Youtube  = React.lazy(()=> import("../../icons/youtube"))

function Social() {
  return (
    <div className="flex flex-row items-center gap-12 xl:ml-[52px] xl:flex-col pt-[23px] md:pt-[43px] xl:p-0">
                    <Facebook/>
                    <Telegram/>
                    <Instagram/>
                    <Youtube/>
            </div>
  )
}

export default Social