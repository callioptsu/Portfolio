'use client'

import { useState } from 'react'

// Components
import { HeaderComponent, LeftbarComponent } from '@/components'

// Material Ui
import { Box, Typography } from '@mui/material'

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <Box component="main">
      <HeaderComponent handleDrawerToggle={handleDrawerToggle} />
      <LeftbarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <Typography component="h1">Name</Typography>
    </Box>
  )
}
