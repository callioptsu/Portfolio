import React, { JSX } from 'react'

// Material Ui
import { Typography } from '@mui/material'

interface ITypographyComponent {
  fontFamily: string
  text: string
  component: keyof JSX.IntrinsicElements | React.ElementType
  fontSize: string
  fontWeight: string
}

export default function TypographyComponent({
  fontFamily,
  text,
  component,
  fontSize,
  fontWeight,
}: ITypographyComponent) {
  return (
    <Typography
      component={component}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  )
}
