import Toast from "../Components/Modules/Tests/TouchTest/Toast"
import CloseBtn from "../Components/Shared/Tests/CloseBtn"
import Timer from "../Components/Shared/Tests/Timer"

function Index() {
  // @ts-ignore
  return (
    <div className="w-[375px] h-full bg-blue-100">
   <Toast />
   <Timer minute={1} second={20} />
   <CloseBtn />
    </div>
  )


}

export default Index