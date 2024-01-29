import { FaAnglesRight } from "react-icons/fa6";
import CustomText from "../../../CustomComponents/CustomText"

export default function StartBtn() {
  return (
    <div className="w-full h-[80px] flex flex-row justify-center items-center gap-4 p-3 bg-white shadow-md rounded-2xl">
      <div className="w-full h-full flex flex-row justify-end items-center gap-x-[26px] bg-[#EBF8FC] rounded-2xl">
<CustomText value="به سمت راست بکشید" customColor="#B3B1B8" size="12px" weight="600" lineHeight="16px" />
      <FaAnglesRight color="#B3B1B8" size="16px" />
      <div className="h-full p-4 bg-blue-500 shadow-md rounded-xl flex justify-center items-center gap-3">
<CustomText value="شروع" customColor="#fff" size="18px" weight="800" lineHeight="24px" />      
      </div>
    </div>
    </div>
  )
}
