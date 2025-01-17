'use client'

import { useParams } from 'next/navigation'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Project() {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Box component="main">
        <Typography component="h1">{id}</Typography>
        <Typography component="h1">Em desenvolvimento.</Typography>
      </Box>
    </>
  )
}
