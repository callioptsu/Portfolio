// Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Custom
import HeaderComponent from '@/components/@custom-header/HeaderComponent'

export default function Contacts() {
  return (
    <>
      <HeaderComponent />
      <Box component="main">
        <Typography component="h1">Contatos</Typography>
      </Box>
    </>
  )
}
