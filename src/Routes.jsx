
import { Routes as RoutesWrapper, Route } from "react-router-dom"
import Index from "./Pages/Index"
import Step1 from "./Pages/guidance/Step1"
import Step1 from "./Pages/Tests/Step1"
import Step2 from "./Pages/guidance/Step2"
import Step2 from "./Pages/Tests/Step2"
import Step3 from "./Pages/guidance/Step3"
import Step3 from "./Pages/Tests/Step3"
import Step4 from "./Pages/guidance/Step4"
import Step4 from "./Pages/Tests/Step4"


export default function Routes() {
   return (
      <RoutesWrapper>
         <Route path="/" Component={Index} />
         <Route path="/guidance/step-1" Component={Step1} />
         <Route path="/step-1" Component={Step1} />
         <Route path="/guidance/step-2" Component={Step2} />
         <Route path="/step-2" Component={Step2} />
         <Route path="/guidance/step-3" Component={Step3} />
         <Route path="/step-3" Component={Step3} />
         <Route path="/guidance/step-4" Component={Step4} />
         <Route path="/step-4" Component={Step4} />
      </RoutesWrapper>
   )
}
