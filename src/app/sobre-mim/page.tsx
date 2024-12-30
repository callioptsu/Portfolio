import Image from 'next/image'

// Material UI
import { Box, Link, Typography } from '@mui/material'

// React Icons
import { IoMdDownload } from 'react-icons/io'

// Custom
import { HeaderComponent } from '@/components'

export default function AboutMe() {
  return (
    <>
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="section">
          <Image
            src="/img/photo.jpg"
            alt="antonio santana"
            width={200}
            height={200}
            style={{
              borderRadius: '100%',
              border: '2px solid rgb(0, 0, 0, 0.5)',
              margin: '20px',
            }}
            priority
          />
        </Box>
        <Box component="section">
          <Link
            href="/antonio-santana-cv.pdf"
            target="_blank"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50px',
              color: 'rgb(40, 40, 43)',
              backgroundColor: 'rgb(27, 18, 18, 0.2)',
              fontWeight: 'bold',
              marginBottom: '20px',
              border: '1px solid rgb(40, 40, 43)',
              transition: 'background-color 0.2s ease-in',
              '&:hover': {
                backgroundColor: 'rgb(27, 18, 18, 0.25)',
              },
            }}
            download
          >
            <IoMdDownload style={{ margin: '5px' }} />
            BAIXAR CV
          </Link>
        </Box>
        <Box
          component="section"
          sx={{
            width: '60%',
          }}
        >
          <Typography
            fontFamily="Montserrat"
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              textAlign: 'justify',
              color: 'rgb(40, 40, 43)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Desde os 16 anos apaixonado por tecnologia. Ao longo dos anos me
            dediquei a expandir meus conhecimentos em busca de novas
            oportunidades que me permitissem crescer profissionalmente. Tenho
            experiência em desenvolvimento front-end com React, bem como em
            back-end com Node.js e Java. Meu foco é o aprendizado contínuo que
            me fará contribuir em inúmeros projetos inovadores.
          </Typography>
        </Box>
        <Box component="section">Timeline</Box>
      </Box>
    </>
  )
}
