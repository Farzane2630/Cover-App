import GuidanceLayout from '../../Layout/Guidance/GuidanceLayout'
import Guidance from '../../Components/Shared/guidance/Guidance'
import TestIcon from '../../Components/Shared/guidance/TestIcon'
import Speaker from '../../Utils/Icons/Speaker'
import NextBtn from '../../Components/Shared/guidance/NextBtn'

export default function SpeakerTest() {
   return (
      <GuidanceLayout step1={false} prevRoute="/guidance/step-1" nextBtn={<NextBtn nextRoute="/step-2" />} >
         <Guidance
         testHeader={
            <TestIcon testTitle="صدا" icon={<Speaker />} />
          }
            testDescription={
               <>
                  <p>در صفحه بعد، از بلندگوی موبایل شما صدایی پخش می‌شود. لطفا عددی که می‌شنوید را در محل مربوط به آن وارد کنید.</p>
                  <p>در صورت انصراف دکمه X  را لمس کنید.</p>
                  <p>برای تست‌ها ممکن است شمارش معکوس وجود داشته باشد. زمانی که آماده بودید دکمه ادامه را لمس کنید.</p>
               </>
            }
         />
      </GuidanceLayout>
   )
}
