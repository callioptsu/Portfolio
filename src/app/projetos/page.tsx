// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Custom
import HeaderComponent from '@/components/@custom-header/HeaderComponent'

export default function Projects() {
  return (
    <>
      <Box sx={{ height: '10vh' }} />
      <HeaderComponent />
      <Box component="main">
        <Typography component="h1">Projetos</Typography>
      </Box>
    </>
  )
}
