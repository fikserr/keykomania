import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataDynamic, ZaroProduct } from '../store/getDataDynamic';
import { COLLECTION_ID} from '../config/appwriteConfig';

const TopText = React.lazy(()=>import('../components/shared/topText'))
const Card = React.lazy(()=>import('../components/shared/card'))
const BottomText = React.lazy(()=>import('../components/shared/bottomText'))


function Courses() {
  const dispatch = useDispatch()
  const {documents} = useSelector((state)=>state.getDynamic)
  useEffect(()=>{
    dispatch(ZaroProduct())
    dispatch(getDataDynamic(COLLECTION_ID))

  },[])
  return (
    <div>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="container flex flex-col items-center">
            <TopText title={"Курсы"}/>
            <div className="w-full grid justify-center grid-rows-1 grid-cols-1 lg:grid-rows-1 gap-y-5 md:gap-x-[33px] md:gap-y-[27px] lg:gap-x-[68px] lg:gap-y-11">
              {documents.map((item) => (
                <div key={item.id} className="lg:px-[76px] w-full">
                  <Card
                    data={item}
                    className="relative z-10 h-[340px] w-full md:h-[252px] md:w-full rounded-[15px] pt-[31px] pb-5 px-[55px] overflow-hidden"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
