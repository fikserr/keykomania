function TopText({title, text}) {
  return (
    <div className="title">
      <h1 className="font-Stray font-bold text-[26px] leading-[31px] md:text-[35px] text-center md:leading-[42px] pb-3">
        {title}
      </h1>
      <p className="font-Poppins font-medium text-center text-base leading-[34px] md:text-[20px] md:leading-[34px] px-[15px] lg:px-[200px]">
       {text}
      </p>
    </div>
  );
}

export default TopText;
