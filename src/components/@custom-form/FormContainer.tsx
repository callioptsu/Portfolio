import React, { ReactNode } from 'react'

// MUI UI
import Container from '@mui/material/Container'

interface Props {
  children: ReactNode
  formAction: (formData: FormData) => void
}

export default function FormContainer({ children, formAction }: Props) {
  return (
    <Container
      component="form"
      action={formAction}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
      }}
    >
      {children}
    </Container>
  )
}
