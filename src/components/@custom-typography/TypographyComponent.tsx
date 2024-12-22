import React, { JSX } from 'react'

// Material Ui
import { Typography } from '@mui/material'

interface ITypographyComponent {
  fontFamily: string
  text: string
  component: keyof JSX.IntrinsicElements | React.ElementType
}

export default function TypographyComponent({
  fontFamily,
  text,
  component,
}: ITypographyComponent) {
  return (
    <Typography component={component} fontFamily={fontFamily}>
      {text}
    </Typography>
  )
}
