// Material UI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// Custom
import HeaderComponent from '@/components/@custom-header/HeaderComponent'
import FormContainer from '@/components/@custom-form/FormContainer'
import CommentComponent from '@/components/@custom-comment/CommentComponent'

// Actions
import emailFormAction from './actions/emailFormAction'

export default function Contacts() {
  return (
    <>
      <Box sx={{ height: '10vh' }} />
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '90vh',
        }}
      >
        <FormContainer formAction={emailFormAction}>
          <CommentComponent />
        </FormContainer>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '100%',
          }}
        >
          <Typography>Contatos</Typography>
        </Container>
      </Box>
    </>
  )
}
