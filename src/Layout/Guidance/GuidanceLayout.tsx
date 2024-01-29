import { ReactNode } from "react"
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, To } from "react-router-dom";

type LayoutPropsType = {
  prevRoute: To
  children: ReactNode
  nextBtn: ReactNode
}

const GuidanceLayout = ({ children, nextBtn, prevRoute }: LayoutPropsType) => {
  return(
    <div className ='w-full h-full flex flex-col gap-y-[58px] justify-center items-center p-6 bg-[#1C92FF]' >
      <div className="w-full flex justify-end">
      <Link to={prevRoute ? prevRoute : "/"} >
      <div id="back-btn" className="w-[48px] h-[48px] flex justify-center items-center p-[14px] rounded-2xl bg-[#FFFFFF33]">
        <FaArrowLeftLong color="#fff" size="20px" />
      </div>
      </Link>
      </div>
      { children }
      <div id = "next-btn" className="w-full flex flex-col justify-start items-between m-3"  >
      { nextBtn }
      </div >
    </div >
  )
}

export default GuidanceLayout
