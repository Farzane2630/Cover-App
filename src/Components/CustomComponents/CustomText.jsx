import React from 'react'

export default function CustomText({ size, weight, customColor, value, lineHeight, textAlign, margin,letterSpacing, className }) {
   return (
      <p
         style={{
            fontSize: size,
            fontWeight: weight ? weight : "400",
            color: customColor,
            lineHeight: lineHeight,
            textAlign: textAlign, margin: margin ? margin : 0,
             fontFamily: "Yekan-Bach !important",
letterSpacing: letterSpacing
         }}
         className={className}
      >
         {value}
      </p>
   )
}
