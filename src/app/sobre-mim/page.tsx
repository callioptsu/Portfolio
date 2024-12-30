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
            width={150}
            height={150}
            style={{
              borderRadius: '100%',
              border: '2px solid rgb(0, 0, 0, 0.5)',
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
              border: '2px solid red',
            }}
            download
          >
            <IoMdDownload />
            BAIXAR CV
          </Link>
        </Box>
        <Box component="section">
          <Typography fontFamily="Poppins" variant="subtitle2">
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
