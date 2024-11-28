function Billing() {
  return (
    <div>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px] pt-[177px] md:pt-[270px] lg:pt-[250px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full">
          <div className="container pb-[100px]">
            <div className="relative w-full min-h-[991px] lg:px-[74px] md:min-h-[851px] lg:min-h-[851px] rounded-[10px] overflow-hidden">
              <div className="absolute inset-0 bg-billing-back  blur-[3px]  bg-cover  bg-left-top"></div>
              <div className="absolute inset-0 bg-[#9A6240] opacity-50"></div>
              <div className="relative z-10 w-full h-full min-h-[991px] md:min-h-[851px] lg:min-h-[851px] md:px-[23px] lg:px-[30] md:py-[33px] flex flex-col md:flex-row items-center">
                <div className="w-full md:w-[406px] lg:w-[486px] md:min-h-[632px] rounded-br-[10px] md:rounded-br-[0px] md:rounded-tl-[10px] rounded-bl-[10px] bg-white opacity-90 shadow-4xl px-[20px] md:px-[13px] md:py-[33px] lg:px-6">
                  <div className="top px-[11px] pb-[18px] md:pb-[48px] lg:pb-[41px]">
                    <h5 className="font-Poppins font-normal text-[15px] leading-[22px] md:text-[25px] text-black md:leading-[22px]">
                      Покупка курса
                    </h5>
                    <div className=" pt-[3px] md:pt-[19px] lg:pt-10">
                      <p className="font-Poppins font-bold text-[25px] md:text-4xl leading-[54px]">$500</p>
                      <p className="font-Poppins font-normal text-sm leading-[22px]">10 уроков 2 месяца</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
