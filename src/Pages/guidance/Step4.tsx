import GuidanceLayout from '../../Layout/Guidance/GuidanceLayout'
import Guidance from '../../Components/Shared/guidance/Guidance'
import TestIcon from '../../Components/Shared/guidance/TestIcon'
import Microphone from '../../Utils/Icons/Microphone'
import NextBtn from '../../Components/Shared/guidance/NextBtn'

export default function MicTest() {
   return (
      <GuidanceLayout prevRoute="/guidance/step-2" nextBtn={<NextBtn nextRoute="/step-4" />} >
         <Guidance
            testHeader={
               <TestIcon testTitle="میکروفن" icon={<Microphone />} />
            }
            testDescription={
               <>
                  <p>در صفحه بعد، برای تست عملکرد میکروفن، دکمه ضبط صدا را نگه دارید و با صدای بلند عددی که نمایش داده می‌شود را بخوانید.</p>
                  <p>در صورت انصراف دکمه X  را لمس کنید.</p>
                  <p>برای تست‌ها ممکن است شمارش معکوس وجود داشته باشد. زمانی که آماده بودید دکمه ادامه را لمس کنید.</p>
               </>
            }
         />
      </GuidanceLayout>
   )
}
