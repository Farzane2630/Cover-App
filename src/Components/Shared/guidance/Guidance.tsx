import { ReactNode } from "react";
import Info from "../../../Utils/Icons/Info";
import CustomText from "../../CustomComponents/CustomText"

export default function Guidance({testDescription, testHeader}:{testDescription: string | ReactNode, testHeader: ReactNode}) {
  return (
    <div className="flex flex-col gap-y-10 px-6 pt-6 pb-[50px] rounded-[32px] bg-[#45A6FF]">
      <div className="w-full flex flex-row gap-x-4 justify-start items-center">
         <Info />
         <CustomText value="راهنمای تست عملکرد" customColor="#fff" weight="800" size="16px" lineheight="24px" />
      </div>
      <div className="w-full flex flex-col gap-y-6 justyfy-center items-center">
        {testHeader}
        <CustomText value={testDescription} customColor="#fff" size="16px" lineheight="24px"  />
      </div>
    </div>
  )
}
