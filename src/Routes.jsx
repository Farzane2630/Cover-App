import React from 'react'
import { Routes as RoutesWrapper, Route } from "react-router-dom"
import Index from "./Pages/Index"
import TouchTest from "./Pages/guidance/TouchTest"
import Step1 from "./Pages/Tests/Step1"
import SpeakerTest from "./Pages/guidance/SpeakerTest"
import Step2 from "./Pages/Tests/Step2"
import CameraTest from "./Pages/guidance/CameraTest"
import Step3 from "./Pages/Tests/Step3"
import MicTest from "./Pages/guidance/MicTest"
import Step4 from "./Pages/Tests/Step4"


export default function Routes() {
   return (
      <RoutesWrapper>
         <Route path="/" Component={Index} />
         <Route path="/guidance/step-1" Component={TouchTest} />
         <Route path="/step-1" Component={Step1} />
         <Route path="/guidance/step-2" Component={SpeakerTest} />
         <Route path="/step-2" Component={Step2} />
         <Route path="/guidance/step-3" Component={CameraTest} />
         <Route path="/step-3" Component={Step3} />
         <Route path="/guidance/step-4" Component={MicTest} />
         <Route path="/step-4" Component={Step4} />
      </RoutesWrapper>
   )
}
