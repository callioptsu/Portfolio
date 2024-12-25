// Material UI
import { Box, Typography } from '@mui/material'

// Custom
import { HeaderComponent } from '@/components'

export default function AboutMe() {
  return (
    <>
      <HeaderComponent />
      <Box component="main">
        <Typography component="h1">Sobre</Typography>
      </Box>
    </>
  )
}
