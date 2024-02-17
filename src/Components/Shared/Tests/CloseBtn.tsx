import { RiCloseFill } from "react-icons/ri";

function CloseBtn() {
  return <button
    onTouchStart={() => console.log("close btn")}
    className="flex flex-row justify-center items-center h-12 w-12 p-[14px] rounded-xl backdrop-blur-[16px] bg-[#00000052]">
    <RiCloseFill size="60px" color="#fff" />
  </button>
}

export default CloseBtn