// Components
import { HeaderComponent } from '@/components'

// Material Ui
import { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box component="main">
      <HeaderComponent />
      <Typography component="h1">Name</Typography>
    </Box>
  )
}
