'use client'

import { useParams } from 'next/navigation'

// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Custom
import HeaderComponent from '@/components/@custom-header/HeaderComponent';

export default function Project() {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <HeaderComponent />
      <Box component="main">
        <Typography component="h1">{id}</Typography>
      </Box>
    </>
  )
}
