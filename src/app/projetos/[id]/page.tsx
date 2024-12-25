'use client'

import { useParams } from 'next/navigation'

// Material UI
import { Box, Typography } from '@mui/material'

export default function Project() {
  const { id } = useParams<{ id: string }>()

  return (
    <Box component="main">
      <Typography component="h1">{id}</Typography>
    </Box>
  )
}
