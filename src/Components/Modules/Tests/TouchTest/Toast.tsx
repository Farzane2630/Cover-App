import { FaCircleExclamation } from "react-icons/fa6";
import CustomText from "../../../CustomComponents/CustomText";
import { IoClose } from "react-icons/io5";

export default function Toast() {
  return (
    <div className="w-full flex flex-row justify-between items-center pr-4 pl-1 py-2 mt-[54px] mx-[8px] rounded-xl bg-white border border-solid border-[#c2e2ff]">
      <FaCircleExclamation fontSize="20px" fill="#0076e2" color="#fff" />
      <div className="flex flex-col justify-center items-start">
      <CustomText
      textAlign="right"
      value="تست صفحه لمسی"
      customColor="#0084ff"
      size="14px"
      weight="800"
      lineHeight="1.71"
      />
      <CustomText 
      value="لطفا تمامی خانه‌های روی صفحه را لمس کنید." 
      textAlign="right"
      customColor="#4f4b5c"
      size="10px"
      weight="600"
      lineHeight="1.6"
      />
      </div>
      <div className="divider w-[1px] h-[17px] bg-[#c2e2ff]" ></div>
      <IoClose fontSize="20px" color="#0076e2" onTouchStart={()=>console.log("touched")} />
    </div>
  )
}
