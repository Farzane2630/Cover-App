import { ReactNode } from "react";
import CustomText from "../../CustomComponents/CustomText";

function TestIcon({icon, testTitle}: {icon: ReactNode, testTitle: string}) {
  return (
    <div className="w-[72px] h-[72px] flex flex-col justify-center items-center gap-y-1 p-1 border-[2px] border-[#F3F3F4] rounded-full bg-white">
      <div className="w-[20px] h-[20px]">
      {icon}
      </div>
      <CustomText value={testTitle} letterSpacing="-2%" customColor="#4F4B5C" size="10px" lineHeight="16px" />
    </div>
  )
}

export default TestIcon