

function BottomText({className, title, text}) {
  return (
    <article className={className}>
              <h5 className="font-Stray font-bold text-[26px] md:text-[35px] text-[#1D1D1D] md:leading-[30px] xl:leading-[42px] pb-[11px] md:pb-[15px]">{title}</h5>

              <p className="font-Poppins font-medium text-sm md:text-[20px] text-[#1D1D1D] leading-[26px] md:leading-[43px]  xl:leading-[63px]">
               {text}
              </p>
            </article>
  )
}

export default BottomText