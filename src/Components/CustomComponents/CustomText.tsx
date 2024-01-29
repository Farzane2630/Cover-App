import React, { ReactNode } from 'react'

type PropsType = {
   size?: string
   weight?: string
   customColor?: string
   value?: string | ReactNode
   lineHeight?: string
   margin?: string
   letterSpacing?: string
   className?: string
}
export default function CustomText({ size, weight, customColor, value, lineHeight, margin, letterSpacing, className }: PropsType) {
   return (
      <p
         style={{
            fontSize: size,
            fontWeight: weight ? weight : "400",
            color: customColor,
            lineHeight: lineHeight,
            margin: margin ? margin : 0,
            fontFamily: "Yekan-Bach !important",
            letterSpacing: letterSpacing
         }}
         className={className}
      >
         {value}
      </p>
   )
}
