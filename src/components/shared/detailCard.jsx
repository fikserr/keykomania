import { addProduct, clearProducts } from "../../store/addBasket";
import Button from "../ui/button";
import { useDispatch } from "react-redux";

function DetailCard({ dataDetail }) {
  const { Image, Description, Details, Price } = dataDetail[0];
  const dispatch = useDispatch();

  function handleAddProduct() {
    console.log(dataDetail);
    
    dispatch(addProduct(dataDetail[0]));
  }
  return (
    <div>
      <div className="relative min-w-[384px] lg:max-h-[939px] lg:w-[1094px] mg:my-[21px] lg:my-[76px] rounded-[15px]  overflow-hidden">
        <div className="absolute left-0 top-0 z-0 bg-[#7E5943]  h-full w-full ">
          <img
            src={Image}
            alt="image"
            loading="lazy"
            className="h-full w-full opacity-20 object-cover object-center"
          />
        </div>
        <div className="relative z-10 w-full lg:h-full p-8 md:p-9 md:px-16" >
          <div className="relative z-20 w-full h-full content flex flex-col justify-between items-start">
            <h3 className="font-Poppins font-semibold text-[30px] md:text-[35px] leading-[50px] text-white">
              {Details}
            </h3>
            <div className="flex flex-col items-center md:items-start lg:flex-row lg:justify-between w-full py-6">
              <div className="flex flex-col items-center pb-2">
                <div className="flex flex-col justify-start">
                  <p className="pt-7 font-Poppins font-normal text-xs leading-6 text-[#EFEDE8CC]">
                    {Description}
                  </p>
                  <ul className="flex flex-col pt-3">
                    <li className="font-Poppins font-normal text-xs leading-6 text-[#EFEDE8CC]">
                      {Description}
                    </li>
                  </ul>
                </div>
              </div>
              <img
                src={Image}
                alt="image"
                loading="lazy"
                className=" w-[317px] h-[427px]  md:h-full md:w-[374px] object-cover object-center rounded-2xl"
              />
            </div>
            <div className="w-full flex justify-end">
              {
                Price ? <button onClick={()=>handleAddProduct()}>
                <Button
                  className={
                    "relative h-[41px] w-[150px] rounded-[10px] bg-white flex items-center justify-center"
                  }
                  text={"Купить"}
                />
              </button> : ""
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
