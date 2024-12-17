import { Swiper, SwiperSlide } from "swiper/react";
import React, { Suspense, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getDataDynamic, ZaroProduct } from "../store/getDataDynamic";
import { REVIEWS_COLLECTION_ID } from "../config/appwriteConfig";
const ReviewCard = React.lazy(()=> import("../components/shared/reviewCard"))
const TopText = React.lazy(()=> import("../components/shared/topText"))
const Comma = React.lazy(()=> import("../icons/comma"))

function Reviews() {
  const dispatch = useDispatch()
  const {documents} = useSelector((state)=>state.getDynamic)
  useEffect(()=>{
    dispatch(ZaroProduct())
    dispatch(getDataDynamic(REVIEWS_COLLECTION_ID)) 
  },[])
  return (
    <div>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col justify-center md:container">
            <div className="flex flex-col w-full">
              <div className="w-full flex justify-start md:hidden lg:flex">
                <Comma />
              </div>
              <TopText title={"Отзывы услуг"} />

              <Swiper
                breakpoints={{
                  350: {
                    slidesPerView: 1.1,
                    spaceBetween: 5,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 1.7,
                    spaceBetween: 5,
                    
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },

                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1536: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                
                pagination={{
                  clickable: true,
                }}
                className="mySwiper pt-[23px] md:mt-[53px] lg:mt-[45px] mb-[131px] md:mb-[201px] lg:mb-[180px] w-full"
              >
                <SwiperSlide className="flex justify-center">
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"w-6 h-6 mt-[7px] md:mt-[14px] lg:mt-5"}
                    video={"absolute right-[17px] top-4 "}
                    stars={"hidden"}
                  />
                </SwiperSlide>
              </Swiper>

              <TopText title={"Наши ученики"} />

              <Swiper
                breakpoints={{
                  350: {
                    slidesPerView: 1.1,
                    spaceBetween: 5,
                    centeredSlides: true,
                    
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 5,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                  },

                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1536: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper pt-[23px] md:mt-[53px] lg:mt-[45px] mb-[131px] md:mb-[201px] lg:mb-[180px] w-full"
              >
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard
                    img={"hidden"}
                    video={"hidden"}
                    stars={
                      "flex w-full justify-center mt-[7px] md:mt-[14px] lg:mt-5"
                    }
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
