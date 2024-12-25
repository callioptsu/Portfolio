// Material Ui
import { AppBar, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

// Custom
import LinkComponent from '../@custom-links/LinkComponent'

export default function HeaderComponent() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
          }}
        >
          <IconButton>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          {['Projetos', 'Sobre-mim', 'Contatos'].map((values, idx) => {
            return (
              <LinkComponent
                url={values.toLowerCase()}
                key={idx}
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
