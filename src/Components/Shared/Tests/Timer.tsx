import { useEffect, useState } from "react"
import CustomText from "../../CustomComponents/CustomText"

function Timer({ minute, second }: { minute: number, second: number }) {
   const [min, setMin] = useState<number>(minute)
   const [sec, setSec] = useState<number>(second)

   useEffect(() => {
      setTimeout(() => {
         min > 0 && setMin(min - 1)
      }, 60000)

      setTimeout(() => {
         sec === 0 && min > 0 ?
            setSec(59) :
            min === 0 && sec === 0 ?
               setSec(0) :
               setSec(sec - 1)
      }, 1000)
   }, [min, sec])
   return (
      <div>
         <CustomText value={`
            ${sec > 10 ? sec : `0${sec}`}
            :
            ${min > 10 ? min : `0${min}`}
         `} />
      </div>
   )
}

export default Timer