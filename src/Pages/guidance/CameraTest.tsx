import GuidanceLayout from '../../Layout/Guidance/GuidanceLayout'
import Guidance from '../../Components/Shared/guidance/Guidance'
import TestIcon from '../../Components/Shared/guidance/TestIcon'
import Camera from '../../Utils/Icons/Camera'
import NextBtn from '../../Components/Shared/guidance/NextBtn'

export default function CameraTest() {
   return (
      <GuidanceLayout step1={false} prevRoute="/guidance/step-1" nextBtn={<NextBtn nextRoute="/step-3" />} >
         <Guidance
            testHeader={
               <TestIcon testTitle="دوربین" icon={<Camera />} />
            }
            testDescription={
               <>
                  <p>در صفحه بعد، برای تست عملکرد دوربین روی دکمه گرفتن عکس بزنید.</p>
                  <p>در صورت انصراف دکمه X  را لمس کنید.</p>
                  <p>برای تست‌ها ممکن است شمارش معکوس وجود داشته باشد. زمانی که آماده بودید دکمه ادامه را لمس کنید.</p>
               </>
            }
         />
      </GuidanceLayout>
   )
}
