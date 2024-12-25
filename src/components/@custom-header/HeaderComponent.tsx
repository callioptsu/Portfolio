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
    <AppBar position="static">
      <LeftbarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
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
