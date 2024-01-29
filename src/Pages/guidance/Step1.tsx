import StartBtn from "../../Components/Modules/Guidance/TouchTest/StartBtn";
import Guidance from "../../Components/Shared/guidance/Guidance";
import TestIcon from "../../Components/Shared/guidance/TestIcon";
import GuidanceLayout from "../../Layout/Guidance/GuidanceLayout";
import Touch from "../../Utils/Icons/Touch";

export default function TouchTest() {
  return (
    <GuidanceLayout prevRoute="/" nextBtn={<StartBtn />} >
      <Guidance testHeader={
        <TestIcon testTitle="صفحه لمسی" icon={<Touch />} />
      }
        testDescription={
          <>
            <p >
              در صفحه بعد، مستطیل‌هایی را مشاهده خواهید کرد که باید با حرکت انگشت تمامی خانه‌ها را لمس کنید.
            </p>
            <p>
              بعد از لمس تمامی خانه‌ها به تست بعدی وارد خواهید شد.در صورت انصراف از تست می‌توانید دکمه X  را لمس کنید.
            </p>
            <p style={{marginTop: "16px"}}>
              برای تست‌ها ممکن است شمارش معکوس وجود داشته باشد. زمانی که آماده بودید دکمه شروع را به سمت راست بکشید.
            </p>
          </>
        }
      />
    </GuidanceLayout>
  )

}
