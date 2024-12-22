// Material Ui
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

// Custom
import TypographyComponent from '../@custom-typography/TypographyComponent'

export default function ComponentHeader() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          {['Projetos', 'Sobre-mim', 'Contatos'].map((values, idx) => {
            return (
              <TypographyComponent
                key={idx}
                component="a"
                fontFamily="Poppins"
                text={values}
              />
            )
          })}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
