'use client'

import Image from 'next/image'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Custom
import HeaderComponent from '@/components/@custom-header/HeaderComponent'
import TimelineComponent from '@/components/@custom-timeline/TimelineComponent'

// Data
import { cv } from './cv'

// Style
import './page.css'

export default function AboutMe() {
  const { courses } = cv

  return (
    <>
      <Box sx={{ height: '10vh' }} />
      <HeaderComponent />
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'black',
          right: '150vh',
          width: '40vh',
          height: '40vh',
          borderRadius: '50%',
          filter: 'blur(0px)',
          animation: 'circleAnimation 25s ease-in-out infinite',
          opacity: 0.2,
          zIndex: -1,
        }}
      />
      <Box component="main" sx={{ marginBottom: '10vh' }}>
        <Box
          component="section"
          sx={{
            margin: '15vh 10vh 10vh 0',
          }}
        >
          <Box component="section" sx={{ marginTop: '8vh' }}>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="h1"
              margin="0 0 0 4vh"
            >
              BIOGRAFIA
            </Typography>
          </Box>
          <Image
            src="/img/photo.jpg"
            alt="antonio santana"
            width={220}
            height={220}
            style={{
              float: 'right',
              margin: '-10vh 10vh 0 0',
              borderRadius: '50%',
            }}
            priority
          />
          <Box
            sx={{
              float: 'left',
              width: '30vh',
              height: '30vh',
              margin: '10px 0px 10px 0',
              shapeOutside: 'circle(50% at 20%)',
              clipPath: 'circle(50% at 0%)',
              background: 'black',
            }}
          />
          <Typography
            fontFamily="Montserrat"
            variant="subtitle1"
            sx={{
              fontWeight: '600',
              textAlign: 'start',
              padding: '20px',
              borderRadius: '5px',
              width: '60%',
              color: 'rgb(0, 0, 0)',
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
        <Box component="section">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="h1"
              margin="0 0 0 4vh"
            >
              TIMELINE
            </Typography>
          </Box>
          <Box component="section" sx={{ width: '100%' }}>
            <Box
              component="section"
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {
                //   <Box
                //     component="section"
                //     sx={{
                //       display: 'flex',
                //       justifyContent: 'space-around',
                //       marginTop: '50px',
                //       marginBottom: '25px',
                //     }}
                //   >
                //     <Typography fontFamily="Poppins" variant="h4">
                //       EXPERIÊNCIA
                //     </Typography>
                //   </Box>
                //   <Box>
                //     {courses.map(
                //       ({
                //         id,
                //         isFinished,
                //         courseUrl,
                //         institution,
                //         name,
                //         finishedDate,
                //         certificateUrl,
                //       }) => {
                //         const position: 'left' | 'right' =
                //           id % 2 === 0 ? 'right' : 'left'
                //         return (
                //           <TimelineComponent
                //             key={id}
                //             position={position}
                //             isFinished={isFinished}
                //             courseUrl={courseUrl}
                //             institution={institution}
                //             name={name}
                //             finishedDate={finishedDate}
                //             certificateUrl={certificateUrl}
                //           />
                //         )
                //       },
                //     )}
                //   </Box>
              }
              <Box
                component="section"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '50px',
                  marginBottom: '25px',
                }}
              >
                <Typography fontFamily="Poppins" variant="h4">
                  CURSOS
                </Typography>
              </Box>
              <Box>
                {courses.map(
                  ({
                    id,
                    isFinished,
                    courseUrl,
                    institution,
                    name,
                    finishedDate,
                    certificateUrl,
                  }) => {
                    const position: 'left' | 'right' =
                      id % 2 === 0 ? 'right' : 'left'

                    return (
                      <TimelineComponent
                        key={id}
                        position={position}
                        isFinished={isFinished}
                        courseUrl={courseUrl}
                        institution={institution}
                        name={name}
                        finishedDate={finishedDate}
                        certificateUrl={certificateUrl}
                      />
                    )
                  },
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
