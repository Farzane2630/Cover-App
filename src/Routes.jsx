
import { Routes as RoutesWrapper, Route } from "react-router-dom"
import Index from "./Pages/Index"
import Step1 from "./Pages/guidance/Step1"
import Touch from "./Pages/Tests/Touch"
import Step2 from "./Pages/guidance/Step2"
import Speaker from "./Pages/Tests/Speaker"
import Step3 from "./Pages/guidance/Step3"
import RearCamera from "./Pages/Tests/RearCamera"
import FrontCamera from "./Pages/Tests/FrontCamera"
import Step4 from "./Pages/guidance/Step4"
import Mic from "./Pages/Tests/Mic"


export default function Routes() {
   return (
      <RoutesWrapper>
         <Route path="/" Component={Index} />
         <Route path="/guidance/step-1" Component={Step1} />
         <Route path="/test-1" Component={Touch} />
         <Route path="/guidance/step-2" Component={Step2} />
         <Route path="/test-2" Component={Speaker} />
         <Route path="/guidance/step-3" Component={Step3} />
         <Route path="/test-3-1" Component={RearCamera} />
         <Route path="/test-3-2" Component={FrontCamera} />
         <Route path="/guidance/step-4" Component={Step4} />
         <Route path="/test-4" Component={Mic} />
      </RoutesWrapper>
   )
}
