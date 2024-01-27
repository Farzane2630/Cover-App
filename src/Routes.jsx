import React from 'react'
import { Routes as RoutesWrapper, Route } from "react-router-dom"
import Index from "./Pages/Index"
import Step1 from "./Pages/Step1"


export default function Routes() {
   return (
      <RoutesWrapper>
         <Route path="/" Component={Index} />
         <Route path="/step-1" Component={Step1} />
      </RoutesWrapper>
   )
}
