'use client'
// Components
import { HeaderComponent } from '@/components'

// Material Ui
import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <Box component="main">
        <Typography component="h1">Name</Typography>
      </Box>
    </>
  )
}
