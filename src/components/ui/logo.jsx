import { PiTrademarkRegisteredBold } from "react-icons/pi";

function Logo({className,icon}) {
  return (
    <div className="flex justify-center items-start pb-[37px]">
                  <h1 className={className}>
                    keykomania
                  </h1>
                  <PiTrademarkRegisteredBold  className={icon}/>
                </div>
  )
}

export default Logo


