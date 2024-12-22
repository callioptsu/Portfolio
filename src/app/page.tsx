// Components
import { ComponentHeader } from '@/components'

// Material Ui
import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box component="main">
      <ComponentHeader />
      <Typography component="h1">Name</Typography>
    </Box>
  )
}
