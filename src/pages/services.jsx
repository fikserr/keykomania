import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataDynamic, ZaroProduct } from '../store/getDataDynamic';
import { COLLECTION_ID_SERVICES } from '../config/appwriteConfig';
const BottomText = React.lazy(()=> import("../components/shared/bottomText"))
const Card = React.lazy(()=> import("../components/shared/card"))




function Services() {
  const dispatch = useDispatch()
  const {documents} = useSelector((state)=>state.getDynamic)
  useEffect(()=>{
    dispatch(ZaroProduct())
    dispatch(getDataDynamic(COLLECTION_ID_SERVICES))
  },[])
  return (
    <div>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="container flex flex-col items-center">
            <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-x-[33px] md:gap-y-[27px] lg:gap-x-[68px] lg:gap-y-11">
              {documents.map((item) => (
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
