'use client'
import { useState } from 'react'

// Material Ui
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LeftbarComponent from '../@custom-leftbar/LeftbarComponent'

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
