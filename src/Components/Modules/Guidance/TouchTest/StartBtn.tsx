import { FaAnglesRight } from "react-icons/fa6";
import CustomText from "../../../CustomComponents/CustomText"
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useSwipeable } from 'react-swipeable';

export default function StartBtn() {
  const [swiped, setSwiped] = useState(false);
  const [buttonTranslateX, setButtonTranslateX] = useState(0);
  const parentRef = useRef(null);
  const navigate = useNavigate()


  const handlers = useSwipeable({
    onSwipedRight: () => {
      handleSwipe();
    }

  });

  const handleSwipe = () => {
    setSwiped(true);
    // @ts-ignore
    const parentWidth = parentRef.current.offsetWidth;
    const swipeDistance = parentWidth - 73;
    setButtonTranslateX(swipeDistance);
  
    setTimeout(() => {
      navigate('/test-1');
    }, 900);
  };

  return (
    <div className="w-full h-[80px] flex flex-row justify-center items-center gap-4 p-3 bg-white shadow-md rounded-2xl">
      <div
        ref={parentRef}
        className="w-full h-full flex flex-row justify-end items-center gap-x-4 bg-[#EBF8FC] rounded-2xl">
        <CustomText value="به سمت راست بکشید" customColor="#B3B1B8" size="12px" weight="600" lineHeight="16px" />
        <FaAnglesRight color="#B3B1B8" size="16px" />
        <button
          {...handlers}
          style={{
            transform: `translateX(${buttonTranslateX}px)`,
            transition: "transform 0.5s ease-in-out"
          }}
          className="h-full p-4 bg-blue-500 shadow-md rounded-xl flex justify-center items-center gap-3">
          <CustomText value="شروع" customColor="#fff" size="18px" weight="800" lineHeight="24px" />
        </button>
      </div>
    </div>
  )
}
