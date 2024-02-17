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
   textAlign?: string 
}
export default function CustomText({ size, weight, customColor, value, lineHeight, margin, letterSpacing, textAlign, className }: PropsType) {
   return (
      <p
         style={{
            fontSize: size,
            fontWeight: weight ? weight : "400",
            color: customColor,
            lineHeight: lineHeight,
            margin: margin ? margin : 0,
            fontFamily: "Yekan-Bach !important",
            letterSpacing: letterSpacing,
            // @ts-ignore
            textAlign: textAlign
         }}
         className={className}
      >
         {value}
      </p>
   )
}
