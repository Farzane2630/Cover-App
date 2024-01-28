import { Link, To } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CustomText from "../../CustomComponents/CustomText"

const NextBtn = ({ nextRoute }: { nextRoute: string }) => {
   return (
      <Link to={nextRoute}>
         <button className="w-full h-[56px] flex flex-row justify-center items-center gap-x-4 p-4 border-[1px] border-[#ECECED] rounded-[12px] bg-white">
            <FaArrowRight color="#4F4B5C" size="24px" />
            <CustomText value="ادامه" customColor="#4F4B5C" size="18px" weight="800" lineHeight="24px" />
         </button>
      </Link>
   )
}

export default NextBtn
