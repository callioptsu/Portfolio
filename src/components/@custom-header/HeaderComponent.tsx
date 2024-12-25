'use client'

// Material Ui
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface HeaderComponentProps {
  handleDrawerToggle: () => void
}

export default function HeaderComponent({
  handleDrawerToggle,
}: HeaderComponentProps) {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
