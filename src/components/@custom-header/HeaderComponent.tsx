'use client'
import { useState } from 'react'

// Components
import LeftbarComponent from '../@custom-leftbar/LeftbarComponent'

// MUI UI
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu'

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgb(27, 18, 18)',
      }}
    >
      <LeftbarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon sx={{ color: 'white', margin: '0 0 0 -20vh' }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
